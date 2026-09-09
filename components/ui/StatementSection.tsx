import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

/* ============================================================
   StatementSection - a copy-deck heading and its paragraph, and
   nothing else.

   Several deck sections are exactly that: one heading, one short
   paragraph, no list and no image. Giving them cards or a photo
   invents structure the deck does not have, so this component
   sets them as plain type. One statement centres; two sit side
   by side, which keeps a pair of short paragraphs from reading
   as two thin bands.
   ============================================================ */

export interface Statement {
  /** The deck's heading, minus the accented tail. */
  title: string;
  /** Accented closing words of the heading. */
  highlight?: string;
  body: string;
}

export default function StatementSection({
  items,
  className = "bg-white",
}: {
  items: Statement[];
  className?: string;
}) {
  const isPair = items.length > 1;

  return (
    <section className={cn("py-20 lg:py-24", className)}>
      <Container>
        <div
          className={cn(
            isPair
              ? "grid gap-12 lg:grid-cols-2 lg:gap-16"
              : "mx-auto max-w-3xl text-center",
          )}
        >
          {items.map((item) => (
            <SectionHeading
              key={item.title}
              title={item.title}
              highlight={item.highlight}
              subtitle={item.body}
              align={isPair ? "left" : "center"}
              titleClassName="text-[clamp(1.5rem,2.6vw,2.1rem)]"
              subtitleClassName={isPair ? "max-w-lg" : "max-w-2xl"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
