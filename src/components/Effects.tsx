"use client";

import { useEffect } from "react";

// Page-wide effects: scroll reveal, number counters, header shadow, scroll progress,
// and closing the mobile menu after a link is tapped.
export function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    const counters = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        counters.unobserve(el);
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? "";
        if (reduce) { el.textContent = target + suffix; continue; }
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1400, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => counters.observe(el));

    const header = document.querySelector(".header");
    const bar = document.querySelector<HTMLElement>(".progress");
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 10);
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const menu = document.querySelector("details.mobile-menu");
    const closeMenu = () => menu?.removeAttribute("open");
    const links = document.querySelectorAll(".mobile-menu a");
    links.forEach((a) => a.addEventListener("click", closeMenu));

    return () => {
      reveal.disconnect();
      counters.disconnect();
      window.removeEventListener("scroll", onScroll);
      links.forEach((a) => a.removeEventListener("click", closeMenu));
    };
  }, []);

  return null;
}
