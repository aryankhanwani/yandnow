import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

interface EditorialProofSectionProps {
  /** Optional: deck sections that are just a heading omit it. */
  eyebrow?: string;
  title: string;
  highlight?: string;
  body: string;
  image: string;
  imageAlt: string;
  /** Optional pill under the copy. Omitted where the deck has no such line. */
  note?: string;
  /** Set to put the photograph on the left on desktop. Pages alternate
      this so two stacked split sections do not mirror each other. */
  imageFirst?: boolean;
  className?: string;
}

export default function EditorialProofSection({
  eyebrow,
  title,
  highlight,
  body,
  image,
  imageAlt,
  note,
  imageFirst = false,
  className = "bg-white",
}: EditorialProofSectionProps) {
  return (
    <section className={cn("border-b border-neutral-100 py-20 lg:py-28", className)}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-16",
            /* The photograph always takes the wider column, whichever
               side it sits on. */
            imageFirst ? "lg:grid-cols-[1.28fr_0.72fr]" : "lg:grid-cols-[0.72fr_1.28fr]",
          )}
        >
          <div className={cn("max-w-lg", imageFirst ? "lg:order-2" : "lg:order-1")}>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              highlight={highlight}
              subtitle={body}
              align="left"
            />
            {note && (
              <Reveal delay={0.14} y={12} className="mt-6">
                <span className="inline-flex rounded-full border border-primary-100 bg-primary-50/60 px-3 py-1.5 text-xs font-600 text-primary-700">
                  {note}
                </span>
              </Reveal>
            )}
          </div>

          <Reveal
            y={20}
            className={cn(
              "relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#e1e7ef] bg-surface shadow-[0_24px_60px_-34px_rgba(20,21,46,0.4)]",
              imageFirst ? "lg:order-1" : "lg:order-2",
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
