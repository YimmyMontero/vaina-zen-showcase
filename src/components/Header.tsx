import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#080808]/85 border-b border-[color:var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" className="group flex items-center gap-2">
          <img
            src="/images/logo-vaina.png"
            alt="Vaina Pro Max"
            className="h-10 w-10 rounded-full object-contain transition-transform group-hover:scale-105 md:h-11 md:w-11"
          />
          <span className="text-[0.82rem] font-semibold tracking-[0.28em] uppercase">
            Vaina <span className="gold-text">Pro Max</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-[color:var(--color-gold)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-gold">
            <MessageCircle className="h-4 w-4" />
            Comprar por WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-line-strong)] md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-line)] bg-[#080808]/95 backdrop-blur-xl">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-[color:var(--color-gold)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-2"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="h-4 w-4" />
              Comprar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
