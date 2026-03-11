"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterDragSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">
            Real Results
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Before &amp; After
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto aspect-[16/9] max-w-4xl cursor-col-resize select-none overflow-hidden rounded-lg shadow-lg"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* After image (background, full) */}
          <Image
            src="/images/hero/home-after.webp"
            alt="After procedure"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
            draggable={false}
          />

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <Image
              src="/images/hero/home-before.webp"
              alt="Before procedure"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              draggable={false}
            />
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 z-10 w-1 cursor-col-resize bg-white shadow-lg"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <ChevronLeft className="h-4 w-4 text-heading" />
              <ChevronRight className="h-4 w-4 -ml-1 text-heading" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
