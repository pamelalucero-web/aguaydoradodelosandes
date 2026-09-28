import fresco from "@/assets/hero-aguaymanto.jpg";
import distribucion from "@/assets/producto-empacado.jpg";
import especiales from "@/assets/seleccion-empaque.jpg";

export type Producto = {
  slug: string;
  nombre: string;
  descripcion: string;
  cta: string;
  imagen: string;
  alt: string;
  presentacion: string;
  peso: string;
  disponibilidad: string;
  precio: string;
  caracteristicas: string[];
};

export const productos: Producto[] = [
  {
    slug: "aguaymanto-fresco",
    nombre: "Aguaymanto fresco",
    descripcion:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    cta: "Solicitar información",
    imagen: fresco,
    alt: "Aguaymanto fresco con cáliz abierto sobre mesa de madera",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "Según campaña",
    precio: "Cotización a solicitud",
    caracteristicas: ["Selección manual", "Color uniforme", "Empaque cuidado"],
  },
  {
    slug: "aguaymanto-distribucion",
    nombre: "Aguaymanto para distribución",
    descripcion: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    cta: "Consultar",
    imagen: distribucion,
    alt: "Aguaymanto fresco empacado en envase comercial transparente",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "Sujeta a volumen",
    precio: "Cotización a solicitud",
    caracteristicas: ["Volúmenes mayores", "Empaque para reventa", "Coordinación de entregas"],
  },
  {
    slug: "presentaciones-especiales",
    nombre: "Presentaciones especiales",
    descripcion: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    cta: "Consultar presentación",
    imagen: especiales,
    alt: "Personal seleccionando aguaymanto en planta de empaque",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "A evaluar",
    precio: "Cotización a solicitud",
    caracteristicas: ["Requerimientos específicos", "Asesoría previa", "Evaluación de factibilidad"],
  },
];
