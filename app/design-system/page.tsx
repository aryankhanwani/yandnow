/* ===============================================================
   Design System Verification Page - YandNow
   Temporary page to visually verify all design tokens.
   Delete this route once approved.
   =============================================================== */

/* ---- Color swatch data ---------------------------------------- */
const primaryScale = [
  { name: "50",  hex: "#eeeef8" },
  { name: "100", hex: "#d4d5ef" },
  { name: "200", hex: "#b0b2e2" },
  { name: "300", hex: "#8b8ed5" },
  { name: "400", hex: "#6669c4" },
  { name: "500", hex: "#2E3191", isBrand: true },
  { name: "600", hex: "#272a7e" },
  { name: "700", hex: "#1f2267" },
  { name: "800", hex: "#171950" },
  { name: "900", hex: "#0f113a" },
  { name: "950", hex: "#080920" },
];

const secondaryScale = [
  { name: "50",  hex: "#e8f6fd" },
  { name: "100", hex: "#c4e8f9" },
  { name: "200", hex: "#92d5f4" },
  { name: "300", hex: "#5ec0ed" },
  { name: "400", hex: "#32b4e8" },
  { name: "500", hex: "#27AAE1", isBrand: true },
  { name: "600", hex: "#208fc0" },
  { name: "700", hex: "#19729a" },
  { name: "800", hex: "#125673" },
  { name: "900", hex: "#0b3a4d" },
  { name: "950", hex: "#061e28" },
];

const grayScale = [
  { name: "50",  hex: "#f6f6f6" },
  { name: "100", hex: "#e9e9e9" },
  { name: "200", hex: "#d4d4d4" },
  { name: "300", hex: "#b8b8b8" },
  { name: "400", hex: "#8f9090" },
  { name: "500", hex: "#606161", isBrand: true },
  { name: "600", hex: "#4e4f4f" },
  { name: "700", hex: "#3d3e3e" },
  { name: "800", hex: "#2b2c2c" },
  { name: "900", hex: "#1a1a1a" },
];

const neutralScale = [
  { name: "50",  hex: "#f4f6f9" },
  { name: "100", hex: "#e8ecf2" },
  { name: "200", hex: "#d1d8e6" },
  { name: "300", hex: "#b3bdd0" },
  { name: "400", hex: "#8e9cb8" },
  { name: "500", hex: "#6b7a98" },
  { name: "600", hex: "#53607c" },
  { name: "700", hex: "#3f4b61" },
  { name: "800", hex: "#2b3247" },
  { name: "900", hex: "#1a1f2e" },
];

const singletons = [
  { name: "ink",     hex: "#14152E", label: "Ink: near-black navy, high-contrast body text" },
  { name: "surface", hex: "#F7F9FC", label: "Surface: light cool-white section background" },
  { name: "white",   hex: "#FFFFFF", label: "White: pure white, use sparingly" },
];

/* ---- Gradient data -------------------------------------------- */
const gradients = [
  {
    name: "gradient-brand",
    label: "gradient-brand",
    description: "Primary → Secondary · 135deg · Hero sections & primary CTAs",
    style: "linear-gradient(135deg, #2E3191 0%, #27AAE1 100%)",
    textColor: "#ffffff",
  },
  {
    name: "gradient-subtle",
    label: "gradient-subtle",
    description: "Surface → Primary-50 · 180deg · Low-contrast section backgrounds",
    style: "linear-gradient(180deg, #F7F9FC 0%, #eeeef8 100%)",
    textColor: "#14152E",
  },
  {
    name: "gradient-overlay",
    label: "gradient-overlay",
    description: "Primary-900 90% → Primary-900 40% opacity · 180deg · Photo text overlays",
    style: "linear-gradient(180deg, rgba(15,17,58,0.90) 0%, rgba(15,17,58,0.40) 100%)",
    textColor: "#ffffff",
    showOnImage: true,
  },
  {
    name: "gradient-glow",
    label: "gradient-glow",
    description: "Secondary 25% opacity → transparent · Radial · Decorative accent behind cards/stats",
    style: "radial-gradient(ellipse at center, rgba(39,170,226,0.25) 0%, transparent 70%)",
    textColor: "#14152E",
  },
];

