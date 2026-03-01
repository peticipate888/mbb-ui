"use client";
import { forwardRef } from "react";
import { cn } from "../utils/cn";

interface MbbFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  remind?: string;
  validMessage?: string;
}

const MbbFormInput = forwardRef<HTMLInputElement, MbbFormInputProps>(
  ({ label, required, error, remind, validMessage, disabled, className, id, ...props }, ref) => {
    const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
    return (
      <div>
        <label htmlFor={inputId} className="block text-sm font-bold text-[var(--text-title)] mb-2">
          {label}
          {required && <span className="text-[var(--danger)] ml-0.5">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn("form-input-mbb", error && "is-invalid", validMessage && "is-valid", className)}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : remind ? `${inputId}-remind` : undefined}
          {...props}
        />
        {error && (
          <div id={`${inputId}-error`} className="feedback-invalid mt-1" role="alert">
            <img src="/images/assets/icon-attention.svg" alt="" className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
        {remind && !error && (
          <div id={`${inputId}-remind`} className="feedback-remind mt-1">
            <img src="/images/assets/icon-solid-attention-blue.svg" alt="" className="h-4 w-4" />
            <span>{remind}</span>
          </div>
        )}
        {validMessage && !error && !remind && (
          <div className="feedback-valid mt-1">
            <img src="/images/assets/icon-feedback-suscess.svg" alt="" className="h-4 w-4" />
            <span>{validMessage}</span>
          </div>
        )}
      </div>
    );
  }
);
MbbFormInput.displayName = "MbbFormInput";
export { MbbFormInput };
