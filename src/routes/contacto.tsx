import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/Sections";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { BtnAnchor } from "@/components/site/Btn";
import { contacto, whatsappUrl } from "@/config/site";
import hero from "@/assets/hero-aguaymanto.jpg";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Solicita tu cotización de aguaymanto" },
      {
        name: "description",
        content:
          "Contáctanos por WhatsApp, teléfono, correo o formulario para consultar precios, presentaciones y pedidos al por mayor de aguaymanto peruano.",
      },
      { property: "og:title", content: "Contacto | Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Estamos aquí para atenderte. Solicita información o una cotización.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

const datos = [
  { icono: MessageCircle, label: "WhatsApp", valor: contacto.whatsappVisible, href: whatsappUrl() },
  {
    icono: Phone,
    label: "Teléfono",
    valor: contacto.telefono,
    href: `tel:${contacto.telefono.replace(/\s/g, "")}`,
  },
  { icono: Mail, label: "Correo electrónico", valor: contacto.correo, href: `mailto:${contacto.correo}` },
  { icono: MapPin, label: "Dirección", valor: `${contacto.direccion}, ${contacto.ciudad}` },
  { icono: Clock, label: "Horario de atención", valor: contacto.horario },
];

function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        titulo="Estamos aquí para atenderte"
        texto="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
        imagen={hero}
        alt="Aguaymanto fresco peruano sobre superficie de madera"
      />

      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionTitle eyebrow="Datos de contacto" title="Conversemos" />
            <ul className="mt-10 space-y-5">
              {datos.map((dato) => {
                const Icono = dato.icono;
                const contenido = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-leaf">
                      <Icono className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                        {dato.label}
                      </span>
                      <span className="mt-1 block font-medium text-leaf-dark">{dato.valor}</span>
                    </span>
                  </>
                );
                return (
                  <li key={dato.label}>
                    {dato.href ? (
                      <a
                        href={dato.href}
                        target={dato.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40"
                      >
                        {contenido}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                        {contenido}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <BtnAnchor
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              variant="leaf"
              size="lg"
              className="mt-8 w-full sm:w-auto"
            >
              Consultar por WhatsApp
            </BtnAnchor>
          </div>

          <Reveal delay={100}>
            <h2 className="text-2xl sm:text-3xl">Envíanos tu consulta</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Completa el formulario y nos comunicaremos contigo a la brevedad.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Antes de escribirnos, quizá esto te ayude"
          />
          <Reveal delay={100}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
