import type { Metadata } from "next";
import SolutionPage, { type SolutionPageData } from "@/components/sections/SolutionPage";

/* ============================================================
   MICRO-ENTREPRENEURSHIP - Final Copy Deck,
   "MICRO-ENTREPRENEURSHIP", on the shared template.

   "Learning That Can Be Put to Work" listed five things inside
   one sentence (planning, customer needs, business operations,
   digital tools, everyday decisions). Those five are the split's
   list.
   ============================================================ */

export const metadata: Metadata = {
  title: "Micro-Entrepreneurship | Skills for Livelihoods and Small Businesses",
  description:
    "Y&Now supports practical learning for people developing livelihood opportunities, small-business skills, and pathways to self-employment.",
};

const data: SolutionPageData = {
  hero: {
    title: "Skills for livelihoods and small",
    highlight: "businesses",
    deck: "Practical learning for small-business skills and self-employment.",
    ctaLabel: "Discuss a programme",
    ctaHref: "/contact-us?type=livelihood",
    image: "/images/solutions-navbar/micro-entrepreneurship.jpg",
    imageAlt: "A small-business owner working at their market stall",
  },
  cover: {
    title: "What the learning",
    highlight: "covers",
    items: [
      "Entrepreneurship and livelihood skills",
      "Practical business skills",
      "Financial and workplace basics",
      "Digital skills for work and enterprise",
      "Customer and market-facing skills",
      "Assessment and methodical learning",
    ],
  },
  split: {
    title: "Learning that can be put to",
    highlight: "work",
    deck: "How an opportunity actually works, in practice.",
    items: [
      "Planning",
      "Customer needs",
      "Basic business operations",
      "Digital tools",
      "Everyday business decisions",
    ],
    image: "/images/micro-entrepreneurship/proof/women-enterprise-market-linkage.jpg",
    imageAlt: "Women entrepreneurs reviewing packaged products and market information together",
  },
  bestFor: [
    "Self-Help Group facilitators",
    "Livelihood programme managers",
    "Partners working on income generation",
  ],
  cta: {
    title: "Discuss a livelihood",
    highlight: "programme",
    line: "Learning connects to practical activity where the programme includes it.",
    ctaLabel: "Discuss a programme",
    ctaHref: "/contact-us?type=livelihood",
  },
};

export default function MicroEntrepreneurshipPage() {
  return <SolutionPage data={data} />;
}
