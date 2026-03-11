import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  CheckCircle,
  Lightbulb,
  ClipboardList,
  Camera,
  FileText,
  Pill,
  Users,
  MessageCircle,
  CalendarCheck,
  Heart,
  Eye,
  Scale,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Preparing for Your First Appointment",
  description:
    "Tips and guidance for making the most of your first consultation at Specialized Plastic Surgery. Learn what to bring, what to expect, and how to prepare.",
};

const tips = [
  {
    icon: Lightbulb,
    title: "Know Your Goals",
    description:
      "Take time before your appointment to think about what you hope to achieve. Whether it is a specific look, improved confidence, or relief from a physical concern, having clear goals helps your surgeon create the best plan for you.",
  },
  {
    icon: Camera,
    title: "Bring Reference Photos",
    description:
      "If you have photos that illustrate the results you are looking for, bring them along. Visual references give your surgeon valuable insight into your aesthetic preferences and expectations.",
  },
  {
    icon: MessageCircle,
    title: "Prepare Your Questions",
    description:
      "Write down any questions you have about the procedure, recovery timeline, risks, expected results, or costs. No question is too small, and your surgeon wants you to feel fully informed.",
  },
  {
    icon: FileText,
    title: "Gather Your Medical History",
    description:
      "Be ready to share your complete medical history, including past surgeries, current medications, allergies, and any chronic conditions. This information helps your surgeon plan the safest approach.",
  },
  {
    icon: Pill,
    title: "List Your Current Medications",
    description:
      "Bring a list of all medications you currently take, including prescriptions, over-the-counter drugs, vitamins, and supplements. Some supplements and blood thinners may need to be paused before surgery.",
  },
  {
    icon: Users,
    title: "Bring a Trusted Companion",
    description:
      "Having a family member or close friend with you can be helpful. They can take notes, ask questions you might not think of, and provide support as you consider your options.",
  },
  {
    icon: Eye,
    title: "Be Open and Honest",
    description:
      "Share your full medical history and be transparent about your expectations. The more your surgeon understands about your health and goals, the better they can tailor your treatment plan.",
  },
  {
    icon: Scale,
    title: "Discuss Realistic Expectations",
    description:
      "Your surgeon will explain what is realistically achievable given your anatomy and health. Understanding the range of possible outcomes helps ensure you are satisfied with your results.",
  },
  {
    icon: Heart,
    title: "Ask About Recovery",
    description:
      "Understanding the recovery process is just as important as the procedure itself. Ask about downtime, activity restrictions, pain management, and what your healing timeline will look like.",
  },
  {
    icon: CalendarCheck,
    title: "Plan Your Schedule",
    description:
      "Consider your work, family, and personal commitments when thinking about timing. Your surgeon can help you choose the best time for your procedure based on your recovery needs.",
  },
  {
    icon: Briefcase,
    title: "Ask About Financing",
    description:
      "If cost is a concern, ask about financing options during your consultation. We offer CareCredit and Cherry Payments with flexible terms and 0% APR options to make your procedure more accessible.",
  },
  {
    icon: ClipboardList,
    title: "Take Notes During Your Visit",
    description:
      "There will be a lot of information covered during your consultation. Taking notes or asking for printed materials will help you review everything at home and make a confident decision.",
  },
];

const checklistItems = [
  "Photo ID (driver's license or passport)",
  "Insurance card (for reconstructive procedures)",
  "List of current medications and supplements",
  "Complete medical history and past surgical records",
  "Reference photos showing your desired results",
  "List of questions for your surgeon",
  "Referral letter from your physician (if applicable)",
  "A notebook or phone for taking notes",
  "Comfortable clothing for examination",
  "A supportive friend or family member (optional)",
];

export default function FirstAppointmentPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Preparing for Your First Appointment"
        subtitle="Your consultation is the first step toward achieving your goals. Here is how to make the most of your visit."
        backgroundImage="/images/hero/SPS-Image-130.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Patient Resources", href: "/patient-resources" },
          { label: "First Appointment" },
        ]}
      />

      {/* Tips for Making the Most of Your Consultation */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            eyebrow="Consultation Tips"
            title="Making the Most of Your Visit"
            description="A productive consultation starts with preparation. These tips will help you feel confident, informed, and ready to have an open conversation with your surgeon."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <tip.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-heading">
                    {tip.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
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
            eyebrow="Checklist"
            title="What to Bring to Your Consultation"
            centered
            light
          />

          <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-white/[0.06] bg-white/[0.03] p-8 sm:p-10">
            <ul className="grid gap-4 sm:grid-cols-2">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-base leading-relaxed text-white/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="relative mt-8 text-center text-sm leading-relaxed text-white/50">
            Do not worry if you cannot bring everything listed above. Our team
            will guide you through the process and help you gather any additional
            information needed.
          </p>
        </div>
      </section>

    </>
  );
}
