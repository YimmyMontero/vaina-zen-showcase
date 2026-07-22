interface Props {
  items: string[];
  active: string;
  onSelect: (v: string) => void;
  label?: string;
}

export function CategoryFilter({ items, active, onSelect, label }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-white/40">
          {label}
        </span>
      )}
      <div className="-mx-1 flex flex-wrap gap-2">
        {items.map((item) => {
          const isActive = item === active;
          return (
            <button
              key={item}
              type="button"
              onClick={() => onSelect(item)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                isActive
                  ? "border-[color:var(--color-gold)] bg-[color:var(--color-gold)] text-[color:var(--color-ink)]"
                  : "border-[color:var(--color-line-strong)] text-white/70 hover:border-[color:var(--color-gold)]/60 hover:text-[color:var(--color-gold)]"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
