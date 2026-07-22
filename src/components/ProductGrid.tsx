import { useMemo, useState } from "react";
import { categories, models, products, type Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { CategoryFilter } from "./CategoryFilter";

const ALL = "Todos";

export function ProductGrid() {
  const [category, setCategory] = useState<string>(ALL);
  const [model, setModel] = useState<string>(ALL);
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const okCat = category === ALL || p.category === category;
      const okModel = model === ALL || p.models.includes(model);
      return okCat && okModel;
    });
  }, [category, model]);

  return (
    <section id="catalogo" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Catálogo destacado</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Piezas seleccionadas <br className="hidden md:block" />
              para <span className="gold-text">destacar</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[color:var(--color-mist)]">
            Colecciones diseñadas para iPhone 11, 12, 13 y 14. Cada pieza combina
            protección, diseño y una estética única.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-y border-[color:var(--color-line)] py-6">
          <CategoryFilter
            label="Modelo"
            items={[ALL, ...models]}
            active={model}
            onSelect={setModel}
          />
          <CategoryFilter
            label="Colección"
            items={[ALL, ...categories]}
            active={category}
            onSelect={setCategory}
          />
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-[color:var(--color-line)] p-12 text-center text-sm text-white/60">
            No hay productos que coincidan con los filtros seleccionados.
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={setActive} />
            ))}
          </div>
        )}
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}
