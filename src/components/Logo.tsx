import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/site-config";

export default function Logo({ compact = false, preload = false }: { compact?: boolean; preload?: boolean }) {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center rounded-md bg-white/0 px-0 py-1 transition-colors dark:bg-white dark:px-2.5 dark:shadow-sm"
      aria-label={`${business.name} home`}
    >
      {compact ? (
        <Image
          src="/images/logo-icon.png"
          alt={business.name}
          width={340}
          height={310}
          preload={preload}
          className="h-9 w-auto sm:h-10"
        />
      ) : (
        <Image
          src="/images/logo-full.png"
          alt={business.name}
          width={1254}
          height={410}
          preload={preload}
          className="h-8 w-auto sm:h-9"
        />
      )}
    </Link>
  );
}
