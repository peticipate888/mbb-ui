"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface MbbAosWrapperProps {
  children: React.ReactNode;
}

function MbbAosWrapper({ children }: MbbAosWrapperProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      disable: prefersReducedMotion,
    });

    return () => {
      // Clean up AOS observers on unmount
      const aosElements = document.querySelectorAll("[data-aos]");
      aosElements.forEach((el) => {
        el.removeAttribute("data-aos");
      });
    };
  }, []);

  return <>{children}</>;
}

export { MbbAosWrapper };
