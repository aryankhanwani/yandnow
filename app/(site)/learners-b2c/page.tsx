import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import BestFor from "@/components/ui/BestFor";
import ClosingCta from "@/components/ui/ClosingCta";
import DataPoint from "@/components/ui/DataPoint";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   FOR LEARNERS - Final Copy Deck, "FOR LEARNERS", in the deck's
   order and under its own headings.
   ============================================================ */

export const metadata: Metadata = {
  title: "For Learners | Learn Skills. Build Your Next Step.",
  description:
    "Practical, industry-relevant learning for entering the workforce, changing roles, building new skills, or exploring a new direction.",
};

/* The course catalogue is not on the site yet, so every "find a
   course" route goes through the enquiry form. Point these at the
   catalogue once it exists. */
const COURSE_ENQUIRY = "/contact-us?type=learner";

const EXPECTATIONS: HorizontalCapability[] = [
  {
    icon: "Wrench",
    tint: "46,49,146",
    title: "Practical, industry-relevant learning",
    body: "What you practise is what the work will ask of you.",
  },
  {
    icon: "ClipboardCheck",
    tint: "39,170,226",
    title: "Assessment and feedback where needed",
    body: "You find out where you stand and what to work on next.",
  },
  {
    icon: "Laptop",
    tint: "31,34,103",
    title: "Digital and blended learning where available",
    body: "Where the programme you choose offers it.",
  },
  {
    icon: "Briefcase",
    tint: "32,180,232",
    title: "Placement or employer connections",
    body: "Where the agreed programme includes them.",
  },
];

const BEST_FOR = [
  "Students and early-career learners",
  "Professionals building a new skill",
  "People changing roles or industries",
  "Learners looking for practical, industry-relevant pathways",
];

export default function LearnersB2cPage() {
  return (
    <>
      <PageHero
        eyebrow="For Learners"
        title="Learn Skills. Build Your"
        highlight="Next Step."
        subtitle="Practical, industry-relevant learning for entering the workforce, changing roles, or building new skills."
      >
        <CtaButton href={COURSE_ENQUIRY} variant="primary" className="px-7 py-3.5">
          Find a course
        </CtaButton>
      </PageHero>

      <EditorialProofSection
        title="Choose Learning Around Your"
        highlight="Goal"
        body="Whether you are entering the workforce, changing roles, or building a new skill, start with what you want to achieve. Courses combine highly organised learning, practical application, and assessment depending on the programme."
        image="/images/learners/proof/practical-employability-training.jpg"
        imageAlt="Learners completing a practical technical task with an industry mentor"
      />

      <HorizontalCapabilityScroller
        items={EXPECTATIONS}
        title="What You Can"
        highlight="Expect"
      />

      <BestFor items={BEST_FOR} className="bg-surface" />

      <DataPoint
        value="57/100"
        statement="the job-readiness confidence reported among students in India."
        source="NIIT India Skills Gap Report 2026"
      />

      <ClosingCta
        title="Find Your"
        highlight="Course"
        body="Explore the current course catalogue and choose the learning route that fits your next step."
      >
        <CtaButton href={COURSE_ENQUIRY} variant="primary" className="px-7 py-3.5">
          Find a course
        </CtaButton>
        <CtaButton href="/contact-us?type=learner" variant="secondary" className="px-7 py-3.5">
          Explore learning programmes
        </CtaButton>
      </ClosingCta>
    </>
  );
}
