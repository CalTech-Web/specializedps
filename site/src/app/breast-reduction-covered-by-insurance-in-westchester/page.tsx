import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { doctors } from "@/data/doctors";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import DoctorReviewSlider from "@/components/sections/DoctorReviewSlider";
import {
  Shield,
  Star,
  Award,
  Users,
  CheckCircle,
  ClipboardList,
  FileCheck,
  CalendarCheck,
  HeartPulse,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Zap,
  Smile,
  Activity,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  FileText,
  Ruler,
  Instagram,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Breast Reduction Covered by Insurance in Westchester, NY | Dr. Devulapalli",
  description:
    "Learn how breast reduction surgery may be covered by your insurance in Westchester, NY. Dr. Chris Devulapalli has performed over 1,000 breast reductions with a dedicated insurance concierge team to help secure your coverage.",
};

const processSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Free Consultation",
    description:
      "Meet with Dr. Devulapalli for a complimentary evaluation. We assess your symptoms, discuss your goals, and determine if your breast reduction qualifies for insurance coverage.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Pre-Authorization",
    description:
      "Our dedicated insurance concierge team handles all the paperwork. We document your symptoms, meet tissue removal criteria, and submit a thorough case to your insurance carrier.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Schedule Your Surgery",
    description:
      "Once approved, we coordinate every detail of your procedure. From pre-operative preparation to post-surgical recovery, our team guides you through the entire process.",
  },
];

const serviceAreas = [
  "White Plains",
  "Eastchester",
  "Scarsdale",
  "Yonkers",
  "Tuckahoe",
  "Bronxville",
  "Mamaroneck",
  "New Rochelle",
  "Harrison",
  "Port Chester",
  "Hartsdale",
  "Mount Vernon",
  "Dobbs Ferry",
  "Elmsford",
  "Mount Kisco",
  "Purchase",
  "Greenwich",
  "Tarrytown",
];

const hospitals = [
  "White Plains Hospital",
  "Rye Ambulatory Center",
  "Lenox Hill Hospital",
  "Northern Westchester Hospital",
  "In-Office AAAA-SF Accredited OR Suite",
];

const medicalNecessityTable = [
  {
    symptom: "Chronic Pain",
    description:
      "Persistent, debilitating back, neck, and shoulder pain that has not responded to non-surgical treatments (like physical therapy or chiropractic care).",
  },
  {
    symptom: "Skin Irritations",
    description:
      "Recurrent rashes, infections, or chafing (intertrigo) in the skin fold underneath the breasts.",
  },
  {
    symptom: "Shoulder Indentations",
    description:
      "Deep, painful indentations (grooves) on the shoulders caused by bra straps digging into the skin to support the breast weight.",
  },
  {
    symptom: "Functional & Postural Issues",
    description:
      "Postural problems or difficulty exercising due to the size and weight of the breasts.",
  },
];

