import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ServiceIcon from "./ServiceIcon";
import type { Service } from "@/lib/site-config";

const accentClasses = ["bg-primary/10 text-primary", "bg-accent/10 text-accent"];

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <div className="group flex h-full flex-col border border-border bg-surface p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <span
        className={`flex h-12 w-12 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 ${accentClasses[index % 2]}`}
      >
        <ServiceIcon icon={service.icon} />
      </span>
      <h3 className="mt-4 font-heading text-lg font-semibold text-text">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-text-secondary">{service.short}</p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline underline-offset-4"
      >
        Learn More
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
