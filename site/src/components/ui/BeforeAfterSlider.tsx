"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  alt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
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

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full cursor-col-resize select-none overflow-hidden rounded-xl"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
    >
      {/* After image (full width, behind) */}
      <Image
        src={after}
        alt={`${alt}, After`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src={before}
          alt={`${alt}, Before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-lg"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/90 shadow-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-[#1a2332]"
          >
            <path
              d="M7 4L3 10L7 16M13 4L17 10L13 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
        Before
      </div>
      <div className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
        After
      </div>
    </div>
  );
}
