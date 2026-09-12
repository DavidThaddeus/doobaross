import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PrimaryButton } from "@/components/Buttons";
import { business, services, whatsappLink } from "@/lib/site-config";

const description =
  "Sales, repairs, installation, networking, training and IT consulting for office equipment, from Doobaross Technologies in Computer Village, Ikeja, Lagos.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Services | Doobaross Technologies", description, url: "/services" },
  twitter: { title: "Services | Doobaross Technologies", description },
};

const accentClasses = [
  { badge: "bg-primary/10 text-primary", numeral: "text-primary/[0.06]" },
  { badge: "bg-accent/10 text-accent", numeral: "text-accent/[0.08]" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <Image
          src="/images/doobg.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="scale-110 object-cover object-center blur-md"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-background/10 via-transparent to-background"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <div className="animate-fade-up mx-auto max-w-2xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
              What We Offer
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-text sm:text-4xl">
              Our Services
            </h1>
            <p className="mt-4 text-base text-text-secondary">
              Everything your office equipment needs, from purchase to repair to setup, under one
              roof.
            </p>
          </div>
        </div>
      </section>

      {/* Quick jump nav */}
      <section className="border-b border-border bg-surface py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-border bg-background px-4 py-1.5 font-heading text-xs font-semibold text-text-secondary transition-colors duration-150 hover:border-primary hover:text-primary"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-6">
          {services.map((service, i) => {
            const accent = accentClasses[i % 2];
            return (
              <Reveal key={service.slug} delay={i * 80}>
                <div
                  id={service.slug}
                  className="group relative scroll-mt-24 overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:flex sm:items-start sm:gap-6 sm:p-8"
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-2 -top-6 select-none font-heading text-8xl font-black leading-none ${accent.numeral}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110 ${accent.badge}`}
                  >
                    <ServiceIcon icon={service.icon} className="h-7 w-7" />
                  </span>
                  <div className="relative z-10 mt-4 flex-1 sm:mt-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-heading text-xl font-bold text-text">{service.title}</h2>
                      {service.pending && <Badge variant="neutral">Details coming soon</Badge>}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {service.description}
                    </p>
                    <Link
                      href={whatsappLink(`Hi, I'd like to enquire about your ${service.title} service.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary transition-colors duration-150 hover:text-primary-hover hover:underline underline-offset-4"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Enquire via WhatsApp
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 text-white dark:border-t dark:border-border dark:bg-surface">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="text-white/85">
            Tell us about your equipment or office setup on WhatsApp and we&apos;ll guide you.
          </p>
          <PrimaryButton
            href={whatsappLink("Hi Doobaross Technologies, I need help figuring out the right service for...")}
            target="_blank"
            icon={<WhatsAppIcon className="h-5 w-5" />}
          >
            Chat on WhatsApp
          </PrimaryButton>
          <p className="text-sm text-white/70">{business.hours}</p>
        </div>
      </section>
    </>
  );
}
