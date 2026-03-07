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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-3xl font-bold text-[#32373c]">
              Send Us a Message
            </h2>
            <p className="mt-4 text-center text-lg text-gray-600">
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
      <section className="bg-[#f5f5f5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#32373c]">
            Our Locations
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.key}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#32373c]">
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#4054b2]">
                  {loc.surgeon}
                </p>

                <div className="mt-6 space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#fb8e28]" />
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 transition-colors hover:text-[#4054b2]"
                    >
                      {loc.address}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-[#fb8e28]" />
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="text-sm font-semibold text-[#4054b2] transition-colors hover:text-[#1f385f]"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-[#fb8e28]" />
                    <a
                      href={`mailto:${loc.email}`}
                      className="text-sm text-gray-600 transition-colors hover:text-[#4054b2]"
                    >
                      {loc.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-[#fb8e28]" />
                    <span className="text-sm text-gray-600">{loc.hours}</span>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 shrink-0 text-[#fb8e28]" />
                    <a
                      href={loc.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 transition-colors hover:text-[#4054b2]"
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
