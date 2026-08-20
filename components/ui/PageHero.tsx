import Container from "@/components/ui/Container";
import { AnimatedHeading, Reveal } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   PageHero - canonical hero for inner pages.
   Centered, two-line layout: purple eyebrow chip · two-line
   title · two-line subtitle · up to two CTAs. Clears the fixed
   navbar and sits on a subtle halo + dot-grid backdrop (no
   heavy brand gradient). No breadcrumbs by design.
   ============================================================ */
interface PageHeroProps {
  eyebrow?: string;
  title: string;
  /** Trailing accent-coloured phrase appended to the title (starts line 2). */
  highlight?: string;
  subtitle?: string;
  /** CTAs - pass up to two <CtaButton> children. */
  children?: React.ReactNode;
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-neutral-100 bg-white pb-20 pt-32 lg:pb-24 lg:pt-40",
        className,
      )}
    >
      {/* Backdrop - subtle, non-brand */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-halo" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
        style={{ maskImage: "radial-gradient(70% 60% at 50% 0%, #000 0%, transparent 75%)" }}
      />

      <Container>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          {eyebrow && (
            <Reveal y={10} duration={0.6} className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-md shadow-primary-500/25 ring-1 ring-inset ring-white/15">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary-400" />
                {eyebrow}
              </span>
            </Reveal>
          )}

          <AnimatedHeading
            as="h1"
            text={title}
            highlight={highlight}
            className="max-w-4xl font-heading text-[clamp(2.1rem,5vw,3.5rem)] font-800 leading-[1.1] tracking-tight text-ink"
          />

          {subtitle && (
            <Reveal delay={0.15} y={16} className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
              {subtitle}
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.25} y={16} className="mt-9 flex flex-wrap items-center justify-center gap-4">
              {children}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
