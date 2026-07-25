import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-36">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,0.35) 0%, transparent 60%)",
        }}
      />

      <div className="container-x relative grid gap-12 pb-20 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16 md:pb-32">
        <div className="animate-float-up">
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Fundas Premium <br />
            para <span className="gold-shimmer">iPhone</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[color:var(--color-mist)] md:text-lg">
            Descubre productos seleccionados para quienes buscan calidad, diseño
            y una experiencia diferente. Fundas premium para iPhone 11, 12, 13 y 14.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#catalogo" className="btn-gold">
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/50">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[color:var(--color-gold)]" />
              {siteConfig.location}
            </span>
            <span>iPhone 11 · 12 · 13 · 14</span>
            <span>Envíos nacionales</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-[color:var(--color-line-strong)] bg-[color:var(--color-ink-2)]">
            <img
              src={heroImage}
              alt="iPhone premium sobre fondo negro con destellos dorados"
              width={1600}
              height={1400}
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(8,8,8,0.6) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[color:var(--color-gold)]">
                  Nueva colección
                </p>
                <p className="mt-1 text-lg font-medium">¡Luce diferente, luce Premium!</p>
              </div>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-[color:var(--color-line-strong)] bg-[color:var(--color-ink-2)] px-5 py-4 shadow-[var(--shadow-card)] md:block">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/50">
              Diseños únicos
            </p>
            <p className="mt-1 text-2xl font-semibold gold-text">30+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
