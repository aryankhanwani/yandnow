import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ChecklistPanel from "@/components/ui/ChecklistPanel";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import StatementSection from "@/components/ui/StatementSection";
import BestFor from "@/components/ui/BestFor";
import ClosingCta from "@/components/ui/ClosingCta";
import OrganisationGrid from "@/components/ui/OrganisationGrid";
import { CtaButton } from "@/components/ui/CtaButton";
import { CASE_STUDIES } from "@/lib/proof";

/* ============================================================
   CORPORATE TRAINING - Final Copy Deck, "CORPORATE TRAINING".

   Section for section, in the deck's order and under the deck's
   own headings: What We Support - Start With the Work - How
   Learning Is Delivered - From Assessment to Performance - Best
   For - Corporate Work in Practice - the closing question.
   ============================================================ */

export const metadata: Metadata = {
  title: "Corporate Training | Learning That Helps Teams Perform Better",
  description:
    "Y&Now helps organisations strengthen workforce performance through practical learning across leadership, operations, customer experience, digital adoption, and role-specific skills.",
};

const SUPPORT: HorizontalCapability[] = [
  {
    icon: "Users2",
    tint: "46,49,146",
    title: "Leadership and people development",
    body: "First-line managers through to senior teams.",
  },
  {
    icon: "Gauge",
    tint: "39,170,226",
    title: "Operational and role-based training",
    body: "The procedures, standards, and execution a role runs on.",
  },
  {
    icon: "Sparkles",
    tint: "31,34,103",
    title: "Customer and sales training",
    body: "Frontline, showroom, and dealer-facing teams.",
  },
  {
    icon: "Laptop",
    tint: "32,180,232",
    title: "Digital adoption and workplace skills",
    body: "Confidence with the systems you already run.",
  },
  {
    icon: "ClipboardCheck",
    tint: "46,49,146",
    title: "Role-based assessment and skill-gap mapping",
    body: "Current skills mapped against what the role requires.",
  },
  {
    icon: "TrendingUp",
    tint: "39,170,226",
    title: "Performance-linked learning",
    body: "Workplace tasks, manager feedback, and performance measures.",
  },
];

/* The deck's "How Learning Is Delivered" names five formats, then
   qualifies them in a second sentence. The formats are the list; the
   qualifier stays prose. */
const DELIVERY = ["Instructor-led", "Virtual", "Blended", "Digital", "Self-paced"];

const BEST_FOR = [
  "Individuals building a specific professional skill",
  "Teams improving performance in a shared area",
  "Business units addressing a role or capability gap",
  "Enterprises looking for scalable workforce learning",
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Training"
        title="Learning That Helps Teams"
        highlight="Perform Better"
        subtitle="We help organisations strengthen workforce performance through practical, role-specific learning."
      >
        <CtaButton href="/contact-us?type=corporate" variant="primary" className="px-7 py-3.5">
          Design a corporate programme
        </CtaButton>
      </PageHero>

      <HorizontalCapabilityScroller items={SUPPORT} title="What We" highlight="Support" />

      <EditorialProofSection
        title="Start With"
        highlight="the Work"
        body="The right learning programme starts with what people need to do in their roles. We design learning around job requirements, current skill gaps, business priorities, and the workplace outcome the organisation wants to improve."
        image="/images/corporate/delivery-model/train.jpg"
        imageAlt="A facilitator working through a practical exercise with a workplace team"
      />

      <ChecklistPanel
        title="How Learning Is"
        highlight="Delivered"
        subtitle="Depending on the role and programme, we use microlearning, scenario-based activities, practical exercises, or simulation where relevant."
        items={DELIVERY}
        image="/images/corporate/delivery-model/apply.jpg"
        imageAlt="A trainer guiding an operator through a task at the machine"
        imageFirst
        className="bg-surface"
      />

      <StatementSection
        items={[
          {
            title: "From Assessment to",
            highlight: "Performance",
            body: "Role-based assessment identifies learning gaps. Targeted learning addresses those gaps. Workplace tasks, manager feedback, and performance measures help show whether learning is being applied.",
          },
        ]}
      />

      <BestFor items={BEST_FOR} className="bg-surface" />

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <SectionHeading title="Corporate Work in" highlight="Practice" className="mb-12" />
          <OrganisationGrid
            items={CASE_STUDIES.map(({ client, work }) => ({ name: client, note: work }))}
          />
        </Container>
      </section>

      <ClosingCta
        title="Ready to Discuss Your Workforce"
        highlight="Need?"
        body="Tell us the roles, workforce group, or business priority you are working on. We can discuss the learning approach that fits your requirement."
      >
        <CtaButton href="/contact-us?type=corporate" variant="primary" className="px-7 py-3.5">
          Design a corporate programme
        </CtaButton>
      </ClosingCta>
    </>
  );
}
