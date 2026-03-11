import Link from "next/link";
import { ChevronRight } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import GalleryAgeGate from "@/components/sections/GalleryAgeGate";
import GalleryCaseGrid from "@/components/sections/GalleryCaseGrid";
import {
  galleryCategories,
  galleryGroupData,
  getGroupCategories,
  getGalleryCases,
  type GalleryGroupData,
} from "@/data/gallery";

interface GroupGalleryViewProps {
  group: GalleryGroupData;
}

export default function GroupGalleryView({ group }: GroupGalleryViewProps) {
  const categories = getGroupCategories(group.slug);

  return (
    <>
      <HeroSection
        title={`${group.label} Gallery`}
        subtitle={group.description}
        backgroundImage={group.heroImage}
      />

      <GalleryAgeGate>
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1320px] px-6">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-body">
              <Link
                href="/gallery"
                className="transition-colors hover:text-primary"
              >
                Gallery
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="font-medium text-heading">{group.label}</span>
            </nav>

            <div className="flex flex-col gap-12 lg:flex-row">
              {/* Main content */}
              <div className="flex-1">
                {categories.map((cat) => {
                  const cases = getGalleryCases(cat.slug);
                  return (
                    <div
                      key={cat.slug}
                      id={cat.slug}
                      className="mb-16 last:mb-0"
                    >
                      <h2 className="mb-2 font-heading text-3xl font-bold text-heading">
                        {cat.label}
                      </h2>
                      <p className="mb-8 text-base leading-relaxed text-body">
                        {cat.description}
                      </p>
                      {cases.length > 0 ? (
                        <GalleryCaseGrid cases={cases} />
                      ) : (
                        <p className="text-body">
                          Gallery photos coming soon. Please check back later.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Sidebar */}
              <div className="w-full shrink-0 lg:w-72">
                <div className="sticky top-24 rounded-lg border border-peach bg-cream p-6">
                  {/* Current group procedures */}
                  <h3 className="mb-4 border-b border-peach pb-3 font-heading text-lg font-bold text-heading">
                    {group.label}
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.slug}>
                        <a
                          href={`#${cat.slug}`}
                          className="block rounded-md px-3 py-2 text-sm text-body transition-colors hover:bg-peach-light hover:text-heading"
                        >
                          {cat.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Other groups */}
                  {galleryGroupData
                    .filter((g) => g.slug !== group.slug)
                    .map((otherGroup) => {
                      const cats = galleryCategories.filter(
                        (c) => c.group === otherGroup.label
                      );
                      return (
                        <div key={otherGroup.slug} className="mt-6">
                          <h3 className="mb-3 border-b border-peach pb-2 font-heading text-base font-bold text-heading">
                            <Link
                              href={`/gallery/${otherGroup.slug}`}
                              className="transition-colors hover:text-primary"
                            >
                              {otherGroup.label}
                            </Link>
                          </h3>
                          <ul className="space-y-1.5">
                            {cats.map((cat) => (
                              <li key={cat.slug}>
                                <Link
                                  href={`/gallery/${cat.slug}`}
                                  className="block rounded-md px-3 py-2 text-sm text-body transition-colors hover:bg-peach-light hover:text-heading"
                                >
                                  {cat.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </GalleryAgeGate>
    </>
  );
}
