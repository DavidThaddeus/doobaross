type BadgeVariant = "new" | "used" | "both" | "in-stock" | "out-of-stock" | "neutral";

const styles: Record<BadgeVariant, string> = {
  new: "bg-primary text-white",
  used: "bg-text-secondary text-white",
  both: "bg-background text-text border border-border",
  "in-stock": "bg-success text-white",
  "out-of-stock": "bg-accent text-white",
  neutral: "bg-surface text-text-secondary border border-border",
};

export default function Badge({
  children,
  variant = "neutral",
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
