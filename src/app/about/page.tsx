import type { Metadata } from "next";
import Image from "next/image";
import { CheckBadgeIcon, FlagIcon, EyeIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhyChooseCard from "@/components/WhyChooseCard";
import { PrimaryButton } from "@/components/Buttons";
import { business, whatsappLink, whyChooseUs } from "@/lib/site-config";

const description =
  "Doobaross Technologies is a registered office equipment company (RC 2366544) based in Computer Village, Ikeja, Lagos, selling, repairing and installing equipment nationwide under founder Rasaq Abdulsalam.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About Doobaross Technologies", description, url: "/about" },
  twitter: { title: "About Doobaross Technologies", description },
};

const stats = [
  { end: 10, suffix: "+", label: "Years in Business" },
  { end: 8, suffix: "", label: "Brands Supported" },
  { end: 36, suffix: "+", label: "States Reached" },
  { end: 2, suffix: "", label: "WhatsApp Lines" },
];

export default function AboutPage() {
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
              Our Story
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-text sm:text-4xl">
              About Doobaross Technologies
            </h1>
            <p className="mt-4 text-base text-text-secondary">
              A registered office equipment company in the heart of Computer Village, Ikeja,
              selling, repairing and installing the machines Nigerian businesses run on.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {[`RC ${business.rcNumber}`, "Est. 2015", "Computer Village, Ikeja", "Nationwide Delivery"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border bg-background/80 px-3.5 py-1.5 font-heading text-xs font-semibold text-text-secondary backdrop-blur-sm"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Who We Are" title="Built in Nigeria's Largest Technology Market" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
              <p>
                Doobaross Technologies is a registered office equipment company operating out of
                Computer Village, Ikeja, Nigeria&apos;s largest technology market. We sell, repair,
                install and supply printers, photocopiers, laptops and general office equipment to
                businesses, schools, banks, hospitals and individuals across Lagos and nationwide.
              </p>
              <p>
                Our approach is simple: give customers honest options, new or fairly-used, backed
                by real repair expertise, so equipment keeps working long after it&apos;s purchased.
                From a single office printer to a fully networked setup, one team handles sourcing,
                repair and on-site installation under one roof.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-xl border border-border shadow-lg">
            <Image
              src="/images/doobaross2.png"
              alt="Doobaross Technologies technician servicing a photocopier"
              fill
              sizes="(min-width: 768px) 24rem, 90vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="rounded-md border border-border bg-surface px-3 py-4 text-center"
            >
              <p className="font-heading text-xl font-bold text-primary sm:text-2xl">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-text-secondary">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="border-y border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Leadership" title="Meet the Founder" center />
          <Reveal className="mx-auto mt-10 flex max-w-3xl flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm sm:flex-row">
            <div className="relative aspect-4/3 w-full shrink-0 sm:aspect-auto sm:w-64">
              <Image
                src="/images/doobaross1.png"
                alt={`${business.founder}, ${business.founderTitle} of Doobaross Technologies`}
                fill
                sizes="(min-width: 640px) 16rem, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-text">{business.founder}</h3>
              <p className="mt-1 text-sm font-semibold text-accent">{business.founderTitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {business.founder} founded Doobaross Technologies in 2015 and has grown it from a
                single stand in Computer Village into a trusted sales, repair and installation
                partner for businesses across Nigeria. He still works hands-on with the team,
                sourcing equipment, diagnosing faults and making sure every job leaves a customer
                who comes back.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Why Doobaross" title="Why Businesses Choose Us" center />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <WhyChooseCard title={item.title} description={item.description} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Registered business banner */}
        <Reveal delay={150} className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex-row sm:text-left">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckBadgeIcon className="h-7 w-7" />
          </span>
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-text-secondary">
              Registered Business
            </p>
            <p className="mt-1 font-heading text-lg font-bold text-text">
              RC {business.rcNumber} &middot; Incorporated {business.incorporated}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Mission & Vision */}
      <section className="border-t border-border py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6 md:flex-row md:items-stretch">
          <Reveal className="text-center md:flex-1 md:px-8">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FlagIcon className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold text-text">Our Mission</h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-text-secondary">
              To make quality office equipment sales, repair and installation accessible and
              reliable for businesses and individuals across Nigeria.
            </p>
          </Reveal>

          {/* Squiggle divider */}
          <div className="flex shrink-0 items-center justify-center py-8 md:py-0" aria-hidden="true">
            <svg
              viewBox="0 0 120 24"
              className="h-6 w-28 text-accent md:hidden"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M2 12c8-10 16-10 24 0s16 10 24 0 16-10 24 0 16 10 24 0 16-10 24 0" />
            </svg>
            <svg
              viewBox="0 0 24 160"
              className="hidden h-40 w-6 text-accent md:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M12 0c10 10 10 30 0 40s-10 30 0 40 10 30 0 40 -10 30 0 40" />
            </svg>
          </div>

          <Reveal delay={100} className="text-center md:flex-1 md:px-8">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <EyeIcon className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold text-text">Our Vision</h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-text-secondary">
              To be Nigeria&apos;s most trusted name in office equipment, the first call for any
              business that needs machines sold, fixed or installed, from Ikeja to every state in
              the country.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 text-white dark:border-t dark:border-border dark:bg-surface">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Ready to work with us?
          </h2>
          <p className="text-white/85">
            Tell us what your office needs and we&apos;ll handle the rest.
          </p>
          <PrimaryButton
            href={whatsappLink("Hi Doobaross Technologies, I'd like to enquire about...")}
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
