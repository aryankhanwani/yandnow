import type { Metadata } from "next";
import {
  GraduationCap, ClipboardCheck, TrendingUp, Users2, Boxes, KeyRound,
  FileCode2, Webhook, Database, Check, type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion, { type FaqItemData } from "@/components/ui/FaqAccordion";
import CountUp from "@/components/ui/CountUp";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "Workforce Capability Platform: LMS, Assessment & Performance Management | Y&Now",
  description:
    "Y&Now's capability platform connects learning, role-based assessment, and OKR performance reviews in one system — integrating with HRMS and ERP via REST APIs, SSO, and SCIM. Built for enterprise and industrial workforces.",
};

interface Module {
  icon: LucideIcon;
  tint: string;
  tag: string;
  title: string;
  features: string[];
  note?: string;
}

const MODULES: Module[] = [
  {
    icon: ClipboardCheck,
    tint: "39,170,226",
    tag: "Assess",
    title: "Assessments",
    features: [
      "Role-based competency assessments",
      "Scenario-based evaluations",
      "Compliance audits",
      "Technical checks",
      "Individual heatmaps",
      "Gap reports",
    ],
    note: "Proctored delivery available.",
  },
  {
    icon: GraduationCap,
    tint: "46,49,146",
    tag: "Learn",
    title: "LMS",
    features: [
      "Personalised learning paths",
      "SCORM/xAPI/cmi5 content",
      "AR/VR simulation",
      "Mobile-first delivery",
      "Offline access",
      "Microlearning",
      "Blended learning sequences",
    ],
  },
  {
    icon: TrendingUp,
    tint: "31,34,103",
    tag: "Perform",
    title: "Performance Management",
    features: [
      "OKR setting and tracking",
      "Supervisor check-ins",
      "360-degree feedback",
      "Time-to-competence monitoring",
      "Quarterly and annual review cycles",
      "Succession planning data",
    ],
  },
];

const STATS = [
  { to: 3, suffix: "", label: "Integrated modules" },
  { to: 1, suffix: "", label: "Unified data set" },
  { to: 6, suffix: "", label: "Content standards supported" },
];

interface Integration {
  icon: LucideIcon;
  type: string;
  systems: string[];
}

// [VERIFY] HRMS + ERP rows contain [INSERT] placeholders from copy doc — Product team to confirm additional supported systems.
const INTEGRATIONS: Integration[] = [
  {
    icon: Users2,
    type: "HRMS",
    systems: ["SAP SuccessFactors", "Darwinbox", "[additional HRMS — to be confirmed]"],
  },
  {
    icon: Boxes,
    type: "ERP",
    systems: ["SAP", "[additional ERP platforms — to be confirmed]"],
  },
  {
    icon: KeyRound,
    type: "Authentication",
    systems: ["SSO/SAML", "OIDC", "SCIM provisioning for automated user management"],
  },
  {
    icon: FileCode2,
    type: "Content standards",
    systems: ["SCORM 1.2", "SCORM 2004", "xAPI (Tin Can)", "cmi5"],
  },
  {
    icon: Webhook,
    type: "API",
    systems: ["REST APIs for custom integrations", "iPaaS connectors", "SFTP for bulk data exchange"],
  },
  {
    icon: Database,
    type: "LRS",
    systems: ["xAPI-compatible Learning Record Store for activity tracking across all delivery modes"],
  },
];

