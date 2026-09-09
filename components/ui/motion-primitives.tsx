import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { balanceTitle } from "@/lib/typography";

/* ============================================================
   LAYOUT PRIMITIVES (formerly motion primitives)
   ------------------------------------------------------------
   These used to fade-and-slide every block into view on scroll.
   That entrance was on every section of every page, which made
   scrolling feel laggy and gave the whole site the same texture
   whatever the content was.

   The motion budget is now:
     • one hero moment on load  (the route line drawing itself)
     • stat numbers counting up once, in view
     • interaction feedback     (hover, focus, accordion, menu)

   The components below are kept as plain wrappers so existing
   call sites keep working and no scroll-triggered animation can
   creep back in through them.
   ============================================================ */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "span";
  /** Accepted and ignored - see the note above. */
  delay?: number;
  y?: number;
  duration?: number;
}

export function Reveal({ children, className, as: Tag = "div" }: RevealProps) {
  return <Tag className={className}>{children}</Tag>;
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

/* ------------------------------------------------------------
   AnimatedHeading - now a plain heading. It still resolves the
   two wrapping rules through lib/typography (no orphaned last
   word, no split accent phrase), which is the part that was
   actually doing work.
   ------------------------------------------------------------ */
interface HeadingProps {
  text: string;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3";
  highlight?: string;
  highlightClassName?: string;
  delay?: number;
}

export function AnimatedHeading({
  text,
  className,
  id,
  as: Tag = "h2",
  highlight,
  highlightClassName = "text-brand",
}: HeadingProps) {
  const { lead, carry, tail, hold } = balanceTitle(text, highlight);

  return (
    <Tag className={cn("balance-text", className)} id={id}>
      {lead}
      {tail && (
        <>
          {lead ? " " : ""}
          <span className={cn(hold && "whitespace-nowrap")}>
            {carry ? `${carry} ` : ""}
            <span className={highlightClassName}>{tail}</span>
          </span>
        </>
      )}
    </Tag>
  );
}
