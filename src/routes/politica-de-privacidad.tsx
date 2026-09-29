import { createFileRoute } from "@tanstack/react-router";
import { contacto, site } from "@/config/site";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Cómo tratamos los datos que nos envías a través del formulario de contacto y los canales de atención de Aguaymanto Perú.",
      },
      { property: "og:title", content: "Política de privacidad | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Información sobre el tratamiento de datos personales en nuestro sitio web.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <section className="section-y pt-40">
      <div className="container-site max-w-3xl">
        <h1 className="text-4xl">Política de privacidad</h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            En {site.nombreLegal} tratamos los datos que nos proporcionas con la finalidad de
            atender tus consultas comerciales y elaborar cotizaciones. Este texto es una versión
            inicial y editable.
          </p>
          <h2 className="pt-4 text-2xl">Datos que recopilamos</h2>
          <p>
            A través del formulario de contacto podemos recibir tu nombre, empresa, correo
            electrónico, teléfono, ciudad, tipo de cliente, producto de interés, cantidad
            aproximada y el mensaje que nos envíes.
          </p>
          <h2 className="pt-4 text-2xl">Uso de la información</h2>
          <p>
            Utilizamos esa información únicamente para responder tu consulta, coordinar pedidos y
            mantener la comunicación comercial. No comercializamos tus datos con terceros.
          </p>
          <h2 className="pt-4 text-2xl">Conservación y derechos</h2>
          <p>
            Puedes solicitar el acceso, la rectificación o la eliminación de tus datos escribiendo a{" "}
            <a href={`mailto:${contacto.correo}`} className="font-medium text-leaf underline">
              {contacto.correo}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
