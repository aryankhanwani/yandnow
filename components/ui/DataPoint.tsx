import Container from "@/components/ui/Container";
import { Reveal } from "@/components/ui/motion-primitives";

/* ============================================================
   DataPoint - the copy deck's "One Supporting Data Point" block.

   One published figure, stated plainly, with the report it came
   from underneath it. Deliberately a single quiet band rather
   than a stat grid: these pages have exactly one figure worth
   showing, and a grid of one reads as a missing grid.
   ============================================================ */
interface DataPointProps {
  /** The headline figure, e.g. "0.97%". Optional - some points are prose. */
  value?: string;
  statement: string;
  source: string;
  className?: string;
}

export default function DataPoint({
  value,
  statement,
  source,
  className = "bg-white",
}: DataPointProps) {
  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      <Container>
        <Reveal
          y={16}
          className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-[#e8ecf2] bg-surface p-8 text-center lg:p-12"
        >
          {value && (
            <span className="mb-4 font-heading text-[clamp(2.4rem,5vw,3.4rem)] font-800 leading-none tracking-tight text-primary-600">
              {value}
            </span>
          )}
          <p className="font-heading text-[clamp(1.1rem,2.1vw,1.5rem)] font-600 leading-snug tracking-tight text-ink">
            {statement}
          </p>
          <p className="mt-4 text-xs text-neutral-500">{source}</p>
        </Reveal>
      </Container>
    </section>
  );
}
