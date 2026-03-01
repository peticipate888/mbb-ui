"use client";
import { useRef, useCallback } from "react";
import { cn } from "../utils/cn";

interface MbbTabsProps {
  variant?: "pill" | "underline";
  items: { key: string; label: string }[];
  activeKey: string;
  onChange: (key: string) => void;
  scrollable?: boolean;
  className?: string;
}

function MbbTabs({ variant = "pill", items, activeKey, onChange, scrollable, className }: MbbTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" });
  }, []);

  const tabClass = variant === "pill" ? "tab-pill" : "tab-underline";
  const containerClass = variant === "underline" ? "tab-underline-container" : "";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {scrollable && (
        <button onClick={() => scroll("left")} className="shrink-0 p-1 cursor-pointer" aria-label="向左捲動">
          <img src="/images/assets/icon-arrow-left.svg" alt="" className="h-4 w-4" />
        </button>
      )}
      <div
        ref={scrollRef}
        className={cn("flex gap-0 overflow-x-auto scrollbar-hide", containerClass, !scrollable && variant === "pill" && "gap-3")}
        role="tablist"
      >
        {items.map((item) => (
          <button
            key={item.key}
            role="tab"
            aria-selected={item.key === activeKey}
            onClick={() => onChange(item.key)}
            className={cn(tabClass, item.key === activeKey && "active", "whitespace-nowrap")}
          >
            {item.label}
          </button>
        ))}
      </div>
      {scrollable && (
        <button onClick={() => scroll("right")} className="shrink-0 p-1 cursor-pointer" aria-label="向右捲動">
          <img src="/images/assets/icon-arrow-right.svg" alt="" className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export { MbbTabs };
