"use client";
import { useEffect, useRef } from "react";
import { cn } from "../utils/cn";

interface MbbModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  size?: "md" | "lg" | "xl";
  fullScreenMobile?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

function MbbModal({ open, onOpenChange, title, size = "md", fullScreenMobile, children, footer }: MbbModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onOpenChange(false);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onOpenChange]);

  const widthClass = { md: "max-w-[590px]", lg: "max-w-[796px]", xl: "max-w-[1000px]" }[size];

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        "modal-mbb w-full backdrop:bg-black/50",
        widthClass,
        fullScreenMobile && "max-md:m-0 max-md:h-full max-md:max-h-full max-md:max-w-full max-md:rounded-none"
      )}
      aria-label={title}
    >
      <div className="modal-header-mbb relative">
        {title && <h3 className="font-head-medium text-[var(--text-title)] text-balance">{title}</h3>}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-2 right-3.5 p-2 cursor-pointer"
          aria-label="關閉"
        >
          <img src="/images/assets/icon-modal-close.svg" alt="" className="h-5 w-5" />
        </button>
      </div>
      <div className={cn("modal-body-mbb", size === "xl" && "max-h-none")}>{children}</div>
      {footer && <div className="modal-footer-mbb flex justify-center">{footer}</div>}
    </dialog>
  );
}

export { MbbModal };
