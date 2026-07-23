import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  product: Product;
  onOpen: (p: Product) => void;
}

export function ProductCard({ product, onOpen }: Props) {
  return (
    <article className="card-surface group flex flex-col overflow-hidden">
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="relative block aspect-[4/5] w-full overflow-hidden"
        aria-label={`Ver detalles de ${product.name}`}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ background: product.gradient }}
        />
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, rgba(8,8,8,0.55) 100%)",
          }}
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full border border-[color:var(--color-gold)]/60 bg-[color:var(--color-ink)]/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold)] backdrop-blur">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-4 left-4 text-[0.6rem] uppercase tracking-[0.28em] text-white/70">
          {product.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-tight">{product.name}</h3>
          <span className="shrink-0 text-sm font-semibold gold-text">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-[color:var(--color-mist)]">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {product.models.map((m) => (
            <span
              key={m}
              className="rounded-full border border-[color:var(--color-line)] px-2 py-0.5 text-[0.65rem] text-white/60"
            >
              {m}
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpen(product)}
            className="flex-1 rounded-full border border-[color:var(--color-line-strong)] px-4 py-2 text-xs font-medium tracking-wide transition-colors hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)]"
          >
            Ver detalle
          </button>
          <a
            href={getProductWhatsAppUrl(product.name)}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-gold)] text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-gold-soft)]"
            aria-label={`Consultar ${product.name} por WhatsApp`}
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
