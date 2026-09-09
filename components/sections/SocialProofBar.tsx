import Section from "@/components/ui/Section";

/* ============================================================
   CLIENT BAND
   ------------------------------------------------------------
   Three words and the names. The label sentence that used to sit
   above it ("Experience you can review · enterprise,
   institutional & workforce learning") said nothing the names
   below it did not already say.

   The set is rendered once in the markup. The visual second copy
   that makes the loop seamless is aria-hidden, so a screen
   reader reads five names, not twenty - the previous version
   repeated the list four times in the DOM.

   Only organisations named in the approved copy deck appear.
   ============================================================ */

const CLIENTS = [
  "Tata Group",
  "JSW Energy",
  "Castrol India",
  "Bharat Petroleum",
  "Jaquar",
];

function Names({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee__copy" aria-hidden={hidden || undefined}>
      {CLIENTS.map((name) => (
        <span key={name} className="whitespace-nowrap text-h4 text-ink-muted">
          {name}
        </span>
      ))}
    </div>
  );
}

export default function SocialProofBar() {
  return (
    <Section id="experience" aria-labelledby="clients-heading" bg="surface">
      <h2 id="clients-heading" className="text-caption">
        Trusted by
      </h2>
      <div className="marquee mt-8">
        <Names />
        <Names hidden />
      </div>
    </Section>
  );
}
