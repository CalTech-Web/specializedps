import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Heart, Lightbulb, ShieldCheck } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Us",
};

const coreValues = [
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "We pursue the highest standards in surgical technique, from advanced microsurgery to the latest aesthetic innovations, ensuring every patient receives world-class care.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We understand that every patient's journey is deeply personal. Our team listens, supports, and guides you with empathy at every step.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "From Resensation nerve grafting to ERAS recovery protocols, we embrace cutting-edge technology and techniques that improve outcomes and comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Patient Safety",
    description:
      "Our AAAASF-accredited surgical suite, board-certified surgeons, and evidence-based protocols ensure the safest possible experience for every patient.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Specialized Plastic Surgery"
        subtitle="Two board-certified surgeons, one shared mission: combining unparalleled expertise with personalized care to deliver exceptional results."
        ctaText="Meet Our Surgeons"
        ctaLink="/team"
      />

      {/* Practice Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Our Story"
              title="Founded on a Shared Vision"
              centered
            />
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Specialized Plastic Surgery was founded in 2020 by Dr. Michael
                Sosin and Dr. Chris Devulapalli, two board-certified plastic
                surgeons who met during their training at Georgetown University
                Hospital. United by a shared passion for both reconstructive and
                aesthetic plastic surgery, they created a practice that offers
                the full spectrum of surgical care under one roof.
              </p>
              <p>
                Their mission is simple: to provide expert, compassionate
                surgical care that puts the patient first. Whether a patient is
                seeking breast reconstruction after cancer surgery or a cosmetic
                procedure to enhance their confidence, the team at Specialized
                Plastic Surgery approaches every case with the same level of
                dedication and precision.
              </p>
              <p>
                With offices in Millburn, NJ and Harrison, NY, the practice
                serves the greater tri-state area and welcomes traveling patients
                from across the country. Together, the surgeons bring training
                from Georgetown, Johns Hopkins, and NYU, more than 90
                peer-reviewed publications, and recognition as Castle Connolly
                Top Doctors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="The principles that guide every decision we make and every patient we treat."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2332]">
                    <Icon className="h-7 w-7 text-[#c9a96e]" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1a2332]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Surgeon Bios */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Surgeons"
            title="Meet the Experts"
            subtitle="Board-certified plastic surgeons with complementary expertise, delivering personalized care at every visit."
            centered
          />
          <div className="grid gap-12 lg:grid-cols-2">
            {doctors.map((doctor) => (
              <div
                key={doctor.slug}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[#1a2332]">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#c9a96e]">
                  {doctor.title} &middot; {doctor.credentials}
                </p>
                <p className="mt-1 text-sm text-gray-500">{doctor.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {doctor.philosophy}
                </p>
                <ul className="mt-4 space-y-2">
                  {doctor.boardCertifications.slice(0, 2).map((cert) => (
                    <li
                      key={cert}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                      {cert}
                    </li>
                  ))}
                  {doctor.recognition.slice(0, 2).map((rec) => (
                    <li
                      key={rec}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                      {rec}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/doctors/${doctor.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a96e] transition-colors hover:text-[#b8954f]"
                >
                  View Full Profile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
