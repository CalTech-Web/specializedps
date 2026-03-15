import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  eyebrow?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  centered = true,
  className,
  eyebrow,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8",
        centered && "text-center",
        className
      )}
    >
      {/* Eyebrow badge */}
      {eyebrow && (
        <p className={cn(
          "mb-4 inline-flex items-center gap-2 rounded-sm px-5 py-2 text-xs font-bold tracking-[0.2em]",
          light ? "bg-white/10 text-primary" : "bg-primary/20 text-primary"
        )}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a07d45]" />
          </span>
          {eyebrow}
        </p>
      )}

      {/* Subtitle with decorative line */}
      {subtitle && (
        <p className={cn(
          "mb-3 flex items-center gap-4 font-semibold text-sm tracking-[0.15em]",
          light ? "text-primary" : "text-primary"
        )}>
          {centered && <span className="flex-1" />}
          <span className={cn("inline-block w-12 h-[2px]", light ? "bg-primary" : "bg-primary")} />
          <span>{subtitle}</span>
          {centered && (
            <>
              <span className={cn("inline-block w-12 h-[2px]", light ? "bg-primary" : "bg-primary")} />
              <span className="flex-1" />
            </>
          )}
        </p>
      )}

      {/* Title */}
      <h2 className={cn(
        "font-heading text-3xl font-bold leading-[1.1] sm:text-4xl",
        light ? "text-white" : "text-heading"
      )}>
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/70" : "text-body",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
