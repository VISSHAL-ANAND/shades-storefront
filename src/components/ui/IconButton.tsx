import React from "react";
import { cn } from "@/lib/utils";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  size?: "sm" | "md" | "lg";
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size = "md", className, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "w-9 h-9",
      md: "w-11 h-11", // >= 44px for accessible touch target
      lg: "w-12 h-12",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center text-shades-charcoal transition-colors hover:text-shades-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shades-charcoal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
