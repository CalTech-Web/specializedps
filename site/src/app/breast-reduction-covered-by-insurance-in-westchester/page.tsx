import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { doctors } from "@/data/doctors";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import {
  Shield,
  Star,
  Award,
  Users,
  CheckCircle,
  ClipboardList,
  FileCheck,
  CalendarCheck,
  HeartPulse,
  Stethoscope,
  Building2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Zap,
  Smile,
  Activity,
  Pill,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Breast Reduction Covered by Insurance in Westchester, NY | Dr. Devulapalli",
  description:
    "Learn how breast reduction surgery may be covered by your insurance in Westchester, NY. Dr. Chris Devulapalli has performed over 1,000 breast reductions with a dedicated insurance concierge team to help secure your coverage.",
};

const trustStats = [
  { value: "1,000+", label: "Breast Reductions Performed" },
  { value: "5-Star", label: "Google Reviews" },
  { value: "Board", label: "Certified Plastic Surgeon" },
  { value: "Fellowship", label: "Trained Breast Specialist" },
];

const symptoms = [
  "Chronic back, neck, or shoulder pain unresponsive to conservative treatment",
  "Skin irritations, rashes, or infections under the breasts",
  "Deep shoulder indentations from bra straps",
  "Postural problems or difficulty exercising",
  "Sagging breasts (ptosis) causing functional limitations",
  "Stretched skin from weight changes or pregnancy",
  "Difficulty finding clothing that fits properly",
];

const processSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Free Consultation",
    description:
      "Meet with Dr. Devulapalli for a complimentary evaluation. We assess your symptoms, discuss your goals, and determine if your breast reduction qualifies for insurance coverage.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Pre-Authorization",
    description:
      "Our dedicated insurance concierge team handles all the paperwork. We document your symptoms, meet tissue removal criteria, and submit a thorough case to your insurance carrier.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Schedule Your Surgery",
    description:
      "Once approved, we coordinate every detail of your procedure. From pre-operative preparation to post-surgical recovery, our team guides you through the entire process.",
  },
];

const coverageHelp = [
  "Free insurance verification before your consultation",
  "Prior authorization handled by our dedicated billing team",
  "Thorough documentation of medical necessity and symptoms",
  "Tissue removal criteria carefully met and recorded",
  "Claims submission and appeals support included",
  "Clear cost estimates provided before your procedure",
];

const erasBenefits = [
  {
    icon: Zap,
    title: "Faster Recovery",
    description:
      "Return to daily activities sooner with our evidence-based recovery protocols.",
  },
  {
    icon: Pill,
    title: "Less Pain",
    description:
      "Multimodal pain management with reduced reliance on opioid medications.",
  },
  {
    icon: Shield,
    title: "Fewer Complications",
    description:
      "Optimized protocols significantly reduce post-operative risks.",
  },
  {
    icon: Smile,
    title: "Greater Comfort",
    description:
      "Anti-nausea protocols and early mobilization for a smoother experience.",
  },
];

const hospitals = [
  "White Plains Hospital",
  "Rye Ambulatory Center",
  "Lenox Hill Hospital",
  "Northern Westchester Hospital",
];

const serviceAreas = [
  "White Plains",
  "Eastchester",
  "Scarsdale",
  "Yonkers",
  "Tuckahoe",
  "Bronxville",
  "Mamaroneck",
  "New Rochelle",
  "Harrison",
  "Port Chester",
  "Hartsdale",
  "Mount Vernon",
  "Dobbs Ferry",
  "Elmsford",
  "Mount Kisco",
  "Purchase",
  "Greenwich",
  "Tarrytown",
];

