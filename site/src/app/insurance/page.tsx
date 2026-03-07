import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  Scale,
  FileText,
  CheckCircle,
  AlertCircle,
  ClipboardList,
  PhoneCall,
  HeartPulse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Information",
  description:
    "Learn about insurance coverage for plastic surgery at Specialized Plastic Surgery. We help navigate WHCRA breast reconstruction coverage, medically necessary procedures, and insurance claims.",
};

export default function InsurancePage() {
  return (
    <>
      <HeroSection
        title="Insurance Information"
        subtitle="Our dedicated team helps you navigate insurance coverage so you can focus on your care and recovery."
      />

      {/* Out-of-Network Provider */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Coverage"
            title="Out-of-Network Provider"
            subtitle="Specialized Plastic Surgery is an out-of-network provider with most major insurance carriers. While we do not bill insurance directly, our experienced team works closely with you to maximize your benefits and minimize your out-of-pocket costs."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-secondary bg-peach-light p-8 text-center">
              <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold text-heading">
                Insurance Verification
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                We offer free insurance verification consultations to help you
                understand your benefits before committing to a procedure.
              </p>
            </div>
            <div className="rounded-xl border border-secondary bg-peach-light p-8 text-center">
              <FileText className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold text-heading">
                Claims Assistance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Our billing team handles claims submission on your behalf,
                working to ensure proper documentation and timely filing.
              </p>
            </div>
            <div className="rounded-xl border border-secondary bg-peach-light p-8 text-center">
              <Scale className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold text-heading">
                Appeals Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                If a claim is denied, we assist with the appeals process and
                advocate on your behalf to help secure the coverage you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHCRA Section */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Federal Law
              </p>
              <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
                Women&apos;s Health and Cancer Rights Act (WHCRA)
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-body">
                The Women&apos;s Health and Cancer Rights Act of 1998 is a
                federal law that protects breast cancer patients who choose to
                have reconstruction after a mastectomy. If your health insurance
                covers mastectomy, it is required by law to also cover breast
                reconstruction.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                This law applies to most group health plans and individual
                insurance policies. It ensures that patients have access to the
                full spectrum of reconstructive options without discrimination or
                unnecessary barriers.
              </p>
            </div>

            <div className="rounded-xl border border-secondary bg-white p-8">
              <h3 className="font-heading mb-6 text-xl font-bold text-heading">
                What WHCRA Covers
              </h3>
              <ul className="space-y-4">
                {[
                  "Reconstruction of the breast on which the mastectomy was performed",
                  "Surgery and reconstruction of the other breast to achieve symmetry",
                  "External breast prostheses during and after reconstruction",
                  "Treatment of physical complications at all stages of mastectomy, including lymphedema",
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

      {/* Medically Necessary Procedures */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Medically Necessary"
            title="Procedures That May Be Covered by Insurance"
            subtitle="Certain plastic surgery procedures may qualify for insurance coverage when they are deemed medically necessary. Our team will help document the medical need and submit the appropriate authorization requests."
            centered
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-secondary bg-peach-light p-8">
              <div className="mb-4 flex items-center gap-3">
                <HeartPulse className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-xl font-bold text-heading">
                  Breast Reduction
                </h3>
              </div>
              <p className="mb-4 text-base leading-relaxed text-body">
                Breast reduction surgery may be covered by insurance when it is
                medically necessary to address chronic symptoms, including:
              </p>
              <ul className="space-y-2">
                {[
                  "Chronic neck, back, and shoulder pain",
                  "Skin irritation and rashes beneath the breasts",
                  "Posture problems and skeletal discomfort",
                  "Difficulty with physical activity and exercise",
                  "Bra strap grooving and nerve compression",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-secondary bg-peach-light p-8">
              <div className="mb-4 flex items-center gap-3">
                <HeartPulse className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-xl font-bold text-heading">
                  Body Contouring After Weight Loss
                </h3>
              </div>
              <p className="mb-4 text-base leading-relaxed text-body">
                Panniculectomy and certain body contouring procedures may
                qualify for partial insurance coverage when excess skin causes
                medical complications, such as:
              </p>
              <ul className="space-y-2">
                {[
                  "Recurring skin infections and rashes",
                  "Hygiene difficulties caused by skin folds",
                  "Chronic pain and mobility limitations",
                  "Documented failure of conservative treatment",
                  "Significant functional impairment",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Process */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Insurance Process"
            subtitle="We guide you through every step of the insurance process so you can focus on your health and well-being."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="relative rounded-xl border border-secondary bg-white p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <ClipboardList className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading mb-3 text-lg font-bold text-heading">
                Step 1: Authorization
              </h3>
              <p className="text-sm leading-relaxed text-body">
                We submit a prior authorization request to your insurance
                company, including medical records, clinical photographs, and a
                letter of medical necessity from your surgeon.
              </p>
            </div>

            <div className="relative rounded-xl border border-secondary bg-white p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading mb-3 text-lg font-bold text-heading">
                Step 2: Claims Submission
              </h3>
              <p className="text-sm leading-relaxed text-body">
                After your procedure, we file the insurance claim with all
                required documentation, including operative reports and itemized
                billing, to ensure accurate and timely processing.
              </p>
            </div>

            <div className="relative rounded-xl border border-secondary bg-white p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <PhoneCall className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading mb-3 text-lg font-bold text-heading">
                Step 3: Appeals
              </h3>
              <p className="text-sm leading-relaxed text-body">
                If a claim is denied, we do not give up. Our team prepares and
                submits a detailed appeal with additional supporting
                documentation to fight for the coverage you are entitled to
                under the law.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-primary/20 bg-white p-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <AlertCircle className="h-5 w-5 text-primary" />
              <p className="text-base leading-relaxed text-body">
                <span className="font-semibold text-heading">
                  Free insurance verification
                </span>{" "}
                is available for all breast reconstruction and medically
                necessary procedures. Contact our office to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need Help With Insurance?"
        subtext="Our dedicated insurance team is ready to help verify your benefits and guide you through the process."
      />
    </>
  );
}
