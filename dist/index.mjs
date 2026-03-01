"use client";

// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/mbb-button.tsx
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center font-bold transition-all duration-200 ease-out cursor-pointer focus-ring-mbb disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        "gradient-primary": "btn-gradient-primary",
        "outline-primary": "btn-outline-primary",
        secondary: "btn-secondary",
        "outline-secondary": "btn-outline-secondary",
        pill: "rounded-pill bg-[var(--orange-300)] text-white hover:bg-[var(--orange-400)]"
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "px-6 py-2.5",
        lg: "text-lg px-8 py-3",
        full: "w-full py-3"
      },
      riseEffect: {
        true: "rise-effect-btn",
        false: ""
      }
    },
    defaultVariants: { variant: "gradient-primary", size: "md", riseEffect: false }
  }
);
var MbbButton = forwardRef(
  ({ className, variant, size, riseEffect, loading, disabled, children, ...props }, ref) => /* @__PURE__ */ jsxs(
    "button",
    {
      ref,
      className: cn(buttonVariants({ variant, size, riseEffect }), className),
      disabled: disabled || loading,
      ...props,
      children: [
        loading ? /* @__PURE__ */ jsxs("svg", { className: "animate-spin h-5 w-5 mr-2", viewBox: "0 0 24 24", fill: "none", children: [
          /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
          /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
        ] }) : null,
        children
      ]
    }
  )
);
MbbButton.displayName = "MbbButton";

// src/components/mbb-card.tsx
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var cardVariants = cva2("bg-white", {
  variants: {
    variant: {
      default: "rounded-card shadow-card",
      strong: "rounded-card shadow-card-strong",
      solid: "rounded-card shadow-solid-orange-sm",
      article: "rounded-article shadow-card",
      flat: "rounded-card border border-[var(--neutral-300)]"
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10"
    },
    hover: {
      rise: "rise-effect cursor-pointer",
      zoom: "img-hover-zoom cursor-pointer",
      none: ""
    }
  },
  defaultVariants: { variant: "default", padding: "md", hover: "none" }
});
function MbbCard({ className, variant, padding, hover, children, ...props }) {
  return /* @__PURE__ */ jsx2("div", { className: cn(cardVariants({ variant, padding, hover }), className), ...props, children });
}

// src/components/mbb-tag.tsx
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var tagVariants = cva3("tag", {
  variants: {
    variant: {
      primary: "tag-primary",
      blue: "tag-blue",
      gray: "tag-gray",
      success: "tag-success",
      danger: "tag-danger",
      warning: "tag-warning",
      food: "text-white badge-food",
      medical: "text-white badge-medical",
      transport: "text-white badge-transport",
      education: "text-white badge-education",
      housing: "text-white badge-housing",
      entertainment: "text-black badge-entertainment"
    }
  },
  defaultVariants: { variant: "primary" }
});
function MbbTag({ className, variant, children, ...props }) {
  return /* @__PURE__ */ jsx3("span", { className: cn(tagVariants({ variant }), className), ...props, children });
}

// src/components/mbb-section-wrapper.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function MbbSectionWrapper({ as: Tag = "section", fluid, className, children, ...props }) {
  return /* @__PURE__ */ jsx4(Tag, { className: cn(!fluid && "mx-auto max-w-[1200px] px-6", className), ...props, children });
}

// src/components/mbb-white-panel.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function MbbWhitePanel({ overlay, maxWidth = "max-w-3xl", className, children, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      className: cn(
        "rounded-card bg-white shadow-card",
        "px-6 py-10 md:px-[60px] md:py-10",
        overlay && "white-panel-overlay",
        maxWidth,
        "mx-auto",
        className
      ),
      ...props,
      children
    }
  );
}

// src/components/mbb-hero-section.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function MbbHeroSection({ bgPc, bgPad, bgPhone, height = "h-[400px] md:h-[500px]", overlay, className, children, ...props }) {
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: cn("relative w-full bg-cover bg-center bg-no-repeat", height, className),
      ...props,
      children: [
        /* @__PURE__ */ jsx6("img", { src: bgPc, alt: "", className: "absolute inset-0 w-full h-full object-cover only-pc", "aria-hidden": "true" }),
        bgPad && /* @__PURE__ */ jsx6("img", { src: bgPad, alt: "", className: "absolute inset-0 w-full h-full object-cover only-pad", "aria-hidden": "true" }),
        bgPhone && /* @__PURE__ */ jsx6("img", { src: bgPhone, alt: "", className: "absolute inset-0 w-full h-full object-cover only-phone", "aria-hidden": "true" }),
        !bgPad && /* @__PURE__ */ jsx6("img", { src: bgPc, alt: "", className: "absolute inset-0 w-full h-full object-cover only-pad", "aria-hidden": "true" }),
        !bgPhone && /* @__PURE__ */ jsx6("img", { src: bgPad || bgPc, alt: "", className: "absolute inset-0 w-full h-full object-cover only-phone", "aria-hidden": "true" }),
        overlay && /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-black/30" }),
        /* @__PURE__ */ jsx6("div", { className: "relative z-10 h-full flex items-center justify-center", children })
      ]
    }
  );
}

