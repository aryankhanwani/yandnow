import type { Metadata } from "next";
import {
  GraduationCap, ShieldCheck, Sprout, HeartHandshake,
  ClipboardList, Cog, BarChart3,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import StackingCards, { type StackCardItem } from "@/components/ui/StackingCards";
import ProcessSteps, { type ProcessStep } from "@/components/ui/ProcessSteps";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "CSR Skilling & Livelihood Programmes India | Y&Now",
  description:
    "Y&Now delivers end-to-end CSR skilling programmes aligned to Schedule VII of the Companies Act — covering skill development, veteran transition, livelihoods, and community development with measurable impact reporting.",
};

const PROGRAMMES: StackCardItem[] = [
  {
    num: "01",
    icon: <GraduationCap size={26} strokeWidth={2} />,
    tint: "46,49,146",
    image: "/images/csr/programme-streams/skill-development-employability.jpg",
    title: "Skill Development & Employability",
    body: "NSDC-aligned vocational training and employability skilling for youth and working-age adults, with employer linkage and placement support.",
    meta: "Schedule VII item (ii) — Promotion of education",
  },
  {
    num: "02",
    icon: <ShieldCheck size={26} strokeWidth={2} />,
    tint: "39,170,226",
    image: "/images/csr/programme-streams/veteran-transition.jpg",
    title: "Veteran Transition",
    body: "Post-service civilian resettlement programmes for armed forces personnel, combining skills assessment, vocational retraining, and employer connections.",
    meta: "Schedule VII item (vi) — Training to promote nationally recognised sports, and items covering armed forces veterans",
  },
  {
    num: "03",
    icon: <Sprout size={26} strokeWidth={2} />,
    tint: "31,34,103",
    image: "/images/csr/programme-streams/livelihood-entrepreneurship.jpg",
    title: "Livelihood & Entrepreneurship",
    body: "Vocational skilling, SHG strengthening, market linkage, and micro-enterprise development for women and marginalised communities.",
    meta: "Schedule VII item (iii) — Promoting gender equality and empowering women",
  },
  {
    num: "04",
    icon: <HeartHandshake size={26} strokeWidth={2} />,
    tint: "32,180,232",
    image: "/images/csr/programme-streams/community-development.jpg",
    title: "Community Development",
    body: "Broader social infrastructure capacity-building, including health awareness, digital literacy, and community governance.",
    meta: "Schedule VII item (i) — Eradicating hunger, poverty, and malnutrition",
  },
];

const STAGES: ProcessStep[] = [
  {
    num: "01",
    kicker: "Stage 01",
    icon: <ClipboardList size={24} strokeWidth={2} />,
    tint: "46,49,146",
    image: "/images/csr/delivery-model/needs-assessment.jpg",
    label: "Needs Assessment",
    body: "Community mapping, baseline surveys, and beneficiary identification — co-created with your CSR team.",
  },
  {
    num: "02",
    kicker: "Stage 02",
    icon: <Cog size={24} strokeWidth={2} />,
    tint: "39,170,226",
    image: "/images/csr/delivery-model/programme-execution.jpg",
    label: "Programme Execution",
    body: "On-ground delivery by qualified facilitators, with standardised quality assurance and mid-programme review.",
  },
  {
    num: "03",
    kicker: "Stage 03",
    icon: <BarChart3 size={24} strokeWidth={2} />,
    tint: "31,34,103",
    image: "/images/csr/delivery-model/impact-measurement-reporting.jpg",
    label: "Impact Measurement & Reporting",
    body: "End-line assessments, income verification, and a compliance-ready impact report for your CSR committee.",
  },
];

/* [VERIFY] Impact metric VALUES are unconfirmed — awaiting verified CSR metrics
   from the M&E team. Values render as "—" until confirmed. Do NOT publish real
   numbers until confirmed. */
const IMPACT_METRICS = [
  { title: "Individuals Reached", sub: "total individuals reached through CSR programmes" },
  { title: "Employment Linkage", sub: "secure employment or income within 6 months of completion" },
  { title: "Women Participation", sub: "share of women participants across programmes" },
  { title: "Income Uplift", sub: "households reporting an income increase" },
];

