import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { doctors } from "@/data/doctors";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Scissors,
  Award,
  BookOpen,
  Star,
  Quote,
} from "lucide-react";

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

  return (
    <>
      <HeroSection
        title={doctor.name}
        subtitle={`${doctor.title} | ${doctor.credentials} | ${doctor.location}`}
      />

      {/* Education Timeline */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Education & Training"
            title="Academic Background"
            subtitle={`${doctor.name} completed rigorous training at some of the nation's leading medical institutions.`}
          />

          <div className="relative mt-12 border-l-2 border-[#c9a96e]/30 pl-8">
            {doctor.education.map((item, index) => (
              <div key={index} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#c9a96e]">
                  <GraduationCap className="h-3 w-3 text-white" />
                </div>
                <p className="text-lg leading-relaxed text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Certifications */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Credentials"
            title="Board Certifications & Memberships"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {doctor.boardCertifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6"
              >
                <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#c9a96e]" />
                <p className="text-base leading-relaxed text-gray-700">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Expertise */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Clinical Expertise"
            title="Specialties & Procedures"
            subtitle={`${doctor.name} offers a comprehensive range of aesthetic and reconstructive procedures, each tailored to the individual patient.`}
          />

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {/* Aesthetic */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-[#c9a96e]" />
                <h3 className="text-xl font-bold text-[#1a2332]">
                  Aesthetic Surgery
                </h3>
              </div>
              <ul className="space-y-3">
                {doctor.specialtiesAesthetic.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reconstructive */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Scissors className="h-6 w-6 text-[#c9a96e]" />
                <h3 className="text-xl font-bold text-[#1a2332]">
                  Reconstructive Surgery
                </h3>
              </div>
              <ul className="space-y-3">
                {doctor.specialtiesReconstructive.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4a0a0]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      {(doctor.awards.length > 0 || doctor.recognition.length > 0) && (
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeading
              eyebrow="Recognition"
              title="Awards & Honors"
            />

            {doctor.recognition.length > 0 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {doctor.recognition.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-[#c9a96e]/20 bg-white p-6"
                  >
                    <Star className="mt-0.5 h-5 w-5 shrink-0 text-[#c9a96e]" />
                    <p className="text-base leading-relaxed text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {doctor.awards.length > 0 && (
              <div className="mt-10">
                <h3 className="mb-6 text-xl font-bold text-[#1a2332]">
                  Academic & Professional Awards
                </h3>
                <div className="space-y-4">
                  {doctor.awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5"
                    >
                      <Award className="mt-0.5 h-5 w-5 shrink-0 text-[#c9a96e]" />
                      <p className="text-base leading-relaxed text-gray-700">
                        {award}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Philosophy */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            eyebrow="Philosophy"
            title="Approach to Patient Care"
            centered
          />
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {doctor.philosophy}
          </p>
        </div>
      </section>

      {/* Publications (Dr. Sosin) */}
      {doctor.publications && (
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-center text-center">
              <BookOpen className="mb-4 h-10 w-10 text-[#c9a96e]" />
              <h2 className="text-3xl font-bold text-[#1a2332] sm:text-4xl">
                Published Research
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
                {doctor.name} has contributed significantly to the field of
                plastic and reconstructive surgery with{" "}
                <span className="font-semibold text-[#1a2332]">
                  {doctor.publications}
                </span>
                , advancing knowledge in microsurgery, facial reconstruction,
                and breast reconstruction techniques.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Notable Achievement (Dr. Sosin) */}
      {doctor.notableAchievement && (
        <section className="bg-[#1a2332] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Star className="mx-auto mb-4 h-10 w-10 text-[#c9a96e]" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Notable Achievement
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              {doctor.name} served as a{" "}
              <span className="font-semibold text-[#c9a96e]">
                {doctor.notableAchievement}
              </span>
              , a groundbreaking milestone in reconstructive surgery that
              demonstrates the highest level of surgical expertise and
              innovation.
            </p>
          </div>
        </section>
      )}

      {/* Quote (Dr. Devulapalli) */}
      {doctor.quote && (
        <section className="bg-[#1a2332] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Quote className="mx-auto mb-6 h-10 w-10 text-[#c9a96e]" />
            <blockquote className="text-xl leading-relaxed text-gray-300 italic">
              &ldquo;{doctor.quote}&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-[#c9a96e]">
              {doctor.name}, {doctor.credentials}
            </p>
          </div>
        </section>
      )}

      <CTABanner
        heading={`Schedule a Consultation with ${doctor.name}`}
        subtext="Take the first step toward achieving your goals. Contact our office to book a personalized consultation."
      />
    </>
  );
}
