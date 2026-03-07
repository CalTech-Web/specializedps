import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
};

const locations = [
  {
    key: "nj" as const,
    ...siteConfig.locations.nj,
  },
  {
    key: "ny" as const,
    ...siteConfig.locations.ny,
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Schedule your personalized consultation with one of our board-certified plastic surgeons. We look forward to hearing from you."
        ctaText="Call (973) 561-0900"
        ctaLink="tel:9735610900"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <SectionHeading
                eyebrow="Get in Touch"
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you promptly."
              />
              <ContactForm />
            </div>

            {/* Location Info */}
            <div>
              <SectionHeading
                eyebrow="Our Offices"
                title="Visit Us"
                subtitle="Two convenient locations serving the tri-state area."
              />
              <div className="space-y-8">
                {locations.map((loc) => (
                  <div
                    key={loc.key}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-[#1a2332]">
                      {loc.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#c9a96e]">
                      {loc.surgeon}
                    </p>

                    <div className="mt-4 space-y-3">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#c9a96e]" />
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 transition-colors hover:text-[#c9a96e]"
                        >
                          {loc.address}
                        </a>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 shrink-0 text-[#c9a96e]" />
                        <a
                          href={`tel:${loc.phoneRaw}`}
                          className="text-sm text-gray-600 transition-colors hover:text-[#c9a96e]"
                        >
                          {loc.phone}
                        </a>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 shrink-0 text-[#c9a96e]" />
                        <a
                          href={`mailto:${loc.email}`}
                          className="text-sm text-gray-600 transition-colors hover:text-[#c9a96e]"
                        >
                          {loc.email}
                        </a>
                      </div>

                      {/* Hours */}
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 shrink-0 text-[#c9a96e]" />
                        <span className="text-sm text-gray-600">
                          {loc.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
