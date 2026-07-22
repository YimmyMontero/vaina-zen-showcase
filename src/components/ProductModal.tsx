import { useEffect } from "react";
import { X, MessageCircle, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-float-up relative w-full max-w-4xl overflow-hidden rounded-t-2xl border border-[color:var(--color-line-strong)] bg-[color:var(--color-ink-2)] sm:rounded-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--color-line-strong)] bg-[color:var(--color-ink)]/70 backdrop-blur transition-colors hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)]"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid md:grid-cols-2">
          <div
            className="relative aspect-square w-full md:aspect-auto"
            style={{ background: product.gradient }}
          >
            <div className="absolute inset-0 grid place-items-center">
              <div
                className="relative h-[68%] w-[38%] rounded-[2.4rem] border border-black/20 shadow-2xl"
                style={{ background: "rgba(0,0,0,0.08)" }}
              >
                <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/25" />
                <div className="absolute right-4 top-4 h-12 w-12 rounded-2xl bg-black/25" />
              </div>
            </div>
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full border border-[color:var(--color-gold)]/60 bg-[color:var(--color-ink)]/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold)] backdrop-blur">
                {product.badge}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-5 p-6 md:p-8">
            <div>
              <span className="eyebrow">Colección {product.category}</span>
              <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-mist)]">
                {product.description}
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-semibold gold-text">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/40">COP</span>
            </div>

            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/50">
                Compatible con
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {product.models.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-[color:var(--color-line-strong)] px-3 py-1 text-xs text-white/80"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {product.features && product.features.length > 0 && (
              <ul className="space-y-2 border-t border-[color:var(--color-line)] pt-5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 text-[color:var(--color-gold)]" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={getProductWhatsAppUrl(product.name)}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-2"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
