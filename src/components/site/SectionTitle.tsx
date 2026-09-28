import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", onDark && "text-gold-soft")}>
          <span
            aria-hidden="true"
            className={cn("h-px w-8 bg-leaf/50", onDark && "bg-gold-soft/60")}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
          onDark && "text-primary-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
            onDark && "text-primary-foreground/80",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
