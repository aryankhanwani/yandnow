import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UI Design Direction — Visual Language Guide | Y&Now",
  description:
    "UI design direction and visual language guidelines for the Y&Now website revamp — component patterns, layout principles, and interaction design.",
};

/* ================================================================
   DATA — UI direction principles & components
   ================================================================ */

const BRAND_COLORS = [
  { name: "Primary 500", hex: "#2E3192", label: "Deep Indigo-Blue", role: "Headings, CTAs, borders" },
  { name: "Secondary 500", hex: "#27AAE2", label: "Sky Blue", role: "Highlights, icons, accents" },
  { name: "Ink", hex: "#14152E", label: "Near-Black Navy", role: "All body text" },
  { name: "Surface", hex: "#F7F9FC", label: "Cool White", role: "Section backgrounds" },
  { name: "White", hex: "#FFFFFF", label: "Pure White", role: "Cards, containers" },
  { name: "Neutral 500", hex: "#6b7a98", label: "Cool Gray", role: "Secondary text" },
];

const GRADIENTS = [
  {
    name: "gradient-brand",
    style: "linear-gradient(135deg, #2E3192 0%, #27AAE2 100%)",
    usage: "Hero sections, primary CTA buttons",
    textColor: "#fff",
  },
  {
    name: "gradient-subtle",
    style: "linear-gradient(180deg, #F7F9FC 0%, #eeeef8 100%)",
    usage: "Alternating section backgrounds",
    textColor: "#14152E",
  },
  {
    name: "gradient-dark",
    style: "linear-gradient(135deg, #0f113a 0%, #2E3192 60%, #1f2267 100%)",
    usage: "Dark hero banners, footer pre-CTAs",
    textColor: "#fff",
  },
  {
    name: "gradient-overlay",
    style: "linear-gradient(180deg, rgba(15,17,58,0.90) 0%, rgba(15,17,58,0.40) 100%)",
    usage: "Photo text overlays (case study cards)",
    textColor: "#fff",
  },
];

const TYPOGRAPHY = [
  { role: "Display / Hero H1", size: "3.5rem / 56px", weight: "800", font: "Manrope", usage: "One per page only, hero blocks" },
  { role: "Page H1", size: "2.75rem / 44px", weight: "700", font: "Manrope", usage: "Page title beneath hero" },
  { role: "Section H2", size: "2.125rem / 34px", weight: "700", font: "Manrope", usage: "Section headings" },
  { role: "Card H3", size: "1.625rem / 26px", weight: "600", font: "Manrope", usage: "Card headings, sub-sections" },
  { role: "Item H4", size: "1.25rem / 20px", weight: "600", font: "Manrope", usage: "Feature labels" },
  { role: "Body Large", size: "1.125rem / 18px", weight: "400", font: "Inter", usage: "Hero subheadings, lead paragraphs" },
  { role: "Body", size: "1rem / 16px", weight: "400", font: "Inter", usage: "All body copy" },
  { role: "Body Small", size: "0.875rem / 14px", weight: "400", font: "Inter", usage: "Captions, metadata, dates" },
  { role: "Eyebrow / Label", size: "0.75rem / 12px", weight: "600", font: "Inter", usage: "Section labels (UPPERCASE + tracked)" },
];

const SPACING_SCALE = [
  { token: "4", px: "4px", usage: "Micro gap — icon to text" },
  { token: "8", px: "8px", usage: "Inner padding — badges, chips" },
  { token: "12", px: "12px", usage: "Button padding vertical" },
  { token: "16", px: "16px", usage: "Card inner padding" },
  { token: "24", px: "24px", usage: "Card padding (desktop)" },
  { token: "32", px: "32px", usage: "Section padding mobile" },
  { token: "48", px: "48px", usage: "Section gap" },
  { token: "64", px: "64px", usage: "Section padding desktop" },
  { token: "96", px: "96px", usage: "Hero top padding" },
  { token: "120", px: "120px", usage: "Max section vertical padding" },
];

