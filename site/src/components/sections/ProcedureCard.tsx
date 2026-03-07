import Link from "next/link";
import type { Procedure } from "@/data/procedures";
import { serviceCategories } from "@/data/procedures";

interface ProcedureCardProps {
  procedure: Procedure;
}

function getCategoryLabel(categorySlug: string): string {
  const match = serviceCategories.find((c) => c.slug === categorySlug);
  return match ? match.name : categorySlug;
}

export default function ProcedureCard({ procedure }: ProcedureCardProps) {
  const categoryLabel = getCategoryLabel(procedure.categorySlug);

  return (
    <Link
      href={`/services/${procedure.categorySlug}/${procedure.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Category badge */}
      <span className="inline-block rounded-full bg-[#1a2332]/5 px-3 py-1 text-xs font-medium text-[#1a2332]">
        {categoryLabel}
      </span>

      {/* Procedure name */}
      <h3 className="mt-4 text-lg font-bold text-[#1a2332] transition-colors group-hover:text-[#c9a96e]">
        {procedure.shortName ?? procedure.name}
      </h3>

      {/* Short description */}
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
        {procedure.description}
      </p>

      {/* Learn more indicator */}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a96e] transition-colors group-hover:text-[#b8954f]">
        Learn More
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
      </span>
    </Link>
  );
}
