import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const { nj, ny } = siteConfig.locations;

  return (
    <footer>
      {/* ============ Video CTA Section ============ */}
      <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://specializedplasticsurgery.com/wp-content/uploads/2024/12/SPS-Video-110.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-heading/50" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
            Discover the Difference of Personalized Aesthetic Solutions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/85">
            At Specialized Plastic Surgery, we&apos;re dedicated to helping you
            achieve your aesthetic goals with unparalleled precision and care.
            Explore our services and experience a transformative journey tailored
            to your unique needs.{" "}
            <strong>Schedule a Free Consultation</strong> today and take the
            first step towards a confident, revitalized you. Your transformation
            starts here.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md border-2 border-white bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-heading"
          >
            Request an Appointment
          </Link>
        </div>
      </div>

      {/* ============ Instagram Photo Strip ============ */}
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={`/images/instagram/ig-${i}.webp`}
              alt={`Patient result ${i}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 33vw, 16vw"
            />
          </div>
        ))}
      </div>

      {/* ============ Footer Bottom: Maps & Locations ============ */}
      <div className="relative overflow-hidden bg-white py-12">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6">
          {/* Maps Row */}
          <div className="mb-10 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2!2d-74.3096!3d40.7261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad3f97b0c68f%3A0x0!2s264+Millburn+Ave%2C+Millburn%2C+NJ+07041!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NJ Office Location"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.8!2d-73.7244!3d40.9686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2940cbb55f8f5%3A0x0!2s500+Mamaroneck+Ave+Suite+211%2C+Harrison%2C+NY+10528!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NY Office Location"
              />
            </div>
          </div>

          {/* Locations Row: NJ | Logo | NY */}
          <div className="grid items-start gap-8 sm:grid-cols-[1fr_auto_1fr]">
            {/* NJ Location */}
            <div className="text-center">
              <h4 className="font-heading text-base font-bold text-heading">
                New Jersey Location
              </h4>
              <p className="mt-2 text-sm font-semibold text-heading">
                {nj.surgeon}
              </p>
              <p className="mt-1 text-sm text-body">Mon - Fri 9am - 5pm</p>
              <p className="mt-1 text-sm text-body">{nj.address}</p>
              <div className="mt-2 space-y-1">
                <Link
                  href={`mailto:${nj.email}`}
                  className="flex items-center justify-center gap-1.5 text-sm text-body transition-colors hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {nj.email}
                </Link>
                <Link
                  href={`tel:${nj.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 text-sm text-body transition-colors hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {nj.phone}
                </Link>
              </div>
              <Link
                href={nj.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-body transition-colors hover:text-primary"
              >
                {nj.instagram}
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex items-center justify-center self-center">
              <Image
                src="/images/logos/black-logo.webp"
                alt="Specialized Plastic Surgery"
                width={220}
                height={55}
                className="h-12 w-auto"
              />
            </div>

            {/* NY Location */}
            <div className="text-center">
              <h4 className="font-heading text-base font-bold text-heading">
                New York Location
              </h4>
              <p className="mt-2 text-sm font-semibold text-heading">
                {ny.surgeon}
              </p>
              <p className="mt-1 text-sm text-body">Mon - Fri 9am - 5pm</p>
              <p className="mt-1 text-sm text-body">{ny.address}</p>
              <div className="mt-2 space-y-1">
                <Link
                  href={`mailto:${ny.email}`}
                  className="flex items-center justify-center gap-1.5 text-sm text-body transition-colors hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {ny.email}
                </Link>
                <Link
                  href={`tel:${ny.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 text-sm text-body transition-colors hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {ny.phone}
                </Link>
              </div>
              <Link
                href={ny.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-body transition-colors hover:text-primary"
              >
                {ny.instagram}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Copyright ============ */}
      <div className="bg-heading py-4">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6">
          <p className="text-sm text-white/70">
            &copy; 2026 Specialized Plastic Surgery | All Rights Reserved.
          </p>
          <p className="text-sm text-white/70">
            Built by{" "}
            <Link
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/90 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white/60"
            >
              CalTech Web
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
