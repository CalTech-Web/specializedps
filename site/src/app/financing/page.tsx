import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AppointmentButton from "@/components/ui/AppointmentButton";
import {
  CheckCircle,
  Check,
  CreditCard,
  ShieldCheck,
  Phone,
  CircleDollarSign,
  FileText,
  Wallet,
  ListChecks,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Financing & Payment Options",
  description:
    "Flexible financing options for plastic surgery at Specialized Plastic Surgery. CareCredit and Cherry Payments available with 0% APR options and convenient monthly plans.",
};

export default function FinancingPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[55vh] w-full items-center justify-center overflow-hidden bg-heading">
        <Image
          src="/images/financing/hero-bg.jpg"
          alt="Financing and payment options"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-heading/60 via-heading/40 to-heading/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <nav className="mb-4 flex items-center justify-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/80">Financing</span>
          </nav>

          <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Your Dream Is Accessible: Financing and Payment Options
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            We understand that investing in expert surgical care is a major
            decision. Our practice is dedicated to transparent pricing and a
            supportive experience, ensuring that financial limitations do not
            stand in the way of accessing the highest quality care.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            We firmly believe that everyone deserves access to top-tier plastic
            surgery, and we are proud to offer flexible financing solutions
            through two trusted partners: CareCredit and Cherry Payments.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* ─── Cherry Payments Section ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Image */}
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://specializedplasticsurgery.com/wp-content/uploads/2024/12/home-1-7-1.webp"
                alt="Cherry Payments financing"
                width={600}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Right: Cherry Content */}
            <div>
              {/* Cherry Logo/Badge */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a2e]">
                  <CircleDollarSign className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-heading">Cherry</span>
              </div>

              <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
                Treat now, pay later
              </h2>

              <ul className="mt-6 space-y-3">
                {[
                  { text: "No hard credit checks", highlight: ", ever" },
                  {
                    text: "True 0% APR",
                    highlight: " options available",
                  },
                  {
                    text: "Create payment plans with APR as low as 0.49%",
                    highlight: "",
                  },
                  { text: "Up to ", highlight: "60 month terms" },
                  { text: "No hidden fees", highlight: "" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base text-body">
                      <span className="font-semibold text-heading">
                        {item.text}
                      </span>
                      {item.highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://patient.withcherry.com/prequalify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-primary px-7 py-3 text-sm font-bold uppercase tracking-wider text-heading transition-all hover:bg-primary/90"
                >
                  See If You Qualify
                </a>
                <a
                  href="https://patient.withcherry.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-primary px-7 py-3 text-sm font-bold uppercase tracking-wider text-heading transition-all hover:bg-primary/90"
                >
                  Manage Your Account
                </a>
              </div>

              {/* Payment Example */}
              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-heading">
                  See an Example of What You Could Pay
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-sm text-body">
                    Example payments for
                  </span>
                  <span className="rounded border border-gray-300 px-4 py-1.5 text-base font-bold text-heading">
                    $5,000
                  </span>
                </div>

                <a
                  href="https://patient.withcherry.com/prequalify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-primary bg-primary px-7 py-3 text-sm font-bold uppercase tracking-wider text-heading transition-all hover:bg-primary/90 sm:w-auto"
                >
                  Get Personalized Options
                </a>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-body">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>No hard credit checks, ever</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>60 seconds to apply</span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-body/60">
                  *All rates are personalized and are subject to eligibility. For
                  loan terms, click here for details.
                </p>
              </div>

              {/* How Cherry Works */}
              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-heading">
                  How Cherry Works
                </h3>
                <ol className="mt-5 space-y-4">
                  {[
                    {
                      icon: FileText,
                      text: "See if you qualify",
                      desc: "Only takes 30 seconds to complete the application",
                    },
                    {
                      icon: ListChecks,
                      text: "Pick a plan",
                      desc: "Pick your approved plan to pay for your treatment",
                    },
                    {
                      icon: Wallet,
                      text: "Pay over time",
                      desc: "Choose a plan length that fits your needs with 0% APR options",
                    },
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-heading">
                          {step.text}
                        </p>
                        <p className="text-sm text-body">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Questions */}
              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-heading">
                  Questions?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  What is Cherry? Cherry is a buy now, pay later company, making
                  it fast and easy to pay for health and wellness procedures and
                  treatments.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://withcherry.com/faqs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-primary px-7 py-3 text-sm font-bold uppercase tracking-wider text-heading transition-all hover:bg-primary/90"
                  >
                    View All FAQs
                  </a>
                  <a
                    href="https://withcherry.com/help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-heading bg-transparent px-7 py-3 text-sm font-bold uppercase tracking-wider text-heading transition-all hover:bg-heading hover:text-white"
                  >
                    Visit Help Center
                  </a>
                </div>
              </div>

              {/* Fine Print */}
              <p className="mt-8 text-xs leading-relaxed text-body/50">
                *Fixed payments may vary 0% APR offer availability may vary by
                merchant. Any promotional rate based on qualifying transactions.
                Fixed rate and APR feature of the Cherry program will include a
                fixed monthly payment, for loans with 0% APR the approved new
                balance must be paid in full by the end of the promotional term.
                If not, interest on the remaining balance will be applied as
                initially determined and may be up to a max APR of 35.99%.
                Results may vary. All credit decisions are subject to credit
                approval. By Cherry Technologies, Inc. NMLS#2154504, Licensed by
                the CA Dept. of Financial Protection & Innovation under the CFLL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CareCredit Section ─── */}
      <section className="bg-warm-grey py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: CareCredit Image */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src="https://specializedplasticsurgery.com/wp-content/uploads/2025/10/cosmetic-flexible-financing-600x800-1.webp"
                alt="CareCredit flexible financing"
                width={600}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Right: CareCredit Content */}
            <div>
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Credit Options
              </span>

              <h2 className="mt-4 font-heading text-3xl font-bold text-heading sm:text-4xl">
                Pay Over Time with the CareCredit Credit Card
              </h2>

              <p className="mt-5 text-base leading-relaxed text-body">
                Dr. Chris Devulapalli, Specialized Plastic Surgery Westchester
                proudly accepts the{" "}
                <strong className="text-heading">CareCredit credit card</strong>{" "}
                for all your health, wellness, and beauty needs.
              </p>

              <p className="mt-4 text-base leading-relaxed text-body">
                Help fit the care you want and need into your budget with the
                CareCredit health and wellness credit card. It offers flexible
                financing options that allow you to pay over time.*
              </p>

              <ul className="mt-5 space-y-2">
                {[
                  "Promotional financing options available",
                  "See if you prequalify with no impact to your credit score",
                  "Instant credit decisions",
                  "No annual fee*",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-body">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-base leading-relaxed text-body">
                CareCredit helps make care possible for you and your family. It
                is accepted at 266,000+ locations, so you can pay for
                chiropractic, dentistry, dermatology, cosmetic, hearing,
                prescriptions, pet care, and more. It is a convenient way to fit
                expected and unexpected expenses into your budget.
              </p>

              <p className="mt-4 text-sm text-body/70">
                Learn more by visiting carecredit.com or contacting our office.
              </p>

              {/* Fine Print */}
              <div className="mt-6 border-t border-gray-200 pt-5">
                <p className="text-xs leading-relaxed text-body/50">
                  *Subject to credit approval. Visit carecredit.com for details.
                  For new accounts as of 5/30/24: Purchase APR is 32.99%. Penalty
                  APR is 39.99%. Minimum Interest Charge is $2.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-body/50">
                  CareCredit is a Synchrony solution. When you go to the
                  CareCredit website, you will be subject to the Synchrony
                  privacy policy, which differs from the Dr. Chris Devulapalli,
                  Specialized Plastic Surgery Westchester privacy policy. You can
                  learn more about the Synchrony privacy policy at carecredit.com.
                </p>
              </div>

              {/* Financing Available Button */}
              <div className="mt-6">
                <a
                  href="https://www.carecredit.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-primary px-7 py-3 text-sm font-bold text-heading transition-all hover:bg-primary/90"
                >
                  <CreditCard className="h-4 w-4" />
                  Financing Available
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Comparison Table: CareCredit vs Cherry ─── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Compare Your Options
            </span>

            <h2 className="mt-4 font-heading text-3xl font-bold text-heading sm:text-4xl">
              Financing Options: CareCredit vs. Cherry Payments
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-body">
              We offer two distinct financing models to give you maximum
              flexibility based on your credit profile, desired payment terms, and
              procedure cost.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* CareCredit Card */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="rounded-t-xl bg-heading px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">CareCredit</h3>
                    <p className="text-xs text-white/60">Revolving Health &amp; Wellness Credit Card</p>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-100 px-6">
                {[
                  { label: "Credit Check", value: "Hard credit check required", highlight: false },
                  { label: "Payment Structure", value: "Minimum monthly payments, revolving balance", highlight: false },
                  { label: "0% APR Option", value: "Deferred interest (6\u201324 months). If balance is not paid in full by end of term, interest is charged retroactively.", highlight: true },
                  { label: "Terms Available", value: "Promotional 6\u201324 months or reduced APR up to 60 months", highlight: false },
                  { label: "Reusable", value: "Yes, at 266,000+ healthcare locations nationwide", highlight: false },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1 py-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.label}</span>
                    <span className={`text-sm leading-relaxed ${item.highlight ? "font-medium text-heading" : "text-body"}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6 pt-4">
                <a
                  href="https://www.carecredit.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-heading bg-heading px-6 py-3 text-sm font-bold text-white transition-all hover:bg-transparent hover:text-heading"
                >
                  <CreditCard className="h-4 w-4" />
                  Apply for CareCredit
                </a>
              </div>
            </div>

            {/* Cherry Card */}
            <div className="rounded-xl border-2 border-primary/30 bg-white shadow-sm">
              <div className="rounded-t-[10px] bg-heading px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <CircleDollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">Cherry Payments</h3>
                    <p className="text-xs text-white/60">Fixed Installment Loans (Buy Now, Pay Later)</p>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-100 px-6">
                {[
                  { label: "Credit Check", value: "Soft credit check only, no impact to your score", highlight: false },
                  { label: "Payment Structure", value: "Fixed monthly installments with transparent, set terms", highlight: false },
                  { label: "0% APR Option", value: "True 0% APR for qualified borrowers. Interest is never applied retroactively.", highlight: true },
                  { label: "Terms Available", value: "Flexible terms from 3 to 60 months", highlight: false },
                  { label: "Reusable", value: "Specific to the approved treatment and provider", highlight: false },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1 py-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.label}</span>
                    <span className={`text-sm leading-relaxed ${item.highlight ? "font-medium text-heading" : "text-body"}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6 pt-4">
                <a
                  href="https://patient.withcherry.com/prequalify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-primary bg-primary px-6 py-3 text-sm font-bold text-heading transition-all hover:bg-transparent hover:text-primary"
                >
                  <CircleDollarSign className="h-4 w-4" />
                  See If You Qualify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Example Monthly Payment Breakdown ─── */}
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
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Payment Examples
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Example Monthly Payment Breakdown
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/70">
            To give you an idea of affordability, here is an example of what a{" "}
            <strong className="text-white">$9,000 procedure</strong> might cost
            under common financing scenarios.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="border border-white/10 bg-primary px-5 py-4 text-left text-sm font-bold text-heading">
                    Scenario
                  </th>
                  <th className="border border-white/10 bg-primary px-5 py-4 text-left text-sm font-bold text-heading">
                    Service
                  </th>
                  <th className="border border-white/10 bg-primary px-5 py-4 text-left text-sm font-bold text-heading">
                    Estimated Monthly Payment
                  </th>
                  <th className="border border-white/10 bg-primary px-5 py-4 text-left text-sm font-bold text-heading">
                    Total Term
                  </th>
                  <th className="border border-white/10 bg-primary px-5 py-4 text-left text-sm font-bold text-heading">
                    Interest Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    scenario: "Short-Term, No Interest",
                    service: "CareCredit",
                    payment: "$375.00",
                    term: "24 Months",
                    note: "Requires balance paid in full by month 24 to avoid deferred interest",
                  },
                  {
                    scenario: "Short-Term, True 0%",
                    service: "Cherry Payments",
                    payment: "$750.00",
                    term: "12 Months",
                    note: 'The qualified rate is genuinely 0% APR',
                  },
                  {
                    scenario: "Longer-Term, Reduced APR",
                    service: "CareCredit",
                    payment: "~$180.00",
                    term: "60 Months",
                    note: "Requires a purchase of monthly payment at reduced APR (e.g., 32.99%)",
                  },
                  {
                    scenario: "Longer-Term, Fixed",
                    service: "Cherry Payments",
                    payment: "~$195.00-$350.00",
                    term: "36 Months",
                    note: "Estimated rates are APR 0%-29.99% determined by credit",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={
                      i % 2 === 0 ? "bg-white/[0.03]" : "bg-white/[0.06]"
                    }
                  >
                    <td className="border border-white/10 px-5 py-4 text-sm font-semibold text-white">
                      {row.scenario}
                    </td>
                    <td className="border border-white/10 px-5 py-4 text-sm text-white/80">
                      {row.service}
                    </td>
                    <td className="border border-white/10 px-5 py-4 text-sm font-bold text-primary">
                      {row.payment}
                    </td>
                    <td className="border border-white/10 px-5 py-4 text-sm text-white/80">
                      {row.term}
                    </td>
                    <td className="border border-white/10 px-5 py-4 text-sm leading-relaxed text-white/60">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-white/40">
            *Estimated payments shown for illustrative purposes only. Actual
            monthly payments may vary based on credit approval, APR, and selected
            financing term. Contact our office for a personalized quote.
          </p>

          {/* Call Finance Team CTA */}
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <AppointmentButton className="inline-flex items-center gap-2.5 rounded-md border-2 border-gold bg-gold px-8 py-3.5 text-sm font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white">
              Schedule a Consultation
            </AppointmentButton>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span>Or call our finance team:</span>
              <a
                href="tel:9148740900"
                className="flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                (914) 874-0900
              </a>
              <a
                href="tel:9735610900"
                className="flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                (973) 561-0900
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
