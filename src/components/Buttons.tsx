import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  icon?: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 px-4 py-3 text-sm sm:px-6 font-heading font-semibold transition-all duration-200 ease-out min-h-11";

export function PrimaryButton({ href, children, className = "", target, icon }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} bg-accent text-white hover:bg-accent-hover hover:scale-105 ${className}`}
    >
      {icon}
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children, className = "", target, icon }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} group relative overflow-hidden border border-primary text-primary ${className}`}
    >
      <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-200 group-hover:text-white">
        {icon}
        {children}
      </span>
    </Link>
  );
}

export function GhostButton({ href, children, className = "", target, icon }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 text-primary font-semibold hover:underline underline-offset-4 ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}
