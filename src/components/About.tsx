import { Sparkles, ShieldCheck, Gem } from "lucide-react";

const pillars = [
  {
    icon: Gem,
    title: "Diseño",
    body: "Colecciones únicas pensadas para quienes valoran el detalle.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad",
    body: "Materiales premium, acabados que resisten y se sienten diferentes.",
  },
  {
    icon: Sparkles,
    title: "Diferencia",
    body: "Piezas seleccionadas para elevar cada día con estilo.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32">
      <div className="container-x grid gap-16 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div>
          <span className="eyebrow">Nosotros</span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Una nueva forma <br />
            de <span className="gold-text">elegir</span>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--color-mist)]">
            Vaina Pro Max representa una nueva forma de elegir. Seleccionamos
            productos pensando en quienes valoran el diseño, la calidad y los
            detalles que marcan la diferencia.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="card-surface p-6"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--color-gold)]/40 text-[color:var(--color-gold)]">
                <Icon className="h-4 w-4" />
              </div>
              <p className="mt-4 text-[0.65rem] uppercase tracking-[0.28em] text-white/50">
                {title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
