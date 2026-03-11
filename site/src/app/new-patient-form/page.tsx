import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "New Patient Form | Specialized Plastic Surgery",
  description:
    "Schedule your consultation at Specialized Plastic Surgery. Two convenient locations in Northern New Jersey and Westchester, NY.",
};

const locations = [
  { key: "nj" as const, ...siteConfig.locations.nj },
  { key: "ny" as const, ...siteConfig.locations.ny },
];

export default function NewPatientFormPage() {
  return (
    <>
      <HeroSection
        title="New Patient Consultation"
        subtitle="Take the first step toward your transformation. Fill out our new patient form and our team will schedule your personalized consultation."
        backgroundImage="/images/hero/SPS-Image-127.jpg"
        ctaText="Fill Out the Form Below"
        ctaLink="#contact-form"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "New Patient Form" },
        ]}
      />

      {/* Locations */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Two Convenient Locations"
            title="Our Offices"
            description="Visit either of our offices for your consultation. Both locations are staffed by board-certified plastic surgeons and a dedicated support team."
            centered
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.key}
                className="overflow-hidden rounded-lg border border-gray-100 bg-warm-grey transition-shadow hover:shadow-lg"
              >
                <div className="h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold text-heading">
                    {loc.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {loc.surgeon}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-body">{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <a
                        href={`tel:${loc.phoneRaw}`}
                        className="text-sm font-semibold text-primary transition-colors hover:text-heading"
                      >
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-sm text-body transition-colors hover:text-primary"
                      >
                        {loc.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-body">{loc.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="relative bg-heading py-14 sm:py-16">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/images/gallery-page/marble-bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Get Started"
              title="Request Your Consultation"
              description="Select your preferred location and surgeon, then fill out the form below. We will reach out to confirm your appointment."
              centered
              light
            />
            <div className="mt-8 rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