const COMPONENTS = [
  {
    name: "Primary CTA Button",
    usage: "Main conversion action — 'Talk to Our Team', 'Request a Demo'",
    specs: "bg: gradient-brand · text: white · radius: 8px · padding: 12px 24px · font-weight: 600",
    notes: "Always max 1 per viewport. Hover: brightness +10%, shadow-glow.",
  },
  {
    name: "Secondary Button",
    usage: "Supporting actions — 'Learn More', 'Contact Us'",
    specs: "bg: transparent · border: 1px primary-300 · text: primary-600 · radius: 8px",
    notes: "Used alongside primary. Hover: bg primary-50.",
  },
  {
    name: "Eyebrow / Section Label",
    usage: "Section opening label e.g. 'WHO WE SERVE' or 'OUR SOLUTIONS'",
    specs: "font: Inter 600 · 12px · tracking: 0.1em · uppercase · color: secondary-500",
    notes: "Always preceded by short horizontal lines (left + right decorators).",
  },
  {
    name: "Service Card",
    usage: "Who We Serve section, Solutions grid",
    specs: "bg: white · radius: 16px · shadow-card · padding: 24px · border-top: 3px primary-500",
    notes: "Hover: shadow-glow + translateY(-4px). Icon at top-left in primary-100 circle.",
  },
  {
    name: "Stat Counter",
    usage: "Impact metrics, social proof bar",
    specs: "Number: display font 800 3.5rem primary-500 · Label: caption Inter 600 neutral-500",
    notes: "Animate count-up on scroll into view. Never show 0 — use verified data only.",
  },
  {
    name: "Testimonial Card",
    usage: "Client proof sections",
    specs: "bg: white · radius: 16px · shadow-card · quote in body-lg italic",
    notes: "Show: quote · name · designation · company · logo. No placeholder clients.",
  },
  {
    name: "Logo Strip / Marquee",
    usage: "Social proof bar — client logos",
    specs: "filter: grayscale(1) · opacity: 0.5 · hover: grayscale(0) opacity: 1",
    notes: "Auto-scroll marquee on mobile. Static grid on desktop.",
  },
  {
    name: "Process Step",
    usage: "5-step Assess→Train→Apply→Perform→Improve framework",
    specs: "Step number: gradient-brand circle 48px · label: h4 · description: body",
    notes: "Connected by subtle dashed line on desktop. Stack vertically on mobile.",
  },
  {
    name: "Nav Dropdown",
    usage: "Solutions mega-menu",
    specs: "bg: white/98 · backdrop-blur-xl · radius: 16px · shadow-xl · 2-column grid",
    notes: "Each item: thumbnail image (40px) + label + description. Footer CTA strip.",
  },
  {
    name: "Page Hero",
    usage: "Inner page heroes (Corporate, CSR, About, etc.)",
    specs: "bg: gradient-dark · min-height: 480px · eyebrow + h1 + subheading + CTAs",
    notes: "Never use generic stock photos. Use pattern/mesh background if no approved photo.",
  },
];

const MOTION = [
  { name: "Entrance", easing: "cubic-bezier(0.16, 1, 0.3, 1)", duration: "600ms", usage: "Elements entering viewport (header, cards)" },
  { name: "Hover lift", easing: "ease-out", duration: "200ms", usage: "Card translateY(-4px) on hover" },
  { name: "Nav dropdown", easing: "ease-out", duration: "250ms", usage: "Dropdown open/close opacity+scale" },
  { name: "Count-up", easing: "ease-out", duration: "1500ms", usage: "Stat counter animation on scroll-in" },
  { name: "Marquee scroll", easing: "linear", duration: "30s", usage: "Logo strip auto-scroll" },
  { name: "Shimmer sweep", easing: "linear", duration: "4s", usage: "Hero headline shimmer effect" },
];

