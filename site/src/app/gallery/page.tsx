import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import GalleryAgeGate from "@/components/sections/GalleryAgeGate";
import { galleryCategories, galleryItems, galleryGroups } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "View before and after photos of breast reconstruction, aesthetic breast surgery, body contouring, and facial procedures at Specialized Plastic Surgery.",
};

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Before & After Gallery"
        subtitle="Real results from real patients. Browse our gallery to see the transformative outcomes achieved by our board-certified surgeons."
        backgroundImage="/images/hero/about-hero.jpg"
      />

      <GalleryAgeGate>
        {galleryGroups.map((group, groupIndex) => {
          const categories = galleryCategories.filter(
            (cat) => cat.group === group
          );

          return (
            <section
              key={group}
              className={`py-16 sm:py-20 ${
                groupIndex % 2 === 0 ? "bg-white" : "bg-peach-light"
              }`}
            >
              <div className="mx-auto max-w-[1320px] px-6">
                <div className="mb-10 text-center">
                  <p className="mb-3 flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                    <span className="inline-block h-[2px] w-12 bg-primary" />
                    <span>Gallery</span>
                    <span className="inline-block h-[2px] w-12 bg-primary" />
                  </p>
                  <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
                    {group}
                  </h2>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {categories.map((cat) => {
                    const count = galleryItems.filter(
                      (item) => item.category === cat.slug
                    ).length;

                    return (
                      <Link
                        key={cat.slug}
                        href={`/gallery/${cat.slug}`}
                        className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={cat.thumbnail}
                            alt={cat.label}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-heading/0 transition-colors duration-300 group-hover:bg-heading/10" />
                          {count > 0 && (
                            <div className="absolute right-3 top-3 rounded-full bg-heading/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                              {count} {count === 1 ? "photo" : "photos"}
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <h3 className="font-heading text-lg font-bold text-heading">
                            {cat.label}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-body">
                            {cat.description}
                          </p>
                          <span className="mt-3 inline-block text-sm font-bold text-primary transition-colors group-hover:text-heading">
                            View Gallery &rarr;
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
      </GalleryAgeGate>

      <CTABanner
        heading="Want to See What's Possible?"
        subtext="Schedule a consultation to discuss your goals and view additional before and after photos during your visit."
      />
    </>
  );
}
