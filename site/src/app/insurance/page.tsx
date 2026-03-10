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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insurance" }]}
      />

      {/* Out-of-Network Provider */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Coverage"
            title="Out-of-Network Provider"
            subtitle="Specialized Plastic Surgery is an out-of-network provider with most major insurance carriers. While we do not bill insurance directly, our experienced team works closely with you to maximize your benefits and minimize your out-of-pocket costs."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-heading">
                Insurance Verification
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                We offer free insurance verification consultations to help you
                understand your benefits before committing to a procedure.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-heading">
                Claims Assistance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Our billing team handles claims submission on your behalf,
                working to ensure proper documentation and timely filing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Scale className="h-6 w-6 text-primary" />
              </div>
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
      <section className="relative bg-heading py-14 sm:py-16">
        {/* Marble overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Federal Law"
                title="Women's Health and Cancer Rights Act (WHCRA)"
                description="The Women's Health and Cancer Rights Act of 1998 is a federal law that protects breast cancer patients who choose to have reconstruction after a mastectomy. If your health insurance covers mastectomy, it is required by law to also cover breast reconstruction."
                light
              />
              <p className="mt-4 text-base leading-relaxed text-white/70">
                This law applies to most group health plans and individual
                insurance policies. It ensures that patients have access to the
                full spectrum of reconstructive options without discrimination or
                unnecessary barriers.
              </p>
            </div>

            {/* Glass-morphism card */}
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8">
              <h3 className="font-heading mb-6 text-xl font-bold text-white">
                What WHCRA Covers
              </h3>
              {/* Gold gradient bar */}
              <div className="mb-6 h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />
              <ul className="space-y-4">
                {[
                  "Reconstruction of the breast on which the mastectomy was performed",
                  "Surgery and reconstruction of the other breast to achieve symmetry",
                  "External breast prostheses during and after reconstruction",
                  "Treatment of physical complications at all stages of mastectomy, including lymphedema",
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

      {/* Medically Necessary Procedures */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Medically Necessary"
            title="Procedures That May Be Covered by Insurance"
            subtitle="Certain plastic surgery procedures may qualify for insurance coverage when they are deemed medically necessary. Our team will help document the medical need and submit the appropriate authorization requests."
            centered
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Breast Reduction card */}
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <HeartPulse className="h-5 w-5 text-primary" />
                </div>
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
                  <li key={index} className="flex items-start gap-3 text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Body Contouring card */}
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <HeartPulse className="h-5 w-5 text-primary" />
                </div>
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
                  <li key={index} className="flex items-start gap-3 text-body">
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
      <section className="bg-warm-grey py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="Our Insurance Process"
            subtitle="We guide you through every step of the insurance process so you can focus on your health and well-being."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
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

            {/* Step 2 */}
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
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

            {/* Step 3 */}
            <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
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

          <div className="mt-10 rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm">
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

      <CTABanner />
    </>
  );
}
