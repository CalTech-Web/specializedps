import Image from "next/image";
import { Award, UserCheck, Shield, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Board-Certified Plastic Surgeons",
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
    <section className="relative bg-heading py-20 sm:py-28">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="text-center">
          <p className="inline-block rounded-sm bg-primary/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            The Specialized Difference
          </p>
          <h2 className="mt-6 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Why Choose Specialized Plastic Surgery?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Choosing Specialized Plastic Surgery means choosing a practice
            dedicated to supporting you at every step, with highly trained
            professionals and a track record of exceptional patient outcomes.
          </p>
        </div>

        {/* Features 2x2 grid with center logo */}
        <div className="relative mt-16 lg:mt-20">
          {/* Center logo — absolutely positioned */}
          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full border border-white/[0.08] bg-heading px-10 py-6 shadow-[0_0_100px_rgba(201,169,110,0.1)]">
              <Image
                src="/images/logos/white-logo.webp"
                alt="Specialized Plastic Surgery"
                width={180}
                height={45}
                className="h-auto w-44 opacity-80"
              />
            </div>
          </div>

          {/* 2x2 grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-x-48 lg:gap-y-14">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-lg border border-white/[0.06] bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[13px] font-bold uppercase tracking-wide text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="mx-auto mt-16 h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
}
