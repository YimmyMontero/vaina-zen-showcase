import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-[color:var(--color-ink-2)]">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--color-gold)] text-[color:var(--color-gold)] text-sm font-bold">
              V
            </span>
            <span className="text-sm font-semibold tracking-[0.28em] uppercase">
              Vaina <span className="gold-text">Pro Max</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-[color:var(--color-mist)]">
            {siteConfig.tagline}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/40">
            {siteConfig.location}
          </p>
        </div>

        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-white/40">
            Explora
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#catalogo" className="text-white/70 hover:text-[color:var(--color-gold)]">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#nosotros" className="text-white/70 hover:text-[color:var(--color-gold)]">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-white/70 hover:text-[color:var(--color-gold)]">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-white/40">
            Comunidad
          </p>
          <div className="mt-4 flex items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-line-strong)] transition-colors hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-line-strong)] transition-colors hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)]"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-line-strong)] transition-colors hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)]"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-line)]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="uppercase tracking-[0.28em]">Catálogo V.05.02</p>
        </div>
      </div>
    </footer>
  );
}
