import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlay?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  overlay = true,
  breadcrumbs,
}: HeroSectionProps) {
  const breadcrumbMarkup = breadcrumbs && breadcrumbs.length > 0 && (
    <nav className="mb-4 flex items-center justify-center gap-1.5 text-sm text-white/60">
      {breadcrumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3 w-3" />}
          {crumb.href ? (
            <Link href={crumb.href} className="transition-colors hover:text-white">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-white/80">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );

  /* ---------- Page hero with background image/video ---------- */
  if (backgroundImage || backgroundVideo) {
    return (
      <section className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-heading">
        {backgroundVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        )}
        {backgroundImage && !backgroundVideo && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        {overlay && <div className="absolute inset-0 bg-gradient-to-b from-heading/60 via-heading/40 to-heading/70" />}

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          {breadcrumbMarkup}

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

        {/* Bottom gold gradient bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>
    );
  }

  /* ---------- Dark hero (no background image) ---------- */
  return (
    <section className="relative flex h-[500px] items-center bg-heading">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {breadcrumbMarkup}

        <h1 className="font-heading text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {subtitle}
          </p>
        )}

        {ctaText && ctaLink && (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={ctaLink}
              className="inline-block rounded-md border-2 border-gold bg-gold px-7 py-2.5 text-base font-bold text-heading transition-all hover:bg-transparent hover:text-white hover:border-white hover:shadow-md"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="inline-block rounded-md border-2 border-white/60 bg-transparent px-7 py-2.5 text-base font-bold text-white transition-all hover:bg-white hover:text-heading hover:shadow-md"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Bottom gold gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
