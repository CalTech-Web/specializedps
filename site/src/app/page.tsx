import Link from "next/link";
import {
  Award,
  Shield,
  Heart,
  MapPin,
  FileCheck,
  BookOpen,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import DoctorCard from "@/components/sections/DoctorCard";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { doctors } from "@/data/doctors";
import {
  serviceCategories,
  getProceduresByCategory,
  type ProcedureCategory,
} from "@/data/procedures";

const faqs = [
  {
    question: "What procedures do you offer at Specialized Plastic Surgery?",
    answer:
      "We offer a wide range of cosmetic and reconstructive procedures, including breast augmentation, breast reconstruction, body contouring, facelifts, tummy tucks, liposuction, rhinoplasty, and more across our NJ and NY locations.",
  },
  {
    question: "Is the consultation free?",
    answer:
      "Consultation fees vary depending on the procedure. Please contact us to confirm details and schedule your appointment. Breast reconstruction and insurance-related consultations include free insurance verification.",
  },
  {
    question: "How long is the recovery after surgery?",
    answer:
      "Recovery times vary by procedure. Generally, patients can expect 1-2 weeks for initial healing, with full results visible in a few months. Our ERAS protocols help accelerate recovery.",
  },
  {
    question: "Are the results permanent?",
    answer:
      "While many procedures offer long-lasting results, maintaining a healthy lifestyle can help prolong your outcomes. Liposuction permanently removes fat cells, and breast implants typically last 10-20 years or longer.",
  },
  {
    question: "Do you accept insurance for plastic surgery procedures?",
    answer:
      "We are an out-of-network provider with most major carriers. Breast reconstruction is covered by law under WHCRA. Breast reduction and certain body contouring procedures may be covered when medically necessary. Our team handles the entire insurance process.",
  },
  {
    question: "Are the procedures safe?",
    answer:
      "All our procedures are performed by board-certified surgeons using the latest techniques and safety protocols. Our NY office features an AAAASF-accredited private surgical suite. We follow ERAS (Enhanced Recovery After Surgery) protocols for optimal safety and comfort.",
  },
  {
    question: "How do I know which procedure is right for me?",
    answer:
      "Our surgeons provide personalized consultations to assess your goals, anatomy, and options, ensuring the best approach for your needs. We take the time to listen to your concerns and develop customized treatment plans.",
  },
];

const differentiators = [
  {
    icon: Award,
    title: "Board-Certified Surgeons",
    description:
      "Both surgeons are certified by the American Board of Plastic Surgery, recognized as Castle Connolly Top Doctors, and trained at elite institutions.",
  },
  {
    icon: Shield,
    title: "AAAASF-Accredited Facility",
    description:
      "Our NY office features a private, accredited surgical suite that meets the highest standards of safety and patient comfort.",
  },
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    description:
      "Every treatment plan is personalized to your goals, anatomy, and lifestyle, because no two patients are the same.",
  },
  {
    icon: MapPin,
    title: "Two Convenient Locations",
    description:
      "Offices in Millburn, NJ and Harrison, NY (Westchester) serving the greater tri-state area, with support for traveling patients.",
  },
  {
    icon: FileCheck,
    title: "Insurance Advocacy",
    description:
      "Our dedicated team handles insurance authorization, claims submission, and appeals for breast reconstruction and medically necessary procedures.",
  },
  {
    icon: BookOpen,
    title: "90+ Publications",
    description:
      "Our surgeons have contributed over 90 peer-reviewed publications and 8 book chapters, advancing the field of plastic and reconstructive surgery.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        backgroundImage="/images/hero/about-hero.jpg"
        title="Where Expertise Meets Compassion"
        subtitle="Board-certified plastic surgeons in New Jersey and Westchester, NY, specializing in breast reconstruction, aesthetic surgery, and body contouring with a patient-centered approach."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

      {/* Our Surgeons */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Meet Your Surgeons"
            title="Our Surgeons"
            subtitle="Two board-certified plastic surgeons with complementary expertise across reconstructive and aesthetic surgery, trained at Georgetown, Johns Hopkins, and NYU."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            subtitle="From facial rejuvenation to advanced microsurgical breast reconstruction, our practice covers the full spectrum of plastic surgery."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {serviceCategories.map((category) => {
              const procs = getProceduresByCategory(
                category.slug as ProcedureCategory
              );
              return (
                <Link
                  key={category.slug}
                  href={`/services/${category.slug}`}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-[#1a2332] transition-colors group-hover:text-[#c9a96e]">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {category.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {procs.map((proc) => (
                      <li
                        key={proc.slug}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
                        {proc.shortName ?? proc.name}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a96e] transition-colors group-hover:text-[#b8954f]">
                    Explore {category.name} Procedures
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What Sets Us Apart"
            subtitle="A dual-surgeon practice combining fellowship-trained microsurgical expertise with a genuine commitment to personalized patient care."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332]">
                    <Icon className="h-6 w-6 text-[#c9a96e]" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1a2332]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
