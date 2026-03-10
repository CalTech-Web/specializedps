import Link from "next/link";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function CTABanner({
  heading = "Discover the Difference of Personalized Aesthetic Solutions",
  subtext = "Schedule your personalized consultation with one of our board-certified plastic surgeons today.",
  ctaText = "Schedule Consultation",
  ctaLink = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative bg-heading py-14 sm:py-16">
      {/* Gold gradient top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Marble texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
          {subtext}
        </p>
        <div className="mt-8">
          <Link
            href={ctaLink}
            className="inline-block rounded-md border-2 border-gold bg-gold px-7 py-2.5 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
