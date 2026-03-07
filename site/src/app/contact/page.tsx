import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
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
      {/* Hero */}
      <HeroSection
        title="Contact Us"
        subtitle="Ready For A Consultation?"
        ctaText="Call (973) 561-0900"
        ctaLink="tel:9735610900"
      />

      {/* Form Section */}
      <section className="bg-blog-bg py-24 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
              Send Us a Message
            </h2>
            <p className="mt-4 text-center text-lg text-body">
              Fill out the form below and our team will get back to you
              promptly.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
            Our Locations
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.key}
                className="border border-peach bg-peach-light p-8 shadow-sm"
              >
                <h3 className="font-heading text-xl font-bold text-heading">
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {loc.surgeon}
                </p>

                <div className="mt-6 space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-body transition-colors hover:text-primary"
                    >
                      {loc.address}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="text-sm font-semibold text-primary transition-colors hover:text-heading"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <a
                      href={`mailto:${loc.email}`}
                      className="text-sm text-body transition-colors hover:text-primary"
                    >
                      {loc.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-body">{loc.hours}</span>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary">
                      <Instagram className="h-4 w-4 text-white" />
                    </div>
                    <a
                      href={loc.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-body transition-colors hover:text-primary"
                    >
                      {loc.instagram}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={contactFaqs} />

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
