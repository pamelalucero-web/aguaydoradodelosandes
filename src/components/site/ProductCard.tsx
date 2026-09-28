import { ArrowRight } from "lucide-react";
import type { Producto } from "@/data/productos";
import { BtnAnchor } from "./Btn";
import { whatsappUrl } from "@/config/site";

export function ProductCard({ producto }: { producto: Producto }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.alt}
          width={1200}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-leaf-dark uppercase backdrop-blur">
          {producto.disponibilidad}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl">{producto.nombre}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{producto.descripcion}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {producto.caracteristicas.map((c) => (
            <li
              key={c}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-leaf-dark"
            >
              {c}
            </li>
          ))}
        </ul>
        <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-5 text-xs">
          <div>
            <dt className="text-muted-foreground">Presentación</dt>
            <dd className="mt-0.5 font-semibold text-leaf-dark">{producto.presentacion}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Peso</dt>
            <dd className="mt-0.5 font-semibold text-leaf-dark">{producto.peso}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-muted-foreground">Precio</dt>
            <dd className="mt-0.5 font-semibold text-leaf-dark">{producto.precio}</dd>
          </div>
        </dl>
        <BtnAnchor
          href={whatsappUrl(
            `Hola, quisiera información sobre ${producto.nombre} (aguaymanto). ¿Me pueden ayudar?`,
          )}
          target="_blank"
          rel="noreferrer"
          variant="leaf"
          size="md"
          className="mt-7 w-full"
        >
          {producto.cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </BtnAnchor>
      </div>
    </article>
  );
}
