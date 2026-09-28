import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { faqs } from "@/config/site";

export function FAQAccordion() {
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      {faqs.map((faq, i) => {
        const activo = abierto === i;
        return (
          <div key={faq.pregunta}>
            <h3>
              <button
                type="button"
                aria-expanded={activo}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setAbierto(activo ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-leaf-dark transition-colors hover:bg-secondary/60 sm:px-8"
              >
                {faq.pregunta}
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
                    activo ? "bg-gold text-gold-foreground" : "bg-secondary text-leaf",
                  )}
                >
                  {activo ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              className={cn(
                "grid transition-all duration-400 ease-out",
                activo ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-8">
                  {faq.respuesta}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
