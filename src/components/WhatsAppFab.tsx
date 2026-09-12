import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/site-config";

export default function WhatsAppFab() {
  return (
    <Link
      href={whatsappLink("Hi Doobaross Technologies, I'd like to enquire about...")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform duration-150 hover:scale-105 md:hidden"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </Link>
  );
}
