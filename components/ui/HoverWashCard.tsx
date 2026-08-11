import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   HoverWashCard — the canonical inner-page card surface.
   Standardises the same hover treatment used on the homepage
   (PlatformPreview / HowWeWork): a calm indigo→sky gradient
   wash that eases in on hover, a soft lift, and a brand-tinted
   border/shadow. Content is layered above the wash at z-10.

   Pass `href` to render as a Link (whole card is the target).
   Override the base surface with `className` (e.g. `bg-surface`).
   ============================================================ */
interface HoverWashCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  /** Disable the -translate-y lift (e.g. for tall list cards). */
  noLift?: boolean;
}

export default function HoverWashCard({
  children,
  className,
  href,
  noLift = false,
}: HoverWashCardProps) {
  const base = cn(
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ecf2] bg-white p-7",
    "transition-[border-color,box-shadow,transform] duration-300 ease-out",
    "hover:border-primary-200/70 hover:shadow-[0_18px_44px_-20px_rgba(46,49,146,0.30)]",
    !noLift && "hover:-translate-y-1",
    className,
  );

  const inner = (
    <>
      {/* Calm blue-brand gradient wash that eases in on hover — mirrors the homepage cards. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 via-secondary-50/50 to-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    );
  }

  return <div className={base}>{inner}</div>;
}
