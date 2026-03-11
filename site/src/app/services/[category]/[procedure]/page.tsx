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
import {
  Phone,
  MapPin,
  CheckCircle,
  Images,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  Shield,
  Star,
  Award,
} from "lucide-react";

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
        backgroundVideo={proc.heroVideo}
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: cat?.name || "Services", href: `/services/${category}` },
          { label: proc.shortName ?? proc.name },
        ]}
      />

      {/* What Is [Procedure]? */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div
            className={`grid gap-12 ${proc.contentImage ? "lg:grid-cols-[1fr_400px]" : ""}`}
          >
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
                <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-primary/10 bg-cream px-5 py-3">
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
                className="group rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <p className="text-base font-semibold leading-relaxed text-white">
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
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto]">
            <div>
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
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <CheckCircle className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-base leading-relaxed text-body">
                      {criterion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick info card */}
            <div className="hidden rounded-xl border border-primary/10 bg-cream p-6 lg:block lg:w-[280px]">
              <Sparkles className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-heading text-lg font-bold text-heading">
                Personalized Approach
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Every treatment plan is tailored to your unique anatomy and
                aesthetic goals by our board-certified surgeons.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-heading"
              >
                Book a Consultation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
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
                  className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-semibold text-heading">{technique}</p>
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
                  className="relative overflow-hidden rounded-xl border border-gray-100 bg-warm-grey p-6"
                >
                  <span className="font-heading text-5xl font-bold text-primary/15">
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
      <section className="bg-warm-grey py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="What to Expect"
            title="Recovery Timeline"
            centered={false}
          />
          <div className="mt-4 max-w-3xl space-y-4 rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <p className="font-heading text-lg font-bold text-heading">
                Your Recovery Journey
              </p>
            </div>
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
            <div className="mt-4 max-w-3xl rounded-xl border-l-4 border-primary bg-warm-grey p-8 shadow-sm">
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
            Browse our before and after gallery to see transformative outcomes
            from our board-certified surgeons.
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
      <section className="relative overflow-hidden py-20 sm:py-24">
        <Image
          src={proc.heroImage || "/images/hero/SPS-Image-125.jpg"}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-heading/90 via-heading/85 to-heading/75" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1320px] px-6 text-center">
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="h-5 w-5 text-gold" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Schedule a {proc.name} Consultation Today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Take the first step toward achieving your goals. Our board-certified
            plastic surgeons will create a personalized treatment plan tailored
            to your unique needs.
          </p>
          <AppointmentButton className="mt-8 inline-flex items-center gap-2.5 rounded-md border-2 border-gold bg-gold px-9 py-4 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-lg">
            <Calendar className="h-5 w-5" />
            Request an Appointment
          </AppointmentButton>
          <p className="mt-6 text-sm tracking-wide text-white/40">
            Board-Certified Plastic Surgeons &bull; Castle Connolly Top Doctors
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* Doctors Section */}
      <section className="bg-warm-grey py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Meet Your Surgeons"
            title="Our Surgeons"
          />
          <div className="space-y-8">
            {[njDoctor, nyDoctor].filter(Boolean).map((doctor) => {
              const loc = siteConfig.locations[doctor!.locationKey];
              return (
                <div
                  key={doctor!.slug}
                  className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Doctor Image */}
                    <div className="relative w-full flex-shrink-0 md:w-[340px] lg:w-[400px]">
                      <div className="relative h-72 md:h-full md:min-h-[460px]">
                        <Image
                          src={doctor!.aboutImage || doctor!.image}
                          alt={doctor!.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
                      <Link
                        href={`/doctors/${doctor!.slug}`}
                        className="font-heading text-2xl font-bold text-heading transition-colors hover:text-primary"
                      >
                        {doctor!.name}, {doctor!.credentials}
                      </Link>
                      <p className="mt-1 text-base font-medium text-primary">
                        {doctor!.title}
                      </p>

                      {/* Credentials */}
                      <div className="mt-5 space-y-2">
                        {doctor!.boardCertifications.slice(0, 4).map((cert) => (
                          <div key={cert} className="flex items-start gap-2.5">
                            <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                            <span className="text-sm text-body">{cert}</span>
                          </div>
                        ))}
                      </div>

                      {/* Location & Phone */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-body">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                          </div>
                          {loc.address}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                            <Phone className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <a
                            href={`tel:${loc.phoneRaw}`}
                            className="text-sm font-semibold text-primary transition-colors hover:text-heading"
                          >
                            {loc.phone}
                          </a>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                          href={`/doctors/${doctor!.slug}`}
                          className="inline-flex items-center gap-2 rounded-md border-2 border-heading bg-heading px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-heading"
                        >
                          View Profile
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <AppointmentButton className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white hover:text-primary">
                          Schedule Consultation
                        </AppointmentButton>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
