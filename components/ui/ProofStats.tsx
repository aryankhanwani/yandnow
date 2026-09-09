import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";

/* ============================================================
   ProofStats - published, attributable figures only.

   A card carries the figure and a three-or-four-word label and
   nothing else; the reports the figures come from are credited
   once, under the section heading, rather than three times over.

   Values are typed as plain strings rather than counted up from
   a number, because the approved set includes non-numeric forms
   ("57/100") and because an animated counter reads as marketing
   on a stat whose whole job is to be checkable.
   ============================================================ */

export interface ProofStat {
  value: string;
  label: string;
}

export default function ProofStats({ items }: { items: ProofStat[] }) {
  return (
    <Stagger
      className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2] sm:grid-cols-3"
      stagger={0.09}
    >
      {items.map((stat) => (
        <StaggerItem key={stat.label} className="h-full bg-white">
          <article className="flex h-full flex-col p-8 lg:p-10">
            <span className="font-heading text-[clamp(2.3rem,4.6vw,3.2rem)] font-800 leading-none tracking-tight text-primary-600">
              {stat.value}
            </span>
            <p className="mt-4 text-[15px] leading-snug text-ink">{stat.label}</p>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
