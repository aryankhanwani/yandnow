import type { Metadata } from "next";
import SolutionPage, { type SolutionPageData } from "@/components/sections/SolutionPage";

/* ============================================================
   SCHOOL SOLUTIONS - Final Copy Deck, "SCHOOL SOLUTIONS", on the
   shared template.
   ============================================================ */

export const metadata: Metadata = {
  title: "School Solutions | Practical Skills for What Comes Next",
  description:
    "Y&Now helps schools build applied skills that prepare students for further education, workplace entry, and changing industry needs.",
};

const data: SolutionPageData = {
  hero: {
    title: "Practical skills for what",
    highlight: "comes next",
    deck: "Applied skills that prepare students for further education and workplace entry.",
    ctaLabel: "Enquire about schools",
    ctaHref: "/contact-us?type=schools",
    image: "/images/solutions-navbar/school-solutions.jpg",
    imageAlt: "School students working through a practical applied-skills task",
  },
  cover: {
    title: "What we",
    highlight: "support",
    items: [
      "Vocational and applied skills",
      "Industry exposure",
      "Teacher and facilitator support",
      "Assessment and certification where applicable",
    ],
  },
  split: {
    title: "Learning beyond the",
    highlight: "classroom",
    deck: "Students learn faster when they see how a skill is used.",
    items: [
      "Classroom learning",
      "Practical application",
      "Assessment",
      "Exposure to workplace requirements",
    ],
    image: "/images/school/proof/applied-robotics-learning.jpg",
    imageAlt: "School students building a small robot with guidance from their teacher",
  },
  stats: {
    items: [{ value: "0.97%", label: "14-18-year-olds formally skilled" }],
    caption: "Economic Survey 2025-26 coverage.",
  },
  bestFor: [
    "School principals",
    "Education leaders",
    "Institutional partners",
  ],
  cta: {
    title: "Enquire about school",
    highlight: "programmes",
    line: "Programme design adapts to the age group and the intended pathway.",
    ctaLabel: "Enquire about schools",
    ctaHref: "/contact-us?type=schools",
  },
};

export default function SchoolSolutionsPage() {
  return <SolutionPage data={data} />;
}
