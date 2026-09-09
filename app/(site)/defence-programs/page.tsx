import type { Metadata } from "next";
import SolutionPage, { type SolutionPageData } from "@/components/sections/SolutionPage";

/* ============================================================
   DEFENCE PROGRAMMES - Final Copy Deck, "DEFENCE PROGRAMMES",
   on the shared template.

   "Make Existing Experience Work in a New Context" and "For
   Defence and Institutional Partners" were two paragraphs saying
   the same thing from either side. The first is the split's
   heading; the second's substance - that programmes are designed
   around the requirement agreed at the start - is the closing
   line.
   ============================================================ */

export const metadata: Metadata = {
  title: "Defence Programmes | Experience That Moves Forward",
  description:
    "Y&Now supports veteran transition and in-service upskilling through learning that connects existing service experience with civilian workplace requirements.",
};

const data: SolutionPageData = {
  hero: {
    title: "Experience that moves",
    highlight: "forward",
    deck: "Veteran transition and in-service upskilling, built on experience people already have.",
    ctaLabel: "Explore programmes",
    ctaHref: "/contact-us?type=defence",
    image: "/images/solutions-navbar/defence-programs.jpg",
    imageAlt: "Veterans in a civilian career-readiness session",
  },
  cover: {
    title: "Programme",
    highlight: "focus",
    items: [
      "Civilian career readiness",
      "Role-aligned upskilling",
      "Employability skills",
      "Industry exposure",
      "Employer linkage",
    ],
  },
  split: {
    title: "Experience, in a new",
    highlight: "context",
    deck: "Service brings discipline, leadership, and role-specific strength.",
    items: [
      "Understand existing experience",
      "Identify the target role",
      "Map the gaps",
      "Focus learning on what matters",
      "Support employment pathways, where included",
    ],
    image: "/images/defence/proof/veteran-transition-training.jpg",
    imageAlt: "Veterans working with an instructor during civilian technical training",
  },
  bestFor: [
    "Defence establishments",
    "Public sector human resources teams",
    "Institutional partners",
    "Veterans preparing their next step",
  ],
  cta: {
    title: "Explore defence",
    highlight: "programmes",
    line: "Programmes are designed around the requirement agreed at the start.",
    ctaLabel: "Explore programmes",
    ctaHref: "/contact-us?type=defence",
  },
};

export default function DefenceProgramsPage() {
  return <SolutionPage data={data} />;
}
