import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isFullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-sans uppercase tracking-[0.16em] text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shades-charcoal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40";

    const variantClasses = {
      primary:
        "bg-shades-charcoal text-shades-cream hover:bg-shades-forest active:bg-black",
      secondary:
        "bg-shades-forest text-shades-cream hover:bg-shades-charcoal active:bg-black",
      outline:
        "border border-shades-charcoal text-shades-charcoal hover:bg-shades-charcoal hover:text-shades-cream active:bg-black active:text-white",
      ghost:
        "text-shades-charcoal hover:bg-shades-beige/50 active:bg-shades-beige",
    };

    const sizeClasses = {
      // All sizes keep a min-h-[44px] to satisfy the 44×44 touch-target minimum.
      // The sm variant uses smaller typography/padding but meets the target height.
      sm: "min-h-[44px] px-4 py-2 text-[11px]",
      md: "min-h-[44px] h-11 px-6 py-3 min-w-[130px]",
      lg: "min-h-[52px] px-8 py-4 text-[13px] min-w-[160px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          isFullWidth ? "w-full" : "",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
