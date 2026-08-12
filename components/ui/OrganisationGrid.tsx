import { Reveal } from "@/components/ui/motion-primitives";

export interface OrganisationItem {
  name: string;
  note?: string;
}

export default function OrganisationGrid({ items }: { items: OrganisationItem[] }) {
  return (
    <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2]">
      <div className={`grid gap-px ${items.length === 7 ? "grid-cols-12" : "grid-cols-6"}`}>
        {items.map((item, index) => {
          const threeThenTwo = items.length === 5;
          const fourThenThree = items.length === 7;
          const span = fourThenThree
            ? index < 4
              ? "col-span-3"
              : "col-span-4"
            : threeThenTwo && index < 3
            ? "col-span-2"
            : items.length <= 2
              ? "col-span-6 sm:col-span-3"
              : threeThenTwo && index >= 3
                ? "col-span-3"
                : "col-span-2";
          return (
            <div key={item.name} className={`group flex min-h-28 flex-col items-center justify-center bg-white px-5 py-6 text-center transition-colors duration-300 hover:bg-primary-50/50 ${span}`}>
              <span className="font-heading text-base font-700 text-neutral-400 transition-colors duration-300 group-hover:text-primary-600 lg:text-lg">
                {item.name}
              </span>
              {item.note && <span className="mt-2 max-w-xs text-xs leading-relaxed text-neutral-500">{item.note}</span>}
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
