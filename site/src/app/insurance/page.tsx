import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ShieldCheck,
  Scale,
  FileText,
  CheckCircle,
  AlertCircle,
  ClipboardList,
  PhoneCall,
  ChevronDown,
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
        title="Navigating Your Insurance Coverage, Our Commitment to Patient Advocacy"
        subtitle="Our dedicated team simplifies the insurance process, helping you understand your coverage and maximize your benefits so you can focus on your care and recovery."
        backgroundImage="/images/insurance/hero-insurance.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insurance" }]}
      />

      {/* Out-of-Network Excellence */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Insurance Policy"
                title="Out-of-Network Excellence"
                centered={false}
              />
              <p className="mb-8 text-base leading-relaxed text-body">
                We operate as an out-of-network provider with most major
                insurance carriers. This allows our board-certified surgeons to
                maintain complete autonomy over your care, ensuring you receive
                the highest standard of specialized treatment without the
                limitations often imposed by restrictive networks. While we are
                out-of-network, our specialized team excels at maximizing your
                benefits.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Submission & Verification",
                    text: "We prepare and submit all required documentation, including clinical photos, letters of medical necessity, and operative reports, with free insurance verification consultations.",
                  },
                  {
                    icon: FileText,
                    title: "Monitoring & Claims",
                    text: "We diligently track your pre-authorization status and follow up with your carrier until a decision is reached, then handle claims submission with proper documentation.",
                  },
                  {
                    icon: Scale,
                    title: "Appeals Support",
                    text: "If a claim is denied, we assist with the appeals process and advocate on your behalf to help secure the coverage you deserve.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-heading">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-body">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/insurance/fine-print.jpg"
                alt="Insurance fine print documentation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reconstructive Coverage (WHCRA) */}
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/insurance/sps-image-1022.jpg"
                alt="Medical professional consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Reconstructive Coverage"
                title="Insurance Coverage for Reconstructive Procedures"
                centered={false}
                light
              />
              <p className="mb-4 text-base leading-relaxed text-white/70">
                The Women&#39;s Health and Cancer Rights Act of 1998 is a
                federal law that protects breast cancer patients who choose to
                have reconstruction after a mastectomy. If your health insurance
                covers mastectomy, it is required by law to also cover breast
                reconstruction.
              </p>
              <p className="mb-6 text-base leading-relaxed text-white/70">
                Our team has an in-depth understanding of the WHCRA and uses it
                to ensure you receive comprehensive, high-quality reconstructive
                care you are entitled to, regardless of our out-of-network
                status.
              </p>

              <div className="mb-6 h-[2px] bg-gradient-to-r from-primary via-gold to-transparent" />
              <ul className="space-y-3">
                {[
                  "Reconstruction of the breast on which the mastectomy was performed",
                  "Surgery and reconstruction of the other breast to achieve symmetry",
                  "External breast prostheses during and after reconstruction",
                  "Treatment of physical complications at all stages, including lymphedema",
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

      {/* Medically Necessary Procedures - Accordion with image */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Medically Necessary"
                title="Exploring Coverage for Medically Necessary and Aesthetic Procedures"
                centered={false}
              />
              <p className="mb-8 text-base leading-relaxed text-body">
                Certain plastic surgery procedures may qualify for insurance
                coverage when they are deemed medically necessary. Our team will
                help document the medical need and submit the appropriate
                authorization requests.
              </p>

              {/* Accordion */}
              <div className="space-y-4">
                <details
                  className="group rounded-lg border border-gray-200 bg-white shadow-sm"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-heading text-lg font-bold text-heading transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                    <span>Breast Reduction Coverage</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                    <p className="mb-3 text-sm leading-relaxed text-body">
                      Breast reduction surgery is one of the most common
                      procedures covered by insurance when performed for medical
                      necessity. Our team works with your carrier to demonstrate
                      that non-surgical treatments have failed. Coverage is
                      typically approved for:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Chronic, debilitating pain in the neck, back, or shoulders",
                        "Recurrent skin irritation or rashes beneath the breast crease",
                        "Deep grooves or indentations in the shoulders from bra straps",
                        "Difficulty with physical activity and exercise",
                        "Numbness or tingling from nerve compression",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-body"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>

                <details className="group rounded-lg border border-gray-200 bg-white shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-heading text-lg font-bold text-heading transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                    <span>Post-Weight Loss Coverage Potential</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                    <p className="mb-3 text-sm leading-relaxed text-body">
                      Panniculectomy and certain body contouring procedures may
                      qualify for partial insurance coverage when excess skin
                      causes medical complications. For abdominoplasty, repair
                      of significant diastasis recti causing functional issues
                      may be eligible for partial coverage. Conditions include:
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
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/insurance/new-image-120.jpg"
                alt="Patient consultation for insurance covered procedures"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your Next Step - Insurance Process */}
      <section className="bg-warm-grey py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="Your Next Step"
            description="We guide you through every step of the insurance process so you can focus on your health and well-being."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
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

    </>
  );
}
