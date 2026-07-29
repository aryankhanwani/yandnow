import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { AnimatedHeading, Reveal } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   PageHero — canonical hero for inner pages.
   Clears the fixed navbar, adds a subtle halo + dot texture
   backdrop (no heavy brand gradient), and animates the title.
   ============================================================ */
interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode; // CTAs or extra content
  align?: "center" | "left";
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  crumbs,
  children,
  align = "left",
}: PageHeroProps) {
  const isCenter = align === "center";
  return (
    <section className="relative overflow-hidden border-b border-neutral-100 bg-white pb-16 pt-32 lg:pb-20 lg:pt-40">
      {/* Backdrop — subtle, non-brand */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-halo" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" style={{ maskImage: "radial-gradient(70% 60% at 50% 0%, #000 0%, transparent 75%)" }} />

      <Container>
        <div className={cn("relative flex flex-col", isCenter ? "items-center text-center" : "items-start")}>
          {crumbs && crumbs.length > 0 && (
            <Reveal y={8} duration={0.5} className="mb-5">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                {crumbs.map((c, i) => (
                  <span key={c.label} className="flex items-center gap-1.5">
                    {c.href ? (
                      <Link href={c.href} className="transition-colors hover:text-primary-600">{c.label}</Link>
                    ) : (
                      <span className="text-neutral-600">{c.label}</span>
                    )}
                    {i < crumbs.length - 1 && <ChevronRight size={12} className="text-neutral-300" />}
                  </span>
                ))}
              </nav>
            </Reveal>
          )}

          {eyebrow && (
            <Reveal y={10} duration={0.6} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary-600 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
                {eyebrow}
              </span>
            </Reveal>
          )}

          <AnimatedHeading
            as="h1"
            text={title}
            highlight={highlight}
            className={cn(
              "font-heading font-800 leading-[1.1] tracking-tight text-ink",
              "text-[clamp(2.1rem,5vw,3.5rem)]",
              isCenter ? "max-w-4xl" : "max-w-4xl",
            )}
          />

          {subtitle && (
            <Reveal delay={0.15} y={16} className={cn("mt-5 text-[17px] leading-relaxed text-neutral-600", isCenter ? "max-w-2xl" : "max-w-2xl")}>
              {subtitle}
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.25} y={16} className="mt-8 flex flex-wrap items-center gap-4">
              {children}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
