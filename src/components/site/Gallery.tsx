import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import fruto from "@/assets/hero-aguaymanto.jpg";
import plantacion from "@/assets/hero-plantacion.jpg";
import cosecha from "@/assets/hero-cosecha.jpg";
import seleccion from "@/assets/seleccion-empaque.jpg";
import empacado from "@/assets/producto-empacado.jpg";
import cultivo from "@/assets/noticia-cultivo.jpg";

const imagenes = [
  { src: plantacion, alt: "Campos y plantaciones de aguaymanto en los andes", span: "lg:col-span-2 lg:row-span-2" },
  { src: cosecha, alt: "Cosecha de aguaymanto en canasta", span: "" },
  { src: fruto, alt: "Aguaymanto fresco seleccionado", span: "" },
  { src: seleccion, alt: "Selección y empaque del aguaymanto", span: "lg:col-span-2" },
  { src: empacado, alt: "Producto final empacado listo para despacho", span: "" },
  { src: cultivo, alt: "Detalle de la planta de aguaymanto en el cultivo", span: "" },
];

export function Gallery() {
  const [activa, setActiva] = useState<number | null>(null);

  useEffect(() => {
    if (activa === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiva(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activa]);

  return (
    <>
      <div className="grid auto-rows-[13rem] grid-cols-2 gap-4 sm:auto-rows-[15rem] lg:grid-cols-4">
        {imagenes.map((img, i) => (
          <button
            key={img.alt}
            type="button"
            onClick={() => setActiva(i)}
            className={cn(
              "group relative overflow-hidden rounded-2xl shadow-soft transition-all duration-500 hover:shadow-lift",
              img.span,
            )}
            aria-label={`Ampliar imagen: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-leaf-dark/0 transition-colors duration-500 group-hover:bg-leaf-dark/25"
            />
          </button>
        ))}
      </div>

      {activa !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={imagenes[activa]!.alt}
          onClick={() => setActiva(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-leaf-dark/92 p-4 animate-fade-in backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Cerrar galería"
            onClick={() => setActiva(null)}
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={imagenes[activa]!.src}
              alt={imagenes[activa]!.alt}
              className="max-h-[78svh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-primary-foreground/80">
              {imagenes[activa]!.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
