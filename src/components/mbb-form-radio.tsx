"use client";
import { cn } from "../utils/cn";

interface MbbFormRadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface MbbFormRadioProps {
  name: string;
  label?: string;
  options: MbbFormRadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
}

function MbbFormRadio({ name, label, options, value, onChange, error, className }: MbbFormRadioProps) {
  return (
    <fieldset className={className}>
      {label && <legend className="block text-sm font-bold text-[var(--text-title)] mb-3">{label}</legend>}
      <div className="flex gap-6">
        {options.map((option) => (
          <label key={option.value} className={cn("flex items-center gap-2 text-sm text-[var(--text-content)] cursor-pointer", option.disabled && "opacity-50 cursor-not-allowed")}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange?.(option.value)}
              disabled={option.disabled}
              className="radio-mbb"
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && (
        <div className="feedback-invalid mt-1" role="alert">
          <img src="/images/assets/icon-attention.svg" alt="" className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </fieldset>
  );
}

export { MbbFormRadio };
