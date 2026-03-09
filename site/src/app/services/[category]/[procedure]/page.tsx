import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  procedures,
  getProcedureBySlug,
  getCategoryBySlug,
} from "@/data/procedures";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";
import HeroSection from "@/components/sections/HeroSection";
import { Phone, MapPin, CheckCircle, Images } from "lucide-react";

interface PageProps {
  params: Promise<{ category: string; procedure: string }>;
}

export async function generateStaticParams() {
  return procedures.map((p) => ({
    category: p.categorySlug,
    procedure: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, procedure } = await params;
  const proc = getProcedureBySlug(category, procedure);
  if (!proc) return {};

  return {
    title: proc.name,
    description: proc.heroDescription,
  };
}

export default async function ProcedurePage({ params }: PageProps) {
  const { category, procedure } = await params;
  const proc = getProcedureBySlug(category, procedure);
  if (!proc) notFound();

  const cat = getCategoryBySlug(category);
  const njDoctor = doctors.find((d) => d.locationKey === "nj");
  const nyDoctor = doctors.find((d) => d.locationKey === "ny");

  return (
    <>
      {/* Hero */}
      <HeroSection
        title={proc.name}
        subtitle={proc.heroDescription}
        ctaText="Schedule Consultation"
        ctaLink="/contact"
      />

      {/* What Is [Procedure]? */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
            What Is {proc.name}?
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-body">
            {proc.description}
          </p>
          {proc.procedureDuration && (
            <p className="mt-4 text-base text-body">
              <span className="font-semibold text-heading">
                Typical Procedure Duration:
              </span>{" "}
              {proc.procedureDuration}
            </p>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
            Benefits
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proc.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-peach-light p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <p className="font-heading text-base font-semibold leading-relaxed text-heading">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidacy */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
            Who is a Good Candidate?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-body">
            You may be a good candidate for this procedure if you meet the
            following criteria:
          </p>
          <ul className="mt-8 max-w-3xl space-y-4">
            {proc.candidateCriteria.map((criterion, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-base leading-relaxed text-body">
                  {criterion}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Techniques */}
      {proc.techniques && proc.techniques.length > 0 && (
        <section className="bg-secondary py-16 sm:py-20">
          <div className="mx-auto max-w-[1320px] px-6">
            <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
              Techniques
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-body">
              Our surgeons use a variety of approaches tailored to your unique
              anatomy and goals:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {proc.techniques.map((technique, i) => (
                <div
                  key={i}
                  className="border border-peach bg-white p-5 shadow-sm"
                >
                  <p className="font-semibold text-heading">{technique}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recovery */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
            Recovery Timeline
          </h2>
          <div className="mt-6 max-w-3xl bg-peach-light p-8">
            <p className="text-lg leading-relaxed text-body">
              {proc.recoveryTimeline}
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
      {proc.insuranceCoverage && (
        <section className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-[1320px] px-6">
            <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
              Insurance Coverage
            </h2>
            <div className="mt-6 max-w-3xl border-l-4 border-primary bg-peach-light p-8">
              <p className="text-lg leading-relaxed text-body">
                {proc.insuranceCoverage}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Link */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-[1320px] px-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Images className="h-7 w-7 text-white" />
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              See Real Patient Results
            </h2>
          </div>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
            Browse our before and after gallery to see transformative outcomes from our board-certified surgeons.
          </p>
          <Link
            href="/gallery"
            className="mt-6 inline-block border-2 border-white bg-white px-7 py-3 text-lg font-bold text-primary transition-colors hover:bg-transparent hover:text-white"
          >
            View Gallery
          </Link>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-peach-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
            Our Surgeons
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* NJ Doctor */}
            {njDoctor && (
              <div className="border border-peach bg-white p-8 shadow-sm">
                <Link
                  href={`/doctors/${njDoctor.slug}`}
                  className="font-heading text-xl font-bold text-primary transition-colors hover:text-heading"
                >
                  {njDoctor.name}, {njDoctor.credentials}
                </Link>
                <p className="mt-1 text-sm font-medium text-body">
                  {njDoctor.title}
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-body">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    {siteConfig.locations.nj.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a
                      href={`tel:${siteConfig.locations.nj.phoneRaw}`}
                      className="text-sm font-semibold text-primary transition-colors hover:text-heading"
                    >
                      {siteConfig.locations.nj.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* NY Doctor */}
            {nyDoctor && (
              <div className="border border-peach bg-white p-8 shadow-sm">
                <Link
                  href={`/doctors/${nyDoctor.slug}`}
                  className="font-heading text-xl font-bold text-primary transition-colors hover:text-heading"
                >
                  {nyDoctor.name}, {nyDoctor.credentials}
                </Link>
                <p className="mt-1 text-sm font-medium text-body">
                  {nyDoctor.title}
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-body">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    {siteConfig.locations.ny.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a
                      href={`tel:${siteConfig.locations.ny.phoneRaw}`}
                      className="text-sm font-semibold text-primary transition-colors hover:text-heading"
                    >
                      {siteConfig.locations.ny.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
