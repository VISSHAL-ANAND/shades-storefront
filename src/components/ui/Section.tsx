import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: "none" | "sm" | "md" | "lg";
}

export function Section({
  as: Component = "section",
  spacing = "md",
  className,
  children,
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-20 lg:py-24",
    lg: "py-16 md:py-28 lg:py-32",
  };

  return (
    <Component className={cn(spacingClasses[spacing], className)} {...props}>
      {children}
    </Component>
  );
}
