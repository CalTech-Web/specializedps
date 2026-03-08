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
      <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-heading">
        <Image
          src="/images/gallery-page/hero.webp"
          alt="Gallery"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-heading/30 via-heading/10 to-heading/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Gallery
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-relaxed text-white/90 sm:text-base">
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
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {galleryGroups.map((group) => {
                const categories = galleryCategories.filter(
                  (cat) => cat.group === group
                );

                return (
                  <div key={group}>
                    {/* Category image */}
                    <div className="relative mb-6 aspect-[4/5] overflow-hidden">
                      <Image
                        src={categoryImages[group] ?? "/images/misc/sps-center.jpg"}
                        alt={group}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Category title */}
                    <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-heading">
                      {group}
                    </h2>
                    <div className="mt-2 h-[1px] w-12 bg-body/30" />

                    {/* Procedure links */}
                    <ul className="mt-4 space-y-2.5">
                      {categories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/gallery/${cat.slug}`}
                            className="text-sm text-body transition-colors hover:text-primary"
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
        <section className="relative overflow-hidden bg-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative mx-auto max-w-[1320px] px-6 py-16 sm:py-20">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              {/* Left: Images with parallax effect */}
              <div className="relative flex-1">
                {/* Woman image */}
                <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden">
                  <Image
                    src="/images/gallery-page/ba-woman.jpg"
                    alt="Patient consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* SPS Lobby overlay (parallax) */}
                <div
                  className="absolute -bottom-8 -right-4 w-64 overflow-hidden rounded-sm shadow-xl sm:-bottom-12 sm:right-8 sm:w-80"
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="/images/gallery-page/sps-center.jpg"
                      alt="SPS Center lobby"
                      fill
                      className="object-cover"
                      sizes="320px"
                      style={{ objectPosition: "center" }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <Image
                        src="/images/logos/black-logo.webp"
                        alt="Specialized Plastic Surgery"
                        width={180}
                        height={45}
                        className="h-8 w-auto sm:h-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Text content */}
              <div className="flex-1 pt-12 lg:pt-0">
                <p className="mb-4 inline-block bg-heading px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Before and After Gallery
                </p>
                <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-heading sm:text-4xl">
                  Specialized Plastic Surgery
                </h2>
                <p className="mt-6 text-base leading-relaxed text-body">
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
        <section className="relative overflow-hidden py-12">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative mx-auto max-w-[1320px] px-6">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-heading">
              Credentials You Can Trust:
            </p>
            <div className="flex flex-wrap items-center gap-8 sm:gap-12">
              {[
                { src: "/images/credentials/top-us-news.webp", alt: "Top US News Doctor", w: 90 },
                { src: "/images/credentials/asps.webp", alt: "American Society of Plastic Surgeons", w: 80 },
                { src: "/images/credentials/castle-connolly.webp", alt: "Castle Connolly Top Doctors", w: 130 },
                { src: "/images/credentials/alpha-omega.webp", alt: "Alpha Omega Alpha Honor Medical Society", w: 110 },
                { src: "/images/credentials/microsurgery.webp", alt: "American Society for Reconstructive Microsurgery", w: 90 },
                { src: "/images/credentials/top-us-news.webp", alt: "Top US News Doctor", w: 90 },
              ].map((badge, i) => (
                <div key={i} className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={badge.w}
                    height={badge.w}
                    className="h-16 w-auto object-contain sm:h-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Section 4: Safety & Comfort ───────── */}
        <section className="bg-secondary">
          <div className="mx-auto flex max-w-[1320px] flex-col lg:flex-row">
            {/* Left: Image */}
            <div className="relative min-h-[400px] flex-1 lg:min-h-0">
              <Image
                src="/images/gallery-page/safety.jpg"
                alt="Patient safety and comfort"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Right: Text */}
            <div className="flex flex-1 flex-col justify-center px-8 py-16 sm:px-12 lg:px-16">
              <p className="mb-4 inline-block self-start bg-heading px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                Advanced Aesthetic and Reconstructive Procedures in New York and
                New Jersey
              </p>
              <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-heading sm:text-4xl">
                A Commitment to Safety and Comfort
              </h2>
              <p className="mt-6 text-base leading-relaxed text-body">
                Your safety and comfort are our top priorities. We adhere to the
                highest standards of care in a state-of-the-art facility,
                ensuring that all procedures are performed in a safe and sterile
                environment. Our compassionate team is dedicated to making your
                experience as comfortable as possible, providing support and
                guidance every step of the way.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block rounded-md border-2 border-heading bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-heading transition-all hover:bg-heading hover:text-white"
                >
                  Contact Us Today!
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Section 5: Contact Form ───────── */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-6">
            <div className="mb-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-body">
                Join Us on Your Journey
              </p>
            </div>
            <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
              Take the Next Step and Schedule an Appointment Today
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-body">
              At Specialized Plastic Surgery, we are passionate about helping our
              patients achieve their desired outcomes through personalized care
              and expertise. Whether you are considering breast reconstruction,
              seeking aesthetic enhancements, or exploring options for body
              contouring, we are here to guide you every step of the way.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-body">
              Contact us today to schedule a consultation and take the first step
              toward realizing your goals. Experience the difference at
              Specialized Plastic Surgery, where your journey to transformation
              begins.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </GalleryAgeGate>
    </>
  );
}
