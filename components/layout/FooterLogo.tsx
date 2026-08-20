"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ============================================================
   FOOTER LOGO - clickable brand mark that always returns the
   visitor to the home page. On a same-page click Next does
   nothing by default, so we scroll back to the top ourselves.
   ============================================================ */
export default function FooterLogo() {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      id="footer-logo-home"
      aria-label="Y&Now, go to home page"
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="mb-5 inline-block rounded-md transition-opacity duration-200 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
    >
      <Image
        src="/logo.png"
        alt="Y&Now"
        width={110}
        height={36}
        className="h-9 w-auto object-contain"
      />
    </Link>
  );
}
