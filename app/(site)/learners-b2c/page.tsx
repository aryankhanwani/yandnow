import type { Metadata } from "next";
import SolutionPage, { type SolutionPageData } from "@/components/sections/SolutionPage";

/* ============================================================
   FOR LEARNERS - Final Copy Deck, "FOR LEARNERS", on the shared
   template.

   The course catalogue is not on the site yet, so every "find a
   course" route goes through the enquiry form. Point these at
   the catalogue once it exists.

   The page used to close on two buttons that went to the same
   place with different labels; it now closes on one.
   ============================================================ */

export const metadata: Metadata = {
  title: "For Learners | Learn Skills. Build Your Next Step.",
  description:
    "Practical, industry-relevant learning for entering the workforce, changing roles, building new skills, or exploring a new direction.",
};

const COURSE_ENQUIRY = "/contact-us?type=learner";

const data: SolutionPageData = {
  hero: {
    title: "Learn skills. Build your",
    highlight: "next step.",
    deck: "Practical learning for entering the workforce, changing roles, or building a new skill.",
    ctaLabel: "Find a course",
    ctaHref: COURSE_ENQUIRY,
    image: "/images/solutions-navbar/for-learners.jpg",
    imageAlt: "A learner completing a practical technical exercise",
  },
  cover: {
    title: "What you can",
    highlight: "expect",
    items: [
      "Practical, industry-relevant learning",
      "Assessment and feedback where needed",
      "Digital and blended learning where available",
      "Placement or employer connections",
    ],
  },
  split: {
    title: "Choose learning around your",
    highlight: "goal",
    deck: "Start with what you want to achieve, then pick the route.",
    items: [
      "Entering the workforce",
      "Changing roles or industries",
      "Building a new skill",
      "Practical application and assessment",
    ],
    image: "/images/learners/proof/practical-employability-training.jpg",
    imageAlt: "Learners completing a practical technical task with an industry mentor",
  },
  stats: {
    items: [{ value: "57/100", label: "Student job-readiness confidence" }],
    caption: "NIIT India Skills Gap Report 2026.",
  },
  bestFor: [
    "Students and early-career learners",
    "Professionals building a new skill",
    "People changing roles or industries",
    "Learners looking for practical pathways",
  ],
  cta: {
    title: "Find your",
    highlight: "course",
    line: "Tell us the next step you are working towards.",
    ctaLabel: "Find a course",
    ctaHref: COURSE_ENQUIRY,
  },
};

export default function LearnersB2cPage() {
  return <SolutionPage data={data} />;
}
