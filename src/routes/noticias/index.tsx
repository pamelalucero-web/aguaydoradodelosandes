import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { NewsCard } from "@/components/site/NewsCard";
import { BtnLink } from "@/components/site/Btn";
import { categorias, noticias } from "@/data/noticias";
import hero from "@/assets/noticia-mercados.jpg";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Novedades de la empresa, información sobre el cultivo del aguaymanto, mercado y producción responsable.",
      },
      { property: "og:title", content: "Noticias y actualidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Noticias de la empresa, agricultura, aguaymanto, mercado y producción.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Noticias y actualidad"
        titulo="Novedades de la empresa y del aguaymanto peruano"
        texto="Información sobre nuestra actividad, el cultivo, el mercado y la producción responsable."
        imagen={hero}
        alt="Cajas de aguaymanto fresco en presentación comercial"
      />

      <section className="section-y">
        <div className="container-site">
          <SectionTitle eyebrow="Publicaciones" title="Últimas noticias" />
          <ul className="mt-8 flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <li
                key={categoria}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {categoria}
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia, i) => (
              <Reveal key={noticia.slug} delay={i * 100} className="h-full">
                <NewsCard noticia={noticia} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-leaf-gradient">
        <div className="container-site flex flex-col items-center gap-6 py-16 text-center">
          <Reveal>
            <h2 className="max-w-2xl text-3xl text-primary-foreground sm:text-4xl">
              ¿Te interesa nuestro aguaymanto?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Escríbenos y coordinamos una propuesta según tu requerimiento.
            </p>
            <BtnLink to="/contacto" variant="gold" size="lg" className="mt-8">
              Contactarnos
            </BtnLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
