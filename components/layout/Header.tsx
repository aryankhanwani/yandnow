"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown, Menu, X, ArrowRight, ArrowUpRight,
  Building2, Heart, Factory, Shield, School, GraduationCap, Store,
  type LucideIcon,
} from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/utils";

/* ============================================================
   NAV DATA - each solution carries an icon, contextual photo,
   and a one-line description for the mega-menu preview.
   ============================================================ */
interface SubLink {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  /** Project-hosted photography used in the desktop preview and mobile thumbnail. */
  image: string;
  tag?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubLink[];
}

const SOLUTIONS: SubLink[] = [
  {
    label: "Corporate Training",
    href: "/corporate",
    description: "Enterprise L&D tied to real outcomes.",
    icon: Building2,
    image: "/images/solutions-navbar/corporate-training.jpg",
    tag: "Popular",
  },
  {
    label: "CSR Programs",
    href: "/csr-programs",
    description: "Schedule VII skilling with clear impact.",
    icon: Heart,
    image: "/images/solutions-navbar/csr-programs.jpg",
  },
  {
    label: "Industry Solutions",
    href: "/industry-solutions",
    description: "Capability for manufacturing & energy.",
    icon: Factory,
    image: "/images/solutions-navbar/industry-solutions.jpg",
  },
  {
    label: "Defence Programs",
    href: "/defence-programs",
    description: "Resettlement programmes for veterans.",
    icon: Shield,
    image: "/images/solutions-navbar/defence-programs.jpg",
  },
  {
    label: "School Solutions",
    href: "/school-solutions",
    description: "NSQF industry-readiness for students.",
    icon: School,
    image: "/images/solutions-navbar/school-solutions.jpg",
  },
  {
    label: "Micro-Entrepreneurship",
    href: "/micro-entrepreneurship",
    description: "Turn skills into steady income.",
    icon: Store,
    image: "/images/solutions-navbar/micro-entrepreneurship.jpg",
  },
  {
    label: "For Learners",
    href: "/learners-b2c",
    description: "Upskilling with placement support.",
    icon: GraduationCap,
    image: "/images/solutions-navbar/for-learners.jpg",
  },
];

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "#", children: SOLUTIONS },
  { label: "Our Platform", href: "/our-platform" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
];

const CTA_LABEL = "Talk to Our Team";
const CTA_HREF = "/contact-us";

/* ============================================================
   useTopNavClick - makes every navbar link land at the TOP of
   the target page. Cross-page navigation already tops via the
   route-change effect in <Header>; this handles the same-page
   case (Next does nothing on a same-URL click), scrolling back
   up smoothly instead of leaving the visitor where they were.
   ============================================================ */
