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
      <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-heading">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {overlay && <div className="absolute inset-0 bg-black/50" />}

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              {subtitle}
            </p>
          )}

          {ctaText && ctaLink && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={ctaLink}
                className="inline-block border-2 border-primary bg-primary px-7 py-2.5 text-lg font-bold text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {ctaText}
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-block border-2 border-white bg-transparent px-7 py-2.5 text-lg font-bold text-white transition-colors hover:bg-white hover:text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-[1.1] text-heading sm:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
            {subtitle}
          </p>
        )}

        {ctaText && ctaLink && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ctaLink}
              className="inline-block border-2 border-primary bg-primary px-7 py-2.5 text-lg font-bold text-white transition-colors hover:bg-white hover:text-primary"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="inline-block border-2 border-primary bg-transparent px-7 py-2.5 text-lg font-bold text-primary transition-colors hover:bg-primary hover:text-white"
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
