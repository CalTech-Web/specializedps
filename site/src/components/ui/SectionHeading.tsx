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
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      {/* Subtitle with decorative line */}
      {subtitle && (
        <p className="mb-4 flex items-center gap-5 text-primary font-medium text-base tracking-wide">
          {centered && <span className="flex-1" />}
          <span className="inline-block w-20 h-[1.5px] bg-primary" />
          <span>{subtitle}</span>
          {centered && (
            <>
              <span className="inline-block w-20 h-[1.5px] bg-primary" />
              <span className="flex-1" />
            </>
          )}
        </p>
      )}

      {/* Title */}
      <h2 className="font-heading text-5xl font-bold text-heading leading-[1.1] lg:text-6xl">
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
