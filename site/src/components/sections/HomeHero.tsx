"use client";

import Link from "next/link";
import { Calendar, Search } from "lucide-react";
import { useAppointmentModal } from "@/components/sections/AppointmentModal";

/* ------------------------------------------------------------------ */
/*  Scrolling services data                                            */
/* ------------------------------------------------------------------ */
const heroServices = [
  { label: "Breast Augmentation", href: "/services/aesthetic-breast/augmentation" },
  { label: "Breast Reduction", href: "/services/aesthetic-breast/reduction" },
  { label: "Breast Lift", href: "/services/aesthetic-breast/lift" },
  { label: "Facelift", href: "/services/face/facelift" },
  { label: "Rhinoplasty", href: "/services/face/rhinoplasty" },
  { label: "Blepharoplasty", href: "/services/face/blepharoplasty" },
  { label: "Tummy Tuck", href: "/services/body/tummy-tuck" },
  { label: "Liposuction", href: "/services/body/liposuction" },
  { label: "Mommy Makeover", href: "/services/body/mommy-makeover" },
  { label: "BBL", href: "/services/body/bbl" },
  { label: "Lipo 360", href: "/services/body/lipo-360" },
  { label: "Neck Lift", href: "/services/face/neck-lift" },
  { label: "Body Lift", href: "/services/body/body-lift" },
  { label: "Arm Lift", href: "/services/body/arm-lift" },
  { label: "Otoplasty", href: "/services/face/otoplasty" },
  { label: "Gynecomastia", href: "/services/aesthetic-breast/gynecomastia" },
];

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */
export default function HomeHero() {
  const { open: openAppointment } = useAppointmentModal();

  return (
      <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-heading">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/hero/SPS-Image-115.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://specializedplasticsurgery.com/wp-content/uploads/2025/09/new-header-sps-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-heading/40" />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 text-center sm:py-32">
          <h1 className="font-heading text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-5xl">
            Your Destination for Plastic Surgery in New York and New Jersey
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-sm leading-relaxed text-white/90 sm:text-base">
            At Specialized Plastic Surgery, we offer world-class expertise,
            advanced surgical training, and cutting-edge techniques, delivering
            results with unmatched precision, artistry, and compassionate care.
          </p>

          {/* Two CTA buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => openAppointment()}
              className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 text-xs text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-heading hover:shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              <span className="font-bold tracking-wide">
                Request an Appointment
              </span>
            </button>
            <Link
              href="/services/face"
              className="flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 text-xs text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-heading hover:shadow-lg"
            >
              <Search className="h-4 w-4" />
              <span className="font-bold tracking-wide">
                Find Your Procedure
              </span>
            </Link>
          </div>

          {/* Scrolling services strip */}
          <div className="relative mt-14 w-full overflow-hidden">
            <div className="flex w-max items-center gap-3 animate-marquee hover:[animation-play-state:paused]">
              {heroServices.map((svc) => (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="flex-shrink-0 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/25"
                >
                  {svc.label}
                </Link>
              ))}
              {heroServices.map((svc) => (
                <Link
                  key={`dup-${svc.label}`}
                  href={svc.href}
                  className="flex-shrink-0 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/25"
                >
                  {svc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