function useTopNavClick() {
  const pathname = usePathname();
  return (href: string) => (e: React.MouseEvent) => {
    const target = href.split(/[?#]/)[0] || "/";
    if (target === pathname && !href.includes("#")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
}

/* ============================================================
   PREVIEW ART - contextual photography with a brand-toned text
   scrim. Each image is project-hosted and solution-specific.
   ============================================================ */
function PreviewArt({ item }: { item: SubLink }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-primary-900">
      <Image
        src={item.image}
        alt=""
        fill
        sizes="240px"
        className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/15 via-primary-950/20 to-primary-950/95" />
      <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
      {/* Foreground content - label only (no description / CTA) */}
      <div className="relative flex h-full items-end p-5">
        <p className="font-heading text-lg font-700 leading-tight text-white">{item.label}</p>
      </div>
    </div>
  );
}

/* ============================================================
   HOVER-SLIDE LABEL - on hover the current label slides up and
   out while an identical copy slides up from below to replace
   it; reverses smoothly when the hover ends. Used by every text
   nav item on both the full-width and floating navbars.
   ============================================================ */
function HoverSlideLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline-flex h-[1.2em] items-center justify-center overflow-hidden align-middle", className)}>
      <span className="flex h-full items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}

/* ============================================================
   DESKTOP DROPDOWN - two-pane mega menu with live preview
   ============================================================ */
function DesktopDropdown({ item, idPrefix }: { item: NavItem; idPrefix: string }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onTop = useTopNavClick();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const active = item.children![activeIndex];

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        id={`${idPrefix}-nav-dropdown-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-neutral-700 outline-none transition-colors duration-300 hover:bg-black/5 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-300"
      >
        <HoverSlideLabel>{item.label}</HoverSlideLabel>
        <ChevronDown
          size={13}
          strokeWidth={2.5}
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[620px] -translate-x-1/2 overflow-hidden rounded-2xl border border-neutral-100 bg-white backdrop-blur-xl"
            style={{ boxShadow: "0 24px 70px rgba(14,16,58,0.16), 0 4px 16px rgba(14,16,58,0.06)" }}
          >
            <div className="grid grid-cols-[1fr_240px]">
              {/* Left - solution list */}
              <div className="p-2.5">
                <p className="px-3 pb-1.5 pt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                  Our Solutions
                </p>
                {item.children!.map((child, idx) => {
                  const Icon = child.icon;
                  const isActive = activeIndex === idx;
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      role="menuitem"
                      onMouseEnter={() => setActiveIndex(idx)}
                      onFocus={() => setActiveIndex(idx)}
                      onClick={(e) => { onTop(child.href)(e); setOpen(false); }}
                      className="group/item relative flex items-center gap-3 rounded-xl px-3 py-2.5"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          className="absolute inset-0 rounded-xl bg-primary-50"
                        />
                      )}
                      <span
                        className={cn(
                          "relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-200",
                          isActive ? "bg-primary-500 text-white" : "bg-neutral-100 text-neutral-500",
                        )}
                      >
                        <Icon size={17} strokeWidth={2} />
                      </span>
                      <span className="relative z-10 flex min-w-0 flex-1 items-center gap-2">
                        <span
                          className={cn(
                            "text-[13.5px] font-semibold leading-tight transition-colors duration-200",
                            isActive ? "text-primary-700" : "text-ink",
                          )}
                        >
                          {child.label}
                        </span>
                        {child.tag && (
                          <span className="rounded-full bg-secondary-500 px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none tracking-wide text-white">
                            {child.tag}
                          </span>
                        )}
                      </span>
                      <ArrowRight
                        size={14}
                        className={cn(
                          "relative z-10 flex-shrink-0 text-primary-500 transition-all duration-200",
                          isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0",
                        )}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Right - live preview panel */}
              <div className="relative m-2.5 ml-0 overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.href}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Link href={active.href} onClick={() => setOpen(false)} className="block h-full">
                      <PreviewArt item={active} />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50 px-4 py-2.5">
              <span className="text-xs font-medium text-neutral-500">Not sure which solution fits?</span>
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="group inline-flex items-center gap-1 text-xs font-semibold text-primary-600 hover:text-primary-700"
              >
                Talk to our team
                <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================================================
   MOBILE ACCORDION ITEM
   ============================================================ */
function MobileAccordion({ item, onLinkClick }: { item: NavItem; onLinkClick: () => void }) {
  const [open, setOpen] = useState(false);
  const onTop = useTopNavClick();

  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-ink"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={18}
          className={cn("text-neutral-400 transition-transform duration-250", open && "rotate-180")}
        />
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="space-y-1 pb-3">
          {item.children!.map((child) => {
            const Icon = child.icon;
            return (
              <Link
                key={child.href}
                href={child.href}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-primary-50"
                onClick={(e) => { onTop(child.href)(e); onLinkClick(); }}
              >
                <span className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary-800 text-white">
                  <Image src={child.image} alt="" fill sizes="40px" className="object-cover" />
                  <span className="absolute inset-0 bg-primary-950/35" />
                  <Icon className="relative" size={16} strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink">{child.label}</span>
                  <span className="mt-0.5 block truncate text-xs text-neutral-500">{child.description}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MOBILE MENU DRAWER
   ============================================================ */
function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const onTop = useTopNavClick();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(340px,100vw)] flex-col bg-white shadow-lg transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <Link href="/" onClick={onClose}>
            <Image src="/logo.png" alt="Y&Now" width={96} height={32} className="h-8 w-auto object-contain" />
          </Link>
          <button
            id="mobile-nav-close"
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* data-lenis-prevent: Lenis owns the wheel globally and would
            otherwise swallow scroll gestures made over the open drawer
            instead of scrolling this panel. */}
        <nav data-lenis-prevent className="flex-1 overflow-y-auto px-5 py-4">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <MobileAccordion key={item.label} item={item} onLinkClick={onClose} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center border-b border-neutral-100 py-3.5 text-base font-semibold text-ink transition-colors last:border-0 hover:text-primary-600"
                onClick={(e) => { onTop(item.href)(e); onClose(); }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="border-t border-neutral-100 px-5 py-5">
          <CtaButton href={CTA_HREF} id="mobile-nav-cta" variant="primary" className="w-full justify-center px-6 py-3" onClick={onClose}>
            {CTA_LABEL}
          </CtaButton>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   NAV ROW - shared logo / links / CTA / mobile-toggle markup,
   rendered once per bar (idPrefix keeps element ids unique since
   both bars stay mounted so the slide transition can animate).
   ============================================================ */
function NavRow({ idPrefix, onOpenMobile }: { idPrefix: string; onOpenMobile: () => void }) {
  const onTop = useTopNavClick();
  return (
    <div className="mx-auto flex h-[64px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <Link href="/" onClick={onTop("/")} id={`${idPrefix}-site-logo`} aria-label="Y&Now, home" className="logo-hover flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Y&Now, Workforce Capability Solutions"
          width={120}
          height={40}
          className="h-9 w-auto object-contain"
          priority
        />
      </Link>

      <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 lg:flex">
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <DesktopDropdown key={item.label} item={item} idPrefix={idPrefix} />
          ) : (
            <Link
              key={item.href}
              href={item.href}
              onClick={onTop(item.href)}
              id={`${idPrefix}-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="group rounded-lg px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors duration-300 hover:bg-black/5 hover:text-primary-600"
            >
              <HoverSlideLabel>{item.label}</HoverSlideLabel>
            </Link>
          ),
        )}
      </nav>

      <div className="hidden items-center gap-2 lg:flex">
        <CtaButton href={CTA_HREF} id={`${idPrefix}-header-cta-primary`} variant="primary" className="px-5 py-2">
          {CTA_LABEL}
        </CtaButton>
      </div>

      <button
        id={`${idPrefix}-mobile-nav-toggle`}
        onClick={onOpenMobile}
        aria-label="Open navigation"
        aria-controls="mobile-nav-drawer"
        className="rounded-lg p-2 text-neutral-700 transition-colors hover:bg-neutral-100 lg:hidden"
      >
        <Menu size={22} />
      </button>
    </div>
  );
}

