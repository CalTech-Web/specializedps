import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import {
  Stethoscope,
  Pill,
  Activity,
  Apple,
  HeartPulse,
  CalendarCheck,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enhanced Recovery Protocols | Specialized Plastic Surgery",
  description:
    "Learn about our enhanced recovery protocols designed to minimize discomfort, reduce downtime, and help you heal faster after plastic surgery.",
};

const recoveryComponents = [
  {
    icon: Stethoscope,
    title: "Minimally Invasive Techniques",
    description:
      "Our surgeons use refined, tissue-sparing surgical techniques that reduce trauma to surrounding structures. This approach results in less bruising, less swelling, and a more comfortable recovery.",
  },
  {
    icon: Pill,
    title: "Multimodal Pain Management",
    description:
      "We use a combination of local anesthetics, nerve blocks, and non-opioid medications to manage pain effectively while minimizing the need for narcotic painkillers. Many of our patients report significantly less discomfort than expected.",
  },
  {
    icon: Activity,
    title: "Early Mobilization",
    description:
      "We encourage gentle movement shortly after surgery. Early mobilization improves circulation, reduces the risk of blood clots, and accelerates your overall recovery timeline.",
  },
  {
    icon: Apple,
    title: "Nutrition and Hydration",
    description:
      "Proper nutrition plays a critical role in healing. We provide pre-operative and post-operative dietary guidelines to support tissue repair, reduce inflammation, and boost your energy levels during recovery.",
  },
  {
    icon: HeartPulse,
    title: "Comprehensive Aftercare",
    description:
      "Your recovery is closely monitored by our team. We provide detailed aftercare instructions, direct access to your surgeon for questions, and scheduled check-ins to ensure you are healing on track.",
  },
  {
    icon: CalendarCheck,
    title: "Structured Follow-Up",
    description:
      "We schedule follow-up appointments at key milestones in your recovery to assess your progress, address any concerns, and ensure your results are developing beautifully.",
  },
];

const recoveryTips = [
  "Arrange for a responsible adult to drive you home and stay with you for the first 24 hours",
  "Prepare your recovery area at home with pillows, loose clothing, and easy-to-reach essentials",
  "Fill your prescriptions before your procedure date",
  "Stock up on healthy, easy-to-prepare meals and plenty of water",
  "Follow your surgeon's activity restrictions carefully",
  "Attend all scheduled follow-up appointments",
  "Be patient with your body and give yourself permission to rest",
];

export default function EnhancedRecoveryProtocolsPage() {
  return (
    <>
      <HeroSection
        title="Enhanced Recovery Protocols"
        subtitle="Our evidence-based approach to recovery helps you heal faster, with less discomfort, and get back to your life sooner."
        backgroundImage="/images/hero/SPS-Image-116.jpg"
        ctaText="Schedule Consultation"
        ctaLink="#contact-form"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Enhanced Recovery Protocols" },
        ]}
      />

      {/* Recovery Components */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Our Approach"
            title="Six Components of Enhanced Recovery"
            description="Every aspect of our recovery protocol is designed to work together, helping you return to your daily routine as quickly and comfortably as possible."
            centered
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recoveryComponents.map((component, i) => (
              <div
                key={i}
                className="group rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                  <component.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-heading">
                  {component.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Tips */}
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
          <div className="flex items-center justify-center gap-3 mb-2">
            <Lightbulb className="h-6 w-6 text-gold" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Helpful Tips
            </p>
          </div>
          <h2 className="text-center font-heading text-2xl font-bold text-white sm:text-3xl">
            Recovery Tips for Patients
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {recoveryTips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-base text-white/80">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Learn More"
              title="Schedule Your Consultation"
              description="Have questions about our enhanced recovery protocols? Fill out the form below and our team will be happy to discuss your personalized recovery plan."
              centered
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
