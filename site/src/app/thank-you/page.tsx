import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Thank You | Specialized Plastic Surgery",
  description: "Thank you for reaching out to Specialized Plastic Surgery. Our team will be in touch shortly.",
};

const locations = [
  { key: "nj" as const, ...siteConfig.locations.nj },
  { key: "ny" as const, ...siteConfig.locations.ny },
];

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-heading py-14 sm:py-20">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Thank You for Reaching Out!
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80">
            Your inquiry is important to us. Our team is already reviewing your
            message and will respond as soon as possible. If you need immediate
            assistance, feel free to call either of our offices directly.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-md border-2 border-gold bg-gold px-8 py-3 text-sm font-bold uppercase tracking-wider text-heading transition-all hover:bg-transparent hover:text-white hover:border-white"
          >
            Back to Homepage
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* Locations */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Get in Touch
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-heading sm:text-4xl">
              Our Offices
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.key}
                className="overflow-hidden rounded-lg border border-gray-100 bg-warm-grey transition-shadow hover:shadow-lg"
              >
                <div className="h-[2px] bg-gradient-to-r from-primary via-gold to-primary" />
                <div className="p-8">
                  <h3 className="font-heading text-xl font-bold text-heading">
                    {loc.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {loc.surgeon}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-body">{loc.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <a
                        href={`tel:${loc.phoneRaw}`}
                        className="text-sm font-semibold text-primary transition-colors hover:text-heading"
                      >
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-sm text-body transition-colors hover:text-primary"
                      >
                        {loc.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-body">{loc.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
