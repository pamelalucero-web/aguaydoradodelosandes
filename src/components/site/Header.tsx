import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { contacto, navegacion } from "@/config/site";
import { BtnLink } from "./Btn";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "hidden border-b border-primary-foreground/10 bg-leaf-dark text-primary-foreground/85 transition-all duration-500 lg:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="container-site flex h-10 items-center justify-between text-xs">
          <p className="tracking-wide">Aguaymanto peruano seleccionado · Atención a empresas y mayoristas</p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contacto.telefono.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-gold-soft"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {contacto.telefono}
            </a>
            <span>{contacto.horario}</span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-border bg-background/92 shadow-soft backdrop-blur-lg"
            : "bg-background/80 backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "container-site flex items-center justify-between transition-all duration-500",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Logo />

          <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
            {navegacion.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-leaf-dark data-[status=active]:text-leaf-dark"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold transition-transform duration-300",
                    pathname === item.to && "scale-x-100",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <BtnLink to="/contacto" variant="gold" size="md">
              Solicitar cotización
            </BtnLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-leaf-dark transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={cn(
          "overflow-hidden border-b border-border bg-background shadow-lift transition-[max-height,opacity] duration-400 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Navegación móvil" className="container-site flex flex-col gap-1 py-5">
          {navegacion.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-leaf-dark data-[status=active]:bg-secondary data-[status=active]:text-leaf-dark"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <BtnLink to="/contacto" variant="gold" size="lg" className="mt-3 w-full">
            Solicitar cotización
          </BtnLink>
        </nav>
      </div>
    </header>
  );
}
