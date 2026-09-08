"use client";

import { useEffect, useState } from "react";

export const SECTIONS = [
  { id: "hero", label: "home" },
  { id: "about", label: "skills" },
  { id: "projects", label: "repos" },
  { id: "journey", label: "git log" },
  { id: "badges", label: "badges" },
  { id: "contact", label: "contact" },
];

export function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}