/* ============================================================
   MAIN HEADER
   ────────────────────────────────────────────────────────────
   Two physical bars, both always mounted so the swap animates:
     • Flat bar   - full-width, flush with the viewport edge.
                    Translucent + blurred on the homepage (the
                    colour wash behind the hero shows through),
                    solid white on inner pages. Slides straight
                    up and out once the page scrolls.
     • Floating   - centred capsule, rounded + shadowed. Sits
                    just above the viewport until the page
                    scrolls, then slides down into place.
   The inactive bar is marked `inert` so it's never focusable or
   exposed to assistive tech while it's off-screen.
   ============================================================ */
type NavPhase = "top" | "scrolled";

export default function Header() {
  const [navPhase, setNavPhase] = useState<NavPhase>("top");
  const [isHome, setIsHome] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  /* Land at the top of every page on cross-page navigation
     (skip when the URL carries a hash, so in-page anchors work). */
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  useEffect(() => {
    const detectHome = () => setIsHome(!!document.getElementById("hero-section-root"));
    detectHome();

    const update = () => setNavPhase(window.scrollY <= 24 ? "top" : "scrolled");
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const scrolled = navPhase === "scrolled";
  const openMobile = () => setMobileOpen(true);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-30">
        {/* Flat, full-width bar - slides up and out once scrolled */}
        <div
          className={cn(
            "flex justify-center transition-transform duration-500 ease-out",
            scrolled ? "-translate-y-full" : "translate-y-0",
          )}
          inert={scrolled}
        >
          <header
            className={cn(
              "header-entrance w-full transition-colors duration-500",
              /* Home: flat white, no border or shadow, so the bar sits
                 seamlessly on the hero's plain white top. Inner pages
                 keep the hairline + lift against their tinted heroes. */
              isHome
                ? "bg-white"
                : "border-b border-neutral-100 bg-white shadow-sm",
            )}
          >
            <NavRow idPrefix="flat" onOpenMobile={openMobile} />
          </header>
        </div>

        {/* Floating capsule - slides down into view once scrolled */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 flex justify-center px-4 pt-4 transition-transform duration-500 ease-out",
            scrolled ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]",
          )}
          inert={!scrolled}
        >
          <header className="w-full max-w-7xl rounded-xl border border-neutral-100 bg-white/95 shadow-lg backdrop-blur-md">
            <NavRow idPrefix="floating" onOpenMobile={openMobile} />
          </header>
        </div>
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
