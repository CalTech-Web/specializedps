import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { doctors } from "@/data/doctors";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  GraduationCap,
  Star,
  Shield,
  Sparkles,
  Heart,
  CheckCircle2,
  ArrowRight,
  Instagram,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dr. Chris Devulapalli | New Patient Form",
  description:
    "Schedule your consultation with Dr. Chris Devulapalli, board-certified plastic surgeon at our Harrison, NY (Westchester) office. Specializing in breast reconstruction, augmentation, and body contouring.",
};

const highlights = [
  {
    icon: Shield,
    title: "Board Certified",
    description: "American Board of Plastic Surgery",
  },
  {
    icon: Star,
    title: "Castle Connolly Top Doctor",
    description: "Recognized for exceptional patient care",
  },
  {
    icon: Heart,
    title: "Microsurgery Fellowship",
    description: "Georgetown University Hospital",
  },
  {
    icon: Sparkles,
    title: "US News Top Doctor",
    description: "Featured in national and regional publications",
  },
];

const services = [
  "Breast Reconstruction (DIEP Flap, Implant-Based)",
  "Breast Augmentation, Lift & Reduction",
  "Mommy Makeovers",
  "Tummy Tucks & Body Contouring",
  "Brazilian Butt Lifts",
  "Liposuction & Lipo 360",
  "Rhinoplasty & Facial Procedures",
  "Botox & Dermal Fillers",
];

export default function DrChrisNewPatientFormPage() {
  const drChris = doctors.find((d) => d.slug === "chris-devulapalli")!;
  const ny = siteConfig.locations.ny;

  return (
    <>
      <HeroSection
        title="Begin Your Journey with Dr. Chris"
        subtitle="Welcome to our community. Complete the new patient form below to schedule your personalized consultation with Dr. Chris Devulapalli at our Harrison, NY office."
        backgroundImage="https://specializedplasticsurgery.com/wp-content/uploads/2026/02/pexels-deor-est-243774879-16897750.jpg"
        ctaText="Fill Out the Form Below"
        ctaLink="#contact-form"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dr. Chris New Patient Form" },
        ]}
      />

      {/* Highlights Bar */}
      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-heading">{item.title}</p>
                  <p className="mt-0.5 text-xs text-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Bio Section */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[420px_1fr]">
            {/* Doctor Photo */}
            <div>
              <div className="relative aspect-[3/4] overflow-hidden shadow-lg">
                <Image
                  src={drChris.image}
                  alt={drChris.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
              {/* Quick Contact Card Below Photo */}
              <div className="mt-6 rounded-lg border border-gray-100 bg-warm-grey p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-heading">
                  Westchester Office
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

            {/* Doctor Info */}
            <div>
              <SectionHeading
                eyebrow="Meet Your Surgeon"
                title={`${drChris.name}, ${drChris.credentials}`}
                centered={false}
              />
              <p className="mt-2 text-sm font-medium text-primary">
                {drChris.title}
              </p>
              <p className="mt-5 text-base leading-relaxed text-body">
                {drChris.philosophy}
              </p>

              {drChris.quote && (
                <blockquote className="mt-8 rounded-lg border-l-4 border-primary bg-warm-grey p-6">
                  <p className="text-base italic leading-relaxed text-body">
                    &ldquo;{drChris.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-bold text-heading">
                    {drChris.name}, {drChris.credentials}
                  </p>
                </blockquote>
              )}

              {/* Education */}
              <div className="mt-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-heading">
                    Education & Training
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 pl-12">
                  {drChris.education.map((ed, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-body">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {ed}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recognition */}
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-heading">
                    Recognition & Awards
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 pl-12">
                  {[...drChris.recognition, ...drChris.awards].map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-body">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link to full profile */}
              <Link
                href="/doctors/chris-devulapalli"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-heading"
              >
                View Full Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-warm-grey py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Procedures & Services"
            title="What Dr. Chris Offers"
            description="From advanced breast reconstruction to aesthetic body contouring, Dr. Devulapalli and our dedicated team provide a welcoming, patient-centered experience for all your surgical and non-surgical needs."
            centered
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-5 py-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-heading">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Details */}
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
          <SectionHeading
            eyebrow="Our Location"
            title="Harrison, NY (Westchester County)"
            description="Located in the heart of Westchester County, our Harrison office is easily accessible to patients throughout the region, including nearby communities of White Plains, Scarsdale, New Rochelle, Eastchester, and beyond."
            light
            centered
          />
          <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-white/[0.06] bg-white/[0.03] p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Address</p>
                  <span className="mt-1 block text-sm text-white/80">{ny.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Phone</p>
                  <a
                    href={`tel:${ny.phoneRaw}`}
                    className="mt-1 block text-sm font-semibold text-primary transition-colors hover:text-white"
                  >
                    {ny.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Email</p>
                  <a
                    href={`mailto:${ny.email}`}
                    className="mt-1 block text-sm text-white/80 transition-colors hover:text-primary"
                  >
                    {ny.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Hours</p>
                  <span className="mt-1 block text-sm text-white/80">{ny.hours}</span>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Instagram className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Instagram</p>
                  <a
                    href={ny.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-white/80 transition-colors hover:text-primary"
                  >
                    {ny.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-14 sm:py-20" style={{ backgroundImage: "url('/images/gallery-page/marble-bg.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_520px]">
            {/* Left: Info */}
            <div>
              <SectionHeading
                eyebrow="Get Started"
                title="Join Us on Your Journey"
                description="Take the next step and schedule an appointment today. Filling out this form sets the stage for a seamless and tailored experience, allowing us to better understand your needs and provide you with exceptional care from day one."
                centered={false}
              />

              {/* What to Expect */}
              <div className="mt-10 space-y-5">
                <h3 className="font-heading text-xl font-bold text-heading">
                  What to Expect
                </h3>
                {[
                  {
                    step: "1",
                    title: "Submit Your Form",
                    text: "Fill out the new patient form with your details and areas of interest.",
                  },
                  {
                    step: "2",
                    title: "We Reach Out",
                    text: "Our team will contact you within one business day to confirm your appointment.",
                  },
                  {
                    step: "3",
                    title: "Your Consultation",
                    text: "Meet Dr. Chris for a personalized, one-on-one consultation to discuss your goals and create a customized plan.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-heading">{item.title}</p>
                      <p className="mt-1 text-sm text-body">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Doctor image */}
              <div className="relative mt-10 hidden aspect-[16/9] overflow-hidden rounded-lg lg:block">
                <Image
                  src="https://specializedplasticsurgery.com/wp-content/uploads/2026/02/pexels-deor-est-243774879-16897750.jpg"
                  alt="Dr. Chris Devulapalli consultation"
                  fill
                  className="object-cover"
                  sizes="600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heading/30 to-transparent" />
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-xl bg-white p-8 shadow-lg sm:p-10 lg:sticky lg:top-24">
              <h3 className="font-heading text-xl font-bold text-heading">
                Request Your Consultation
              </h3>
              <p className="mt-2 text-sm text-body">
                Fill out the form below and our team will reach out to schedule your appointment with Dr. Chris Devulapalli.
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
