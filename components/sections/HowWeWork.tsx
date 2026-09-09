import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline, { type TimelineStep } from "@/components/ui/Timeline";

/* ============================================================
   THE Y&NOW JOURNEY
   ------------------------------------------------------------
   Five stages, and they are a real sequence - which is why this
   is the only section on the site that keeps index numbers. The
   word "STEP" in front of each one is gone: the number already
   says it.

   Rendered as a connected timeline rather than five identical
   cards, because the connection between the stages is the
   information. Copy: Final Copy Deck, "The Y&Now Journey".
   ============================================================ */

const STEPS: TimelineStep[] = [
  { label: "Assess", line: "Role, audience, current skill level." },
  { label: "Learn", line: "Relevant knowledge and practical skills." },
  { label: "Apply", line: "Learning put into practice." },
  { label: "Perform", line: "Learning connected to workplace goals." },
  { label: "Improve", line: "Evidence and feedback shape the next cycle." },
];

export default function HowWeWork() {
  return (
    <Section id="how-we-work" aria-labelledby="how-we-work-heading" bg="surface">
      <SectionHeading
        id="how-we-work-heading"
        title="Learning that leads"
        highlight="somewhere"
        className="mb-12"
      />
      <Timeline steps={STEPS} />
    </Section>
  );
}
