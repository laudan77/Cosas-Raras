"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Product, waLink } from "@/lib/content";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-cream shadow-2xl">
        <button
          type="button"
          aria-label="Cerrar"
          data-cursor="lg"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-cream transition-colors hover:bg-ink"
        >
          ✕
        </button>

        <div className="relative aspect-[16/10] w-full">
          <Image
            src={product.image}
            alt={`Lámpara ${product.name} de Cosas Raras`}
            fill
            sizes="(min-width: 768px) 640px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="p-8 md:p-10">
          <h3 className="font-display text-3xl font-extrabold text-ink">
            {product.name}
            {product.subtitle && (
              <span className="ml-3 align-middle font-body text-sm font-medium uppercase tracking-widest text-wine">
                {product.subtitle}
              </span>
            )}
          </h3>
          <p className="mt-1 font-display text-lg font-bold text-wine">{product.price}</p>

          {product.specs && (
            <dl className="mt-8 divide-y divide-ink/10 border-t border-ink/10">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[110px_1fr] gap-4 py-3 sm:grid-cols-[140px_1fr]"
                >
                  <dt className="font-body text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {s.label}
                  </dt>
                  <dd className="font-body text-sm leading-relaxed text-ink/80">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {product.diyNote && (
            <p className="mt-6 rounded-2xl bg-olive/25 px-5 py-4 font-body text-sm font-semibold uppercase tracking-wide text-ink">
              {product.diyNote}
            </p>
          )}

          <a
            href={waLink(
              `Hola Lau, quiero cotizar la lámpara ${product.name}${
                product.subtitle ? " " + product.subtitle : ""
              }. ¿Me cuentas los pasos para pedirla?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="lg"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-transform hover:scale-105"
          >
            Cotizar {product.name}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
