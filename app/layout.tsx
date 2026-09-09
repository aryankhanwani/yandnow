import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

/* One family, two weights - 400 for body, 700 for headings. The
   second sans (Inter) is gone: two similar sans-serifs read as
   visual mush and cost a second font download for nothing. */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Y&Now | Practical Learning for Organisations and Learners",
    template: "%s | Y&Now",
  },
  description:
    "Y&Now designs practical learning programmes that help people and organisations build useful skills, grow with confidence, and stay ready for what comes next.",
  metadataBase: new URL("https://yandnow.com"),
  openGraph: {
    siteName: "Y&Now",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NOTE: <html> must NOT be height-constrained (no `h-full`). Lenis watches
  // document.documentElement with a ResizeObserver to recompute its scroll
  // limit; pinning the root to 100% freezes that box at the viewport height,
  // so the observer never fires when the page grows (font swap, an FAQ
  // opening) and Lenis clamps scrolling to a stale, too-short limit - the
  // page stops dead part-way down. Sticky-footer height comes from
  // `min-h-screen` on <body> instead.
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-surface font-body text-ink">
        {children}
      </body>
    </html>
  );
}
