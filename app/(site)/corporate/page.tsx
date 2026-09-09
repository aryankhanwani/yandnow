import type { Metadata } from "next";
import SolutionPage, { type SolutionPageData } from "@/components/sections/SolutionPage";
import { CASE_STUDIES } from "@/lib/proof";

/* ============================================================
   CORPORATE TRAINING - Final Copy Deck, "CORPORATE TRAINING".

   The deck's sections, in the deck's order, on the shared
   template: What We Support - Start With the Work - How Learning
   Is Delivered - Corporate Work in Practice - Best For - the
   closing question.

   Two things that were on this page are deliberately not here:

     • the "Manufacturing & Precision Engineering" eyebrow and
       its manufacturing paragraph, which sat above a heading
       about general corporate training. They arrived as the
       *default props* of the section component and belonged to
       /industry-solutions, where that copy still lives.
     • "From Assessment to Performance" as a standalone
       paragraph. Its three sentences are the one line under Start
       With the Work, which says the same thing in a fifth of the
       words - and the sentence that used to sit there said only
       what the heading above it already said.
   ============================================================ */

export const metadata: Metadata = {
  title: "Corporate Training | Learning That Helps Teams Perform Better",
  description:
    "Y&Now helps organisations strengthen workforce performance through practical learning across leadership, operations, customer experience, digital adoption, and role-specific skills.",
};

const data: SolutionPageData = {
  hero: {
    title: "Learning that helps teams",
    highlight: "perform better",
    deck: "Practical, role-specific training built around the work your people actually do.",
    ctaLabel: "Design a programme",
    ctaHref: "/contact-us?type=corporate",
    image: "/images/solutions-navbar/corporate-training.jpg",
    imageAlt: "A facilitator leading a workplace training session with a corporate team",
  },
  cover: {
    title: "What we",
    highlight: "support",
    items: [
      "Leadership and people development",
      "Operational and role-based training",
      "Customer and sales training",
      "Digital adoption and workplace skills",
      "Role-based assessment and skill-gap mapping",
      "Performance-linked learning",
    ],
  },
  /* The deck's opening paragraph carried a four-item list inside a
     single sentence ("job requirements, current skill gaps, business
     priorities, and the workplace outcome"). It is a list, so it is
     set as one. */
  split: {
    title: "Start with",
    highlight: "the work",
    deck: "Assessment finds the gaps; manager feedback shows what carried over.",
    items: [
      "Job requirements",
      "Current skill gaps",
      "Business priorities",
      "The workplace outcome to improve",
    ],
    image: "/images/corporate/delivery-model/train.jpg",
    imageAlt: "A facilitator working through a practical exercise with a workplace team",
  },
  formats: {
    title: "How learning is",
    highlight: "delivered",
    items: ["Instructor-led", "Virtual", "Blended", "Digital", "Self-paced"],
    note: "With microlearning, scenarios, practical exercises, or simulation where relevant.",
  },
  proof: {
    title: "Corporate work in",
    highlight: "practice",
    items: CASE_STUDIES.map(({ client, work }) => ({ client, work })),
  },
  bestFor: [
    "Individuals building a specific skill",
    "Teams improving a shared area",
    "Business units with a capability gap",
    "Enterprises scaling workforce learning",
  ],
  cta: {
    title: "Ready to discuss your workforce",
    highlight: "need?",
    line: "Tell us the roles, the group, or the business priority.",
    ctaLabel: "Design a programme",
    ctaHref: "/contact-us?type=corporate",
  },
};

export default function CorporatePage() {
  return <SolutionPage data={data} />;
}
