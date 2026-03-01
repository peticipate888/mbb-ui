"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "../utils/cn";

interface MbbFormSelectProps {
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  searchable?: boolean;
  className?: string;
}

function MbbFormSelect({ label, required, options, value, onChange, placeholder = "請選擇", error, disabled, searchable, className }: MbbFormSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputId = `select-${label.replace(/\s+/g, "-").toLowerCase()}`;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);
  const filtered = searchable ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase())) : options;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <label htmlFor={inputId} className="block text-sm font-bold text-[var(--text-title)] mb-2">
        {label}
        {required && <span className="text-[var(--danger)] ml-0.5">*</span>}
      </label>
      <button
        id={inputId}
        type="button"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        className={cn("form-input-mbb w-full text-left flex items-center justify-between", error && "is-invalid", disabled && "cursor-not-allowed")}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className={selected ? "text-[var(--text-content)]" : "text-[var(--text-describe)] text-sm"}>
          {selected?.label || placeholder}
        </span>
        <img src="/images/assets/icon-arrow-down.svg" alt="" className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="dropdown-menu-mbb absolute z-10 mt-1 w-full bg-white border border-[var(--neutral-300)]" role="listbox">
          {searchable && (
            <input
              type="text"
              className="form-input-mbb w-full mb-1 text-sm"
              placeholder="搜尋..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          )}
          {filtered.map((option) => (
            <div
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={cn("dropdown-item-mbb", option.value === value && "active")}
              onClick={() => { onChange?.(option.value); setOpen(false); setSearch(""); }}
            >
              {option.label}
            </div>
          ))}
          {filtered.length === 0 && <div className="px-3 py-2 text-sm text-[var(--text-describe)]">無搜尋結果</div>}
        </div>
      )}
      {error && (
        <div className="feedback-invalid mt-1" role="alert">
          <img src="/images/assets/icon-attention.svg" alt="" className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export { MbbFormSelect };
