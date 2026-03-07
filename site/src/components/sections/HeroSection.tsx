"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  overlay = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-[#1a2332]"
    >
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
        <div className="absolute inset-0 bg-[#1a2332]/75" />
      )}

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-r from-[#c9a96e] to-[#e2c891] bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href={ctaLink}
              className="inline-block rounded-md bg-[#c9a96e] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#1a2332] transition-colors hover:bg-[#b8954f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a96e]"
            >
              {ctaText}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
