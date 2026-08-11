import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Map — Full Page Architecture | Y&Now",
  description:
    "Complete site map for Y&Now — every page, route, and information architecture layer for the Y&Now workforce capability platform.",
};

/* ================================================================
   DATA — Full site architecture from the master revamp document
   ================================================================ */

interface SitemapPage {
  label: string;
  href: string;
  audience?: string;
  description?: string;
  children?: SitemapPage[];
}

const SITEMAP: SitemapPage[] = [
  {
    label: "Home",
    href: "/",
    audience: "All — primary routing page",
    description:
      "Commercial positioning, proof, and six audience routes. Hero + social proof bar + Who We Serve cards + platform preview + 5-step framework + testimonials + FAQ.",
  },
  {
    label: "Solutions",
    href: "#solutions",
    audience: "Nav group",
    description:
      "Dropdown holding all delivery verticals — Corporate, CSR, Industries, Defence, Schools, Learners.",
    children: [
      {
        label: "Corporate Training",
        href: "/corporate",
        audience: "Enterprise L&D heads, CHROs, training managers",
        description:
          "Enterprise workforce capability across operational performance, digital adoption, leadership, and customer excellence. Clients: Tata, JSW, Castrol, BPCL, Jaquar.",
      },
      {
        label: "CSR Programs",
        href: "/csr-programs",
        audience: "CSR managers, foundations, Schedule VII sponsors",
        description:
          "Schedule VII-aligned skilling and livelihood initiatives. Parent page for all CSR sub-programmes.",
      },
      {
        label: "Industry Solutions",
        href: "/industry-solutions",
        audience: "Plant managers, HSE heads, manufacturing HR",
        description:
          "Sector-specific capability for manufacturing, precision engineering, and regulated industries.",
      },
      {
        label: "Defence Programs",
        href: "/defence-programs",
        audience: "Defence establishments, PSU HR, veterans",
        description:
          "Veteran resettlement, upskilling for in-service forces, and PSU workforce programmes.",
      },
      {
        label: "School Solutions",
        href: "/school-solutions",
        audience: "School principals, district education officers",
        description:
          "Youth capability, teacher training, and applied industry-readiness programmes.",
      },
      {
        label: "Micro-Entrepreneurship",
        href: "/micro-entrepreneurship",
        audience: "SHG facilitators, livelihood programme managers",
        description: "Livelihood, SHG, and market linkage programmes.",
      },
    ],
  },
  {
    label: "For Learners",
    href: "/learners-b2c",
    audience: "Individual learners, job seekers",
    description:
      "Individual B2C learning paths — upskilling, placement support, and certified programmes.",
  },
  {
    label: "Our Platform",
    href: "/our-platform",
    audience: "IT heads, L&D managers, CHROs",
    description:
      "LMS + Role-based Assessment + OKR Performance Management in one integrated platform.",
  },
  {
    label: "About Us",
    href: "/about-us",
    audience: "CSR partners, procurement teams, government bodies",
    description:
      "Company, mission, leadership, strategic partners, ISO 9001:2015 certification.",
  },
  {
    label: "Resources",
    href: "#resources",
    audience: "Nav group",
    description: "Case studies, blog, and FAQ resources.",
    children: [
      {
        label: "Case Studies",
        href: "/case-studies",
        audience: "Procurement teams, L&D heads",
        description:
          "Structured per-client case studies — Tata, JSW, Castrol, BPCL, Jaquar, Indian Army.",
      },
      {
        label: "Insights / Blog",
        href: "/blog",
        audience: "L&D professionals, HR leaders",
        description:
          "Refresh with current content — remove outdated 2020 posts from homepage feed.",
      },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    audience: "Job seekers, candidates",
    description: "Individual dated role pages with current openings.",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    audience: "All — primary conversion page",
    description:
      "Add audience-specific routing — enterprise, CSR, individual learner.",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    audience: "Legal / compliance",
    description: "Privacy policy — linked from footer.",
  },
  {
    label: "Terms",
    href: "/terms",
    audience: "Legal / compliance",
    description: "Terms of service — linked from footer.",
  },
];

/* ================================================================
   PAGE ROW — single page entry
   ================================================================ */
function PageRow({
  page,
  depth = 0,
}: {
  page: SitemapPage;
  depth?: number;
}) {
  const isNavGroup = page.href.startsWith("#");

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0",
          marginBottom: "4px",
        }}
      >
        {/* Indentation + connector */}
        {depth > 0 && (
          <div
            style={{
              display: "flex",
              flexShrink: 0,
              alignSelf: "stretch",
              width: `${depth * 28}px`,
            }}
          >
            {Array.from({ length: depth }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "28px",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                {i === depth - 1 && (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        left: "14px",
                        top: 0,
                        bottom: "50%",
                        width: "1px",
                        background: "rgba(46,49,146,0.2)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "14px",
                        top: "50%",
                        width: "14px",
                        height: "1px",
                        background: "rgba(46,49,146,0.2)",
                      }}
                    />
                  </>
                )}
                {i < depth - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      background: "rgba(46,49,146,0.12)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Card */}
        <div
          style={{
            flex: 1,
            background: isNavGroup
              ? "transparent"
              : depth === 0
              ? "white"
              : depth === 1
              ? "#fafbff"
              : "#f4f6f9",
            border: isNavGroup
              ? "none"
              : `1px solid ${depth === 0 ? "#e8ecf2" : "#eef0f7"}`,
            borderRadius: isNavGroup ? 0 : "12px",
            padding: isNavGroup ? "20px 0 8px" : "14px 18px",
            borderLeft: isNavGroup
              ? "none"
              : depth > 0
              ? `3px solid rgba(46,49,146,${0.15 + depth * 0.1})`
              : "3px solid #2E3192",
          }}
        >
          {isNavGroup ? (
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#27AAE2",
                margin: 0,
                fontFamily: "var(--font-body)",
              }}
            >
              {page.label}
            </p>
          ) : (
            <>
              {/* Row top — label + URL */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: page.description ? "8px" : 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: depth === 0 ? 700 : 600,
                    fontSize: depth === 0 ? "0.95rem" : "0.85rem",
                    color: "#14152E",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {page.label}
                </span>

                <code
                  style={{
                    fontSize: "0.7rem",
                    fontFamily:
                      "ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace",
                    color: "#6b7a98",
                    background: "#f4f6f9",
                    border: "1px solid #e8ecf2",
                    borderRadius: "4px",
                    padding: "1px 6px",
                    marginLeft: "auto",
                  }}
                >
                  {page.href}
                </code>
              </div>

              {page.audience && (
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#2E3192",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    margin: "0 0 4px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Audience: {page.audience}
                </p>
              )}

              {page.description && (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#53607c",
                    margin: 0,
                    lineHeight: 1.6,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {page.description}
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Children */}
      {page.children && (
        <div>
          {page.children.map((child) => (
            <PageRow key={child.href} page={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */
export default function SitemapPage() {
  const totalPages = SITEMAP.reduce((acc, page) => {
    const countChildren = (p: SitemapPage): number => {
      if (p.href.startsWith("#")) {
        return p.children ? p.children.reduce((a, c) => a + countChildren(c), 0) : 0;
      }
      if (!p.children) return 1;
      return 1 + p.children.reduce((a, c) => a + countChildren(c), 0);
    };
    return acc + countChildren(page);
  }, 0);

  return (
    <div
      style={{
        fontFamily: "var(--font-body, system-ui, sans-serif)",
        color: "#14152E",
        background: "#F7F9FC",
        minHeight: "100vh",
        WebkitPrintColorAdjust: "exact",
        printColorAdjust: "exact",
        paddingBottom: "80px",
      }}
    >
      {/* ── Main ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 40px 0",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2rem",
            fontWeight: 800,
            color: "#14152E",
            margin: "0 0 8px",
            letterSpacing: "-0.02em",
          }}
        >
          Y&Now Site Map
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#53607c",
            margin: "0 0 32px",
            maxWidth: "600px",
            lineHeight: 1.7,
          }}
        >
          Complete page architecture drawn from the Website Revamp Master brief.
          Every route, audience target, and section intent — in one place.
        </p>

        {/* Page count note */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8e9cb8",
            }}
          >
            {totalPages} pages total · Left border depth indicates navigation hierarchy
          </span>
        </div>

        {/* ── Site map entries ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {SITEMAP.map((page) => (
            <PageRow key={page.href} page={page} depth={0} />
          ))}
        </div>

        {/* ── URL Audit Table ── */}
        <div style={{ marginTop: "64px" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#14152E",
              margin: "0 0 8px",
              letterSpacing: "-0.01em",
            }}
          >
            URL Structure Audit
          </h2>
          <p
            style={{
              fontSize: "0.85rem",
              color: "#6b7a98",
              margin: "0 0 24px",
            }}
          >
            From the master revamp brief — current URL audit and recommended actions.
          </p>

          <div
            style={{
              background: "white",
              border: "1px solid #e8ecf2",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: "#f4f6f9",
                borderBottom: "1px solid #e8ecf2",
                padding: "12px 20px",
              }}
            >
              {["Page", "URL"].map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6b7a98",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            {[
              ["Homepage", "/"],
              ["CSR Programs", "/csr-programs"],
              ["Corporate", "/corporate"],
              ["Industry Solutions", "/industry-solutions"],
              ["Defence Programs", "/defence-programs"],
              ["Micro-Entrepreneurship", "/micro-entrepreneurship"],
              ["School Solutions", "/school-solutions"],
              ["For Learners", "/learners-b2c"],
              ["Our Platform", "/our-platform"],
              ["About Us", "/about-us"],
              ["Case Studies", "/case-studies"],
              ["Blog", "/blog"],
              ["Careers", "/careers"],
              ["Gallery", "/gallery"],
            ].map(([page, url], i) => (
              <div
                key={url}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  padding: "12px 20px",
                  borderBottom: i < 13 ? "1px solid #f4f6f9" : "none",
                  background: i % 2 === 0 ? "white" : "#fafbff",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "#14152E",
                    fontWeight: 500,
                  }}
                >
                  {page}
                </span>
                <code
                  style={{
                    fontSize: "0.75rem",
                    fontFamily:
                      "ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace",
                    color: "#2E3192",
                  }}
                >
                  {url}
                </code>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
