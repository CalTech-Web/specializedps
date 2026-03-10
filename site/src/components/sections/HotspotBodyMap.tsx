"use client";

import Link from "next/link";
import Image from "next/image";
import { bodyHotspots } from "@/data/hotspots";

export default function HotspotBodyMap() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: Body image with hotspots */}
        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <Image
            src="/images/misc/hotspot-body.jpg"
            alt="Procedure areas"
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Hotspot dots */}
          {bodyHotspots.map((spot) => (
            <Link
              key={spot.id}
              href={spot.href}
              className="group absolute z-10"
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              title={spot.label}
            >
              {/* Pulse ring */}
              <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 animate-hotspot-pulse" />
              {/* Dot */}
              <span className="relative block h-4 w-4 rounded-full border-2 border-white bg-primary shadow-lg transition-transform group-hover:scale-125" />
              {/* Label tooltip */}
              <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-heading px-2 py-1 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                {spot.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Right: Text content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Specialties
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Procedures Tailored to You
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body">
            From facial rejuvenation to body contouring, our board-certified
            plastic surgeons offer a comprehensive range of procedures designed
            to help you look and feel your best. Click on any area to explore
            the procedures available for that part of the body.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {bodyHotspots.map((spot) => (
              <Link
                key={spot.id}
                href={spot.href}
                className="rounded-md border border-primary/30 px-4 py-2 text-sm font-medium text-heading transition-all hover:border-primary hover:bg-primary hover:text-white"
              >
                {spot.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
