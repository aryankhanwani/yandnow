import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

/* ============================================================
   ChecklistPanel - a plain "here is exactly what you get" list
   paired with a photograph.

   Used where the copy deck lists deliverables rather than ideas
   (reporting packs, what a course includes). A list of short
   noun phrases beside one image reads far faster than the same
   items written out as prose.
   ============================================================ */
interface ChecklistPanelProps {
  /** Optional: deck sections that are just a heading omit it. */
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  items: string[];
  image: string;
  imageAlt: string;
  /** Set to reverse the column order on desktop. */
  imageFirst?: boolean;
  className?: string;
}

export default function ChecklistPanel({
  eyebrow,
  title,
  highlight,
  subtitle,
  items,
  image,
  imageAlt,
  imageFirst = false,
  className = "bg-white",
}: ChecklistPanelProps) {
  return (
    <section className={`py-20 lg:py-28 ${className}`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal
            y={20}
            className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#e1e7ef] bg-surface ${
              imageFirst ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </Reveal>

          <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              highlight={highlight}
              subtitle={subtitle}
              align="left"
            />
            <Stagger className="mt-8 space-y-3.5" stagger={0.05}>
              {items.map((item) => (
                <StaggerItem key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-neutral-700">{item}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
