"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import CountUp from "@/components/ui/CountUp";
import { Marquee } from "@/components/ui/marquee";

/* ============================================================
   SOCIAL PROOF BAR — below hero.
   Lean treatment: one-line trust statement + animated
   "3,800+ organisations" counter + dual-direction logo marquee
   (Magic UI's Marquee component — magicui.design).
   Source: Final Copy doc — Section 1.
   ============================================================ */

const CLIENTS_ROW_1 = [
  { name: "Tata Group", abbr: "TG" },
  { name: "JSW", abbr: "JSW" },
  { name: "Castrol India", abbr: "CI" },
  { name: "BPCL", abbr: "BPCL" },
  { name: "Jaquar", abbr: "JQ" },
  { name: "Indian Army", abbr: "IA" },
];

const CLIENTS_ROW_2 = [
  { name: "Indian Oil", abbr: "IOC" },
  { name: "Boeing", abbr: "BA" },
  { name: "Reliance Foundation", abbr: "RF" },
  { name: "NSDC", abbr: "NSDC" },
  { name: "CRISP", abbr: "CR" },
  { name: "MPIHTTS", abbr: "MP" },
];

function LogoChip({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      className="flex flex-shrink-0 select-none items-center gap-3 rounded-xl border bg-white px-5 py-3 transition-colors"
      style={{ borderColor: "#e8ecf2", boxShadow: "0 1px 4px rgba(20,21,46,0.05)" }}
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-primary-50">
        <span className="text-[10px] font-bold leading-none tracking-tight text-primary-600">{abbr}</span>
      </div>
      <span className="whitespace-nowrap text-[13px] font-semibold text-neutral-700">{name}</span>
    </div>
  );
}

export default function LogoSection() {
  return (
    <section
      id="logo-section"
      aria-label="Trusted client organisations"
      className="overflow-hidden border-b border-neutral-100 bg-white py-16"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Trusted across India
          </p>
          <p className="max-w-2xl text-balance text-lg font-medium text-neutral-700">
            <CountUp to={3800} suffix="+" className="font-heading font-800 text-primary-600" /> organisations
            trust Y&Now across manufacturing, energy, retail, defence &amp; financial services.
          </p>
        </motion.div>
      </Container>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 inset-y-0 z-10 w-24" style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="pointer-events-none absolute right-0 inset-y-0 z-10 w-24" style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <Marquee pauseOnHover className="mb-3 [--duration:34s] [--gap:0.75rem]">
          {CLIENTS_ROW_1.map((c) => <LogoChip key={c.name} name={c.name} abbr={c.abbr} />)}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:0.75rem]">
          {CLIENTS_ROW_2.map((c) => <LogoChip key={c.name} name={c.name} abbr={c.abbr} />)}
        </Marquee>
      </div>
    </section>
  );
}
