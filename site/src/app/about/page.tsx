import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Award, UserCheck, Shield, Sparkles, Heart } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Us | Specialized Plastic Surgery",
  description:
    "Founded in 2020, Specialized Plastic Surgery offers the full spectrum of cosmetic and reconstructive care with offices in Millburn, NJ and Harrison, NY.",
};

const services = [
  {
    name: "Breast Reconstruction",
    description:
      "Advanced microsurgical and implant-based reconstruction for breast cancer patients, including DIEP flap, oncoplastic reduction, and Resensation nerve restoration.",
  },
  {
    name: "Breast Augmentation",
    description:
      "Enhance your breast size, shape, and symmetry with saline, silicone, or gummy bear implants from leading manufacturers.",
  },
  {
    name: "Liposuction",
    description:
      "Permanently remove stubborn fat deposits and refine your body contours with precision liposuction and Lipo 360 techniques.",
  },
  {
    name: "Tummy Tuck",
    description:
      "Achieve a flatter, more toned abdomen by removing excess skin, eliminating stubborn fat, and tightening weakened muscles.",
  },
  {
    name: "Mommy Makeover",
    description:
      "Reclaim your pre-pregnancy confidence with a customized combination of procedures, including tummy tuck, breast lift, and liposuction.",
  },
  {
    name: "Facelift",
    description:
      "Restore a youthful, refreshed appearance by lifting and repositioning facial tissues to smooth folds, reduce sagging, and restore natural contour.",
  },
];

const whyChooseUs = [
  {
    icon: UserCheck,
    title: "Patient-Centered Care",
    description:
      "Every consultation and treatment plan is built around your unique goals, anatomy, and lifestyle.",
  },
  {
    icon: Award,
    title: "Experienced Surgeons",
    description:
      "Both surgeons are board-certified by the American Board of Plastic Surgery and recognized as Castle Connolly Top Doctors.",
  },
  {
    icon: Shield,
    title: "Comprehensive Services",
    description:
      "We offer the full spectrum of aesthetic and reconstructive plastic surgery under one roof at two convenient locations.",
  },
  {
    icon: Sparkles,
    title: "Innovative Techniques",
    description:
      "From DIEP flap microsurgery to ERAS recovery protocols, we use the latest advances to deliver better outcomes and faster healing.",
  },
  {
    icon: Heart,
    title: "Supportive Environment",
    description:
      "Our team guides you through every step, from your first consultation to your final follow-up, with compassion and transparency.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero/about-hero.jpg"
        title="About Us"
        subtitle="Where expertise meets compassion, delivering exceptional results in cosmetic and reconstructive plastic surgery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Our Story */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Our Story"
              title="Welcome to Specialized Plastic Surgery"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
              <p>
                Specialized Plastic Surgery was founded by Dr. Chris Devulapalli
                and Dr. Michael Sosin, two board-certified plastic surgeons who
                met during their training at Georgetown University Hospital.
                United by a shared passion for both reconstructive and aesthetic
                plastic surgery, they created a practice that offers the full
                spectrum of surgical care under one roof, serving patients in
                Westchester, New York and Essex, New Jersey.
              </p>
              <p>
                The practice combines unparalleled expertise with personalized
                care to deliver exceptional results. Both surgeons employ
                advanced techniques and patient-centered approaches, offering
                reconstructive and aesthetic procedures tailored to individual
                patient needs. Together, they bring training from Georgetown,
                Johns Hopkins, and NYU, more than 90 peer-reviewed publications
                and 8 book chapters, and recognition as Castle Connolly Top
                Doctors.
              </p>
            </div>
            <Link
              href="/doctors"
              className="mt-8 inline-block rounded-md border-2 border-primary bg-primary px-7 py-3 text-base font-bold text-white transition-all hover:bg-white hover:text-primary hover:shadow-md"
            >
              Meet Our Surgeons
            </Link>
          </div>
        </div>
      </section>

      {/* Our Founders */}
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
            eyebrow="Our Founders"
            title="A Passion for Transformation"
            description="Dr. Sosin and Dr. Devulapalli first met during their surgical training at Georgetown University, where they developed a shared mission to provide expert, compassionate surgical care that puts the patient first."
            light
          />
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <Link
                key={doctor.slug}
                href={`/doctors/${doctor.slug}`}
                className="group overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.03] transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-base text-white/70">{doctor.title}</p>
                  <p className="mt-0.5 text-sm text-primary">
                    {doctor.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Our Services"
            title="What We Offer"
            description="A comprehensive range of aesthetic and reconstructive plastic surgery procedures."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-[2px] w-12 bg-gradient-to-r from-primary via-gold to-primary" />
                <h3 className="mt-4 font-heading text-xl font-bold text-heading">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Care */}
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
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Your Experience"
              title="Our Approach to Patient Care"
              light
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/70">
              <p>
                We believe that every patient deserves a treatment plan as
                unique as they are. From your very first consultation, our
                surgeons take the time to listen to your goals, answer your
                questions, and develop a personalized plan that aligns with your
                vision. We follow ERAS (Enhanced Recovery After Surgery)
                protocols to ensure a faster, safer, and more comfortable
                recovery experience.
              </p>
              <p>
                Our dedicated team handles every detail, from scheduling and
                insurance verification to pre-operative preparation and
                post-operative follow-up, so you can focus on what matters most:
                your results and your well-being.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-8 inline-block rounded-md border-2 border-gold bg-gold px-7 py-3 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-md"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise and Training */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Our Credentials"
              title="Expertise and Training"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
              <p>
                Our surgeons bring a depth of training that is rare in private
                practice. Dr. Sosin completed his plastic surgery residency at
                NYU Langone Health and additional training at Johns Hopkins,
                while Dr. Devulapalli completed a microsurgery fellowship at
                Georgetown University. Together, they have authored more than 90
                peer-reviewed publications and 8 book chapters, advancing the
                field of plastic and reconstructive surgery.
              </p>
              <p>
                Both surgeons are certified by the American Board of Plastic
                Surgery and are recognized as Castle Connolly Top Doctors. Dr.
                Sosin was a primary team member of New York State&apos;s first
                successful face transplant, and Dr. Devulapalli has performed
                over 1,000 breast reductions. This combination of academic
                excellence and extensive clinical experience ensures that every
                patient receives care that meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="The Difference"
            title="Why Choose Specialized Plastic Surgery?"
          />
          <div className="mt-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-heading">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-md border-2 border-primary bg-primary px-7 py-3 text-base font-bold text-white transition-all hover:bg-white hover:text-primary hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
