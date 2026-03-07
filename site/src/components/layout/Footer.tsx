import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { siteConfig } from "@/data/site";

const serviceLinks = [
  { label: "Breast Reconstruction", href: "/services/breast-reconstruction" },
  { label: "Aesthetic Breast", href: "/services/aesthetic-breast" },
  { label: "Face", href: "/services/face" },
  { label: "Body", href: "/services/body" },
  { label: "Breast Augmentation", href: "/services/aesthetic-breast/augmentation" },
  { label: "Tummy Tuck", href: "/services/body/tummy-tuck" },
  { label: "Liposuction", href: "/services/body/liposuction" },
  { label: "Facelift", href: "/services/face/facelift" },
  { label: "Mommy Makeover", href: "/services/body/mommy-makeover" },
  { label: "DIEP Flap", href: "/services/breast-reconstruction/natural-tissue-flap" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Financing", href: "/financing" },
  { label: "Insurance", href: "/insurance" },
];

const infoLinks = [
  { label: "ERAS Protocol", href: "/eras" },
  { label: "First Appointment", href: "/first-appointment" },
  { label: "Traveling Patients", href: "/traveling-patients" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  const { nj, ny } = siteConfig.locations;

  return (
    <footer className="bg-[#1a2332] text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Locations Section */}
          <div>
            <Link href="/">
              <Image
                src="/images/logos/white-logo.webp"
                alt="Specialized Plastic Surgery"
                width={220}
                height={55}
                className="mb-6 h-12 w-auto"
              />
            </Link>
            <h3 className="mb-8 text-xl font-bold text-white">Our Locations</h3>
            <div className="grid gap-8 sm:grid-cols-2">
              {/* NJ Location */}
              <div>
                <h4 className="mb-4 font-semibold text-[#c9a96e]">{nj.name}</h4>
                <p className="mb-1 text-sm font-medium text-white">{nj.surgeon}</p>
                <ul className="mt-3 space-y-2.5">
                  <li>
                    <Link
                      href={nj.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-sm transition-colors hover:text-white"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                      {nj.address}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`tel:${nj.phoneRaw}`}
                      className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    >
                      <Phone className="h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                      {nj.phone}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`mailto:${nj.email}`}
                      className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    >
                      <Mail className="h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                      {nj.email}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                    {nj.hours}
                  </li>
                  <li>
                    <Link
                      href={nj.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    >
                      <Instagram className="h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                      {nj.instagram}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* NY Location */}
              <div>
                <h4 className="mb-4 font-semibold text-[#c9a96e]">{ny.name}</h4>
                <p className="mb-1 text-sm font-medium text-white">{ny.surgeon}</p>
                <ul className="mt-3 space-y-2.5">
                  <li>
                    <Link
                      href={ny.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-sm transition-colors hover:text-white"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                      {ny.address}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`tel:${ny.phoneRaw}`}
                      className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    >
                      <Phone className="h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                      {ny.phone}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`mailto:${ny.email}`}
                      className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    >
                      <Mail className="h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                      {ny.email}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                    {ny.hours}
                  </li>
                  <li>
                    <Link
                      href={ny.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                    >
                      <Instagram className="h-4 w-4 flex-shrink-0 text-[#c9a96e]" />
                      {ny.instagram}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Services
              </h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Info
              </h4>
              <ul className="space-y-2">
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-gray-400 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>&copy; {siteConfig.copyright}</p>
          <p>
            Powered by{" "}
            <Link
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a96e] transition-colors hover:text-white"
            >
              CalTech Web
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
