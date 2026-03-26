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

// src/assets/index.ts
var BASE = "/mbb-assets";
var asset404 = BASE + "/icons/404.svg";
var asset500 = BASE + "/icons/500.svg";
var breadcrumbDivider = BASE + "/icons/breadcrumb-divider.svg";
var formChecklistDefault = BASE + "/icons/form-checklist-default.svg";
var formChecklistError = BASE + "/icons/form-checklist-error.svg";
var iconAddSecondary = BASE + "/icons/icon-add-secondary.svg";
var iconAdd = BASE + "/icons/icon-add.svg";
var iconApproveGray = BASE + "/icons/icon-approve-gray.svg";
var iconApprove = BASE + "/icons/icon-approve.svg";
var iconArrowDown = BASE + "/icons/icon-arrow-down.svg";
var iconArrowLeftSolid = BASE + "/icons/icon-arrow-left-solid.svg";
var iconArrowLeft = BASE + "/icons/icon-arrow-left.svg";
var iconArrowRight = BASE + "/icons/icon-arrow-right.svg";
var iconArrowStraightRight = BASE + "/icons/icon-arrow-straight-right.svg";
var iconArrowWhiteLeft = BASE + "/icons/icon-arrow-white-left.svg";
var iconAttentionLine = BASE + "/icons/icon-attention-line.svg";
var iconAttention = BASE + "/icons/icon-attention.svg";
var iconBellGray = BASE + "/icons/icon-bell-gray.svg";
var iconBell = BASE + "/icons/icon-bell.svg";
var iconBreed = BASE + "/icons/icon-breed.svg";
var iconCalender = BASE + "/icons/icon-calender.svg";
var iconCheck = BASE + "/icons/icon-check.svg";
var iconCheckbox = BASE + "/icons/icon-checkbox.svg";
var iconCircleLeft = BASE + "/icons/icon-circle-left.svg";
var iconCircleRight = BASE + "/icons/icon-circle-right.svg";
var iconClose = BASE + "/icons/icon-close.svg";
var iconComplete = BASE + "/icons/icon-complete.svg";
var iconCreatGray = BASE + "/icons/icon-creat-gray.svg";
var iconCreatePrimary = BASE + "/icons/icon-create-primary.svg";
var iconCreate = BASE + "/icons/icon-create.svg";
var iconCredit = BASE + "/icons/icon-credit.svg";
var iconDocument = BASE + "/icons/icon-document.svg";
var iconDrag = BASE + "/icons/icon-drag.svg";
var iconDropdownArrowDown = BASE + "/icons/icon-dropdown-arrow-down.svg";
var iconEditGray = BASE + "/icons/icon-edit-gray.svg";
var iconEditOn = BASE + "/icons/icon-edit-on.svg";
var iconEdit = BASE + "/icons/icon-edit.svg";
var iconExportOrange = BASE + "/icons/icon-export-orange.svg";
var iconExport = BASE + "/icons/icon-export.svg";
var iconFeedbackSuscess = BASE + "/icons/icon-feedback-suscess.svg";
var iconFilterDown = BASE + "/icons/icon-filter-down.svg";
var iconFilterGray = BASE + "/icons/icon-filter-gray.svg";
var iconFilter = BASE + "/icons/icon-filter.svg";
var iconGoogle = BASE + "/icons/icon-google.svg";
var iconGoto = BASE + "/icons/icon-goto.svg";
var iconGroupingGray = BASE + "/icons/icon-grouping-gray.svg";
var iconGrouping = BASE + "/icons/icon-grouping.svg";
var iconInfoSolidWarning = BASE + "/icons/icon-info-solid-warning.svg";
var iconInfo = BASE + "/icons/icon-info.svg";
var iconInvisible = BASE + "/icons/icon-invisible.svg";
var iconLine = BASE + "/icons/icon-line.svg";
var iconLinkFail = BASE + "/icons/icon-link-fail.svg";
var iconLinkSuccess = BASE + "/icons/icon-link-success.svg";
var iconListStyleBigDiscDisabled = BASE + "/icons/icon-list-style-big-disc-disabled.svg";
var iconListStyleBigDisc = BASE + "/icons/icon-list-style-big-disc.svg";
var iconMail = BASE + "/icons/icon-mail.svg";
var iconMinus = BASE + "/icons/icon-minus.svg";
var iconModalClose = BASE + "/icons/icon-modal-close.svg";
var iconMore = BASE + "/icons/icon-more.svg";
var iconNavbarTogglerClose = BASE + "/icons/icon-navbar-toggler-close.svg";
var iconNavbarToggler = BASE + "/icons/icon-navbar-toggler.svg";
var iconPaginationArrow = BASE + "/icons/icon-pagination-arrow.svg";
var iconPaginationNext = BASE + "/icons/icon-pagination-next.svg";
var iconPaginationPrevious = BASE + "/icons/icon-pagination-previous.svg";
var iconPetBullet = BASE + "/icons/icon-pet-bullet.svg";
var iconPetCardArrow = BASE + "/icons/icon-pet-card-arrow.svg";
var iconPetHandPrimary = BASE + "/icons/icon-pet-hand-primary.svg";
var iconPetHand = BASE + "/icons/icon-pet-hand.svg";
var iconPhotoClose = BASE + "/icons/icon-photo-close.svg";
var iconPhotoGray = BASE + "/icons/icon-photo-gray.svg";
var iconPhoto = BASE + "/icons/icon-photo.svg";
var iconPlanFeaturesPaginationLeft = BASE + "/icons/icon-plan-features-pagination-left.svg";
var iconPlanFeaturesPaginationRight = BASE + "/icons/icon-plan-features-pagination-right.svg";
var iconPoint = BASE + "/icons/icon-point.svg";
var iconQaArrow = BASE + "/icons/icon-qa-arrow.svg";
var iconQaSwitchMinus = BASE + "/icons/icon-qa-switch-minus.svg";
var iconQaSwitchPlus = BASE + "/icons/icon-qa-switch-plus.svg";
var iconRejectGray = BASE + "/icons/icon-reject-gray.svg";
var iconRejectWhite = BASE + "/icons/icon-reject-white.svg";
var iconReject = BASE + "/icons/icon-reject.svg";
var iconRequestGray = BASE + "/icons/icon-request-gray.svg";
var iconRequest = BASE + "/icons/icon-request.svg";
var iconSearchGray = BASE + "/icons/icon-search-gray.svg";
var iconSearch = BASE + "/icons/icon-search.svg";
var iconShipping = BASE + "/icons/icon-shipping.svg";
var iconSidebarFrontend = BASE + "/icons/icon-sidebar-frontend.svg";
var iconSidebarHelpCircle = BASE + "/icons/icon-sidebar-help-circle.svg";
var iconSidebarMemberSolid = BASE + "/icons/icon-sidebar-member-solid.svg";
var iconSidebarMember = BASE + "/icons/icon-sidebar-member.svg";
var iconSidebarMembers = BASE + "/icons/icon-sidebar-members.svg";
var iconSidebarOrders = BASE + "/icons/icon-sidebar-orders.svg";
var iconSidebarPaymentSolid = BASE + "/icons/icon-sidebar-payment-solid.svg";
var iconSidebarPayment = BASE + "/icons/icon-sidebar-payment.svg";
var iconSidebarPetSolid = BASE + "/icons/icon-sidebar-pet-solid.svg";
var iconSidebarPet = BASE + "/icons/icon-sidebar-pet.svg";
var iconSidebarReferral = BASE + "/icons/icon-sidebar-referral.svg";
var iconSidebarSystem = BASE + "/icons/icon-sidebar-system.svg";
var iconSocialMediaFacebook = BASE + "/icons/icon-social-media-facebook.svg";
var iconSocialMediaInstagram = BASE + "/icons/icon-social-media-instagram.svg";
var iconSocialMediaLine = BASE + "/icons/icon-social-media-line.svg";
var iconSolidAttentionBlue = BASE + "/icons/icon-solid-attention-blue.svg";
var iconSolidAttention = BASE + "/icons/icon-solid-attention.svg";
var iconSolidCheckPrimary = BASE + "/icons/icon-solid-check-primary.svg";
var iconSolidClose = BASE + "/icons/icon-solid-close.svg";
var iconSolidInfo = BASE + "/icons/icon-solid-info.svg";
var iconSorterAsc = BASE + "/icons/icon-sorter-asc.svg";
var iconSorterDesc = BASE + "/icons/icon-sorter-desc.svg";
var iconSorterReady = BASE + "/icons/icon-sorter-ready.svg";
var iconStarCheck = BASE + "/icons/icon-star-check.svg";
var iconTabControlNext = BASE + "/icons/icon-tab-control-next.svg";
var iconTabControlPrevious = BASE + "/icons/icon-tab-control-previous.svg";
var iconTagCheckOutline = BASE + "/icons/icon-tag-check-outline.svg";
var iconTagDisabledOutline = BASE + "/icons/icon-tag-disabled-outline.svg";
var iconTagDisabled = BASE + "/icons/icon-tag-disabled.svg";
var iconTagReviewOutline = BASE + "/icons/icon-tag-review-outline.svg";
var iconTagSuscess = BASE + "/icons/icon-tag-suscess.svg";
var iconTicket = BASE + "/icons/icon-ticket.svg";
var iconTime = BASE + "/icons/icon-time.svg";
var iconTrashRed = BASE + "/icons/icon-trash-red.svg";
var iconTrash = BASE + "/icons/icon-trash.svg";
var iconUnsubscribe = BASE + "/icons/icon-unsubscribe.svg";
var iconUpload = BASE + "/icons/icon-upload.svg";
var iconVisible = BASE + "/icons/icon-visible.svg";
var iconWith = BASE + "/icons/icon-with.svg";
var imgCorner = BASE + "/icons/img-corner.svg";
var imgNavChildRadius = BASE + "/icons/img-nav-child-radius.svg";
var imgSubtractMb = BASE + "/icons/img-subtract-mb.svg";
var imgSubtract = BASE + "/icons/img-subtract.svg";
var sysError = BASE + "/icons/sys-error.svg";
var sysSuccess = BASE + "/icons/sys-success.svg";
var sysWarning = BASE + "/icons/sys-warning.svg";
var favicon = BASE + "/logos/favicon.png";
var imgBgLogo = BASE + "/logos/img-bg-logo.png";
var imgBrandLogo = BASE + "/logos/img-brand-logo.png";
var imgLogoSimple = BASE + "/logos/img-logo-simple.png";
var iconAdBannerClose = BASE + "/ui/icon-ad-banner-close.png";
var imgArticalDialog = BASE + "/ui/img-artical-dialog.png";
var imgCardAnswer = BASE + "/ui/img-card-answer.png";
var imgCardIcon18year = BASE + "/ui/img-card-icon-18year.png";
var imgCardIconPetsLove = BASE + "/ui/img-card-icon-pets-love.png";
var imgCardQuestion = BASE + "/ui/img-card-question.png";
var imgControlBtnLeft = BASE + "/ui/img-control-btn-left.png";
var imgControlBtnRight = BASE + "/ui/img-control-btn-right.png";
var imgDataChecked = BASE + "/ui/img-data-checked.png";
var imgDataEmpty = BASE + "/ui/img-data-empty.png";
var imgDataNoMatch = BASE + "/ui/img-data-no-match.png";
var imgEmptyResult = BASE + "/ui/img-empty-result.png";
var imgFailError = BASE + "/ui/img-fail-error.png";
var imgFeatureLinkAid = BASE + "/ui/img-feature-link-aid.png";
var imgFeatureLinkShipping = BASE + "/ui/img-feature-link-shipping.png";
var imgFloatingBtnJoin = BASE + "/ui/img-floating-btn-join.png";
var imgFloatingBtnLine = BASE + "/ui/img-floating-btn-line.png";
var imgPdfDownload = BASE + "/ui/img-pdf-download.png";
var imgSuccessCheck = BASE + "/ui/img-success-check.png";
var imgAboutHeroMobile = BASE + "/backgrounds/img-about-hero-mobile.png";
var imgAboutHeroPc = BASE + "/backgrounds/img-about-hero-pc.png";
var imgAidArcUpBackgroundPad = BASE + "/backgrounds/img-aid-arc-up-background-pad.png";
var imgAidArcUpBackgroundPc = BASE + "/backgrounds/img-aid-arc-up-background-pc.png";
var imgAidArcUpBackgroundPhone = BASE + "/backgrounds/img-aid-arc-up-background-phone.png";
var imgAidCurveDash = BASE + "/backgrounds/img-aid-curve-dash.png";
var imgAidHeroMobile = BASE + "/backgrounds/img-aid-hero-mobile.png";
var imgAidHeroPc = BASE + "/backgrounds/img-aid-hero-pc.png";
var imgAidNotchBackgroundPad = BASE + "/backgrounds/img-aid-notch-background-pad.png";
var imgAidNotchBackgroundPc = BASE + "/backgrounds/img-aid-notch-background-pc.png";
var imgCancerHeroMobile = BASE + "/backgrounds/img-cancer-hero-mobile.png";
var imgCancerHeroPc = BASE + "/backgrounds/img-cancer-hero-pc.png";
var imgFaqHeroMobile = BASE + "/backgrounds/img-faq-hero-mobile.png";
var imgFaqHeroPc = BASE + "/backgrounds/img-faq-hero-pc.png";
var imgHeroBgPad = BASE + "/backgrounds/img-hero-bg-pad.png";
var imgHeroBgPc = BASE + "/backgrounds/img-hero-bg-pc.png";
var imgHeroBgPhone = BASE + "/backgrounds/img-hero-bg-phone.png";
var imgPetCardBgMobile = BASE + "/backgrounds/img-pet-card-bg-mobile.png";
var imgPetCardBg = BASE + "/backgrounds/img-pet-card-bg.png";
var imgTermsHeroMobile = BASE + "/backgrounds/img-terms-hero-mobile.png";
var imgTermsHeroPc = BASE + "/backgrounds/img-terms-hero-pc.png";
var imgCatGrayBroPhone = BASE + "/illustrations/img-cat-gray-bro-phone.png";
var imgCatGrayBro = BASE + "/illustrations/img-cat-gray-bro.png";
var imgDogPurringPhone = BASE + "/illustrations/img-dog-purring-phone.png";
var imgDogPurring = BASE + "/illustrations/img-dog-purring.png";
var imgIllusDogFetch = BASE + "/illustrations/img-illus-dog-fetch.png";
var imgIllustration = BASE + "/illustrations/img-illustration.png";
var imgPassStar = BASE + "/illustrations/img-pass-star.png";
var imgPawsRecruitMobile = BASE + "/illustrations/img-paws-recruit-mobile.png";
var imgPawsRecruitPc = BASE + "/illustrations/img-paws-recruit-pc.png";
var imgPetStar = BASE + "/illustrations/img-pet-star.png";
var imgAvatar1 = BASE + "/pets/img-avatar-1.png";
var imgAvatar10 = BASE + "/pets/img-avatar-10.png";
var imgAvatar11 = BASE + "/pets/img-avatar-11.png";
var imgAvatar12 = BASE + "/pets/img-avatar-12.png";
var imgAvatar13 = BASE + "/pets/img-avatar-13.png";
var imgAvatar2 = BASE + "/pets/img-avatar-2.png";
var imgAvatar3 = BASE + "/pets/img-avatar-3.png";
var imgAvatar4 = BASE + "/pets/img-avatar-4.png";
var imgAvatar5 = BASE + "/pets/img-avatar-5.png";
var imgAvatar6 = BASE + "/pets/img-avatar-6.png";
var imgAvatar7 = BASE + "/pets/img-avatar-7.png";
var imgAvatar8 = BASE + "/pets/img-avatar-8.png";
var imgAvatar9 = BASE + "/pets/img-avatar-9.png";
var imgPetAvatar = BASE + "/pets/img-pet-avatar.png";
var imgPetPhoto1 = BASE + "/pets/img-pet-photo-1.png";
var imgPetPhoto10 = BASE + "/pets/img-pet-photo-10.png";
var imgPetPhoto11 = BASE + "/pets/img-pet-photo-11.png";
var imgPetPhoto12 = BASE + "/pets/img-pet-photo-12.png";
var imgPetPhoto2 = BASE + "/pets/img-pet-photo-2.png";
var imgPetPhoto2x = BASE + "/pets/img-pet-photo-2x.png";
var imgPetPhoto3 = BASE + "/pets/img-pet-photo-3.png";
var imgPetPhoto4 = BASE + "/pets/img-pet-photo-4.png";
var imgPetPhoto5 = BASE + "/pets/img-pet-photo-5.png";
var imgPetPhoto6 = BASE + "/pets/img-pet-photo-6.png";
var imgPetPhoto7 = BASE + "/pets/img-pet-photo-7.png";
var imgPetPhoto8 = BASE + "/pets/img-pet-photo-8.png";
var imgPetPhoto9 = BASE + "/pets/img-pet-photo-9.png";
var kvArrowLeftSolid = BASE + "/home-kv/icon-arrow-left-solid.svg";
var kvArrowLeft = BASE + "/home-kv/icon-arrow-left.svg";
var kvArrowRight = BASE + "/home-kv/icon-arrow-right.svg";
var kvWith = BASE + "/home-kv/icon-with.svg";
var imgAnswer1 = BASE + "/home-kv/img-answer-1.png";
var imgAnswer2 = BASE + "/home-kv/img-answer-2.png";
var imgAnswer3 = BASE + "/home-kv/img-answer-3.png";
var imgBackgroundPad = BASE + "/home-kv/img-background-pad.png";
var imgBackgroundPc = BASE + "/home-kv/img-background-pc.png";
var imgBackgroundPhone = BASE + "/home-kv/img-background-phone.png";
var imgBrand1 = BASE + "/home-kv/img-brand-1.png";
var imgBrand2 = BASE + "/home-kv/img-brand-2.png";
var imgBrand3 = BASE + "/home-kv/img-brand-3.png";
var imgBrand4 = BASE + "/home-kv/img-brand-4.png";
var imgBrand5 = BASE + "/home-kv/img-brand-5.png";
var kvCardAnswer = BASE + "/home-kv/img-card-answer.png";
var kvCardQuestion = BASE + "/home-kv/img-card-question.png";
var imgCenter = BASE + "/home-kv/img-center.png";
var kvControlBtnLeft = BASE + "/home-kv/img-control-btn-left.png";
var kvControlBtnRight = BASE + "/home-kv/img-control-btn-right.png";
var kvCorner = BASE + "/home-kv/img-corner.svg";
var imgHill = BASE + "/home-kv/img-hill.png";
var kvIllustration = BASE + "/home-kv/img-illustration.png";
var imgKv2ImageMobile = BASE + "/home-kv/img-kv2-image-mobile.png";
var imgKv2Image = BASE + "/home-kv/img-kv2-image.png";
var imgLeft = BASE + "/home-kv/img-left.png";
var imgMainImage = BASE + "/home-kv/img-main-image.png";
var imgPet1 = BASE + "/home-kv/img-pet-1.png";
var imgPet2 = BASE + "/home-kv/img-pet-2.png";
var imgPet3 = BASE + "/home-kv/img-pet-3.png";
var imgPetLeft = BASE + "/home-kv/img-pet-left.png";
var imgPetRight = BASE + "/home-kv/img-pet-right.png";
var kvPetStar = BASE + "/home-kv/img-pet-star.png";
var imgPetsMobile = BASE + "/home-kv/img-pets-mobile.png";
var imgPets = BASE + "/home-kv/img-pets.png";
var imgQuestion1 = BASE + "/home-kv/img-question-1.png";
var imgQuestion2 = BASE + "/home-kv/img-question-2.png";
var imgQuestion3 = BASE + "/home-kv/img-question-3.png";
var imgRight = BASE + "/home-kv/img-right.png";
var imgStory = BASE + "/home-kv/img-story.png";
var imgSubtitleLeft = BASE + "/home-kv/img-subtitle-left.png";
var imgSubtitleRight = BASE + "/home-kv/img-subtitle-right.png";
var kvSubtractMb = BASE + "/home-kv/img-subtract-mb.svg";
var kvSubtract = BASE + "/home-kv/img-subtract.svg";
var imgWaveMobile = BASE + "/home-kv/img-wave-mobile.png";
var imgWavePc = BASE + "/home-kv/img-wave-pc.png";

