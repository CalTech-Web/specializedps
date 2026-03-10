import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Quote, ChevronRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import AppointmentButton from "@/components/ui/AppointmentButton";

interface DoctorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export async function generateMetadata({
  params,
}: DoctorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return { title: "Doctor Not Found" };
  }

  return {
    title: `${doctor.name}, ${doctor.credentials}`,
    description: `${doctor.name} is a ${doctor.title} at Specialized Plastic Surgery in ${doctor.location}. ${doctor.philosophy}`,
  };
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  const location = siteConfig.locations[doctor.locationKey];

  return (
    <>
      {/* Hero / Breadcrumb */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-115.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-heading/70" />
        <div className="relative z-10 mx-auto max-w-[1320px] px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/doctors" className="transition-colors hover:text-white">
              Our Surgeons
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{doctor.name}</span>
          </nav>

          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            {doctor.name}
          </h1>
          <p className="mt-3 text-lg text-white/80">
            {doctor.title} | {doctor.credentials} | {doctor.location}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* Main Content: 2-Column Layout */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Main Content (Left) */}
            <div>
              {/* Doctor Photo */}
              <div className="relative mb-10 h-[520px] w-full max-w-[420px] overflow-hidden shadow-lg">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                />
              </div>

              {/* Introduction */}
              <h2 className="font-heading text-3xl font-bold text-heading">
                {doctor.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-body">
                {doctor.philosophy}
              </p>

              {/* Education and Training */}
              <div className="mt-14">
                <h2 className="font-heading text-3xl font-bold text-heading">
                  Education and Training
                </h2>
                <ul className="mt-6 space-y-3">
                  {doctor.education.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-body"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 bg-primary" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Board Certification & Memberships */}
              <div className="mt-14">
                <h2 className="font-heading text-3xl font-bold text-heading">
                  Board Certification & Memberships
                </h2>
                <ul className="mt-6 space-y-3">
                  {doctor.boardCertifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-body"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 bg-primary" />
                      <span className="text-base leading-relaxed">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements & Recognition */}
              {(doctor.awards.length > 0 || doctor.recognition.length > 0) && (
                <div className="mt-14">
                  <h2 className="font-heading text-3xl font-bold text-heading">
                    Achievements & Recognition
                  </h2>

                  {doctor.recognition.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {doctor.recognition.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-body"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 bg-primary" />
                          <span className="text-base leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {doctor.awards.length > 0 && (
                    <ul
                      className={`space-y-3 ${doctor.recognition.length > 0 ? "mt-4" : "mt-6"}`}
                    >
                      {doctor.awards.map((award, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-body"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 bg-primary" />
                          <span className="text-base leading-relaxed">
                            {award}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Clinical Expertise */}
              <div className="mt-14">
                <h2 className="font-heading text-3xl font-bold text-heading">
                  Clinical Expertise
                </h2>

                <div className="mt-8 grid gap-10 md:grid-cols-2">
                  {/* Aesthetic Surgery */}
                  <div>
                    <h3 className="mb-4 font-heading text-xl font-bold text-heading">
                      Aesthetic Surgery
                    </h3>
                    <ul className="space-y-2">
                      {doctor.specialtiesAesthetic.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-body"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reconstructive Surgery */}
                  <div>
                    <h3 className="mb-4 font-heading text-xl font-bold text-heading">
                      Reconstructive Surgery
                    </h3>
                    <ul className="space-y-2">
                      {doctor.specialtiesReconstructive.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-body"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quote */}
              {doctor.quote && (
                <div className="mt-14 rounded-lg border border-gray-100 bg-warm-grey p-8">
                  <Quote className="mb-4 h-8 w-8 text-primary" />
                  <blockquote className="text-lg leading-relaxed text-body italic">
                    &ldquo;{doctor.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 font-semibold text-heading">
                    {doctor.name}, {doctor.credentials}
                  </p>
                </div>
              )}

              {/* Publications */}
              {doctor.publications && (
                <div className="mt-14">
                  <h2 className="font-heading text-3xl font-bold text-heading">
                    Published Research
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-body">
                    {doctor.name} has contributed significantly to the field of
                    plastic and reconstructive surgery with{" "}
                    <span className="font-semibold text-heading">
                      {doctor.publications}
                    </span>
                    , advancing knowledge in microsurgery, facial reconstruction,
                    and breast reconstruction techniques.
                  </p>
                </div>
              )}

              {/* Notable Achievement */}
              {doctor.notableAchievement && (
                <div className="mt-14 rounded-lg bg-heading p-8">
                  <h3 className="font-heading text-xl font-bold text-white">
                    Notable Achievement
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/90">
                    {doctor.name} served as a{" "}
                    <span className="font-semibold text-primary">
                      {doctor.notableAchievement}
                    </span>
                    , a groundbreaking milestone in reconstructive surgery that
                    demonstrates the highest level of surgical expertise and
                    innovation.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar (Right) */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-lg border border-gray-100 bg-warm-grey p-8">
                <h3 className="font-heading text-xl font-bold text-heading">
                  Schedule a Consultation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Take the first step toward achieving your goals with{" "}
                  {doctor.name}.
                </p>

                {/* Appointment Button */}
                <AppointmentButton
                  className="mt-6 flex w-full items-center justify-center gap-2 border-2 border-primary bg-primary px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary"
                  doctorPreset={{
                    doctor: doctor.name,
                    location: doctor.locationKey === "nj" ? "NJ" : "NY",
                    recipientEmail: siteConfig.locations[doctor.locationKey].email,
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  Request an Appointment
                </AppointmentButton>

                {/* Phone Numbers */}
                <div className="mt-8 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-heading">
                      New Jersey Office
                    </p>
                    <a
                      href={`tel:${siteConfig.locations.nj.phoneRaw}`}
                      className="mt-1 flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-heading"
                    >
                      <Phone className="h-4 w-4" />
                      {siteConfig.locations.nj.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-heading">
                      New York Office
                    </p>
                    <a
                      href={`tel:${siteConfig.locations.ny.phoneRaw}`}
                      className="mt-1 flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-heading"
                    >
                      <Phone className="h-4 w-4" />
                      {siteConfig.locations.ny.phone}
                    </a>
                  </div>
                </div>

                {/* Practice Info */}
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-bold text-heading">
                    Practice Information
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {doctor.title} at Specialized Plastic Surgery, serving
                    patients in {location.name} and the tri-state area.
                  </p>
                  <p className="mt-2 text-sm text-body">
                    <span className="font-medium text-heading">Hours:</span>{" "}
                    {location.hours}
                  </p>
                  <p className="mt-1 text-sm text-body">
                    <span className="font-medium text-heading">
                      Address:
                    </span>{" "}
                    {location.address}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