const FAQS: FaqItemData[] = [
  {
    q: "Which Schedule VII categories do Y&Now's CSR programmes qualify under?",
    a: "Y&Now's skill development and employability programmes qualify under Schedule VII item (ii) — Promotion of education. Livelihood programmes qualify under item (iii) — Promoting gender equality and empowering women. Community development programmes may qualify under item (i). We recommend confirming the specific head with your legal team before commitment.",
  },
  {
    q: "How does Y&Now report CSR fund utilisation?",
    a: "Y&Now provides quarterly utilisation statements, mid-programme progress reports, and a comprehensive final impact report. Documentation includes attendance registers, beneficiary ID verification, photographic evidence, assessment results, and employment/income linkage data. Reports are formatted to meet corporate compliance requirements.",
  },
  {
    q: "Can Y&Now manage the complete CSR programme lifecycle?",
    a: "Yes. Y&Now manages the full cycle — from community needs assessment and programme design through on-ground delivery, independent monitoring, and final reporting. Corporate partners can choose full-cycle implementation or engagement at specific stages.",
  },
  {
    q: "Does Y&Now work with NSDC for CSR skilling programmes?",
    a: "Y&Now works with NSDC as a training and implementation partner for select programmes. NSDC co-badging of certifications is available for eligible programmes.",
    // [VERIFY] Confirm current NSDC partnership scope — Accreditation team.
  },
  {
    q: "What geographies does Y&Now operate in for CSR programmes?",
    a: "Y&Now operates across select regions in India and can expand to new geographies with a minimum 8-week mobilisation lead time.",
    // [VERIFY] Confirm current operating geographies — Programme team.
  },
];

export default function CsrProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="CSR Programmes"
        title="CSR Skilling Programmes with"
        highlight="Measurable Impact"
        subtitle="As your CSR partner, we design, deliver, and report skilling programmes aligned to Schedule VII."
      >
        <CtaButton href="/contact-us?type=csr" variant="primary" className="px-7 py-3.5">
          Partner on a CSR Programme
        </CtaButton>
        <CtaButton href="/corporate" variant="secondary" className="px-7 py-3.5">
          Explore Corporate Training
        </CtaButton>
      </PageHero>

      {/* What We Deliver — scroll-stacked deck of programme streams */}
      <section className="bg-surface">
        <StackingCards
          cards={PROGRAMMES}
          heading={
            <SectionHeading
              eyebrow="What We Deliver"
              title="Four CSR programme"
              highlight="streams"
              subtitle="Y&Now manages four programme streams under CSR — each mapped to a category of Schedule VII of the Companies Act, 2013. Scroll to step through each."
            />
          }
        />
      </section>

      {/* Our CSR Delivery Approach — horizontal three-stage process */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our CSR Delivery Approach"
            title="A structured three-stage"
            highlight="delivery model"
            subtitle="Every Y&Now CSR programme follows the same model — from community mapping to compliance-ready reporting."
            className="mb-14"
          />
          <ProcessSteps steps={STAGES} className="mx-auto max-w-6xl" />
        </Container>
      </section>

      {/* Impact Measurement */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Impact Measurement"
            title="Impact we measure and"
            highlight="report"
            subtitle="Every programme is evaluated against defined outcome indicators, independently verified and documented for your CSR committee."
            className="mb-14"
          />
          {/* Same stat-card UI as the homepage Impact section. */}
          <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6" stagger={0.1}>
            {IMPACT_METRICS.map((s) => (
              <StaggerItem key={s.title} className="rounded-2xl bg-white p-6 shadow-card lg:p-8">
                <div className="text-[13px] font-600 text-neutral-500">{s.title}</div>
                {/* [VERIFY] Metric value pending — verified CSR metrics from M&E team. */}
                <span className="mt-3 block font-heading text-[clamp(1.9rem,4vw,2.75rem)] font-800 leading-none text-neutral-300">
                  —
                </span>
                <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-600">{s.sub}</p>
              </StaggerItem>
            ))}
          </Stagger>
          {/* [VERIFY] Client testimonial removed — awaiting a confirmed CSR client name,
              designation and outcome from the BD team. CEAT logo placeholder removed
              until confirmed. Do not reinstate the 'Peter Watson, CEO' placeholder. */}
          <Reveal y={20}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-neutral-500">
              Verified programme metrics and client outcomes are shared during
              partner scoping and in every final impact report.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CSR FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="CSR FAQ"
                title="Common questions from"
                highlight="CSR & compliance teams"
                align="left"
              />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="CSR Programmes"
        title="Ready to partner on a"
        highlight="CSR programme?"
        subtitle="Tell us about your CSR objectives and target communities — we'll design a Schedule VII-aligned programme with measurable, compliance-ready impact."
        primaryLabel="Partner on a CSR Programme"
        primaryHref="/contact-us?type=csr"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact-us"
      />
    </>
  );
}
