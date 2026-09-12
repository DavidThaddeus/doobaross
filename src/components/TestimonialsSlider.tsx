"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { testimonials } from "@/lib/site-config";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-border"}`}
          aria-hidden="true"
        >
          <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.28 3.95a1 1 0 0 0 .95.69h4.15c.97 0 1.37 1.24.59 1.81l-3.36 2.44a1 1 0 0 0-.36 1.12l1.28 3.95c.3.92-.75 1.69-1.54 1.12l-3.36-2.44a1 1 0 0 0-1.18 0l-3.36 2.44c-.78.57-1.84-.2-1.54-1.12l1.28-3.95a1 1 0 0 0-.36-1.12L2.08 9.38c-.78-.57-.38-1.81.6-1.81h4.14a1 1 0 0 0 .95-.69l1.28-3.95Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrows();
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const arrowBase =
    "flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200";

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-2 sm:mx-0 sm:px-0"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            data-card
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-xl border border-border bg-background p-6 shadow-sm sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="flex items-center justify-between">
              <Stars rating={t.rating} />
              <span aria-hidden="true" className="font-heading text-4xl leading-none text-primary/15">
                &rdquo;
              </span>
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-heading text-sm font-semibold text-text">{t.name}</span>
                <span className="block text-xs text-text-secondary">
                  {t.role} · {t.location}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous testimonials"
          className={`${arrowBase} ${
            canPrev
              ? "border-border bg-background text-text hover:border-primary hover:bg-primary hover:text-white"
              : "cursor-default border-border/60 bg-surface text-text-secondary/40"
          }`}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next testimonials"
          className={`${arrowBase} ${
            canNext
              ? "border-border bg-background text-text hover:border-primary hover:bg-primary hover:text-white"
              : "cursor-default border-border/60 bg-surface text-text-secondary/40"
          }`}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
