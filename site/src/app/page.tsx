import Link from "next/link";
import Image from "next/image";
import { Award, Shield, UserCheck, ShieldCheck } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import DoctorCard from "@/components/sections/DoctorCard";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { doctors } from "@/data/doctors";
import { serviceCategories } from "@/data/procedures";

const categoryDescriptions: Record<string, string> = {
  face: "Rejuvenate your appearance with expert facial procedures, including facelifts, rhinoplasty, eyelid surgery, and more.",
  "aesthetic-breast":
    "Enhance your silhouette with breast augmentation, lifts, reductions, and implant removal tailored to your goals.",
  "breast-reconstruction":
    "Compassionate, advanced reconstruction for breast cancer patients using microsurgical and implant-based techniques.",
  body: "Sculpt and contour your body with liposuction, tummy tucks, mommy makeovers, Brazilian butt lifts, and more.",
};

const differentiators = [
  {
    icon: Award,
    title: "Experienced, Board-Certified Surgeons",
    description:
      "Both surgeons are certified by the American Board of Plastic Surgery, recognized as Castle Connolly Top Doctors, and trained at elite institutions including Georgetown, Johns Hopkins, and NYU.",
  },
  {
    icon: Shield,
    title: "Comprehensive Care Options",
    description:
      "From advanced microsurgical breast reconstruction to cosmetic procedures, we offer the full spectrum of plastic surgery under one roof at two convenient locations.",
  },
  {
    icon: UserCheck,
    title: "Personalized Consultations",
    description:
      "Every treatment plan is customized to your unique goals, anatomy, and lifestyle. We take the time to listen and develop a plan that is right for you.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Safety",
    description:
      "Our NY office features an AAAASF-accredited private surgical suite, and we follow ERAS protocols for faster, safer, and more comfortable recovery.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/misc/sps-center.jpg"
        title="Your Destination for Plastic Surgery in New York and New Jersey"
        subtitle="World-class expertise in aesthetic and reconstructive plastic surgery, delivered with personalized care by board-certified surgeons."
        ctaText="Request an Appointment"
        ctaLink="/contact"
        secondaryCtaText="Find Your Procedure"
        secondaryCtaLink="/services"
      />

      {/* Welcome Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#32373c] sm:text-4xl">
            Welcome to Specialized Plastic Surgery
          </h2>
          <p className="mt-2 text-lg font-medium text-[#4054b2]">
            Aesthetic and Reconstructive Procedures in New York and New Jersey
          </p>
          <p className="mt-6 text-base leading-relaxed text-[#333333]">
            At Specialized Plastic Surgery, our board-certified plastic surgeons
            combine years of advanced training with a genuine commitment to
            patient-centered care. Whether you are exploring cosmetic
            enhancement or need expert reconstructive surgery, our team provides
            personalized treatment plans designed to help you look and feel your
            best. With offices in Millburn, NJ and Harrison, NY, we proudly
            serve patients throughout the tri-state area.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-[#4054b2] underline underline-offset-4 transition-colors hover:text-[#1f385f]"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Procedure Categories */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Our Procedures"
            subtitle="Explore our full range of aesthetic and reconstructive plastic surgery services."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <div
                key={category.slug}
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-[#32373c]">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {categoryDescriptions[category.slug] ?? category.description}
                </p>
                <Link
                  href={`/services/${category.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-[#4054b2] transition-colors hover:text-[#1f385f]"
                >
                  View Procedures &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Meet Our Expert Surgeons"
            subtitle="Two board-certified plastic surgeons with complementary expertise, dedicated to delivering exceptional results with personalized care."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="bg-[#1f385f] py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Explore Our Before &amp; After Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            See real results from our patients. Browse before and after photos
            across breast, body, and facial procedures to help visualize what is
            possible for you.
          </p>
          <Link
            href="/gallery"
            className="mt-8 inline-block rounded-full bg-[#32373c] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#4054b2]"
          >
            Explore Gallery
          </Link>
        </div>
      </section>

      {/* The Specialized Difference */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="The Specialized Difference"
            subtitle="What sets our practice apart and why patients trust us with their care."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1f385f]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#32373c]">
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

      {/* Reviews */}
      <TestimonialSection />

      {/* Final CTA */}
      <CTABanner />
    </>
  );
}
