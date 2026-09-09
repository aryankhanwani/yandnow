import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/motion-primitives";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   FAQ - "Questions About Y&Now" from the Final Copy Deck.

   Four short answers, in the deck's own words. This block is
   also mirrored as FAQPage structured data on the homepage, so
   the two must be kept in sync: edit both, or neither.
   ============================================================ */

export const HOME_FAQS: FaqItemData[] = [
  {
    q: "What does Y&Now do?",
    a: "We design practical learning programmes for organisations and learners.",
  },
  {
    q: "Who is Y&Now for?",
    a: "We work with corporate teams, CSR partners, industry groups, defence partners, schools, and individual learners.",
  },
  {
    q: "How does Y&Now work?",
    a: "We follow a simple loop: assess, learn, apply, perform, improve, and return.",
  },
  {
    q: "Does Y&Now offer a platform?",
    a: "Yes. The platform connects digital learning, assessments, and performance reviews in one system.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="faq-heading"
              eyebrow="Questions & Answers"
              title="Questions about"
              highlight="Y&Now"
              subtitle="Tell us what you are trying to improve and we will point you to the right route."
              align="left"
            />
            <Reveal delay={0.2} className="mt-7">
              <CtaButton href="/contact-us" id="faq-cta" variant="primary" className="px-6 py-3">
                Talk to Y&Now
              </CtaButton>
            </Reveal>
          </div>

          <FaqAccordion items={HOME_FAQS} />
        </div>
      </Container>
    </section>
  );
}
