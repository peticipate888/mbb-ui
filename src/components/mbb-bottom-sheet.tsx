"use client";
import { useEffect, useRef } from "react";
import { cn } from "../utils/cn";

interface MbbBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
}

function MbbBottomSheet({ open, onOpenChange, title, children }: MbbBottomSheetProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onOpenChange(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1050] bg-black/50">
      <div
        ref={ref}
        className={cn(
          "fixed bottom-0 left-0 right-0 bg-white rounded-offcanvas max-h-[80vh] overflow-y-auto",
          "transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "translate-y-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--neutral-300)]">
          {title && <h3 className="font-head-small text-[var(--text-title)]">{title}</h3>}
          <button onClick={() => onOpenChange(false)} className="p-2 cursor-pointer" aria-label="關閉">
            <img src="/images/assets/icon-modal-close.svg" alt="" className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export { MbbBottomSheet };
