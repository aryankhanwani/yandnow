"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/utils";

/* ============================================================
   NAV DATA - links, and nothing else.

   The dropdowns used to carry a one-line description and a
   photograph per entry, which meant opening the Solutions menu
   fetched seven images and asked the visitor to read seven
   sentences to pick one of seven links. The names are the
   information; the pages do the explaining.
   ============================================================ */

interface NavLink {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavLink[];
}

const SOLUTIONS: NavLink[] = [
  { label: "Corporate Training", href: "/corporate" },
  { label: "CSR Programmes", href: "/csr-programs" },
  { label: "Industry Solutions", href: "/industry-solutions" },
  { label: "Defence Programmes", href: "/defence-programs" },
  { label: "School Solutions", href: "/school-solutions" },
  { label: "Micro-Entrepreneurship", href: "/micro-entrepreneurship" },
  { label: "For Learners", href: "/learners-b2c" },
];

const RESOURCES: NavLink[] = [
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "#", children: SOLUTIONS },
  { label: "Our Platform", href: "/our-platform" },
  { label: "About Us", href: "/about-us" },
  { label: "Resources", href: "#", children: RESOURCES },
];

const CTA_LABEL = "Talk to Y&Now";
const CTA_HREF = "/contact-us";

/** Same-URL clicks return to the top; Next does nothing by default. */
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

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      aria-hidden
      className={cn("transition-transform transition-house", open && "rotate-180")}
    >
      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

/* ============================================================
   DESKTOP DROPDOWN - a two-column list of links.

   Opens on hover *and* on click or keyboard focus. Hover alone
   is inaccessible and dead on a touch screen, so the button is a
   real button with aria-expanded and the panel closes on Escape
   and on outside click.
   ============================================================ */
function DesktopDropdown({
  item,
  onDark,
  align = "left",
}: {
  item: NavItem;
  onDark: boolean;
  /** The rightmost menu opens to the left so a 1024px viewport can hold it. */
  align?: "left" | "right";
}) {
  const twoUp = item.children!.length > 4;
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onTop = useTopNavClick();
  const panelId = `nav-panel-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (wrapper.current && !wrapper.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <div
      ref={wrapper}
      className="relative"
      onMouseEnter={() => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        closeTimer.current = setTimeout(() => setOpen(false), 140);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-11 items-center gap-1.5 px-3 text-body-sm transition-colors transition-house",
          onDark ? "text-white hover:text-white/70" : "text-ink hover:text-brand",
        )}
      >
        {item.label}
        <Chevron open={open} />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className={cn(
          "absolute top-full z-50 rounded-lg border border-hairline bg-surface p-3 shadow-lg",
          twoUp ? "w-[28rem]" : "w-56",
          align === "right" ? "right-0" : "left-0",
        )}
      >
        <ul className={cn("grid gap-x-4", twoUp && "grid-cols-2")}>
          {item.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={(e) => {
                  onTop(child.href)(e);
                  setOpen(false);
                }}
                className="flex min-h-11 items-center rounded-lg px-3 text-body-sm text-ink transition-colors transition-house hover:bg-surface-alt hover:text-brand"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ============================================================
   MOBILE MENU - a full-screen overlay, not a cramped drawer.

   Body scroll is locked while it is open, focus is trapped
   inside it, Escape closes it, and it closes on route change.
   Solutions and Resources are accordion groups, closed by
   default. The CTA sits at the bottom, where a thumb is.
   ============================================================ */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const onTop = useTopNavClick();

  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const node = panel.current;
    const focusables = () =>
      Array.from(
        node?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((el) => el.offsetParent !== null);

    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      id="mobile-nav"
      className="safe-top safe-bottom fixed inset-0 z-50 flex flex-col bg-surface lg:hidden"
    >
      <div className="flex h-16 items-center justify-between px-5">
        <Link href="/" onClick={onClose} aria-label="Y&Now, home">
          <Image src="/logo.png" alt="Y&Now" width={96} height={32} className="h-8 w-auto" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
          className="flex h-11 w-11 items-center justify-center text-ink"
        >
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden>
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* data-lenis-prevent: Lenis owns the wheel globally and would
          otherwise swallow gestures made over the open menu. */}
      <nav data-lenis-prevent className="flex-1 overflow-y-auto px-5 pb-8">
        <ul className="border-t border-hairline">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <li key={item.label} className="border-b border-hairline">
                <button
                  type="button"
                  aria-expanded={openGroup === item.label}
                  aria-controls={`mobile-group-${item.label}`}
                  onClick={() =>
                    setOpenGroup(openGroup === item.label ? null : item.label)
                  }
                  className="flex min-h-14 w-full items-center justify-between py-3 text-h4 text-ink"
                >
                  {item.label}
                  <Chevron open={openGroup === item.label} />
                </button>
                <ul id={`mobile-group-${item.label}`} hidden={openGroup !== item.label} className="pb-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={(e) => {
                          onTop(child.href)(e);
                          onClose();
                        }}
                        className="flex min-h-11 items-center py-1 text-body text-ink-muted"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.href} className="border-b border-hairline">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    onTop(item.href)(e);
                    onClose();
                  }}
                  className="flex min-h-14 items-center py-3 text-h4 text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <CtaButton href={CTA_HREF} onClick={onClose} className="mt-8 w-full">
          {CTA_LABEL}
        </CtaButton>
      </nav>
    </div>
  );
}

/* ============================================================
   HEADER

   One bar. The previous version kept two full navbars mounted at
   once - a flat one and a floating capsule - so every link label
   appeared twice in the DOM ("HomeHome", "SolutionsSolutions").
   `inert` hid the spare from the keyboard but the duplicate text
   was still there to be read. There is now one bar, and it
   changes ground rather than being replaced.

   64px tall below lg, 72px from lg, sticky at every size, and it
   respects the iOS safe area at the top.
   ============================================================ */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onTop = useTopNavClick();
  const isHome = pathname === "/";

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* Never leave the mobile menu open across a route change. Adjusted
     during render rather than in an effect, so the menu is already
     closed on the first frame of the new page instead of flashing
     open for one. */
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  /* Land at the top of every page on cross-page navigation (skip when
     the URL carries a hash, so in-page anchors still work). */
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  /* Over the hero video the bar is transparent and its contents are
     white; everywhere else it is a solid surface. */
  const onDark = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "safe-top fixed inset-x-0 top-0 z-40 transition-colors transition-house-slow",
          onDark ? "bg-transparent" : "border-b border-hairline bg-surface",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:px-8 lg:h-[72px] lg:px-12">
          <Link
            href="/"
            onClick={onTop("/")}
            aria-label="Y&Now, home"
            className="flex-shrink-0"
          >
            <Image
              /* Over the video the grey wordmark disappears, so the bar
                 swaps to the knocked-out variant. */
              src={onDark ? "/logo-light.png" : "/logo.png"}
              alt="Y&Now, Workforce Capability Solutions"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  onDark={onDark}
                  align={item.label === "Resources" ? "right" : "left"}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onTop(item.href)}
                  className={cn(
                    "flex h-11 items-center px-3 text-body-sm transition-colors transition-house",
                    onDark ? "text-white hover:text-white/70" : "text-ink hover:text-brand",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <CtaButton
            href={CTA_HREF}
            id="header-cta"
            onDark={onDark}
            className="hidden lg:inline-flex"
          >
            {CTA_LABEL}
          </CtaButton>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            className={cn(
              "-mr-2 flex h-11 w-11 items-center justify-center lg:hidden",
              onDark ? "text-white" : "text-ink",
            )}
          >
            <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden>
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
