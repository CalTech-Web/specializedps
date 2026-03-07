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
      className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      {/* Photo */}
      <div className="relative h-80 overflow-hidden bg-[#f5f5f5]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-[#32373c]">{doctor.name}</h3>
        <p className="mt-1 text-sm text-gray-600">
          {doctor.title}
        </p>
        <p className="mt-0.5 text-sm text-gray-500">
          {doctor.credentials}
        </p>
      </div>
    </Link>
  );
}
