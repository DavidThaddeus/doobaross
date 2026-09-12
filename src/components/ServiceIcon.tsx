import {
  WrenchScrewdriverIcon,
  ShoppingCartIcon,
  CogIcon,
  WifiIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import type { Service } from "@/lib/site-config";

const icons: Record<Service["icon"], typeof WrenchScrewdriverIcon> = {
  wrench: WrenchScrewdriverIcon,
  cart: ShoppingCartIcon,
  cog: CogIcon,
  wifi: WifiIcon,
  academic: AcademicCapIcon,
  chat: ChatBubbleLeftRightIcon,
};

export default function ServiceIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={className} />;
}
