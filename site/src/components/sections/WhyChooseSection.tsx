import Image from "next/image";
import { Award, UserCheck, Shield, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced, Board-Certified Plastic Surgeons",
    description:
      "With years of experience in both cosmetic and reconstructive surgery, our team brings unparalleled skill and knowledge to each procedure.",
  },
  {
    icon: UserCheck,
    title: "Personalized Consultations",
    description:
      "We understand that each patient is unique, and we take the time to listen, understand, and create a plan that aligns with your individual goals.",
  },
  {
    icon: Shield,
    title: "Comprehensive Care Options",
    description:
      "Our wide range of surgical and non-surgical treatments allow us to tailor solutions specifically to your needs, whether you are interested in reconstructive care or aesthetic enhancement.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Safety",
    description:
      "Your safety and satisfaction are our top priorities. We adhere to the highest standards of safety and patient care, ensuring that you are in capable, compassionate hands throughout your journey with us.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-heading py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <p className="inline-block rounded-sm bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          The Specialized Plastic Surgery Difference
        </p>
        <h2 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
          Why Choose Specialized Plastic Surgery?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/70">
          Choosing Specialized Plastic Surgery means choosing a practice
          dedicated to supporting you at every step, with highly trained
          professionals and a track record of exceptional patient outcomes.
          Here&apos;s what sets us apart:
        </p>

        <div className="relative mt-14">
          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <Image
              src="/images/logos/white-logo.webp"
              alt="Specialized Plastic Surgery"
              width={200}
              height={50}
              className="h-auto w-48 opacity-90"
            />
          </div>

          {/* 2x2 grid */}
          <div className="grid gap-10 sm:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center">
                    <Icon className="h-10 w-10 text-primary/80" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
