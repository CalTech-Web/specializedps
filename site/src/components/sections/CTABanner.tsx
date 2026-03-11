import AppointmentButton from "@/components/ui/AppointmentButton";
import { Calendar, Sparkles, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  ctaText?: string;
  backgroundImage?: string;
}

export default function CTABanner({
  heading = "Discover the Difference of Personalized Aesthetic Solutions",
  subtext = "Schedule your personalized consultation with one of our board-certified plastic surgeons today.",
  ctaText = "Schedule Consultation",
  backgroundImage = "https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Image-115.jpg",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with Next Image for optimization */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-heading/90 via-heading/80 to-heading/70" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      {/* Gold gradient top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            {/* Left: Text content */}
            <div className="max-w-2xl">
              {/* Decorative ornament */}
              <div className="mb-6 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-gold" />
                <div className="h-[1px] w-16 bg-gradient-to-r from-gold to-transparent" />
              </div>

              <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                {heading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                {subtext}
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-white/60">Board-Certified Surgeons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-white/60">Castle Connolly Top Doctors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-white/60">Two Locations</span>
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Get Started Today
              </p>
              <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-white/60">
                Your journey to confidence begins with a consultation.
              </p>
              <AppointmentButton className="mt-6 inline-flex items-center gap-2.5 rounded-md border-2 border-gold bg-gold px-9 py-4 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <Calendar className="h-5 w-5" />
                {ctaText}
              </AppointmentButton>
              <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-white/40">
                <span>Or call us directly</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold gradient bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
