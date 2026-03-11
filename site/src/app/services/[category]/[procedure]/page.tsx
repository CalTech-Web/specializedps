import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  procedures,
  getProcedureBySlug,
  getCategoryBySlug,
} from "@/data/procedures";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import AppointmentButton from "@/components/ui/AppointmentButton";
import { Phone, MapPin, CheckCircle, Images, Clock, Calendar } from "lucide-react";

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
    title: `${proc.name} | Specialized Plastic Surgery`,
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
      <HeroSection
        title={proc.name}
        subtitle={proc.heroDescription}
        backgroundImage={proc.heroImage || "/images/hero/SPS-Image-125.jpg"}
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: cat?.name || "Services", href: `/services/${category}` },
          { label: proc.shortName ?? proc.name },
        ]}
      />

      {/* What Is [Procedure]? — Two-column with optional image */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className={`grid gap-12 ${proc.contentImage ? "lg:grid-cols-[1fr_400px]" : ""}`}>
            <div>
              <SectionHeading
                eyebrow="Overview"
                title={`What Is ${proc.name}?`}
                centered={false}
              />
              <div className="mt-4 space-y-4">
                {proc.description.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              {proc.procedureDuration && (
                <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-gray-100 bg-warm-grey px-5 py-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-base text-body">
                    <span className="font-semibold text-heading">
                      Typical Duration:
                    </span>{" "}
                    {proc.procedureDuration}
                  </span>
                </div>
              )}
            </div>

            {proc.contentImage && (
              <div className="relative hidden h-[480px] overflow-hidden rounded-lg shadow-lg lg:block">
                <Image
                  src={proc.contentImage}
                  alt={proc.name}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative bg-heading py-14 sm:py-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Advantages"
            title={`Why Choose ${proc.name}?`}
            light
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {proc.benefits.map((benefit, i) => (
              <div
                key={i}
                className="group rounded-lg border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <p className="font-heading text-base font-semibold leading-relaxed text-white">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidacy */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Am I a Candidate?"
            title="Who is a Good Candidate?"
            centered={false}
          />
          <p className="mt-2 max-w-3xl text-lg text-body">
            You may be a good candidate for this procedure if you meet the
            following criteria:
          </p>
          <ul className="mt-6 max-w-3xl space-y-4">
            {proc.candidateCriteria.map((criterion, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 mt-0.5">
                  <CheckCircle className="h-3.5 w-3.5 text-primary" />
                </div>
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
        <section className="bg-warm-grey py-14 sm:py-20">
          <div className="mx-auto max-w-[1320px] px-6">
            <SectionHeading
              eyebrow="Our Approach"
              title="Techniques"
              description="Our surgeons use a variety of approaches tailored to your unique anatomy and goals."
              centered={false}
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {proc.techniques.map((technique, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-[2px] w-8 bg-gradient-to-r from-primary to-gold" />
                  <p className="mt-3 font-semibold text-heading">{technique}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Procedure Steps */}
      {proc.procedureSteps && proc.procedureSteps.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1320px] px-6">
            <SectionHeading
              eyebrow="The Process"
              title="What to Expect During Your Procedure"
              centered={false}
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {proc.procedureSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative rounded-lg border border-gray-100 bg-warm-grey p-6"
                >
                  <span className="font-heading text-4xl font-bold text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-base leading-relaxed text-body">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recovery */}
      <section className={`${proc.procedureSteps ? "bg-warm-grey" : "bg-white"} py-14 sm:py-20`}>
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="What to Expect"
            title="Recovery Timeline"
            centered={false}
          />
          <div className="mt-4 max-w-3xl rounded-lg border border-gray-100 bg-white p-8 shadow-sm space-y-4">
            {proc.recoveryTimeline.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
      {proc.insuranceCoverage && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1320px] px-6">
            <SectionHeading
              eyebrow="Coverage"
              title="Insurance Coverage"
              centered={false}
            />
            <div className="mt-4 max-w-3xl rounded-lg border-l-4 border-primary bg-warm-grey p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-body">
                {proc.insuranceCoverage}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Link */}
      <section className="relative bg-heading py-14 sm:py-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Images className="h-7 w-7 text-primary" />
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              See Real Patient Results
            </h2>
          </div>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
            Browse our before and after gallery to see transformative outcomes from our board-certified surgeons.
          </p>
          <Link
            href="/gallery"
            className="mt-6 inline-block rounded-md border-2 border-gold bg-gold px-7 py-3 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-md"
          >
            View Gallery
          </Link>
        </div>
      </section>

      {/* Schedule Consultation CTA */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="rounded-lg border border-gray-100 bg-warm-grey p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
              Schedule a {proc.name} Consultation Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-body">
              Take the first step toward achieving your goals. Our board-certified plastic surgeons will create a personalized treatment plan tailored to your unique needs.
            </p>
            <AppointmentButton className="mt-8 inline-flex items-center gap-2.5 rounded-md border-2 border-primary bg-primary px-9 py-4 text-base font-bold uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-primary">
              <Calendar className="h-5 w-5" />
              Request an Appointment
            </AppointmentButton>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-warm-grey py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Meet Your Surgeons"
            title="Our Surgeons"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {njDoctor && (
              <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Link
                  href={`/doctors/${njDoctor.slug}`}
                  className="font-heading text-xl font-bold text-heading transition-colors hover:text-primary"
                >
                  {njDoctor.name}, {njDoctor.credentials}
                </Link>
                <p className="mt-1 text-sm font-medium text-body">
                  {njDoctor.title}
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-body">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                    </div>
                    {siteConfig.locations.nj.address}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                    </div>
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

            {nyDoctor && (
              <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Link
                  href={`/doctors/${nyDoctor.slug}`}
                  className="font-heading text-xl font-bold text-heading transition-colors hover:text-primary"
                >
                  {nyDoctor.name}, {nyDoctor.credentials}
                </Link>
                <p className="mt-1 text-sm font-medium text-body">
                  {nyDoctor.title}
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-body">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                    </div>
                    {siteConfig.locations.ny.address}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                    </div>
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
