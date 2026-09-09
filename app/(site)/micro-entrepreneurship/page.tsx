import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import StatementSection from "@/components/ui/StatementSection";
import BestFor from "@/components/ui/BestFor";
import ClosingCta from "@/components/ui/ClosingCta";
import { CtaButton } from "@/components/ui/CtaButton";

/* ============================================================
   MICRO-ENTREPRENEURSHIP - Final Copy Deck,
   "MICRO-ENTREPRENEURSHIP", in the deck's order and under its
   own headings.
   ============================================================ */

export const metadata: Metadata = {
  title: "Micro-Entrepreneurship | Skills for Livelihoods and Small Businesses",
  description:
    "Y&Now supports practical learning for people developing livelihood opportunities, small-business skills, and pathways to self-employment.",
};

const COVERS: HorizontalCapability[] = [
  {
    icon: "Sprout",
    tint: "46,49,146",
    title: "Entrepreneurship and livelihood skills",
    body: "What it takes to start an opportunity, and what it costs.",
  },
  {
    icon: "Briefcase",
    tint: "39,170,226",
    title: "Practical business skills",
    body: "Planning, costing, pricing, and everyday business decisions.",
  },
  {
    icon: "FileCheck",
    tint: "31,34,103",
    title: "Financial and workplace basics",
    body: "Record-keeping, financial habits, and basic working practices.",
  },
  {
    icon: "Laptop",
    tint: "32,180,232",
    title: "Digital skills for work and enterprise",
    body: "The tools people use to sell, take payments, and keep records.",
  },
  {
    icon: "Store",
    tint: "46,49,146",
    title: "Customer and market-facing skills",
    body: "Who the customer is, what they want, and how to reach them.",
  },
  {
    icon: "ClipboardCheck",
    tint: "39,170,226",
    title: "Assessment and methodical learning",
    body: "A structured path with assessment along the way.",
  },
];

const BEST_FOR = [
  "Self-Help Group facilitators",
  "Livelihood programme managers",
  "Partners working on income generation or market linkage",
];

export default function MicroEntrepreneurshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Micro-Entrepreneurship"
        title="Skills for Livelihoods and"
        highlight="Small Businesses"
        subtitle="Practical learning for livelihoods, small-business skills, and self-employment."
      >
        <CtaButton href="/contact-us?type=livelihood" variant="primary" className="px-7 py-3.5">
          Discuss a livelihood programme
        </CtaButton>
      </PageHero>

      <HorizontalCapabilityScroller
        items={COVERS}
        title="What the Learning"
        highlight="Covers"
      />

      <StatementSection
        items={[
          {
            title: "Learning That Can Be Put to",
            highlight: "Work",
            body: "Entrepreneurship learning helps participants understand how an opportunity works in practice. Programmes focus on planning, customer needs, basic business operations, digital tools, and everyday business decisions.",
          },
        ]}
      />

      <EditorialProofSection
        title="From Learning to"
        highlight="Livelihood"
        body="Where included in the programme, learning connects with practical activities that help participants apply business, digital, and customer-facing skills in a real setting."
        image="/images/micro-entrepreneurship/proof/women-enterprise-market-linkage.jpg"
        imageAlt="Women entrepreneurs reviewing packaged products and market information together"
      />

      <BestFor items={BEST_FOR} className="bg-surface" />

      <ClosingCta title="Discuss a Livelihood" highlight="Programme" className="bg-white">
        <CtaButton href="/contact-us?type=livelihood" variant="primary" className="px-7 py-3.5">
          Discuss a livelihood programme
        </CtaButton>
      </ClosingCta>
    </>
  );
}
