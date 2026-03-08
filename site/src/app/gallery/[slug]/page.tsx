import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import GalleryAgeGate from "@/components/sections/GalleryAgeGate";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import {
  galleryCategories,
  galleryItems,
  galleryGroups,
  getGalleryCategory,
} from "@/data/gallery";
import { ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return galleryCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getGalleryCategory(slug);
  if (!category) return { title: "Gallery" };

  return {
    title: `${category.label} Gallery`,
    description: category.description,
  };
}

export default async function GalleryProcedurePage({ params }: Props) {
  const { slug } = await params;
  const category = getGalleryCategory(slug);
  if (!category) notFound();

  const items = galleryItems.filter((item) => item.category === slug);

  // Get sibling categories in the same group for sidebar navigation
  const siblings = galleryCategories.filter(
    (cat) => cat.group === category.group
  );

  return (
    <>
      <HeroSection
        title={`${category.label} Gallery`}
        subtitle={category.description}
        backgroundImage="/images/hero/about-hero.jpg"
      />

      <GalleryAgeGate>
        <section className="bg-white py-16 sm:py-20">
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
              <span className="font-medium text-heading">
                {category.label}
              </span>
            </nav>

            <div className="flex flex-col gap-12 lg:flex-row">
              {/* Main content */}
              <div className="flex-1">
                <h2 className="mb-2 font-heading text-3xl font-bold text-heading">
                  {category.label}
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body">
                  {category.description}
                </p>

                {items.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                      <BeforeAfterSlider
                        key={item.id}
                        before={item.before}
                        after={item.after}
                        alt={item.procedureLabel}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-body">
                    Gallery photos coming soon. Please check back later.
                  </p>
                )}
              </div>

              {/* Sidebar navigation */}
              <div className="w-full shrink-0 lg:w-72">
                <div className="sticky top-24 rounded-lg border border-peach bg-cream p-6">
                  <h3 className="mb-4 border-b border-peach pb-3 font-heading text-lg font-bold text-heading">
                    {category.group}
                  </h3>
                  <ul className="space-y-2">
                    {siblings.map((cat) => (
                      <li key={cat.slug}>
                        <Link
                          href={`/gallery/${cat.slug}`}
                          className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                            cat.slug === slug
                              ? "bg-primary font-semibold text-white"
                              : "text-body hover:bg-peach-light hover:text-heading"
                          }`}
                        >
                          {cat.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Other groups */}
                  {galleryGroups
                    .filter((g) => g !== category.group)
                    .map((group) => {
                      const cats = galleryCategories.filter(
                        (c) => c.group === group
                      );
                      return (
                        <div key={group} className="mt-6">
                          <h3 className="mb-3 border-b border-peach pb-2 font-heading text-base font-bold text-heading">
                            {group}
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

      <CTABanner
        heading="Want to See What's Possible?"
        subtext="Schedule a consultation to discuss your goals and view additional photos during your visit."
      />
    </>
  );
}
