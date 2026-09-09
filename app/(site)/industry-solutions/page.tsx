import type { Metadata } from "next";
import SolutionPage, { type SolutionPageData } from "@/components/sections/SolutionPage";

/* ============================================================
   INDUSTRY SOLUTIONS - Final Copy Deck, "INDUSTRY SOLUTIONS",
   on the shared template.

   This is where the manufacturing and precision-engineering copy
   belongs, and it is now stated once - as the deck line under
   the split - instead of appearing as a stray eyebrow on
   /corporate as well.
   ============================================================ */

export const metadata: Metadata = {
  title: "Industry Solutions | Learning Built Around the Work",
  description:
    "Y&Now designs workforce learning around the technical, safety, quality, and operational requirements of specific industries and roles.",
};

const data: SolutionPageData = {
  hero: {
    title: "Learning built around",
    highlight: "the work",
    deck: "Designed around the requirements of specific industries and roles.",
    ctaLabel: "Discuss a requirement",
    ctaHref: "/contact-us?type=industry",
    image: "/images/solutions-navbar/industry-solutions.jpg",
    imageAlt: "Plant operators being guided through equipment checks",
  },
  cover: {
    title: "What we",
    highlight: "support",
    items: [
      "Technical and role-based skills",
      "Environment, health and safety",
      "Quality and process improvement",
      "Operational excellence",
      "Role-based assessment and competency tracking",
      "Digital and simulation-based learning",
    ],
  },
  split: {
    title: "Built around the",
    highlight: "workplace",
    deck: "Including manufacturing and precision-engineering environments.",
    items: [
      "The role and its workflow",
      "The tools and conditions on the job",
      "Assessment against role requirements",
      "Training against the identified gaps",
      "Workplace activities, where included",
    ],
    image: "/images/industry/proof/plant-floor-training.jpg",
    imageAlt: "A technical trainer guiding plant operators through a quality inspection",
  },
  formats: {
    title: "Where this",
    highlight: "works",
    items: [
      "Banking and financial services",
      "Construction",
      "Healthcare",
      "Information technology and ITES",
      "Retail",
      "Technical and soft skills",
    ],
    note: "Alongside manufacturing and precision engineering.",
  },
  stats: {
    items: [
      { value: "56.35%", label: "India's employability rate" },
      { value: "57/100", label: "Student job-readiness confidence" },
    ],
    caption:
      "Digital, data, and AI capabilities rank among the most important future skills. India Skills Report 2026 · NIIT India Skills Gap Report 2026.",
  },
  bestFor: [
    "Plant managers",
    "Environment, health and safety leaders",
    "Manufacturing human resources teams",
    "Industrial leaders needing role-based training",
  ],
  cta: {
    title: "Discuss an industry",
    highlight: "requirement",
    line: "Tell us the site, the roles, and the standard you work to.",
    ctaLabel: "Discuss a requirement",
    ctaHref: "/contact-us?type=industry",
  },
};

export default function IndustrySolutionsPage() {
  return <SolutionPage data={data} />;
}
