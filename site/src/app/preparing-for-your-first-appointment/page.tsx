import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import {
  ClipboardList,
  HelpCircle,
  Users,
  FileText,
  HeartPulse,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Preparing for Your First Appointment | Specialized Plastic Surgery",
  description:
    "Tips and guidance to help you prepare for your first consultation at Specialized Plastic Surgery. Learn what to bring, what to expect, and how to get the most out of your visit.",
};

const preparationTips = [
  {
    icon: ClipboardList,
    title: "Complete Your Intake Forms",
    description:
      "We will send your intake forms electronically before your visit. Completing them in advance saves time and allows your surgeon to review your history beforehand, making your consultation more productive.",
  },
  {
    icon: HelpCircle,
    title: "Organize Your Questions",
    description:
      "Write down any questions or concerns you have about the procedure, recovery, costs, or expected results. Having a list ensures you cover everything during your consultation and leave feeling confident in your decision.",
  },
  {
    icon: Users,
    title: "Bring a Support Person",
    description:
      "Consider bringing a trusted friend or family member to your consultation. They can help you remember important details, ask additional questions, and provide emotional support as you explore your options.",
  },
  {
    icon: FileText,
    title: "Disclose Your Full Medical History",
    description:
      "Be open and thorough about your medical history, including past surgeries, current medications, allergies, and any chronic conditions. This information helps your surgeon create the safest possible plan for your procedure.",
  },
  {
    icon: HeartPulse,
    title: "Ask About Recovery",
    description:
      "Understanding the recovery process is essential for planning. Ask about expected downtime, activity restrictions, pain management, and any special care instructions. This helps you prepare your home and schedule accordingly.",
  },
];

export default function PreparingForFirstAppointmentPage() {
  return (
    <>
      <HeroSection
        title="Preparing for Your First Appointment"
        subtitle="Your consultation is the first step toward achieving your goals. Here is how to make the most of your visit."
        backgroundImage="/images/hero/SPS-Image-130.jpg"
        ctaText="Schedule Consultation"
        ctaLink="#contact-form"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Preparing for Your First Appointment" },
        ]}
      />

      {/* Preparation Tips */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Before Your Visit"
            title="How to Prepare"
            description="A little preparation goes a long way. Follow these tips to ensure your consultation is thorough, comfortable, and productive."
            centered
          />

          <div className="mt-12 space-y-6">
            {preparationTips.map((tip, i) => (
              <div
                key={i}
                className="flex gap-6 rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <tip.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-heading">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-body">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Our Philosophy
          </p>
          <blockquote className="mt-6 font-heading text-2xl font-bold leading-relaxed text-white sm:text-3xl">
            &ldquo;Healing is collaborative. The best outcomes happen when patients and surgeons work together from the very first conversation.&rdquo;
          </blockquote>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="During Your Visit"
            title="What to Expect at Your Consultation"
            centered
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              "A warm welcome from our front desk team",
              "A private, one-on-one discussion with your board-certified surgeon",
              "A thorough review of your goals, concerns, and medical history",
              "A personalized treatment plan tailored to your anatomy and desired outcome",
              "A transparent breakdown of all costs, financing options, and next steps",
              "Ample time to ask questions and feel confident in your decision",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-base leading-relaxed text-body">
                  {item}
                </span>
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
              eyebrow="Ready to Begin?"
              title="Schedule Your First Appointment"
              description="Fill out the form below and our team will reach out to schedule your consultation at your preferred location."
              centered
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
