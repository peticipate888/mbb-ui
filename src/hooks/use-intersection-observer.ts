"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseIntersectionObserverOptions {
  rootMargin?: string;
  threshold?: number;
  delay?: number;
  className?: string;
}

/**
 * Replicates useAnimate.ts from the original MBB site.
 * Observes when an element enters the viewport and adds a CSS class
 * (e.g., 'sketch-in' for SVG doodle stroke animations).
 *
 * @param options.rootMargin - Default: '-25% 0px -25% 0px'
 * @param options.threshold - Default: 0
 * @param options.delay - Delay before adding class (ms). Default: 500
 * @param options.className - CSS class to add. Default: 'sketch-in'
 */
function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
): { ref: RefObject<T | null>; isVisible: boolean } {
  const {
    rootMargin = "-25% 0px -25% 0px",
    threshold = 0,
    delay = 500,
    className = "sketch-in",
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect prefers-reduced-motion
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

export { useIntersectionObserver };
