"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star, ExternalLink, X } from "lucide-react";
import { doctorReviews, type GoogleReview } from "@/data/reviews";

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
      <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z" />
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
          className={`h-4 w-4 ${i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */
export default function GoogleReviews() {
  return (
    <section className="bg-warm-grey py-14 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-6 overflow-hidden">
        <div className="space-y-14">
          {doctorReviews.map((doc) => (
            <DoctorReviewMarquee key={doc.doctorSlug} doctor={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Doctor Review Marquee                                              */
/* ------------------------------------------------------------------ */
function DoctorReviewMarquee({
  doctor,
}: {
  doctor: (typeof doctorReviews)[0];
}) {
  const [hoveredReview, setHoveredReview] = useState<{
    review: GoogleReview;
    rect: DOMRect;
  } | null>(null);
  const [paused, setPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate reviews for seamless loop
  const reviews = [...doctor.reviews, ...doctor.reviews];

  return (
    <div>
      {/* Header row */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Doctor image */}
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
            <Image
              src={doctor.doctorImage}
              alt={doctor.doctorName}
              fill
              className="object-cover object-top"
              sizes="48px"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <p className="text-sm font-bold text-heading">
                {doctor.doctorName}
              </p>
              <GoogleLogo />
            </div>
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

        {/* Read More Reviews button */}
        <a
          href={doctor.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary"
        >
          Read More Reviews
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Marquee container */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          setHoveredReview(null);
        }}
      >
        <div
          ref={marqueeRef}
          className="flex gap-4"
          style={{
            animation: `scroll-marquee-reviews 30s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {reviews.map((review, i) => (
            <ReviewCard
              key={`${review.name}-${i}`}
              review={review}
              onHover={(rect) => setHoveredReview({ review, rect })}
              onLeave={() => setHoveredReview(null)}
            />
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-warm-grey to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-warm-grey to-transparent" />
      </div>

      {/* Hover popup */}
      {hoveredReview && (
        <ReviewPopup
          review={hoveredReview.review}
          doctorName={doctor.doctorName}
          triggerRect={hoveredReview.rect}
          onClose={() => setHoveredReview(null)}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Review Card (in marquee)                                           */
/* ------------------------------------------------------------------ */
function ReviewCard({
  review,
  onHover,
  onLeave,
}: {
  review: GoogleReview;
  onHover: (rect: DOMRect) => void;
  onLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => {
        if (cardRef.current) onHover(cardRef.current.getBoundingClientRect());
      }}
      onMouseLeave={onLeave}
      className="w-[300px] flex-shrink-0 cursor-pointer rounded-lg bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div>
        <p className="text-sm font-bold text-heading">{review.name}</p>
        <div className="mt-0.5 flex items-center gap-2">
          <StarRating rating={review.stars} />
          <span className="text-xs text-body/50">{review.date}</span>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-body line-clamp-3">
        {review.text}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Review Popup (on hover)                                            */
/* ------------------------------------------------------------------ */
function ReviewPopup({
  review,
  doctorName,
  triggerRect,
  onClose,
}: {
  review: GoogleReview;
  doctorName: string;
  triggerRect: DOMRect;
  onClose: () => void;
}) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (!popupRef.current) return;
    const popup = popupRef.current;
    const popupRect = popup.getBoundingClientRect();

    // Center horizontally on the card
    let left =
      triggerRect.left + triggerRect.width / 2 - popupRect.width / 2;
    // Position above the card
    let top = triggerRect.top - popupRect.height - 12;

    // Keep within viewport
    const pad = 16;
    if (left < pad) left = pad;
    if (left + popupRect.width > window.innerWidth - pad)
      left = window.innerWidth - pad - popupRect.width;
    if (top < pad) top = triggerRect.bottom + 12;

    setPos({ top, left });
  }, [triggerRect]);

  return (
    <div
      ref={popupRef}
      className="fixed z-50 w-[360px] animate-fade-in rounded-xl bg-white p-6 shadow-2xl ring-1 ring-black/10"
      style={{ top: pos.top, left: pos.left }}
      onMouseLeave={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-body/40 transition-colors hover:bg-warm-grey hover:text-heading"
      >
        <X className="h-3.5 w-3.5" />
      </button>

      {/* Reviewer info */}
      <div>
        <p className="font-heading text-base font-bold text-heading">
          {review.name}
        </p>
        <p className="mt-0.5 text-xs text-body/60">
          Review for {doctorName}
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <StarRating rating={review.stars} />
          <span className="text-xs text-body/50">{review.date}</span>
        </div>
      </div>

      {/* Full review text */}
      <p className="mt-4 text-sm leading-relaxed text-body">{review.text}</p>

      {/* Google attribution */}
      <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-3">
        <GoogleLogo />
        <span className="text-xs text-body/40">Verified Review</span>
      </div>
    </div>
  );
}
