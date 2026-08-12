"use client";

/* ============================================================
   NEUREX-STYLE HOME (preview route: /home-neurex)
   ────────────────────────────────────────────────────────────
   Modern SaaS layout in the Y&Now indigo/sky palette, tuned for
   a calmer, lighter feel (soft gradients only).

   Structure:
     1 · Hero        — calm light wash, centred copy, video below
     2 · WhoWeServe  — reused as-is from the production home
     3 · OnePlatform — 3 dark step-cards (01·02·03) w/ UI mocks
     4 · HowWeWork   — 5-step timeline, reused from home
     5 · Impact      — home-neurex card design, home-page data
     6 · SuccessStories — testimonial carousel
     7 · FaqSection  — reused as-is from the production home

   Non-destructive: the production homepage at "/" is untouched.
   ============================================================ */

import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Check,
  GraduationCap,
  ClipboardCheck,
  Target,
  BookOpen,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import CountUp from "@/components/ui/CountUp";
import { cn } from "@/lib/utils";

import WhoWeServe from "@/components/sections/WhoWeServe";
import HowWeWork from "@/components/sections/HowWeWork";
import FaqSection from "@/components/sections/FaqSection";

/* ------------------------------------------------------------
   PhotoTile — on-brand placeholder standing in for a photo.
   Swap for <Image> once real imagery is available.
   ------------------------------------------------------------ */
function PhotoTile({ className, label }: { className?: string; label?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-surface ring-1 ring-neutral-100",
        className,
      )}
    >
      <div className="bg-dot-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 grid place-items-center">
        <GraduationCap className="text-primary-300/70" size={44} strokeWidth={1.5} />
      </div>
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-600 text-ink backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}

/* ============================================================
   1 · HERO — calm light wash, centred copy, product video below
   ============================================================ */
function Hero() {
  return (
    <section className="bg-gradient-hero relative overflow-hidden">
      {/* very soft brand halo (low alpha, calm) */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary-200/25 blur-[120px]" />

      <Container className="relative pt-36 pb-16 text-center lg:pt-44">
        <Reveal
          y={14}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-secondary-500" />
          <span className="text-[12px] font-500 tracking-wide text-neutral-600">
            Trusted by 3,800+ organisations across India
          </span>
        </Reveal>

        <h1 className="mx-auto max-w-4xl font-heading text-[clamp(2.4rem,5.2vw,3.7rem)] font-800 leading-[1.06] tracking-tight text-ink">
          Build the capability that powers your{" "}
          <span className="text-primary-600">workforce</span>
        </h1>

        <Reveal
          delay={0.1}
          y={16}
          className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-600 sm:text-base"
        >
          Industry-aligned programmes, role-based assessment, and a digital
          performance platform — so your people perform on the job, not just
          complete courses.
        </Reveal>

        <Reveal delay={0.2} y={16} className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaButton href="/contact-us" className="px-7 py-3">
            Get started
          </CtaButton>
          <CtaButton href="/about-us" variant="secondary" className="px-7 py-3">
            Learn about Y&amp;Now
          </CtaButton>
        </Reveal>

        {/* rating chip */}
        <Reveal delay={0.3} y={16} className="mt-9 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {["from-secondary-400 to-secondary-600", "from-primary-300 to-primary-500", "from-secondary-300 to-primary-400"].map(
              (g, i) => (
                <span
                  key={i}
                  className={cn("h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br", g)}
                />
              ),
            )}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-0.5 text-secondary-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-[12px] text-neutral-500">
              4.9/5 from enterprise L&amp;D teams
            </span>
          </div>
        </Reveal>
      </Container>

      {/* ---------- Product video (below the hero copy) ---------- */}
      <Container className="relative pb-24">
        <Reveal y={28} className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl ring-1 ring-neutral-100">
            <video
              className="aspect-video w-full rounded-2xl object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/image.png"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ============================================================
   2 · ONE PLATFORM — 3 dark step-cards (01 · 02 · 03) with
   modern UI mocks. Reference: Neurex feature-card row.
   ============================================================ */

/* -- small mock building blocks -- */
function MockRow({
  icon: Icon,
  title,
  meta,
  highlight = false,
}: {
  icon: typeof BookOpen;
  title: string;
  meta: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2.5",
        highlight ? "bg-secondary-500 text-white" : "bg-white/5 text-white",
      )}
    >
      <span
        className={cn(
          "grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg",
          highlight ? "bg-white/20 text-white" : "bg-white/10 text-secondary-300",
        )}
      >
        <Icon size={15} />
      </span>
      <div className="min-w-0">
        <div className="truncate text-[12.5px] font-700">{title}</div>
        <div className={cn("truncate text-[11px]", highlight ? "text-white/80" : "text-white/45")}>
          {meta}
        </div>
      </div>
    </div>
  );
}

function MockBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[11px] text-white/60">
        <span>{label}</span>
        <span className="font-600 text-white/85">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <span className="block h-full rounded-full bg-secondary-400" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

interface PlatformCard {
  step: string;
  icon: typeof BookOpen;
  title: string;
  body: string;
  mock: React.ReactNode;
}

const PLATFORM_CARDS: PlatformCard[] = [
  {
    step: "01",
    icon: BookOpen,
    title: "Learning management",
    body: "Role-based learning paths blend instructor-led, digital, and AR/VR content.",
    mock: (
      <div className="space-y-2">
        <div className="mb-1 text-[11px] font-600 text-white/50">My learning path</div>
        <MockRow icon={BookOpen} title="Safety & Compliance" meta="Module 3 of 5" />
        <MockRow icon={GraduationCap} title="Machine Operations" meta="In progress" highlight />
        <MockRow icon={BadgeCheck} title="Quality Standards" meta="Completed" />
      </div>
    ),
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Role-based assessment",
    body: "Benchmark every learner against the skills their role actually demands.",
    mock: (
      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] font-600 text-white/50">Skill assessment</span>
          <span className="rounded-full bg-secondary-500/20 px-2 py-0.5 text-[10px] font-700 text-secondary-300">
            Level 3 cleared
          </span>
        </div>
        <div className="font-heading text-2xl font-800 text-white">82%</div>
        <MockBar label="Technical" value={88} />
        <MockBar label="Safety" value={76} />
        <MockBar label="Process" value={82} />
      </div>
    ),
  },
  {
    step: "03",
    icon: Target,
    title: "OKR performance",
    body: "Tie capability to objectives and measurable key results on the job.",
    mock: (
      <div className="space-y-2">
        <div className="mb-1 flex items-center justify-between text-[11px] font-600 text-white/50">
          <span>Performance · Q3</span>
          <span className="inline-flex items-center gap-1 text-secondary-300">
            <TrendingUp size={11} /> +18%
          </span>
        </div>
        <MockRow icon={Target} title="Reduce defect rate" meta="On track · 74%" />
        <MockRow icon={Check} title="Cut onboarding time" meta="Achieved · 100%" highlight />
        <MockRow icon={Target} title="Lift audit score" meta="On track · 61%" />
      </div>
    ),
  },
];

function OnePlatform() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="One Platform"
          title="One platform for learning and performance"
          subtitle="Three connected pillars — learn, assess, perform — so capability is built, verified, and measured in a single system."
          className="mx-auto mb-14"
        />

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLATFORM_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.step}>
                <div className="relative flex h-full flex-col rounded-3xl bg-navy p-7 ring-1 ring-white/10">
                  {/* connector arrow between cards (desktop) */}
                  {i < PLATFORM_CARDS.length - 1 && (
                    <span className="absolute -right-3 top-12 z-10 hidden h-6 w-6 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-400 md:grid">
                      <ChevronRight size={13} />
                    </span>
                  )}

                  {/* step number + icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-500 font-heading text-lg font-800 text-white">
                      {card.step}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-secondary-300">
                      <Icon size={19} />
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-700 text-white">{card.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">{card.body}</p>

                  {/* UI mock */}
                  <div className="mt-6 rounded-2xl bg-navy-700 p-4 ring-1 ring-white/10">
                    {card.mock}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}

