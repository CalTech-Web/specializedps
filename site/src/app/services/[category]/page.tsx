import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  serviceCategories,
  getCategoryBySlug,
  getProceduresByCategory,
  type ProcedureCategory,
} from "@/data/procedures";
import HeroSection from "@/components/sections/HeroSection";
import ProcedureCard from "@/components/sections/ProcedureCard";
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

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#1a2332] sm:text-4xl">
            Our {cat.name} Procedures
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            {cat.description}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((procedure) => (
              <ProcedureCard key={procedure.slug} procedure={procedure} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
