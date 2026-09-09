import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";

/* ============================================================
   FAQ - "Questions About Y&Now" from the Final Copy Deck.

   Four questions, all closed by default. The "Questions &
   Answers" eyebrow above the heading is gone - the heading says
   it - and so is the "Talk to Y&Now" button that used to sit
   beside it, which was the fourth of five identical CTAs on the
   homepage.

   This block is mirrored as FAQPage structured data on the
   homepage, so the two must be kept in sync: edit both, or
   neither.
   ============================================================ */

export const HOME_FAQS: FaqItemData[] = [
  {
    q: "What does Y&Now do?",
    a: "We design practical learning programmes for organisations and learners.",
  },
  {
    q: "Who is Y&Now for?",
    a: "Corporate teams, CSR partners, industry groups, defence partners, schools, and individual learners.",
  },
  {
    q: "How does Y&Now work?",
    a: "A simple loop: assess, learn, apply, perform, improve, and return.",
  },
  {
    q: "Does Y&Now offer a platform?",
    a: "Yes. It connects digital learning, assessments, and performance reviews in one system.",
  },
];

export default function FaqSection() {
  return (
    <Section id="faq" aria-labelledby="faq-heading" bg="surface">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading id="faq-heading" title="Questions about" highlight="Y&Now" />
        <FaqAccordion items={HOME_FAQS} />
      </div>
    </Section>
  );
}
