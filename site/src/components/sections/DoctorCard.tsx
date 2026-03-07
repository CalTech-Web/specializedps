import Link from "next/link";
import type { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
}

function getInitials(name: string): string {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const initials = getInitials(doctor.name);

  const highlights: string[] = [
    ...doctor.boardCertifications.slice(0, 2),
    ...doctor.recognition.slice(0, 2),
  ];

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Photo placeholder */}
      <div className="flex h-72 items-center justify-center bg-gradient-to-br from-[#1a2332] to-[#2a3a52]">
        <span className="text-5xl font-semibold tracking-wide text-[#c9a96e]">
          {initials}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1a2332]">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-[#c9a96e]">
          {doctor.credentials}
        </p>
        <p className="mt-1 text-sm text-gray-500">{doctor.location}</p>

        {/* Key highlights */}
        <ul className="mt-4 space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" />
              {item}
            </li>
          ))}
        </ul>

        {/* View Profile link */}
        <Link
          href={`/doctors/${doctor.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a96e] transition-colors hover:text-[#b8954f]"
        >
          View Profile
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
