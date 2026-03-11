import AppointmentButton from "@/components/ui/AppointmentButton";
import { Calendar, Sparkles, Star } from "lucide-react";

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
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-heading/85" />

      {/* Gold gradient top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Decorative floating elements */}
      <Sparkles className="absolute top-12 left-[10%] hidden h-5 w-5 text-gold/20 sm:block" />
      <Star className="absolute top-20 right-[12%] hidden h-4 w-4 text-gold/15 sm:block" />
      <Sparkles className="absolute bottom-16 right-[8%] hidden h-6 w-6 text-gold/20 sm:block" />
      <Star className="absolute bottom-12 left-[15%] hidden h-3 w-3 text-gold/15 sm:block" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 text-center">
        {/* Decorative ornament */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
          <Sparkles className="h-5 w-5 text-gold" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl lg:leading-tight">
          {heading}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          {subtext}
        </p>
        <div className="mt-10">
          <AppointmentButton className="inline-flex items-center gap-2.5 rounded-md border-2 border-gold bg-gold px-9 py-4 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <Calendar className="h-5 w-5" />
            {ctaText}
          </AppointmentButton>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-sm tracking-wide text-white/40">
          Board-Certified Plastic Surgeons &bull; Castle Connolly Top Doctors
          &bull; Two Convenient Locations
        </p>
      </div>

      {/* Gold gradient bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
