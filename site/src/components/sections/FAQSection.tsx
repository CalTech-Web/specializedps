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
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          {heading}
        </h2>

        <Accordion.Root type="single" collapsible className="mt-12 divide-y divide-peach">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`faq-${index}`}
              className="bg-white"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-medium text-heading transition-colors hover:text-primary">
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_300ms_ease-out] data-[state=open]:animate-[accordion-down_300ms_ease-out]">
                <div className="px-6 pb-5 text-base leading-relaxed text-body">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
