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
      />

      {/* Transparent Pricing */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Transparent, Upfront Pricing"
            subtitle="At Specialized Plastic Surgery, we believe you deserve clarity when it comes to the cost of your care. During your consultation, you will receive a detailed breakdown of all fees, including surgeon fees, anesthesia, facility costs, and any post-operative garments or supplies. There are no hidden charges or surprise bills."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-secondary bg-peach-light p-8 text-center">
              <DollarSign className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold text-heading">
                All-Inclusive Quotes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Your quote includes surgeon fees, anesthesia, facility costs,
                and post-operative supplies so you know the full cost upfront.
              </p>
            </div>
            <div className="rounded-xl border border-secondary bg-peach-light p-8 text-center">
              <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold text-heading">
                No Hidden Fees
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                We are committed to honest pricing with no surprise charges.
                What you are quoted is what you pay.
              </p>
            </div>
            <div className="rounded-xl border border-secondary bg-peach-light p-8 text-center">
              <Calculator className="mx-auto mb-4 h-8 w-8 text-primary" />
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
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <CreditCard className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-3xl font-bold text-heading">
                  CareCredit
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-body">
                CareCredit is a revolving health and wellness credit card
                accepted at over 266,000 locations nationwide. It gives you the
                flexibility to use your card again and again for procedures,
                follow-up treatments, and even everyday health expenses.
              </p>
              <p className="text-base leading-relaxed text-body">
                CareCredit offers promotional financing periods of 6 to 24
                months at 0% APR with deferred interest. Longer terms of up to
                60 months are available at a reduced APR for larger procedures.
                Please note that CareCredit requires a hard credit check as part
                of the application process.
              </p>
            </div>

            <div className="rounded-xl border border-secondary bg-white p-8">
              <h3 className="font-heading mb-6 text-xl font-bold text-heading">
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

      {/* Cherry Payments */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="order-2 rounded-xl border border-secondary bg-peach-light p-8 lg:order-1">
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
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-3xl font-bold text-heading">
                  Cherry Payments
                </h2>
              </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Payment Example */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="Payment Example"
            title="See What Your Monthly Payments Could Look Like"
            centered
          />

          <div className="mt-12 rounded-2xl border border-primary/20 bg-white p-10 text-center shadow-sm">
            <div className="mb-6 flex items-center justify-center gap-3">
              <Clock className="h-7 w-7 text-primary" />
              <h3 className="font-heading text-2xl font-bold text-heading">
                $9,000 Procedure
              </h3>
            </div>
            <p className="mb-8 text-base leading-relaxed text-body">
              Based on a $9,000 all-inclusive procedure cost, here is what your
              estimated monthly payments could look like depending on the
              financing term you choose.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-peach-light p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  12 Months
                </p>
                <p className="mt-2 text-3xl font-bold text-heading">~$750</p>
                <p className="mt-1 text-sm text-body">per month</p>
              </div>
              <div className="rounded-xl border-2 border-primary bg-primary/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  24 Months
                </p>
                <p className="mt-2 text-3xl font-bold text-heading">~$375</p>
                <p className="mt-1 text-sm text-body">per month</p>
              </div>
              <div className="rounded-xl bg-peach-light p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  48+ Months
                </p>
                <p className="mt-2 text-3xl font-bold text-heading">~$180</p>
                <p className="mt-1 text-sm text-body">per month</p>
              </div>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-body/60">
              *Estimated payments shown for illustrative purposes only. Actual
              monthly payments may vary based on credit approval, APR, and
              selected financing term. Contact our office for a personalized
              quote.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Questions About Financing?"
        subtext="Our team is here to help you explore payment options and find the plan that works best for you."
      />
    </>
  );
}
