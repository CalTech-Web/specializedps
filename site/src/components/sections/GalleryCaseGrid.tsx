"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";
import { DEFAULT_DOCTOR } from "@/data/gallery";
import GalleryCasePopup from "./GalleryCasePopup";

interface GalleryCaseGridProps {
  cases: GalleryItem[][];
}

export default function GalleryCaseGrid({ cases }: GalleryCaseGridProps) {
  const [openCase, setOpenCase] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {cases.map((caseItems, i) => {
          const primary = caseItems[0];
          const doctor = primary.doctor ?? DEFAULT_DOCTOR;
          return (
            <button
              key={primary.id}
              type="button"
              onClick={() => setOpenCase(i)}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex">
                {/* Before */}
                <div className="relative flex-1">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={primary.before}
                      alt={`${primary.procedureLabel} - Before`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 280px"
                    />
                  </div>
                </div>

                {/* After */}
                <div className="relative flex-1">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={primary.after}
                      alt={`${primary.procedureLabel} - After`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 280px"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 px-4 py-3">
                <p className="text-sm font-bold text-heading">
                  Case {i + 1}
                </p>
                <p className="mt-0.5 text-xs text-body">
                  {doctor}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Popup */}
      {openCase !== null && (
        <GalleryCasePopup
          item={cases[openCase][0]}
          caseNumber={openCase + 1}
          onClose={() => setOpenCase(null)}
        />
      )}
    </>
  );
}
