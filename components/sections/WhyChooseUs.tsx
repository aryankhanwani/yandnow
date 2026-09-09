import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

/* ============================================================
   WHY CHOOSE US - Copy deck, Home.

   The five claims the deck lists, exactly as it lists them: five
   short lines, no supporting sentences and no icon tiles. The
   heading sits across the top so the list and the photograph
   start on the same line, which is what keeps the band reading
   as one block rather than as two columns of different lengths.
   ============================================================ */

const REASONS = [
  "Industry-aligned programmes",
  "Role-based assessment",
  "Practical and blended learning",
  "Learning designed around workplace requirements",
  "Digital learning and performance tools",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <Container className="relative">
        <SectionHeading
          id="why-choose-us-heading"
          eyebrow="Why Choose Us"
          title="What you can expect from every"
          highlight="programme"
          align="left"
          className="mb-12 lg:mb-14"
        />

        {/* Image and list share a row from lg, so the first pointer lines
            up with the top of the photograph rather than with the heading.
            Below lg the photograph sits above the list rather than being
            dropped - a phone was getting the list with no image at all. */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <Reveal y={22} delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#e1e7ef]">
              <Image
                src="/images/corporate/delivery-model/apply.jpg"
                alt="A trainer guiding an operator through a task at the machine"
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Stagger className="border-t border-[#e8ecf2]" stagger={0.07}>
            {REASONS.map((reason, index) => (
              <StaggerItem key={reason} className="border-b border-[#e8ecf2]">
                {/* Hover: a tinted panel wipes in from the left and carries
                    the whole row a few pixels with it, so the row you are
                    pointing at lifts out of the list rather than just
                    changing colour. */}
                <div className="group relative isolate overflow-hidden py-5 lg:py-6">
                  <span
                    aria-hidden
                    className="absolute inset-y-1 left-0 -z-10 w-full origin-left scale-x-0 rounded-2xl bg-gradient-to-r from-primary-50 via-primary-50/60 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />

                  <div className="flex items-baseline gap-5 transition-transform duration-500 ease-out group-hover:translate-x-3 lg:gap-7">
                    <span className="flex-none font-heading text-[13px] font-800 tabular-nums tracking-[0.1em] text-neutral-300 transition-colors duration-500 group-hover:text-primary-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="balance-text min-w-0 font-heading text-[17px] font-700 leading-snug text-ink lg:text-[19px]">
                      {reason}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
