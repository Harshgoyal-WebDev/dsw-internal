"use client";

import { useEffect } from "react";
import { SplitInLine } from "../splitTextUtils";

// small helper: defer heavy work (cuts TBT)
function defer(cb) {
  if (typeof window === "undefined") return;
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(cb, { timeout: 1500 });
    return () => window.cancelIdleCallback(id);
  }
  const t = window.setTimeout(cb, 0);
  return () => window.clearTimeout(t);
}

// lazy-load gsap + ScrollTrigger only when needed
async function loadGsap() {
  const gsapMod = await import("gsap");
  const stMod = await import("gsap/ScrollTrigger");

  const gsap = gsapMod.gsap || gsapMod.default || gsapMod;
  const ScrollTrigger = stMod.ScrollTrigger || stMod.default;

  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
}

export function useGsapScrollAnims({
  root, // optional ref: pass a container to scope queries
  enabled = true,
} = {}) {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    // respect reduced motion
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let cleanupDefer;
    let killed = false;
    let ctx;

    cleanupDefer = defer(async () => {
      if (killed) return;

      const { gsap, ScrollTrigger } = await loadGsap();
      if (killed) return;

      // batch reduces ScrollTrigger overhead (less work than 1 per node)
      const container = root?.current || document;

      ctx = gsap.context(() => {
        // ---------- HEADING MASK (Split) ----------
        const headings = container.querySelectorAll(".headingAnim");
        headings.forEach((el) => {
          // Split only once per element
          if (!el.dataset.splitDone) {
            SplitInLine(el);
            el.dataset.splitDone = "1";
          }

          const lines = el.querySelectorAll(".line-internal");
          if (!lines.length) return;

          // Create ONE ScrollTrigger per heading (not per line)
          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true, // important: don’t keep triggers alive
            onEnter: () => {
              gsap.fromTo(
                lines,
                { maskPosition: "100% 100%" },
                {
                  maskPosition: "0% 100%",
                  stagger: 0.2,
                  duration: 5.5,
                  ease: "power3.out",
                  overwrite: "auto",
                },
              );
            },
          });
        });

        // ---------- FADE UP (batch) ----------
        ScrollTrigger.batch(container.querySelectorAll(".fadeup"), {
          start: "top 90%",
          once: true,
          onEnter: (batch) => {
            gsap.from(batch, {
              opacity: 0,
              y: 50,
              ease: "power3.out",
              duration: 2,
              stagger: 0.08,
              overwrite: "auto",
            });
          },
        });

        // ---------- LINE DRAW (batch) ----------
        ScrollTrigger.batch(container.querySelectorAll(".lineDraw"), {
          start: "top 80%",
          once: true,
          onEnter: (batch) => {
            gsap.from(batch, {
              scaleX: 0,
              transformOrigin: "left",
              duration: 1,
              yPercent: 100,
              stagger: 0.07,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
        });

        // optional perf: compute immediately after setup (less mid-scroll cost)
        ScrollTrigger.refresh();
      }, root?.current || document.body);
    });

    return () => {
      killed = true;
      if (typeof cleanupDefer === "function") cleanupDefer();
      if (ctx) ctx.revert();

      // If ScrollTrigger was loaded, kill all triggers created in this context
      // (ctx.revert() usually handles it, but this is extra-safe)
      // Note: we can’t reference ScrollTrigger here unless loaded, so ctx.revert is main cleanup.
    };
  }, [enabled, root]);
}