import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/data/doctors";

export default function DoctorsShowcase() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold uppercase text-heading sm:text-4xl">
          Meet Our Doctors
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {doctors.map((doctor) => (
            <Link
              key={doctor.slug}
              href={`/doctors/${doctor.slug}`}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="bg-heading py-4 text-center">
                <p className="font-heading text-lg font-bold text-white">
                  {doctor.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