const LAYOUT_PRINCIPLES = [
  {
    principle: "Max-Width Container",
    detail: "max-w-6xl (1152px) centered with px-4 (mobile) → px-8 (desktop). Never full-bleed text.",
  },
  {
    principle: "Section Rhythm",
    detail: "py-16 mobile → py-24 desktop. Alternating bg: white / surface (#F7F9FC). One accent section per page in gradient-dark.",
  },
  {
    principle: "Grid System",
    detail: "12-column base. Cards: 1-col mobile → 2-col tablet → 3-col desktop (gap-8). Hero always full-width.",
  },
  {
    principle: "Sticky Header",
    detail: "Fixed floating card header: transparent at top → glassy dark over hero video → white/97 scrolled. No content overlap on inner pages.",
  },
  {
    principle: "Z-Index Stack",
    detail: "z-10: cards/sections · z-20: sticky sidebar · z-30: header · z-40: drawer backdrop · z-50: drawer/modal",
  },
  {
    principle: "Image Treatment",
    detail: "All images: object-cover in defined aspect ratios. Client logos: grayscale by default. Hero: video or rich mesh pattern.",
  },
];

const PAGE_TEMPLATES = [
  {
    name: "Homepage",
    sections: [
      "Hero (fullscreen video bg, animated text)",
      "Social Proof Bar (logo marquee, stat chips)",
      "Who We Serve (6-card audience grid)",
      "Platform Preview (3-card: Assess / Learn / Perform)",
      "5-Step Framework (numbered process)",
      "Testimonials (client quote cards)",
      "FAQ (accordion for AEO)",
      "Footer CTA Band",
    ],
  },
  {
    name: "Solution Page (e.g. Corporate, CSR)",
    sections: [
      "Page Hero (gradient-dark, H1 + subheading + 2 CTAs)",
      "Overview paragraph + key metrics",
      "Programme categories (2-col grid)",
      "Why Y&Now (3 differentiators)",
      "5-Stage delivery model (condensed)",
      "Client proof / case study pullout",
      "Related solutions (horizontal scroll cards)",
      "Footer CTA Band",
    ],
  },
  {
    name: "Our Platform",
    sections: [
      "Hero (product screenshot/demo video)",
      "3 pillars: Assess / Learn / Perform",
      "Integrations grid (HRMS/ERP logos)",
      "Feature table (vs. standard LMS)",
      "Security & compliance (ISO badge)",
      "CTA: Request Demo",
    ],
  },
  {
    name: "About Us",
    sections: [
      "Hero (team photo or brand illustration)",
      "Mission statement",
      "History timeline",
      "Leadership team (photo cards)",
      "Strategic partners (logo grid)",
      "ISO 9001:2015 certification callout",
      "Parent company (BroadArks) section",
    ],
  },
  {
    name: "Contact Us",
    sections: [
      "Split layout: form (left) + info (right)",
      "Audience router: Enterprise / CSR / Learner tabs",
      "Form fields: Name · Company · Role · Email · Phone · Message",
      "Office address + map embed",
      "Social links",
    ],
  },
];

/* ================================================================
   HELPER COMPONENTS
   ================================================================ */

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: subtitle ? "8px" : "0",
          paddingBottom: "16px",
          borderBottom: "2px solid #2E3192",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.375rem",
            fontWeight: 700,
            color: "#14152E",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          style={{
            fontSize: "0.85rem",
            color: "#6b7a98",
            margin: "8px 0 0",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      style={{ marginBottom: "64px", scrollMarginTop: "24px" }}
    >
      {children}
    </section>
  );
}

