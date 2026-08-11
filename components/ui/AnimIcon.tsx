"use client";

import InViewIcon from "@/components/ui/InViewIcon";
import { ActivityIcon } from "@/components/ui/activity";
import { BoxesIcon } from "@/components/ui/boxes";
import { BriefcaseBusinessIcon } from "@/components/ui/briefcase-business";
import { CartIcon } from "@/components/ui/cart";
import { ChartColumnIncreasingIcon } from "@/components/ui/chart-column-increasing";
import { CircleCheckIcon } from "@/components/ui/circle-check";
import { ClipboardCheckIcon } from "@/components/ui/clipboard-check";
import { ClockIcon } from "@/components/ui/clock";
import { CogIcon } from "@/components/ui/cog";
import { ConstructionIcon } from "@/components/ui/construction";
import { CookingPotIcon } from "@/components/ui/cooking-pot";
import { DatabaseBackupIcon } from "@/components/ui/database-backup";
import { FileCheckIcon } from "@/components/ui/file-check";
import { FileCheck2Icon } from "@/components/ui/file-check-2";
import { FlameIcon } from "@/components/ui/flame";
import { GaugeIcon } from "@/components/ui/gauge";
import { GavelIcon } from "@/components/ui/gavel";
import { GraduationCapIcon } from "@/components/ui/graduation-cap";
import { HatGlassesIcon } from "@/components/ui/hat-glasses";
import { HeartHandshakeIcon } from "@/components/ui/heart-handshake";
import { KeyIcon } from "@/components/ui/key";
import { LaptopMinimalCheckIcon } from "@/components/ui/laptop-minimal-check";
import { LayersIcon } from "@/components/ui/layers";
import { LeafIcon } from "@/components/ui/leaf";
import { MailboxIcon } from "@/components/ui/mailbox";
import { MapPinIcon } from "@/components/ui/map-pin";
import { MessageCircleIcon } from "@/components/ui/message-circle";
import { MessageSquareIcon } from "@/components/ui/message-square";
import { PhoneIcon } from "@/components/ui/phone";
import { PlugZapIcon } from "@/components/ui/plug-zap";
import { RefreshCWIcon } from "@/components/ui/refresh-cw";
import { RocketIcon } from "@/components/ui/rocket";
import { ShieldCheckIcon } from "@/components/ui/shield-check";
import { SparklesIcon } from "@/components/ui/sparkles";
import { TerminalIcon } from "@/components/ui/terminal";
import { TrendingUpIcon } from "@/components/ui/trending-up";
import { UserRoundCogIcon } from "@/components/ui/user-round-cog";
import { UsersIcon } from "@/components/ui/users";
import { UsersRoundIcon } from "@/components/ui/users-round";
import { WebhookIcon } from "@/components/ui/webhook";
import { WorkflowIcon } from "@/components/ui/workflow";
import { WrenchIcon } from "@/components/ui/wrench";

/* ============================================================
   AnimIcon — the single entry point for animated content icons.

   Takes a STRING `name` (keyed by the original lucide icon name)
   so it's safe to use from Server Components — no passing icon
   components across the RSC boundary. It maps the name to the
   matching lucide-animated component and wraps it in InViewIcon
   so it animates once on first scroll-into-view.

   The lucide-animated registry is a curated set that lacks ~half
   the icons this site uses, so some names map to the NEAREST
   available animated glyph (noted below). Swap a mapping here to
   change an icon everywhere it's used.
   ============================================================ */

type AnimComponent = React.ComponentType<{ size?: number; className?: string }>;

const MAP: Record<string, AnimComponent> = {
  // Exact matches
  Gauge: GaugeIcon,
  Layers: LayersIcon,
  Sparkles: SparklesIcon,
  Users: UsersIcon,
  UsersRound: UsersRoundIcon,
  Cog: CogIcon,
  FileCheck: FileCheckIcon,
  FileCheck2: FileCheck2Icon,
  Flame: FlameIcon,
  Boxes: BoxesIcon,
  Clock: ClockIcon,
  MapPin: MapPinIcon,
  Phone: PhoneIcon,
  Rocket: RocketIcon,
  ShieldCheck: ShieldCheckIcon,
  HeartHandshake: HeartHandshakeIcon,
  Webhook: WebhookIcon,
  ClipboardCheck: ClipboardCheckIcon,
  GraduationCap: GraduationCapIcon,
  Wrench: WrenchIcon,
  TrendingUp: TrendingUpIcon,
  RefreshCw: RefreshCWIcon,
  Briefcase: BriefcaseBusinessIcon, // nearest: briefcase-business
  UserCog: UserRoundCogIcon, // nearest: user-round-cog
  BarChart3: ChartColumnIncreasingIcon, // nearest: chart-column-increasing
  KeyRound: KeyIcon, // nearest: key
  Glasses: HatGlassesIcon, // nearest: hat-glasses
  Database: DatabaseBackupIcon, // nearest: database-backup
  Plug: PlugZapIcon, // nearest: plug-zap

  // Substitutes (missing in the animated registry → nearest glyph)
  Users2: UsersIcon,
  MonitorSmartphone: WorkflowIcon, // digital & workflow adoption
  Target: ActivityIcon, // performance signal
  Sprout: LeafIcon, // growth / livelihood
  ClipboardList: ClipboardCheckIcon,
  Handshake: HeartHandshakeIcon,
  Laptop: LaptopMinimalCheckIcon,
  BadgeCheck: CircleCheckIcon,
  Building2: BriefcaseBusinessIcon,
  Building: BriefcaseBusinessIcon,
  Landmark: GavelIcon, // government / authority
  Shield: ShieldCheckIcon,
  ShieldAlert: ShieldCheckIcon,
  School: GraduationCapIcon,
  Award: CircleCheckIcon,
  HardHat: ConstructionIcon, // industrial / safety
  MessagesSquare: MessageSquareIcon,
  FileCode2: TerminalIcon, // developer / API
  Store: CartIcon,
  Factory: CogIcon, // machinery / plant
  ShoppingBag: CartIcon,
  Headset: MessageCircleIcon, // support / service
  UtensilsCrossed: CookingPotIcon, // hospitality / food
  Mail: MailboxIcon,
};

interface AnimIconProps {
  /** Original lucide icon name, e.g. "Gauge", "Target". */
  name: string;
  size?: number;
  className?: string;
}

export default function AnimIcon({ name, size = 24, className }: AnimIconProps) {
  const Icon = MAP[name] ?? CircleCheckIcon;
  return (
    <InViewIcon>
      <Icon size={size} className={className} />
    </InViewIcon>
  );
}
