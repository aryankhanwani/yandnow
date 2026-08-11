"use client";

import Container from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { AnimatedHeading, Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   Y&NOW PLATFORM — 3 vertical product cards in a row.
   Each card is a plain UI mock (text, pills, initials avatars —
   no icons, no description copy) with the pillar name below it.
   ============================================================ */

function StatPill({ label, tone = "neutral" }: { label: string; tone?: "neutral" | "primary" }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap",
        tone === "primary" ? "bg-primary-500 text-white" : "bg-neutral-100 text-neutral-600",
      )}
    >
      {label}
    </span>
  );
}

function Avatar({ initials, className }: { initials: string; className: string }) {
  return (
    <span className={cn("flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold", className)}>
      {initials}
    </span>
  );
}

/* ---- Card 1 — Learning management ---- */
function LearningMock() {
  const rows = [
    { title: "Safety & Compliance", status: "Completed" },
    { title: "Machine Operations", status: "In progress" },
    { title: "Quality Standards", status: "Locked" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-ink">My Learning Path</span>
        <StatPill label="3 of 5" />
      </div>
      <div className="space-y-2">
        {rows.map((row, i) => (
          <div
            key={row.title}
            className="flex items-center justify-between rounded-xl bg-white px-3.5 py-2.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <span className="text-[13px] font-medium text-ink">{row.title}</span>
            <span className="text-[11px] font-semibold text-neutral-500">{row.status}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-neutral-200/70 pt-4">
        <span className="text-[12px] text-neutral-500">Team completion</span>
        <div className="flex -space-x-2 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
          <Avatar initials="AK" className="bg-primary-500 text-white ring-2 ring-surface" />
          <Avatar initials="MP" className="bg-secondary-500 text-white ring-2 ring-surface" />
          <Avatar initials="+8" className="bg-neutral-200 text-neutral-600 ring-2 ring-surface" />
        </div>
      </div>
    </div>
  );
}

/* ---- Card 2 — Role-based assessment ---- */
function AssessmentMock() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Avatar initials="PN" className="bg-primary-500 text-white" />
          <span className="text-[13px] font-semibold text-ink">Priya Nair</span>
        </div>
        <StatPill label="Switch role" />
      </div>
      <div>
        <div className="text-[11px] font-medium text-neutral-500">Skill score</div>
        <div className="font-heading text-3xl font-800 text-ink transition-transform duration-300 ease-out group-hover:scale-105 origin-left">
          82%
        </div>
      </div>
      <div className="flex flex-wrap gap-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
        <StatPill label="View report" tone="primary" />
        <StatPill label="Compare" />
        <StatPill label="History" />
      </div>
      <div
        className="rounded-xl bg-navy px-4 py-3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
        style={{ transitionDelay: "80ms" }}
      >
        <div className="flex items-center justify-between text-[11px] font-semibold text-white/50">
          <span>Last assessment</span>
          <span>See all</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[13px] font-medium text-white">Machine Operations</span>
          <span className="text-[13px] font-bold text-secondary-300">Level 3</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Card 3 — OKR performance ---- */
function PerformanceMock() {
  const tabs = ["This month", "Quarter", "Year"];
  return (
    <div className="space-y-4">
      <span className="text-[13px] font-semibold text-ink">Performance</span>
      <div className="flex gap-1.5 transition-transform duration-300 ease-out group-hover:translate-x-1">
        {tabs.map((tab, i) => (
          <StatPill key={tab} label={tab} tone={i === 0 ? "primary" : "neutral"} />
        ))}
      </div>
      <div className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
        <Avatar initials="KR" className="bg-secondary-500 text-white" />
        <div>
          <div className="text-[11px] text-neutral-500">Top performer</div>
          <div className="text-[13px] font-semibold text-ink">Kiran Rao</div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-neutral-200/70 pt-4">
        <div>
          <div className="text-[11px] font-medium text-neutral-500">OKRs achieved</div>
          <div className="font-heading text-2xl font-800 text-ink transition-transform duration-300 ease-out group-hover:scale-105 origin-left">
            142
          </div>
        </div>
        <span className="text-[12px] font-semibold text-primary-600">View all →</span>
      </div>
    </div>
  );
}

const PLATFORM_CARDS = [
  {
    title: "Learning management",
    description: "Role-based learning paths blend instructor-led, digital, and AR/VR content into one path.",
    mock: <LearningMock />,
  },
  {
    title: "Role-based assessment",
    description: "Benchmark every learner against the skills their role actually demands on the job.",
    mock: <AssessmentMock />,
  },
  {
    title: "OKR performance",
    description: "Tie capability to objectives and track measurable key results after training ends.",
    mock: <PerformanceMock />,
  },
];

export default function PlatformPreview() {
  return (
    <section id="platform-preview" aria-labelledby="platform-preview-heading" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <AnimatedHeading
            id="platform-preview-heading"
            as="h2"
            text="One platform for learning and performance"
            className="max-w-2xl font-heading text-[clamp(1.75rem,3.2vw,2.6rem)] font-700 leading-[1.15] tracking-tight text-ink"
          />
          <Reveal delay={0.15} y={12} className="flex-shrink-0">
            <CtaButton href="/our-platform" id="platform-preview-cta" variant="primary" className="px-6 py-3">
              See the Y&Now Platform in Detail
            </CtaButton>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
          {PLATFORM_CARDS.map((card) => (
            <StaggerItem key={card.title}>
              <div className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white p-5 shadow-card transition-[border-color,box-shadow] duration-500 ease-out hover:border-primary-200/70 hover:shadow-[0_24px_60px_-28px_rgba(46,49,146,0.30)]">
                {/* Calm blue-brand gradient wash that eases in on hover — no lift */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-50 via-secondary-50/60 to-white opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                />

                <div className="relative z-10 flex flex-1 flex-col justify-center rounded-2xl bg-surface p-6 transition-colors duration-500 ease-out group-hover:bg-white/60">
                  {card.mock}
                </div>
                <div className="relative z-10 mt-6">
                  <h3 className="font-heading text-lg font-700 text-ink">{card.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-neutral-600">
                    {card.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
