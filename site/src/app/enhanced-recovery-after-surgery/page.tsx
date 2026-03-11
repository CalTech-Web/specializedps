import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import {
  ClipboardList,
  Stethoscope,
  HeartPulse,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Smile,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enhanced Recovery After Surgery (ERAS) | Specialized Plastic Surgery",
  description:
    "Discover our Enhanced Recovery After Surgery (ERAS) program. Evidence-based protocols across three phases of care to optimize your surgical outcome and recovery.",
};

const pillars = [
  {
    icon: ClipboardList,
    title: "Preoperative Phase",
    subtitle: "Before Your Surgery",
    items: [
      "Comprehensive health optimization and medical clearance",
      "Nutritional counseling and pre-operative diet guidance",
      "Detailed education about your procedure and what to expect",
      "Anxiety reduction through thorough preparation and communication",
      "Medication adjustments to optimize surgical outcomes",
    ],
  },
  {
    icon: Stethoscope,
    title: "Intraoperative Phase",
    subtitle: "During Your Surgery",
    items: [
      "Minimally invasive surgical techniques to reduce tissue trauma",
      "Advanced anesthesia protocols tailored to your procedure",
      "Precise fluid management to prevent nausea and swelling",
      "Local anesthetic nerve blocks for superior pain control",
      "Temperature regulation to maintain optimal body conditions",
    ],
  },
  {
    icon: HeartPulse,
    title: "Postoperative Phase",
    subtitle: "After Your Surgery",
    items: [
      "Multimodal pain management with reduced reliance on opioids",
      "Early mobilization to improve circulation and prevent complications",
      "Anti-nausea protocols for a more comfortable recovery",
      "Structured follow-up schedule with your surgical team",
      "Personalized activity progression based on your healing",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Faster Recovery",
    description:
      "Patients on our ERAS protocol typically return to daily activities sooner than with traditional recovery approaches.",
  },
  {
    icon: Shield,
    title: "Reduced Complications",
    description:
      "Evidence-based protocols significantly reduce the risk of post-operative complications, infections, and readmissions.",
  },
  {
    icon: Smile,
    title: "Greater Comfort",
    description:
      "Our multimodal pain management approach means less reliance on opioids and a more comfortable overall experience.",
  },
  {
    icon: TrendingUp,
    title: "Better Outcomes",
    description:
      "By optimizing every phase of your surgical journey, ERAS helps achieve the best possible aesthetic and functional results.",
  },
];

export default function EnhancedRecoveryAfterSurgeryPage() {
  return (
    <>
      <HeroSection
        title="Enhanced Recovery After Surgery"
        subtitle="Our ERAS program applies evidence-based protocols across every phase of your care, from preparation to full recovery, for faster healing and better results."
        backgroundImage="/images/hero/SPS-Image-115.jpg"
        ctaText="Schedule Consultation"
        ctaLink="#contact-form"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Enhanced Recovery After Surgery" },
        ]}
      />

      {/* What is ERAS */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="About ERAS"
            title="What Is Enhanced Recovery After Surgery?"
            centered={false}
          />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-body">
            Enhanced Recovery After Surgery (ERAS) is an evidence-based framework that optimizes patient care before, during, and after surgery. Originally developed for major abdominal procedures, ERAS principles have been successfully adapted for plastic surgery to reduce recovery time, minimize discomfort, and improve overall outcomes.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-body">
            At Specialized Plastic Surgery, we integrate ERAS protocols into every procedure we perform. This means every aspect of your surgical journey is carefully planned and coordinated to give you the smoothest, fastest, and most comfortable recovery possible.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
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
            eyebrow="The ERAS Framework"
            title="Three Pillars of Enhanced Recovery"
            light
            centered
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {pillar.subtitle}
                </p>
                <ul className="mt-5 space-y-3">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-white/75">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Why ERAS"
            title="Benefits of Enhanced Recovery"
            centered
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
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
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="relative bg-white py-14 sm:py-16">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "url('/images/gallery-page/marble-bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Get Started"
              title="Schedule Your Consultation"
              description="Learn more about how our ERAS protocols can benefit your procedure. Fill out the form below and our team will reach out to you."
              centered
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
