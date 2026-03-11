import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
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
        backgroundImage={cat.heroImage || "/images/hero/SPS-Image-125.jpg"}
        backgroundVideo={cat.heroVideo}
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: cat.name },
        ]}
      />

      {/* Procedures Grid */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow={cat.name}
            title={`Our ${cat.name} Procedures`}
            description={cat.description}
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((procedure) => {
              const cardImage = procedure.heroImage || procedure.contentImage;
              return (
                <Link
                  key={procedure.slug}
                  href={`/services/${procedure.categorySlug}/${procedure.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Card image */}
                  <div className="relative h-52 w-full overflow-hidden bg-warm-grey">
                    {cardImage ? (
                      <>
                        <Image
                          src={cardImage}
                          alt={procedure.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-heading/50 to-transparent" />
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-gold" />
                      </div>
                    )}
                    {/* Procedure name overlay on image */}
                    {cardImage && (
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="font-heading text-xl font-bold text-white">
                          {procedure.shortName ?? procedure.name}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    {!cardImage && (
                      <h3 className="font-heading text-xl font-bold text-heading transition-colors group-hover:text-primary">
                        {procedure.shortName ?? procedure.name}
                      </h3>
                    )}
                    <p
                      className={`${cardImage ? "" : "mt-3"} line-clamp-3 text-sm leading-relaxed text-body`}
                    >
                      {procedure.heroDescription}
                    </p>

                    {procedure.procedureDuration && (
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-body/70">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        <span>{procedure.procedureDuration}</span>
                      </div>
                    )}

                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-sm font-bold text-primary transition-colors group-hover:text-heading">
                        Learn More
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
