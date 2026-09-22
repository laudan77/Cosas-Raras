"use client";

import { useState } from "react";
import Image from "next/image";
import { COLORWAYS, Colorway, Product } from "@/lib/content";

export default function ProductCard({ product }: { product: Product }) {
  const [color, setColor] = useState<Colorway>(COLORWAYS[0]);

  return (
    <div className="group w-[82vw] flex-none snap-center sm:w-[52vw] md:w-[36vw] lg:w-[30vw]">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-ink">
        <Image
          src={product.image}
          alt={`Lámpara ${product.name} de Cosas Raras encendida`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 36vw, (min-width: 640px) 52vw, 82vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-500 group-hover:bg-ink/30 group-hover:opacity-100">
          <span className="font-display text-3xl font-extrabold uppercase tracking-wide text-cream">
            {product.name}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="font-body text-sm font-semibold text-wine">{product.price}</p>
        <div className="flex items-center gap-2">
          {COLORWAYS.map((c) => (
            <button
              key={c.id}
              type="button"
              data-cursor="lg"
              aria-label={c.label}
              onClick={() => setColor(c)}
              className="relative h-5 w-5 rounded-full transition-transform hover:scale-110"
              style={{ backgroundColor: c.hex }}
            >
              {color.id === c.id && (
                <span className="absolute -inset-1 rounded-full border border-ink/50" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
