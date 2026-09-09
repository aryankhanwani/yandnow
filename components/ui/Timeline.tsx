import { cn } from "@/lib/utils";

/* ============================================================
   Timeline - the five-stage Y&Now journey.

   These steps are a genuine sequence, so they are the one place
   on the site that carries index numbers. Everywhere else the
   numbering was decoration pretending to be structure.

   The connector is the information here, which decides the
   responsive behaviour: vertical below lg with the line running
   down the left gutter through the markers, horizontal at lg
   with the line running through them. Never a scroller - a
   scroller hides the connection that is the whole point.

   The line is drawn with CSS on the list itself, so there is no
   SVG to re-scale per breakpoint.
   ============================================================ */

export interface TimelineStep {
  /** One word. */
  label: string;
  /** Eight words maximum. */
  line: string;
}

export default function Timeline({
  steps,
  className,
}: {
  steps: TimelineStep[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        /* Vertical rail: sits under the 40px marker column, from the
           first marker's centre to the last one's. */
        "relative grid gap-8",
        "before:absolute before:left-5 before:top-5 before:bottom-5 before:w-px before:bg-hairline",
        /* Horizontal rail at lg, running through the marker row. */
        "lg:grid-flow-col lg:auto-cols-fr lg:gap-6",
        "lg:before:left-5 lg:before:right-5 lg:before:top-5 lg:before:bottom-auto lg:before:h-px lg:before:w-auto",
        className,
      )}
    >
      {steps.map((step, index) => (
        <li key={step.label} className="relative grid grid-cols-[2.5rem_1fr] gap-4 lg:block">
          <span
            aria-hidden
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-body-sm font-700 text-white"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="lg:mt-6">
            <h3 className="text-h4 text-ink">{step.label}</h3>
            <p className="mt-2 measure text-body-sm text-ink-muted">{step.line}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
