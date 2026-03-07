import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const { nj, ny } = siteConfig.locations;

  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#1f385f]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {/* Left Column - NJ Office */}
            <div className="space-y-4 text-center md:text-left">
              <Link
                href="/doctors/michael-sosin"
                className="text-lg font-semibold text-white transition-colors hover:text-gray-300"
              >
                {nj.surgeon}
              </Link>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={nj.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    {nj.address}
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-2 text-sm text-gray-300 md:justify-start">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  Mon - Fri: 9am - 5PM
                </li>
                <li>
                  <Link
                    href={`tel:${nj.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {nj.phone}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${nj.email}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    {nj.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={nj.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    <Instagram className="h-4 w-4 flex-shrink-0" />
                    {nj.instagram}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Center Column - Logo */}
            <div className="flex items-center justify-center">
              <Link href="/">
                <Image
                  src="/images/logos/white-logo.webp"
                  alt="Specialized Plastic Surgery"
                  width={280}
                  height={70}
                  className="h-auto w-56 md:w-64"
                />
              </Link>
            </div>

            {/* Right Column - NY Office */}
            <div className="space-y-4 text-center md:text-right">
              <Link
                href="/doctors/chris-devulapalli"
                className="text-lg font-semibold text-white transition-colors hover:text-gray-300"
              >
                {ny.surgeon}
              </Link>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={ny.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-sm text-gray-300 transition-colors hover:text-white md:ml-auto md:flex-row-reverse"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    {ny.address}
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-2 text-sm text-gray-300 md:flex-row-reverse md:justify-start">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  Mon - Fri: 9am - 5PM
                </li>
                <li>
                  <Link
                    href={`tel:${ny.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white md:ml-auto md:flex-row-reverse"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {ny.phone}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${ny.email}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white md:ml-auto md:flex-row-reverse"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    {ny.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={ny.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white md:ml-auto md:flex-row-reverse"
                  >
                    <Instagram className="h-4 w-4 flex-shrink-0" />
                    {ny.instagram}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#32373c]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4 py-4 text-center text-sm text-gray-400 sm:flex-row sm:gap-2 sm:px-6 lg:px-8">
          <p>&copy; 2026 Specialized Plastic Surgery</p>
          <span className="hidden sm:inline">&middot;</span>
          <p>
            Powered by{" "}
            <Link
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-colors hover:text-white"
            >
              CalTech Web
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
