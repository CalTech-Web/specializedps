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
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-[#1f385f]">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
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
              className="inline-block rounded-full bg-[#32373c] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1f385f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="inline-block rounded-full border border-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#32373c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