// src/components/mbb-navbar.tsx
import { Fragment, jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
var defaultItems = [
  { label: "\u5E6B\u5E6B\u5708", href: "/circle" },
  { label: "\u5E6B\u5E6B\u767E\u79D1", href: "/pedia" },
  { label: "\u5E6B\u5E6B\u554F", href: "/ask" },
  { label: "\u96FB\u5B50\u5831", href: "/newsletter" },
  { label: "\u95DC\u65BC\u6BDB\u5E6B\u5E6B", href: "/about" },
  { label: "\u642D\u642D\u624B\u97FF\u61C9", href: "/fund" },
  { label: "\u642D\u642D\u624B\u6703\u54E1", href: "/membership" },
  { label: "\u6BDB\u5E6B\u5E6B\u8CFC\u7269", href: "https://shop.mbb.pet" }
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
    /* @__PURE__ */ jsx17(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-pill focus:shadow-card focus:text-[var(--text-title)] focus:font-medium",
        children: "\u8DF3\u5230\u4E3B\u8981\u5167\u5BB9\u5340\u584A"
      }
    ),
    /* @__PURE__ */ jsx17("nav", { className: "hidden xl:block py-3", children: /* @__PURE__ */ jsxs13("div", { className: "mx-auto max-w-[1200px] flex items-center bg-white rounded-pill shadow-card px-6 py-4", children: [
      /* @__PURE__ */ jsx17(Link, { href: "/", className: "shrink-0", children: /* @__PURE__ */ jsx17("img", { src: imgBrandLogo, alt: "\u6BDB\u5E6B\u5E6B", className: "w-[240px] h-auto" }) }),
      /* @__PURE__ */ jsx17("div", { className: "flex items-center gap-6 mx-auto", children: items.map((item) => {
        const active = currentPath.startsWith(item.href) && item.href !== "/";
        const LinkOrA = isExternal(item.href) ? "a" : Link;
        const extraProps = isExternal(item.href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
        return /* @__PURE__ */ jsx17(
          LinkOrA,
          {
            href: item.href,
            className: cn(
              "text-base font-medium transition-colors duration-300 relative py-3 cursor-pointer whitespace-nowrap",
              active ? "text-[var(--orange-400)]" : "text-[var(--text-title)] hover:text-[var(--orange-400)]",
              active && "after:absolute after:bottom-[7px] after:left-0 after:right-0 after:h-[1.5px] after:bg-[var(--orange-300)]"
            ),
            ...extraProps,
            children: item.label
          },
          item.href
        );
      }) }),
      /* @__PURE__ */ jsx17("div", { className: "flex items-center gap-3 shrink-0", children: isLoggedIn ? /* @__PURE__ */ jsxs13(Fragment, { children: [
        /* @__PURE__ */ jsx17("button", { className: "p-2 cursor-pointer", "aria-label": "\u901A\u77E5", children: /* @__PURE__ */ jsx17("img", { src: iconBell, alt: "", className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx17(Link, { href: "/me", className: "block", children: /* @__PURE__ */ jsx17("img", { src: avatarUrl || imgPetAvatar, alt: "\u500B\u4EBA\u982D\u50CF", className: "h-9 w-9 rounded-full object-cover border border-[var(--neutral-300)]" }) })
      ] }) : /* @__PURE__ */ jsx17("button", { onClick: onLogin, className: "btn-gradient-primary text-sm cursor-pointer whitespace-nowrap", children: "\u8A3B\u518A / \u767B\u5165" }) })
    ] }) }),
    /* @__PURE__ */ jsxs13("nav", { className: "xl:hidden relative flex items-center justify-center bg-white px-6 h-[68px] shadow-sm", children: [
      /* @__PURE__ */ jsx17(Link, { href: "/", children: /* @__PURE__ */ jsx17("img", { src: imgBrandLogo, alt: "\u6BDB\u5E6B\u5E6B", className: "h-8", style: { maxWidth: 160 } }) }),
      /* @__PURE__ */ jsx17(
        "button",
        {
          onClick: () => setMobileOpen(!mobileOpen),
          className: "absolute right-6 top-1/2 -translate-y-1/2 p-2 cursor-pointer",
          "aria-label": mobileOpen ? "\u95DC\u9589\u9078\u55AE" : "\u958B\u555F\u9078\u55AE",
          children: /* @__PURE__ */ jsx17("img", { src: mobileOpen ? iconNavbarTogglerClose : iconNavbarToggler, alt: "", className: "h-6 w-6" })
        }
      )
    ] }),
    mobileOpen && /* @__PURE__ */ jsxs13("div", { ref: overlayRef, className: "xl:hidden fixed inset-0 top-[68px] z-[1020] bg-white overflow-y-auto", children: [
      /* @__PURE__ */ jsx17("div", { className: "flex flex-col", children: items.map((item) => {
        const LinkOrA = isExternal(item.href) ? "a" : Link;
        const extraProps = isExternal(item.href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
        return /* @__PURE__ */ jsxs13(
          LinkOrA,
          {
            href: item.href,
            className: "flex items-center justify-between px-6 py-5 text-[var(--text-title)] font-medium border-b border-dashed border-[var(--orange-300)] cursor-pointer",
            onClick: () => setMobileOpen(false),
            ...extraProps,
            children: [
              /* @__PURE__ */ jsx17("span", { children: item.label }),
              /* @__PURE__ */ jsx17("img", { src: iconArrowRight, alt: "", className: "h-6 w-6" })
            ]
          },
          item.href
        );
      }) }),
      /* @__PURE__ */ jsx17("div", { className: "p-6 space-y-3", children: isLoggedIn ? /* @__PURE__ */ jsx17("button", { onClick: () => {
        onLogout?.();
        setMobileOpen(false);
      }, className: "btn-outline-primary w-full cursor-pointer", children: "\u767B\u51FA" }) : /* @__PURE__ */ jsx17("button", { onClick: () => {
        onLogin?.();
        setMobileOpen(false);
      }, className: "btn-gradient-primary w-full cursor-pointer", children: "\u8A3B\u518A / \u767B\u5165" }) })
    ] })
  ] });
}

// src/components/mbb-footer.tsx
import Link2 from "next/link";
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
var defaultNavLinks = [
  { label: "\u642D\u642D\u624B\u6703\u54E1", href: "/membership" },
  { label: "\u95DC\u65BC\u6BDB\u5E6B\u5E6B", href: "/about" },
  { label: "\u6BDB\u5E6B\u5E6B\u8CFC\u7269", href: "https://shop.mbb.pet", external: true },
  { label: "\u642D\u642D\u624B\u97FF\u61C9", href: "/fund" }
];
var defaultSocialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/mbb.pet/", icon: "" },
  { label: "LINE", href: "https://lin.ee/vYZqpoy", icon: "" },
  { label: "Instagram", href: "https://www.instagram.com/mbb.pet/", icon: "" }
];
var defaultLegalLinks = [
  { label: "\u689D\u6B3E\u8207\u7D30\u5247", href: "/terms" }
];
var getSocialIcon = (label) => {
  const lower = label.toLowerCase();
  if (lower.includes("facebook") || lower.includes("fb")) return iconSocialMediaFacebook;
  if (lower.includes("line")) return iconSocialMediaLine;
  if (lower.includes("instagram") || lower.includes("ig")) return iconSocialMediaInstagram;
  return null;
};
function MbbFooter({
  className,
  navLinks = defaultNavLinks,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  registrationNumber = "00215174",
  copyrightHolder = "\u6BDB\u5E6B\u5E6B\u79D1\u6280\u80A1\u4EFD\u6709\u9650\u516C\u53F8\u7248\u6B0A\u6240\u6709\u8F49\u8F09\u5FC5\u7A76"
}) {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs14("footer", { className: cn("", className), children: [
    /* @__PURE__ */ jsx18("div", { className: "bg-white", children: /* @__PURE__ */ jsxs14("div", { className: "mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 py-7 md:py-0 md:h-[160px]", style: { maxWidth: 704 }, children: [
      /* @__PURE__ */ jsx18(Link2, { href: "/", className: "shrink-0", children: /* @__PURE__ */ jsx18("img", { src: imgBrandLogo, alt: "\u6BDB\u5E6B\u5E6B", className: "h-[53px] md:h-[53px]", loading: "lazy" }) }),
      /* @__PURE__ */ jsx18("div", { className: "hidden md:block w-px bg-[var(--neutral-300)] self-stretch my-4 mx-8" }),
      /* @__PURE__ */ jsx18("hr", { className: "md:hidden w-full border-[var(--neutral-300)] m-0" }),
      /* @__PURE__ */ jsx18("nav", { className: "flex flex-wrap items-center gap-5", "aria-label": "\u9801\u5C3E\u5C0E\u89BD", children: navLinks.map((link) => {
        const LinkOrA = link.external ? "a" : Link2;
        const extraProps = link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
        return /* @__PURE__ */ jsx18(
          LinkOrA,
          {
            href: link.href,
            className: "text-sm md:text-base font-medium text-[var(--text-content)] hover:text-[var(--orange-400)] transition-colors px-2.5",
            ...extraProps,
            children: link.label
          },
          link.label
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx18("div", { className: "bg-[#6fa0ed] py-4 md:py-4", children: /* @__PURE__ */ jsxs14("div", { className: "mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs14("div", { className: "flex flex-col xl:flex-row items-center gap-1 xl:gap-4 text-sm text-white order-2 md:order-1", children: [
        /* @__PURE__ */ jsxs14("p", { children: [
          "\u7D71\u4E00\u7DE8\u865F\uFF1A",
          registrationNumber
        ] }),
        /* @__PURE__ */ jsx18("div", { className: "hidden xl:block w-px h-4 bg-white" }),
        /* @__PURE__ */ jsxs14("p", { children: [
          "\xA9 ",
          currentYear,
          " ",
          copyrightHolder
        ] })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "flex flex-col xl:flex-row items-center gap-5 order-1 md:order-2", children: [
        /* @__PURE__ */ jsx18("div", { className: "flex items-center gap-6", children: legalLinks.map((link) => /* @__PURE__ */ jsx18(
          Link2,
          {
            href: link.href,
            className: "text-sm font-medium text-white hover:text-white/80 transition-colors",
            children: link.label
          },
          link.label
        )) }),
        /* @__PURE__ */ jsx18("div", { className: "flex items-center gap-4 xl:gap-2", children: socialLinks.map((social) => {
          const icon = getSocialIcon(social.label);
          return /* @__PURE__ */ jsx18(
            "a",
            {
              href: social.href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": social.label,
              className: "transition-opacity hover:opacity-80",
              children: icon ? /* @__PURE__ */ jsx18("img", { src: icon, alt: "", className: "h-8 w-8 md:h-8 md:w-8", loading: "lazy" }) : /* @__PURE__ */ jsx18("span", { className: "text-sm text-white", children: social.label })
            },
            social.label
          );
        }) })
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
    /* @__PURE__ */ jsx19("a", { href: joinUrl, className: "block rise-effect", "aria-label": "\u52A0\u5165\u6BDB\u5E6B\u5E6B", children: /* @__PURE__ */ jsx19("img", { src: imgFloatingBtnJoin, alt: "\u52A0\u5165\u6BDB\u5E6B\u5E6B", className: "h-16 w-16", loading: "lazy" }) }),
    /* @__PURE__ */ jsx19("a", { href: lineUrl, target: "_blank", rel: "noopener noreferrer", className: "block rise-effect", "aria-label": "LINE \u5BA2\u670D", children: /* @__PURE__ */ jsx19("img", { src: imgFloatingBtnLine, alt: "LINE", className: "h-16 w-16", loading: "lazy" }) })
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
        id: "main-content",
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
  asset404,
  asset500,
  breadcrumbDivider,
  buttonVariants,
  cardVariants,
  cn,
  favicon,
  formChecklistDefault,
  formChecklistError,
  iconAdBannerClose,
  iconAdd,
  iconAddSecondary,
  iconApprove,
  iconApproveGray,
  iconArrowDown,
  iconArrowLeft,
  iconArrowLeftSolid,
  iconArrowRight,
  iconArrowStraightRight,
  iconArrowWhiteLeft,
  iconAttention,
  iconAttentionLine,
  iconBell,
  iconBellGray,
  iconBreed,
  iconCalender,
  iconCheck,
  iconCheckbox,
  iconCircleLeft,
  iconCircleRight,
  iconClose,
  iconComplete,
  iconCreatGray,
  iconCreate,
  iconCreatePrimary,
  iconCredit,
  iconDocument,
  iconDrag,
  iconDropdownArrowDown,
  iconEdit,
  iconEditGray,
  iconEditOn,
  iconExport,
  iconExportOrange,
  iconFeedbackSuscess,
  iconFilter,
  iconFilterDown,
  iconFilterGray,
  iconGoogle,
  iconGoto,
  iconGrouping,
  iconGroupingGray,
  iconInfo,
  iconInfoSolidWarning,
  iconInvisible,
  iconLine,
  iconLinkFail,
  iconLinkSuccess,
  iconListStyleBigDisc,
  iconListStyleBigDiscDisabled,
  iconMail,
  iconMinus,
  iconModalClose,
  iconMore,
  iconNavbarToggler,
  iconNavbarTogglerClose,
  iconPaginationArrow,
  iconPaginationNext,
  iconPaginationPrevious,
  iconPetBullet,
  iconPetCardArrow,
  iconPetHand,
  iconPetHandPrimary,
  iconPhoto,
  iconPhotoClose,
  iconPhotoGray,
  iconPlanFeaturesPaginationLeft,
  iconPlanFeaturesPaginationRight,
  iconPoint,
  iconQaArrow,
  iconQaSwitchMinus,
  iconQaSwitchPlus,
  iconReject,
  iconRejectGray,
  iconRejectWhite,
  iconRequest,
  iconRequestGray,
  iconSearch,
  iconSearchGray,
  iconShipping,
  iconSidebarFrontend,
  iconSidebarHelpCircle,
  iconSidebarMember,
  iconSidebarMemberSolid,
  iconSidebarMembers,
  iconSidebarOrders,
  iconSidebarPayment,
  iconSidebarPaymentSolid,
  iconSidebarPet,
  iconSidebarPetSolid,
  iconSidebarReferral,
  iconSidebarSystem,
  iconSocialMediaFacebook,
  iconSocialMediaInstagram,
  iconSocialMediaLine,
  iconSolidAttention,
  iconSolidAttentionBlue,
  iconSolidCheckPrimary,
  iconSolidClose,
  iconSolidInfo,
  iconSorterAsc,
  iconSorterDesc,
  iconSorterReady,
  iconStarCheck,
  iconTabControlNext,
  iconTabControlPrevious,
  iconTagCheckOutline,
  iconTagDisabled,
  iconTagDisabledOutline,
  iconTagReviewOutline,
  iconTagSuscess,
  iconTicket,
  iconTime,
  iconTrash,
  iconTrashRed,
  iconUnsubscribe,
  iconUpload,
  iconVisible,
  iconWith,
  imgAboutHeroMobile,
  imgAboutHeroPc,
  imgAidArcUpBackgroundPad,
  imgAidArcUpBackgroundPc,
  imgAidArcUpBackgroundPhone,
  imgAidCurveDash,
  imgAidHeroMobile,
  imgAidHeroPc,
  imgAidNotchBackgroundPad,
  imgAidNotchBackgroundPc,
  imgAnswer1,
  imgAnswer2,
  imgAnswer3,
  imgArticalDialog,
  imgAvatar1,
  imgAvatar10,
  imgAvatar11,
  imgAvatar12,
  imgAvatar13,
  imgAvatar2,
  imgAvatar3,
  imgAvatar4,
  imgAvatar5,
  imgAvatar6,
  imgAvatar7,
  imgAvatar8,
  imgAvatar9,
  imgBackgroundPad,
  imgBackgroundPc,
  imgBackgroundPhone,
  imgBgLogo,
  imgBrand1,
  imgBrand2,
  imgBrand3,
  imgBrand4,
  imgBrand5,
  imgBrandLogo,
  imgCancerHeroMobile,
  imgCancerHeroPc,
  imgCardAnswer,
  imgCardIcon18year,
  imgCardIconPetsLove,
  imgCardQuestion,
  imgCatGrayBro,
  imgCatGrayBroPhone,
  imgCenter,
  imgControlBtnLeft,
  imgControlBtnRight,
  imgCorner,
  imgDataChecked,
  imgDataEmpty,
  imgDataNoMatch,
  imgDogPurring,
  imgDogPurringPhone,
  imgEmptyResult,
  imgFailError,
  imgFaqHeroMobile,
  imgFaqHeroPc,
  imgFeatureLinkAid,
  imgFeatureLinkShipping,
  imgFloatingBtnJoin,
  imgFloatingBtnLine,
  imgHeroBgPad,
  imgHeroBgPc,
  imgHeroBgPhone,
  imgHill,
  imgIllusDogFetch,
  imgIllustration,
  imgKv2Image,
  imgKv2ImageMobile,
  imgLeft,
  imgLogoSimple,
  imgMainImage,
  imgNavChildRadius,
  imgPassStar,
  imgPawsRecruitMobile,
  imgPawsRecruitPc,
  imgPdfDownload,
  imgPet1,
  imgPet2,
  imgPet3,
  imgPetAvatar,
  imgPetCardBg,
  imgPetCardBgMobile,
  imgPetLeft,
  imgPetPhoto1,
  imgPetPhoto10,
  imgPetPhoto11,
  imgPetPhoto12,
  imgPetPhoto2,
  imgPetPhoto2x,
  imgPetPhoto3,
  imgPetPhoto4,
  imgPetPhoto5,
  imgPetPhoto6,
  imgPetPhoto7,
  imgPetPhoto8,
  imgPetPhoto9,
  imgPetRight,
  imgPetStar,
  imgPets,
  imgPetsMobile,
  imgQuestion1,
  imgQuestion2,
  imgQuestion3,
  imgRight,
  imgStory,
  imgSubtitleLeft,
  imgSubtitleRight,
  imgSubtract,
  imgSubtractMb,
  imgSuccessCheck,
  imgTermsHeroMobile,
  imgTermsHeroPc,
  imgWaveMobile,
  imgWavePc,
  kvArrowLeft,
  kvArrowLeftSolid,
  kvArrowRight,
  kvCardAnswer,
  kvCardQuestion,
  kvControlBtnLeft,
  kvControlBtnRight,
  kvCorner,
  kvIllustration,
  kvPetStar,
  kvSubtract,
  kvSubtractMb,
  kvWith,
  sysError,
  sysSuccess,
  sysWarning,
  tagVariants,
  useAutoExpand,
  useIntersectionObserver
};
//# sourceMappingURL=index.mjs.map