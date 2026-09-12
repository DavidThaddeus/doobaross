import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProductsExplorer from "@/components/ProductsExplorer";

const description =
  "Browse new and fairly-used printers, laptops, photocopiers, accessories and networking equipment from Doobaross Technologies in Computer Village, Ikeja, Lagos.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: { title: "Products | Doobaross Technologies", description, url: "/products" },
  twitter: { title: "Products | Doobaross Technologies", description },
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            as="h1"
            eyebrow="Catalog"
            title="Products"
            description="New and fairly-used equipment, filterable by category, condition and brand. Pricing is shared on request via WhatsApp."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <ProductsExplorer />
      </section>
    </>
  );
}
