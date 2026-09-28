import { createFileRoute } from "@tanstack/react-router";
import { PageHero, MayoristasCTA, PorQueElegirnos } from "@/components/site/Sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { servicios } from "@/data/servicios";
import hero from "@/assets/seleccion-empaque.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | Venta mayorista de aguaymanto y atención a empresas" },
      {
        name: "description",
        content:
          "Venta de aguaymanto, venta al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Servicios | Aguaymanto Perú" },
      {
        property: "og:description",
        content:
          "Atendemos clientes particulares, restaurantes, tiendas, distribuidores y pedidos por volumen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        titulo="Servicios pensados para cada tipo de cliente"
        texto="Desde la venta directa hasta la atención de pedidos por volumen, con acompañamiento comercial en cada paso."
        imagen={hero}
        alt="Equipo seleccionando aguaymanto en área de empaque"
      />

      <section className="section-y">
        <div className="container-site">
          <SectionTitle
            eyebrow="Qué ofrecemos"
            title="Atención comercial alrededor de nuestro producto"
            description="Selecciona el servicio que necesitas y consúltanos directamente por WhatsApp."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((servicio, i) => (
              <Reveal key={servicio.slug} delay={i * 80} className="h-full">
                <ServiceCard servicio={servicio} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PorQueElegirnos />
      <MayoristasCTA />
    </>
  );
}
