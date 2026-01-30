"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitInLine } from "../splitTextUtils";

gsap.registerPlugin(ScrollTrigger);

export function headingAnim() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headings = gsap.utils.toArray(".headingAnim");

      headings.forEach((el) => {
        // ✅ hide before split to avoid flash
        gsap.set(el, { autoAlpha: 0 });

        // ✅ split once
        if (!el.dataset.splitDone) {
          SplitInLine(el);
          el.dataset.splitDone = "1";
        }

        const lines = el.querySelectorAll(".line-internal");
        if (!lines.length) {
          // if splitting failed, at least show it
          gsap.set(el, { autoAlpha: 1 });
          return;
        }

        // ✅ initial state
        gsap.set(lines, { maskPosition: "100% 100%" });

        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.set(el, { autoAlpha: 1 });

            gsap.to(lines, {
              maskPosition: "0% 100%",
              stagger: 0.2,
              duration: 5.5,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}

export function fadeUp() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".fadeup");

      // ✅ pre-set hidden state (prevents flicker)
      gsap.set(items, { autoAlpha: 0, y: 50 });

      // ✅ one batched trigger instead of N triggers
      ScrollTrigger.batch(items, {
        start: "top 90%",
        once: true,
        batchMax: 8, // tune: how many animate together
        interval: 0.1, // group arrivals
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            duration: 2,
            stagger: 0.08,
            overwrite: "auto",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);
}

export function lineAnim() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".lineDraw");

      // ✅ initial state
      gsap.set(lines, {
        scaleX: 0,
        yPercent: 100,
        transformOrigin: "left",
        // don't hide lines completely (optional)
        autoAlpha: 1,
      });

      // ✅ batch these too
      ScrollTrigger.batch(lines, {
        start: "top 80%",
        once: true,
        batchMax: 12,
        interval: 0.1,
        onEnter: (batch) => {
          gsap.to(batch, {
            scaleX: 1,
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.06,
            overwrite: "auto",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);
}