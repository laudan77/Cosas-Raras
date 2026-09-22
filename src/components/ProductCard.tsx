import Image from "next/image";
import { Product } from "@/lib/content";

export default function ProductCard({ product }: { product: Product }) {
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
    </div>
  );
}
