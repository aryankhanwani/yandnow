import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

/* ============================================================
   WHY CHOOSE US
   ------------------------------------------------------------
   Four lines. The 01-05 markers are gone - these are unordered
   benefits, there is no first or last, and numbering them added
   five more things to parse for no information.

   The deck's fifth line ("Learning designed around workplace
   requirements") is not lost: it is the premise of the whole
   Journey section directly above, and repeating it here was the
   list saying the same thing twice.

   No cards, no borders, no icon beside every item.
   ============================================================ */

const REASONS = [
  "Industry-aligned programmes",
  "Role-based assessment",
  "Practical and blended learning",
  "Digital learning and performance tools",
];

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" aria-labelledby="why-choose-us-heading" bg="tint">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          id="why-choose-us-heading"
          title="What every programme"
          highlight="brings"
        />
        <ul className="grid gap-x-8 border-t border-hairline sm:grid-cols-2 lg:mt-2">
          {REASONS.map((reason) => (
            <li
              key={reason}
              className="border-b border-hairline py-5 text-body-lg text-ink"
            >
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
