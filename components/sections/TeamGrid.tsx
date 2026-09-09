import { Stagger, StaggerItem } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   TeamGrid - people cards for the About page.

   There are no approved headshots, so each card leads with a
   monogram rather than a stock photo of someone who is not the
   person named. Bios are written without pronouns, since the
   copy deck states them for one person and not the others.
   ============================================================ */

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

function initials(name: string): string {
  return name
    .replace(/^(Mr\.?|Ms\.?|Mrs\.?|Dr\.?)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TeamGrid({
  members,
  columns = 4,
}: {
  members: TeamMember[];
  columns?: 2 | 4;
}) {
  return (
    <Stagger
      className={cn(
        "grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#e8ecf2] bg-[#e8ecf2] sm:grid-cols-2",
        columns === 4 && "lg:grid-cols-4",
      )}
      stagger={0.08}
    >
      {members.map((member) => (
        <StaggerItem key={member.name} className="h-full bg-white">
          <article className="flex h-full flex-col p-7 lg:p-8">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 font-heading text-lg font-800 text-primary-600">
              {initials(member.name)}
            </span>
            <h3 className="font-heading text-[17px] font-700 leading-snug text-ink">{member.name}</h3>
            <p className="mt-1.5 text-[13px] font-600 leading-snug text-secondary-500">{member.role}</p>
            {member.bio && (
              <p className="mt-4 text-[14.5px] leading-relaxed text-neutral-600">{member.bio}</p>
            )}
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
