"use client";
import { forwardRef } from "react";
import { cn } from "../utils/cn";

interface MbbFormCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  small?: boolean;
}

const MbbFormCheckbox = forwardRef<HTMLInputElement, MbbFormCheckboxProps>(
  ({ label, small, className, id, ...props }, ref) => {
    const inputId = id || `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`;
    return (
      <label htmlFor={inputId} className="flex items-center gap-2 text-sm text-[var(--text-content)] cursor-pointer">
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={cn("checkbox-mbb", small && "checkbox-mbb-sm", className)}
          {...props}
        />
        {label}
      </label>
    );
  }
);
MbbFormCheckbox.displayName = "MbbFormCheckbox";
export { MbbFormCheckbox };
