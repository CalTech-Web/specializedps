import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import AppointmentButton from "@/components/ui/AppointmentButton";
import {
  Building2,
  Car,
  ShieldCheck,
  HeartPulse,
  MapPin,
  Phone,
  Plane,
  CheckCircle,
  Video,
  Calendar,
  FileText,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Traveling Patients",
  description:
    "Specialized Plastic Surgery welcomes traveling patients from across the country. Learn about accommodation assistance, transportation options, insurance support, and remote follow-up care.",
};

export default function TravelingPatientsPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Traveling Patients"
        subtitle="Traveling for medical procedures can require extra planning. Our team is here to smooth your journey with comprehensive support, practical guidance on travel arrangements, local lodging options, transportation suggestions, and post-operative coordination."
        backgroundImage="/images/traveling/hero.jpg"
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Traveling Patients" },
        ]}
      />

      {/* Intro / Welcome */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Welcome"
                title="Seamless Support Beyond Borders"
                centered={false}
              />
              <p className="mb-4 text-base leading-relaxed text-body">
                Many patients travel to Specialized Plastic Surgery for the
                expertise of our board-certified surgeons, our advanced
                microsurgical techniques, and our patient-centered approach.
                Whether you are coming from another state or across the country,
                our team is dedicated to coordinating every detail of your visit
                so you can focus on your care.
              </p>
              <p className="text-base leading-relaxed text-body">
                From your initial virtual consultation through your final
                follow-up, we provide clear communication and continuous guidance
                throughout your entire recovery. Our goal is to ensure that
                distance is never a barrier to receiving the highest quality
                plastic surgery care.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-242.jpg"
                alt="Welcoming environment at Specialized Plastic Surgery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Timeline */}
      <section className="relative bg-heading py-14 sm:py-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Your Journey"
            title="What to Expect as a Traveling Patient"
            light
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Video,
                step: "01",
                title: "Initial Virtual Consultation",
                text: "Meet your surgeon from home through a secure video consultation. Discuss your goals, review your medical history, and develop a personalized treatment plan.",
              },
              {
                icon: FileText,
                step: "02",
                title: "Pre-Operative Planning",
                text: "Receive detailed pre-operative instructions, travel recommendations, accommodation suggestions, and a clear cost estimate before booking your trip.",
              },
              {
                icon: Calendar,
                step: "03",
                title: "Consolidated Appointments",
                text: "We schedule your consultations, pre-operative exams, and procedure dates efficiently to minimize the time you need to spend away from home.",
              },
              {
                icon: Stethoscope,
                step: "04",
                title: "Procedure Day Support",
                text: "Our team coordinates everything on the day of your procedure, including transportation arrangements and a comprehensive post-operative care package.",
              },
              {
                icon: HeartPulse,
                step: "05",
                title: "Recovery Guidance",
                text: "Detailed written and verbal aftercare instructions are provided before you travel home, covering every stage of your recovery journey.",
              },
              {
                icon: MapPin,
                step: "06",
                title: "Ongoing Follow-Up",
                text: "Virtual follow-up appointments and coordination with your local healthcare provider ensure continuous care no matter where you live.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-heading text-3xl font-bold text-primary/20">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Assistance */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-heading">
                  Accommodation Assistance
                </h2>
              </div>
              <p className="mb-4 text-base leading-relaxed text-body">
                We understand that finding comfortable lodging near our offices
                is important, especially when you are recovering from a
                procedure. Our team can recommend nearby hotels and
                extended-stay options that are convenient to both our New Jersey
                and New York locations.
              </p>
              <p className="text-base leading-relaxed text-body">
                Many of our recommended accommodations offer quiet, comfortable
                rooms suited for post-operative recovery, with easy access to
                dining, pharmacies, and our office for follow-up visits. We also
                assist with organizing longer stays to facilitate a smooth
                recovery process.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-warm-grey p-8 shadow-sm">
              <h3 className="font-heading mb-6 text-xl font-bold text-heading">
                What We Help With
              </h3>
              <ul className="space-y-4">
                {[
                  "Recommendations for nearby hotels and extended-stay residences",
                  "Guidance on proximity to our offices and local amenities",
                  "Suggestions for recovery-friendly accommodations with quiet environments",
                  "Coordination of your stay timeline with your surgical and follow-up schedule",
                  "Extended stay arrangements for patients requiring longer recovery periods",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-body">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="bg-warm-grey py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm max-lg:order-2">
              <h3 className="font-heading mb-6 text-xl font-bold text-heading">
                Getting Here
              </h3>
              <ul className="space-y-4">
                {[
                  "Both offices are easily accessible from major airports, including Newark Liberty (EWR), JFK, LaGuardia (LGA), and Westchester County Airport (HPN)",
                  "Car rental agencies and ride services are available from all major airports",
                  "Our New Jersey office in Millburn is accessible via NJ Transit and major highways",
                  "Our New York office in Harrison is near the Metro-North Harlem line and I-287",
                  "We can provide directions and transportation tips specific to your travel plans",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-body">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-lg:order-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-heading">
                  Transportation Options
                </h2>
              </div>
              <p className="mb-4 text-base leading-relaxed text-body">
                Getting to and from our offices is straightforward. Both
                locations are conveniently situated near major highways, airports,
                and public transportation, making travel as simple as possible
                for out-of-state patients.
              </p>
              <p className="text-base leading-relaxed text-body">
                Please remember that you will need someone to drive you home
                after any surgical procedure. If you are traveling alone, our
                team can help coordinate transportation arrangements for the day
                of your surgery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Out-of-State Insurance */}
      <section className="relative bg-heading py-14 sm:py-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-white">
                  Out-of-State Insurance
                </h2>
              </div>
              <p className="mb-4 text-base leading-relaxed text-white/70">
                If you are traveling from another state for a reconstructive
                procedure, our insurance team can help you understand your
                coverage options. As an out-of-network provider, we work with
                patients across the country and are experienced in navigating
                insurance plans from many different states and carriers.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                For breast reconstruction patients, the Women&#39;s Health and
                Cancer Rights Act (WHCRA) is a federal law that applies
                regardless of which state you live in. Our team will verify
                your benefits, handle prior authorization, and submit claims on
                your behalf.
              </p>
            </div>

            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8">
              <h3 className="font-heading mb-6 text-xl font-bold text-white">
                Insurance Support for Travelers
              </h3>
              <div className="mb-6 h-[2px] bg-gradient-to-r from-primary via-gold to-transparent" />
              <ul className="space-y-4">
                {[
                  "Free insurance verification before you travel",
                  "Prior authorization handled by our dedicated billing team",
                  "WHCRA coverage applies regardless of your home state",
                  "Claims submission and appeals support included",
                  "Clear cost estimates and transparent pricing provided before your visit",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-white/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Op Care Coordination */}
      <section className="bg-warm-grey py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Aftercare"
            title="Post-Operative Care Coordination"
            description="Your care does not end when you leave our office. We coordinate comprehensive follow-up support to ensure a smooth recovery, no matter where you live."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Video,
                title: "Virtual Follow-Ups",
                description:
                  "Telemedicine appointments available for remote post-operative check-ins, so you can connect with your surgeon from the comfort of home.",
              },
              {
                icon: HeartPulse,
                title: "Recovery Guidance",
                description:
                  "Detailed written and verbal aftercare instructions provided before you travel, covering every stage of your recovery journey.",
              },
              {
                icon: Phone,
                title: "Direct Access",
                description:
                  "Our team is just a phone call away if you have questions or concerns during your recovery period after returning home.",
              },
              {
                icon: MapPin,
                title: "Local Provider Coordination",
                description:
                  "We coordinate with your primary care physician or a local provider near your home for any in-person follow-up needs.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Quick Reference */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Our Locations"
            title="Where to Find Us"
            centered
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-heading">
                  New Jersey Office
                </h3>
              </div>
              <p className="font-semibold text-heading">
                Dr. Michael Sosin, MD, FACS
              </p>
              <p className="mt-2 text-base leading-relaxed text-body">
                264 Millburn Ave
                <br />
                Millburn, NJ 07041
              </p>
              <p className="mt-2 text-sm text-body">Mon - Fri 9am - 5pm</p>
              <p className="mt-3 text-base text-body">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:9735610900"
                  className="text-primary hover:underline"
                >
                  (973) 561-0900
                </a>
              </p>
              <p className="mt-1 text-sm text-body">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:NJ@myspsdocs.com"
                  className="text-primary hover:underline"
                >
                  NJ@myspsdocs.com
                </a>
              </p>
              <p className="mt-3 text-sm text-body">
                <span className="font-semibold">Nearest airports:</span>{" "}
                Newark Liberty (EWR), LaGuardia (LGA)
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-heading">
                  New York Office
                </h3>
              </div>
              <p className="font-semibold text-heading">
                Dr. Chris Devulapalli, MD
              </p>
              <p className="mt-2 text-base leading-relaxed text-body">
                500 Mamaroneck Ave, Suite 211
                <br />
                Harrison, NY 10528
              </p>
              <p className="mt-2 text-sm text-body">Mon - Fri 9am - 5pm</p>
              <p className="mt-3 text-base text-body">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:9148740900"
                  className="text-primary hover:underline"
                >
                  (914) 874-0900
                </a>
              </p>
              <p className="mt-1 text-sm text-body">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:Westchester@myspsdocs.com"
                  className="text-primary hover:underline"
                >
                  Westchester@myspsdocs.com
                </a>
              </p>
              <p className="mt-3 text-sm text-body">
                <span className="font-semibold">Nearest airports:</span>{" "}
                Westchester County (HPN), JFK, LaGuardia (LGA)
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <AppointmentButton className="inline-flex items-center gap-2.5 rounded-md border-2 border-primary bg-primary px-9 py-4 text-base font-bold uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-primary">
              <Calendar className="h-5 w-5" />
              Schedule Your Consultation
            </AppointmentButton>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