export default function BreastReductionInsuranceWestchesterPage() {
  const drChris = doctors.find((d) => d.slug === "chris-devulapalli")!;
  const ny = siteConfig.locations.ny;

  return (
    <>
      {/* ── Custom Landing Page Header ── */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/images/logos/black-logo.webp"
              alt="Specialized Plastic Surgery"
              width={200}
              height={50}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${ny.phoneRaw}`}
              className="hidden items-center gap-2 text-sm font-bold text-heading transition-colors hover:text-primary sm:flex"
            >
              <Phone className="h-4 w-4 text-primary" />
              {ny.phone}
            </a>
            <Link
              href="#contact-form"
              className="rounded-md bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/90"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden bg-heading">
        <Image
          src="https://specializedplasticsurgery.com/wp-content/uploads/2025/11/Header-Image.jpg"
          alt="Breast Reduction Surgery"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Westchester, NY
          </p>
          <h1 className="font-heading mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Breast Reduction Through Insurance in Westchester, NY
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Over 1,000 breast reductions performed by Dr. Chris Devulapalli. Our dedicated insurance concierge team navigates every step of the approval process so you can focus on your care.
          </p>

          {/* Trust Stats */}
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "1,000+", label: "Reductions" },
              { value: "5.0", label: "Google Rating" },
              { value: "Board", label: "Certified" },
              { value: "Fellowship", label: "Trained" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/[0.1] bg-white/[0.06] px-4 py-3"
              >
                <p className="font-heading text-lg font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact-form"
              className="inline-block rounded-md border-2 border-gold bg-gold px-7 py-2.5 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white"
            >
              Schedule Free Consultation
            </Link>
            <a
              href={`tel:${ny.phoneRaw}`}
              className="inline-block rounded-md border-2 border-white bg-transparent px-7 py-2.5 text-base font-bold text-white transition-all hover:bg-white hover:text-heading"
            >
              Call {ny.phone}
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 gold-shimmer h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* ── Section 2: Dr. Devulapalli's Philosophy ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Dr. Devulapalli&apos;s Philosophy
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-heading sm:text-4xl">
                You Often Get More, Not Less
              </h2>
              <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-primary to-transparent" />

              <p className="mt-6 text-base leading-relaxed text-body">
                Many patients think of breast reduction as losing something, but Dr. Devulapalli sees it differently. Breast reduction is really breast reshaping, focused on improving form, proportion, posture, and comfort. The goal is not just smaller breasts, it is a body that feels balanced, proportional, and free from the chronic pain that has been holding you back.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                When breast reduction is medically necessary, insurance may cover the procedure. Dr. Devulapalli and our insurance concierge team work together to document your case thoroughly and help secure the coverage you deserve.
              </p>

              <blockquote className="mt-8 rounded-lg border-l-4 border-primary bg-warm-grey p-6">
                <p className="font-heading text-lg font-bold leading-relaxed text-heading">
                  &ldquo;Reduction sounds like you are losing something, but often you get more: better balance, better posture, easier movement, better proportion.&rdquo;
                </p>
                <p className="mt-3 text-sm font-bold text-primary">
                  Dr. Chris Devulapalli, MD
                </p>
              </blockquote>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={drChris.image}
                alt="Dr. Chris Devulapalli, MD"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heading/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-xl font-bold text-white">
                  {drChris.name}, {drChris.credentials}
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Board-Certified Plastic Surgeon
                </p>
                <p className="text-sm text-white/80">
                  Fellowship-Trained Breast Surgery Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Google Reviews ── */}
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="What Our Patients Say"
            description="Real reviews from real patients. See why Dr. Devulapalli is one of the most trusted plastic surgeons in Westchester County."
            centered
          />
          <div className="mt-10">
            <DoctorReviewSlider doctorSlug="chris-devulapalli" />
          </div>
        </div>
      </section>

      {/* ── We Work with a Wide Range of Insurance Plans ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Insurance"
                title="We Work with a Wide Range of Insurance Plans"
                centered={false}
              />
              <p className="mt-4 text-base leading-relaxed text-body">
                Our practice has extensive experience navigating insurance approvals for breast reduction. We work with a wide range of insurance carriers and understand the specific documentation requirements each plan demands. Our insurance concierge team handles everything from initial verification to pre-authorization and claims submission, so you never have to deal with the paperwork alone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                Even if you have been denied in the past, Dr. Devulapalli and our team may be able to help. We know how to present your case effectively and have successfully appealed denials for many of our patients.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Insurance Verification",
                  text: "Free verification of your benefits before your visit",
                },
                {
                  icon: FileCheck,
                  title: "Pre-Authorization",
                  text: "We handle all documentation and submissions",
                },
                {
                  icon: BadgeCheck,
                  title: "Claims Support",
                  text: "Full claims submission and appeals assistance",
                },
                {
                  icon: Users,
                  title: "Concierge Team",
                  text: "Dedicated staff to guide you through the process",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/0 transition-all duration-300 group-hover:bg-primary" />
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Free Consultation & Insurance Verification ── */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 gold-shimmer h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            No Cost to You
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl">
            Free Consultation &amp; Insurance Verification
          </h2>
          <div className="gold-shimmer mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            Your journey begins with a complimentary consultation and insurance verification. Our team reviews your benefits, determines your eligibility, and guides you through every step of the process at absolutely no cost.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <ClipboardList className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                Free Consultation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                A thorough evaluation with Dr. Devulapalli to assess your symptoms, discuss your goals, and determine if you qualify for insurance coverage.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                Insurance Verification
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Our concierge team contacts your insurance provider, verifies your benefits, and provides a clear breakdown of your coverage and costs.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="#contact-form"
              className="inline-block rounded-md border-2 border-gold bg-gold px-8 py-3 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Insurance Coverage: When is it Covered? ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Coverage Details"
            title="Insurance Coverage for Breast Reduction: When Is It Covered?"
            description="Most insurance plans will cover breast reduction when it is deemed medically necessary. Coverage typically requires documentation of chronic symptoms, failed conservative treatments, and a minimum tissue removal threshold."
            centered
          />

          <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-gray-100 bg-warm-grey p-8">
            <p className="text-base leading-relaxed text-body">
              Insurance carriers typically require documentation of specific symptoms that demonstrate breast reduction is medically necessary, not just cosmetic. Our practice has extensive experience navigating these requirements and presenting the strongest possible case to your insurance carrier.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body">
              Even if you have been denied coverage in the past, our team may be able to help. We have successfully appealed denials for many patients by providing thorough documentation and meeting all medical criteria.
            </p>
          </div>
        </div>
      </section>

      {/* ── Breast Reduction & Insurance: Streamlined Process ── */}
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Our Streamlined Process"
            title="Breast Reduction & Insurance"
            description="We understand that navigating insurance coverage can be overwhelming. Our dedicated team works directly with your health plan to determine eligibility and obtain pre-authorization, making the process as seamless as possible for you."
            centered
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 gold-shimmer h-[3px] bg-gradient-to-r from-primary via-gold to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    {i + 1}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-heading">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Our Expert: Dr. Chris Devulapalli ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[420px_1fr]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={drChris.aboutImage || drChris.image}
                alt={drChris.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Meet Our Expert"
                title="Dr. Chris Devulapalli"
                centered={false}
              />
              <p className="mt-2 text-sm font-medium text-primary">
                Board-Certified Plastic Surgeon | Advanced Fellowship-Trained Breast Surgery Specialist
              </p>

              <p className="mt-6 text-base leading-relaxed text-body">
                Your surgeon is your greatest asset. Dr. Devulapalli is a highly sought-after, board-certified plastic surgeon, known for his precision in both aesthetic and complex reconstructive surgery.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                Dr. Devulapalli completed his rigorous training in plastic and reconstructive surgery at Georgetown University and Johns Hopkins Hospital and possesses extensive subspecialty training in microsurgery. This background ensures a meticulous approach, particularly vital in breast reduction, where precise tissue handling, optimal blood supply preservation, and superior wound closure are essential for minimized scarring and long-term results.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                This unique expertise in reconstructive principles elevates his aesthetic outcomes, meaning your reduction is performed with the utmost regard for function, safety, and artistry. When you choose Dr. Devulapalli, you are trusting a surgeon whose advanced training translates directly into safer, more refined results.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Shield,
                    title: "Board Certified",
                    text: "American Board of Plastic Surgery",
                  },
                  {
                    icon: Award,
                    title: "Castle Connolly Top Doctor",
                    text: "Recognized for exceptional care",
                  },
                  {
                    icon: Star,
                    title: "Fellowship Trained",
                    text: "Georgetown University & Johns Hopkins",
                  },
                  {
                    icon: Users,
                    title: "1,000+ Reductions",
                    text: "Extensive breast surgery experience",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-heading">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-body">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

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

      {/* ── Serving Westchester County ── */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 gold-shimmer h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Service Areas"
            title="Serving Patients Throughout Westchester County"
            light
            centered
          />

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-primary/30 hover:bg-primary/10"
              >
                <span className="relative flex h-3.5 w-3.5 shrink-0"><span className="absolute inset-0 animate-ping rounded-full bg-primary/40" /><MapPin className="relative h-3.5 w-3.5 text-primary" /></span>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Request FREE Consultation + Form ── */}
      <section id="contact-form" className="relative bg-white py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_520px]">
            <div>
              <SectionHeading
                eyebrow="Get Started"
                title="Request Your FREE Consultation with Insurance Verification"
                centered={false}
              />

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-body">
                    Call Now
                  </p>
                  <a
                    href={`tel:${ny.phoneRaw}`}
                    className="font-heading text-2xl font-bold text-heading transition-colors hover:text-primary"
                  >
                    {ny.phone}
                  </a>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                <h3 className="font-heading text-xl font-bold text-heading">
                  What Happens Next
                </h3>
                {[
                  {
                    step: "1",
                    title: "Insurance Verification",
                    text: "We verify your insurance benefits and determine your coverage for breast reduction at no cost to you.",
                  },
                  {
                    step: "2",
                    title: "Complimentary Consultation",
                    text: "Meet Dr. Devulapalli for a thorough evaluation of your symptoms and discussion of your goals.",
                  },
                  {
                    step: "3",
                    title: "Pre-Authorization & Scheduling",
                    text: "Our team handles all documentation and pre-authorization, then schedules your procedure at your convenience.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-heading">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-body">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-lg border border-gray-100 bg-warm-grey p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-heading">
                  Prefer to Reach Us Directly?
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

            <div className="rounded-lg border border-gray-100 bg-warm-grey p-8 shadow-sm lg:sticky lg:top-24">
              <h3 className="font-heading text-xl font-bold text-heading">
                Schedule Your Free Consultation
              </h3>
              <p className="mt-2 text-sm text-body">
                Complete the form below and our insurance concierge team will
                reach out to verify your coverage and schedule your appointment.
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

      {/* ── How We Help Secure Your Coverage ── */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 gold-shimmer h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Insurance Support"
            title="How We Help Secure Your Coverage"
            description="Insurance carriers require thorough documentation to approve coverage for a breast reduction. Our specialized insurance team works diligently to build the strongest possible case."
            light
            centered
          />

          <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                Document Symptoms
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                We gather and present evidence of chronic pain and functional issues, including your medical history and documentation of failed conservative treatments.
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Ruler className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                Meet Removal Criteria
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Policies often require a minimum amount of tissue to be removed (measured in grams) to qualify. We carefully plan the surgery to meet both your aesthetic goals and your insurer&apos;s requirements.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-white/70">
            Don&apos;t let the cost of surgery prevent you from seeking relief. Contact us today to start the conversation about maximizing your insurance benefits.
          </p>

          <div className="mt-8 text-center">
            <Link
              href="#contact-form"
              className="inline-block rounded-md border-2 border-gold bg-gold px-8 py-3 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* ── Discover Our Convenient Location ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Visit Us"
            title="Discover Our Convenient Location"
            centered
          />

          <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-8 lg:grid-cols-2">
            {/* Building Image */}
            <div className="relative min-h-[360px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://specializedplasticsurgery.com/wp-content/uploads/2025/08/500-Mamaroneck-Ave-Building-scaled.jpg"
                alt="500 Mamaroneck Ave, Harrison, NY"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heading/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-xl font-bold text-white">
                  500 Mamaroneck Ave
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Suite 211, Harrison, NY 10528
                </p>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="rounded-lg border border-gray-100 bg-warm-grey p-8 shadow-sm">
              <div className="grid gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-body/60">
                      Address
                    </p>
                    <p className="mt-1 text-sm font-medium text-heading">
                      {ny.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-body/60">
                      Phone
                    </p>
                    <a
                      href={`tel:${ny.phoneRaw}`}
                      className="mt-1 block text-sm font-bold text-primary transition-colors hover:text-heading"
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-body/60">
                      Email
                    </p>
                    <a
                      href={`mailto:${ny.email}`}
                      className="mt-1 block text-sm font-medium text-primary transition-colors hover:text-heading"
                    >
                      {ny.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Instagram className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-body/60">
                      Instagram
                    </p>
                    <a
                      href={ny.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-heading transition-colors hover:text-primary"
                    >
                      @chrisdevulapalliMD
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-body/60">
                      Hours
                    </p>
                    <p className="mt-1 text-sm text-heading">
                      Mon - Fri: 9am - 5PM
                    </p>
                    <p className="text-sm text-body">Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ERAS Recovery ── */}
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Enhanced Recovery"
            title="Our Commitment to Your Recovery: Enhanced Recovery After Surgery (ERAS)"
            description="Your journey to healing is as important as the surgery itself. We are proud to employ Enhanced Recovery After Surgery (ERAS), a cutting-edge, personalized system designed for faster, safer, and more comfortable healing."
            centered
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Customized Care",
                description:
                  "ERAS provides clear, precise instructions for before and after surgery, optimizing your body's readiness for the procedure.",
              },
              {
                icon: HeartPulse,
                title: "Advanced Pain Management",
                description:
                  "We utilize multi-modal pain management techniques that rely less on traditional opioids, resulting in better pain control, fewer side effects, and a smoother recovery transition.",
              },
              {
                icon: Zap,
                title: "Reduced Complications",
                description:
                  "This evidence-based approach minimizes surgical stress, allowing you to get back to your life sooner with less downtime.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 gold-shimmer h-[3px] bg-gradient-to-r from-primary via-gold to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:scale-110">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-heading">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/enhanced-recovery-after-surgery"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-heading"
            >
              Learn More About ERAS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Aesthetic and Quality-of-Life Concerns ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Quality of Life"
            title="Aesthetic and Quality-of-Life Concerns"
            description="While insurance primarily focuses on medical necessity, your overall quality of life and physical discomfort are important factors we document. These concerns often accompany the physical symptoms."
            centered
          />

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-3">
            {[
              {
                icon: Activity,
                title: "Sagging Breasts",
                description:
                  "Significant breast ptosis (sagging) that contributes to functional issues.",
              },
              {
                icon: HeartPulse,
                title: "Stretched Skin and Tissue",
                description:
                  "Breast tissue and skin that has been stretched or damaged after substantial weight changes (gain or loss) or pregnancy.",
              },
              {
                icon: Smile,
                title: "Clothing Fit Issues",
                description:
                  "Persistent trouble finding clothing that fits well or participating comfortably in activities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/0 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-gold group-hover:to-primary" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-heading">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hospital Affiliations ── */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 gold-shimmer h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Facilities"
            title="Hospital Affiliations"
            description="Dr. Devulapalli has privileges at the region's top medical centers, ensuring your care is provided in a world-class surgical environment."
            light
            centered
          />

          <div className="mx-auto mt-10 grid max-w-5xl items-start gap-10 lg:grid-cols-[1fr_400px]">
            <div className="grid gap-4 sm:grid-cols-2">
              {hospitals.map((hospital, i) => (
                <div
                  key={hospital}
                  className={`flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.04] px-6 py-5 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.07] ${
                    i === hospitals.length - 1 && hospitals.length % 2 !== 0
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-heading text-base font-bold text-white">
                    {hospital}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative hidden min-h-[320px] overflow-hidden rounded-lg shadow-lg lg:block">
              <Image
                src="https://specializedplasticsurgery.com/wp-content/uploads/2025/09/OR-Surgery-Picture.jpg"
                alt="State-of-the-art surgical facility"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Symptoms of Medical Necessity (Table) ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Medical Documentation"
            title="Symptoms of Medical Necessity"
            centered
          />

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-lg border border-gray-100 shadow-sm">
            <div className="hidden grid-cols-[200px_1fr] border-b border-gray-100 bg-heading sm:grid">
              <div className="p-4">
                <span className="text-sm font-bold text-white">Symptom</span>
              </div>
              <div className="p-4">
                <span className="text-sm font-bold text-white">
                  Description
                </span>
              </div>
            </div>
            {medicalNecessityTable.map((row, i) => (
              <div
                key={row.symptom}
                className={`grid gap-2 border-b border-gray-100 p-5 sm:grid-cols-[200px_1fr] sm:gap-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-warm-grey"
                }`}
              >
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:mt-0" />
                  <span className="font-heading text-sm font-bold text-heading">
                    {row.symptom}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-body sm:pl-4">
                  {row.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to Move Past the Pain? ── */}
      <section className="relative bg-heading py-14 sm:py-16">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 gold-shimmer h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Take the Next Step
          </p>
          <h2 className="font-heading mt-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Move Past the Pain and Limitations?
          </h2>
          <div className="gold-shimmer mx-auto mt-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            Many health plans cover breast reduction surgery. We offer a complimentary consultation to start the process of obtaining authorization, which involves submitting documentation like a Letter of Medical Necessity to your insurer. Our experienced team is dedicated to helping you secure approval and maximize your plan&apos;s benefits. Coverage is always subject to your specific plan&apos;s provisions, including deductibles and limitations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact-form"
              className="inline-block rounded-md border-2 border-gold bg-gold px-8 py-3 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white"
            >
              Request Your Consultation Today
            </Link>
            <a
              href={`tel:${ny.phoneRaw}`}
              className="inline-block rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-bold text-white transition-all hover:bg-white hover:text-heading"
            >
              Call {ny.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Custom Landing Page Footer ── */}
      <footer className="bg-heading py-10">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="text-center sm:text-left">
              <Image
                src="/images/logos/white-logo.webp"
                alt="Specialized Plastic Surgery"
                width={220}
                height={50}
                className="mx-auto sm:mx-0"
              />
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-primary">
                New York Office
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 text-sm text-white/70 sm:items-end">
              <span>Mon - Fri: 9am - 5PM</span>
              <span>{ny.address}</span>
              <a
                href={`mailto:${ny.email}`}
                className="transition-colors hover:text-primary"
              >
                {ny.email}
              </a>
              <a
                href={`tel:${ny.phoneRaw}`}
                className="font-bold text-primary transition-colors hover:text-white"
              >
                {ny.phone}
              </a>
              <a
                href={ny.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                @chrisdevulapalliMD
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-6 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Specialized Plastic Surgery | All Rights Reserved.
            </p>
            <p className="text-xs text-white/40">
              Built by{" "}
              <a
                href="https://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-primary"
              >
                CalTech Web
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
