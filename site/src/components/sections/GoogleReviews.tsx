"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { doctorReviews } from "@/data/reviews";

function GoogleLogo() {
  return (
    <svg viewBox="0 0 272 92" width="80" height="27" aria-label="Google">
      <path
        fill="#4285F4"
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#EA4335"
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#FBBC05"
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      />
      <path
        fill="#4285F4"
        d="M225 3v65h-9.5V3h9.5z"
      />
      <path
        fill="#34A853"
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      />
      <path
        fill="#EA4335"
        d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.21z"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="bg-warm-grey py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {doctorReviews.map((doc) => (
            <DoctorReviewBlock key={doc.doctorSlug} doctor={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorReviewBlock({
  doctor,
}: {
  doctor: (typeof doctorReviews)[0];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <GoogleLogo />
        <div>
          <p className="text-sm font-bold text-heading">{doctor.doctorName}</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm font-bold text-heading">
              {doctor.rating.toFixed(1)}
            </span>
            <StarRating rating={Math.round(doctor.rating)} />
            <span className="text-xs text-body/60">
              ({doctor.totalReviews}+ reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll reviews left"
          className="absolute -left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-primary hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll reviews right"
          className="absolute -right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-primary hover:text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doctor.reviews.map((review, i) => (
            <div
              key={i}
              className="w-[280px] flex-shrink-0 snap-start rounded-lg bg-white p-5 shadow-sm"
            >
              <StarRating rating={review.stars} />
              <p className="mt-3 text-sm leading-relaxed text-body line-clamp-4">
                {review.text}
              </p>
              <div className="mt-3 border-t border-gray-100 pt-3">
                <p className="text-sm font-bold text-heading">{review.name}</p>
                <p className="text-xs text-body/60">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
