"use client";

import { useState } from "react";
import Image from "next/image";
import { COLORWAYS, Colorway, Product, waLink } from "@/lib/content";

export default function ProductCard({ product }: { product: Product }) {
  const [color, setColor] = useState<Colorway>(COLORWAYS[0]);

  return (
    <div className="group w-[82vw] flex-none snap-center sm:w-[52vw] md:w-[36vw] lg:w-[30vw]">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-ink">
        <div
          className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-60 blur-2xl transition-colors duration-500"
          style={{ backgroundColor: color.hex }}
        />
        <Image
          src={product.image}
          alt={`Lámpara ${product.name} de Cosas Raras encendida`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 36vw, (min-width: 640px) 52vw, 82vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <div
          className="absolute inset-0 rounded-[2rem] ring-2 ring-inset transition-colors duration-500"
          style={{ boxShadow: `inset 0 0 0 2px ${color.hex}55` }}
        />
        <span className="absolute left-6 top-6 rounded-full bg-cream/90 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-ink">
          {product.measures}
        </span>
      </div>

      <div className="mt-6">
        <h3 className="font-display text-3xl font-extrabold text-ink">
          {product.name}
          {product.subtitle && (
            <span className="ml-3 align-middle font-body text-sm font-medium uppercase tracking-widest text-wine">
              {product.subtitle}
            </span>
          )}
        </h3>

        <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-ink/70">
          {product.description}
        </p>

        <p className="mt-4 font-display text-xl font-bold text-wine">
          {product.price}
        </p>

        <div className="mt-6">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            Elige tu color
          </p>
          <div className="flex items-center gap-3">
            {COLORWAYS.map((c) => (
              <button
                key={c.id}
                data-cursor="lg"
                aria-label={c.label}
                onClick={() => setColor(c)}
                className="relative h-9 w-9 rounded-full transition-transform hover:scale-110"
                style={{ backgroundColor: c.hex }}
              >
                {color.id === c.id && (
                  <span
                    className="absolute -inset-1.5 rounded-full border-2"
                    style={{ borderColor: c.hex }}
                  />
                )}
              </button>
            ))}
            <span className="font-body text-sm font-medium text-ink/70">
              {color.label}
            </span>
          </div>
        </div>

        <a
          href={waLink(
            `Hola Lau, quiero cotizar la lámpara ${product.name}${
              product.subtitle ? " " + product.subtitle : ""
            } en color ${color.label}. ¿Me cuentas los pasos para pedirla?`
          )}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="lg"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-transform hover:scale-105"
        >
          Cotizar {product.name}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
