import Container from "@/components/ui/Container";

/* ============================================================
   SOCIAL PROOF BAR
   Source: Final Copy doc — Section 1 (below hero)
   "Trusted by India's leading organisations across manufacturing,
    energy, retail, and financial services."
   Marquee: Tata Group · JSW · Castrol India · BPCL · Jaquar ·
            Indian Army · Indian Oil · Boeing · Reliance Foundation · NSDC
   ============================================================ */

const CLIENTS = [
  "Tata Group",
  "JSW",
  "Castrol India",
  "BPCL",
  "Jaquar",
  "Indian Army",
  "Indian Oil",
  "Boeing",
  "Reliance Foundation",
  "NSDC",
  "CRISP",
  "MPIHTTS",
];

/* Duplicate list so the marquee loops seamlessly */
const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

function ClientChip({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-lg  bg-white select-none">
      {/* Avatar tile */}

      <span className="text-lg font-semibold text-neutral-700 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function SocialProofBar() {
  return (
    <section
      id="social-proof"
      aria-label="Trusted clients"
      className="bg-white border-y border-neutral-100 py-10 overflow-hidden"
    >
      <Container>
        <p className="text-center text-[11px] font-semibold tracking-[0.16em] uppercase text-neutral-400 mb-6">
          Trusted by India&apos;s leading organisations across manufacturing, energy, retail &amp; financial services
        </p>
      </Container>

      {/* Marquee wrapper — clips overflow */}
      <div className="relative">
        {/* Left + right fade edges */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-20 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-20 z-10"
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
