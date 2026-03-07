import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
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
      {/* Hero */}
      <HeroSection
        backgroundImage="/images/hero/about-hero.jpg"
        title="About Us"
        subtitle="Why We Are the Best Clinic?"
      />

      {/* Welcome */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#32373c] sm:text-4xl">
            Welcome to Specialized Plastic Surgery
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#333333]">
            <p>
              Specialized Plastic Surgery was founded in 2020 by Dr. Michael
              Sosin and Dr. Chris Devulapalli, two board-certified plastic
              surgeons who met during their training at Georgetown University
              Hospital. United by a shared passion for both reconstructive and
              aesthetic plastic surgery, they created a practice that offers the
              full spectrum of surgical care under one roof.
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
            className="mt-8 inline-block rounded-full bg-[#32373c] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1f385f]"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Our Founders: A Passion for Transformation"
            centered
          />
          <p className="mx-auto -mt-6 mb-10 max-w-3xl text-center text-base leading-relaxed text-[#333333]">
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
                className="overflow-hidden rounded-lg bg-white shadow-sm"
              >
                <div className="relative h-80 bg-gray-200">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-[#32373c]">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {doctor.title}
                  </p>
                  <p className="mt-0.5 text-sm text-gray-500">
                    {doctor.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="What We Offer"
            subtitle="A comprehensive range of aesthetic and reconstructive plastic surgery procedures."
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#32373c]">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Care */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#32373c] sm:text-4xl">
            Our Approach to Patient Care
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#333333]">
            <p>
              We believe that every patient deserves a treatment plan as unique
              as they are. From your very first consultation, our surgeons take
              the time to listen to your goals, answer your questions, and
              develop a personalized plan that aligns with your vision. We follow
              ERAS (Enhanced Recovery After Surgery) protocols to ensure a
              faster, safer, and more comfortable recovery experience.
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
            className="mt-8 inline-block rounded-full bg-[#32373c] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1f385f]"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#32373c] sm:text-4xl">
            Expertise and Training
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#333333]">
            <p>
              Our surgeons bring a depth of training that is rare in private
              practice. Dr. Sosin completed his plastic surgery residency at NYU
              Langone Health and additional training at Johns Hopkins, while Dr.
              Devulapalli completed a microsurgery fellowship at Georgetown
              University. Together, they have authored more than 90 peer-reviewed
              publications and 8 book chapters, advancing the field of plastic
              and reconstructive surgery.
            </p>
            <p>
              Both surgeons are certified by the American Board of Plastic
              Surgery and are recognized as Castle Connolly Top Doctors. Dr.
              Sosin was a primary team member of New York State's first
              successful face transplant, and Dr. Devulapalli has performed over
              1,000 breast reductions. This combination of academic excellence
              and extensive clinical experience ensures that every patient
              receives care that meets the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#32373c] sm:text-4xl">
            Why Choose Specialized Plastic Surgery?
          </h2>
          <ul className="mt-8 space-y-5">
            {whyChooseUs.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4054b2]" />
                <div>
                  <span className="font-bold text-[#32373c]">
                    {item.title}:
                  </span>{" "}
                  <span className="text-[#333333]">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#32373c] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1f385f]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </>
  );
}
