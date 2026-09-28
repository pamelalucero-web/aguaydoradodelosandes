import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** Logotipo temporal de texto con identidad gráfica del fruto. [LOGO] */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      to="/"
      aria-label={`${"Aguaymanto Perú"} — ir al inicio`}
      className="group flex items-center gap-3"
    >
      <span
        aria-hidden="true"
        className={cn(
          "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-105",
          onDark ? "bg-primary-foreground/12" : "bg-secondary",
        )}
      >
        <span className="absolute h-6 w-6 rounded-full bg-gold shadow-gold" />
        <span className="absolute -top-0.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 rounded-[4px_2px_4px_2px] bg-leaf" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-semibold tracking-tight",
            onDark ? "text-primary-foreground" : "text-leaf-dark",
          )}
        >
          AGUAYMANTO PERÚ
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-semibold tracking-[0.22em]",
            onDark ? "text-gold-soft" : "text-leaf",
          )}
        >
          PRODUCCIÓN Y COMERCIALIZACIÓN
        </span>
      </span>
    </Link>
  );
}
