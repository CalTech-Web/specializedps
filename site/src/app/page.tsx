import Link from "next/link";
import Image from "next/image";
import { Award, Shield, UserCheck, ShieldCheck, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import DoctorCard from "@/components/sections/DoctorCard";
import TestimonialSection from "@/components/sections/TestimonialSection";
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

const categoryImages: Record<string, string> = {
  face: "/images/gallery/facelift/bleph-case1-after.jpg",
  "aesthetic-breast":
    "/images/gallery/breast-augmentation/case1-front-after.jpg",
  "breast-reconstruction":
    "/images/gallery/breast-reconstruction/diep-case1-front-after.jpg",
  body: "/images/gallery/tummy-tuck/case1-after.jpg",
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
      {/* ───────── Hero Section ───────── */}
      <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-heading">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://specializedplasticsurgery.com/wp-content/uploads/2025/09/new-header-sps-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-heading/40" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <h1 className="font-heading text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-[3.5rem]">
            Your Destination for Plastic Surgery in New York and New Jersey
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-[15px] leading-relaxed text-white/90 sm:text-base">
            At Specialized Plastic Surgery, we offer world-class expertise,
            advanced surgical training, and cutting-edge techniques, delivering
            results with unmatched precision, artistry, and compassionate care.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`tel:${siteConfig.locations.ny.phoneRaw}`}
              className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-[13px] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-heading hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span className="font-bold uppercase tracking-wide">Call Now</span>
              <span className="text-white/40">|</span>
              <span className="font-medium">NY {siteConfig.locations.ny.phone}</span>
            </Link>
            <Link
              href={`tel:${siteConfig.locations.nj.phoneRaw}`}
              className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-[13px] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-heading hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span className="font-bold uppercase tracking-wide">Call Now</span>
              <span className="text-white/40">|</span>
              <span className="font-medium">NJ {siteConfig.locations.nj.phone}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Welcome / About Section ───────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              <span className="inline-block h-[2px] w-12 bg-primary" />
              <span>Who We Are</span>
              <span className="inline-block h-[2px] w-12 bg-primary" />
            </p>
            <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
              Welcome to Specialized Plastic Surgery
            </h2>
            <p className="mt-2 text-base font-medium text-primary">
              Aesthetic and Reconstructive Procedures in New York and New Jersey
            </p>
            <p className="mt-5 text-base leading-relaxed text-body">
              At Specialized Plastic Surgery, our board-certified plastic
              surgeons combine years of advanced training with a genuine
              commitment to patient-centered care. Whether you are exploring
              cosmetic enhancement or need expert reconstructive surgery, our
              team provides personalized treatment plans designed to help you
              look and feel your best. With offices in Millburn, NJ and
              Harrison, NY, we proudly serve patients throughout the tri-state
              area.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-block rounded-md border-2 border-primary bg-primary px-7 py-3 text-base font-bold text-white transition-all hover:bg-white hover:text-primary hover:shadow-md"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Procedure Categories ───────── */}
      <section className="bg-peach-light py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            title="Our Procedures"
            subtitle="What We Offer"
            description="Explore our full range of aesthetic and reconstructive plastic surgery services."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/services/${category.slug}`}
                className="group block overflow-hidden rounded-lg border-t-4 border-t-primary bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Category image */}
                <div className="relative h-56 overflow-hidden bg-cream">
                  <Image
                    src={
                      categoryImages[category.slug] ??
                      "/images/misc/sps-center.jpg"
                    }
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-heading/0 transition-colors duration-300 group-hover:bg-heading/10" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-heading">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {categoryDescriptions[category.slug] ??
                      category.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-bold text-primary transition-colors group-hover:text-heading">
                    View Procedures &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Meet Our Doctors ───────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            title="Meet Our Expert Surgeons"
            subtitle="Our Team"
            description="Two board-certified plastic surgeons with complementary expertise, dedicated to delivering exceptional results with personalized care."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Gallery CTA ───────── */}
      <section className="bg-heading py-12 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Explore Our Before &amp; After Gallery
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            See real results from our patients. Browse before and after photos
            across breast, body, and facial procedures to help visualize what is
            possible for you.
          </p>
          <Link
            href="/gallery"
            className="mt-8 inline-block rounded-md border-2 border-gold bg-gold px-7 py-3 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-md"
          >
            Explore Gallery
          </Link>
        </div>
      </section>

      {/* ───────── The Specialized Difference ───────── */}
      <section className="bg-warm-grey py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            title="The Specialized Difference"
            subtitle="Why Choose Us"
            description="What sets our practice apart and why patients trust us with their care."
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border-t-4 border-t-primary bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-heading">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <TestimonialSection />
    </>
  );
}
