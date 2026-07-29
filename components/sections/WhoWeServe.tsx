"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2, Factory, Heart, Shield, School, GraduationCap, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVE_IMAGES } from "@/lib/demo-images";

/* ============================================================
   WHO WE SERVE — horizontal hover-expand gallery.
   Six audience panels sit side-by-side; hovering (or tapping)
   one expands it to reveal the full image, headline, and CTA.
   Collapses to a stacked image list on mobile.
   Copy sourced from Final Copy doc — §2.
   ============================================================ */

interface Audience {
  id: string;
  icon: LucideIcon;
  category: string;
  headline: string;
  description: string;
  cta: string;
  href: string;
  image: string;
}

const AUDIENCES: Audience[] = [
  {
    id: "corporate",
    icon: Building2,
    category: "Corporate",
    headline: "Build a High-Performance Workforce",
    description:
      "Industry-aligned L&D that links training to OKRs, reduces time-to-competence, and integrates with your HRMS.",
    cta: "Explore Corporate Solutions",
    href: "/corporate",
    image: SERVE_IMAGES.corporate,
  },
  {
    id: "csr",
    icon: Heart,
    category: "CSR Sponsors",
    headline: "Deliver Measurable CSR Impact",
    description:
      "End-to-end skilling and livelihood programmes aligned to Schedule VII, with independent impact monitoring.",
    cta: "Partner on a CSR Programme",
    href: "/csr-programs",
    image: SERVE_IMAGES.csr,
  },
  {
    id: "industries",
    icon: Factory,
    category: "Industries",
    headline: "Train Industrial Workforces at Scale",
    description:
      "Sector-specific training for manufacturing and regulated environments — with AR/VR simulation and NSDC/NCVET co-badging.",
    cta: "Request a Sector Pilot",
    href: "/industry-solutions",
    image: SERVE_IMAGES.industries,
  },
  {
    id: "defence",
    icon: Shield,
    category: "Defence",
    headline: "Support Veteran Transition",
    description:
      "Structured post-service resettlement programmes that prepare armed forces personnel for civilian employment.",
    cta: "Explore Veteran Programmes",
    href: "/defence-programs",
    image: SERVE_IMAGES.defence,
  },
  {
    id: "schools",
    icon: School,
    category: "Schools",
    headline: "Build Industry Readiness Early",
    description:
      "NSQF-aligned vocational and applied skills programmes co-designed with industry employers.",
    cta: "Enquire About School Programmes",
    href: "/school-solutions",
    image: SERVE_IMAGES.schools,
  },
  {
    id: "learners",
    icon: GraduationCap,
    category: "Learners",
    headline: "Get Job-Ready with Y&Now",
    description:
      "Industry-recognised courses with placement support and employer connections across manufacturing, IT, and retail.",
    cta: "Find a Course",
    href: "/learners-b2c",
    image: SERVE_IMAGES.learners,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---- Desktop: horizontal expanding panels ---------------- */
function HorizontalGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="hidden gap-2.5 lg:flex" style={{ height: "26rem" }}>
      {AUDIENCES.map((a, idx) => {
        const Icon = a.icon;
        const isActive = active === idx;
        return (
          <motion.div
            key={a.id}
            className="relative cursor-pointer overflow-hidden rounded-3xl bg-neutral-100"
            style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0, minWidth: 0 }}
            animate={{ flexGrow: isActive ? 6 : 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            onMouseEnter={() => setActive(idx)}
            onClick={() => setActive(idx)}
          >
            <Image
              src={a.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            {/* Base darkening so collapsed labels stay legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />

            {/* Collapsed vertical label */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex flex-col items-center justify-between py-6"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-white [writing-mode:vertical-rl] rotate-180">
                    {a.category}
                  </span>
                  <span className="h-9 w-9" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.35, delay: 0.08, ease: EASE }}
                  className="absolute inset-0 flex flex-col justify-between p-7"
                >
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    <Icon size={13} />
                    {a.category}
                  </span>

                  <div className="max-w-md">
                    <h3 className="font-heading text-2xl font-700 leading-snug text-white">
                      {a.headline}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {a.description}
                    </p>
                    <Link
                      href={a.href}
                      className="group mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-neutral-100"
                    >
                      {a.cta}
                      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ---- Mobile: stacked image cards ------------------------- */
function MobileStack() {
  return (
    <div className="flex flex-col gap-4 lg:hidden">
      {AUDIENCES.map((a) => {
        const Icon = a.icon;
        return (
          <Link
            key={a.id}
            href={a.href}
            className="group relative block h-56 overflow-hidden rounded-2xl"
          >
            <Image src={a.image} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                <Icon size={12} />
                {a.category}
              </span>
              <h3 className="font-heading text-lg font-700 leading-snug text-white">{a.headline}</h3>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                {a.cta}
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      aria-labelledby="who-we-serve-heading"
      className="bg-surface py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="who-we-serve-heading"
          eyebrow="Who We Serve"
          title="Capability programmes built for"
          highlight="every segment"
          subtitle="Whether you run an enterprise L&D function, manage CSR commitments, or are an individual looking to grow — hover a panel to explore the programme designed for you."
          className="mb-12"
        />

        <HorizontalGallery />
        <MobileStack />
      </Container>
    </section>
  );
}
