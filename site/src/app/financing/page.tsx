import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  CreditCard,
  ShieldCheck,
  Calculator,
  CheckCircle,
  DollarSign,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Financing & Payment Options",
  description:
    "Flexible financing options for plastic surgery at Specialized Plastic Surgery. CareCredit and Cherry Payments available with 0% APR options and convenient monthly plans.",
};

export default function FinancingPage() {
  return (
    <>
      <HeroSection
        title="Financing & Payment Options"
        subtitle="We believe exceptional care should be accessible. Explore flexible payment plans designed to fit your budget."
        backgroundImage="/images/hero/SPS-Image-129.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Financing" },
        ]}
      />

      {/* Transparent Pricing */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Transparent, Upfront Pricing"
            description="At Specialized Plastic Surgery, we believe you deserve clarity when it comes to the cost of your care. During your consultation, you will receive a detailed breakdown of all fees, including surgeon fees, anesthesia, facility costs, and any post-operative garments or supplies. There are no hidden charges or surprise bills."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <DollarSign className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-heading">
                All-Inclusive Quotes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Your quote includes surgeon fees, anesthesia, facility costs,
                and post-operative supplies so you know the full cost upfront.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-heading">
                No Hidden Fees
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                We are committed to honest pricing with no surprise charges.
                What you are quoted is what you pay.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Calculator className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-heading">
                Flexible Plans
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Multiple financing options let you choose a payment plan that
                works for your lifestyle and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CareCredit */}
      <section className="relative bg-heading py-14 sm:py-16">
        {/* Marble texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Financing Option"
                title="CareCredit"
                centered={false}
                light
              />
              <p className="mb-6 text-lg leading-relaxed text-white/75">
                CareCredit is a revolving health and wellness credit card
                accepted at over 266,000 locations nationwide. It gives you the
                flexibility to use your card again and again for procedures,
                follow-up treatments, and even everyday health expenses.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                CareCredit offers promotional financing periods of 6 to 24
                months at 0% APR with deferred interest. Longer terms of up to
                60 months are available at a reduced APR for larger procedures.
                Please note that CareCredit requires a hard credit check as part
                of the application process.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-white/60">
                  Apply online or in our office before your procedure date.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-8">
              <h3 className="font-heading mb-6 text-xl font-bold text-white">
                CareCredit Highlights
              </h3>
              <ul className="space-y-4">
                {[
                  "0% APR promotional financing for 6 to 24 months",
                  "Extended terms up to 60 months at reduced APR",
                  "Reusable at 266,000+ healthcare locations",
                  "Deferred interest on promotional plans",
                  "Requires a hard credit check for approval",
                  "Apply online or in our office before your procedure",
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

      {/* Cherry Payments */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="order-2 rounded-lg border border-gray-100 bg-white p-8 shadow-sm lg:order-1">
              <h3 className="font-heading mb-6 text-xl font-bold text-heading">
                Cherry Highlights
              </h3>
              <ul className="space-y-4">
                {[
                  "Soft credit check with no impact on your credit score",
                  "True 0% APR options for qualified borrowers",
                  "Fixed monthly payments with clear, transparent terms",
                  "Loan terms ranging from 3 to 60 months",
                  "Quick application with fast approval decisions",
                  "No prepayment penalties or hidden fees",
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

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Financing Option"
                title="Cherry Payments"
                centered={false}
              />
              <p className="mb-6 text-lg leading-relaxed text-body">
                Cherry offers fixed installment loans designed specifically for
                healthcare expenses. Unlike revolving credit, Cherry provides a
                clear, predictable repayment schedule so you always know exactly
                what your monthly payment will be.
              </p>
              <p className="text-base leading-relaxed text-body">
                One of the biggest advantages of Cherry is the soft credit
                check, which means applying will not affect your credit score.
                Qualified borrowers can access true 0% APR financing with fixed
                terms ranging from 3 to 60 months, making it an excellent choice
                for patients who want straightforward, no-surprise payment
                plans.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-body">
                  No hard credit pull means applying will not affect your score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Example */}
      <section className="relative bg-heading py-14 sm:py-16">
        {/* Marble texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />

        <div className="relative mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Payment Example"
            title="See What Your Monthly Payments Could Look Like"
            centered
            light
          />

          <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-white/[0.06] bg-white/[0.03] p-8 sm:p-10">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                $9,000 Procedure
              </h3>
            </div>

            <p className="mb-8 text-center text-base leading-relaxed text-white/70">
              Based on a $9,000 all-inclusive procedure cost, here is what your
              estimated monthly payments could look like depending on the
              financing term you choose.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  12 Months
                </p>
                <p className="mt-2 text-3xl font-bold text-white">~$750</p>
                <p className="mt-1 text-sm text-white/60">per month</p>
              </div>

              <div className="rounded-lg border border-primary/40 bg-primary/10 p-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  24 Months
                </p>
                <p className="mt-2 text-3xl font-bold text-white">~$375</p>
                <p className="mt-1 text-sm text-white/60">per month</p>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  48+ Months
                </p>
                <p className="mt-2 text-3xl font-bold text-white">~$180</p>
                <p className="mt-1 text-sm text-white/60">per month</p>
              </div>
            </div>

            <p className="mt-8 text-center text-xs leading-relaxed text-white/40">
              *Estimated payments shown for illustrative purposes only. Actual
              monthly payments may vary based on credit approval, APR, and
              selected financing term. Contact our office for a personalized
              quote.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
