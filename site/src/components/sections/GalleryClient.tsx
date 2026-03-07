"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { galleryItems, galleryCategories, type GalleryItem } from "@/data/gallery";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Category Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-[#1a2332] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All ({galleryItems.length})
        </button>
        {galleryCategories.map((cat) => {
          const count = galleryItems.filter(
            (item) => item.category === cat.slug
          ).length;
          return (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.slug
                  ? "bg-[#1a2332] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Before/After Side by Side */}
            <div className="relative grid grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.before}
                  alt={`${item.procedureLabel}, Before`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.after}
                  alt={`${item.procedureLabel}, After`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
                <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">
                  After
                </span>
              </div>
              {/* Divider */}
              <div className="absolute inset-y-0 left-1/2 w-px bg-white" />
            </div>
            <div className="p-4 text-left">
              <p className="text-sm font-semibold text-[#1a2332]">
                {item.procedureLabel}
              </p>
              <p className="mt-0.5 text-xs text-[#c9a96e]">
                {item.categoryLabel}
              </p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-gray-500">
          No gallery images available for this category yet.
        </p>
      )}

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#1a2332] text-white shadow-lg transition-colors hover:bg-[#c9a96e]"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <BeforeAfterSlider
              before={selectedItem.before}
              after={selectedItem.after}
              alt={selectedItem.procedureLabel}
            />
            <div className="mt-3 text-center">
              <p className="text-lg font-semibold text-[#1a2332]">
                {selectedItem.procedureLabel}
              </p>
              <p className="text-sm text-[#c9a96e]">
                {selectedItem.categoryLabel}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Drag the slider to compare before and after
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
