import {
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

const icons = [ShieldCheckIcon, WrenchScrewdriverIcon, GlobeAltIcon, TagIcon];
const accentClasses = ["bg-primary/10 text-primary", "bg-accent/10 text-accent"];

export default function WhyChooseCard({
  title,
  description,
  index = 0,
}: {
  title: string;
  description: string;
  index?: number;
}) {
  const Icon = icons[index % icons.length];
  return (
    <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110 ${accentClasses[index % 2]}`}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-heading text-base font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  );
}
