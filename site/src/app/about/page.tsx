import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Us",
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
    title: "Patient-Centered Care",
    description:
      "Every consultation and treatment plan is built around your unique goals, anatomy, and lifestyle.",
  },
  {
    title: "Experienced Surgeons",
    description:
      "Both surgeons are board-certified by the American Board of Plastic Surgery and recognized as Castle Connolly Top Doctors.",
  },
  {
    title: "Comprehensive Services",
    description:
      "We offer the full spectrum of aesthetic and reconstructive plastic surgery under one roof at two convenient locations.",
  },
  {
    title: "Innovative Techniques",
    description:
      "From DIEP flap microsurgery to ERAS recovery protocols, we use the latest advances to deliver better outcomes and faster healing.",
  },
  {
    title: "Supportive Environment",
    description:
      "Our team guides you through every step, from your first consultation to your final follow-up, with compassion and transparency.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <HeroSection
        backgroundImage="/images/hero/about-hero.jpg"
        title="About Us"
        subtitle="Why We Are the Best Clinic?"
      />

      {/* ───────── Welcome Section ───────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 flex items-center justify-center gap-5 text-base font-medium tracking-wide text-primary">
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
              <span>Our Story</span>
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
            </p>
            <h2 className="font-heading text-4xl font-bold text-heading sm:text-5xl lg:text-6xl">
              Welcome to Specialized Plastic Surgery
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-body">
              <p>
                Specialized Plastic Surgery was founded in 2020 by Dr. Michael
                Sosin and Dr. Chris Devulapalli, two board-certified plastic
                surgeons who met during their training at Georgetown University
                Hospital. United by a shared passion for both reconstructive and
                aesthetic plastic surgery, they created a practice that offers
                the full spectrum of surgical care under one roof.
              </p>
              <p>
                With offices in Millburn, NJ and Harrison, NY (Westchester
                County), the practice serves patients throughout the greater
                tri-state area and welcomes traveling patients from across the
                country. Together, the surgeons bring training from Georgetown,
                Johns Hopkins, and NYU, more than 90 peer-reviewed publications,
                and recognition as Castle Connolly Top Doctors.
              </p>
            </div>
            <Link
              href="/team"
              className="mt-10 inline-block border-2 border-primary bg-primary px-7 py-3 text-lg font-bold text-white transition-colors hover:bg-white hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Founders / Doctors ───────── */}
      <section className="bg-secondary py-24 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mb-12 text-center">
            <p className="mb-4 flex items-center justify-center gap-5 text-base font-medium tracking-wide text-primary">
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
              <span>Our Founders</span>
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
            </p>
            <h2 className="font-heading text-4xl font-bold text-heading sm:text-5xl lg:text-6xl">
              A Passion for Transformation
            </h2>
          </div>
          <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-body">
            Dr. Sosin and Dr. Devulapalli first met during their surgical
            training at Georgetown University, where they developed a shared
            mission to provide expert, compassionate surgical care that puts the
            patient first. Whether a patient is seeking breast reconstruction
            after cancer surgery or a cosmetic procedure to enhance their
            confidence, the team at Specialized Plastic Surgery approaches every
            case with the same level of dedication and precision.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <div
                key={doctor.slug}
                className="overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative h-80 overflow-hidden bg-cream">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-2xl font-bold text-heading">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-base text-body">{doctor.title}</p>
                  <p className="mt-0.5 text-sm text-body/80">
                    {doctor.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Services Grid ───────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mb-12 text-center">
            <p className="mb-4 flex items-center justify-center gap-5 text-base font-medium tracking-wide text-primary">
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
              <span>Our Services</span>
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
            </p>
            <h2 className="font-heading text-4xl font-bold text-heading sm:text-5xl lg:text-6xl">
              What We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-body">
              A comprehensive range of aesthetic and reconstructive plastic
              surgery procedures.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const bgColors = [
                "bg-peach-light",
                "bg-cream",
                "bg-warm-grey",
                "bg-secondary",
                "bg-peach-light",
                "bg-cream",
              ];
              return (
                <div
                  key={service.name}
                  className={`${bgColors[index % bgColors.length]} p-8 transition-shadow duration-300 hover:shadow-lg`}
                >
                  <h3 className="font-heading text-xl font-bold text-heading">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Patient Care ───────── */}
      <section className="bg-peach-light py-24 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 flex items-center justify-center gap-5 text-base font-medium tracking-wide text-primary">
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
              <span>Your Experience</span>
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
            </p>
            <h2 className="font-heading text-4xl font-bold text-heading sm:text-5xl lg:text-6xl">
              Our Approach to Patient Care
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-body">
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
              className="mt-10 inline-block border-2 border-primary bg-primary px-7 py-3 text-lg font-bold text-white transition-colors hover:bg-white hover:text-primary"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Expertise and Training ───────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 flex items-center justify-center gap-5 text-base font-medium tracking-wide text-primary">
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
              <span>Our Credentials</span>
              <span className="inline-block h-[1.5px] w-20 bg-primary" />
            </p>
            <h2 className="font-heading text-4xl font-bold text-heading sm:text-5xl lg:text-6xl">
              Expertise and Training
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-body">
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

      {/* ───────── Why Choose Us ───────── */}
      <section className="bg-secondary py-24 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-4 flex items-center justify-center gap-5 text-base font-medium tracking-wide text-primary">
                <span className="inline-block h-[1.5px] w-20 bg-primary" />
                <span>The Difference</span>
                <span className="inline-block h-[1.5px] w-20 bg-primary" />
              </p>
              <h2 className="font-heading text-4xl font-bold text-heading sm:text-5xl lg:text-6xl">
                Why Choose Specialized Plastic Surgery?
              </h2>
            </div>
            <ul className="space-y-5">
              {whyChooseUs.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <span className="font-heading text-base font-bold text-heading">
                      {item.title}:
                    </span>{" "}
                    <span className="text-body">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-block border-2 border-primary bg-primary px-7 py-3 text-lg font-bold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <CTABanner />
    </>
  );
}
