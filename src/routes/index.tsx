import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { BtnLink } from "@/components/site/Btn";
import { ProductCard } from "@/components/site/ProductCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import { NewsCard } from "@/components/site/NewsCard";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { Gallery } from "@/components/site/Gallery";
import { MayoristasCTA, PorQueElegirnos } from "@/components/site/Sections";
import { productos } from "@/data/productos";
import { servicios } from "@/data/servicios";
import { noticias } from "@/data/noticias";
import campos from "@/assets/hero-plantacion.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aguaymanto Perú | Producción y venta de aguaymanto peruano" },
      {
        name: "description",
        content:
          "Producimos y comercializamos aguaymanto peruano seleccionado. Venta al por mayor, atención a restaurantes, tiendas y distribuidores. Solicita tu cotización.",
      },
      {
        property: "og:title",
        content: "Aguaymanto Perú | Producción y venta de aguaymanto peruano",
      },
      {
        property: "og:description",
        content:
          "Aguaymanto peruano seleccionado para clientes particulares, empresas y compradores mayoristas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <>
      <HeroSlider />

      {/* Introducción de la empresa */}
      <section className="section-y">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionTitle
            eyebrow="Sobre nosotros"
            title="Comprometidos con la calidad del aguaymanto peruano"
            description="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
          />
          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={campos}
                alt="Plantación de aguaymanto en los andes peruanos al amanecer"
                width={1920}
                height={1088}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-gold px-6 py-5 text-gold-foreground shadow-gold sm:block">
              <p className="font-display text-2xl font-semibold">100%</p>
              <p className="text-xs font-semibold tracking-[0.14em] uppercase">Origen peruano</p>
            </div>
          </Reveal>
        </div>
        <div className="container-site mt-10">
          <BtnLink to="/quienes-somos" variant="outline" size="lg">
            Conoce quiénes somos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </BtnLink>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="section-y bg-secondary">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              eyebrow="Nuestros productos"
              title="Aguaymanto seleccionado para cada tipo de cliente"
            />
            <Reveal delay={100}>
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-leaf transition-colors hover:text-leaf-dark"
              >
                Ver todos los productos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto, i) => (
              <Reveal key={producto.slug} delay={i * 100} className="h-full">
                <ProductCard producto={producto} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-y">
        <div className="container-site">
          <SectionTitle
            align="center"
            eyebrow="Nuestros servicios"
            title="Acompañamos a cada cliente según su necesidad"
            description="Desde la venta directa hasta la atención de pedidos por volumen y la asesoría comercial."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.slice(0, 6).map((servicio, i) => (
              <Reveal key={servicio.slug} delay={i * 80} className="h-full">
                <ServiceCard servicio={servicio} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <BtnLink to="/servicios" variant="leaf" size="lg">
              Conocer nuestros servicios
            </BtnLink>
          </div>
        </div>
      </section>

      <MayoristasCTA />
      <PorQueElegirnos />

      {/* Galería */}
      <section className="section-y">
        <div className="container-site">
          <SectionTitle
            eyebrow="Galería"
            title="Del campo a la presentación final"
            description="Campos, cosecha, selección, empaque y producto terminado."
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="section-y bg-secondary">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Noticias y actualidad" title="Novedades de la empresa" />
            <Reveal delay={100}>
              <Link
                to="/noticias"
                className="inline-flex items-center gap-2 text-sm font-semibold text-leaf transition-colors hover:text-leaf-dark"
              >
                Ver todas las noticias
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia, i) => (
              <Reveal key={noticia.slug} delay={i * 100} className="h-full">
                <NewsCard noticia={noticia} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Respuestas a las consultas más comunes"
            description="Si necesitas información específica sobre presentaciones, volúmenes o entregas, escríbenos."
          />
          <Reveal delay={120}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-leaf-gradient">
        <div className="container-site flex flex-col items-center gap-6 py-16 text-center lg:py-20">
          <Reveal>
            <h2 className="max-w-2xl text-3xl text-primary-foreground sm:text-4xl">
              Conversemos sobre tu próximo pedido de aguaymanto
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Cuéntanos qué necesitas y te enviaremos una propuesta según producto, volumen y
              disponibilidad.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <BtnLink to="/contacto" variant="gold" size="lg">
                Solicitar cotización
              </BtnLink>
              <BtnLink to="/productos" variant="onDark" size="lg">
                Consultar productos
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
