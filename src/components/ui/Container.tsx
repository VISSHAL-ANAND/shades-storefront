import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "compact" | "wide" | "prose";
}

export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    compact: "max-w-xl",
    prose: "max-w-3xl",
    default: "max-w-7xl",
    wide: "max-w-[1600px]",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
