import Link from "next/link";
import Image from "next/image";

export default function AdvancedTechnology() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/gallery-page/safety.jpg"
            alt="Advanced surgical technology"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Innovation in Surgery
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Advanced Technology and Techniques
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body">
            At Specialized Plastic Surgery, we are committed to utilizing the
            latest medical technology and advanced surgical techniques to deliver
            superior outcomes for our patients. From microsurgical breast
            reconstruction using the DIEP flap technique to Resensation
            procedures that restore sensation after mastectomy, our surgeons stay
            at the forefront of innovation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-body">
            Our ERAS (Enhanced Recovery After Surgery) protocols, opioid-sparing
            anesthesia, and AAAASF-accredited surgical facilities ensure the
            highest level of safety, comfort, and faster recovery for every
            patient.
          </p>
          <Link
            href="/services/breast-reconstruction/resensation"
            className="mt-8 inline-block rounded-md border-2 border-primary bg-primary px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-white hover:text-primary hover:shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
