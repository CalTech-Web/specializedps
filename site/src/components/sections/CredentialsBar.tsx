import Image from "next/image";

const credentials = [
  { src: "/images/credentials/top-us-news.webp", alt: "Top US News Doctor", width: 100, height: 100 },
  { src: "/images/credentials/asps.webp", alt: "American Society of Plastic Surgeons", width: 120, height: 100 },
  { src: "/images/credentials/castle-connolly.webp", alt: "Castle Connolly Top Doctors", width: 140, height: 60 },
  { src: "/images/credentials/alpha-omega.webp", alt: "Alpha Omega Alpha Honor Medical Society", width: 120, height: 100 },
  { src: "/images/credentials/microsurgery.webp", alt: "American Society Reconstructive Microsurgery", width: 100, height: 100 },
];

export default function CredentialsBar() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/gallery-page/marble-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-[1320px] px-6">
        <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-body/60">
          Credentials You Can Trust:
        </p>
        <div className="flex flex-wrap items-center justify-between gap-8">
          {credentials.map((cred, i) => (
            <div key={i}>
              <Image
                src={cred.src}
                alt={cred.alt}
                width={cred.width}
                height={cred.height}
                className="h-16 w-auto sm:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
