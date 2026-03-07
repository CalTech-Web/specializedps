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
import CTABanner from "@/components/sections/CTABanner";
import { Phone, MapPin } from "lucide-react";

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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#32373c]">
            What Is {proc.name}?
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            {proc.description}
          </p>
          {proc.procedureDuration && (
            <p className="mt-4 text-base text-gray-600">
              <span className="font-semibold text-[#32373c]">
                Typical Procedure Duration:
              </span>{" "}
              {proc.procedureDuration}
            </p>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#32373c]">
            Benefits
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proc.benefits.map((benefit, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#fb8e28]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fb8e28"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-base font-medium leading-relaxed text-[#32373c]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidacy */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#32373c]">
            Who is a Good Candidate?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            You may be a good candidate for this procedure if you meet the
            following criteria:
          </p>
          <ul className="mt-8 max-w-3xl space-y-3">
            {proc.candidateCriteria.map((criterion, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#fb8e28]" />
                <span className="text-base leading-relaxed text-gray-700">
                  {criterion}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Techniques */}
      {proc.techniques && proc.techniques.length > 0 && (
        <section className="bg-[#f5f5f5] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-[#32373c]">Techniques</h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-600">
              Our surgeons use a variety of approaches tailored to your unique
              anatomy and goals:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {proc.techniques.map((technique, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <p className="font-semibold text-[#32373c]">{technique}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recovery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#32373c]">
            Recovery Timeline
          </h2>
          <div className="mt-6 max-w-3xl rounded-lg border border-gray-200 bg-[#f5f5f5] p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              {proc.recoveryTimeline}
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
      {proc.insuranceCoverage && (
        <section className="bg-[#f5f5f5] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-[#32373c]">
              Insurance Coverage
            </h2>
            <div className="mt-6 max-w-3xl rounded-lg border border-[#fb8e28]/30 bg-[#fb8e28]/5 p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                {proc.insuranceCoverage}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Doctors Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#32373c]">
            Our Surgeons
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* NJ Doctor */}
            {njDoctor && (
              <div className="rounded-lg border border-gray-200 bg-[#f5f5f5] p-8 shadow-sm">
                <Link
                  href={`/doctors/${njDoctor.slug}`}
                  className="text-xl font-bold text-[#4054b2] transition-colors hover:text-[#1f385f]"
                >
                  {njDoctor.name}, {njDoctor.credentials}
                </Link>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  {njDoctor.title}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 shrink-0 text-[#fb8e28]" />
                    {siteConfig.locations.nj.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-[#fb8e28]" />
                    <a
                      href={`tel:${siteConfig.locations.nj.phoneRaw}`}
                      className="text-sm font-semibold text-[#4054b2] transition-colors hover:text-[#1f385f]"
                    >
                      {siteConfig.locations.nj.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* NY Doctor */}
            {nyDoctor && (
              <div className="rounded-lg border border-gray-200 bg-[#f5f5f5] p-8 shadow-sm">
                <Link
                  href={`/doctors/${nyDoctor.slug}`}
                  className="text-xl font-bold text-[#4054b2] transition-colors hover:text-[#1f385f]"
                >
                  {nyDoctor.name}, {nyDoctor.credentials}
                </Link>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  {nyDoctor.title}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 shrink-0 text-[#fb8e28]" />
                    {siteConfig.locations.ny.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-[#fb8e28]" />
                    <a
                      href={`tel:${siteConfig.locations.ny.phoneRaw}`}
                      className="text-sm font-semibold text-[#4054b2] transition-colors hover:text-[#1f385f]"
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

      {/* Final CTA */}
      <CTABanner />
    </>
  );
}
