import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_20px_40px_-10px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.5h-.02a9.87 9.87 0 01-5.03-1.378l-.36-.214-3.74.981.999-3.648-.235-.374A9.86 9.86 0 012.15 11.4c.003-5.45 4.436-9.882 9.89-9.882 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 012.895 6.994c-.003 5.45-4.436 9.882-9.883 9.882zM20.52 3.449A11.815 11.815 0 0012.04.5C5.463.5.116 5.847.113 12.417c0 2.098.548 4.15 1.588 5.958L.013 24.5l6.29-1.65a11.865 11.865 0 005.735 1.462h.005c6.577 0 11.925-5.347 11.928-11.917A11.86 11.86 0 0020.52 3.45z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-[color:var(--color-line-strong)] bg-[color:var(--color-ink-2)] px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        Chatea con nosotros
      </span>
    </a>
  );
}
