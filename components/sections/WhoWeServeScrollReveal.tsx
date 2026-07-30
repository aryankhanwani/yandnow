"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2, Factory, Heart, Shield, School, GraduationCap, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVE_IMAGES } from "@/lib/demo-images";

/* ============================================================
   WHO WE SERVE — scroll-choreographed intro variant.
   ------------------------------------------------------------
   Standalone duplicate of WhoWeServe.tsx (that file is untouched
   — this is the "on top of" variant, not a replacement in place).

   Desktop only: the section pins while the user scrolls. Only the
   first panel is shown at first; each further scroll tick brings
   the next audience panel in (growing to full width) while the
   previous one collapses to the thin icon+label column. After the
   final panel (Learners) has been revealed, one last scroll tick
   hands the spotlight back to the first panel — landing on the
   exact same layout/behaviour as the production WhoWeServe
   gallery (panel 0 expanded, hover-to-expand from there on).
   Mobile keeps the plain stacked image list, no GSAP involved.
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

/* ---- Desktop: scroll-driven spotlight, then hover-expand -----
   The scroll position ONLY selects which panel is "active" (a
   discrete, snapped index) — it never scrubs the panel widths.
   Each panel animates between exactly two states (collapsed /
   expanded) via a fixed-duration motion transition, so it is
   always heading to one clean state and can never rest half-open.
   --------------------------------------------------------------- */
function HorizontalGallery({ rowRef }: { rowRef: RefObject<HTMLDivElement | null> }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setIntroDone(true);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pinTarget = rowRef.current?.closest<HTMLElement>("[data-pin-target]");
      const steps = AUDIENCES.length - 1; // 5 transitions across 6 panels
      const PX_PER_STEP = 340; // one deliberate scroll gesture per step

      setActive(0);
      setIntroDone(false);

      const st = ScrollTrigger.create({
        trigger: pinTarget ?? rowRef.current,
        start: "top top",
        end: () => `+=${steps * PX_PER_STEP}`,
        pin: true,
        anticipatePin: 1,
        // Snap so a released scroll always settles exactly on one
        // panel — never between two.
        snap: {
          snapTo: (value: number) => Math.round(value * steps) / steps,
          duration: { min: 0.15, max: 0.4 },
          ease: "power2.inOut",
          inertia: false,
        },
        onEnter: () => setIntroDone(false),
        onEnterBack: () => setIntroDone(false),
        onLeave: () => setIntroDone(true),
        // Scroll only picks the active index (nearest step). The
        // expand/collapse itself is handled by motion, decoupled.
        onUpdate: (self) => {
          const idx = Math.round(self.progress * steps);
          setActive((prev) => (prev === idx ? prev : idx));
        },
      });

      return () => st.kill();
    });

    return () => mm.revert();
  }, [reduce, rowRef]);

  const handleHover = (idx: number) => {
    if (!introDone) return;
    setActive(idx);
  };

  return (
    <div ref={rowRef} className="hidden lg:flex" style={{ height: "26rem" }}>
      {AUDIENCES.map((a, idx) => {
        const Icon = a.icon;
        const isActive = active === idx;
        // During the scroll intro, panels past the active index haven't
        // been "revealed" yet — collapse them to zero width + fade so the
        // section starts as a single full card and each one grows in on
        // scroll. After the intro (hover phase) every panel stays visible.
        const hidden = !introDone && idx > active;
        return (
          <motion.div
            key={a.id}
            className="relative cursor-pointer overflow-hidden rounded-3xl bg-neutral-100"
            style={{ flexBasis: 0, minWidth: 0, pointerEvents: hidden ? "none" : "auto" }}
            animate={{
              flexGrow: hidden ? 0 : isActive ? 6 : 1,
              opacity: hidden ? 0 : 1,
              // Spacing lives on the panels (not a flex gap) so hidden
              // panels collapse to truly zero width — no leftover gaps.
              marginLeft: idx === 0 || hidden ? 0 : 10,
            }}
            transition={{ duration: 0.6, ease: EASE }}
            onMouseEnter={() => handleHover(idx)}
            onClick={() => handleHover(idx)}
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
                  transition={{ duration: 0.35, delay: 0.12, ease: EASE }}
                  /* Fixed width so the copy lays out at its final size and is
                     simply clipped by the panel while it grows — never reflows. */
                  className="absolute inset-y-0 left-0 flex w-[34rem] max-w-none flex-col justify-between p-7"
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

export default function WhoWeServeScrollReveal() {
  const rowRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="who-we-serve"
      aria-labelledby="who-we-serve-heading"
      className="bg-surface py-20 lg:py-0"
    >
      {/* Pin target — during the scroll-choreographed intro, the whole
          heading + gallery block is centred in the viewport. Only the
          lg breakpoint is ever pinned (see gsap.matchMedia above). */}
      <div data-pin-target className="lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
        <Container>
          <SectionHeading
            id="who-we-serve-heading"
            eyebrow="Who We Serve"
            title="Capability programmes built for"
            highlight="every segment"
            className="mb-8 lg:mb-10"
          />

          <HorizontalGallery rowRef={rowRef} />
          <MobileStack />
        </Container>
      </div>
    </section>
  );
}
