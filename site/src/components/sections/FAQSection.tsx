"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

export default function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
}: FAQSectionProps) {
  return (
    <section className="bg-warm-grey py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-4 inline-block rounded-sm bg-primary/20 px-5 py-2 text-xs font-bold tracking-[0.2em] text-primary">
            FAQ
          </p>
          <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
            {heading}
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="mt-10 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`faq-${index}`}
              className="bg-transparent"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-medium text-heading transition-colors hover:text-primary">
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_300ms_ease-out] data-[state=open]:animate-[accordion-down_300ms_ease-out]">
                <div className="pb-5 text-base leading-relaxed text-body">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
