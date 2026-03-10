import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { doctors } from "@/data/doctors";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail, Clock, Award, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Dr. Chris Devulapalli | New Patient Form",
  description:
    "Schedule your consultation with Dr. Chris Devulapalli, board-certified plastic surgeon at our Harrison, NY (Westchester) office. Specializing in breast reconstruction, augmentation, and body contouring.",
};

export default function DrChrisNewPatientFormPage() {
  const drChris = doctors.find((d) => d.slug === "chris-devulapalli")!;
  const ny = siteConfig.locations.ny;

  return (
    <>
      <HeroSection
        title="Schedule Your Consultation with Dr. Chris"
        subtitle="Board-certified plastic surgeon specializing in breast reconstruction, aesthetic surgery, and advanced microsurgery at our Harrison, NY office."
        backgroundImage="/images/hero/SPS-Image-125.jpg"
        ctaText="Fill Out the Form Below"
        ctaLink="#contact-form"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dr. Chris New Patient Form" },
        ]}
      />

      {/* Doctor Bio Section */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="relative aspect-[3/4] max-w-md overflow-hidden rounded-lg shadow-lg">
              <Image
                src={drChris.image}
                alt={drChris.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Meet Your Surgeon"
                title={`${drChris.name}, ${drChris.credentials}`}
                centered={false}
              />
              <p className="mt-2 text-sm font-medium text-primary">
                {drChris.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                {drChris.philosophy}
              </p>

              {drChris.quote && (
                <blockquote className="mt-6 border-l-4 border-primary pl-5 text-base italic leading-relaxed text-body">
                  &ldquo;{drChris.quote}&rdquo;
                </blockquote>
              )}

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading">Education</p>
                    <ul className="mt-1 space-y-1">
                      {drChris.education.map((ed, i) => (
                        <li key={i} className="text-sm text-body">{ed}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading">Recognition</p>
                    <ul className="mt-1 space-y-1">
                      {drChris.recognition.map((r, i) => (
                        <li key={i} className="text-sm text-body">{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Details */}
      <section className="relative bg-heading py-14 sm:py-16">
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
            eyebrow="Our Location"
            title="Harrison, NY (Westchester) Office"
            light
            centered
          />
          <div className="mx-auto mt-8 max-w-lg rounded-lg border border-white/[0.06] bg-white/[0.03] p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-white/80">{ny.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a
                  href={`tel:${ny.phoneRaw}`}
                  className="text-sm font-semibold text-primary transition-colors hover:text-white"
                >
                  {ny.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a
                  href={`mailto:${ny.email}`}
                  className="text-sm text-white/80 transition-colors hover:text-primary"
                >
                  {ny.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-white/80">{ny.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Get Started"
              title="Request Your Consultation"
              description="Fill out the form below and our team will reach out to schedule your appointment with Dr. Chris Devulapalli."
              centered
            />
            <div className="mt-8">
              <ContactForm
                fixedLocation="NY"
                fixedDoctor="Dr. Chris Devulapalli, MD"
                recipientEmail="Westchester@myspsdocs.com"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
