export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-sm font-heading font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      )}
      <Heading className="mt-2 font-heading text-2xl font-bold leading-tight text-text sm:text-3xl md:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-text-secondary">{description}</p>
      )}
    </div>
  );
}
