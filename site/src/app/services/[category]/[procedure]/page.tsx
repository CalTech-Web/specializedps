import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  procedures,
  getProcedureBySlug,
  getCategoryBySlug,
} from "@/data/procedures";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";

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

  return (
    <>
      <HeroSection
        title={proc.name}
        subtitle={proc.heroDescription}
        ctaText="Schedule Consultation"
        ctaLink="/contact"
      />

      {/* About This Procedure */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#c9a96e]">
            {cat?.name}
          </p>
          <h2 className="text-3xl font-bold text-[#1a2332] sm:text-4xl">
            About This Procedure
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {proc.description}
          </p>
          {proc.procedureDuration && (
            <p className="mt-4 text-base text-gray-600">
              <span className="font-semibold text-[#1a2332]">
                Typical Procedure Duration:
              </span>{" "}
              {proc.procedureDuration}
            </p>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2332] sm:text-4xl">
            Benefits
          </h2>
          <ul className="mt-8 space-y-4">
            {proc.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a96e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-lg text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Are You a Candidate? */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2332] sm:text-4xl">
            Are You a Candidate?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            You may be a good candidate for this procedure if you meet the
            following criteria:
          </p>
          <ul className="mt-8 space-y-3">
            {proc.candidateCriteria.map((criterion, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#c9a96e]" />
                <span className="text-lg text-gray-700">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Techniques */}
      {proc.techniques && proc.techniques.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a2332] sm:text-4xl">
              Techniques
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our surgeons use a variety of approaches tailored to your unique
              anatomy and goals:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {proc.techniques.map((technique, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-5"
                >
                  <p className="font-semibold text-[#1a2332]">{technique}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recovery Timeline */}
      <section
        className={
          proc.techniques && proc.techniques.length > 0 ? "py-20" : "bg-gray-50 py-20"
        }
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2332] sm:text-4xl">
            Recovery Timeline
          </h2>
          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              {proc.recoveryTimeline}
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
      {proc.insuranceCoverage && (
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1a2332] sm:text-4xl">
              Insurance Coverage
            </h2>
            <div className="mt-6 rounded-xl border border-[#c9a96e]/30 bg-[#c9a96e]/5 p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                {proc.insuranceCoverage}
              </p>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
