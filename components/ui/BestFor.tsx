import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   BestFor - the copy deck's "Best For" block.

   A short list of who a programme is for. The deck gives these
   as bare noun phrases with no explanation, so they are set as
   bare noun phrases: a hairline-divided row of names, nothing
   underneath them.
   ============================================================ */

export default function BestFor({
  items,
  className = "bg-white",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <section aria-labelledby="best-for-heading" className={cn("py-20 lg:py-24", className)}>
      <Container>
        <SectionHeading
          id="best-for-heading"
          title="Best"
          highlight="For"
          className="mb-10"
        />
        <Stagger
          className="mx-auto grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2] sm:grid-cols-2"
          stagger={0.06}
        >
          {items.map((item, index) => (
            <StaggerItem
              key={item}
              className={cn(
                "h-full bg-white",
                /* An odd count would otherwise leave a grey half-cell. */
                items.length % 2 === 1 && index === items.length - 1 && "sm:col-span-2",
              )}
            >
              <div className="flex h-full items-center gap-3.5 px-7 py-6">
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-secondary-500" />
                <span className="text-[15px] font-500 leading-snug text-ink">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
