import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Apple,
  Syringe,
  Activity,
  CheckCircle,
  Zap,
  Heart,
  Clock,
  Shield,
  Smile,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enhanced Recovery After Surgery (ERAS)",
  description:
    "Learn about our ERAS protocols at Specialized Plastic Surgery. Evidence-based approaches to faster recovery, reduced complications, and improved patient comfort before, during, and after surgery.",
};

export default function ERASPage() {
  return (
    <>
      <HeroSection
        title="Enhanced Recovery After Surgery"
        subtitle="A patient-centered, evidence-based approach to surgical care that helps you heal faster, feel better, and return to your life sooner."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "ERAS" },
        ]}
      />

      {/* What is ERAS */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="About ERAS"
            title="What Is Enhanced Recovery After Surgery?"
            centered
          />
          <div className="mt-8 space-y-6 text-center">
            <p className="text-lg leading-relaxed text-body">
              ERAS is a comprehensive, evidence-based protocol designed to
              optimize every phase of your surgical experience. Developed from
              decades of clinical research, ERAS combines advanced nutritional
              preparation, opioid-sparing anesthesia techniques, and structured
              post-operative care to reduce complications, minimize discomfort,
              and accelerate your recovery.
            </p>
            <p className="text-lg leading-relaxed text-body">
              At Specialized Plastic Surgery, we integrate ERAS protocols into
              every procedure we perform. This means your body is better prepared
              for surgery, your time in recovery is shorter, and your overall
              experience is safer and more comfortable than traditional surgical
              approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Three Phases */}
      <section className="relative bg-heading py-14 sm:py-16">
        {/* Marble overlay */}
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
            eyebrow="The Protocol"
            title="Three Phases of ERAS"
            description="Each phase is carefully designed to work together, giving your body the best possible foundation for healing."
            centered
            light
          />

          <div className="mt-16 space-y-16">
            {/* Phase 1: Before Surgery */}
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Apple className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                      Phase 1
                    </p>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Before Surgery
                    </h3>
                  </div>
                </div>
                <p className="mb-6 text-base leading-relaxed text-white/70">
                  Preparation begins weeks before your procedure. We focus on
                  optimizing your body&apos;s nutritional status and overall
                  health so you enter the operating room in the best possible
                  condition.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <ul className="space-y-4">
                  {[
                    "Comprehensive nutritional screening and personalized dietary guidance",
                    "Protein-rich diet plan to support tissue healing and recovery",
                    "Vitamin and mineral supplementation tailored to surgical preparation",
                    "Thorough medication review to identify and manage potential interactions",
                    "Discontinuation of supplements and blood thinners that may increase bleeding risk",
                    "Pre-operative counseling to set clear expectations and reduce anxiety",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-base leading-relaxed text-white/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gold gradient bar between phases */}
            <div className="h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

            {/* Phase 2: During Surgery */}
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div className="order-2 rounded-lg border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:order-1">
                <ul className="space-y-4">
                  {[
                    "Opioid-sparing anesthesia protocols using regional nerve blocks and local anesthetics",
                    "Minimally invasive surgical techniques to reduce tissue trauma",
                    "Careful intravenous fluid management to prevent swelling and nausea",
                    "Advanced monitoring to maintain optimal body temperature throughout surgery",
                    "Multi-modal pain control strategies initiated during the procedure",
                    "Techniques that reduce surgical stress response and inflammation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-base leading-relaxed text-white/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Syringe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                      Phase 2
                    </p>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      During Surgery
                    </h3>
                  </div>
                </div>
                <p className="mb-6 text-base leading-relaxed text-white/70">
                  During your procedure, our surgical and anesthesia teams use
                  advanced techniques designed to minimize your body&apos;s
                  stress response, reduce the need for opioid medications, and
                  set the stage for a smoother recovery.
                </p>
              </div>
            </div>

            {/* Gold gradient bar between phases */}
            <div className="h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

            {/* Phase 3: After Surgery */}
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                      Phase 3
                    </p>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      After Surgery
                    </h3>
                  </div>
                </div>
                <p className="mb-6 text-base leading-relaxed text-white/70">
                  Recovery is where ERAS truly makes a difference. Our
                  structured approach to post-operative care prioritizes early
                  mobility, effective pain management with fewer narcotics, and
                  clear guidance for every step of your healing process.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <ul className="space-y-4">
                  {[
                    "Early mobility encouraged within hours of surgery to improve circulation",
                    "Multimodal pain management using non-narcotic medications when possible",
                    "Structured tapering plan to minimize opioid use and side effects",
                    "Comprehensive aftercare instructions with clear milestones and timelines",
                    "Regular follow-up appointments to monitor healing and address concerns",
                    "Nutritional guidance for the recovery period to support tissue repair",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-base leading-relaxed text-white/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="The Results"
            title="Benefits of Our ERAS Approach"
            description="Patients who undergo surgery with ERAS protocols consistently report better outcomes compared to traditional approaches."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Faster Recovery",
                description:
                  "Patients return to daily activities sooner thanks to optimized preparation and minimally invasive techniques.",
              },
              {
                icon: Shield,
                title: "Reduced Complications",
                description:
                  "Evidence-based protocols lower the risk of infection, blood clots, and other post-surgical complications.",
              },
              {
                icon: Heart,
                title: "Better Pain Control",
                description:
                  "Multimodal pain management with fewer narcotics means less nausea, less drowsiness, and greater comfort.",
              },
              {
                icon: Clock,
                title: "Shorter Hospital Stays",
                description:
                  "Many patients are able to go home the same day or earlier than they would with traditional surgical protocols.",
              },
              {
                icon: Smile,
                title: "Improved Patient Satisfaction",
                description:
                  "A more comfortable experience from start to finish leads to higher satisfaction and better overall outcomes.",
              },
              {
                icon: Activity,
                title: "Less Opioid Dependence",
                description:
                  "Opioid-sparing techniques significantly reduce narcotic use, lowering the risk of dependency and side effects.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
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

      <CTABanner />
    </>
  );
}
