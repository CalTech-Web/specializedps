import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Link
      href={`/doctors/${doctor.slug}`}
      className="group block overflow-hidden border-b-4 border-b-transparent bg-white transition-all duration-300 hover:border-b-primary hover:shadow-xl"
    >
      {/* Photo, full width, no border radius */}
      <div className="relative h-80 overflow-hidden bg-cream">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-heading/0 transition-colors duration-300 group-hover:bg-heading/10" />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="font-heading text-2xl font-bold text-heading">
          {doctor.name}
        </h3>
        <p className="mt-1 text-base text-body">
          {doctor.title}
        </p>
        <p className="mt-0.5 text-sm text-body/80">
          {doctor.credentials}
        </p>
      </div>
    </Link>
  );
}
