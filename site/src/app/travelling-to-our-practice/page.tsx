import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import {
  Plane,
  Hotel,
  ShieldCheck,
  MessageSquare,
  HeartPulse,
  MapPin,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Travelling to Our Practice | Specialized Plastic Surgery",
  description:
    "Planning to travel for your procedure? Learn about accommodations, transportation, insurance, and our support for out-of-area patients at Specialized Plastic Surgery.",
};

const travelSections = [
  {
    icon: Hotel,
    title: "Accommodations",
    description:
      "We can recommend comfortable hotels and recovery retreats near both our New Jersey and Westchester, NY offices. Many of our patients prefer to stay close to the office for easy access to pre-operative and follow-up appointments.",
  },
  {
    icon: Plane,
    title: "Transportation",
    description:
      "Both of our offices are conveniently located near major airports and train stations. Our Millburn, NJ office is accessible from Newark Liberty International Airport, while our Harrison, NY office is a short drive from Westchester County Airport and LaGuardia Airport.",
  },
  {
    icon: ShieldCheck,
    title: "Out-of-State Insurance",
    description:
      "We work with patients from across the country. If you have out-of-state insurance, our team will verify your benefits and help you understand your coverage before your procedure. We also accept self-pay patients with transparent pricing.",
  },
  {
    icon: MessageSquare,
    title: "Virtual Consultations",
    description:
      "To minimize your travel, we offer virtual consultations via secure video. This allows you to discuss your goals, review options, and plan your procedure before making the trip. Your in-person visit can then be focused on your pre-operative appointment and surgery.",
  },
  {
    icon: HeartPulse,
    title: "Procedure Day Support",
    description:
      "On the day of your procedure, our team will coordinate every detail so you can focus on your recovery. We provide clear pre-operative instructions, post-operative care packages, and direct access to your surgeon for any questions.",
  },
  {
    icon: MapPin,
    title: "Follow-Up Care",
    description:
      "We understand that follow-up visits can be challenging for traveling patients. Depending on your procedure, we may coordinate with a local physician in your area for routine check-ins, supplemented by virtual follow-ups with your surgeon.",
  },
];

export default function TravellingToOurPracticePage() {
  return (
    <>
      <HeroSection
        title="Travelling to Our Practice"
        subtitle="We welcome patients from across the country and beyond. Our team is here to make your experience seamless from the moment you reach out."
        backgroundImage="/images/hero/SPS-Image-131.jpg"
        ctaText="Schedule Consultation"
        ctaLink="#contact-form"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Travelling to Our Practice" },
        ]}
      />

      {/* Travel Support Sections */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="For Out-of-Area Patients"
            title="How We Support Travelling Patients"
            description="From your first virtual consultation to your final follow-up, we coordinate every detail so you can focus on achieving your goals."
            centered
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {travelSections.map((section, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-heading">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
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
            eyebrow="Your Journey"
            title="What to Expect as a Travelling Patient"
            light
            centered
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              "Initial virtual consultation to discuss your goals and create a plan",
              "Pre-operative instructions sent to you in advance",
              "Accommodation recommendations near your chosen office",
              "All appointments consolidated to minimize your travel time",
              "Comprehensive post-operative care package for your recovery",
              "Virtual follow-up appointments with your surgeon",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-base text-white/80">{item}</span>
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
              eyebrow="Get Started"
              title="Schedule Your Consultation"
              description="Let us know you are travelling to our practice and we will help coordinate every detail of your visit."
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
