import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ChecklistPanel from "@/components/ui/ChecklistPanel";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   CSR PROGRAMMES - Final Copy Deck, "CORPORATE SOCIAL
   RESPONSIBILITY PROGRAMMES", in the deck's order and under its
   own headings.

   The deck's "One Supporting Data Point" heading is empty for
   this page, so no figure appears here - the 4.2% vocational
   training figure is held back for verification.
   ============================================================ */

export const metadata: Metadata = {
  title: "CSR Programmes | Practical Programmes for Communities and Livelihoods",
  description:
    "Y&Now works with corporations, foundations, and institutions to design and deliver skill development, livelihood, and community programmes with clear delivery plans and reporting.",
};

const SUPPORT: HorizontalCapability[] = [
  {
    icon: "GraduationCap",
    tint: "46,49,146",
    title: "Skill development and employability",
    body: "Practical training built around the work actually available.",
  },
  {
    icon: "Sprout",
    tint: "39,170,226",
    title: "Livelihood and entrepreneurship",
    body: "Skills for small businesses, self-employment, and local enterprise.",
  },
  {
    icon: "HeartHandshake",
    tint: "31,34,103",
    title: "Community development",
    body: "A defined community, a clear need, an agreed outcome.",
  },
  {
    icon: "ShieldCheck",
    tint: "32,180,232",
    title: "Veteran transition",
    body: "Service experience connected to civilian job requirements.",
  },
  {
    icon: "ClipboardCheck",
    tint: "46,49,146",
    title: "Participant assessment and tracking",
    body: "Assessed against what the programme sets out to build, and tracked through it.",
  },
  {
    icon: "Briefcase",
    tint: "39,170,226",
    title: "Employment or livelihood linkage",
    body: "Employment or livelihood pathways, where the programme includes them.",
  },
];

/* The deck's "From Community Need to Delivery" names what we support
   across the cycle; those are the list, the opening sentence is prose. */
const DELIVERY_CYCLE = [
  "Assessment",
  "Monitoring",
  "Needs assessment",
  "Programme design",
  "Learning delivery",
  "Participant mobilisation",
  "Reporting according to the agreed scope",
];

const REPORTING = [
  "Attendance",
  "Progress updates",
  "Assessment results",
  "Participation records",
  "Photographic evidence",
  "Beneficiary information",
  "Outcome reporting, where included in the agreed programme",
];

export default function CsrProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="CSR Programmes"
        title="Practical Programmes for Communities and"
        highlight="Livelihoods"
        subtitle="We design and deliver skill development, livelihood, and community programmes."
      >
        <CtaButton href="/contact-us?type=csr" variant="primary" className="px-7 py-3.5">
          Partner on a CSR programme
        </CtaButton>
      </PageHero>

      <HorizontalCapabilityScroller
        eyebrow="CSR Programmes"
        items={SUPPORT}
        title="What We"
        highlight="Support"
        subtitle="What a community programme can include, from skilling and livelihoods through assessment, tracking, and linkage."
      />

      <ChecklistPanel
        title="From Community Need to"
        highlight="Delivery"
        subtitle="A strong programme starts with a defined community, a clear need, and an intended outcome."
        items={DELIVERY_CYCLE}
        image="/images/csr/delivery-model/needs-assessment.jpg"
        imageAlt="Facilitators mapping a community need with local partners"
      />

      <ChecklistPanel
        title="Reporting That Shows"
        highlight="Progress"
        items={REPORTING}
        image="/images/csr/delivery-model/impact-measurement-reporting.jpg"
        imageAlt="Programme managers reviewing participant records and progress reports"
        imageFirst
        className="bg-surface"
      />

      <EditorialProofSection
        title="Why This Matters for"
        highlight="Communities"
        body="Community programmes need more than attendance records. They need relevance, participation, follow-through, and a clear view of what changed."
        image="/images/csr/programme-streams/community-development.jpg"
        imageAlt="Community members taking part in a local skilling session"
      />
    </>
  );
}
