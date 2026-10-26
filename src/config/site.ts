/**
 * Configuración central del sitio.
 * Todos los datos de la empresa son editables desde este archivo.
 * Los valores entre corchetes son placeholders pendientes de confirmar.
 */

export const site = {
  nombre: "Aguaymanto Perú",
  nombreLegal: "[NOMBRE DE LA EMPRESA]",
  tagline: "Calidad y compromiso desde el campo peruano.",
  descripcion:
    "Producción y comercialización de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas.",
  url: "https://aguaymantoperu.lovable.app",
};

export const contacto = {
  whatsapp: "51973467105",
  whatsappVisible: "+51 973 467 105",
  telefono: "+51 973 467 105",
  correo: "contacto@AguayDoradoDeLosAndes.com",
  direccion: "Comunidad Markawasi S/N",
  ciudad: "Markawasi-Mollepata-Anta-Cusco, Perú",
  horario: "Lunes a Sábado, 8:00 a.m. – 6:00 p.m.",
};

export const whatsappMensaje =
  "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.";

export const whatsappUrl = (mensaje: string = whatsappMensaje) =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const redes = [
  { nombre: "Facebook", url: "#" },
  { nombre: "Instagram", url: "#" },
  { nombre: "TikTok", url: "#" },
  { nombre: "LinkedIn", url: "#" },
];

export const navegacion = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;

export const mision =
  "Producir y comercializar aguaymanto de calidad, trabajando con responsabilidad, eficiencia y compromiso para satisfacer las necesidades de nuestros clientes y generar valor de manera sostenible.";

export const vision =
  "Ser una empresa reconocida por la calidad de nuestros productos, la confiabilidad de nuestro servicio y nuestra capacidad para generar oportunidades en nuevos mercados.";

export const historia = [
  {
    numero: "01",
    titulo: "Nuestros inicios",
    texto: "Inicio de las actividades de la empresa.",
  },
  {
    numero: "02",
    titulo: "Crecimiento",
    texto: "Desarrollo de nuestras operaciones y ampliación de clientes.",
  },
  {
    numero: "03",
    titulo: "Consolidación",
    texto: "Fortalecimiento de nuestros procesos y productos.",
  },
  {
    numero: "04",
    titulo: "Proyección",
    texto: "Expansión hacia nuevos mercados y oportunidades comerciales.",
  },
];

export const valores = [
  { titulo: "Calidad", texto: "Trabajamos para ofrecer productos que cumplan altos estándares." },
  { titulo: "Compromiso", texto: "Cumplimos nuestros compromisos con clientes y colaboradores." },
  { titulo: "Responsabilidad", texto: "Actuamos responsablemente en nuestras operaciones." },
  { titulo: "Integridad", texto: "Construimos relaciones basadas en confianza y transparencia." },
  { titulo: "Innovación", texto: "Buscamos mejorar continuamente nuestros procesos." },
  { titulo: "Sostenibilidad", texto: "Promovemos prácticas responsables con nuestro entorno." },
];

export const compromisos = [
  {
    titulo: "Calidad",
    texto:
      "Cuidamos cada etapa, desde la selección del fruto hasta la entrega, para mantener una presentación consistente.",
  },
  {
    titulo: "Personas",
    texto:
      "Valoramos el trabajo de quienes participan en nuestra cadena y construimos relaciones de largo plazo.",
  },
  {
    titulo: "Medio ambiente",
    texto: "Promovemos prácticas responsables con el entorno agrícola en el que trabajamos.",
  },
];

export const razones = [
  {
    titulo: "Producto seleccionado",
    texto: "Trabajamos para ofrecer una presentación adecuada y consistente.",
  },
  { titulo: "Calidad", texto: "Priorizamos la calidad en cada etapa." },
  { titulo: "Atención personalizada", texto: "Escuchamos las necesidades de cada cliente." },
  { titulo: "Compromiso", texto: "Buscamos relaciones comerciales duraderas." },
  { titulo: "Origen peruano", texto: "Nuestro producto tiene origen en el campo peruano." },
];

export const atributosCalidad = [
  { titulo: "Selección cuidadosa", texto: "Revisamos el fruto para mantener un estándar uniforme." },
  { titulo: "Frescura", texto: "Coordinamos tiempos para conservar las condiciones del producto." },
  { titulo: "Presentación", texto: "Cuidamos el aspecto y el orden del producto entregado." },
  { titulo: "Control de calidad", texto: "Aplicamos revisiones antes de cada despacho." },
  { titulo: "Empaque adecuado", texto: "Utilizamos empaques apropiados según la presentación." },
  { titulo: "Atención al cliente", texto: "Acompañamos al cliente antes y después de la compra." },
];

export const faqs = [
  {
    pregunta: "¿Qué productos ofrecen?",
    respuesta:
      "Comercializamos aguaymanto fresco seleccionado, presentaciones orientadas a distribución y opciones especiales según las necesidades del cliente y la disponibilidad.",
  },
  {
    pregunta: "¿Realizan ventas al por mayor?",
    respuesta:
      "Sí. Atendemos pedidos de mayor volumen. Escríbenos indicando la cantidad aproximada y la frecuencia estimada para evaluar tu requerimiento.",
  },
  {
    pregunta: "¿Atienden restaurantes y empresas?",
    respuesta:
      "Atendemos consultas de restaurantes, hoteles, cafeterías, tiendas, distribuidores y otras empresas que requieren aguaymanto.",
  },
  {
    pregunta: "¿Qué presentaciones tienen disponibles?",
    respuesta:
      "Las presentaciones se coordinan según el tipo de cliente, el volumen y la disponibilidad del momento. Consúltanos y te indicamos las opciones vigentes.",
  },
  {
    pregunta: "¿Realizan entregas?",
    respuesta:
      "La coordinación de entregas se evalúa según la ubicación y el volumen del pedido. Indícanos tu ciudad al momento de consultar.",
  },
  {
    pregunta: "¿Cómo puedo solicitar una cotización?",
    respuesta:
      "Puedes completar el formulario de contacto o escribirnos por WhatsApp indicando producto, cantidad aproximada y ciudad.",
  },
  {
    pregunta: "¿Cómo puedo comunicarme con ustedes?",
    respuesta:
      "Por WhatsApp, teléfono, correo electrónico o mediante el formulario de la página de Contacto.",
  },
];
