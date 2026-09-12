"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import WhatsAppIcon from "./WhatsAppIcon";
import { services, whatsappLink } from "@/lib/site-config";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!serviceOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setServiceOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [serviceOpen]);

  function validate(): boolean {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!phone.trim()) next.phone = "Please enter a phone number.";
    if (!message.trim()) next.message = "Please tell us what you need.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      service ? `Service Interested In: ${service}` : null,
      `Message: ${message}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "mt-1 w-full min-h-11 rounded-md border border-border bg-background px-3 py-2 text-sm text-text shadow-sm transition-colors duration-150 focus:border-primary";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-text">
          Name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${inputClass} ${errors.name ? "border-accent" : ""}`}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-xs text-accent">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-text">
          Phone <span className="text-accent">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`${inputClass} ${errors.phone ? "border-accent" : ""}`}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="mt-1 text-xs text-accent">{errors.phone}</p>}
      </div>

      <div ref={serviceRef}>
        <label id="service-label" className="text-sm font-semibold text-text">
          Service Interested In
        </label>
        <div className="relative mt-1">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={serviceOpen}
            onClick={() => setServiceOpen((o) => !o)}
            className={`flex w-full min-h-11 items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-left text-sm shadow-sm transition-colors duration-150 ${
              serviceOpen ? "border-primary" : ""
            } ${service ? "text-text" : "text-text-secondary"}`}
          >
            {service || "Select a service (optional)"}
            <ChevronDownIcon
              className={`h-4 w-4 shrink-0 text-text-secondary transition-transform duration-200 ${
                serviceOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {serviceOpen && (
            <ul
              role="listbox"
              aria-labelledby="service-label"
              className="absolute z-20 mt-2 w-full overflow-hidden rounded-md border border-border bg-background py-1 shadow-lg"
            >
              <li
                role="option"
                aria-selected={service === ""}
                onClick={() => {
                  setService("");
                  setServiceOpen(false);
                }}
                className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm text-text-secondary transition-colors duration-100 hover:bg-primary/10 hover:text-primary"
              >
                Select a service (optional)
                {service === "" && <CheckIcon className="h-4 w-4 text-primary" />}
              </li>
              {services.map((s) => (
                <li
                  key={s.slug}
                  role="option"
                  aria-selected={service === s.title}
                  onClick={() => {
                    setService(s.title);
                    setServiceOpen(false);
                  }}
                  className={`flex cursor-pointer items-center justify-between px-3 py-2 text-sm transition-colors duration-100 hover:bg-primary/10 hover:text-primary ${
                    service === s.title ? "bg-primary/10 font-semibold text-primary" : "text-text"
                  }`}
                >
                  {s.title}
                  {service === s.title && <CheckIcon className="h-4 w-4 text-primary" />}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-text">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none ${errors.message ? "border-accent" : ""}`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-heading font-semibold text-white transition-colors duration-150 hover:bg-accent-hover sm:w-auto"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send via WhatsApp
      </button>
      <p className="text-xs text-text-secondary">
        Submitting opens WhatsApp with your details pre-filled, so we can reply directly. No
        account or sign-up needed.
      </p>
    </form>
  );
}