export default function BreastReductionInsuranceWestchesterPage() {
  const drChris = doctors.find((d) => d.slug === "chris-devulapalli")!;
  const ny = siteConfig.locations.ny;

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Breast Reduction Through Insurance in Westchester, NY"
        subtitle="Over 1,000 breast reductions performed. Our dedicated insurance concierge team helps you navigate every step of the approval process so you can focus on your care."
        backgroundImage="https://specializedplasticsurgery.com/wp-content/uploads/2025/11/Header-Image.jpg"
        ctaText="Schedule Free Consultation"
        ctaLink="#contact-form"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Breast Reduction Insurance, Westchester" },
        ]}
      />

      {/* Trust Stats Bar */}
      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <span className="font-heading text-2xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-body">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Intro */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Philosophy"
                title="You Often Get More, Not Less"
                centered={false}
              />
              <p className="mt-5 text-base leading-relaxed text-body">
                Many patients think of breast reduction as losing something, but Dr. Devulapalli sees it differently. Breast reduction is really breast reshaping, focused on improving form, proportion, posture, and comfort. The goal is not just smaller breasts, it is a body that feels balanced, proportional, and free from the chronic pain that has been holding you back.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                When breast reduction is medically necessary, insurance may cover the procedure. Dr. Devulapalli and our insurance concierge team work together to document your case thoroughly and help secure the coverage you deserve.
              </p>
              <blockquote className="mt-8 rounded-lg border-l-4 border-primary bg-warm-grey p-6">
                <p className="font-heading text-lg font-bold leading-relaxed text-heading">
                  &ldquo;Reduction sounds like you are losing something, but often you get more: better balance, better posture, easier movement, better proportion.&rdquo;
                </p>
                <p className="mt-3 text-sm font-bold text-primary">
                  Dr. Chris Devulapalli, MD
                </p>
              </blockquote>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={drChris.image}
                alt="Dr. Chris Devulapalli, MD"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heading/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-xl font-bold text-white">
                  {drChris.name}, {drChris.credentials}
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Board-Certified Plastic Surgeon
                </p>
                <p className="text-sm text-white/80">
                  Fellowship-Trained Breast Surgery Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Necessity / Symptoms */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Medical Necessity"
                title="Symptoms of Medical Necessity"
                centered={false}
                light
              />
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Insurance carriers typically require documentation of specific symptoms that demonstrate breast reduction is medically necessary, not just cosmetic. If you experience any of the following, your procedure may qualify for insurance coverage.
              </p>
            </div>

            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Common Qualifying Symptoms
                </h3>
              </div>
              <ul className="space-y-4">
                {symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-white/80">
                      {symptom}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Coverage / When is it Covered */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Insurance Coverage"
            title="When Is Breast Reduction Covered by Insurance?"
            description="Most insurance plans will cover breast reduction when it is deemed medically necessary. Coverage typically requires documentation of chronic symptoms, failed conservative treatments, and a minimum tissue removal threshold."
            centered
          />

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-lg border border-gray-100 bg-warm-grey p-8">
              <p className="text-base leading-relaxed text-body">
                Our practice has extensive experience navigating insurance approvals for breast reduction. We work with a wide range of insurance carriers and understand the specific documentation requirements each plan demands. Our insurance concierge team handles everything from initial verification to pre-authorization and claims submission, so you never have to deal with the paperwork alone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                Even if you have been denied in the past, Dr. Devulapalli and our team may be able to help. We know how to present your case effectively and have successfully appealed denials for many of our patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Our Streamlined Process"
            title="Breast Reduction & Insurance: Three Simple Steps"
            description="We have simplified the insurance approval process so you can focus on what matters most, your health and well-being."
            centered
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="group relative rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -top-4 left-8">
                  <span className="inline-flex h-8 items-center rounded-full bg-primary px-4 text-xs font-bold uppercase tracking-wider text-white">
                    Step {step.step}
                  </span>
                </div>
                <div className="mt-4 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-heading">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Expert */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_420px]">
            <div>
              <SectionHeading
                eyebrow="Your Surgeon"
                title="Meet Dr. Chris Devulapalli"
                centered={false}
              />
              <p className="mt-2 text-sm font-medium text-primary">
                Board-Certified Plastic Surgeon | Advanced Fellowship-Trained
                Breast Surgery Specialist
              </p>
              <p className="mt-5 text-base leading-relaxed text-body">
                {drChris.philosophy}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Shield,
                    title: "Board Certified",
                    text: "American Board of Plastic Surgery",
                  },
                  {
                    icon: Award,
                    title: "Castle Connolly Top Doctor",
                    text: "Recognized for exceptional care",
                  },
                  {
                    icon: Star,
                    title: "Fellowship Trained",
                    text: "Georgetown University & Johns Hopkins",
                  },
                  {
                    icon: Users,
                    title: "1,000+ Reductions",
                    text: "Extensive breast surgery experience",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-warm-grey p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-heading">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-body">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/doctors/chris-devulapalli"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-heading"
              >
                View Full Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={drChris.aboutImage || drChris.image}
                  alt={drChris.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Secure Coverage */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Insurance Support"
                title="How We Help Secure Your Coverage"
                centered={false}
                light
              />
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Navigating insurance for breast reduction can be overwhelming. Our dedicated insurance concierge team takes the burden off your shoulders by handling every aspect of the approval process. From initial verification to final claims submission, we are with you every step of the way.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                We work with a wide range of insurance carriers and understand the specific documentation and criteria each plan requires. Our goal is to present the strongest possible case for your coverage.
              </p>
            </div>

            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8">
              <h3 className="font-heading mb-6 text-xl font-bold text-white">
                What Our Team Handles
              </h3>
              <ul className="space-y-4">
                {coverageHelp.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ERAS Recovery */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Enhanced Recovery"
            title="Our Commitment to Your Recovery"
            description="Every breast reduction at our practice benefits from our Enhanced Recovery After Surgery (ERAS) protocol, an evidence-based framework designed to help you heal faster and more comfortably."
            centered
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {erasBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-heading">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/enhanced-recovery-after-surgery"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-heading"
            >
              Learn More About Our ERAS Protocol
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hospital Affiliations */}
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Facilities"
            title="Hospital Affiliations"
            description="Dr. Devulapalli holds privileges at leading hospitals and surgical centers across Westchester County and the greater New York area, in addition to our in-office AAAA-SF accredited OR suite."
            centered
          />

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {hospitals.map((hospital) => (
              <div
                key={hospital}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-6 py-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <span className="font-heading text-base font-bold text-heading">
                  {hospital}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Westchester */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Service Areas"
            title="Serving Patients Throughout Westchester County"
            light
            centered
          />

          <div className="mx-auto mt-6 max-w-3xl">
            <p className="text-center text-base leading-relaxed text-white/70">
              Our Harrison, NY office is conveniently located to serve patients from communities across Westchester County and the surrounding region.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-primary/30 hover:bg-primary/10"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {area}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-lg border border-white/[0.06] bg-white/[0.03] p-6 text-center">
            <Stethoscope className="mx-auto h-8 w-8 text-primary" />
            <h3 className="font-heading mt-3 text-xl font-bold text-white">
              Westchester Office
            </h3>
            <p className="mt-2 text-sm text-white/70">{ny.address}</p>
            <a
              href={`tel:${ny.phoneRaw}`}
              className="mt-2 inline-block text-lg font-bold text-primary transition-colors hover:text-white"
            >
              {ny.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="relative bg-white py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_520px]">
            {/* Left: Info */}
            <div>
              <SectionHeading
                eyebrow="Get Started"
                title="Request Your Free Insurance Consultation"
                description="Take the first step toward relief. Fill out the form and our team will verify your insurance coverage and schedule your complimentary consultation with Dr. Devulapalli."
                centered={false}
              />

              <div className="mt-10 space-y-5">
                <h3 className="font-heading text-xl font-bold text-heading">
                  What Happens Next
                </h3>
                {[
                  {
                    step: "1",
                    title: "Insurance Verification",
                    text: "We verify your insurance benefits and determine your coverage for breast reduction at no cost to you.",
                  },
                  {
                    step: "2",
                    title: "Complimentary Consultation",
                    text: "Meet Dr. Devulapalli for a thorough evaluation of your symptoms and discussion of your goals.",
                  },
                  {
                    step: "3",
                    title: "Pre-Authorization & Scheduling",
                    text: "Our team handles all documentation and pre-authorization, then schedules your procedure at your convenience.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-heading">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-body">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="mt-10 rounded-lg border border-gray-100 bg-warm-grey p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-heading">
                  Prefer to Call?
                </p>
                <div className="mt-3 space-y-2.5">
                  <a
                    href={`tel:${ny.phoneRaw}`}
                    className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-heading"
                  >
                    <Phone className="h-4 w-4" />
                    {ny.phone}
                  </a>
                  <a
                    href={`mailto:${ny.email}`}
                    className="flex items-center gap-2 text-sm text-body transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    {ny.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-lg border border-gray-100 bg-warm-grey p-8 shadow-sm lg:sticky lg:top-24">
              <h3 className="font-heading text-xl font-bold text-heading">
                Schedule Your Free Consultation
              </h3>
              <p className="mt-2 text-sm text-body">
                Complete the form below and our insurance concierge team will
                reach out to verify your coverage and schedule your appointment.
              </p>
              <div className="mt-6">
                <ContactForm
                  fixedLocation="NY"
                  fixedDoctor="Dr. Chris Devulapalli, MD"
                  recipientEmail="Westchester@myspsdocs.com"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
