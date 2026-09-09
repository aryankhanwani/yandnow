import Section, { type SectionBg } from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import StatFigure from "@/components/ui/StatFigure";

/* ============================================================
   StatBand - the page's visual rest stop.

   Large numbers, small labels, on the tint band. A number is the
   fastest thing on a page to read, which is exactly why it earns
   the biggest type on it.

   The source attribution is a single caption line at the foot of
   the band, not a paragraph under the heading.

   Only published, attributable figures appear here. Values are
   strings because the approved set includes non-numeric forms
   ("57/100"); the count-up only runs where a figure parses to a
   plain number.
   ============================================================ */

export interface Stat {
  value: string;
  /** Four words maximum, two lines maximum. */
  label: string;
}

interface StatBandProps {
  stats: Stat[];
  title?: string;
  highlight?: string;
  /** One quiet line under the band: where the figures come from. */
  caption?: string;
  id?: string;
  headingId?: string;
  bg?: SectionBg;
}

/* 2 across at base, 3 at md, then 3 or 6 at lg depending on how
   many there are. Never so many columns that a figure wraps. */
function columns(count: number): string {
  if (count <= 2) return "grid-cols-2";
  if (count <= 4) return "grid-cols-2 md:grid-cols-4";
  if (count <= 6) return "grid-cols-2 md:grid-cols-3 lg:grid-cols-6";
  return "grid-cols-2 md:grid-cols-3";
}

export default function StatBand({
  stats,
  title,
  highlight,
  caption,
  id,
  headingId,
  bg = "tint",
}: StatBandProps) {
  return (
    <Section bg={bg} id={id} aria-labelledby={headingId}>
      {title && (
        <SectionHeading id={headingId} title={title} highlight={highlight} className="mb-10" />
      )}

      <ul className={`grid gap-x-6 gap-y-10 ${columns(stats.length)}`}>
        {stats.map((stat) => (
          <li key={stat.label}>
            <StatFigure value={stat.value} />
            <p className="mt-3 max-w-[16ch] balance-text text-body-sm text-ink-muted">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>

      {caption && <p className="mt-12 text-caption">{caption}</p>}
    </Section>
  );
}
