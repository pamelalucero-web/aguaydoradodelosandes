import {
  Boxes,
  ChefHat,
  Headset,
  Settings2,
  ShoppingBasket,
  Store,
  type LucideIcon,
} from "lucide-react";
import type { Servicio } from "@/data/servicios";
import { BtnAnchor } from "./Btn";
import { whatsappUrl } from "@/config/site";

const iconos: Record<Servicio["icono"], LucideIcon> = {
  shopping: ShoppingBasket,
  boxes: Boxes,
  chef: ChefHat,
  store: Store,
  settings: Settings2,
  headset: Headset,
};

export function ServiceCard({ servicio }: { servicio: Servicio }) {
  const Icono = iconos[servicio.icono];

  return (
    <article
      id={servicio.slug}
      className="group flex h-full scroll-mt-32 flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lift"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-leaf transition-colors duration-500 group-hover:bg-gold group-hover:text-gold-foreground">
        <Icono className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-lg">{servicio.titulo}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {servicio.descripcion}
      </p>
      <BtnAnchor
        href={whatsappUrl(`Hola, quisiera consultar por el servicio: ${servicio.titulo}.`)}
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
        className="mt-7 self-start"
      >
        Consultar
      </BtnAnchor>
    </article>
  );
}
