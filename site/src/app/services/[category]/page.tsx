import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  serviceCategories,
  getCategoryBySlug,
  getProceduresByCategory,
  type ProcedureCategory,
} from "@/data/procedures";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";

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
    title: `${cat.name} Procedures | Specialized Plastic Surgery`,
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
        backgroundImage="/images/hero/SPS-Image-125.jpg"
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: cat.name },
        ]}
      />

      {/* Procedures Grid */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow={cat.name}
            title={`Our ${cat.name} Procedures`}
            description={cat.description}
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((procedure) => (
              <Link
                key={procedure.slug}
                href={`/services/${procedure.categorySlug}/${procedure.slug}`}
                className="group rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-[2px] w-12 bg-gradient-to-r from-primary via-gold to-primary" />
                <h3 className="mt-4 font-heading text-lg font-bold text-heading transition-colors group-hover:text-primary">
                  {procedure.shortName ?? procedure.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-body">
                  {procedure.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-heading">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
