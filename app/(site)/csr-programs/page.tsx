import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap, ShieldCheck, Sprout, HeartHandshake,
  ClipboardList, Cog, BarChart3, ArrowRight,
  Users, Briefcase, TrendingUp, ScrollText, type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "CSR Skilling & Livelihood Programmes India | Y&Now",
  description:
    "Y&Now delivers end-to-end CSR skilling programmes aligned to Schedule VII of the Companies Act — covering skill development, veteran transition, livelihoods, and community development with measurable impact reporting.",
};

interface Programme {
  icon: LucideIcon;
  tint: string;
  title: string;
  body: string;
  schedule: string;
  href: string;
}

const PROGRAMMES: Programme[] = [
  {
    icon: GraduationCap,
    tint: "46,49,146",
    title: "Skill Development & Employability",
    body: "NSDC-aligned vocational training and employability skilling for youth and working-age adults, with employer linkage and placement support.",
    schedule: "Schedule VII item (ii) — Promotion of education",
    href: "/csr-programs/skill-development",
  },
  {
    icon: ShieldCheck,
    tint: "39,170,226",
    title: "Veteran Transition",
    body: "Post-service civilian resettlement programmes for armed forces personnel, combining skills assessment, vocational retraining, and employer connections.",
    schedule:
      "Schedule VII item (vi) — Training to promote nationally recognised sports, and items covering armed forces veterans",
    href: "/csr-programs/veteran-transition",
  },
  {
    icon: Sprout,
    tint: "31,34,103",
    title: "Livelihood & Entrepreneurship",
    body: "Vocational skilling, SHG strengthening, market linkage, and micro-enterprise development for women and marginalised communities.",
    schedule: "Schedule VII item (iii) — Promoting gender equality and empowering women",
    href: "/csr-programs/livelihood",
  },
  {
    icon: HeartHandshake,
    tint: "32,180,232",
    title: "Community Development",
    body: "Broader social infrastructure capacity-building, including health awareness, digital literacy, and community governance.",
    schedule: "Schedule VII item (i) — Eradicating hunger, poverty, and malnutrition",
    href: "/csr-programs/community-development",
  },
];

interface Stage {
  icon: LucideIcon;
  step: string;
  title: string;
  body: string;
}

const STAGES: Stage[] = [
  {
    icon: ClipboardList,
    step: "Stage 1",
    title: "Needs Assessment",
    body: "Community mapping, baseline surveys, beneficiary identification, and co-creation with the corporate partner to align programme design with both community need and CSR policy objectives.",
  },
  {
    icon: Cog,
    step: "Stage 2",
    title: "Programme Execution",
    body: "On-ground delivery by qualified facilitators and sector experts, with standardised quality assurance protocols, attendance tracking, and mid-programme corrective review.",
  },
  {
    icon: BarChart3,
    step: "Stage 3",
    title: "Impact Measurement & Reporting",
    body: "End-line assessments, employment and income verification, beneficiary documentation, and a final impact report in the format required by your corporate compliance and CSR committee.",
  },
];

/* [VERIFY] Impact metrics are unconfirmed placeholders — awaiting verified CSR
   metrics from the M&E team. Do NOT publish real numbers until confirmed. */
const IMPACT_METRICS = [
  { icon: Users, label: "Total individuals reached through CSR programmes" },
  {
    icon: Briefcase,
    label: "Employment linkage rate — securing employment or income within 6 months of completing the programme",
  },
  { icon: HeartHandshake, label: "Women participation percentage" },
  { icon: TrendingUp, label: "Household income improvement — households reporting an income increase" },
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
        title="CSR Skill Development & Livelihood Programmes That Deliver"
        highlight="Measurable Impact"
        subtitle="Y&Now is a structured CSR implementation partner for corporations and foundations seeking measurable community impact. We design, deliver, and report on end-to-end skill development, livelihood, and community programmes aligned to Schedule VII of the Companies Act, 2013 — with independent monitoring, transparent fund utilisation reporting, and impact documentation that meets the requirements of corporate compliance teams and government oversight bodies."
        crumbs={[{ label: "Home", href: "/" }, { label: "CSR Programmes" }]}
      >
        <CtaButton href="/contact-us?type=csr" variant="primary" className="px-7 py-3.5">
          Partner on a CSR Programme
        </CtaButton>
        <CtaButton href="/corporate" variant="secondary" className="px-7 py-3.5">
          Explore Corporate Training
        </CtaButton>
      </PageHero>

      {/* What We Deliver — four programme streams */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Deliver"
            title="Four CSR programme"
            highlight="streams"
            subtitle="Y&Now manages four programme streams under CSR — each mapped to a category of Schedule VII of the Companies Act, 2013."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.08}>
            {PROGRAMMES.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title} className="h-full">
                  <Link
                    href={p.href}
                    className="group flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_18px_44px_rgba(20,21,46,0.09)]"
                  >
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{ color: `rgb(${p.tint})`, backgroundColor: `rgba(${p.tint},0.08)` }}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-700 text-ink">{p.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-neutral-600">{p.body}</p>
                    <div className="mt-auto flex items-start gap-2 border-t border-[#eef1f6] pt-4">
                      <ScrollText size={15} className="mt-0.5 flex-shrink-0 text-secondary-500" />
                      <span className="text-xs font-500 leading-relaxed text-neutral-500">{p.schedule}</span>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-600 text-primary-600">
                      Explore programme
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Our CSR Delivery Approach — three-stage model */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our CSR Delivery Approach"
            title="A structured three-stage"
            highlight="delivery model"
            subtitle="Every Y&Now CSR programme follows the same structured delivery model — from community mapping to compliance-ready reporting."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
            {STAGES.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.step} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-surface p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm ring-1 ring-neutral-100">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <span className="mb-1.5 text-xs font-700 uppercase tracking-wide text-secondary-600">{s.step}</span>
                    <h3 className="mb-2 font-heading text-lg font-700 text-ink">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{s.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
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
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
            {IMPACT_METRICS.map((m) => {
              const Icon = m.icon;
              return (
                <StaggerItem key={m.label} className="h-full">
                  <div className="flex h-full items-center gap-5 rounded-2xl border border-[#e8ecf2] bg-white p-6">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <Icon size={20} />
                    </div>
                    <div>
                      {/* [VERIFY] Metric value pending — verified CSR metrics from M&E team. */}
                      <span className="block font-heading text-2xl font-800 text-neutral-300">—</span>
                      <p className="text-sm leading-relaxed text-neutral-600">{m.label}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
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
