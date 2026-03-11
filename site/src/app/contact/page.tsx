import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";

import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Specialized Plastic Surgery",
  description:
    "Schedule a consultation with our board-certified plastic surgeons. Offices in Millburn, NJ and Harrison, NY.",
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

const contactFaqs = [
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by filling out our contact form above, calling our New Jersey office at (973) 561-0900, or calling our New York office at (914) 874-0900. Our team will work with you to find a convenient time.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a valid photo ID, your insurance card (if applicable), a list of current medications, and any relevant medical records or imaging. If you are considering breast reconstruction, please bring any surgical or pathology reports.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We accept most major insurance plans for reconstructive procedures. Aesthetic procedures are typically not covered by insurance. Our team can verify your benefits and discuss payment options during your consultation.",
  },
  {
    question: "What is the consultation process like?",
    answer:
      "During your consultation, you will meet with one of our board-certified plastic surgeons to discuss your goals, review your medical history, and explore your options. The surgeon will provide personalized recommendations and answer all of your questions.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we offer virtual consultations for certain procedures. Please contact our office to find out if a virtual consultation is right for you.",
  },
  {
    question: "What financing options are available?",
    answer:
      "We offer flexible financing options to help make your procedure more affordable. Ask our team about available payment plans during your consultation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Ready to take the next step? Schedule a consultation with our board-certified plastic surgeons today."
        backgroundImage="/images/hero/contact-hero.webp"
        ctaText="Call (973) 561-0900"
        ctaLink="tel:9735610900"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Form Section */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Get in Touch"
              title="Send Us a Message"
              description="Fill out the form below and our team will get back to you promptly."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
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
            eyebrow="Visit Us"
            title="Our Locations"
            light
          />
          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.key}
                className="overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.03] transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
              >
                <div className="h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold text-white">
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
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {loc.address}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <a
                        href={`tel:${loc.phoneRaw}`}
                        className="text-sm font-semibold text-primary transition-colors hover:text-white"
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
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {loc.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-white/70">{loc.hours}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Instagram className="h-4 w-4 text-primary" />
                      </div>
                      <a
                        href={loc.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {loc.instagram}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={contactFaqs} />

    </>
  );
}
