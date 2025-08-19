"use client";

import { useEffect } from "react";

export function useArrowNavigation(
  container: HTMLElement | null,
  sectionIds: string[]
) {
  useEffect(() => {
    if (!container || !Array.isArray(sectionIds) || sectionIds.length === 0) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      event.preventDefault();

      const containerRect = container.getBoundingClientRect();
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));
      if (sections.length === 0) return;

      const nearest = sections
        .map((el, idx) => ({
          idx,
          distance: Math.abs(
            el.getBoundingClientRect().top - containerRect.top
          ),
        }))
        .sort((a, b) => a.distance - b.distance)[0];
      const currentIndex = nearest ? nearest.idx : 0;

      const targetIndex =
        event.key === "ArrowDown"
          ? Math.min(currentIndex + 1, sections.length - 1)
          : Math.max(currentIndex - 1, 0);
      if (targetIndex === currentIndex) return;

      sections[targetIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [container, sectionIds]);
}
