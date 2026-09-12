import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink, type Product } from "@/lib/site-config";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Badges: muted until the card is hovered, then full color */}
        <div className="absolute left-3 top-3 flex gap-2 opacity-60 grayscale-[40%] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0">
          <Badge variant={product.condition === "New" ? "new" : "used"}>{product.condition}</Badge>
          <Badge variant={product.inStock ? "in-stock" : "out-of-stock"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
            {product.brand}
          </p>
          <p className="text-[11px] font-medium uppercase tracking-wider text-text-secondary/70">
            {product.category}
          </p>
        </div>
        <h3 className="mt-2 font-heading text-base font-semibold leading-snug text-text transition-colors duration-200 group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-text-secondary">{product.priceLabel}</p>
        <div className="mt-auto pt-4">
          <Link
            href={whatsappLink(`Hi, I'd like to order/enquire about the ${product.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 font-heading text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order on WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
