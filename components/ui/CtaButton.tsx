import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ============================================================
   CtaButton — shared CTA component used site-wide
   Matches the hero section's button style exactly.

   Variants:
     "primary"   — filled indigo (bg-primary-500), white text, shimmer sweep
     "secondary" — outlined, ink text, subtle hover background

   On "glassy" nav (dark overlay), pass `glassy` prop to flip
   primary to white-on-primary and secondary to white/transparent.
   ============================================================ */

interface CtaButtonProps {
  href: string;
  id?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  /** When true renders the white-on-glass version for dark nav bar */
  glassy?: boolean;
  /** Extra class names if needed */
  className?: string;
  onClick?: () => void;
}

export function CtaButton({
  href,
  id,
  children,
  variant = "primary",
  glassy = false,
  className = "",
  onClick,
}: CtaButtonProps) {
  const baseClass =
    "group relative inline-flex items-center justify-center rounded-lg font-semibold text-sm px-6 py-2.5 overflow-hidden transition-all duration-300 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary-300";

  const primaryClass = glassy
    ? "bg-white text-primary-600 hover:bg-white/90 shadow-md"
    : "bg-primary-500 text-white shadow-md hover:bg-primary-600 hover:shadow-lg";

  const secondaryClass = glassy
    ? "border border-white/40 text-white hover:bg-white/10"
    : "border border-neutral-200 text-ink hover:bg-neutral-50 hover:border-neutral-300";

  const variantClass = variant === "primary" ? primaryClass : secondaryClass;

  return (
    <Link
      href={href}
      id={id}
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
    >
      {/* Shimmer sweep (primary only) */}
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 bg-white/15 skew-x-12 pointer-events-none"
        />
      )}

      {/* Label + arrow */}
      <span className="relative flex items-center gap-0">
        <span className="transition-all duration-300 group-hover:mr-1.5">
          {children}
        </span>
        <span className="overflow-hidden w-0 group-hover:w-[16px] transition-all duration-300 flex items-center">
          <ArrowRight size={14} strokeWidth={2.5} />
        </span>
      </span>
    </Link>
  );
}
