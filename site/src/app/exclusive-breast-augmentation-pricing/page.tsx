import type { Metadata } from "next";
import Image from "next/image";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";
import {
  DollarSign,
  CheckCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Exclusive Breast Augmentation Pricing | Specialized Plastic Surgery",
  description:
    "All-inclusive breast augmentation starting at $9,000 with Dr. Chris Devulapalli at our Westchester, NY office. Limited time offer with no hidden fees.",
};

const includedItems = [
  "Board-certified surgeon fee",
  "Anesthesia",
  "Facility costs",
  "Post-operative garments and supplies",
  "All follow-up visits",
  "No hidden fees or surprise charges",
];

const faqs = [
  {
    question: "What is included in the $9,000 all-inclusive price?",
    answer:
      "The all-inclusive price covers your surgeon fee, anesthesia, facility costs, post-operative garments and supplies, and all standard follow-up visits. There are no hidden fees.",
  },
  {
    question: "Which implant brands are available?",
    answer:
      "Dr. Chris offers a range of implant options including Motiva, Allergan Natrelle, and Mentor. During your consultation, he will recommend the best option based on your anatomy and goals.",
  },
  {
    question: "How long is the recovery period?",
    answer:
      "Most patients return to light daily activities within 3 to 5 days and resume exercise within 4 to 6 weeks. Dr. Chris will provide a detailed recovery plan tailored to your procedure.",
  },
  {
    question: "Is financing available?",
    answer:
      "Yes. We accept CareCredit and Cherry Payments, both of which offer 0% APR promotional financing options. Our team can help you apply before your procedure date.",
  },
  {
    question: "Where is the procedure performed?",
    answer:
      "Breast augmentation with Dr. Chris is performed at our accredited surgical facility in Harrison, NY (Westchester County).",
  },
  {
    question: "How do I know if I am a good candidate?",
    answer:
      "The best way to determine candidacy is through a one-on-one consultation with Dr. Chris. Generally, good candidates are in good overall health, have realistic expectations, and are interested in enhancing the size, shape, or symmetry of their breasts.",
  },
];

export default function ExclusiveBreastAugmentationPricingPage() {
  const drChris = doctors.find((d) => d.slug === "chris-devulapalli")!;
  const ny = siteConfig.locations.ny;

  return (
    <>
      <HeroSection
        title="Exclusive Breast Augmentation Pricing"
        subtitle="All-inclusive breast augmentation starting at $9,000 with Dr. Chris Devulapalli at our Westchester, NY office."
        backgroundImage="/images/hero/SPS-Image-129.jpg"
        ctaText="Claim This Offer"
        ctaLink="#contact-form"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Exclusive Breast Augmentation Pricing" },
        ]}
      />

      {/* Pricing Highlight */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Limited Time Offer"
                title="$9,000 All-Inclusive Breast Augmentation"
                centered={false}
              />
              <p className="mt-4 text-base leading-relaxed text-body">
                For a limited time, Dr. Chris Devulapalli is offering all-inclusive breast augmentation starting at $9,000. This promotional price includes everything you need, with absolutely no hidden fees or surprise charges.
              </p>

              <div className="mt-8 space-y-3">
                {includedItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base text-body">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm font-medium text-heading">
                  This offer is available through <span className="text-primary">3/30/2026</span>. Schedule your consultation today to secure this pricing.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-100 bg-warm-grey p-8 shadow-sm">
              <div className="mb-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Starting At
                </p>
                <p className="mt-2 font-heading text-5xl font-bold text-heading">
                  $9,000
                </p>
                <p className="mt-1 text-sm text-body">All-inclusive pricing</p>
              </div>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="text-center">
                  <DollarSign className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-heading">
                    No Hidden Fees
                  </p>
                </div>
                <div className="text-center">
                  <ShieldCheck className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-heading">
                    Board Certified
                  </p>
                </div>
                <div className="text-center">
                  <Star className="mx-auto h-6 w-6 text-primary" />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-heading">
                    Top Rated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Feature */}
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-lg shadow-lg">
              <Image
                src={drChris.image}
                alt={drChris.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Your Surgeon
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
                {drChris.name}, {drChris.credentials}
              </h2>
              <p className="mt-2 text-sm font-medium text-primary">
                {drChris.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                {drChris.philosophy}
              </p>
              <div className="mt-6 space-y-2">
                {drChris.recognition.map((r, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-gold" />
                    <span className="text-sm text-white/80">{r}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-white/70">{ny.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} heading="Breast Augmentation FAQ" />

      {/* Contact Form */}
      <section id="contact-form" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Claim This Offer"
              title="Schedule Your Consultation"
              description="Fill out the form below to schedule your consultation with Dr. Chris Devulapalli and lock in this exclusive pricing."
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
