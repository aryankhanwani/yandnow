import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   ClosingCta - the block every solution page ends on in the copy
   deck: a question, the line that answers it, and the deck's own
   button label. Nothing is added to it here.
   ============================================================ */

export default function ClosingCta({
  title,
  highlight,
  body,
  children,
  className = "bg-surface",
}: {
  title: string;
  highlight?: string;
  body?: string;
  /** The deck's buttons - pass <CtaButton> children. */
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-20 lg:py-24", className)}>
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <SectionHeading
            title={title}
            highlight={highlight}
            subtitle={body}
            titleClassName="text-[clamp(1.6rem,2.9vw,2.3rem)]"
          />
          <Reveal delay={0.2} y={14} className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
