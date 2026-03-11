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
      className="group block overflow-hidden rounded-lg border border-peach bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary"
    >
      {/* Category badge */}
      <span className="inline-block rounded bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-primary">
        {categoryLabel}
      </span>

      {/* Procedure name */}
      <h3 className="mt-4 font-heading text-lg font-bold text-heading transition-colors group-hover:text-primary">
        {procedure.shortName ?? procedure.name}
      </h3>

      {/* Short description */}
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-body">
        {procedure.description}
      </p>

      {/* Learn more indicator */}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-heading">
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
