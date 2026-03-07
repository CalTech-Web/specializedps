import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "round" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border-2 border-primary rounded-none px-7 py-2.5 font-bold text-lg hover:bg-white hover:text-primary",
  secondary:
    "bg-heading text-white border-2 border-heading rounded-none px-10 py-6 font-medium text-lg hover:bg-white hover:text-heading",
  round:
    "bg-primary text-white rounded-[40px] px-10 py-6 font-medium text-lg border-2 border-primary hover:bg-white hover:text-primary",
  gold:
    "bg-gold text-heading rounded-[40px] px-10 py-6 font-medium text-lg border-2 border-gold hover:bg-white hover:text-primary",
  outline:
    "bg-transparent border-2 border-primary text-primary rounded-none px-7 py-2.5 font-bold text-lg hover:bg-primary hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "",
  lg: "px-10 py-6 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 whitespace-nowrap cursor-pointer hover:shadow-md",
    variantStyles[variant],
    size !== "md" && sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
