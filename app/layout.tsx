import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

// Heading font: Manrope - weights 500, 600, 700, 800
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

// Body font: Inter - weights 400, 500, 600
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Y&Now: Workforce Capability Solutions for Enterprise & CSR",
    template: "%s | Y&Now",
  },
  description:
    "Y&Now is the future-skills EdTech division of BroadArks Technology. We design, deliver, and measure industry-aligned capability programmes for enterprises, CSR sponsors, and individual learners across India.",
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
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col text-ink bg-white font-body">
        {children}
      </body>
    </html>
  );
}
