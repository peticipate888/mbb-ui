"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold transition-all duration-200 ease-out cursor-pointer focus-ring-mbb disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        "gradient-primary": "btn-gradient-primary",
        "outline-primary": "btn-outline-primary",
        secondary: "btn-secondary",
        "outline-secondary": "btn-outline-secondary",
        pill: "rounded-pill bg-[var(--orange-300)] text-white hover:bg-[var(--orange-400)]",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "px-6 py-2.5",
        lg: "text-lg px-8 py-3",
        full: "w-full py-3",
      },
      riseEffect: {
        true: "rise-effect-btn",
        false: "",
      },
    },
    defaultVariants: { variant: "gradient-primary", size: "md", riseEffect: false },
  }
);

interface MbbButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const MbbButton = forwardRef<HTMLButtonElement, MbbButtonProps>(
  ({ className, variant, size, riseEffect, loading, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, riseEffect }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : null}
      {children}
    </button>
  )
);
MbbButton.displayName = "MbbButton";
export { MbbButton, buttonVariants };
