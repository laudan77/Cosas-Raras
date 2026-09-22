"use client";

import { useRef } from "react";
import { PRODUCTS } from "@/lib/content";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 460, behavior: "smooth" });
  };

  return (
    <section id="lamparas" className="relative bg-white py-28 md:py-36">
      <div className="mx-auto flex max-w-6xl justify-end px-6 md:px-10">
        <Reveal>
          <div className="flex gap-3">
            <button
              data-cursor="lg"
              aria-label="Anterior"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-wine hover:text-wine"
            >
              ←
            </button>
            <button
              data-cursor="lg"
              aria-label="Siguiente"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-wine hover:text-wine"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div
          ref={trackRef}
          className="mt-16 flex snap-x snap-mandatory gap-10 overflow-x-auto px-6 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
