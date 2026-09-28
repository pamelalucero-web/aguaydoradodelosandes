import mercados from "@/assets/noticia-mercados.jpg";
import cultivo from "@/assets/noticia-cultivo.jpg";
import calidad from "@/assets/seleccion-empaque.jpg";

export type Noticia = {
  slug: string;
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string; // ISO
  autor: string;
  imagen: string;
  alt: string;
  contenido: string[];
};

/** Contenido de ejemplo: editable o eliminable sin afectar la estructura del sitio. */
export const noticias: Noticia[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    titulo: "El aguaymanto peruano y su presencia en nuevos mercados",
    resumen:
      "El interés comercial por el aguaymanto continúa creciendo y abre oportunidades para los productores peruanos.",
    categoria: "Mercado",
    fecha: "2026-09-10",
    autor: "[AUTOR]",
    imagen: mercados,
    alt: "Cajas de aguaymanto fresco en un puesto comercial",
    contenido: [
      "El aguaymanto es uno de los frutos andinos con mayor atención comercial en los últimos años. Su sabor característico y su versatilidad lo han convertido en un producto solicitado tanto en consumo directo como en preparaciones gastronómicas.",
      "Para los productores peruanos esto representa una oportunidad: atender clientes que valoran la calidad, la trazabilidad y una presentación cuidada del producto.",
      "Este contenido es un ejemplo editable. Reemplázalo por la información real de la empresa cuando esté disponible.",
    ],
  },
  {
    slug: "conoce-el-cultivo-del-aguaymanto",
    titulo: "Conoce más sobre el cultivo del aguaymanto",
    resumen:
      "Cómo crece el aguaymanto, en qué condiciones se desarrolla mejor y por qué el cuidado del cultivo influye en la calidad final.",
    categoria: "Agricultura",
    fecha: "2026-08-22",
    autor: "[AUTOR]",
    imagen: cultivo,
    alt: "Planta de aguaymanto con flores y frutos en cáliz verde",
    contenido: [
      "El aguaymanto se desarrolla en zonas con buena luminosidad y temperaturas templadas. El fruto crece protegido por un cáliz que lo acompaña hasta la cosecha y ayuda a conservarlo.",
      "El manejo del cultivo, el momento de la cosecha y la manipulación posterior tienen un efecto directo en la presentación y la duración del producto.",
      "Este contenido es un ejemplo editable. Reemplázalo por la información real de la empresa cuando esté disponible.",
    ],
  },
  {
    slug: "nuestra-apuesta-por-la-calidad",
    titulo: "Nuestra apuesta por la calidad y la producción responsable",
    resumen:
      "Trabajamos con procesos ordenados y revisiones constantes para mantener un estándar consistente en cada entrega.",
    categoria: "Noticias de la empresa",
    fecha: "2026-07-30",
    autor: "[AUTOR]",
    imagen: calidad,
    alt: "Equipo de trabajo seleccionando aguaymanto en área de empaque",
    contenido: [
      "La calidad no depende de una sola etapa. Involucra la selección del fruto, la manipulación, el empaque y la coordinación con el cliente.",
      "Por eso buscamos procesos ordenados, comunicación clara y una atención que permita resolver dudas antes, durante y después de la compra.",
      "Este contenido es un ejemplo editable. Reemplázalo por la información real de la empresa cuando esté disponible.",
    ],
  },
];

export const categorias = [
  "Noticias de la empresa",
  "Agricultura",
  "Aguaymanto",
  "Mercado",
  "Eventos",
  "Innovación",
  "Producción",
];

export const formatearFecha = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
