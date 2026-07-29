import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { AnimatedHeading, Reveal } from "@/components/ui/motion-primitives";

/* ============================================================
   CtaBand — reusable closing call-to-action for inner pages.
   Dark "ink" panel with a soft halo (no brand gradient).
   ============================================================ */
interface CtaBandProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaBand({
  eyebrow = "Get Started",
  title,
  highlight,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center sm:px-12 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-full"
            style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(39,170,226,0.14) 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <Reveal y={10} duration={0.6} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary-400">
                {eyebrow}
              </span>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text={title}
              highlight={highlight}
              highlightClassName="text-secondary-400"
              className="font-heading text-[clamp(1.7rem,3.4vw,2.6rem)] font-700 leading-tight text-white"
            />
            {subtitle && (
              <Reveal delay={0.15} y={14} className="mt-4 text-[15px] leading-relaxed text-neutral-300">
                {subtitle}
              </Reveal>
            )}
            <Reveal delay={0.25} y={14} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:bg-neutral-100"
              >
                {primaryLabel}
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-neutral-200 transition-colors duration-200 hover:border-white/40 hover:text-white"
                >
                  {secondaryLabel}
                </Link>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
