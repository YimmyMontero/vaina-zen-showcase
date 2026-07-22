import { MessageCircle, Clock, Instagram, MapPin, Facebook } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl border border-[color:var(--color-line-strong)] bg-gradient-to-br from-[#111] to-[#080808]">
          <div className="grid gap-10 p-8 md:grid-cols-[1.2fr_1fr] md:p-14">
            <div>
              <span className="eyebrow">Contacto</span>
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Escríbenos y encuentra <br />
                <span className="gold-text">tu estilo</span>.
              </h2>
              <p className="mt-5 max-w-md text-sm text-[color:var(--color-mist)]">
                Atendemos directamente por WhatsApp para asesorarte y confirmar la
                referencia deseada. Envíos desde {siteConfig.location}.
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-8"
              >
                <MessageCircle className="h-4 w-4" />
                Escríbenos por WhatsApp
              </a>
            </div>

            <ul className="grid gap-3 self-center">
              <ContactItem
                icon={<MessageCircle className="h-4 w-4" />}
                label="WhatsApp"
                value="+57 317 255 2503"
                href={getWhatsAppUrl()}
              />
              <ContactItem
                icon={<Clock className="h-4 w-4" />}
                label="Horario"
                value={siteConfig.schedule}
              />
              <ContactItem
                icon={<MapPin className="h-4 w-4" />}
                label="Ubicación"
                value={siteConfig.location}
              />
              <ContactItem
                icon={<Instagram className="h-4 w-4" />}
                label="Instagram"
                value="@vainapromax"
                href={siteConfig.instagramUrl}
              />
              <ContactItem
                icon={<Facebook className="h-4 w-4" />}
                label="Facebook"
                value="Vaina Pro Max"
                href={siteConfig.facebookUrl}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-ink)]/50 p-4 transition-colors hover:border-[color:var(--color-gold)]/40">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--color-gold)]/40 text-[color:var(--color-gold)]">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[0.6rem] uppercase tracking-[0.28em] text-white/50">
          {label}
        </p>
        <p className="truncate text-sm text-white">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}
