"use client";

import { useMemo, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  brands,
  productCategories,
  products,
  whatsappLink,
  type ProductCategory,
  type ProductCondition,
} from "@/lib/site-config";

type ConditionFilter = ProductCondition | "All";

export default function ProductsExplorer() {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [condition, setCondition] = useState<ConditionFilter>("All");
  const [brand, setBrand] = useState<string | "All">("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (condition !== "All" && p.condition !== condition) return false;
      if (brand !== "All" && p.brand !== brand) return false;
      return true;
    });
  }, [category, condition, brand]);

  const hasActiveFilters = category !== "All" || condition !== "All" || brand !== "All";

  const clearFilters = () => {
    setCategory("All");
    setCondition("All");
    setBrand("All");
  };

  return (
    <div>
      {/* Filter toolbar */}
      <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-heading text-xs font-semibold uppercase tracking-wide text-text-secondary">
            Filter Products
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
            >
              <XMarkIcon className="h-3.5 w-3.5" />
              Clear filters
            </button>
          )}
        </div>

        {/* Category */}
        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-text-secondary/70">
            Category
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("All")}
              className={`min-h-9 rounded-full border px-4 py-1.5 text-xs font-heading font-semibold transition-colors duration-150 ${
                category === "All"
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-background text-text-secondary hover:border-primary hover:bg-primary/10 hover:text-primary"
              }`}
            >
              All Categories
            </button>
            {productCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`min-h-9 rounded-full border px-4 py-1.5 text-xs font-heading font-semibold transition-colors duration-150 ${
                  category === c
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background text-text-secondary hover:border-primary hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          {/* Condition */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-text-secondary/70">
              Condition
            </p>
            <div className="mt-2 flex items-center gap-1 rounded-full border border-border bg-background p-1">
              {(["All", "New", "Used"] as ConditionFilter[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCondition(c)}
                  className={`min-h-8 rounded-full px-4 py-1 text-xs font-heading font-semibold transition-colors duration-150 ${
                    condition === c
                      ? "bg-primary text-white"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-text-secondary/70">
              Brand
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                onClick={() => setBrand("All")}
                className={`min-h-8 rounded-full border px-3.5 py-1 text-xs font-semibold transition-colors duration-150 ${
                  brand === "All"
                    ? "border-primary bg-primary text-white"
                    : "border-border text-text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                All Brands
              </button>
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`min-h-8 rounded-full border px-3.5 py-1 text-xs font-semibold transition-colors duration-150 ${
                    brand === b
                      ? "border-primary bg-primary text-white"
                      : "border-border text-text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Result count */}
      <p className="mt-6 text-sm text-text-secondary">
        Showing <span className="font-semibold text-text">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "product" : "products"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-4 flex flex-col items-center gap-4 rounded-xl border border-dashed border-border bg-surface p-12 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </span>
          <div>
            <p className="font-heading text-base font-semibold text-text">
              No products match those filters
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              We likely still have it. Message us on WhatsApp and ask directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink("Hi Doobaross Technologies, I'm looking for...")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 font-heading text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-hover"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Ask on WhatsApp
            </a>
            <button
              onClick={clearFilters}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2.5 font-heading text-sm font-semibold text-text-secondary transition-colors duration-150 hover:border-primary hover:text-primary"
            >
              Clear filters
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={(i % 6) * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
