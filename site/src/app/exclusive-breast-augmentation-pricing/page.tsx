import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import FAQSection from "@/components/sections/FAQSection";
import {
  DollarSign,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  ShieldCheck,
  Star,
  Award,
  Phone,
  Stethoscope,
  CreditCard,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Exclusive Breast Augmentation Pricing | Specialized Plastic Surgery",
  description:
    "All-inclusive breast augmentation starting at $9,000 with Dr. Chris Devulapalli at our Westchester, NY office. Limited time offer with no hidden fees.",
};

const includedItems = [
  "Board-certified surgeon fee",
  "Anesthesia fees",
  "Facility and operating room costs",
  "Choice of silicone or saline implants",
  "All pre-operative and post-operative appointments",
  "Post-operative garments and supplies",
  "Dedicated team support throughout your journey",
  "No hidden fees or surprise charges",
];

const faqs = [
  {
    question: "What is included in the $9,000 all-inclusive price?",
    answer:
      "The all-inclusive price covers your surgeon fee, anesthesia, facility costs, choice of silicone or saline implants, post-operative garments and supplies, and all standard follow-up visits. There are no hidden fees. Additional costs for prescriptions or medical testing are not included.",
  },
  {
    question: "Which implant brands are available?",
    answer:
      "Dr. Chris offers a range of implant options including Motiva, Allergan Natrelle, and Mentor. During your consultation, he will recommend the best option based on your anatomy and goals.",
  },
  {
    question: "How do I book this offer?",
    answer:
      "Call our office at (914) 874-0900 to schedule a free consultation and mention the breast augmentation special offer. Full payment is due two weeks before your procedure date.",
  },
  {
    question: "Can I combine this with other procedures?",
    answer:
      "Yes. You can add liposuction, tummy tuck, breast lift, or other procedures. Pricing for combined procedures will be customized during your consultation.",
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
      "Breast augmentation with Dr. Chris is performed at our AAAASF-accredited surgical facility in Harrison, NY (Westchester County), with a dedicated team including an anesthetist with over 30 years of experience.",
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
      {/* ── Custom Landing Page Header ── */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/images/logos/black-logo.webp"
              alt="Specialized Plastic Surgery"
              width={200}
              height={50}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${ny.phoneRaw}`}
              className="hidden items-center gap-2 text-sm font-bold text-heading transition-colors hover:text-primary sm:flex"
            >
              <Phone className="h-4 w-4 text-primary" />
              {ny.phone}
            </a>
            <Link
              href="#contact-form"
              className="rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/90"
            >
              Claim This Offer
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden bg-heading">
        <Image
          src="https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-129.jpg"
          alt="Breast Augmentation"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Westchester, NY
          </p>
          <h1 className="font-heading mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Breast Augmentation Special Offer
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85">
            All-inclusive breast augmentation starting at $9,000 with Dr. Chris
            Devulapalli at our Westchester, NY office.
          </p>
          <Link
            href="#contact-form"
            className="mt-8 inline-block rounded-md border-2 border-gold bg-gold px-8 py-3 text-sm font-bold uppercase tracking-wider text-heading transition-all hover:bg-transparent hover:text-white hover:border-white"
          >
            Claim This Offer
          </Link>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Limited Time Offer
              </p>
              <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
                No Hidden Fees, Just Exclusive Savings
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                For a limited time, Dr. Chris Devulapalli is offering all-inclusive breast augmentation starting at $9,000 at our Harrison, NY location. This promotional price includes everything you need for your procedure, with absolutely no hidden fees or surprise charges.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {includedItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-body">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs text-body/60">
                * Additional costs for prescriptions or medical testing are not included.
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm font-medium text-heading">
                  This offer is available through{" "}
                  <span className="text-primary">3/30/2026</span>. Schedule
                  your consultation today to secure this pricing.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-warm-grey p-8 shadow-sm sm:p-10">
              <div className="mb-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  All-Inclusive Starting At
                </p>
                <p className="mt-3 font-heading text-6xl font-bold text-heading">
                  $9,000
                </p>
                <p className="mt-2 text-sm text-body">
                  Everything included, no surprises
                </p>
              </div>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
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
              <div className="mt-8">
                <Link
                  href="#contact-form"
                  className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-gold bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-heading transition-all hover:bg-heading hover:text-white hover:border-heading"
                >
                  Claim This Offer
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-body/60">
                <CreditCard className="h-4 w-4" />
                <span>0% APR financing available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Feature */}
      <section className="relative bg-heading py-14 sm:py-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03]">
            <div className="flex flex-col md:flex-row">
              {/* Doctor Image */}
              <div className="relative w-full flex-shrink-0 md:w-[380px] lg:w-[440px]">
                <div className="relative h-80 md:h-full md:min-h-[520px]">
                  <Image
                    src="https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-116.jpg"
                    alt={drChris.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 440px"
                  />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Your Surgeon
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
                  {drChris.name}, {drChris.credentials}
                </h2>
                <p className="mt-1 text-base font-medium text-primary">
                  {drChris.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {drChris.philosophy}
                </p>

                {/* Credentials */}
                <div className="mt-6 space-y-2">
                  {drChris.boardCertifications.slice(0, 4).map((cert) => (
                    <div key={cert} className="flex items-start gap-2.5">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      <span className="text-sm text-white/70">{cert}</span>
                    </div>
                  ))}
                </div>

                {/* Recognition */}
                <div className="mt-5 space-y-2">
                  {drChris.recognition.slice(0, 3).map((r) => (
                    <div key={r} className="flex items-center gap-2.5">
                      <Star className="h-4 w-4 shrink-0 text-gold" />
                      <span className="text-sm text-white/80">{r}</span>
                    </div>
                  ))}
                </div>

                {/* Location & Phone */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                    </div>
                    {ny.address}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <a
                      href={`tel:${ny.phoneRaw}`}
                      className="text-sm font-semibold text-primary transition-colors hover:text-white"
                    >
                      {ny.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={`/doctors/${drChris.slug}`}
                    className="inline-flex items-center gap-2 rounded-md border-2 border-white bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-heading transition-all hover:bg-transparent hover:text-white"
                  >
                    View Full Profile
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-transparent hover:text-primary"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Simple Process
            </p>
            <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
              Wondering How It Works?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-body">
              From your first call to your final follow-up, our team guides you through every step.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                icon: Phone,
                title: "Call Our Office",
                description:
                  "Call (914) 874-0900 to schedule your free consultation. Mention the breast augmentation special offer.",
              },
              {
                step: "02",
                icon: Stethoscope,
                title: "Meet Dr. Chris",
                description:
                  "Discuss your goals, review implant options, and receive a personalized surgical plan during your consultation.",
              },
              {
                step: "03",
                icon: CalendarCheck,
                title: "Schedule Surgery",
                description:
                  "Choose your date and complete pre-operative preparation. Full payment is due two weeks before your procedure.",
              },
              {
                step: "04",
                icon: Star,
                title: "Love Your Results",
                description:
                  "Return to light activities within days and enjoy your new look with comprehensive follow-up care included.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span className="font-heading text-4xl font-bold text-primary/15">
                  {item.step}
                </span>
                <div className="mt-3 mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-base font-bold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} heading="Breast Augmentation FAQ" />

      {/* Contact Form */}
      <section id="contact-form" className="py-14 sm:py-20" style={{ backgroundImage: "url('/images/gallery-page/marble-bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Claim This Offer"
              title="Schedule Your Consultation"
              description="Fill out the form below to schedule your consultation with Dr. Chris Devulapalli and lock in this exclusive pricing."
              centered
            />
            <div className="mt-8 rounded-xl bg-white p-8 shadow-lg sm:p-10">
              <ContactForm
                fixedLocation="NY"
                fixedDoctor="Dr. Chris Devulapalli, MD"
                recipientEmail="Westchester@myspsdocs.com"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Custom Landing Page Footer ── */}
      <footer className="bg-heading py-10">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="text-center sm:text-left">
              <Image
                src="/images/logos/white-logo.webp"
                alt="Specialized Plastic Surgery"
                width={220}
                height={50}
                className="mx-auto sm:mx-0"
              />
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-primary">
                New York Office
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 text-sm text-white/70 sm:items-end">
              <span>Mon - Fri: 9am - 5PM</span>
              <span>{ny.address}</span>
              <a
                href={`mailto:${ny.email}`}
                className="transition-colors hover:text-primary"
              >
                {ny.email}
              </a>
              <a
                href={`tel:${ny.phoneRaw}`}
                className="font-bold text-primary transition-colors hover:text-white"
              >
                {ny.phone}
              </a>
              <a
                href={ny.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                @chrisdevulapalliMD
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-6 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Specialized Plastic Surgery | All Rights Reserved.
            </p>
            <p className="text-xs text-white/40">
              Built by{" "}
              <a
                href="https://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-primary"
              >
                CalTech Web
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
