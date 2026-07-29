/* ============================================================
   DEMO IMAGES — placeholder photography (Unsplash) used across
   the site during the design phase.
   ------------------------------------------------------------
   ⚠️  These are temporary. Replace each URL with real, licensed
   brand photography (ideally locally hosted under /public/images)
   before go-live, then remove `unoptimized` in next.config.ts.
   Everything is centralised here so swapping is a one-file job.
   ============================================================ */

const U = (id: string, w = 1200, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

/** Who We Serve — one cover per audience segment. */
export const SERVE_IMAGES: Record<string, string> = {
  corporate: U("1521737604893-d14cc237f11d"), // team meeting
  csr: U("1524178232363-1fb2b075b655"), // classroom / community learning
  industries: U("1581094794329-c8112a89af12"), // industrial worker
  defence: U("1519085360753-af0119f7cbe7"), // uniformed / disciplined cohort
  schools: U("1523240795612-9a054b0db644"), // students
  learners: U("1600880292203-757bb62b4baf"), // professional at laptop
};
