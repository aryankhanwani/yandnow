"use client";

import { useState } from "react";
import {
  ClipboardCheck, GraduationCap, Wrench, TrendingUp, RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   HOW WE WORK — 5-step framework as an interactive vertical
   timeline. Alternating sides on desktop, single rail on
   mobile, with a scroll-drawn progress line. Clicking a node
   pins it "active" (highlighted + slightly raised) so a visitor
   can compare steps at their own pace. Copy — Final Copy §4.
   ============================================================ */

interface Step {
  id: string;
  num: string;
  label: string;
  icon: LucideIcon;
  tint: string;
  description: string;
}

const STEPS: Step[] = [
  {
    id: "assess",
    num: "01",
    label: "Assess",
    icon: ClipboardCheck,
    tint: "46,49,146",
    description:
      "We map current competency across roles, functions, and levels to identify the exact gaps between where your workforce is and where it needs to be.",
  },
  {
    id: "train",
    num: "02",
    label: "Train",
    icon: GraduationCap,
    tint: "39,170,226",
    description:
      "Personalised learning paths — combining instructor-led training, digital modules, AR/VR simulation, and microlearning — close identified skill gaps at individual and team level.",
  },
  {
    id: "apply",
    num: "03",
    label: "Apply",
    icon: Wrench,
    tint: "31,34,103",
    description:
      "On-the-job tasks, manager check-ins, and live scenario assessments verify that learning is transferring from the training environment to the workplace.",
  },
  {
    id: "perform",
    num: "04",
    label: "Perform",
    icon: TrendingUp,
    tint: "23,25,80",
    description:
      "OKR tracking and performance signals measure whether capability improvements are showing up in actual job performance and operational KPIs.",
  },
  {
    id: "improve",
    num: "05",
    label: "Improve",
    icon: RefreshCw,
    tint: "32,180,232",
    description:
      "Analytics from each cycle inform the next — creating a continuous improvement loop between learning investment, performance data, and workforce planning.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function TimelineNode({ step, isActive }: { step: Step; isActive: boolean }) {
  const Icon = step.icon;
  return (
    <button
      type="button"
      className="absolute left-6 top-0 z-10 -translate-x-1/2 lg:left-1/2"
      aria-hidden
      tabIndex={-1}
    >
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-[0_6px_18px_rgba(20,21,46,0.10)] transition-all duration-300",
          isActive ? "scale-110 border-transparent" : "border-neutral-150",
        )}
        style={{
          borderColor: isActive ? undefined : "#e8ecf2",
          backgroundColor: isActive ? `rgb(${step.tint})` : undefined,
        }}
      >
        <Icon size={19} className={isActive ? "text-white" : "text-primary-600"} strokeWidth={2} />
      </span>
    </button>
  );
}

export default function HowWeWork() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="bg-surface py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="how-we-work-heading"
          eyebrow="Our Framework"
          title="Five steps from capability gap to"
          highlight="measurable performance"
          subtitle="Every programme we design runs through the same rigorous cycle — ensuring your investment in L&D shows up as real business outcomes. Click a step to focus on it."
          className="mb-16"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Rail — track + scroll-drawn fill */}
          <div className="absolute bottom-0 left-6 top-2 w-[2px] -translate-x-1/2 bg-neutral-150 lg:left-1/2" style={{ backgroundColor: "#e8ecf2" }} />
          <motion.div
            aria-hidden
            className="absolute left-6 top-2 w-[2px] -translate-x-1/2 origin-top rounded-full bg-primary-400 lg:left-1/2"
            style={{ bottom: 0 }}
            initial={{ scaleY: reduce ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 1.1, ease: EASE }}
          />

          <div className="space-y-10 lg:space-y-4">
            {STEPS.map((step, i) => {
              const even = i % 2 === 0;
              const isActive = active === step.id;
              return (
                <div
                  key={step.id}
                  className="relative pl-20 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pl-0"
                >
                  <TimelineNode step={step} isActive={isActive} />

                  <Reveal
                    y={20}
                    delay={i * 0.05}
                    className={cn(
                      "lg:py-6",
                      even ? "lg:col-start-1" : "lg:col-start-2 lg:row-start-1",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(isActive ? null : step.id)}
                      aria-pressed={isActive}
                      className={cn(
                        "w-full rounded-2xl border bg-white p-6 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(20,21,46,0.08)]",
                        isActive ? "shadow-[0_18px_40px_rgba(20,21,46,0.10)]" : "border-[#e8ecf2]",
                        even && "lg:text-right",
                      )}
                      style={{ borderColor: isActive ? `rgb(${step.tint})` : undefined }}
                    >
                      <div
                        className={cn(
                          "mb-2 flex items-center gap-2",
                          even && "lg:flex-row-reverse",
                        )}
                      >
                        <span className="text-[11px] font-bold tracking-widest text-primary-400">
                          STEP {step.num}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary-700">
                          {step.label}
                        </span>
                      </div>
                      <p className="text-[15px] leading-relaxed text-neutral-600">
                        {step.description}
                      </p>
                    </button>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
