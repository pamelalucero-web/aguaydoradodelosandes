import { Award, Check, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { atributosCalidad, razones } from "@/config/site";
import { BtnLink } from "./Btn";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

/** Sección orientada a clientes mayoristas y empresas. */
export function MayoristasCTA() {
  const puntos = [
    "Pedidos por volumen",
    "Atención personalizada",
    "Presentaciones comerciales",
    "Coordinación de entregas",
    "Cotizaciones",
  ];

  return (
    <section id="mayoristas" className="section-y scroll-mt-32 bg-leaf-gradient">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <SectionTitle
          onDark
          eyebrow="Clientes mayoristas"
          title="¿Buscas un proveedor de aguaymanto?"
          description="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
        />
        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {puntos.map((punto) => (
              <li
                key={punto}
                className="flex items-center gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 px-5 py-4 text-sm font-medium text-primary-foreground backdrop-blur-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {punto}
              </li>
            ))}
          </ul>
          <BtnLink to="/contacto" variant="gold" size="lg" className="mt-8">
            Solicitar cotización
          </BtnLink>
        </Reveal>
      </div>
    </section>
  );
}

const iconosRazones = [Sparkles, Award, Heart, ShieldCheck, Leaf];

export function PorQueElegirnos() {
  return (
    <section className="section-y bg-secondary">
      <div className="container-site">
        <SectionTitle
          align="center"
          eyebrow="¿Por qué elegirnos?"
          title="Razones para trabajar con nosotros"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {razones.map((razon, i) => {
            const Icono = iconosRazones[i % iconosRazones.length]!;
            return (
              <Reveal
                key={razon.titulo}
                delay={i * 80}
                as="article"
                className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-leaf">
                  <Icono className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base">{razon.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{razon.texto}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CalidadProducto() {
  return (
    <section id="calidad" className="section-y scroll-mt-32">
      <div className="container-site">
        <SectionTitle
          eyebrow="Calidad que se nota"
          title="Atributos que cuidamos en cada entrega"
          description="Nuestro trabajo se apoya en procesos ordenados y revisiones constantes, desde la selección del fruto hasta el despacho."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {atributosCalidad.map((attr, i) => (
            <Reveal
              key={attr.titulo}
              delay={i * 70}
              as="article"
              className="bg-card p-8 transition-colors duration-500 hover:bg-secondary"
            >
              <span className="font-display text-sm font-semibold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg">{attr.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{attr.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  titulo,
  texto,
  imagen,
  alt,
}: {
  eyebrow: string;
  titulo: string;
  texto?: string;
  imagen: string;
  alt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[58svh] items-end overflow-hidden bg-leaf-dark pt-36 pb-16 lg:pb-20">
      <img
        src={imagen}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-leaf-dark via-leaf-dark/75 to-leaf-dark/35"
      />
      <div className="container-site relative max-w-3xl">
        <span className="eyebrow text-gold-soft">
          <span aria-hidden="true" className="h-px w-10 bg-gold-soft/60" />
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl leading-[1.1] text-primary-foreground sm:text-5xl">
          {titulo}
        </h1>
        {texto && (
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {texto}
          </p>
        )}
      </div>
    </section>
  );
}