// src/components/mbb-form-input.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var MbbFormInput = forwardRef2(
  ({ label, required, error, remind, validMessage, disabled, className, id, ...props }, ref) => {
    const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
    return /* @__PURE__ */ jsxs3("div", { children: [
      /* @__PURE__ */ jsxs3("label", { htmlFor: inputId, className: "block text-sm font-bold text-[var(--text-title)] mb-2", children: [
        label,
        required && /* @__PURE__ */ jsx7("span", { className: "text-[var(--danger)] ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ jsx7(
        "input",
        {
          ref,
          id: inputId,
          disabled,
          className: cn("form-input-mbb", error && "is-invalid", validMessage && "is-valid", className),
          "aria-invalid": !!error,
          "aria-describedby": error ? `${inputId}-error` : remind ? `${inputId}-remind` : void 0,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsxs3("div", { id: `${inputId}-error`, className: "feedback-invalid mt-1", role: "alert", children: [
        /* @__PURE__ */ jsx7("img", { src: "/images/assets/icon-attention.svg", alt: "", className: "h-4 w-4" }),
        /* @__PURE__ */ jsx7("span", { children: error })
      ] }),
      remind && !error && /* @__PURE__ */ jsxs3("div", { id: `${inputId}-remind`, className: "feedback-remind mt-1", children: [
        /* @__PURE__ */ jsx7("img", { src: "/images/assets/icon-solid-attention-blue.svg", alt: "", className: "h-4 w-4" }),
        /* @__PURE__ */ jsx7("span", { children: remind })
      ] }),
      validMessage && !error && !remind && /* @__PURE__ */ jsxs3("div", { className: "feedback-valid mt-1", children: [
        /* @__PURE__ */ jsx7("img", { src: "/images/assets/icon-feedback-suscess.svg", alt: "", className: "h-4 w-4" }),
        /* @__PURE__ */ jsx7("span", { children: validMessage })
      ] })
    ] });
  }
);
MbbFormInput.displayName = "MbbFormInput";

// src/components/mbb-form-select.tsx
import { useState, useRef, useEffect } from "react";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function MbbFormSelect({ label, required, options, value, onChange, placeholder = "\u8ACB\u9078\u64C7", error, disabled, searchable, className }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const inputId = `select-${label.replace(/\s+/g, "-").toLowerCase()}`;
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const selected = options.find((o) => o.value === value);
  const filtered = searchable ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase())) : options;
  return /* @__PURE__ */ jsxs4("div", { ref, className: cn("relative", className), children: [
    /* @__PURE__ */ jsxs4("label", { htmlFor: inputId, className: "block text-sm font-bold text-[var(--text-title)] mb-2", children: [
      label,
      required && /* @__PURE__ */ jsx8("span", { className: "text-[var(--danger)] ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ jsxs4(
      "button",
      {
        id: inputId,
        type: "button",
        onClick: () => !disabled && setOpen(!open),
        disabled,
        className: cn("form-input-mbb w-full text-left flex items-center justify-between", error && "is-invalid", disabled && "cursor-not-allowed"),
        "aria-expanded": open,
        "aria-haspopup": "listbox",
        children: [
          /* @__PURE__ */ jsx8("span", { className: selected ? "text-[var(--text-content)]" : "text-[var(--text-describe)] text-sm", children: selected?.label || placeholder }),
          /* @__PURE__ */ jsx8("img", { src: "/images/assets/icon-arrow-down.svg", alt: "", className: cn("h-4 w-4 transition-transform", open && "rotate-180") })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs4("div", { className: "dropdown-menu-mbb absolute z-10 mt-1 w-full bg-white border border-[var(--neutral-300)]", role: "listbox", children: [
      searchable && /* @__PURE__ */ jsx8(
        "input",
        {
          type: "text",
          className: "form-input-mbb w-full mb-1 text-sm",
          placeholder: "\u641C\u5C0B...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          autoFocus: true
        }
      ),
      filtered.map((option) => /* @__PURE__ */ jsx8(
        "div",
        {
          role: "option",
          "aria-selected": option.value === value,
          className: cn("dropdown-item-mbb", option.value === value && "active"),
          onClick: () => {
            onChange?.(option.value);
            setOpen(false);
            setSearch("");
          },
          children: option.label
        },
        option.value
      )),
      filtered.length === 0 && /* @__PURE__ */ jsx8("div", { className: "px-3 py-2 text-sm text-[var(--text-describe)]", children: "\u7121\u641C\u5C0B\u7D50\u679C" })
    ] }),
    error && /* @__PURE__ */ jsxs4("div", { className: "feedback-invalid mt-1", role: "alert", children: [
      /* @__PURE__ */ jsx8("img", { src: "/images/assets/icon-attention.svg", alt: "", className: "h-4 w-4" }),
      /* @__PURE__ */ jsx8("span", { children: error })
    ] })
  ] });
}

// src/components/mbb-form-checkbox.tsx
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var MbbFormCheckbox = forwardRef3(
  ({ label, small, className, id, ...props }, ref) => {
    const inputId = id || `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`;
    return /* @__PURE__ */ jsxs5("label", { htmlFor: inputId, className: "flex items-center gap-2 text-sm text-[var(--text-content)] cursor-pointer", children: [
      /* @__PURE__ */ jsx9(
        "input",
        {
          ref,
          id: inputId,
          type: "checkbox",
          className: cn("checkbox-mbb", small && "checkbox-mbb-sm", className),
          ...props
        }
      ),
      label
    ] });
  }
);
MbbFormCheckbox.displayName = "MbbFormCheckbox";

// src/components/mbb-form-radio.tsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function MbbFormRadio({ name, label, options, value, onChange, error, className }) {
  return /* @__PURE__ */ jsxs6("fieldset", { className, children: [
    label && /* @__PURE__ */ jsx10("legend", { className: "block text-sm font-bold text-[var(--text-title)] mb-3", children: label }),
    /* @__PURE__ */ jsx10("div", { className: "flex gap-6", children: options.map((option) => /* @__PURE__ */ jsxs6("label", { className: cn("flex items-center gap-2 text-sm text-[var(--text-content)] cursor-pointer", option.disabled && "opacity-50 cursor-not-allowed"), children: [
      /* @__PURE__ */ jsx10(
        "input",
        {
          type: "radio",
          name,
          value: option.value,
          checked: value === option.value,
          onChange: () => onChange?.(option.value),
          disabled: option.disabled,
          className: "radio-mbb"
        }
      ),
      option.label
    ] }, option.value)) }),
    error && /* @__PURE__ */ jsxs6("div", { className: "feedback-invalid mt-1", role: "alert", children: [
      /* @__PURE__ */ jsx10("img", { src: "/images/assets/icon-attention.svg", alt: "", className: "h-4 w-4" }),
      /* @__PURE__ */ jsx10("span", { children: error })
    ] })
  ] });
}

// src/components/mbb-textarea.tsx
import { forwardRef as forwardRef4, useRef as useRef2, useCallback, useEffect as useEffect2 } from "react";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var MbbTextarea = forwardRef4(
  ({ label, required, error, autoExpand = true, className, id, onChange, ...props }, ref) => {
    const innerRef = useRef2(null);
    const inputId = id || `textarea-${label.replace(/\s+/g, "-").toLowerCase()}`;
    const adjustHeight = useCallback(() => {
      const el = innerRef.current;
      if (el && autoExpand) {
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
      }
    }, [autoExpand]);
    useEffect2(() => {
      adjustHeight();
    }, [adjustHeight]);
    return /* @__PURE__ */ jsxs7("div", { children: [
      /* @__PURE__ */ jsxs7("label", { htmlFor: inputId, className: "block text-sm font-bold text-[var(--text-title)] mb-2", children: [
        label,
        required && /* @__PURE__ */ jsx11("span", { className: "text-[var(--danger)] ml-0.5", children: "*" })
      ] }),
      /* @__PURE__ */ jsx11(
        "textarea",
        {
          ref: (node) => {
            innerRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          },
          id: inputId,
          className: cn("form-input-mbb resize-none min-h-[80px]", error && "is-invalid", className),
          "aria-invalid": !!error,
          onChange: (e) => {
            onChange?.(e);
            adjustHeight();
          },
          ...props
        }
      ),
      error && /* @__PURE__ */ jsxs7("div", { className: "feedback-invalid mt-1", role: "alert", children: [
        /* @__PURE__ */ jsx11("img", { src: "/images/assets/icon-attention.svg", alt: "", className: "h-4 w-4" }),
        /* @__PURE__ */ jsx11("span", { children: error })
      ] })
    ] });
  }
);
MbbTextarea.displayName = "MbbTextarea";

// src/components/mbb-tabs.tsx
import { useRef as useRef3, useCallback as useCallback2 } from "react";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
function MbbTabs({ variant = "pill", items, activeKey, onChange, scrollable, className }) {
  const scrollRef = useRef3(null);
  const scroll = useCallback2((direction) => {
    scrollRef.current?.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" });
  }, []);
  const tabClass = variant === "pill" ? "tab-pill" : "tab-underline";
  const containerClass = variant === "underline" ? "tab-underline-container" : "";
  return /* @__PURE__ */ jsxs8("div", { className: cn("flex items-center gap-2", className), children: [
    scrollable && /* @__PURE__ */ jsx12("button", { onClick: () => scroll("left"), className: "shrink-0 p-1 cursor-pointer", "aria-label": "\u5411\u5DE6\u6372\u52D5", children: /* @__PURE__ */ jsx12("img", { src: "/images/assets/icon-arrow-left.svg", alt: "", className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx12(
      "div",
      {
        ref: scrollRef,
        className: cn("flex gap-0 overflow-x-auto scrollbar-hide", containerClass, !scrollable && variant === "pill" && "gap-3"),
        role: "tablist",
        children: items.map((item) => /* @__PURE__ */ jsx12(
          "button",
          {
            role: "tab",
            "aria-selected": item.key === activeKey,
            onClick: () => onChange(item.key),
            className: cn(tabClass, item.key === activeKey && "active", "whitespace-nowrap"),
            children: item.label
          },
          item.key
        ))
      }
    ),
    scrollable && /* @__PURE__ */ jsx12("button", { onClick: () => scroll("right"), className: "shrink-0 p-1 cursor-pointer", "aria-label": "\u5411\u53F3\u6372\u52D5", children: /* @__PURE__ */ jsx12("img", { src: "/images/assets/icon-arrow-right.svg", alt: "", className: "h-4 w-4" }) })
  ] });
}

// src/components/mbb-pagination.tsx
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
function MbbPagination({ currentPage, totalPages, onPageChange, className }) {
  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }
  return /* @__PURE__ */ jsxs9("nav", { className: cn("flex items-center justify-center gap-1", className), "aria-label": "\u5206\u9801\u5C0E\u89BD", children: [
    /* @__PURE__ */ jsx13(
      "button",
      {
        onClick: () => onPageChange(currentPage - 1),
        disabled: currentPage === 1,
        className: "page-link-prev",
        "aria-label": "\u4E0A\u4E00\u9801",
        children: /* @__PURE__ */ jsx13("img", { src: "/images/assets/icon-arrow-left.svg", alt: "", className: "h-4 w-4" })
      }
    ),
    pages.map(
      (page, i) => page === "..." ? /* @__PURE__ */ jsx13("span", { className: "page-link-mbb disabled", children: "..." }, `ellipsis-${i}`) : /* @__PURE__ */ jsx13(
        "button",
        {
          onClick: () => onPageChange(page),
          className: cn("page-link-mbb", page === currentPage && "active"),
          "aria-current": page === currentPage ? "page" : void 0,
          children: page
        },
        page
      )
    ),
    /* @__PURE__ */ jsx13(
      "button",
      {
        onClick: () => onPageChange(currentPage + 1),
        disabled: currentPage === totalPages,
        className: "page-link-next",
        "aria-label": "\u4E0B\u4E00\u9801",
        children: /* @__PURE__ */ jsx13("img", { src: "/images/assets/icon-arrow-right.svg", alt: "", className: "h-4 w-4" })
      }
    )
  ] });
}

// src/components/mbb-modal.tsx
import { useEffect as useEffect3, useRef as useRef4 } from "react";
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
function MbbModal({ open, onOpenChange, title, size = "md", fullScreenMobile, children, footer }) {
  const dialogRef = useRef4(null);
  useEffect3(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);
  useEffect3(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onOpenChange(false);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onOpenChange]);
  const widthClass = { md: "max-w-[590px]", lg: "max-w-[796px]", xl: "max-w-[1000px]" }[size];
  if (!open) return null;
  return /* @__PURE__ */ jsxs10(
    "dialog",
    {
      ref: dialogRef,
      className: cn(
        "modal-mbb w-full backdrop:bg-black/50",
        widthClass,
        fullScreenMobile && "max-md:m-0 max-md:h-full max-md:max-h-full max-md:max-w-full max-md:rounded-none"
      ),
      "aria-label": title,
      children: [
        /* @__PURE__ */ jsxs10("div", { className: "modal-header-mbb relative", children: [
          title && /* @__PURE__ */ jsx14("h3", { className: "font-head-medium text-[var(--text-title)] text-balance", children: title }),
          /* @__PURE__ */ jsx14(
            "button",
            {
              onClick: () => onOpenChange(false),
              className: "absolute top-2 right-3.5 p-2 cursor-pointer",
              "aria-label": "\u95DC\u9589",
              children: /* @__PURE__ */ jsx14("img", { src: "/images/assets/icon-modal-close.svg", alt: "", className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx14("div", { className: cn("modal-body-mbb", size === "xl" && "max-h-none"), children }),
        footer && /* @__PURE__ */ jsx14("div", { className: "modal-footer-mbb flex justify-center", children: footer })
      ]
    }
  );
}

// src/components/mbb-bottom-sheet.tsx
import { useEffect as useEffect4, useRef as useRef5 } from "react";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
function MbbBottomSheet({ open, onOpenChange, title, children }) {
  const ref = useRef5(null);
  useEffect4(() => {
    if (!open) return;
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) onOpenChange(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onOpenChange]);
  useEffect4(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  return /* @__PURE__ */ jsx15("div", { className: "fixed inset-0 z-[1050] bg-black/50", children: /* @__PURE__ */ jsxs11(
    "div",
    {
      ref,
      className: cn(
        "fixed bottom-0 left-0 right-0 bg-white rounded-offcanvas max-h-[80vh] overflow-y-auto",
        "transition-transform duration-300 ease-out",
        open ? "translate-y-0" : "translate-y-full"
      ),
      role: "dialog",
      "aria-modal": "true",
      "aria-label": title,
      children: [
        /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between p-4 border-b border-[var(--neutral-300)]", children: [
          title && /* @__PURE__ */ jsx15("h3", { className: "font-head-small text-[var(--text-title)]", children: title }),
          /* @__PURE__ */ jsx15("button", { onClick: () => onOpenChange(false), className: "p-2 cursor-pointer", "aria-label": "\u95DC\u9589", children: /* @__PURE__ */ jsx15("img", { src: "/images/assets/icon-modal-close.svg", alt: "", className: "h-5 w-5" }) })
        ] }),
        /* @__PURE__ */ jsx15("div", { className: "p-4", children })
      ]
    }
  ) });
}

// src/components/mbb-notice-block.tsx
import { useState as useState2 } from "react";
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
function MbbNoticeBlock({ officialNotices = [], personalNotices = [], className }) {
  const [activeTab, setActiveTab] = useState2("official");
  const notices = activeTab === "official" ? officialNotices : personalNotices;
  return /* @__PURE__ */ jsxs12("div", { className: cn("rounded-card bg-white shadow-card overflow-hidden w-[360px]", className), children: [
    /* @__PURE__ */ jsxs12("div", { className: "tab-underline-container flex gap-0 px-4 pt-2", children: [
      /* @__PURE__ */ jsx16("button", { className: cn("tab-underline", activeTab === "official" && "active"), onClick: () => setActiveTab("official"), children: "\u5B98\u65B9\u516C\u544A" }),
      /* @__PURE__ */ jsx16("button", { className: cn("tab-underline", activeTab === "personal" && "active"), onClick: () => setActiveTab("personal"), children: "\u500B\u4EBA\u901A\u77E5" })
    ] }),
    /* @__PURE__ */ jsx16("div", { className: "notice-divider" }),
    /* @__PURE__ */ jsxs12("div", { className: "max-h-[300px] overflow-y-auto", children: [
      notices.length === 0 && /* @__PURE__ */ jsx16("div", { className: "p-6 text-center text-sm text-[var(--text-describe)]", children: "\u76EE\u524D\u6C92\u6709\u901A\u77E5" }),
      notices.map((item) => /* @__PURE__ */ jsxs12("div", { children: [
        /* @__PURE__ */ jsxs12(
          "div",
          {
            className: cn("notice-item relative px-4 py-3", !item.read && "notice-unread", item.read && "notice-readed"),
            onClick: item.onClick,
            children: [
              /* @__PURE__ */ jsx16("p", { className: cn("text-sm font-bold ellipsis-2-line", item.read ? "text-[var(--text-describe)]" : "text-[var(--text-content)]", !item.read && "pl-4"), children: item.title }),
              item.description && /* @__PURE__ */ jsx16("p", { className: cn("text-sm mt-1 ellipsis-2-line", item.read ? "text-[var(--text-describe)]" : "text-[var(--text-subcontent)]", !item.read && "pl-4"), children: item.description }),
              /* @__PURE__ */ jsx16("p", { className: cn("text-sm mt-1", "text-[var(--text-describe)]", !item.read && "pl-4"), children: item.time })
            ]
          }
        ),
        /* @__PURE__ */ jsx16("div", { className: "notice-divider" })
      ] }, item.id))
    ] })
  ] });
}

// src/components/mbb-navbar.tsx
import { useState as useState3, useEffect as useEffect5, useRef as useRef6 } from "react";
import Link from "next/link";
import { Fragment, jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
var defaultItems = [
  { label: "\u8A8D\u8B58\u6BDB\u5E6B\u5E6B", href: "/about" },
  { label: "\u65B9\u6848\u4ECB\u7D39", href: "/pricing" },
  { label: "\u6BDB\u5B69\u767E\u79D1", href: "/catpedia" },
  { label: "\u6BDB\u5B69\u5C08\u6B04", href: "/blog" },
  { label: "\u6BDB\u5B69\u5546\u57CE", href: "https://shop.mbb.pet" }
];
function MbbNavbar({ items = defaultItems, currentPath = "/", isLoggedIn, avatarUrl, onLogin, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState3(false);
  const overlayRef = useRef6(null);
  useEffect5(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const isExternal = (href) => href.startsWith("http");
  return /* @__PURE__ */ jsxs13("header", { className: "fixed top-0 left-0 right-0 z-[1020]", children: [
    /* @__PURE__ */ jsx17("nav", { className: "hidden xl:block py-3", children: /* @__PURE__ */ jsxs13("div", { className: "mx-auto max-w-[1200px] flex items-center bg-white rounded-pill shadow-card px-6 h-[56px]", children: [
      /* @__PURE__ */ jsx17(Link, { href: "/", className: "shrink-0", children: /* @__PURE__ */ jsx17("img", { src: "/images/img-brand-logo.png", alt: "\u6BDB\u5E6B\u5E6B", className: "h-10", style: { maxWidth: 240 } }) }),
      /* @__PURE__ */ jsx17("div", { className: "flex items-center gap-9 mx-auto", children: items.map((item) => {
        const active = currentPath.startsWith(item.href) && item.href !== "/";
        const LinkOrA = isExternal(item.href) ? "a" : Link;
        const extraProps = isExternal(item.href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
        return /* @__PURE__ */ jsx17(
          LinkOrA,
          {
            href: item.href,
            className: cn(
              "text-sm font-medium transition-colors duration-200 relative pb-1 cursor-pointer",
              active ? "text-[var(--orange-400)]" : "text-[var(--text-content)] hover:text-[var(--orange-400)]",
              active && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[var(--orange-400)]"
            ),
            ...extraProps,
            children: item.label
          },
          item.href
        );
      }) }),
      /* @__PURE__ */ jsx17("div", { className: "flex items-center gap-3 shrink-0", children: isLoggedIn ? /* @__PURE__ */ jsxs13(Fragment, { children: [
        /* @__PURE__ */ jsx17("button", { className: "p-2 cursor-pointer", "aria-label": "\u901A\u77E5", children: /* @__PURE__ */ jsx17("img", { src: "/images/assets/icon-bell.svg", alt: "", className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx17(Link, { href: "/account", className: "block", children: /* @__PURE__ */ jsx17("img", { src: avatarUrl || "/images/img-avatar.png", alt: "\u500B\u4EBA\u982D\u50CF", className: "h-9 w-9 rounded-full object-cover border border-[var(--neutral-300)]" }) })
      ] }) : /* @__PURE__ */ jsxs13(Fragment, { children: [
        /* @__PURE__ */ jsx17("button", { onClick: onLogin, className: "rounded-pill border-2 border-[var(--orange-300)] bg-white px-5 py-1.5 text-[var(--orange-400)] text-sm font-bold cursor-pointer transition hover:bg-[var(--orange-25)]", children: "\u767B\u5165" }),
        /* @__PURE__ */ jsx17("button", { onClick: onLogin, className: "rounded-pill bg-[var(--orange-300)] px-5 py-1.5 text-white text-sm font-bold cursor-pointer transition hover:bg-[var(--orange-400)]", children: "\u8A3B\u518A" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs13("nav", { className: "xl:hidden flex items-center justify-between bg-white px-6 h-[68px] shadow-sm", children: [
      /* @__PURE__ */ jsx17(Link, { href: "/", children: /* @__PURE__ */ jsx17("img", { src: "/images/img-brand-logo.png", alt: "\u6BDB\u5E6B\u5E6B", className: "h-8", style: { maxWidth: 160 } }) }),
      /* @__PURE__ */ jsx17("button", { onClick: () => setMobileOpen(!mobileOpen), className: "p-2 cursor-pointer", "aria-label": mobileOpen ? "\u95DC\u9589\u9078\u55AE" : "\u958B\u555F\u9078\u55AE", children: /* @__PURE__ */ jsx17("img", { src: mobileOpen ? "/images/assets/icon-navbar-toggler-close.svg" : "/images/assets/icon-navbar-toggler.svg", alt: "", className: "h-6 w-6" }) })
    ] }),
    mobileOpen && /* @__PURE__ */ jsxs13("div", { ref: overlayRef, className: "xl:hidden fixed inset-0 top-[68px] z-[1020] bg-white overflow-y-auto", children: [
      /* @__PURE__ */ jsx17("div", { className: "flex flex-col", children: items.map((item) => {
        const LinkOrA = isExternal(item.href) ? "a" : Link;
        const extraProps = isExternal(item.href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
        return /* @__PURE__ */ jsxs13(
          LinkOrA,
          {
            href: item.href,
            className: "flex items-center justify-between px-6 py-4 text-[var(--text-content)] font-medium border-b border-dashed border-[var(--neutral-300)] cursor-pointer",
            onClick: () => setMobileOpen(false),
            ...extraProps,
            children: [
              /* @__PURE__ */ jsx17("span", { children: item.label }),
              /* @__PURE__ */ jsx17("img", { src: "/images/assets/icon-arrow-right.svg", alt: "", className: "h-4 w-4" })
            ]
          },
          item.href
        );
      }) }),
      /* @__PURE__ */ jsx17("div", { className: "p-6 space-y-3", children: isLoggedIn ? /* @__PURE__ */ jsx17("button", { onClick: () => {
        onLogout?.();
        setMobileOpen(false);
      }, className: "btn-outline-primary w-full", children: "\u767B\u51FA" }) : /* @__PURE__ */ jsx17("button", { onClick: () => {
        onLogin?.();
        setMobileOpen(false);
      }, className: "btn-gradient-primary w-full", children: "\u8A3B\u518A / \u767B\u5165" }) })
    ] })
  ] });
}

// src/components/mbb-footer.tsx
import Link2 from "next/link";
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
function MbbFooter({ className }) {
  return /* @__PURE__ */ jsxs14("footer", { className, children: [
    /* @__PURE__ */ jsxs14("div", { className: "bg-white py-10", children: [
      /* @__PURE__ */ jsxs14("div", { className: "mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsx18(Link2, { href: "/", children: /* @__PURE__ */ jsx18("img", { src: "/images/img-brand-logo.png", alt: "\u6BDB\u5E6B\u5E6B", className: "h-[53px]" }) }),
        /* @__PURE__ */ jsxs14("nav", { className: "flex flex-wrap items-center gap-6 text-sm text-[var(--text-content)]", children: [
          /* @__PURE__ */ jsx18(Link2, { href: "/about", className: "hover:text-[var(--orange-400)] transition-colors", children: "\u8A8D\u8B58\u6BDB\u5E6B\u5E6B" }),
          /* @__PURE__ */ jsx18(Link2, { href: "/pricing", className: "hover:text-[var(--orange-400)] transition-colors", children: "\u65B9\u6848\u4ECB\u7D39" }),
          /* @__PURE__ */ jsx18(Link2, { href: "/catpedia", className: "hover:text-[var(--orange-400)] transition-colors", children: "\u6BDB\u5B69\u767E\u79D1" }),
          /* @__PURE__ */ jsx18(Link2, { href: "/blog", className: "hover:text-[var(--orange-400)] transition-colors", children: "\u6BDB\u5B69\u5C08\u6B04" }),
          /* @__PURE__ */ jsx18("a", { href: "https://shop.mbb.pet", target: "_blank", rel: "noopener noreferrer", className: "hover:text-[var(--orange-400)] transition-colors", children: "\u6BDB\u5B69\u5546\u57CE" })
        ] })
      ] }),
      /* @__PURE__ */ jsx18("div", { className: "dashed-line mx-auto max-w-[1200px] mt-6" })
    ] }),
    /* @__PURE__ */ jsx18("div", { className: "bg-[#6fa0ed] py-6", children: /* @__PURE__ */ jsxs14("div", { className: "mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs14("div", { className: "text-sm text-white/80 text-center md:text-left", children: [
        /* @__PURE__ */ jsx18("p", { children: "\u7D71\u4E00\u7DE8\u865F\uFF1A97168356 | \u5BA2\u670D\u4FE1\u7BB1\uFF1Aservice@mbb.pet" }),
        /* @__PURE__ */ jsxs14("p", { className: "mt-1", children: [
          "Copyright \xA9 ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " \u6BDB\u5E6B\u5E6B. All Rights Reserved."
        ] })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx18("a", { href: "https://www.facebook.com", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", children: /* @__PURE__ */ jsx18("img", { src: "/images/assets/icon-social-media-facebook.svg", alt: "", className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsx18("a", { href: "https://line.me", target: "_blank", rel: "noopener noreferrer", "aria-label": "LINE", children: /* @__PURE__ */ jsx18("img", { src: "/images/assets/icon-social-media-line.svg", alt: "", className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsx18("a", { href: "https://www.instagram.com", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", children: /* @__PURE__ */ jsx18("img", { src: "/images/assets/icon-social-media-instagram.svg", alt: "", className: "h-8 w-8" }) })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-4 text-sm text-white/80", children: [
        /* @__PURE__ */ jsx18(Link2, { href: "/terms", className: "hover:text-white transition-colors", children: "\u670D\u52D9\u689D\u6B3E" }),
        /* @__PURE__ */ jsx18(Link2, { href: "/privacy", className: "hover:text-white transition-colors", children: "\u96B1\u79C1\u653F\u7B56" })
      ] })
    ] }) })
  ] });
}

// src/components/mbb-floating-buttons.tsx
import { jsx as jsx19, jsxs as jsxs15 } from "react/jsx-runtime";
function MbbFloatingButtons({
  lineUrl = "https://lin.ee/example",
  joinUrl = "/pricing",
  className
}) {
  return /* @__PURE__ */ jsxs15("div", { className: cn("fixed bottom-6 right-6 z-50 flex flex-col gap-3", className), children: [
    /* @__PURE__ */ jsx19("a", { href: joinUrl, className: "block rise-effect", "aria-label": "\u52A0\u5165\u6BDB\u5E6B\u5E6B", children: /* @__PURE__ */ jsx19("img", { src: "/images/img-floating-btn-join.png", alt: "\u52A0\u5165\u6BDB\u5E6B\u5E6B", className: "h-16 w-16" }) }),
    /* @__PURE__ */ jsx19("a", { href: lineUrl, target: "_blank", rel: "noopener noreferrer", className: "block rise-effect", "aria-label": "LINE \u5BA2\u670D", children: /* @__PURE__ */ jsx19("img", { src: "/images/img-floating-btn-line.png", alt: "LINE", className: "h-16 w-16" }) })
  ] });
}

// src/components/mbb-loading-spinner.tsx
import { jsx as jsx20, jsxs as jsxs16 } from "react/jsx-runtime";
function MbbLoadingSpinner({ fullScreen, size = 75, className }) {
  const spinner = /* @__PURE__ */ jsxs16("svg", { width: size, height: size, viewBox: "0 0 100 100", className, role: "status", "aria-label": "\u8F09\u5165\u4E2D", children: [
    /* @__PURE__ */ jsx20("circle", { cx: "50", cy: "50", r: "38.5", fill: "none", strokeWidth: "5", stroke: "var(--orange-300)", opacity: "0.05" }),
    /* @__PURE__ */ jsx20(
      "circle",
      {
        cx: "50",
        cy: "50",
        r: "38.5",
        fill: "none",
        strokeWidth: "5",
        strokeLinecap: "round",
        style: { animation: "spinnerAnim 1.6s linear infinite" }
      }
    )
  ] });
  if (fullScreen) {
    return /* @__PURE__ */ jsx20("div", { className: "loading-overlay", children: spinner });
  }
  return spinner;
}

// src/components/mbb-aos-wrapper.tsx
import { useEffect as useEffect6 } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment as Fragment2, jsx as jsx21 } from "react/jsx-runtime";
function MbbAosWrapper({ children }) {
  useEffect6(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    AOS.init({
      duration: 1e3,
      easing: "ease-in-out",
      once: true,
      disable: prefersReducedMotion
    });
    return () => {
      const aosElements = document.querySelectorAll("[data-aos]");
      aosElements.forEach((el) => {
        el.removeAttribute("data-aos");
      });
    };
  }, []);
  return /* @__PURE__ */ jsx21(Fragment2, { children });
}

// src/components/mbb-layout.tsx
import { jsx as jsx22, jsxs as jsxs17 } from "react/jsx-runtime";
function MbbLayout({
  children,
  fluid,
  hideNavbar,
  hideFooter,
  hideFloatingButtons,
  currentPath,
  isLoggedIn,
  avatarUrl,
  onLogin,
  onLogout,
  className
}) {
  return /* @__PURE__ */ jsx22(MbbAosWrapper, { children: /* @__PURE__ */ jsxs17("div", { className: "bg-[var(--bg-orange)] min-h-dvh flex flex-col", children: [
    !hideNavbar && /* @__PURE__ */ jsx22(
      MbbNavbar,
      {
        currentPath,
        isLoggedIn,
        avatarUrl,
        onLogin,
        onLogout
      }
    ),
    /* @__PURE__ */ jsx22(
      "main",
      {
        className: cn(
          "flex-1",
          !hideNavbar && "pt-[60px]",
          "pb-[120px]",
          !fluid && "mx-auto max-w-[1200px] px-6",
          className
        ),
        children
      }
    ),
    !hideFloatingButtons && /* @__PURE__ */ jsx22(MbbFloatingButtons, {}),
    !hideFooter && /* @__PURE__ */ jsx22(MbbFooter, {})
  ] }) });
}

// src/hooks/use-intersection-observer.ts
import { useEffect as useEffect7, useRef as useRef7, useState as useState4 } from "react";
function useIntersectionObserver(options = {}) {
  const {
    rootMargin = "-25% 0px -25% 0px",
    threshold = 0,
    delay = 500,
    className = "sketch-in"
  } = options;
  const ref = useRef7(null);
  const [isVisible, setIsVisible] = useState4(false);
  useEffect7(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add(className);
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            element.classList.add(className);
            setIsVisible(true);
          }, delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { rootMargin, threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, delay, className]);
  return { ref, isVisible };
}

// src/hooks/use-auto-expand.ts
import { useCallback as useCallback3, useEffect as useEffect8, useRef as useRef8 } from "react";
function useAutoExpand() {
  const ref = useRef8(null);
  const adjustHeight = useCallback3(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);
  useEffect8(() => {
    const el = ref.current;
    if (!el) return;
    adjustHeight();
    el.addEventListener("input", adjustHeight);
    return () => el.removeEventListener("input", adjustHeight);
  }, [adjustHeight]);
  return { ref, adjustHeight };
}
export {
  MbbAosWrapper,
  MbbBottomSheet,
  MbbButton,
  MbbCard,
  MbbFloatingButtons,
  MbbFooter,
  MbbFormCheckbox,
  MbbFormInput,
  MbbFormRadio,
  MbbFormSelect,
  MbbHeroSection,
  MbbLayout,
  MbbLoadingSpinner,
  MbbModal,
  MbbNavbar,
  MbbNoticeBlock,
  MbbPagination,
  MbbSectionWrapper,
  MbbTabs,
  MbbTag,
  MbbTextarea,
  MbbWhitePanel,
  buttonVariants,
  cardVariants,
  cn,
  tagVariants,
  useAutoExpand,
  useIntersectionObserver
};
//# sourceMappingURL=index.mjs.map