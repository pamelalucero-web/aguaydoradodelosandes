import { createFileRoute } from "@tanstack/react-router";
import { Compass, Target } from "lucide-react";
import { PageHero } from "@/components/site/Sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { BtnLink } from "@/components/site/Btn";
import { compromisos, historia, mision, valores, vision } from "@/config/site";
import heroCosecha from "@/assets/hero-cosecha.jpg";
import campos from "@/assets/hero-plantacion.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa: historia, misión, visión, valores y compromiso con la calidad del aguaymanto peruano.",
      },
      { property: "og:title", content: "Quiénes somos | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Una empresa con raíces en el campo peruano dedicada a la producción y comercialización de aguaymanto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuienesSomos,
});

function QuienesSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        titulo="Una empresa con raíces en el campo peruano"
        texto="Producimos y comercializamos aguaymanto con foco en la calidad, la atención cercana y las relaciones comerciales de largo plazo."
        imagen={heroCosecha}
        alt="Cosecha de aguaymanto en el campo peruano"
      />

      {/* Nuestra empresa */}
      <section id="nuestra-empresa" className="section-y scroll-mt-32">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={campos}
                alt="Campos de cultivo de aguaymanto con montañas al fondo"
                width={1920}
                height={1088}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[4/3]"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow="Nuestra empresa"
              title="Aguaymanto peruano, trabajado con criterio comercial"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos una empresa peruana dedicada a la producción y comercialización de
                aguaymanto. Nuestro trabajo consiste en llevar el fruto desde el campo hasta
                clientes que valoran una presentación cuidada y un estándar consistente.
              </p>
              <p>
                Atendemos a clientes particulares y también a empresas: restaurantes, hoteles,
                cafeterías, tiendas, distribuidores y compradores mayoristas que requieren
                aguaymanto de forma puntual o recurrente.
              </p>
              <p>
                Lo que nos diferencia es la cercanía en la atención y el cuidado en cada etapa:
                selección, manipulación, empaque y coordinación de entrega. Nuestro compromiso con
                la calidad guía todas nuestras decisiones.
              </p>
            </div>
            <BtnLink to="/productos" variant="outline" size="lg" className="mt-8">
              Ver nuestros productos
            </BtnLink>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section id="nuestra-historia" className="section-y scroll-mt-32 bg-secondary">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nuestra historia"
            title="Un crecimiento paso a paso"
            description="Estos textos son iniciales y editables; serán reemplazados por la historia real de la empresa."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {historia.map((hito, i) => (
              <Reveal
                key={hito.numero}
                delay={i * 100}
                as="li"
                className="relative rounded-3xl bg-card p-8 shadow-soft"
              >
                <span className="font-display text-4xl font-semibold text-gold">
                  {hito.numero}
                </span>
                <h3 className="mt-4 text-lg">{hito.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{hito.texto}</p>
                <span
                  aria-hidden="true"
                  className="absolute top-12 -right-3 hidden h-px w-6 bg-gold/50 lg:block"
                />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="section-y">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <Reveal
            as="article"
            className="scroll-mt-32 rounded-[2rem] bg-leaf-gradient p-10 text-primary-foreground shadow-lift"
          >
            <span
              id="mision"
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-gold-foreground"
            >
              <Target className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl text-primary-foreground sm:text-3xl">Nuestra Misión</h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/85">{mision}</p>
          </Reveal>
          <Reveal
            as="article"
            delay={120}
            className="scroll-mt-32 rounded-[2rem] border border-border bg-card p-10 shadow-soft"
          >
            <span
              id="vision"
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-leaf"
            >
              <Compass className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl sm:text-3xl">Nuestra Visión</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{vision}</p>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="section-y scroll-mt-32 bg-secondary">
        <div className="container-site">
          <SectionTitle align="center" eyebrow="Nuestros valores" title="Lo que guía nuestro trabajo" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor, i) => (
              <Reveal
                key={valor.titulo}
                delay={i * 70}
                as="article"
                className="h-full rounded-3xl bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className="block h-1.5 w-10 rounded-full bg-gold"
                />
                <h3 className="mt-5 text-lg">{valor.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{valor.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section id="nuestro-compromiso" className="section-y scroll-mt-32">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nuestro compromiso"
            title="Tres pilares que sostienen nuestro trabajo"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {compromisos.map((pilar, i) => (
              <Reveal
                key={pilar.titulo}
                delay={i * 100}
                as="article"
                className="h-full rounded-3xl border border-border bg-card p-9 shadow-soft"
              >
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                  Pilar {i + 1}
                </span>
                <h3 className="mt-3 text-xl">{pilar.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pilar.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="section-y bg-secondary">
        <div className="container-site">
          <SectionTitle eyebrow="Galería" title="Nuestro trabajo en imágenes" />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>
    </>
  );
}