/* ---- Typography scale data ------------------------------------ */
const typeScale = [
  {
    name: "display",
    label: "Display",
    size: "3.5rem / 56px",
    weight: "800",
    lineHeight: "1.1",
    className: "text-display",
    sample: "Transform Your Workforce",
  },
  {
    name: "h1",
    label: "H1",
    size: "2.75rem / 44px",
    weight: "700",
    lineHeight: "1.15",
    className: "text-h1",
    sample: "Measurable Learning Outcomes",
  },
  {
    name: "h2",
    label: "H2",
    size: "2.125rem / 34px",
    weight: "700",
    lineHeight: "1.25",
    className: "text-h2",
    sample: "Enterprise Training Programs",
  },
  {
    name: "h3",
    label: "H3",
    size: "1.625rem / 26px",
    weight: "600",
    lineHeight: "1.3",
    className: "text-h3",
    sample: "Skills Assessment & Tracking",
  },
  {
    name: "h4",
    label: "H4",
    size: "1.25rem / 20px",
    weight: "600",
    lineHeight: "1.4",
    className: "text-h4",
    sample: "Custom Learning Paths",
  },
  {
    name: "body-lg",
    label: "Body LG",
    size: "1.125rem / 18px",
    weight: "400",
    lineHeight: "1.75",
    className: "text-body-lg",
    sample:
      "Empower your teams with industry-leading training designed to drive real business results. Our platform adapts to your workforce's unique needs.",
  },
  {
    name: "body",
    label: "Body",
    size: "1rem / 16px",
    weight: "400",
    lineHeight: "1.75",
    className: "text-body",
    sample:
      "Structured learning journeys built around your company's goals. Track progress, measure ROI, and celebrate milestones with your team.",
  },
  {
    name: "body-sm",
    label: "Body SM",
    size: "0.875rem / 14px",
    weight: "400",
    lineHeight: "1.6",
    className: "text-body-sm",
    sample:
      "Contact support · Privacy policy · Terms of service · © 2025 YandNow Inc.",
  },
  {
    name: "caption",
    label: "Caption / Eyebrow",
    size: "0.75rem / 12px",
    weight: "600",
    lineHeight: "1.5",
    className: "text-caption",
    sample: "Measurable Outcomes",
  },
];

/* ---- Font family data ------------------------------------------ */
const fontFamilies = [
  {
    role: "Heading font",
    name: "Manrope",
    cssVar: "var(--font-heading)",
    weights: "500, 600, 700, 800",
    usage: "Display, H1–H4, section titles, card titles",
    sample: "Aa Bb Cc",
    weight: 800,
  },
  {
    role: "Body font",
    name: "Inter",
    cssVar: "var(--font-body)",
    weights: "400, 500, 600",
    usage: "Body copy, captions, UI labels, buttons, nav",
    sample: "Aa Bb Cc",
    weight: 400,
  },
];

/* ---- Border radius & shadow data ------------------------------ */
const radiusExamples = [
  { name: "card",    value: "16px",  style: { borderRadius: "16px" } },
  { name: "pill",    value: "999px", style: { borderRadius: "999px" } },
  { name: "default", value: "4px",   style: { borderRadius: "4px" } },
  { name: "md",      value: "6px",   style: { borderRadius: "6px" } },
];

