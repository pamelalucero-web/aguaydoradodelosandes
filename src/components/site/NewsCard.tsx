import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatearFecha, type Noticia } from "@/data/noticias";

export function NewsCard({ noticia }: { noticia: Noticia }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <Link
        to="/noticias/$slug"
        params={{ slug: noticia.slug }}
        className="relative block aspect-[16/10] overflow-hidden"
        aria-label={noticia.titulo}
      >
        <img
          src={noticia.imagen}
          alt={noticia.alt}
          width={1200}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-gold-foreground uppercase">
          {noticia.categoria}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <time dateTime={noticia.fecha} className="text-xs font-medium text-muted-foreground">
          {formatearFecha(noticia.fecha)}
        </time>
        <h3 className="mt-3 text-lg leading-snug">
          <Link
            to="/noticias/$slug"
            params={{ slug: noticia.slug }}
            className="transition-colors hover:text-leaf"
          >
            {noticia.titulo}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {noticia.resumen}
        </p>
        <Link
          to="/noticias/$slug"
          params={{ slug: noticia.slug }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf transition-colors hover:text-leaf-dark"
        >
          Leer más
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
