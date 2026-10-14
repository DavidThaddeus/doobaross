import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { business, callLink, emailLink, whatsappLink } from "@/lib/site-config";

const description =
  "Reach Doobaross Technologies in Computer Village, Ikeja, Lagos by phone, WhatsApp, email or contact form. Nationwide delivery available.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Doobaross Technologies", description, url: "/contact" },
  twitter: { title: "Contact Doobaross Technologies", description },
};

const contactDetails = [
  {
    icon: MapPinIcon,
    label: "Address",
    content: <p className="text-sm text-text-secondary">{business.address}</p>,
  },
  {
    icon: PhoneIcon,
    label: "Phone / WhatsApp",
    content: (
      <p className="text-sm text-text-secondary">
        <Link
          href={callLink(0)}
          className="transition-colors duration-150 hover:text-primary"
        >
          {business.phones[0]}
        </Link>{" "}
        &middot;{" "}
        <Link
          href={callLink(1)}
          className="transition-colors duration-150 hover:text-primary"
        >
          {business.phones[1]}
        </Link>{" "}
        <span className="text-xs">(both active on WhatsApp)</span>
      </p>
    ),
  },
  {
    icon: EnvelopeIcon,
    label: "Email",
    content: (
      <Link
        href={emailLink()}
        className="break-all text-sm text-text-secondary transition-colors duration-150 hover:text-primary"
      >
        {business.email}
      </Link>
    ),
  },
  {
    icon: ClockIcon,
    label: "Business Hours",
    content: (
      <>
        <p className="text-sm text-text-secondary">{business.hours}</p>
        <p className="mt-0.5 text-xs text-text-secondary/70">
          Hours may vary on public holidays
        </p>
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="flex min-h-[45svh] flex-col justify-center border-b border-border bg-surface py-14 md:min-h-[50vh]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            eyebrow="Get In Touch"
            title="Contact Us"
            description="Reach out by phone, WhatsApp, email or the form below. We're based in Computer Village, Ikeja and deliver nationwide."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal className="space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6 sm:p-7">
              <div className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-semibold text-text">{item.label}</p>
                      <div className="mt-0.5">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={whatsappLink("Hi Doobaross Technologies, I'd like to enquire about...")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-heading font-semibold text-white transition-colors duration-150 hover:bg-accent-hover"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              <div className="relative aspect-4/3 w-full sm:aspect-video">
                <iframe
                  title="Doobaross Technologies location, Computer Village, Ikeja"
                  src={business.mapEmbedSrc}
                  className="absolute inset-0 h-full w-full dark:brightness-90"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-t border-border bg-background px-4 py-3 text-sm font-semibold text-primary transition-colors duration-150 hover:bg-surface"
              >
                Get Directions
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-xl border border-border bg-surface p-6 sm:p-7">
            <h2 className="font-heading text-lg font-semibold text-text">Send Us a Message</h2>
            <p className="mt-1 text-sm text-text-secondary">
              Fill in your details and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
