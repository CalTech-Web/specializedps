import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  overlay = true,
}: HeroSectionProps) {
  /* ---------- Page hero with background image ---------- */
  if (backgroundImage) {
    return (
      <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-heading">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {overlay && <div className="absolute inset-0 bg-gradient-to-b from-heading/60 via-heading/40 to-heading/70" />}

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {subtitle}
            </p>
          )}

          {ctaText && ctaLink && (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={ctaLink}
                className="inline-block rounded-md border-2 border-gold bg-gold px-7 py-2.5 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {ctaText}
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-block rounded-md border-2 border-white bg-transparent px-7 py-2.5 text-base font-bold text-white transition-all hover:bg-white hover:text-heading hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  /* ---------- Homepage hero (no background image) ---------- */
  return (
    <section className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-[1.1] text-heading sm:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            {subtitle}
          </p>
        )}

        {ctaText && ctaLink && (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={ctaLink}
              className="inline-block rounded-md border-2 border-primary bg-primary px-7 py-2.5 text-base font-bold text-white transition-all hover:bg-white hover:text-primary hover:shadow-md"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="inline-block rounded-md border-2 border-primary bg-transparent px-7 py-2.5 text-base font-bold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-md"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
