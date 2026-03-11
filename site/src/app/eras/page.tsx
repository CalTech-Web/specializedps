import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import AppointmentButton from "@/components/ui/AppointmentButton";
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
  Stethoscope,
  Droplets,
  Phone,
  Calendar,
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
        title="Enhanced Recovery After Surgery (ERAS)"
        subtitle="Enhanced Recovery After Surgery (ERAS) is a patient-centered approach that promotes faster, safer, and more comfortable healing after an operation. At Specialized Plastic Surgery, our team follows proven ERAS steps before, during, and after surgery to reduce stress, prevent complications, and support a smoother recovery."
        backgroundImage="/images/hero/eras-hero.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "ERAS" },
        ]}
      />

      {/* What is ERAS */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About ERAS"
                title="What Is ERAS?"
              />
              <div className="mt-6 space-y-5">
                <p className="text-lg leading-relaxed text-body">
                  Enhanced Recovery After Surgery (ERAS) is a patient-centered,
                  evidence-based approach that uses a set of coordinated steps
                  before, during, and after your operation to ensure the
                  quickest, safest, and most comfortable recovery possible.
                </p>
                <p className="text-lg leading-relaxed text-body">
                  At Specialized Plastic Surgery, our surgeons and clinical team
                  are committed to following the latest ERAS protocols because
                  they represent the gold standard for surgical care worldwide.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/hero/eras-hero.jpg"
                alt="Patient recovery at Specialized Plastic Surgery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
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
            title="The Three Pillars of Your ERAS Journey"
            description="Our ERAS program coordinates every aspect of your care to ensure the quickest, safest, and most comfortable recovery possible."
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
                      Before Surgery (Preoperative Optimization)
                    </h3>
                  </div>
                </div>
                <p className="mb-6 text-base leading-relaxed text-white/70">
                  This phase focuses on preparing your body for the stress of
                  surgery and minimizing the risk of infection.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      Nutritional Screening
                    </h4>
                    <p className="ml-7 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">What You Do:</span>{" "}
                      We assess your nutritional status and may recommend a
                      protein rich diet or vitamins to build reserves for
                      healing.
                    </p>
                    <p className="ml-7 mt-1 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">Why It Helps:</span>{" "}
                      Adequate protein and key vitamins (like Vitamin C and Zinc)
                      are the building blocks for rapid wound healing and
                      stronger immunity.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      Medication Review
                    </h4>
                    <p className="ml-7 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">What You Do:</span>{" "}
                      We ensure you discontinue any supplements or medications
                      (like specific herbals or blood thinners) that could
                      interfere with clotting or anesthesia.
                    </p>
                    <p className="ml-7 mt-1 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">Why It Helps:</span>{" "}
                      This is crucial for safety and minimizing the risk of
                      excessive bleeding during the procedure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gold gradient bar */}
            <div className="h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

            {/* Phase 2: During Surgery */}
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div className="order-2 rounded-lg border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:order-1">
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                      <Stethoscope className="h-5 w-5 shrink-0 text-primary" />
                      Targeted Anesthesia
                    </h4>
                    <p className="ml-7 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">What We Do:</span>{" "}
                      We use opioid-sparing techniques, often relying more on
                      regional blocks and non-narcotic pain medications.
                    </p>
                    <p className="ml-7 mt-1 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">Why It Helps:</span>{" "}
                      Reduces side effects like nausea and grogginess, leading
                      to an easier wake-up and faster mobility.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                      <Syringe className="h-5 w-5 shrink-0 text-primary" />
                      Minimally Invasive Techniques
                    </h4>
                    <p className="ml-7 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">What We Do:</span>{" "}
                      Whenever possible, we prioritize techniques that involve
                      smaller incisions and less tissue handling.
                    </p>
                    <p className="ml-7 mt-1 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">Why It Helps:</span>{" "}
                      Minimizes surgical trauma, resulting in less pain and
                      quicker recovery time.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                      <Droplets className="h-5 w-5 shrink-0 text-primary" />
                      Fluid Management
                    </h4>
                    <p className="ml-7 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">What We Do:</span>{" "}
                      We carefully manage IV fluids to prevent swelling (edema)
                      and ensure optimal hydration without overloading your
                      system.
                    </p>
                    <p className="ml-7 mt-1 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">Why It Helps:</span>{" "}
                      Reduces post-operative bloating and swelling, making your
                      initial recovery more comfortable.
                    </p>
                  </div>
                </div>
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
                      During Surgery (Intraoperative Management)
                    </h3>
                  </div>
                </div>
                <p className="mb-6 text-base leading-relaxed text-white/70">
                  Our surgical and anesthesia teams use specialized techniques to
                  minimize trauma and manage pain effectively.
                </p>
              </div>
            </div>

            {/* Gold gradient bar */}
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
                      After Surgery (Postoperative Mobilization)
                    </h3>
                  </div>
                </div>
                <p className="mb-6 text-base leading-relaxed text-white/70">
                  The goal is to get you up and moving quickly to prevent
                  complications and accelerate your recovery.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      Early Mobility
                    </h4>
                    <p className="ml-7 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">What You Do:</span>{" "}
                      You will be encouraged to sit up, walk, and move around as
                      soon as safely possible, often within hours of the
                      procedure.
                    </p>
                    <p className="ml-7 mt-1 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">Why It Helps:</span>{" "}
                      Reduces the risk of blood clots, improves lung function,
                      and promotes a quicker return of normal bowel function.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-lg font-bold text-white">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      Proactive Pain Management
                    </h4>
                    <p className="ml-7 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">What You Do:</span>{" "}
                      We utilize a multi-modal pain strategy (combining different
                      types of pain relievers) to manage discomfort with fewer
                      narcotics.
                    </p>
                    <p className="ml-7 mt-1 text-sm leading-relaxed text-white/60">
                      <span className="font-semibold text-white/80">Why It Helps:</span>{" "}
                      Keeps your pain controlled while minimizing the side
                      effects of strong pain medications, allowing you to rest
                      and recover effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits with Image */}
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/hero/eras-hero.jpg"
                alt="Enhanced recovery results at Specialized Plastic Surgery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <SectionHeading
                eyebrow="The Results"
                title="How Our Patients Benefit From ERAS?"
                description="By integrating these evidence-based steps into your care, we deliver better patient results. The benefits of the ERAS approach include:"
              />

              <ul className="mt-8 space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Significantly Faster Recovery Times",
                  },
                  {
                    icon: Shield,
                    title: "Reduced Risk of Complications",
                    subtitle: "such as infection or blood clots",
                  },
                  {
                    icon: Heart,
                    title: "Better Pain Control",
                    subtitle: "with less reliance on high-dose narcotics",
                  },
                  {
                    icon: Clock,
                    title: "Shorter or Optimized Hospital Stay",
                    subtitle: "if required",
                  },
                  {
                    icon: Smile,
                    title: "Improved Patient Satisfaction",
                    subtitle: "and overall surgical experience",
                  },
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <benefit.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-base font-bold text-heading">
                        {benefit.title}
                      </span>
                      {benefit.subtitle && (
                        <span className="text-base text-body">
                          {" "}({benefit.subtitle})
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-base leading-relaxed text-body">
                Our team is dedicated to guiding you through every step of the
                Enhanced Recovery After Surgery protocol to ensure your journey
                is as smooth and successful as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Form Prompt */}
      <section className="relative overflow-hidden bg-heading py-14 sm:py-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gold gradient top bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Ready to Experience High-Quality Care That Prioritizes Your Comfort
            and Recovery?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Take control of your healing journey with our Enhanced Recovery
            Protocols, a proven system designed for faster, safer, and more
            comfortable recovery.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:9148740900"
              className="inline-flex items-center gap-2 rounded-md border-2 border-gold bg-gold px-8 py-3 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-md"
            >
              <Phone className="h-5 w-5" />
              Call Us: (914) 874-0900
            </a>
            <AppointmentButton className="inline-flex items-center gap-2 rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-bold text-white transition-all hover:bg-white hover:text-heading hover:shadow-md">
              <Calendar className="h-5 w-5" />
              Schedule a Consultation
            </AppointmentButton>
          </div>
        </div>

        {/* Gold gradient bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      <CTABanner
        heading="Discover the Difference of Personalized Aesthetic Solutions"
        subtext="At Specialized Plastic Surgery, we're dedicated to helping you achieve your aesthetic goals with unparalleled precision and care. Explore our services and experience a transformative journey tailored to your unique needs. Schedule a consultation today and take the first step towards a confident, revitalized you."
        backgroundImage="/images/hero/eras-hero.jpg"
      />
    </>
  );
}
