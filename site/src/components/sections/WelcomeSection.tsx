"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowH) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        setOffset((progress - 0.5) * 80);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto grid max-w-[1320px] items-center px-6 lg:grid-cols-2" style={{ gap: "200px" }}>
        {/* Left: Building image with parallax */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
          <div
            className="absolute inset-0"
            style={{ transform: `translateY(${offset}px)` }}
          >
            <Image
              src="/images/gallery-page/sps-building.jpg"
              alt="Specialized Plastic Surgery Center"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right: Text content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Welcome to Specialized Plastic Surgery
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight text-heading sm:text-4xl lg:text-[2.75rem]">
            Aesthetic and Reconstructive Procedures in New York and New Jersey
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body">
            Specialized Plastic Surgery is a premier destination in New York and
            New Jersey, renowned for providing exceptional Aesthetic and
            Reconstructive Procedures in New York and New Jersey. Our expert
            plastic surgeons specialize in aesthetic breast surgery,
            reconstructive breast surgery, body contouring procedures, and more.
            With a commitment to personalized care and exceptional results, we
            help patients enhance their natural beauty, restore balance, and feel
            confident in their appearance.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block rounded-md border-2 border-heading bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-heading transition-all hover:bg-heading hover:text-white"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
