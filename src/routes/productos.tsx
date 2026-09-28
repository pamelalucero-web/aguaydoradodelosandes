import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CalidadProducto, MayoristasCTA } from "@/components/site/Sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { BtnLink } from "@/components/site/Btn";
import { productos } from "@/data/productos";
import hero from "@/assets/producto-empacado.jpg";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos | Aguaymanto fresco y presentaciones comerciales" },
      {
        name: "description",
        content:
          "Catálogo de aguaymanto peruano: fruto fresco seleccionado, presentaciones para distribución y opciones especiales según requerimiento.",
      },
      { property: "og:title", content: "Productos | Aguaymanto fresco y presentaciones" },
      {
        property: "og:description",
        content:
          "Aguaymanto fresco, presentaciones para distribuidores y opciones especiales. Consulta disponibilidad y cotización.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        titulo="Aguaymanto peruano en las presentaciones que necesitas"
        texto="Cada presentación se coordina según el tipo de cliente, el volumen requerido y la disponibilidad de campaña."
        imagen={hero}
        alt="Aguaymanto fresco empacado en envase comercial"
      />

      <section id="aguaymanto-fresco" className="section-y scroll-mt-32">
        <div className="container-site">
          <SectionTitle
            eyebrow="Catálogo"
            title="Presentaciones disponibles"
            description="Los datos de peso, presentación y precio se confirman al momento de la cotización."
          />
          <div id="presentaciones" className="mt-14 grid scroll-mt-32 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto, i) => (
              <Reveal key={producto.slug} delay={i * 100} className="h-full">
                <ProductCard producto={producto} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12">
            <div className="rounded-3xl border border-dashed border-leaf/30 bg-secondary p-8 text-center">
              <h3 className="text-lg">¿Necesitas una presentación distinta?</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Evaluamos requerimientos específicos de producto, empaque y volumen según la
                disponibilidad del momento.
              </p>
              <BtnLink to="/contacto" variant="gold" size="md" className="mt-6">
                Solicitar cotización
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CalidadProducto />
      <MayoristasCTA />
    </>
  );
}
