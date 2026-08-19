"use client";

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

const STATS = [
  { title: "Organisations", to: 3800, suffix: "+", sub: "served across India" },
  { title: "Learners", to: 250000, suffix: "+", sub: "trained and assessed" },
  { title: "Facilitators", to: 1200, suffix: "+", sub: "instructors & mentors" },
  { title: "Completion", to: 92, suffix: "%", sub: "average programme rate" },
];

export default function ImpactMetrics() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Impact you can put in a board report"
          align="left"
          className="mb-14"
          titleClassName="max-w-none text-balance text-[clamp(1.75rem,3.2vw,2.6rem)] md:whitespace-nowrap md:text-[clamp(0.875rem,4.15vw,2.6rem)]"
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
