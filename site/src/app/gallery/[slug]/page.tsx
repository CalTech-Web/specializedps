import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import GalleryAgeGate from "@/components/sections/GalleryAgeGate";
import GalleryCaseGrid from "@/components/sections/GalleryCaseGrid";
import GroupGalleryView from "@/components/sections/GroupGalleryView";
import {
  galleryCategories,
  galleryGroupData,
  getGalleryCategory,
  getGalleryCases,
  getGalleryGroup,
  getGroupSlug,
} from "@/data/gallery";
import { ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const procedureParams = galleryCategories.map((cat) => ({ slug: cat.slug }));
  const groupParams = galleryGroupData.map((g) => ({ slug: g.slug }));
  return [...procedureParams, ...groupParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const group = getGalleryGroup(slug);
  if (group) {
    return {
      title: `${group.label} Gallery`,
      description: group.description,
    };
  }

  const category = getGalleryCategory(slug);
  if (!category) return { title: "Gallery" };

  return {
    title: `${category.label} Gallery`,
    description: category.description,
  };
}

export default async function GallerySlugPage({ params }: Props) {
  const { slug } = await params;

  // Check if this is a group page
  const group = getGalleryGroup(slug);
  if (group) {
    return <GroupGalleryView group={group} />;
  }

  // Otherwise, it's a procedure page
  const category = getGalleryCategory(slug);
  if (!category) notFound();

  const cases = getGalleryCases(slug);

  const siblings = galleryCategories.filter(
    (cat) => cat.group === category.group
  );

  return (
    <>
      <HeroSection
        title={`${category.label} Gallery`}
        subtitle={category.description}
        backgroundImage={category.heroImage || "/images/hero/about-hero.jpg"}
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
              <Link
                href={`/gallery/${getGroupSlug(category.group)}`}
                className="transition-colors hover:text-primary"
              >
                {category.group}
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

                {cases.length > 0 ? (
                  <GalleryCaseGrid cases={cases} />
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
                    <Link
                      href={`/gallery/${getGroupSlug(category.group)}`}
                      className="transition-colors hover:text-primary"
                    >
                      {category.group}
                    </Link>
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
                  {galleryGroupData
                    .filter((g) => g.label !== category.group)
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
