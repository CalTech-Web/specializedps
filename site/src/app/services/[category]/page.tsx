import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  serviceCategories,
  getCategoryBySlug,
  getProceduresByCategory,
  type ProcedureCategory,
} from "@/data/procedures";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  return {
    title: `${cat.name} Procedures`,
    description: cat.description,
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const procedures = getProceduresByCategory(cat.slug as ProcedureCategory);

  return (
    <>
      <HeroSection
        title={`${cat.name} Procedures`}
        subtitle={cat.heroDescription}
        ctaText="Schedule Consultation"
        ctaLink="/contact"
      />

      {/* Procedures Grid */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#32373c]">
            Our {cat.name} Procedures
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            {cat.description}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((procedure) => (
              <Link
                key={procedure.slug}
                href={`/services/${procedure.categorySlug}/${procedure.slug}`}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-[#32373c] transition-colors group-hover:text-[#4054b2]">
                  {procedure.shortName ?? procedure.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {procedure.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4054b2] transition-colors group-hover:text-[#1f385f]">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABanner />
    </>
  );
}
