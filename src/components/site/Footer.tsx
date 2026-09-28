import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contacto, navegacion, redes, site } from "@/config/site";
import { whatsappUrl } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-leaf-gradient text-primary-foreground">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] lg:py-20">
        <div>
          <Logo onDark />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            {site.tagline}
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60">{site.nombreLegal}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Enlaces
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navegacion.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 transition-colors hover:text-gold-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Información
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                WhatsApp {contacto.whatsappVisible}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contacto.telefono.replace(/\s/g, "")}`}
                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {contacto.telefono}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contacto.correo}`}
                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {contacto.correo}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {contacto.direccion}, {contacto.ciudad}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {contacto.horario}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Redes sociales
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {redes.map((red) => (
              <li key={red.nombre}>
                <a
                  href={red.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-foreground/80 transition-colors hover:text-gold-soft"
                >
                  {red.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-xs text-primary-foreground/65 sm:flex-row">
          <p>© 2026 {site.nombreLegal}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidad" className="transition-colors hover:text-gold-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos-y-condiciones" className="transition-colors hover:text-gold-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
