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
    <section className="bg-heading py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
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
