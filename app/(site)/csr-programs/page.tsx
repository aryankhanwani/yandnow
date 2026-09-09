import type { Metadata } from "next";
import SolutionPage, { type SolutionPageData } from "@/components/sections/SolutionPage";

/* ============================================================
   CSR PROGRAMMES - Final Copy Deck, "CORPORATE SOCIAL
   RESPONSIBILITY PROGRAMMES", on the shared template.

   The deck's "One Supporting Data Point" heading is empty for
   this page, so the stat band is omitted rather than filled -
   the 4.2% vocational training figure is still held back for
   verification.

   "Why This Matters for Communities" is not a separate paragraph
   any more; its four requirements (relevance, participation,
   follow-through, a clear view of what changed) are the deck of
   the reporting split, where they are the point being made.
   ============================================================ */

export const metadata: Metadata = {
  title: "CSR Programmes | Practical Programmes for Communities and Livelihoods",
  description:
    "Y&Now works with corporations, foundations, and institutions to design and deliver skill development, livelihood, and community programmes with clear delivery plans and reporting.",
};

const data: SolutionPageData = {
  hero: {
    title: "Programmes for communities and",
    highlight: "livelihoods",
    deck: "Skill development, livelihood, and community programmes you can report on.",
    ctaLabel: "Partner with us",
    ctaHref: "/contact-us?type=csr",
    image: "/images/solutions-navbar/csr-programs.jpg",
    imageAlt: "Participants in a community skill development programme",
  },
  cover: {
    title: "What we",
    highlight: "support",
    items: [
      "Skill development and employability",
      "Livelihood and entrepreneurship",
      "Community development",
      "Veteran transition",
      "Participant assessment and tracking",
      "Employment or livelihood linkage",
    ],
  },
  split: {
    title: "From community need to",
    highlight: "delivery",
    deck: "A defined community, a clear need, an agreed outcome.",
    items: [
      "Needs assessment",
      "Programme design",
      "Participant mobilisation",
      "Learning delivery",
      "Assessment and monitoring",
      "Reporting to the agreed scope",
    ],
    image: "/images/csr/delivery-model/needs-assessment.jpg",
    imageAlt: "Facilitators mapping a community need with local partners",
  },
  formats: {
    title: "Reporting that shows",
    highlight: "progress",
    items: [
      "Participation records",
      "Beneficiary information",
      "Attendance",
      "Assessment results",
      "Progress updates",
      "Photographic evidence",
    ],
    note: "Outcome reporting is included where the agreed programme covers it.",
  },
  bestFor: [
    "Corporate Social Responsibility teams",
    "Foundations",
    "Corporate sponsors",
    "Institutions planning skilling programmes",
  ],
  cta: {
    title: "Build a programme around your",
    highlight: "priorities",
    line: "Tell us the community, the geography, and the outcome.",
    ctaLabel: "Partner with us",
    ctaHref: "/contact-us?type=csr",
  },
};

export default function CsrProgramsPage() {
  return <SolutionPage data={data} />;
}
