export type Servicio = {
  slug: string;
  icono: "shopping" | "boxes" | "chef" | "store" | "settings" | "headset";
  titulo: string;
  descripcion: string;
};

export const servicios: Servicio[] = [
  {
    slug: "venta",
    icono: "shopping",
    titulo: "Venta de aguaymanto",
    descripcion: "Venta de producto para clientes particulares y comerciales.",
  },
  {
    slug: "venta-mayorista",
    icono: "boxes",
    titulo: "Venta al por mayor",
    descripcion: "Atención de pedidos de mayor volumen.",
  },
  {
    slug: "restaurantes",
    icono: "chef",
    titulo: "Atención a restaurantes",
    descripcion:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
  },
  {
    slug: "tiendas-distribuidores",
    icono: "store",
    titulo: "Atención a tiendas y distribuidores",
    descripcion:
      "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
  },
  {
    slug: "pedidos-personalizados",
    icono: "settings",
    titulo: "Pedidos personalizados",
    descripcion:
      "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
  },
  {
    slug: "asesoria-comercial",
    icono: "headset",
    titulo: "Asesoría comercial",
    descripcion: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
  },
];
