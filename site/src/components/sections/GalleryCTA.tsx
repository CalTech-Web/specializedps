import Link from "next/link";
import Image from "next/image";

export default function GalleryCTA() {
  return (
    <section className="relative flex h-[500px] items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/procedures/consultation-bg.jpg"
        alt="Before and After Gallery"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-heading/40" />

      {/* Content */}
      <div className="relative z-10 ml-auto w-full max-w-[1320px] px-6 py-20">
        <div className="ml-auto max-w-md">
          <p className="inline-block bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
            Photo Gallery
          </p>
          <h2 className="mt-6 font-heading text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            Explore Our Before &amp; After Gallery
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/85">
            Explore our Before &amp; After Gallery to witness the exceptional
            results of Aesthetic and Reconstructive Procedures in New York and New
            Jersey performed at Specialized Plastic Surgery. From facial
            rejuvenation to body contouring, our gallery showcases stunning,
            natural-looking transformations that highlight the expertise and
            commitment of our skilled surgeons.
          </p>
          <Link
            href="/gallery"
            className="mt-10 inline-block rounded-md border-2 border-white bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-heading"
          >
            Explore Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
