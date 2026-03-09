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
  return (
    <>
      <HeroSection
        title="Our Locations"
        subtitle="Two convenient offices in New Jersey and Westchester, NY, serving the greater tri-state area with expert plastic and reconstructive surgery."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      {locationDetails.map((loc) => (
        <section
          key={loc.id}
          id={loc.id}
          className={loc.id === "ny" ? "bg-peach-light py-20" : "py-20"}
        >
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow={loc.id === "nj" ? "New Jersey" : "New York"}
              title={loc.name}
              subtitle={`Led by ${loc.surgeon}`}
            />

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Details */}
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="rounded-2xl border border-secondary bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-heading">
                    Contact Information
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-body transition-colors hover:text-primary"
                      >
                        {loc.address}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-primary" />
                      <a
                        href={`tel:${loc.phoneRaw}`}
                        className="text-sm text-body transition-colors hover:text-primary"
                      >
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-primary" />
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-sm text-body transition-colors hover:text-primary"
                      >
                        {loc.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-body">
                        {loc.hours}, Sat-Sun Closed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="rounded-2xl border border-secondary bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    <h3 className="font-heading text-lg font-bold text-heading">
                      Services Offered
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {loc.services.map((service) => (
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

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-secondary shadow-sm">
                <iframe
                  src={loc.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.name} office`}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