/* ============================================================
   5 · IMPACT — home-neurex card design, production-home data.
   (Figures mirror components/sections/ImpactMetrics.tsx.)
   ============================================================ */
const STATS = [
  { title: "Organisations", to: 3800, suffix: "+", sub: "served across India" },
  { title: "Learners", to: 250000, suffix: "+", sub: "trained and assessed" },
  { title: "Facilitators", to: 1200, suffix: "+", sub: "instructors & mentors" },
  { title: "Completion", to: 92, suffix: "%", sub: "average programme rate" },
];

function Impact() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Measurable Outcomes"
          title="Impact you can put in a board report"
          subtitle="We measure what matters — and report it transparently. Capability programmes delivered at national scale, with outcomes tracked end-to-end."
          className="mx-auto mb-14"
        />
        <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6" stagger={0.1}>
          {STATS.map((s) => (
            <StaggerItem key={s.title} className="rounded-2xl bg-surface p-6 text-left shadow-card lg:p-8">
              <div className="text-[13px] font-600 text-neutral-500">{s.title}</div>
              <CountUp
                to={s.to}
                suffix={s.suffix}
                className="mt-3 block font-heading text-[clamp(1.9rem,4vw,2.75rem)] font-800 leading-none text-primary-600"
              />
              <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-600">{s.sub}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* ============================================================
   6 · SUCCESS STORIES — photo + quote carousel
   ============================================================ */
const STORIES = [
  {
    quote:
      "Y&Now transformed how we build frontline capability — role-based assessment gave us visibility we never had, and performance followed.",
    name: "Savannah Nair",
    role: "VP People, National Logistics Group",
    org: "Logistics",
  },
  {
    quote:
      "The five-stage framework tied our CSR skilling spend directly to livelihood outcomes. Reporting that used to take weeks is now live.",
    name: "Vikram Desai",
    role: "CSR Lead, Industrial Foundation",
    org: "CSR",
  },
  {
    quote:
      "Integrations with our HRMS meant zero disruption. Managers finally see whether training actually shows up on the job.",
    name: "Priya Menon",
    role: "Head of L&D, Energy Sector",
    org: "Energy",
  },
];

function SuccessStories() {
  const [index, setIndex] = useState(0);
  const story = STORIES[index];
  const go = (dir: number) => setIndex((i) => (i + dir + STORIES.length) % STORIES.length);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex items-end justify-between gap-6">
          <SectionHeading align="left" eyebrow="Success stories" title="Success stories from our clients" />
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous story"
              className="grid h-11 w-11 place-items-center rounded-full border border-neutral-200 bg-white text-ink transition hover:border-primary-300 hover:text-primary-600"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next story"
              className="grid h-11 w-11 place-items-center rounded-full border border-neutral-200 bg-white text-ink transition hover:border-primary-300 hover:text-primary-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <PhotoTile className="min-h-[300px]" label={story.org} />

          <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-card sm:p-10">
            <div>
              <Quote className="text-secondary-400" size={30} />
              <p className="mt-5 font-heading text-xl font-600 leading-relaxed text-ink sm:text-[1.6rem]">
                “{story.quote}”
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-6">
              <div>
                <div className="text-[15px] font-700 text-ink">{story.name}</div>
                <div className="text-[13px] text-neutral-500">{story.role}</div>
              </div>
              <div className="flex gap-1.5">
                {STORIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to story ${i + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === index ? "w-6 bg-primary-500" : "w-2 bg-neutral-300",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function HomeNeurexPage() {
  return (
    <>
      <Hero />
      <WhoWeServe />
      <OnePlatform />
      <HowWeWork />
      <Impact />
      <SuccessStories />
      <FaqSection />
    </>
  );
}
