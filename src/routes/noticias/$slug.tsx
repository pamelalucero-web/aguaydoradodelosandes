import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Tag, User } from "lucide-react";
import { NewsCard } from "@/components/site/NewsCard";
import { Reveal } from "@/components/site/Reveal";
import { BtnLink } from "@/components/site/Btn";
import { formatearFecha, noticias } from "@/data/noticias";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = noticias.find((n) => n.slug === params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ loaderData }) => {
    const noticia = loaderData?.noticia;
    const titulo = noticia ? `${noticia.titulo} | Aguaymanto Perú` : "Noticia | Aguaymanto Perú";
    const descripcion = noticia?.resumen ?? "Noticias y actualidad de Aguaymanto Perú.";
    return {
      meta: [
        { title: titulo },
        { name: "description", content: descripcion },
        { property: "og:title", content: titulo },
        { property: "og:description", content: descripcion },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: NoticiaDetalle,
});

function NoticiaDetalle() {
  const { noticia } = Route.useLoaderData();
  const relacionadas = noticias.filter((n) => n.slug !== noticia.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="relative isolate flex min-h-[60svh] items-end overflow-hidden bg-leaf-dark pt-36 pb-14">
          <img
            src={noticia.imagen}
            alt={noticia.alt}
            width={1200}
            height={800}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-leaf-dark via-leaf-dark/75 to-leaf-dark/30"
          />
          <div className="container-site relative max-w-3xl">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver a noticias
            </Link>
            <h1 className="mt-5 text-3xl leading-[1.12] text-primary-foreground sm:text-4xl lg:text-5xl">
              {noticia.titulo}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <Tag className="h-4 w-4" aria-hidden="true" />
                {noticia.categoria}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                <time dateTime={noticia.fecha}>{formatearFecha(noticia.fecha)}</time>
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" aria-hidden="true" />
                {noticia.autor}
              </span>
            </div>
          </div>
        </header>

        <div className="section-y">
          <div className="container-site max-w-3xl">
            <p className="font-display text-xl leading-relaxed text-leaf-dark">{noticia.resumen}</p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              {noticia.contenido.map((parrafo) => (
                <p key={parrafo.slice(0, 32)}>{parrafo}</p>
              ))}
            </div>
            <div className="mt-10 rounded-3xl bg-secondary p-8">
              <h2 className="text-lg">¿Quieres más información?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Escríbenos para conocer nuestras presentaciones disponibles y solicitar una
                cotización.
              </p>
              <BtnLink to="/contacto" variant="gold" size="md" className="mt-6">
                Solicitar cotización
              </BtnLink>
            </div>
          </div>
        </div>

        {/* Galería opcional de la noticia */}
        <section className="pb-4">
          <div className="container-site">
            <h2 className="text-2xl">Galería</h2>
            <div className="mt-8">
              <Gallery />
            </div>
          </div>
        </section>
      </article>

      <section className="section-y bg-secondary">
        <div className="container-site">
          <h2 className="text-2xl sm:text-3xl">Noticias relacionadas</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {relacionadas.map((rel, i) => (
              <Reveal key={rel.slug} delay={i * 100} className="h-full">
                <NewsCard noticia={rel} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
