"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";

/**
 * Auto-expand textarea to fit content.
 * Replicates the TextInput.vue auto-expand behavior from the original MBB site.
 * Monitors scrollHeight and dynamically adjusts element height.
 */
function useAutoExpand<T extends HTMLTextAreaElement = HTMLTextAreaElement>(): {
  ref: RefObject<T | null>;
  adjustHeight: () => void;
} {
  const ref = useRef<T | null>(null);

  const adjustHeight = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    // Reset height to auto so we can measure scrollHeight correctly
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial adjustment
    adjustHeight();

    // Listen for input events (covers programmatic changes too)
    el.addEventListener("input", adjustHeight);
    return () => el.removeEventListener("input", adjustHeight);
  }, [adjustHeight]);

  return { ref, adjustHeight };
}

export { useAutoExpand };