const STEPS = [
  {
    title: "Client Onboarding & Alignment",
    body: "We begin with a structured discovery session covering your workforce structure, role requirements, SOPs, safety mandates, and existing capability gaps. Outputs: role profiles, a competency framework, and a deployment roadmap aligned to your business priorities. This stage typically requires 2–3 working days of your L&D lead's time.",
  },
  {
    title: "Talent Assessment & Baseline Mapping",
    body: "Role-based assessments establish a competency baseline for each employee. We combine scenario-based evaluations, technical checks, and compliance audits to map current skill levels against job requirements. Outputs: individual skill heatmaps, team-level gap reports, and a prioritised intervention plan.",
  },
  {
    title: "Personalised Learning Path Creation",
    body: "Learning paths are built per role and per individual, drawing from Y&Now's content library, client-specific SCORM/xAPI modules, AR/VR simulations, and microlearning assets. Each path is sequenced to move learners from baseline to role-proficient in the shortest effective time, with manager visibility at each milestone.",
  },
  {
    title: "Continuous Performance Monitoring",
    body: "As learning progresses, OKRs and performance milestones are tracked through the PMS. Supervisor check-ins and on-the-job evaluations validate whether learning is translating into workplace execution. Data flows into your HRMS for consolidated reporting, and alerts flag learners who are falling behind schedule.",
  },
  {
    title: "Engagement & Retention Programmes",
    body: "Beyond initial capability building, Y&Now supports ongoing engagement through refresher modules, peer cohorts, recognition frameworks, and career development pathways. This reduces post-training attrition and sustains performance improvement over time by connecting learning to visible career progression.",
  },
  {
    title: "Analytics & ROI Reporting",
    body: "Real-time dashboards show completion rates, competency progression, assessment scores, OKR achievement, and time-to-competence. Monthly or quarterly impact reports are shared with L&D leadership, aligned to agreed KPIs and business objectives. Data is exportable to your BI tools or HRMS reporting layer.",
  },
];

// [VERIFY] FAQ answers contain [INSERT] placeholders from copy doc (hosting region, compliance certs, proctoring tools, notification timeframe) — Legal/Tech/Product teams to confirm.
const FAQS: FaqItemData[] = [
  {
    q: "How does Y&Now protect user data?",
    a: "Y&Now implements role-based access controls, TLS-encrypted data transmission, and full audit logging across all platform interactions. Administrative access operates on a least-privilege basis. All API connections between the platform and client HRMS/ERP systems use authenticated, encrypted channels.",
  },
  {
    q: "Where is user data stored?",
    a: "User data is stored on our enterprise cloud infrastructure [hosting region and provider to be confirmed]. Data residency documentation is available on request for enterprise clients with specific regulatory requirements.",
  },
  {
    q: "Does Y&Now comply with data protection regulations?",
    a: "Y&Now operates in accordance with applicable Indian data protection legislation. Enterprise clients with cross-jurisdictional requirements — including GDPR — can request a Data Processing Agreement. [Specific compliance certifications to be confirmed.]",
  },
  {
    q: "Who owns the data on the platform?",
    a: "All learner data, completion records, and assessment results generated by an enterprise client's workforce remain the property of that client organisation. Y&Now does not use client data for any purpose outside of service delivery. This is documented in the client service agreement.",
  },
  {
    q: "How is access to sensitive data controlled?",
    a: "Access is governed by role-based permissions. Learners see only their own records. Managers see data for their direct reports. Administrators access organisation-wide analytics. All access is logged and available for audit at any time.",
  },
  {
    q: "Are assessments and certifications secure?",
    a: "Assessments use session controls, authentication checks, and audit logs. Proctored delivery is available for high-stakes certifications. Certificates are digitally issued with unique verification links. [Specific proctoring tools to be confirmed.]",
  },
  {
    q: "Can enterprise clients request security documentation?",
    a: "Yes. Enterprise clients can request a Security Overview Document, a Data Processing Agreement, and ISO 9001:2015 certification documentation. Contact: info@broadarks.com with subject line 'Security Documentation Request'.",
  },
  {
    q: "What happens in the event of a security incident?",
    a: "Y&Now maintains an incident response protocol. In the event of a security incident affecting client data, affected organisations are notified within the applicable regulatory timeframe [notification timeframe to be confirmed] in accordance with applicable regulations.",
  },
];

