import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import HorizontalCapabilityScroller, { type HorizontalCapability } from "@/components/ui/HorizontalCapabilityScroller";
import ImpactStatGrid from "@/components/ui/ImpactStatGrid";
import EditorialProofSection from "@/components/ui/EditorialProofSection";
import { CtaButton } from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Micro-Entrepreneurship & Livelihood Programmes India | Y&Now",
  description:
    "Y&Now designs and delivers micro-entrepreneurship and livelihood programmes for women, SHGs, and marginalised communities, with vocational training, market linkage, and income generation measurement.",
};

const COMPONENTS: HorizontalCapability[] = [
  {
    icon: "GraduationCap",
    tint: "46,49,146",
    title: "Vocational skills training",
    body: "Sector-relevant skills matched to local market demand.",
  },
  {
    icon: "Briefcase",
    tint: "39,170,226",
    title: "Business development",
    body: "Costing, pricing, quality standards, customer acquisition, and record-keeping for micro-enterprise owners.",
  },
  {
    icon: "Store",
    tint: "31,34,103",
    title: "Market linkage",
    body: "Connections to buyers, aggregators, e-commerce platforms, and local trade networks.",
  },
  {
    icon: "Users",
    tint: "32,180,232",
    title: "SHG strengthening",
    body: "Group formation, governance, savings and credit practice, and peer support.",
  },
  {
    icon: "HeartHandshake",
    tint: "46,49,146",
    title: "Mentorship",
    body: "Ongoing support from Y&Now facilitators and sector-expert mentors during and after training.",
  },
];

/* [VERIFY] Impact figures are pending M&E team sign-off - rendered as a neutral
   placeholder ("-"), never fabricated numbers. */
const IMPACT = [
  { title: "Women Trained", sub: "Women completing livelihood and enterprise training" },
  { title: "Income Generation", sub: "Participants reporting income generation within 6 months" },
  { title: "Income Uplift", sub: "Average increase in participant income" },
  { title: "SHGs Strengthened", sub: "Self-help groups strengthened or formed" },
];

const FAQS: FaqItemData[] = [
  {
    q: "Does Y&Now's livelihood programme qualify under CSR Schedule VII?",
    a: "Yes. Livelihood and micro-entrepreneurship programmes for women qualify under Schedule VII item (iii): Promoting gender equality and empowering women. Programmes targeting poverty alleviation may also qualify under item (i). Consult your legal team on the specific applicable head.",
  },
  {
    q: "What sectors do participants typically train in?",
    /* [VERIFY] active livelihood sectors pending Programme team confirmation */
    a: "Participants train in sectors matched to local market demand, for example food processing, tailoring, handicrafts, retail, beauty and wellness, and digital services. The active list for a given programme is confirmed during the community needs assessment.",
  },
  {
    q: "How does Y&Now ensure income generation actually happens?",
    a: "We track participants at 3 months and 6 months post-programme through structured follow-up surveys and field verification. Outcome reports include income generation data, employment status, and SHG participation.",
  },
  {
    q: "Can Y&Now customise the programme for a specific geography or community?",
    a: "Yes. Every livelihood programme begins with a community needs assessment that maps local market demand, existing skills, and infrastructure constraints. Programme design is customised accordingly.",
  },
  {
    q: "Does Y&Now provide market linkage as part of the programme?",
    a: "Yes. Market linkage is an integrated component of Y&Now's livelihood model, not an optional add-on. We connect participants to buyers, aggregators, and trade networks during the programme, not after it ends.",
  },
];

export default function MicroEntrepreneurshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Micro-Entrepreneurship & Livelihood"
        title="Build a Business, Earn"
        highlight="Real Income"
        subtitle="We help women and local groups gain skills, start small businesses, and earn steady income."
      >
        <CtaButton href="/contact-us?type=livelihood" variant="primary" className="px-7 py-3.5">
          Design a Livelihood Programme
        </CtaButton>
        <CtaButton href="/contact-us" variant="secondary" className="px-7 py-3.5">
          Talk to Our Team
        </CtaButton>
      </PageHero>

      {/* Programme components */}
      <HorizontalCapabilityScroller
        items={COMPONENTS}
        eyebrow="Programme Components"
        title="What makes up a Y&Now"
        highlight="livelihood programme"
        subtitle="Five integrated components that move participants from skills to sustainable, market-linked income."
      />

      <EditorialProofSection
        eyebrow="Market-Linked Livelihoods"
        title="From practical skills to"
        highlight="sustainable income"
        body="Participants develop products, understand pricing, and connect with buyers together, so training moves beyond completion into a working local enterprise."
        image="/images/micro-entrepreneurship/proof/women-enterprise-market-linkage.jpg"
        imageAlt="Women entrepreneurs reviewing packaged products and market information together"
        note="Skills · enterprise support · market linkage"
      />

      {/* Impact measurement */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Impact Measurement"
            title="Outcomes we track and"
            highlight="verify"
            subtitle="Every livelihood programme is designed to produce documentable income outcomes. Verified figures are confirmed by our M&E team."
            className="mb-14"
          />
          {/* [VERIFY] Metric values pending M&E team sign-off. */}
          <ImpactStatGrid items={IMPACT} />
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Micro-Entrepreneurship FAQ"
                title="Common questions on"
                highlight="livelihood programmes"
                align="left"
              />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>
    </>
  );
}
