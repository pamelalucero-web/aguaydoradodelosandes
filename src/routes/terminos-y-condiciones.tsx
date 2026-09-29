import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Condiciones de uso del sitio web y alcance de la información comercial publicada por Aguaymanto Perú.",
      },
      { property: "og:title", content: "Términos y condiciones | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio web y de la información comercial publicada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <section className="section-y pt-40">
      <div className="container-site max-w-3xl">
        <h1 className="text-4xl">Términos y condiciones</h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            El uso de este sitio web implica la aceptación de las siguientes condiciones. Este texto
            es una versión inicial y editable de {site.nombreLegal}.
          </p>
          <h2 className="pt-4 text-2xl">Información publicada</h2>
          <p>
            La información sobre productos, presentaciones y disponibilidad es de carácter
            referencial y puede variar según la campaña agrícola. Las condiciones definitivas se
            confirman en la cotización correspondiente.
          </p>
          <h2 className="pt-4 text-2xl">Cotizaciones y pedidos</h2>
          <p>
            Las cotizaciones se emiten según el volumen, la presentación solicitada y la
            disponibilidad del momento. Los pedidos quedan confirmados cuando ambas partes acuerdan
            las condiciones comerciales.
          </p>
          <h2 className="pt-4 text-2xl">Propiedad del contenido</h2>
          <p>
            Los textos e imágenes de este sitio pertenecen a la empresa y no pueden reproducirse sin
            autorización previa.
          </p>
        </div>
      </div>
    </section>
  );
}
