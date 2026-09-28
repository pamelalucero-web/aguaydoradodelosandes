import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BtnLink } from "./Btn";
import heroFruto from "@/assets/hero-aguaymanto.jpg";
import heroPlantacion from "@/assets/hero-plantacion.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";

type Slide = {
  imagen: string;
  alt: string;
  titulo: string;
  texto?: string;
  acciones: { label: string; to: string; variant: "gold" | "onDark" }[];
};

const slides: Slide[] = [
  {
    imagen: heroFruto,
    alt: "Aguaymanto fresco peruano con su cáliz abierto sobre madera",
    titulo: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    texto:
      "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    acciones: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "gold" },
      { label: "Solicitar cotización", to: "/contacto", variant: "onDark" },
    ],
  },
  {
    imagen: heroPlantacion,
    alt: "Plantación de aguaymanto en los andes peruanos con montañas al fondo",
    titulo: "Del campo peruano a nuevos mercados",
    texto:
      "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    acciones: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "gold" }],
  },
  {
    imagen: heroCosecha,
    alt: "Cosecha manual de aguaymanto en canasta de fibra natural",
    titulo: "Natural, versátil y de excelente calidad",
    acciones: [{ label: "Ver productos", to: "/productos", variant: "gold" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(id);
  }, [index]);

  return (
    <section
      aria-label="Presentación de la empresa"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-leaf-dark pt-32 pb-20 lg:min-h-screen lg:pb-28"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.titulo}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={slide.imagen}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "h-full w-full object-cover transition-transform duration-[9000ms] ease-out",
              i === index ? "scale-105" : "scale-100",
            )}
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-leaf-dark via-leaf-dark/70 to-leaf-dark/25"
      />

      <div className="container-site relative">
        <div className="max-w-3xl">
          {slides.map((slide, i) => (
            <div
              key={slide.titulo}
              className={cn(
                "transition-all duration-700",
                i === index ? "block" : "hidden",
              )}
            >
              <span className="eyebrow text-gold-soft">
                <span aria-hidden="true" className="h-px w-10 bg-gold-soft/60" />
                Aguaymanto del Perú
              </span>
              <h1 className="mt-5 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
                {slide.titulo}
              </h1>
              {slide.texto && (
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                  {slide.texto}
                </p>
              )}
              <div className="mt-9 flex flex-wrap gap-3">
                {slide.acciones.map((accion) => (
                  <BtnLink
                    key={accion.label}
                    to={accion.to}
                    variant={accion.variant}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {accion.label}
                  </BtnLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-5">
          <div className="flex gap-2" role="tablist" aria-label="Seleccionar diapositiva">
            {slides.map((slide, i) => (
              <button
                key={slide.titulo}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Diapositiva ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === index
                    ? "w-12 bg-gold"
                    : "w-6 bg-primary-foreground/40 hover:bg-primary-foreground/70",
                )}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Diapositiva anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Diapositiva siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