const shadowExamples = [
  {
    name: "card",
    description: "Subtle cool-toned lift",
    style: {
      boxShadow: "0 4px 24px 0 rgba(20,21,46,0.08), 0 1px 4px 0 rgba(20,21,46,0.04)",
      borderRadius: "16px",
    },
  },
  {
    name: "glow",
    description: "Secondary color halo, hover states",
    style: {
      boxShadow: "0 0 32px 8px rgba(39,170,226,0.18)",
      borderRadius: "16px",
    },
  },
  {
    name: "none",
    description: "No shadow, flat",
    style: {
      boxShadow: "none",
      border: "1px solid #e8ecf2",
      borderRadius: "16px",
    },
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */
export default function DesignSystemPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-body, system-ui, sans-serif)",
        color: "#14152E",
        background: "#F7F9FC",
        minHeight: "100vh",
        padding: "0 0 80px",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 40px 0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Y&Now"
          style={{ height: "44px", width: "auto", display: "block", marginBottom: "28px" }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#53607c",
            margin: "0 0 12px",
          }}
        >
          Y&Now · Design System
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#14152E",
            margin: "0 0 8px",
          }}
        >
          Token Verification
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            lineHeight: 1.75,
            color: "#53607c",
            margin: "0 0 48px",
            maxWidth: "600px",
          }}
        >
          Visual proof of every design token: colors, gradients, typography,
          radii, and shadows. Approve this page before building real components.
        </p>
        {/* ============ SECTION 1: COLORS ============ */}
        <Section id="colors" title="Color Tokens">
          {/* Primary */}
          <SwatchGroup label="Primary Scale · #2E3191 (deep indigo-blue)" swatches={primaryScale} />

          {/* Secondary */}
          <SwatchGroup
            label="Secondary Scale · #27AAE1 (sky blue)"
            swatches={secondaryScale}
          />

          {/* Brand Gray */}
          <SwatchGroup
            label="Brand Gray Scale · #606161 (the 3rd Brand Book colour)"
            swatches={grayScale}
          />

          {/* Neutral */}
          <SwatchGroup
            label="Neutral Scale · cool blue-undertone grays (UI)"
            swatches={neutralScale}
          />

          {/* Singletons */}
          <div style={{ marginTop: "32px" }}>
            <p style={{ ...labelStyle, marginBottom: "12px" }}>
              Semantic Single Values
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {singletons.map((s) => (
                <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "180px" }}>
                  <div
                    style={{
                      width: "180px",
                      height: "72px",
                      borderRadius: "12px",
                      background: s.hex,
                      border: s.hex === "#FFFFFF" ? "1px solid #d1d8e6" : "none",
                    }}
                  />
                  <div>
                    <p style={{ ...monoStyle, color: "#14152E", margin: "0 0 2px" }}>
                      <strong>{s.name}</strong> · {s.hex}
                    </p>
                    <p style={{ ...captionStyle, color: "#6b7a98" }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ============ SECTION 2: GRADIENTS ============ */}
        <Section id="gradients" title="Gradient Tokens">
          {gradients.map((g) => (
            <div key={g.name} style={{ marginBottom: "24px" }}>
              <div
                style={{
                  width: "100%",
                  height: "120px",
                  background: g.style,
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px 24px",
                  position: "relative",
                  ...(g.showOnImage
                    ? {
                        backgroundImage: `${g.style}, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='120'%3E%3Crect fill='%2327AAE1' width='400' height='120'/%3E%3Ccircle cx='200' cy='60' r='80' fill='%232E3191' opacity='.5'/%3E%3C/svg%3E")`,
                        backgroundSize: "cover, cover",
                      }
                    : {}),
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: g.textColor,
                    margin: "0 0 4px",
                  }}
                >
                  .{g.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: g.textColor,
                    opacity: 0.8,
                    margin: 0,
                  }}
                >
                  {g.description}
                </p>
              </div>
            </div>
          ))}
        </Section>

        {/* ============ SECTION 3: FONTS ============ */}
        <Section id="fonts" title="Fonts">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {fontFamilies.map((f) => (
              <div
                key={f.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "24px",
                  alignItems: "center",
                  background: "white",
                  border: "1px solid #e8ecf2",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#27AAE1",
                      margin: "0 0 6px",
                    }}
                  >
                    {f.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#14152E",
                      margin: "0 0 8px",
                    }}
                  >
                    {f.name}
                  </p>
                  <p style={{ ...monoStyle, margin: "0 0 4px", color: "#53607c" }}>
                    {f.cssVar}
                  </p>
                  <p style={{ ...monoStyle, margin: "0 0 4px", color: "#8e9cb8" }}>
                    weights: {f.weights}
                  </p>
                  <p style={{ ...captionStyle, color: "#6b7a98" }}>{f.usage}</p>
                </div>
                <div
                  style={{
                    fontFamily: f.cssVar,
                    fontWeight: f.weight,
                    fontSize: "3rem",
                    lineHeight: 1.1,
                    color: "#14152E",
                    letterSpacing: f.role === "Heading font" ? "-0.02em" : "normal",
                  }}
                >
                  {f.sample}
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.25rem",
                      fontWeight: f.weight,
                      marginTop: "8px",
                    }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ============ SECTION 4: TYPOGRAPHY ============ */}
        <Section id="typography" title="Typography Scale">
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              border: "1px solid #e8ecf2",
              overflow: "hidden",
            }}
          >
            {typeScale.map((t, i) => (
              <div
                key={t.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "24px",
                  alignItems: "center",
                  padding: "24px",
                  borderBottom:
                    i < typeScale.length - 1 ? "1px solid #e8ecf2" : "none",
                  background: i % 2 === 0 ? "white" : "#f4f6f9",
                }}
              >
                {/* Meta */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#2E3191",
                      margin: "0 0 4px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {t.label}
                  </p>
                  <p style={{ ...monoStyle, margin: "0 0 2px", color: "#53607c" }}>
                    {t.size}
                  </p>
                  <p style={{ ...monoStyle, margin: 0, color: "#8e9cb8" }}>
                    weight {t.weight} · lh {t.lineHeight}
                  </p>
                </div>
                {/* Sample */}
                <div
                  style={
                    t.name === "display"
                      ? {
                          fontFamily: "var(--font-heading)",
                          fontSize: "3.5rem",
                          lineHeight: 1.1,
                          fontWeight: 800,
                          letterSpacing: "-0.02em",
                          color: "#14152E",
                        }
                      : t.name === "h1"
                      ? {
                          fontFamily: "var(--font-heading)",
                          fontSize: "2.75rem",
                          lineHeight: 1.15,
                          fontWeight: 700,
                          letterSpacing: "-0.015em",
                          color: "#14152E",
                        }
                      : t.name === "h2"
                      ? {
                          fontFamily: "var(--font-heading)",
                          fontSize: "2.125rem",
                          lineHeight: 1.25,
                          fontWeight: 700,
                          letterSpacing: "-0.01em",
                          color: "#14152E",
                        }
                      : t.name === "h3"
                      ? {
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.625rem",
                          lineHeight: 1.3,
                          fontWeight: 600,
                          color: "#14152E",
                        }
                      : t.name === "h4"
                      ? {
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.25rem",
                          lineHeight: 1.4,
                          fontWeight: 600,
                          color: "#14152E",
                        }
                      : t.name === "body-lg"
                      ? {
                          fontFamily: "var(--font-body)",
                          fontSize: "1.125rem",
                          lineHeight: 1.75,
                          fontWeight: 400,
                          color: "#14152E",
                        }
                      : t.name === "body"
                      ? {
                          fontFamily: "var(--font-body)",
                          fontSize: "1rem",
                          lineHeight: 1.75,
                          fontWeight: 400,
                          color: "#14152E",
                        }
                      : t.name === "body-sm"
                      ? {
                          fontFamily: "var(--font-body)",
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                          fontWeight: 400,
                          color: "#53607c",
                        }
                      : {
                          /* caption */
                          fontFamily: "var(--font-body)",
                          fontSize: "0.75rem",
                          lineHeight: 1.5,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase" as const,
                          color: "#27AAE1",
                        }
                  }
                >
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ============ SECTION 5: BORDER RADIUS & SHADOWS ============ */}
        <Section id="radius-shadow" title="Border Radius & Shadows">
          {/* Border radius */}
          <p style={{ ...labelStyle, marginBottom: "16px" }}>Border Radius</p>
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            {radiusExamples.map((r) => (
              <div key={r.name} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "120px",
                    height: "80px",
                    background: "linear-gradient(135deg, #2E3191 0%, #27AAE1 100%)",
                    ...r.style,
                    marginBottom: "10px",
                  }}
                />
                <p style={{ ...monoStyle, margin: "0 0 2px" }}>
                  <strong>{r.name}</strong>
                </p>
                <p style={{ ...captionStyle, color: "#6b7a98" }}>{r.value}</p>
              </div>
            ))}
          </div>

          {/* Shadows */}
          <p style={{ ...labelStyle, marginBottom: "16px" }}>Box Shadows</p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {shadowExamples.map((s) => (
              <div key={s.name}>
                <div
                  style={{
                    width: "220px",
                    height: "120px",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    ...s.style,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#14152E",
                      margin: 0,
                    }}
                  >
                    shadow-{s.name}
                  </p>
                </div>
                <p style={{ ...captionStyle, color: "#6b7a98", textAlign: "center" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ============ SECTION 6: FONT PAIRING CONVENTIONS ============ */}
        <Section id="conventions" title="Font Pairing Conventions">
          <div
            style={{
              background: "#0f113a",
              borderRadius: "16px",
              padding: "32px",
              color: "rgba(255,255,255,0.9)",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              lineHeight: 1.8,
            }}
          >
            <pre
              style={{
                fontFamily: "ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace",
                fontSize: "0.8125rem",
                color: "#92d5f4",
                background: "rgba(0,0,0,0.3)",
                padding: "24px",
                borderRadius: "8px",
                overflowX: "auto",
                margin: 0,
              }}
            >
              {`/* Font Pairing Conventions
 * ─────────────────────────────────────────────
 *
 *  Headings (display, h1–h4):
 *    font-family: var(--font-heading)  → Manrope
 *    font-weight: 700  (display: 800)
 *    letter-spacing: -0.01em to -0.02em (tight)
 *
 *  Eyebrow / Section labels (caption):
 *    font-family: var(--font-body)     → Inter
 *    font-weight: 600
 *    letter-spacing: 0.1em
 *    text-transform: uppercase
 *    Example: "MEASURABLE OUTCOMES"
 *
 *  Body text (body-lg, body, body-sm):
 *    font-family: var(--font-body)     → Inter
 *    font-weight: 400
 *    line-height: 1.6 – 1.75 (comfortable reading)
 *
 *  UI labels / buttons / nav items:
 *    font-family: var(--font-body)     → Inter
 *    font-weight: 500–600
 *
 * ─────────────────────────────────────────────
 *  NEVER use pure black (#000) for text.
 *  Use ink (#14152E) for max contrast.
 *  Use neutral-600 (#53607c) for secondary text.
 *  Use neutral-400 (#8e9cb8) for placeholder/hint text.
 */`}
            </pre>
          </div>
        </Section>
      </div>
    </div>
  );
}

/* ================================================================
   SHARED HELPER COMPONENTS
   ================================================================ */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      style={{
        marginBottom: "64px",
        scrollMarginTop: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
          paddingBottom: "16px",
          borderBottom: "2px solid #2E3191",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#14152E",
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function SwatchGroup({
  label,
  swatches,
}: {
  label: string;
  swatches: { name: string; hex: string; isBrand?: boolean }[];
}) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <p style={{ ...labelStyle, marginBottom: "12px" }}>{label}</p>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {swatches.map((s) => {
          const isLight = parseInt(s.name) <= 200 || s.name === "50";
          const textColor = isLight ? "#14152E" : "#ffffff";
          return (
            <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "10px",
                  background: s.hex,
                  border: s.isBrand ? "3px solid #27AAE1" : "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {s.isBrand && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-4px",
                      background: "#27AAE1",
                      color: "white",
                      fontSize: "9px",
                      fontWeight: 700,
                      padding: "2px 5px",
                      borderRadius: "4px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    BRAND
                  </span>
                )}
                <span
                  style={{
                    color: textColor,
                    fontSize: "0.65rem",
                    fontFamily: "ui-monospace, monospace",
                    fontWeight: 600,
                    opacity: 0.9,
                    textAlign: "center",
                    padding: "4px",
                    lineHeight: 1.4,
                  }}
                >
                  {s.hex}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "0.7rem",
                  color: "#53607c",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                -{s.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ================================================================
   STYLE OBJECTS (shared)
   ================================================================ */
const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#53607c",
};

const monoStyle: React.CSSProperties = {
  fontFamily: "ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace",
  fontSize: "0.75rem",
  color: "#3f4b61",
};

const captionStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.7rem",
  fontWeight: 500,
  color: "#8e9cb8",
  margin: 0,
};
