import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";

export interface ImpactStatItem {
  title: string;
  sub: string;
  value?: string;
}

export default function ImpactStatGrid({ items }: { items: ImpactStatItem[] }) {
  return (
    <Stagger
      className={`grid grid-cols-2 gap-4 lg:gap-6 ${items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
      stagger={0.1}
    >
      {items.map((item) => (
        <StaggerItem key={item.title} className="rounded-2xl bg-white p-6 text-left shadow-card lg:p-8">
          <div className="text-[13px] font-600 text-neutral-500">{item.title}</div>
          <span className="mt-3 block font-heading text-[clamp(1.9rem,4vw,2.75rem)] font-800 leading-none text-neutral-300">
            {item.value ?? "—"}
          </span>
          <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-600">{item.sub}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
