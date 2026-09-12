import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { business, callLink, emailLink, nav, whatsappLink } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-text-secondary">{business.tagline}</p>
          <p className="mt-4 text-xs text-text-secondary">
            RC {business.rcNumber} · Incorporated {business.incorporated}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-text">Navigate</h3>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-text">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-text-secondary">
            <li className="flex gap-2">
              <MapPinIcon className="h-5 w-5 shrink-0 text-primary" />
              <span>{business.address}</span>
            </li>
            <li className="flex gap-2">
              <PhoneIcon className="h-5 w-5 shrink-0 text-primary" />
              <Link href={callLink()} className="transition-colors duration-200 hover:text-primary">
                {business.phones[0]} / {business.phones[1]}
              </Link>
            </li>
            <li className="flex gap-2">
              <EnvelopeIcon className="h-5 w-5 shrink-0 text-primary" />
              <Link
                href={emailLink()}
                className="break-all transition-colors duration-200 hover:text-primary"
              >
                {business.email}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-text">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            <Link
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Doobaross Technologies on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
              </svg>
            </Link>
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Doobaross Technologies on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-text-secondary sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>RC {business.rcNumber}</p>
        </div>
      </div>
    </footer>
  );
}
