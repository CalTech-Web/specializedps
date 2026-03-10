import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GalleryAgeGate from "@/components/sections/GalleryAgeGate";
import ContactForm from "@/components/sections/ContactForm";
import { galleryCategories, galleryItems, galleryGroups } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "View before and after photos of breast reconstruction, aesthetic breast surgery, body contouring, and facial procedures at Specialized Plastic Surgery.",
};

const categoryImages: Record<string, string> = {
  Face: "/images/gallery-page/face.jpg",
  Body: "/images/gallery-page/body.jpg",
  "Aesthetic Breast": "/images/gallery-page/breast.webp",
  "Breast Reconstruction": "/images/gallery-page/reconstruction.jpg",
};

export default function GalleryPage() {
  return (
    <>
      {/* ───────── Section 1: Hero ───────── */}
      <section className="relative flex min-h-[75vh] w-full items-end justify-center overflow-hidden bg-heading">
        <Image
          src="/images/gallery-page/hero.webp"
          alt="Gallery"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heading/70 via-heading/20 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-32 text-center sm:pb-20">
          <h1 className="font-heading text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Gallery
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-sm leading-[1.8] text-white/85 sm:text-[15px]">
            Welcome to our Before and After Gallery, showcasing photographs that
            illustrate the outcomes of various surgical procedures. These
            examples are provided to help those considering cosmetic or
            reconstructive surgery understand potential results. Please keep in
            mind that each patient is unique and individual results may vary. To
            protect patient confidentiality, identifiable features such as
            tattoos may be blurred. All images are shared with the patients&apos;
            consent and represent results at different stages of recovery.
            Please note that these are clinical images; some may contain nudity.
          </p>
        </div>
      </section>

      <GalleryAgeGate>
        {/* ───────── Section 2: Category Grid ───────── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {galleryGroups.map((group) => {
                const categories = galleryCategories.filter(
                  (cat) => cat.group === group
                );

                return (
                  <div key={group} className="group">
                    {/* Category image */}
                    <div className="relative mb-8 aspect-[4/5] overflow-hidden">
                      <Image
                        src={
                          categoryImages[group] ?? "/images/misc/sps-center.jpg"
                        }
                        alt={group}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Category title */}
                    <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-heading">
                      {group}
                    </h2>
                    <div className="mt-3 h-[1px] w-10 bg-primary" />

                    {/* Procedure links */}
                    <ul className="mt-5 space-y-3">
                      {categories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/gallery/${cat.slug}`}
                            className="inline-block text-[15px] text-body transition-colors hover:text-primary"
                          >
                            {cat.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────── Section 3: Before & After with Parallax ───────── */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.35,
            }}
          />
          <div className="relative mx-auto max-w-[1320px] px-6 py-20 sm:py-28">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              {/* Left: Image */}
              <div className="relative flex-1">
                <div className="relative aspect-[3/4] w-full max-w-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/gallery-page/sps-center-hero.jpg"
                    alt="Specialized Plastic Surgery Center"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Text content */}
              <div className="flex-1 pt-8 lg:pt-0">
                <span className="mb-5 inline-block bg-heading px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                  Before and After Gallery
                </span>
                <h2 className="font-heading text-3xl font-bold uppercase leading-[1.15] text-heading sm:text-4xl lg:text-[2.75rem]">
                  Specialized Plastic Surgery
                </h2>
                <p className="mt-8 text-[15px] leading-[1.85] text-body">
                  Discover the transformative results achieved at Specialized
                  Plastic Surgery through our Before and After gallery. Our
                  expert surgeons specialize in aesthetic and reconstructive
                  procedures, delivering natural-looking enhancements tailored to
                  each patient&apos;s unique goals. From breast reconstruction
                  and body contouring to facial rejuvenation, explore real
                  patient outcomes that reflect our commitment to precision,
                  artistry, and compassionate care. Let these inspiring
                  transformations guide you on your journey to confidence and
                  restoration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Credentials Bar ───────── */}
        <section className="relative overflow-hidden border-t border-body/10 py-14">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.25,
            }}
          />
          <div className="relative mx-auto max-w-[1320px] px-6">
            <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-heading/70">
              Credentials You Can Trust:
            </p>
            <div className="overflow-hidden">
              <div className="animate-marquee flex w-max items-center gap-16">
                {[
                  { src: "/images/credentials/top-us-news.webp", alt: "Top US News Doctor", h: 72 },
                  { src: "/images/credentials/asps.webp", alt: "American Society of Plastic Surgeons", h: 64 },
                  { src: "/images/credentials/castle-connolly.webp", alt: "Castle Connolly Top Doctors", h: 64 },
                  { src: "/images/credentials/alpha-omega.webp", alt: "Alpha Omega Alpha Honor Medical Society", h: 64 },
                  { src: "/images/credentials/microsurgery.webp", alt: "American Society for Reconstructive Microsurgery", h: 64 },
                  { src: "/images/credentials/top-us-news.webp", alt: "Top US News Doctor", h: 72 },
                  { src: "/images/credentials/asps.webp", alt: "American Society of Plastic Surgeons", h: 64 },
                  { src: "/images/credentials/castle-connolly.webp", alt: "Castle Connolly Top Doctors", h: 64 },
                  { src: "/images/credentials/alpha-omega.webp", alt: "Alpha Omega Alpha Honor Medical Society", h: 64 },
                  { src: "/images/credentials/microsurgery.webp", alt: "American Society for Reconstructive Microsurgery", h: 64 },
                  { src: "/images/credentials/top-us-news.webp", alt: "Top US News Doctor", h: 72 },
                  { src: "/images/credentials/asps.webp", alt: "American Society of Plastic Surgeons", h: 64 },
                ].map((badge, i) => (
                  <div key={i} className="shrink-0">
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={badge.h * 1.5}
                      height={badge.h}
                      className="object-contain"
                      style={{ height: badge.h, width: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Section 4: Safety & Comfort ───────── */}
        <section className="bg-secondary">
          <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row">
            {/* Left: Image */}
            <div className="relative min-h-[450px] flex-1 lg:min-h-[550px]">
              <Image
                src="/images/gallery-page/safety.jpg"
                alt="Patient safety and comfort"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Right: Text */}
            <div className="flex flex-1 flex-col justify-center px-8 py-16 sm:px-14 lg:px-20 lg:py-20">
              <span className="mb-5 inline-block self-start bg-heading px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Advanced Aesthetic and Reconstructive Procedures in New York and
                New Jersey
              </span>
              <h2 className="font-heading text-3xl font-bold uppercase leading-[1.15] text-heading sm:text-4xl">
                A Commitment to Safety and Comfort
              </h2>
              <p className="mt-8 text-[15px] leading-[1.85] text-body">
                Your safety and comfort are our top priorities. We adhere to the
                highest standards of care in a state-of-the-art facility,
                ensuring that all procedures are performed in a safe and sterile
                environment. Our compassionate team is dedicated to making your
                experience as comfortable as possible, providing support and
                guidance every step of the way.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block border-2 border-heading bg-transparent px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-heading transition-all hover:bg-heading hover:text-white"
                >
                  Contact Us Today!
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Section 5: Contact Form ───────── */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
          />
          <div className="relative mx-auto max-w-2xl px-6">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-body/70">
              Join Us on Your Journey
            </p>
            <h2 className="mt-4 text-center font-heading text-2xl font-bold uppercase leading-[1.2] text-heading sm:text-3xl">
              Take the Next Step and Schedule an Appointment Today
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-[1.8] text-body">
              At Specialized Plastic Surgery, we are passionate about helping our
              patients achieve their desired outcomes through personalized care
              and expertise. Whether you are considering breast reconstruction,
              seeking aesthetic enhancements, or exploring options for body
              contouring, we are here to guide you every step of the way.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-[1.8] text-body">
              Contact us today to schedule a consultation and take the first step
              toward realizing your goals. Experience the difference at
              Specialized Plastic Surgery, where your journey to transformation
              begins.
            </p>
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </GalleryAgeGate>
    </>
  );
}
