import Link from "next/link";
import { cn } from "@/lib/utils";

/* ============================================================
   CtaButton - three tiers, and there is no fourth.

     primary   - solid brand fill. Once per section, twice per page.
     secondary - hairline border, transparent fill.
     link      - text with an underline that grows on hover.

   One height (48px, on every breakpoint - touch targets do not
   shrink on mobile), one radius, and no arrow glyph appended to
   the label. An icon goes inside a button only when the icon
   carries meaning the label cannot.
   ============================================================ */

type Variant = "primary" | "secondary" | "link";

interface CtaButtonProps {
  href: string;
  id?: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Renders the white-on-dark set, for buttons over imagery. */
  onDark?: boolean;
  className?: string;
  onClick?: () => void;
}

const BASE =
  "inline-flex items-center justify-center rounded-lg text-body-sm font-700 transition-colors transition-house";
const SOLID = "h-12 px-6";

export function CtaButton({
  href,
  id,
  children,
  variant = "primary",
  onDark = false,
  className,
  onClick,
}: CtaButtonProps) {
  const styles: Record<Variant, string> = {
    primary: cn(
      SOLID,
      onDark
        ? "bg-white text-brand hover:bg-brand-soft"
        : "bg-brand text-white hover:bg-primary-600",
    ),
    secondary: cn(
      SOLID,
      "border",
      onDark
        ? "border-white/50 text-white hover:bg-white/10"
        : "border-hairline text-ink hover:bg-surface-alt",
    ),
    link: cn(
      "hover-underline min-h-11 items-center",
      onDark ? "text-white" : "text-brand",
    ),
  };

  return (
    <Link
      href={href}
      id={id}
      onClick={onClick}
      className={cn(BASE, styles[variant], className)}
    >
      {children}
    </Link>
  );
}
