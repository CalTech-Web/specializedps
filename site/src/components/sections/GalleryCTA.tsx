import Link from "next/link";
import Image from "next/image";

export default function GalleryCTA() {
  return (
    <section className="grid lg:grid-cols-2">
      {/* Left: Image */}
      <div className="relative min-h-[400px] lg:min-h-[550px]">
        <Image
          src="/images/gallery-page/ba-woman.jpg"
          alt="Before and After Gallery"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col justify-center bg-heading px-8 py-16 sm:px-14 lg:px-20">
        <p className="inline-block w-fit bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Photo Gallery
        </p>
        <h2 className="mt-6 font-heading text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
          Explore Our Before &amp; After Gallery
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/80">
          Explore our Before &amp; After Gallery to witness the exceptional
          results of Aesthetic and Reconstructive Procedures in New York and New
          Jersey performed at Specialized Plastic Surgery. From facial
          rejuvenation to body contouring, our gallery showcases stunning,
          natural-looking transformations that highlight the expertise and
          commitment of our skilled surgeons.
        </p>
        <Link
          href="/gallery"
          className="mt-10 inline-block w-fit rounded-md bg-heading border-2 border-white px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-heading"
        >
          Explore Gallery
        </Link>
      </div>
    </section>
  );
}
