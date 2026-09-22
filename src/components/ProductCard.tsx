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
      </div>

      <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-ink/70">
        {product.description}
      </p>
    </div>
  );
}
