import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, Quote } from "lucide-react";

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
      {/* Hero */}
      <section className="bg-[#1f385f] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-center text-4xl font-bold text-white sm:text-5xl">
            {doctor.name}
          </h1>
          <p className="mt-3 text-center text-lg text-white/80">
            {doctor.title} | {doctor.credentials} | {doctor.location}
          </p>
        </div>
      </section>

      {/* Main Content: 2-Column Layout */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            {/* Main Content (Left) */}
            <div>
              {/* Doctor Photo */}
              <div className="relative mb-8 h-[500px] w-full max-w-[400px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>

              {/* Introduction */}
              <h1 className="text-3xl font-bold text-[#32373c]">
                {doctor.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {doctor.philosophy}
              </p>

              {/* Education and Training */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-[#32373c]">
                  Education and Training
                </h2>
                <ul className="mt-6 space-y-3">
                  {doctor.education.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#fb8e28]" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Board Certification & Memberships */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-[#32373c]">
                  Board Certification & Memberships
                </h2>
                <ul className="mt-6 space-y-3">
                  {doctor.boardCertifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#fb8e28]" />
                      <span className="text-base leading-relaxed">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements & Recognition */}
              {(doctor.awards.length > 0 || doctor.recognition.length > 0) && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-[#32373c]">
                    Achievements & Recognition
                  </h2>

                  {doctor.recognition.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {doctor.recognition.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#fb8e28]" />
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
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#fb8e28]" />
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
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-[#32373c]">
                  Clinical Expertise
                </h2>

                <div className="mt-8 grid gap-10 md:grid-cols-2">
                  {/* Aesthetic Surgery */}
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-[#32373c]">
                      Aesthetic Surgery
                    </h3>
                    <ul className="space-y-2">
                      {doctor.specialtiesAesthetic.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reconstructive Surgery */}
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-[#32373c]">
                      Reconstructive Surgery
                    </h3>
                    <ul className="space-y-2">
                      {doctor.specialtiesReconstructive.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4054b2]" />
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
                <div className="mt-12 rounded-2xl bg-[#f5f5f5] p-8">
                  <Quote className="mb-4 h-8 w-8 text-[#fb8e28]" />
                  <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                    &ldquo;{doctor.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 font-semibold text-[#32373c]">
                    {doctor.name}, {doctor.credentials}
                  </p>
                </div>
              )}

              {/* Publications */}
              {doctor.publications && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-[#32373c]">
                    Published Research
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    {doctor.name} has contributed significantly to the field of
                    plastic and reconstructive surgery with{" "}
                    <span className="font-semibold text-[#32373c]">
                      {doctor.publications}
                    </span>
                    , advancing knowledge in microsurgery, facial reconstruction,
                    and breast reconstruction techniques.
                  </p>
                </div>
              )}

              {/* Notable Achievement */}
              {doctor.notableAchievement && (
                <div className="mt-12 rounded-2xl bg-[#1f385f] p-8">
                  <h3 className="text-xl font-bold text-white">
                    Notable Achievement
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/90">
                    {doctor.name} served as a{" "}
                    <span className="font-semibold text-[#fb8e28]">
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
              <div className="rounded-2xl border border-gray-200 bg-[#f5f5f5] p-6 shadow-sm">
                {/* Appointment Button */}
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#32373c] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1f385f]"
                >
                  <Calendar className="h-4 w-4" />
                  Request an Appointment
                </Link>

                {/* Phone Numbers */}
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      New Jersey Office
                    </p>
                    <a
                      href={`tel:${siteConfig.locations.nj.phoneRaw}`}
                      className="mt-1 flex items-center gap-2 text-base font-semibold text-[#4054b2] transition-colors hover:text-[#1f385f]"
                    >
                      <Phone className="h-4 w-4" />
                      {siteConfig.locations.nj.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      New York Office
                    </p>
                    <a
                      href={`tel:${siteConfig.locations.ny.phoneRaw}`}
                      className="mt-1 flex items-center gap-2 text-base font-semibold text-[#4054b2] transition-colors hover:text-[#1f385f]"
                    >
                      <Phone className="h-4 w-4" />
                      {siteConfig.locations.ny.phone}
                    </a>
                  </div>
                </div>

                {/* Practice Info */}
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-bold text-[#32373c]">
                    Practice Information
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {doctor.title} at Specialized Plastic Surgery, serving
                    patients in {location.name} and the tri-state area.
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-medium text-[#32373c]">Hours:</span>{" "}
                    {location.hours}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    <span className="font-medium text-[#32373c]">
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

      <CTABanner
        heading={`Schedule a Consultation with ${doctor.name}`}
        subtext="Take the first step toward achieving your goals. Contact our office to book a personalized consultation."
      />
    </>
  );
}
