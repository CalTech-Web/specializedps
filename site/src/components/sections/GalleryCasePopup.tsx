"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";
import { DEFAULT_DOCTOR } from "@/data/gallery";

interface GalleryCasePopupProps {
  item: GalleryItem;
  caseNumber: number;
  onClose: () => void;
}

export default function GalleryCasePopup({
  item,
  caseNumber,
  onClose,
}: GalleryCasePopupProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const doctor = item.doctor ?? DEFAULT_DOCTOR;

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  }, []);

  const handlePointerDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging.current) {
        updatePosition(e.touches[0].clientX);
      }
    },
    [updatePosition]
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-heading/60 text-white transition-colors hover:bg-heading"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left: Drag slider */}
        <div className="relative flex-1 bg-gray-100">
          <div
            ref={containerRef}
            className="relative aspect-square w-full cursor-col-resize select-none overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handlePointerUp}
          >
            {/* After image (full background) */}
            <Image
              src={item.after}
              alt={`${item.procedureLabel} - After`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 600px"
              draggable={false}
            />

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <div className="relative h-full w-full" style={{ width: `${containerRef.current ? containerRef.current.offsetWidth : 9999}px` }}>
                <Image
                  src={item.before}
                  alt={`${item.procedureLabel} - Before`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  draggable={false}
                />
              </div>
            </div>

            {/* Before / After labels */}
            <span className="absolute left-3 top-3 z-10 rounded bg-heading/70 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Before
            </span>
            <span className="absolute right-3 top-3 z-10 rounded bg-heading/70 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              After
            </span>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 z-10 w-0.5 cursor-col-resize bg-white shadow-lg"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
              onMouseDown={handlePointerDown}
              onTouchStart={handlePointerDown}
            >
              <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                <ChevronLeft className="h-3.5 w-3.5 text-heading" />
                <ChevronRight className="h-3.5 w-3.5 -ml-0.5 text-heading" />
              </div>
            </div>
          </div>

        </div>

        {/* Right: Case details */}
        <div className="w-full shrink-0 border-t border-gray-100 p-6 lg:w-72 lg:border-l lg:border-t-0 xl:w-80">
          <div className="mb-4 inline-block rounded bg-heading px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            Case {caseNumber}
          </div>

          <h3 className="font-heading text-lg font-bold text-heading">
            {item.procedureLabel.replace(/,?\s*Case\s*\d+/i, "")}, Case {caseNumber}
          </h3>

          <p className="mt-2 text-sm text-primary font-medium">
            Performed by {doctor}
          </p>

          {item.patientAge && (
            <p className="mt-3 text-sm text-body">
              <span className="font-semibold text-heading">Patient Age:</span>{" "}
              {item.patientAge}
            </p>
          )}

          {item.procedureDetail && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-heading">
                Procedure Details
              </p>
              <p className="mt-1 text-sm leading-relaxed text-body">
                {item.procedureDetail}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
