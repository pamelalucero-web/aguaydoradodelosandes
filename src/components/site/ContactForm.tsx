import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { productos } from "@/data/productos";
import { Btn } from "./Btn";

const schema = z.object({
  nombre: z.string().min(3, "Ingresa tu nombre completo."),
  empresa: z.string().optional(),
  correo: z.string().email("Ingresa un correo electrónico válido."),
  telefono: z.string().min(6, "Ingresa un teléfono de contacto."),
  ciudad: z.string().min(2, "Indica tu ciudad."),
  tipoCliente: z.string().min(1, "Selecciona el tipo de cliente."),
  producto: z.string().min(1, "Selecciona un producto de interés."),
  cantidad: z.string().optional(),
  asunto: z.string().min(3, "Indica el asunto de tu consulta."),
  mensaje: z.string().min(10, "Cuéntanos brevemente qué necesitas (mínimo 10 caracteres)."),
});

type Valores = z.infer<typeof schema>;

const tiposCliente = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda",
  "Distribuidor",
  "Empresa",
  "Otro",
];

const inputBase =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-leaf focus:outline-none";
const labelBase = "mb-2 block text-xs font-semibold tracking-wide text-leaf-dark uppercase";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Valores>({ resolver: zodResolver(schema) });

  /**
   * Punto único de envío. Preparado para conectarse luego con un servicio
   * de correo, CRM o backend (por ahora solo registra la consulta).
   */
  const onSubmit = async (valores: Valores) => {
    await new Promise((r) => setTimeout(r, 600));
    console.info("Consulta recibida:", valores);
  };

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-leaf/25 bg-secondary p-10 text-center shadow-soft">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf text-leaf-foreground">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-xl">Consulta enviada</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Btn variant="outline" size="md" className="mt-7" onClick={() => reset()}>
          Enviar otra consulta
        </Btn>
      </div>
    );
  }

  const Error = ({ campo }: { campo: keyof Valores }) =>
    errors[campo] ? (
      <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
        {errors[campo]?.message as string}
      </p>
    ) : null;

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelBase}>
            Nombre completo *
          </label>
          <input id="nombre" {...register("nombre")} className={inputBase} placeholder="Tu nombre" />
          <Error campo="nombre" />
        </div>
        <div>
          <label htmlFor="empresa" className={labelBase}>
            Empresa
          </label>
          <input
            id="empresa"
            {...register("empresa")}
            className={inputBase}
            placeholder="Nombre de tu empresa"
          />
        </div>
        <div>
          <label htmlFor="correo" className={labelBase}>
            Correo electrónico *
          </label>
          <input
            id="correo"
            type="email"
            {...register("correo")}
            className={inputBase}
            placeholder="correo@ejemplo.com"
          />
          <Error campo="correo" />
        </div>
        <div>
          <label htmlFor="telefono" className={labelBase}>
            Teléfono *
          </label>
          <input
            id="telefono"
            type="tel"
            {...register("telefono")}
            className={inputBase}
            placeholder="+51 999 999 999"
          />
          <Error campo="telefono" />
        </div>
        <div>
          <label htmlFor="ciudad" className={labelBase}>
            Ciudad *
          </label>
          <input id="ciudad" {...register("ciudad")} className={inputBase} placeholder="Lima" />
          <Error campo="ciudad" />
        </div>
        <div>
          <label htmlFor="tipoCliente" className={labelBase}>
            Tipo de cliente *
          </label>
          <select id="tipoCliente" {...register("tipoCliente")} className={cn(inputBase, "pr-10")}>
            <option value="">Selecciona una opción</option>
            {tiposCliente.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <Error campo="tipoCliente" />
        </div>
        <div>
          <label htmlFor="producto" className={labelBase}>
            Producto de interés *
          </label>
          <select id="producto" {...register("producto")} className={cn(inputBase, "pr-10")}>
            <option value="">Selecciona un producto</option>
            {productos.map((p) => (
              <option key={p.slug} value={p.nombre}>
                {p.nombre}
              </option>
            ))}
            <option value="Otro / por definir">Otro / por definir</option>
          </select>
          <Error campo="producto" />
        </div>
        <div>
          <label htmlFor="cantidad" className={labelBase}>
            Cantidad aproximada
          </label>
          <input
            id="cantidad"
            {...register("cantidad")}
            className={inputBase}
            placeholder="Ej. 50 kg por semana"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="asunto" className={labelBase}>
            Asunto *
          </label>
          <input
            id="asunto"
            {...register("asunto")}
            className={inputBase}
            placeholder="Solicitud de cotización"
          />
          <Error campo="asunto" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className={labelBase}>
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            rows={5}
            {...register("mensaje")}
            className={cn(inputBase, "resize-y")}
            placeholder="Cuéntanos qué necesitas: producto, volumen, frecuencia y ciudad de entrega."
          />
          <Error campo="mensaje" />
        </div>
      </div>

      <Btn type="submit" variant="gold" size="lg" disabled={isSubmitting} className="mt-8 w-full sm:w-auto">
        {isSubmitting ? "Enviando…" : "Enviar consulta"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </Btn>
      <p className="mt-4 text-xs text-muted-foreground">
        Los campos marcados con * son obligatorios.
      </p>
    </form>
  );
}
