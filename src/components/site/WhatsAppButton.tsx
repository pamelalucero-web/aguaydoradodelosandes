import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full bg-leaf py-3 pr-4 pl-3 text-leaf-foreground shadow-lift transition-all duration-300 hover:bg-leaf-dark hover:shadow-gold sm:right-6 sm:bottom-6"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap opacity-0 transition-all duration-400 group-hover:max-w-[12rem] group-hover:opacity-100 sm:max-w-[12rem] sm:opacity-100">
        ¿Necesitas información?
      </span>
    </a>
  );
}
