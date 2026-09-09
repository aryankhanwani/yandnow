import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";

/* ============================================================
   ProofStats - published, attributable figures laid out as a
   checkerboard of numbers and photographs.

   Three figures alone read as a thin band. Interleaving them with
   the work they describe gives the eye somewhere to rest between
   each one and turns the section into a block rather than a row
   of text.

   Three columns, two rows, from the small breakpoint up. Strict
   alternation across six cells lands the checkerboard on its own:
   in a 3-wide bed a figure never sits beside or above another
   figure, and a photograph never beside or above another. Narrow
   screens fall back to two columns, where the same order reads as
   figures down the left and their photographs down the right.

   Values are typed as plain strings rather than counted up from a
   number, because the approved set includes non-numeric forms
   ("57/100") and because an animated counter reads as marketing on
   a stat whose whole job is to be checkable.
   ============================================================ */

export interface ProofStat {
  value: string;
  label: string;
}

export interface ProofImage {
  src: string;
  alt: string;
}

function StatCell({ stat }: { stat: ProofStat }) {
  return (
    <article className="flex h-full flex-col justify-center bg-white p-5 sm:p-8 lg:p-10">
      {/* The clamp floor is set by the longest value ("56.35%") in the
          narrowest cell - half a 320px screen - so a figure never wraps
          across two lines. */}
      <span className="font-heading text-[clamp(1.75rem,6vw,3.2rem)] font-800 leading-none tracking-tight text-primary-600">
        {stat.value}
      </span>
      <p className="mt-3 text-[14px] leading-snug text-ink sm:mt-4 sm:text-[15px]">
        {stat.label}
      </p>
    </article>
  );
}

function ImageCell({ image }: { image: ProofImage }) {
  return (
    <div className="relative h-full min-h-[9rem] bg-surface sm:min-h-[13rem] lg:min-h-[15rem]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="50vw"
        className="object-cover"
      />
    </div>
  );
}

export default function ProofStats({
  items,
  images,
}: {
  items: ProofStat[];
  images: ProofImage[];
}) {
  /* Each figure is emitted with the photograph that belongs to it, in
     order. Six cells over three columns put the figures on a diagonal
     without any flipping, which is what keeps two of them from ever
     meeting - across a row or down a column. */
  const cells = items.flatMap((stat, i) => {
    const image = images[i % images.length];
    return [
      <StatCell key={`stat-${stat.label}`} stat={stat} />,
      <ImageCell key={`img-${stat.label}`} image={image} />,
    ];
  });

  return (
    <Stagger
      className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2] sm:grid-cols-3"
      stagger={0.07}
    >
      {cells.map((cell, index) => (
        <StaggerItem key={index} className="h-full bg-white">
          {cell}
        </StaggerItem>
      ))}
    </Stagger>
  );
}
