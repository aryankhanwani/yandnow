"use client";

import { Building2, Users, UserCheck, BadgeCheck, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";

/* ============================================================
   IMPACT METRICS — animated outcome counters.
   ------------------------------------------------------------
   ⚠️  [VERIFY BEFORE PUBLISHING] The figures below are
   placeholders. The content doc (Section 6) requires these to
   be replaced with M&E / Business-team-verified numbers before
   go-live. Only "3,800+ organisations" is already public copy.
   Edit the METRICS array to update.
   ============================================================ */

interface Metric {
  id: string;
  icon: LucideIcon;
  to: number;
  suffix: string;
  label: string;
}

const METRICS: Metric[] = [
  { id: "orgs", icon: Building2, to: 3800, suffix: "+", label: "Organisations served across India" },
  { id: "learners", icon: Users, to: 250000, suffix: "+", label: "Learners trained and assessed" },
  { id: "faculty", icon: UserCheck, to: 1200, suffix: "+", label: "Instructors, mentors & facilitators" },
  { id: "completion", icon: BadgeCheck, to: 92, suffix: "%", label: "Average programme completion rate" },
];

export default function ImpactMetrics() {
  return (
    <section id="impact-metrics" aria-labelledby="impact-metrics-heading" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="impact-metrics-heading"
          eyebrow="Measurable Outcomes"
          title="Impact you can put in a"
          highlight="board report"
          subtitle="We measure what matters — and report it transparently. Capability programmes delivered at national scale, with outcomes tracked end-to-end."
          className="mb-14"
        />

        <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6" stagger={0.1}>
          {METRICS.map((m) => {
            const Icon = m.icon;
            return (
              <StaggerItem key={m.id}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-[#e8ecf2] bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_18px_40px_rgba(20,21,46,0.08)] lg:p-8">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-neutral-100">
                    <Icon size={22} className="text-primary-600" strokeWidth={2} />
                  </div>
                  <CountUp
                    to={m.to}
                    suffix={m.suffix}
                    className="font-heading text-[clamp(1.9rem,4vw,2.75rem)] font-800 leading-none text-ink"
                  />
                  <p className="mx-auto mt-3 max-w-[180px] text-sm leading-snug text-neutral-600">
                    {m.label}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
