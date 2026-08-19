import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";

/* ============================================================
   SOCIAL ICON SVGs — lucide-react 1.25.0 has no brand icons
   ============================================================ */
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ============================================================
   FOOTER DATA
   ============================================================ */
const SOLUTION_LINKS = [
  { label: "Corporate L&D", href: "/corporate" },
  { label: "CSR Skill Programs", href: "/csr-programs" },
  { label: "Industry Solutions", href: "/industry-solutions" },
  { label: "Defence Programs", href: "/defence-programs" },
  { label: "School Solutions", href: "/school-solutions" },
  { label: "For Learners", href: "/learners-b2c" },
];

const COMPANY_LINKS = [
  { label: "Our Platform", href: "/our-platform" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: IconLinkedIn },
  { label: "Instagram", href: "https://www.instagram.com", Icon: IconInstagram },
  { label: "Facebook", href: "https://www.facebook.com", Icon: IconFacebook },
  { label: "X", href: "https://x.com", Icon: IconX },
];

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-[11px] font-600 uppercase tracking-[0.14em] text-primary-600">
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");
  return (
    <li>
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="group inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors duration-200 hover:text-primary-600"
      >
        <span className="h-px w-0 bg-secondary-400 transition-all duration-300 group-hover:w-3" aria-hidden />
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" aria-label="Site footer" className="relative overflow-hidden rounded-t-[2.25rem] border-t border-primary-100 bg-white text-ink">
      {/* Soft brand-colour wash over a clean white base. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 80% at 4% 8%, rgba(46,49,146,0.10) 0%, transparent 68%), radial-gradient(50% 75% at 96% 18%, rgba(39,170,226,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Main grid */}
      <Container>
        <div className="relative grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Y&Now — home" className="mb-5 inline-block">
              <Image src="/logo.png" alt="Y&Now" width={110} height={36} className="h-9 w-auto object-contain" />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-neutral-600">
              Y&Now is the future-skills EdTech division of BroadArks Technology Pvt. Ltd. We design, deliver, and measure industry-aligned capability programmes across India.
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  id={`footer-social-${label.toLowerCase()}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary-100 bg-white/75 text-primary-600 shadow-sm transition-all duration-200 hover:border-secondary-500 hover:bg-secondary-500 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <ColHeading>Solutions</ColHeading>
            <ul className="space-y-3">
              {SOLUTION_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <ColHeading>Company</ColHeading>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColHeading>Get in Touch</ColHeading>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@broadarks.com" id="footer-email" className="flex items-start gap-3 text-sm text-neutral-600 transition-colors duration-200 hover:text-primary-600">
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-secondary-500" />
                  info@broadarks.com
                </a>
              </li>
              <li>
                <a href="tel:+917553553372" id="footer-phone" className="flex items-start gap-3 text-sm text-neutral-600 transition-colors duration-200 hover:text-primary-600">
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-secondary-500" />
                  +91 75535 53372
                </a>
              </li>
              <li>
                <address className="flex items-start gap-3 text-sm not-italic leading-relaxed text-neutral-600">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-secondary-500" />
                  <span>
                    Sagar Premium Tower, Phase I,<br />
                    Block C-1, CP-02, JK Hospital Road,<br />
                    Kolar, Bhopal – 462042, MP, India
                  </span>
                </address>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="relative border-t border-primary-100/80 bg-white/35">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-neutral-600 sm:flex-row">
            <p>© {currentYear} BroadArks Technology Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-primary-100 bg-white/60 px-3 py-1 font-medium text-neutral-600">
                <span className="h-1.5 w-1.5 rounded-sm bg-secondary-500" />
                ISO 9001:2015 Certified
              </span>
              <a
                href="https://broadarks.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-parent-link"
                className="inline-flex items-center gap-1 font-medium text-neutral-600 transition-colors hover:text-primary-600"
              >
                BroadArks Technology
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
