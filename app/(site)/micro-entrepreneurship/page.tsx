import type { Metadata } from "next";
import AnimIcon from "@/components/ui/AnimIcon";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import HoverWashCard from "@/components/ui/HoverWashCard";
import { CtaButton } from "@/components/ui/CtaButton";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Micro-Entrepreneurship & Livelihood Programmes India | Y&Now",
  description:
    "Y&Now designs and delivers micro-entrepreneurship and livelihood programmes for women, SHGs, and marginalised communities — with vocational training, market linkage, and income generation measurement.",
};

interface Component {
  icon: string;
  tint: string;
  title: string;
  body: string;
}

const COMPONENTS: Component[] = [
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

/* [VERIFY] Impact figures are pending M&E team sign-off — rendered as a neutral
   placeholder ("—"), never fabricated numbers. */
const IMPACT = [
  { icon: "UsersRound", label: "Women trained" },
  { icon: "TrendingUp", label: "Reporting income generation within 6 months" },
  { icon: "BarChart3", label: "Average income increase" },
  { icon: "Sprout", label: "SHGs strengthened or formed" },
];

const FAQS: FaqItemData[] = [
  {
    q: "Does Y&Now's livelihood programme qualify under CSR Schedule VII?",
    a: "Yes. Livelihood and micro-entrepreneurship programmes for women qualify under Schedule VII item (iii) — Promoting gender equality and empowering women. Programmes targeting poverty alleviation may also qualify under item (i). Consult your legal team on the specific applicable head.",
  },
  {
    q: "What sectors do participants typically train in?",
    /* [VERIFY] active livelihood sectors pending Programme team confirmation */
    a: "Participants train in sectors matched to local market demand — for example food processing, tailoring, handicrafts, retail, beauty and wellness, and digital services. The active list for a given programme is confirmed during the community needs assessment.",
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
    a: "Yes. Market linkage is an integrated component of Y&Now's livelihood model — not an optional add-on. We connect participants to buyers, aggregators, and trade networks during the programme, not after it ends.",
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
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Programme Components"
            title="What makes up a Y&Now"
            highlight="livelihood programme"
            subtitle="Five integrated components that move participants from skills to sustainable, market-linked income."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.08}>
            {COMPONENTS.map((c) => {
              const iconName = c.icon;
              return (
                <StaggerItem key={c.title} className="h-full">
                  <HoverWashCard>
                    <div className="flex gap-5">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                        style={{ color: `rgb(${c.tint})`, backgroundColor: `rgba(${c.tint},0.08)` }}
                      >
                        <AnimIcon name={iconName} size={22} />
                      </div>
                      <div>
                        <h3 className="mb-2 font-heading text-lg font-700 text-ink">{c.title}</h3>
                        <p className="text-sm leading-relaxed text-neutral-600">{c.body}</p>
                      </div>
                    </div>
                  </HoverWashCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Impact measurement */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Impact Measurement"
                title="Outcomes we track and"
                highlight="verify"
                subtitle="Every livelihood programme is designed to produce documentable income outcomes. Verified figures are confirmed by our M&E team."
                align="left"
              />
            </div>
            <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.1}>
              {IMPACT.map((m) => {
                const iconName = m.icon;
                return (
                  <StaggerItem key={m.label} className="h-full">
                    <HoverWashCard noLift className="bg-surface p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm ring-1 ring-neutral-100 transition-transform duration-300 group-hover:scale-105">
                        <AnimIcon name={iconName} size={20} />
                      </div>
                      {/* [VERIFY] Metric value pending — verified figures from M&E team. */}
                      <span className="mb-1 block font-heading text-3xl font-800 text-neutral-300">—</span>
                      <h3 className="font-heading text-sm font-700 text-ink">{m.label}</h3>
                    </HoverWashCard>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
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

      <CtaBand
        eyebrow="Micro-Entrepreneurship & Livelihood"
        title="Ready to design a"
        highlight="livelihood programme?"
        subtitle="Tell us about the community you want to reach and the income outcomes you're targeting — we'll design a market-linked programme around them."
        primaryLabel="Design a Livelihood Programme"
        primaryHref="/contact-us?type=livelihood"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact-us"
      />
    </>
  );
}
