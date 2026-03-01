"use client";
import { forwardRef, useRef, useCallback, useEffect } from "react";
import { cn } from "../utils/cn";

interface MbbTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  error?: string;
  autoExpand?: boolean;
}

const MbbTextarea = forwardRef<HTMLTextAreaElement, MbbTextareaProps>(
  ({ label, required, error, autoExpand = true, className, id, onChange, ...props }, ref) => {
    const innerRef = useRef<HTMLTextAreaElement | null>(null);
    const inputId = id || `textarea-${label.replace(/\s+/g, "-").toLowerCase()}`;

    const adjustHeight = useCallback(() => {
      const el = innerRef.current;
      if (el && autoExpand) {
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
      }
    }, [autoExpand]);

    useEffect(() => { adjustHeight(); }, [adjustHeight]);

    return (
      <div>
        <label htmlFor={inputId} className="block text-sm font-bold text-[var(--text-title)] mb-2">
          {label}
          {required && <span className="text-[var(--danger)] ml-0.5">*</span>}
        </label>
        <textarea
          ref={(node) => {
            innerRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          id={inputId}
          className={cn("form-input-mbb resize-none min-h-[80px]", error && "is-invalid", className)}
          aria-invalid={!!error}
          onChange={(e) => { onChange?.(e); adjustHeight(); }}
          {...props}
        />
        {error && (
          <div className="feedback-invalid mt-1" role="alert">
            <img src="/images/assets/icon-attention.svg" alt="" className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);
MbbTextarea.displayName = "MbbTextarea";
export { MbbTextarea };
