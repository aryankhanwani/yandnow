import Container from "@/components/ui/Container";

/* ============================================================
   EXPERIENCE YOU CAN REVIEW
   Copy deck - Home, "Experience You Can Review".

   Only organisations named in the approved copy deck appear here.
   Names the deck has not confirmed (and unverified counts such as
   "3,800+ organisations") stay off the site until sign-off.
   ============================================================ */

const CLIENTS = [
  "Tata Group",
  "JSW Energy",
  "Castrol India",
  "Bharat Petroleum",
  "Jaquar",
];

/* The track scrolls by -50%, so it holds exactly two identical
   halves. Each half repeats the short client list twice so the
   track is always wider than the viewport and never shows a gap. */
const HALF = [...CLIENTS, ...CLIENTS];
const MARQUEE_ITEMS = [...HALF, ...HALF];

function ClientChip({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 select-none px-6 py-2.5">
      <span className="whitespace-nowrap text-lg font-semibold text-neutral-700">{name}</span>
    </div>
  );
}

export default function SocialProofBar() {
  return (
    <section
      id="experience"
      aria-label="Organisations Y&Now has worked with"
      className="overflow-hidden border-y border-neutral-100 bg-white py-10"
    >
      <Container>
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
          Experience you can review · enterprise, institutional &amp; workforce learning
        </p>
      </Container>

      {/* Marquee wrapper - clips overflow */}
      <div className="relative">
        {/* Left + right fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        {/* Scrolling track */}
        <div
          className="flex items-center"
          style={{
            animation: "marqueeScroll 32s linear infinite",
            width: "max-content",
          }}
        >
          {MARQUEE_ITEMS.map((name, i) => (
            <ClientChip key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Marquee keyframe (local style tag) */}
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
