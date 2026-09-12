"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { nav, whatsappLink } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:gap-4">
          <Logo preload />

          <nav className="hidden items-center gap-0.5 md:flex lg:gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-2.5 py-2 text-sm font-heading font-semibold whitespace-nowrap transition-colors duration-200 lg:px-3 ${
                    active ? "text-primary" : "text-text hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-2.5 right-2.5 -bottom-px h-px origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100 lg:left-3 lg:right-3 ${
                      active ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center md:flex">
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap bg-accent px-3 py-2.5 text-sm font-heading font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md lg:px-4"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Link>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-md text-text transition-colors duration-150 hover:bg-surface"
            >
              {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-out md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Right-side sliding drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-72 max-w-[80vw] flex-col border-l border-border bg-background shadow-xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <Logo compact />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-text transition-colors duration-150 hover:bg-surface"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`min-h-11 rounded-md px-3 py-3 text-base font-heading font-semibold transition-colors duration-150 ${
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-text hover:bg-surface"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-accent px-4 py-3 text-sm font-heading font-semibold text-white transition-colors duration-150 hover:bg-accent-hover"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
}
