import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const btnVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-60 active:translate-y-px",
  {
    variants: {
      variant: {
        gold: "bg-gold text-gold-foreground shadow-gold hover:bg-gold-soft hover:-translate-y-0.5",
        leaf: "bg-primary text-primary-foreground shadow-soft hover:bg-leaf hover:-translate-y-0.5",
        outline:
          "border border-primary/25 bg-transparent text-primary hover:border-primary/60 hover:bg-secondary",
        onDark:
          "border border-primary-foreground/35 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 hover:border-primary-foreground/70",
        ghost: "text-primary hover:text-leaf",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

type Variants = VariantProps<typeof btnVariants>;

export function Btn({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(btnVariants({ variant, size }), className)} {...props} />;
}

export function BtnLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & Variants) {
  return <Link className={cn(btnVariants({ variant, size }), className)} {...props} />;
}

export function BtnAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & Variants) {
  return <a className={cn(btnVariants({ variant, size }), className)} {...props} />;
}
