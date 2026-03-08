import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  /** @deprecated eyebrow is no longer rendered. Kept for backward compatibility. */
  eyebrow?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8",
        centered && "text-center",
        className
      )}
    >
      {/* Subtitle with decorative line */}
      {subtitle && (
        <p className="mb-3 flex items-center gap-4 text-primary font-semibold text-sm uppercase tracking-[0.15em]">
          {centered && <span className="flex-1" />}
          <span className="inline-block w-12 h-[2px] bg-primary" />
          <span>{subtitle}</span>
          {centered && (
            <>
              <span className="inline-block w-12 h-[2px] bg-primary" />
              <span className="flex-1" />
            </>
          )}
        </p>
      )}

      {/* Title */}
      <h2 className="font-heading text-3xl font-bold text-heading leading-[1.1] sm:text-4xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-body",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
