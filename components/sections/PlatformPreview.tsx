"use client";

import { useState, useEffect, useRef } from "react";
import { BarChart2, BookOpen, Target, Check, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   PLATFORM PREVIEW — interactive Assess · Learn · Perform.
   A stage selector drives a live-morphing visual panel.
   Copy sourced from Final Copy doc — Section 3.
   ============================================================ */

interface Stage {
  id: string;
  step: string;
  icon: LucideIcon;
  label: string;
  headline: string;
  body: string;
}

const STAGES: Stage[] = [
  {
    id: "assess",
    step: "01",
    icon: Target,
    label: "Assess",
    headline: "Identify where your workforce is today.",
    body:
      "Role-based assessments map current competency against job requirements, delivering individual heatmaps and gap reports your L&D team can act on.",
  },
  {
    id: "learn",
    step: "02",
    icon: BookOpen,
    label: "Learn",
    headline: "Deliver the right learning to the right person.",
    body:
      "Personalised learning paths draw from SCORM/xAPI modules, AR/VR simulations, and microlearning assets — calibrated to close specific skill gaps.",
  },
  {
    id: "perform",
    step: "03",
    icon: BarChart2,
    label: "Perform",
    headline: "Measure whether learning translated into performance.",
    body:
      "OKR tracking, supervisor sign-offs, and operational signals confirm that capability built in the classroom is showing up on the job.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---- Stage visuals ---------------------------------------- */
function AssessVisual() {
  const rows = [
    { label: "Technical Skills", value: 82, tone: "bg-primary-500" },
    { label: "Safety & Compliance", value: 64, tone: "bg-secondary-500" },
    { label: "Digital Fluency", value: 45, tone: "bg-primary-400" },
    { label: "Leadership", value: 58, tone: "bg-secondary-400" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Competency Heatmap</p>
        <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-bold text-primary-600">Role: Plant Operator</span>
      </div>
      {rows.map((r, i) => (
        <div key={r.label}>
          <div className="mb-1.5 flex justify-between text-[11px] font-medium text-neutral-600">
            <span>{r.label}</span>
            <span>{r.value}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
            <motion.div
              className={cn("h-full rounded-full", r.tone)}
              initial={{ width: 0 }}
              animate={{ width: `${r.value}%` }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function LearnVisual() {
  const modules = [
    { title: "SCADA Fundamentals", type: "AR/VR", done: true },
    { title: "Predictive Maintenance", type: "Microlearning", done: true },
    { title: "Digital Twin Basics", type: "SCORM", done: false },
    { title: "Root-Cause Analysis", type: "Scenario", done: false },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Personalised Path</p>
        <span className="rounded-full bg-secondary-50 px-2 py-0.5 text-[10px] font-bold text-secondary-600">2 of 4 complete</span>
      </div>
      {modules.map((m, i) => (
        <motion.div
          key={m.title}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.09, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/60 px-3 py-2.5"
        >
          <span
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full text-white",
              m.done ? "bg-secondary-500" : "border-2 border-dashed border-neutral-300 bg-white",
            )}
          >
            {m.done && <Check size={14} strokeWidth={3} />}
          </span>
          <span className="flex-1 text-sm font-medium text-ink">{m.title}</span>
          <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-neutral-500 ring-1 ring-neutral-200">{m.type}</span>
        </motion.div>
      ))}
    </div>
  );
}

function PerformVisual() {
  const okrs = [
    { label: "Time-to-Competence", value: 78, delta: "-31%" },
    { label: "OKR Achievement", value: 91, delta: "+18%" },
  ];
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Performance Signals</p>
      <div className="grid grid-cols-2 gap-3">
        {okrs.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
            className="rounded-xl border border-neutral-100 bg-neutral-50/60 p-3.5"
          >
            <div className="relative mx-auto mb-2 h-16 w-16">
              <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e8ecf2" strokeWidth="3.5" />
                <motion.circle
                  cx="18" cy="18" r="15.5" fill="none" stroke="#2E3192" strokeWidth="3.5" strokeLinecap="round"
                  strokeDasharray={97.4}
                  initial={{ strokeDashoffset: 97.4 }}
                  animate={{ strokeDashoffset: 97.4 - (97.4 * o.value) / 100 }}
                  transition={{ duration: 1, delay: i * 0.12, ease: EASE }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-ink">{o.value}%</span>
            </div>
            <p className="text-center text-[11px] font-medium leading-tight text-neutral-600">{o.label}</p>
            <p className="mt-1 text-center text-[11px] font-bold text-secondary-600">{o.delta}</p>
          </motion.div>
        ))}
      </div>
      <div className="rounded-xl bg-primary-600 px-4 py-3 text-white">
        <p className="text-[11px] font-medium text-white/80">Supervisor sign-off</p>
        <p className="text-sm font-semibold">Capability confirmed on the job ✓</p>
      </div>
    </div>
  );
}

const VISUALS: Record<string, () => React.ReactNode> = {
  assess: AssessVisual,
  learn: LearnVisual,
  perform: PerformVisual,
};

export default function PlatformPreview() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const activeStage = STAGES[active];
  const Visual = VISUALS[activeStage.id];
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || reduce) return;
    timer.current = setInterval(() => setActive((p) => (p + 1) % STAGES.length), 4200);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused, reduce]);

  return (
    <section
      id="platform-preview"
      aria-labelledby="platform-preview-heading"
      className="bg-white py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="platform-preview-heading"
          eyebrow="The Y&Now Platform"
          title="One platform. Three stages."
          highlight="Measurable outcomes."
          subtitle="Our proprietary platform integrates learning, role-based assessment, and OKR-aligned performance management — connecting directly to your existing HRMS and ERP systems."
          className="mb-14"
        />

        <div
          className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left — stage selectors */}
          <Reveal className="flex flex-col gap-3" y={20}>
            {STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = active === idx;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-pressed={isActive}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300",
                    isActive
                      ? "border-primary-200 bg-primary-50/50 shadow-sm"
                      : "border-neutral-150 bg-white hover:border-neutral-200 hover:bg-neutral-50",
                  )}
                  style={{ borderColor: isActive ? undefined : "#e8ecf2" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                        isActive ? "bg-primary-500 text-white" : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200",
                      )}
                    >
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <div className="mb-1 flex items-center gap-2">
                        <span className={cn("text-[11px] font-bold tracking-widest", isActive ? "text-primary-500" : "text-neutral-300")}>
                          {stage.step}
                        </span>
                        <span className={cn("text-sm font-bold uppercase tracking-wider", isActive ? "text-primary-700" : "text-neutral-600")}>
                          {stage.label}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-ink">{stage.headline}</p>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="overflow-hidden text-[13px] leading-relaxed text-neutral-600"
                          >
                            <span className="mt-2 block">{stage.body}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              );
            })}
          </Reveal>

          {/* Right — live visual panel */}
          <Reveal className="min-h-[380px]" y={20} delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-150 bg-white p-6 shadow-[0_18px_50px_rgba(20,21,46,0.08)]" style={{ borderColor: "#e8ecf2" }}>
              {/* subtle top glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary-500/10 blur-3xl" />
              <div className="relative mb-5 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                <span className="ml-2 text-xs font-medium text-neutral-400">yandnow · capability suite</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="relative"
                >
                  <Visual />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <CtaButton href="/our-platform" id="platform-preview-cta" variant="primary" className="px-8 py-3.5">
            See the Y&Now Platform in Detail
          </CtaButton>
        </Reveal>
      </Container>
    </section>
  );
}
