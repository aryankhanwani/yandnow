import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/motion-primitives";

interface EditorialProofSectionProps {
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  image: string;
  imageAlt: string;
  note: string;
}

export default function EditorialProofSection({
  eyebrow,
  title,
  highlight,
  body,
  image,
  imageAlt,
  note,
}: EditorialProofSectionProps) {
  return (
    <section className="border-b border-neutral-100 bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-lg">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              highlight={highlight}
              subtitle={body}
              align="left"
            />
            <Reveal delay={0.14} y={12} className="mt-6">
              <span className="inline-flex rounded-full border border-primary-100 bg-primary-50/60 px-3 py-1.5 text-xs font-600 text-primary-700">
                {note}
              </span>
            </Reveal>
          </div>

          <Reveal y={20} className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#e1e7ef] bg-surface shadow-[0_24px_60px_-34px_rgba(20,21,46,0.4)]">
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
