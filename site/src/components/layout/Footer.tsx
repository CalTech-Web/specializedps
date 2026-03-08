import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const serviceLinks = [
  { label: "Face Procedures", href: "/services/face" },
  { label: "Aesthetic Breast", href: "/services/aesthetic-breast" },
  { label: "Breast Reconstruction", href: "/services/breast-reconstruction" },
  { label: "Body Contouring", href: "/services/body" },
];

const quickLinks = [
  { label: "About Us", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Financing", href: "/financing" },
  { label: "Insurance", href: "/insurance" },
];

export default function Footer() {
  const { nj, ny } = siteConfig.locations;

  return (
    <footer>
      {/* ============ Footer Top ============ */}
      <div className="border-t-4 border-t-primary bg-heading pt-14 pb-10">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Column 1: About Us */}
            <div>
              <h4 className="mb-6 font-heading text-lg font-bold text-white">
                About Us
              </h4>
              <p className="mb-6 text-[16px] leading-relaxed text-white/70">
                Board certified plastic surgeons providing personalized care in
                breast reconstruction, aesthetic surgery, and body contouring
                across New Jersey and Westchester, NY.
              </p>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={nj.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-3 text-[16px] text-white/70 transition-colors hover:text-gold"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    <span>{nj.address}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${nj.phoneRaw}`}
                    className="group inline-flex items-center gap-3 text-[16px] text-white/70 transition-colors hover:text-gold"
                  >
                    <Phone className="h-5 w-5 flex-shrink-0 text-gold" />
                    <span>{nj.phone}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${nj.email}`}
                    className="group inline-flex items-center gap-3 text-[16px] text-white/70 transition-colors hover:text-gold"
                  >
                    <Mail className="h-5 w-5 flex-shrink-0 text-gold" />
                    <span>{nj.email}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Our Services */}
            <div>
              <h4 className="mb-6 font-heading text-lg font-bold text-white">
                Our Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-[16px] text-white/70 transition-colors hover:text-gold"
                    >
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 right-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:left-0 group-hover:right-auto group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="mb-6 font-heading text-lg font-bold text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-[16px] text-white/70 transition-colors hover:text-gold"
                    >
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 right-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:left-0 group-hover:right-auto group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Office Hours */}
            <div>
              <h4 className="mb-6 font-heading text-lg font-bold text-white">
                Office Hours
              </h4>

              {/* NJ Office */}
              <div className="mb-6">
                <h5 className="mb-2 font-sans text-[16px] font-bold text-gold">
                  New Jersey Office
                </h5>
                <ul className="space-y-1.5 text-[16px] text-white/70">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              {/* NY Office */}
              <div>
                <h5 className="mb-2 font-sans text-[16px] font-bold text-gold">
                  New York Office
                </h5>
                <ul className="space-y-1.5 text-[16px] text-white/70">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Footer Bottom ============ */}
      <div className="bg-[#111a27] py-[14px]">
        <div className="mx-auto max-w-[1320px] px-4 text-center">
          <p className="text-[16px] text-white/50">
            &copy; 2026 Specialized Plastic Surgery. Powered by{" "}
            <Link
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 transition-colors hover:text-gold"
            >
              CalTech Web
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
