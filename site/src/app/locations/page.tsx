import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Stethoscope } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Locations",
};

const locationDetails = [
  {
    id: "nj",
    ...siteConfig.locations.nj,
    services: [
      "Cosmetic surgery",
      "Breast reconstruction",
      "Non-surgical facial rejuvenation",
      "Face and neck lift",
      "Rhinoplasty and blepharoplasty",
      "Breast augmentation, lift, and reduction",
      "Body contouring and liposuction",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7!2d-74.3!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z264+Millburn+Ave+Millburn+NJ+07041!5e0!3m2!1sen!2sus!4v1",
  },
  {
    id: "ny",
    ...siteConfig.locations.ny,
    services: [
      "Breast reconstruction (DIEP flap, implant-based)",
      "Aesthetic breast procedures",
      "Body contouring and liposuction",
      "Breast augmentation",
      "Brazilian Butt Lift",
      "Tummy tuck and mommy makeover",
      "AAAASF-accredited private surgical suite",
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.8!2d-73.72!3d40.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z500+Mamaroneck+Ave+Harrison+NY+10528!5e0!3m2!1sen!2sus!4v1",
  },
];

export default function LocationsPage() {
  const [njLocation, nyLocation] = locationDetails;

  return (
    <>
      <HeroSection
        title="Our Locations"
        subtitle="Two convenient offices in New Jersey and Westchester, NY, serving the greater tri-state area with expert plastic and reconstructive surgery."
        backgroundImage="/images/hero/locations-hero.jpg"
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
      />

      {/* NJ Location — bg-white, light cards */}
      <section id="nj" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="New Jersey"
            title={njLocation.name}
            subtitle={`Led by ${njLocation.surgeon}`}
            centered
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {/* Details */}
            <div className="space-y-5">
              {/* Contact Info */}
              <div className="rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="gold-shimmer h-[2px] rounded-t-lg bg-gradient-to-r from-primary via-gold to-primary" />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-heading">
                    Contact Information
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <MapPin className="h-4 w-4 text-primary" />
                      </span>
                      <a
                        href={njLocation.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 text-sm text-body transition-colors hover:text-primary"
                      >
                        {njLocation.address}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Phone className="h-4 w-4 text-primary" />
                      </span>
                      <a
                        href={`tel:${njLocation.phoneRaw}`}
                        className="text-sm text-body transition-colors hover:text-primary"
                      >
                        {njLocation.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Mail className="h-4 w-4 text-primary" />
                      </span>
                      <a
                        href={`mailto:${njLocation.email}`}
                        className="text-sm text-body transition-colors hover:text-primary"
                      >
                        {njLocation.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Clock className="h-4 w-4 text-primary" />
                      </span>
                      <span className="text-sm text-body">
                        {njLocation.hours}, Sat-Sun Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="gold-shimmer h-[2px] rounded-t-lg bg-gradient-to-r from-primary via-gold to-primary" />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Stethoscope className="h-4 w-4 text-primary" />
                    </span>
                    <h3 className="font-heading text-lg font-bold text-heading">
                      Services Offered
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {njLocation.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2 text-sm text-body"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <iframe
                src={njLocation.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${njLocation.name} office`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NY Location — bg-heading (dark), glass-morphism cards */}
      <section id="ny" className="relative bg-heading py-14 sm:py-16">
        {/* Marble texture overlay */}
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
            eyebrow="New York"
            title={nyLocation.name}
            subtitle={`Led by ${nyLocation.surgeon}`}
            centered
            light
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {/* Details */}
            <div className="space-y-5">
              {/* Contact Info */}
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="gold-shimmer h-[2px] rounded-t-lg bg-gradient-to-r from-primary via-gold to-primary" />
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-white">
                    Contact Information
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <MapPin className="h-4 w-4 text-primary" />
                      </span>
                      <a
                        href={nyLocation.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 text-sm text-white/70 transition-colors hover:text-primary"
                      >
                        {nyLocation.address}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Phone className="h-4 w-4 text-primary" />
                      </span>
                      <a
                        href={`tel:${nyLocation.phoneRaw}`}
                        className="text-sm text-white/70 transition-colors hover:text-primary"
                      >
                        {nyLocation.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Mail className="h-4 w-4 text-primary" />
                      </span>
                      <a
                        href={`mailto:${nyLocation.email}`}
                        className="text-sm text-white/70 transition-colors hover:text-primary"
                      >
                        {nyLocation.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Clock className="h-4 w-4 text-primary" />
                      </span>
                      <span className="text-sm text-white/70">
                        {nyLocation.hours}, Sat-Sun Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="gold-shimmer h-[2px] rounded-t-lg bg-gradient-to-r from-primary via-gold to-primary" />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Stethoscope className="h-4 w-4 text-primary" />
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white">
                      Services Offered
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {nyLocation.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-lg border border-white/[0.06] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <iframe
                src={nyLocation.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${nyLocation.name} office`}
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
