import Image from "next/image";
import Link from "next/link";
import {
  CheckBadgeIcon,
  TruckIcon,
  CubeIcon,
  ClockIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhyChooseCard from "@/components/WhyChooseCard";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import {
  callLink,
  business,
  products,
  services,
  trustStats,
  whatsappLink,
  whyChooseUs,
  brandLogos,
} from "@/lib/site-config";

const trustIcons = [CheckBadgeIcon, TruckIcon, CubeIcon, ClockIcon];

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-10 sm:px-6 md:grid md:min-h-[75vh] md:grid-cols-2 md:items-center md:gap-8 md:py-12 lg:min-h-[80vh] lg:gap-12">
          <div className="animate-fade-up flex min-h-[65svh] flex-col justify-center py-10 md:block md:min-h-0 md:py-0">
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
              Ikeja, Lagos &middot; Nationwide Delivery
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-text sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
              Office Equipment Sales, Repairs and Installation in Lagos
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base md:mt-5">
              We sell, repair, install and supply new and fairly-used printers, laptops and
              photocopiers from our shop in Computer Village, Ikeja, with delivery nationwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-7">
              <PrimaryButton
                href={whatsappLink("Hi Doobaross Technologies, I'd like to enquire about...")}
                target="_blank"
                icon={<WhatsAppIcon className="h-5 w-5" />}
              >
                Chat on WhatsApp
              </PrimaryButton>
              <SecondaryButton href={callLink()} icon={<PhoneIcon className="h-5 w-5" />}>
                Call Now
              </SecondaryButton>
            </div>
          </div>
          <div className="animate-fade-up relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-xl border border-border shadow-lg sm:aspect-3/4 md:mx-0 md:max-h-[65vh] md:max-w-xs md:justify-self-end lg:max-h-none lg:max-w-md">
            <Image
              src="/images/founder-at-work.jpg"
              alt="Doobaross Technologies technician repairing office equipment"
              fill
              preload
              sizes="(min-width: 1024px) 28rem, (min-width: 768px) 20rem, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {trustStats.map((stat, i) => {
            const Icon = trustIcons[i];
            return (
              <Reveal key={stat.label} delay={i * 100} className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-heading text-base font-bold text-text">
                    {stat.value}
                  </span>
                  <span className="block text-xs text-text-secondary">{stat.label}</span>
                </span>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Services overview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="From sourcing new equipment to fixing what's already on your desk, we handle it from start to finish."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 100}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="border-y border-border bg-surface py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading title="Brands We Work With" center />
          <div className="mt-8 overflow-hidden">
            <div className="flex w-max animate-marquee gap-10">
              {[...brandLogos, ...brandLogos].map((brand, i) => (
                <span
                  key={`${brand}-${i}`}
                  className="flex h-16 w-36 shrink-0 items-center justify-center rounded-md border border-border bg-background px-4 font-heading text-sm font-semibold text-text-secondary grayscale transition-all duration-200 hover:text-primary hover:grayscale-0"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Why Doobaross"
          title="Why Businesses Choose Us"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <WhyChooseCard title={item.title} description={item.description} index={i} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { end: 10, suffix: "+", label: "Years in Business" },
            { end: 2, suffix: "", label: "Active WhatsApp Lines" },
            { end: 8, suffix: "", label: "Brands Supported" },
            { end: 36, suffix: "+", label: "States Reached (Nationwide)" },
          ].map((stat, i) => (
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

      {/* Featured products */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Catalog" title="Featured Products" />
            <Link
              href="/products"
              className="font-heading text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              View All Products →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Customers"
          title="What Clients Say"
          description="Real feedback from businesses we've sold to, repaired for, and installed equipment for."
          center
        />
        <div className="mt-10">
          <TestimonialsSlider />
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Repairs &amp; Installations"
            description={`${business.founder} and the team at work, sourcing, repairing and installing equipment for clients across Nigeria.`}
            center
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { src: "/images/founder-at-work.jpg", ratio: "aspect-1274/1668", caption: "On-site equipment repair & servicing" },
              { src: "/images/printer-repair.jpg", ratio: "aspect-1187/1590", caption: "Printer & photocopier diagnostics" },
              { src: "/images/doobaross3.png", ratio: "aspect-1086/1448", caption: "Component-level board repair" },
            ].map((item, i) => (
              <Reveal
                key={item.src}
                delay={i * 100}
                className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className={`relative w-full bg-background ${item.ratio} sm:aspect-4/5`}>
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-2 border-t border-border px-4 py-3">
                  <WrenchScrewdriverIcon className="h-4 w-4 shrink-0 text-primary" />
                  <p className="text-xs font-medium text-text-secondary">{item.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-16 text-white dark:border-t dark:border-border dark:bg-surface">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Need equipment sales, repair, or installation?
          </h2>
          <p className="text-white/85">Chat with us now. We typically reply fast on WhatsApp.</p>
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