function Tag({ children, color = "#2E3192" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: `${color}15`,
        color,
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        borderRadius: "5px",
        padding: "2px 7px",
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */
export default function UIDirectionPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-body, system-ui, sans-serif)",
        color: "#14152E",
        background: "#F7F9FC",
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      {/* ── HEADER ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f113a 0%, #1f2267 50%, #27AAE2 150%)",
          padding: "80px 40px 56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-60px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(39,170,226,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "20%",
            width: "600px",
            height: "200px",
            background: "radial-gradient(ellipse, rgba(46,49,146,0.3) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link href="/" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Y&Now
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>/</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>UI Direction</span>
          </div>

          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#27AAE2",
              margin: "0 0 16px",
            }}
          >
            Design Language
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            UI Design Direction
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.65)",
              margin: "0 0 40px",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            Visual language, component patterns, layout principles, and motion
            guidelines for the Y&Now website revamp. A living reference for every
            design and engineering decision.
          </p>

          {/* Quick nav pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["#colors", "#typography", "#gradients", "#components", "#layout", "#motion", "#templates"].map((href) => (
              <a
                key={href}
                href={href}
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "6px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                  letterSpacing: "0.04em",
                }}
              >
                {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SUBJECT TO CHANGE BANNER ── */}
      <div
        style={{
          background: "linear-gradient(90deg, #7c2d12 0%, #9a3412 40%, #c2410c 100%)",
          borderBottom: "1px solid rgba(251,146,60,0.3)",
          padding: "0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 40px",
            display: "flex",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >
          {/* Warning icon */}
          <div
            style={{
              flexShrink: 0,
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "rgba(251,146,60,0.2)",
              border: "1px solid rgba(251,146,60,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              marginTop: "1px",
            }}
          >
            ⚠
          </div>
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#fb923c",
                margin: "0 0 4px",
              }}
            >
              Work in Progress — Subject to Change
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.85)",
                margin: 0,
                lineHeight: 1.6,
                maxWidth: "760px",
              }}
            >
              Everything on this page — colors, typography, components, motion, and page templates — is a{" "}
              <strong style={{ color: "#fb923c" }}>living draft</strong>. These directions will continue
              to evolve as we design, prototype, and develop. Do not treat any specification here as final
              until confirmed in a reviewed design handoff.
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 40px 0" }}>

        {/* ══ 1. COLOR PALETTE ══ */}
        <Section id="colors">
          <SectionHeader
            title="Color Palette"
            subtitle="The Y&Now palette uses deep indigo-blue (primary) and sky blue (secondary) — never generic saturated hues. Always pair against Ink text, never pure black."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px" }}>
            {BRAND_COLORS.map((c) => {
              const isLight = c.hex === "#F7F9FC" || c.hex === "#FFFFFF";
              return (
                <div
                  key={c.name}
                  style={{
                    background: "white",
                    border: "1px solid #e8ecf2",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "80px",
                      background: c.hex,
                      border: isLight ? "1px solid #e8ecf2" : "none",
                    }}
                  />
                  <div style={{ padding: "12px 14px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#14152E",
                        margin: "0 0 2px",
                      }}
                    >
                      {c.name}
                    </p>
                    <code
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "ui-monospace, monospace",
                        color: "#6b7a98",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {c.hex}
                    </code>
                    <p style={{ fontSize: "0.7rem", color: "#8e9cb8", margin: "0 0 6px", lineHeight: 1.4 }}>
                      {c.label}
                    </p>
                    <Tag>{c.role}</Tag>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Do / Don't */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            <div
              style={{
                background: "rgba(34,197,94,0.04)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderLeft: "3px solid #22c55e",
                borderRadius: "10px",
                padding: "16px 20px",
              }}
            >
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#16a34a", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>
                ✓ Do
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "0.82rem", color: "#14152E", lineHeight: 1.8 }}>
                <li>Use Ink (#14152E) for all body text</li>
                <li>Use neutral-600 (#53607c) for secondary text</li>
                <li>Use secondary-500 (#27AAE2) for icon fills and highlights</li>
                <li>Pair primary-500 with white for CTAs</li>
              </ul>
            </div>
            <div
              style={{
                background: "rgba(239,68,68,0.04)",
                border: "1px solid rgba(239,68,68,0.2)",
                borderLeft: "3px solid #ef4444",
                borderRadius: "10px",
                padding: "16px 20px",
              }}
            >
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#dc2626", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>
                ✗ Don&apos;t
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: "0.82rem", color: "#14152E", lineHeight: 1.8 }}>
                <li>Never use pure black (#000) for text</li>
                <li>Never use pure red, green, or yellow as brand colors</li>
                <li>Don&apos;t mix primary and secondary at equal weight</li>
                <li>Don&apos;t use low-contrast neutral on neutral backgrounds</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ══ 2. GRADIENTS ══ */}
        <Section id="gradients">
          <SectionHeader
            title="Gradient Tokens"
            subtitle="Each gradient is semantically named. Use gradient-brand for primary CTAs and hero blocks only — never for decorative accents."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
            {GRADIENTS.map((g) => (
              <div
                key={g.name}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid #e8ecf2",
                }}
              >
                <div
                  style={{
                    height: "120px",
                    background: g.style,
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "16px 20px",
                  }}
                >
                  <code
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "ui-monospace, monospace",
                      color: g.textColor,
                      opacity: 0.85,
                      fontWeight: 600,
                    }}
                  >
                    .{g.name}
                  </code>
                </div>
                <div style={{ background: "white", padding: "14px 18px" }}>
                  <p style={{ fontSize: "0.78rem", color: "#14152E", margin: "0 0 4px", fontWeight: 500 }}>
                    {g.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ══ 3. TYPOGRAPHY ══ */}
        <Section id="typography">
          <SectionHeader
            title="Typography Scale"
            subtitle="Manrope for all headings (Display → H4). Inter for all body copy, labels, and UI text. Never mix these roles."
          />
          <div
            style={{
              background: "white",
              border: "1px solid #e8ecf2",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {TYPOGRAPHY.map((t, i) => (
              <div
                key={t.role}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 120px 80px 1fr",
                  gap: "16px",
                  padding: "14px 20px",
                  borderBottom: i < TYPOGRAPHY.length - 1 ? "1px solid #f4f6f9" : "none",
                  alignItems: "center",
                  background: i % 2 === 0 ? "white" : "#fafbff",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#2E3192",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.role}
                </span>
                <code
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "ui-monospace, monospace",
                    color: "#6b7a98",
                  }}
                >
                  {t.size}
                </code>
                <span style={{ fontSize: "0.7rem", color: "#8e9cb8" }}>
                  <strong style={{ color: "#53607c" }}>{t.weight}</strong> · {t.font}
                </span>
                <span style={{ fontSize: "0.78rem", color: "#53607c" }}>{t.usage}</span>
              </div>
            ))}
          </div>

          {/* Typography sample */}
          <div
            style={{
              marginTop: "24px",
              background: "white",
              border: "1px solid #e8ecf2",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#27AAE2",
                margin: "0 0 12px",
              }}
            >
              Who We Serve
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2.125rem",
                fontWeight: 700,
                color: "#14152E",
                margin: "0 0 16px",
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
              }}
            >
              Workforce capability for every sector
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                color: "#53607c",
                margin: 0,
                lineHeight: 1.75,
                maxWidth: "600px",
              }}
            >
              From enterprise L&D to community skilling, Y&Now designs capability
              programmes that measure performance outcomes — not just course completion.
            </p>
          </div>
        </Section>

        {/* ══ 4. SPACING ══ */}
        <Section id="layout">
          <SectionHeader
            title="Spacing & Layout"
            subtitle="Consistent vertical rhythm using a base-4 spacing scale. Section padding always py-16 mobile → py-24 desktop."
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
            {/* Spacing scale */}
            <div
              style={{
                background: "white",
                border: "1px solid #e8ecf2",
                borderRadius: "14px",
                padding: "20px 24px",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6b7a98",
                  margin: "0 0 16px",
                }}
              >
                Spacing Scale
              </p>
              {SPACING_SCALE.map((s) => (
                <div
                  key={s.token}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      height: "20px",
                      width: `${Math.min(parseInt(s.px) * 0.8, 120)}px`,
                      background: "linear-gradient(90deg, #2E3192, #27AAE2)",
                      borderRadius: "3px",
                      flexShrink: 0,
                      minWidth: "4px",
                    }}
                  />
                  <code
                    style={{
                      fontSize: "0.68rem",
                      fontFamily: "ui-monospace, monospace",
                      color: "#2E3192",
                      minWidth: "50px",
                      flexShrink: 0,
                    }}
                  >
                    {s.px}
                  </code>
                  <span style={{ fontSize: "0.72rem", color: "#6b7a98" }}>{s.usage}</span>
                </div>
              ))}
            </div>

            {/* Layout principles */}
            <div
              style={{
                background: "white",
                border: "1px solid #e8ecf2",
                borderRadius: "14px",
                padding: "20px 24px",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6b7a98",
                  margin: "0 0 16px",
                }}
              >
                Layout Principles
              </p>
              {LAYOUT_PRINCIPLES.map((l) => (
                <div
                  key={l.principle}
                  style={{
                    marginBottom: "16px",
                    paddingBottom: "16px",
                    borderBottom: "1px solid #f4f6f9",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#14152E",
                      margin: "0 0 4px",
                    }}
                  >
                    {l.principle}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "#53607c", margin: 0, lineHeight: 1.6 }}>
                    {l.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Grid visual */}
          <div
            style={{
              background: "white",
              border: "1px solid #e8ecf2",
              borderRadius: "14px",
              padding: "24px",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6b7a98",
                margin: "0 0 16px",
              }}
            >
              Grid — Section Pattern (Mobile → Tablet → Desktop)
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "flex-start" }}>
              {/* Mobile */}
              <div style={{ flex: "0 0 auto" }}>
                <p style={{ fontSize: "0.65rem", color: "#8e9cb8", margin: "0 0 8px", textAlign: "center" }}>Mobile</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "6px", width: "80px" }}>
                  {[1,2,3].map(i => (
                    <div key={i} style={{ height: "40px", background: "#eeeef8", borderRadius: "6px", border: "1px solid #b0b2e2" }} />
                  ))}
                </div>
              </div>
              {/* Tablet */}
              <div style={{ flex: "0 0 auto" }}>
                <p style={{ fontSize: "0.65rem", color: "#8e9cb8", margin: "0 0 8px", textAlign: "center" }}>Tablet</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", width: "160px" }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{ height: "40px", background: "#eeeef8", borderRadius: "6px", border: "1px solid #b0b2e2" }} />
                  ))}
                </div>
              </div>
              {/* Desktop */}
              <div style={{ flex: "1 1 auto" }}>
                <p style={{ fontSize: "0.65rem", color: "#8e9cb8", margin: "0 0 8px", textAlign: "center" }}>Desktop</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} style={{ height: "40px", background: "#eeeef8", borderRadius: "6px", border: "1px solid #b0b2e2" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ══ 5. COMPONENTS ══ */}
        <Section id="components">
          <SectionHeader
            title="Component Library"
            subtitle="Core UI components and their design specifications. Every component should adhere to these specs — no ad-hoc styles."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "16px" }}>
            {COMPONENTS.map((c, i) => (
              <div
                key={c.name}
                style={{
                  background: "white",
                  border: "1px solid #e8ecf2",
                  borderRadius: "14px",
                  padding: "20px 22px",
                  borderLeft: `3px solid ${i % 3 === 0 ? "#2E3192" : i % 3 === 1 ? "#27AAE2" : "#6669c4"}`,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: "#14152E",
                    margin: "0 0 8px",
                  }}
                >
                  {c.name}
                </p>
                <p style={{ fontSize: "0.78rem", color: "#2E3192", margin: "0 0 10px", fontWeight: 500 }}>
                  {c.usage}
                </p>
                <div
                  style={{
                    background: "#f4f6f9",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    marginBottom: "10px",
                  }}
                >
                  <code
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "ui-monospace, monospace",
                      color: "#3f4b61",
                      lineHeight: 1.7,
                    }}
                  >
                    {c.specs}
                  </code>
                </div>
                <p style={{ fontSize: "0.75rem", color: "#6b7a98", margin: 0, lineHeight: 1.6 }}>
                  <span style={{ fontWeight: 600, color: "#53607c" }}>Note: </span>
                  {c.notes}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ══ 6. MOTION ══ */}
        <Section id="motion">
          <SectionHeader
            title="Motion & Animation"
            subtitle="All animations should feel purposeful and premium — never decorative for its own sake. Use ease-out for entrances; linear for loops."
          />
          <div
            style={{
              background: "white",
              border: "1px solid #e8ecf2",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {MOTION.map((m, i) => (
              <div
                key={m.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr 120px 1fr",
                  gap: "16px",
                  padding: "14px 20px",
                  borderBottom: i < MOTION.length - 1 ? "1px solid #f4f6f9" : "none",
                  alignItems: "center",
                  background: i % 2 === 0 ? "white" : "#fafbff",
                }}
              >
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#14152E" }}>{m.name}</span>
                <code style={{ fontSize: "0.7rem", fontFamily: "ui-monospace, monospace", color: "#6b7a98" }}>
                  {m.easing}
                </code>
                <code style={{ fontSize: "0.72rem", fontFamily: "ui-monospace, monospace", color: "#2E3192" }}>
                  {m.duration}
                </code>
                <span style={{ fontSize: "0.78rem", color: "#53607c" }}>{m.usage}</span>
              </div>
            ))}
          </div>

          {/* Motion rules */}
          <div
            style={{
              marginTop: "20px",
              background: "#0f113a",
              borderRadius: "14px",
              padding: "24px 28px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#27AAE2",
                margin: "0 0 12px",
              }}
            >
              Motion rules
            </p>
            <ul style={{ margin: 0, padding: "0 0 0 20px", fontSize: "0.82rem", lineHeight: 2 }}>
              <li>Respect <code style={{ fontFamily: "ui-monospace, monospace", color: "#92d5f4" }}>prefers-reduced-motion</code> — disable all animations if set</li>
              <li>No animation duration above 600ms for UI interactions</li>
              <li>Entry animations fire once — not on every scroll revisit</li>
              <li>Use <code style={{ fontFamily: "ui-monospace, monospace", color: "#92d5f4" }}>will-change: transform</code> only for elements actively animating</li>
              <li>Hero video must autoplay, muted, loop — with a static fallback image</li>
            </ul>
          </div>
        </Section>

        {/* ══ 7. PAGE TEMPLATES ══ */}
        <Section id="templates">
          <SectionHeader
            title="Page Templates"
            subtitle="Standard section order for each page type. Maintain this structure across all page builds for consistency."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {PAGE_TEMPLATES.map((t, idx) => (
              <div
                key={t.name}
                style={{
                  background: "white",
                  border: "1px solid #e8ecf2",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                {/* Template header */}
                <div
                  style={{
                    padding: "16px 20px",
                    background: idx === 0
                      ? "linear-gradient(135deg, #2E3192, #27AAE2)"
                      : "linear-gradient(135deg, #0f113a, #2E3192)",
                    borderBottom: "1px solid #e8ecf2",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "white",
                      margin: 0,
                    }}
                  >
                    {t.name}
                  </p>
                </div>

                {/* Sections list */}
                <div style={{ padding: "16px 20px" }}>
                  {t.sections.map((s, i) => (
                    <div
                      key={s}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        marginBottom: i < t.sections.length - 1 ? "10px" : 0,
                        paddingBottom: i < t.sections.length - 1 ? "10px" : 0,
                        borderBottom: i < t.sections.length - 1 ? "1px solid #f4f6f9" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.62rem",
                          fontWeight: 700,
                          color: "rgba(46,49,146,0.5)",
                          fontFamily: "ui-monospace, monospace",
                          minWidth: "22px",
                          marginTop: "1px",
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "#3f4b61", lineHeight: 1.5 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Internal navigation band ── */}
        <div
          style={{
            marginTop: "24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <Link
            href="/design-system"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "white",
              border: "1px solid #e8ecf2",
              borderRadius: "14px",
              padding: "20px 24px",
              textDecoration: "none",
              transition: "box-shadow 0.2s ease",
            }}
          >
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#27AAE2", margin: "0 0 4px" }}>
                Design Tokens
              </p>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "#14152E", margin: 0 }}>
                Token Verification →
              </p>
            </div>
          </Link>
          <Link
            href="/sitemap"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "linear-gradient(135deg, #2E3192 0%, #27AAE2 100%)",
              borderRadius: "14px",
              padding: "20px 24px",
              textDecoration: "none",
            }}
          >
            <div>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", margin: "0 0 4px" }}>
                Site Architecture
              </p>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "white", margin: 0 }}>
                View Site Map →
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
