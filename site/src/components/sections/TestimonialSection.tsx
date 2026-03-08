"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  text: string;
  date: string;
  stars: number;
}

const reviews: Review[] = [
  {
    name: "Jessica M.",
    text: "He truly listened to what I wanted and gave me results that look so natural and beautiful. From the very first consultation, I felt comfortable and confident in my decision. The entire team was incredible.",
    date: "March 2025",
    stars: 5,
  },
  {
    name: "Emily R.",
    text: "My breasts look fuller and more youthful, but still very natural. Dr. Sosin took the time to understand exactly what I was looking for and delivered results beyond my expectations.",
    date: "January 2025",
    stars: 5,
  },
  {
    name: "Jamie L.",
    text: "Fat transfer breast augmentation was exactly what I wanted, and the results are completely natural. I could not be happier with my experience at Specialized Plastic Surgery.",
    date: "February 2025",
    stars: 5,
  },
  {
    name: "Rita S.",
    text: "The surgery and recovery were much easier than I expected, and my results exceeded my expectations. I felt cared for every step of the way. Highly recommend this practice.",
    date: "December 2024",
    stars: 5,
  },
  {
    name: "Angela T.",
    text: "Dr. Devulapalli is an incredibly skilled surgeon. My breast reconstruction results are amazing, and I finally feel whole again after my cancer journey. I am forever grateful.",
    date: "November 2024",
    stars: 5,
  },
  {
    name: "Karen W.",
    text: "Absolutely wonderful experience from start to finish. The office staff is warm and welcoming, and both surgeons are truly artists. My tummy tuck results are phenomenal.",
    date: "October 2024",
    stars: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-5 w-5 ${filled ? "text-gold" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} filled />
            ))}
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Over 250 Five-Star Reviews
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll reviews left"
            className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-heading shadow-md transition-colors hover:bg-primary hover:text-white sm:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll reviews right"
            className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-heading shadow-md transition-colors hover:bg-primary hover:text-white sm:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-[320px] flex-shrink-0 snap-start rounded-lg border-l-4 border-l-primary bg-white p-6 shadow-md"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} filled={i <= review.stars} />
                  ))}
                </div>

                {/* Review text */}
                <p className="mt-4 text-sm leading-relaxed text-body line-clamp-5">
                  {review.text}
                </p>

                {/* Reviewer */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="text-sm font-bold text-heading">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-xs text-body">
                    {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
