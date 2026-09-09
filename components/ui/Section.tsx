import { type ReactNode } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

/* ============================================================
   Section - vertical rhythm and background band in one place.

   Padding is 56 / 72 / 96px via the --space-section clamp, so no
   section carries its own py-* value. `bg` picks one of the four
   allowed grounds; alternating them is what chunks the page into
   readable blocks.

   Section endings, per the brief, are one of exactly two things:
     • tint edge   - the band simply ends where the colour ends
     • hairline    - `divider` draws a container-width 1px rule,
                     used only between two same-background sections
   ============================================================ */

export type SectionBg = "surface" | "tint" | "brand" | "ink";

const BACKGROUNDS: Record<SectionBg, string> = {
  surface: "bg-surface text-ink",
  tint: "bg-surface-alt text-ink",
  brand: "bg-brand text-white",
  ink: "bg-ink text-white",
};

interface SectionProps {
  children: ReactNode;
  bg?: SectionBg;
  /** Draws the container-width hairline above the section. */
  divider?: boolean;
  /** Skip the Container when the section manages its own bleed. */
  bleed?: boolean;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  bg = "surface",
  divider = false,
  bleed = false,
  id,
  className,
  containerClassName,
  ...aria
}: SectionProps) {
  const body = bleed ? (
    children
  ) : (
    <Container className={containerClassName}>{children}</Container>
  );

  return (
    <section id={id} className={cn(BACKGROUNDS[bg], className)} {...aria}>
      {divider && (
        <Container>
          <hr className="route-hairline" />
        </Container>
      )}
      <div className="section-y">{body}</div>
    </section>
  );
}
