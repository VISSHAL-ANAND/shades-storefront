import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "accent" | "outline";
}

export function Badge({
  variant = "neutral",
  className,
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    neutral: "bg-shades-beige text-shades-charcoal",
    accent: "bg-shades-forest text-shades-cream",
    outline: "border border-shades-charcoal/30 text-shades-charcoal",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-[10px] font-sans uppercase tracking-[0.16em] font-medium",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