export default function OurPlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Capability Platform"
        title="Assess, Learn, and Track Performance in"
        highlight="One System"
        subtitle="Y&Now's capability platform connects digital learning, role-based assessments, and OKR-aligned performance reviews into a single system. It integrates with existing HRMS and ERP platforms via REST APIs, SSO/SAML, and SCIM provisioning — enabling organisations to identify skill gaps, deliver targeted learning, and measure on-the-job performance without requiring your workforce to manage yet another system."
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Platform" }]}
      >
        <CtaButton href="/contact-us?type=platform" variant="primary" className="px-7 py-3.5">
          Request a Platform Demo
        </CtaButton>
        <CtaButton href="/corporate" variant="secondary" className="px-7 py-3.5">
          Explore Corporate Training
        </CtaButton>
      </PageHero>

      {/* Three integrated modules */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Three Integrated Modules"
            title="Assess → Learn → Perform. Three modules, one"
            highlight="data set"
            subtitle="One platform. One data set. Every module feeds the next, so skill gaps, learning, and on-the-job performance stay connected end to end."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.1}>
            {MODULES.map((m) => {
              const Icon = m.icon;
              return (
                <StaggerItem key={m.title} className="h-full">
                  <div className="group flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_18px_44px_rgba(20,21,46,0.09)]">
                    <div className="mb-5 flex items-center gap-3">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                        style={{ color: `rgb(${m.tint})`, backgroundColor: `rgba(${m.tint},0.08)` }}
                      >
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <span
                        className="rounded-full px-2.5 py-1 text-[11px] font-700 uppercase tracking-[0.12em]"
                        style={{ color: `rgb(${m.tint})`, backgroundColor: `rgba(${m.tint},0.08)` }}
                      >
                        {m.tag}
                      </span>
                    </div>
                    <h3 className="mb-4 font-heading text-lg font-700 text-ink">{m.title}</h3>
                    <ul className="flex flex-col gap-2.5">
                      {m.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-600">
                          <Check size={15} className="mt-0.5 flex-shrink-0 text-secondary-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    {m.note && (
                      <p className="mt-4 rounded-lg bg-surface px-3 py-2 text-xs font-500 text-neutral-500">{m.note}</p>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          {/* Stat row */}
          <Reveal y={20} className="mt-14 grid grid-cols-1 gap-6 rounded-2xl border border-[#e8ecf2] bg-white p-8 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <CountUp
                  to={s.to}
                  suffix={s.suffix}
                  className="font-heading text-4xl font-800 text-primary-600"
                />
                <p className="mt-2 text-sm font-500 text-neutral-600">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Platform integrations */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Platform Integrations"
            title="Integrates with the systems you"
            highlight="already run"
            subtitle="Y&Now connects to your existing HRMS, ERP, identity, and content stack — no rip-and-replace, no extra system for your workforce to manage."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {INTEGRATIONS.map((it) => {
              const Icon = it.icon;
              return (
                <StaggerItem key={it.type} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-surface p-7">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm ring-1 ring-neutral-100">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-4 font-heading text-base font-700 text-ink">{it.type}</h3>
                    <div className="flex flex-wrap gap-2">
                      {it.systems.map((sys) => (
                        <span
                          key={sys}
                          className="inline-flex items-center rounded-full border border-[#e8ecf2] bg-white px-3 py-1.5 text-xs font-500 text-neutral-700"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Talent management suite — 6 steps */}
      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Talent Management Suite"
            title="From onboarding to ROI in"
            highlight="six steps"
            subtitle="A structured lifecycle that takes your workforce from baseline assessment through targeted learning to measurable, reportable performance."
            className="mb-14"
          />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {STEPS.map((s, i) => (
              <StaggerItem key={s.title} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-[#e8ecf2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_18px_44px_rgba(20,21,46,0.09)]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary-500">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mb-2.5 font-heading text-lg font-700 text-ink">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Data security & compliance FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Data Security & Compliance"
                title="How your data stays"
                highlight="protected"
                subtitle="Role-based access, encrypted channels, full audit logging, and client-owned data — built for enterprise governance requirements."
                align="left"
              />
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Capability Platform"
        title="See the platform"
        highlight="in action"
        subtitle="Request a demo and we'll walk your team through assessment, learning, and performance in one connected system — mapped to your HRMS and roles."
        primaryLabel="Request a Platform Demo"
        primaryHref="/contact-us?type=platform"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact-us"
      />
    </>
  );
}
