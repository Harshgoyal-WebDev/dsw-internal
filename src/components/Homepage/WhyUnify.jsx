"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import WhiteButton from "../Button/WhiteButton";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const WhyUnify = () => {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);

  const contentRefs = useRef([]);
  contentRefs.current = [];

  const svgCircleRefs = useRef([]);
  svgCircleRefs.current = [];

  const tagRefs = useRef([]);
  tagRefs.current = [];

  const timelineRef = useRef(null);

  // flag to disable snap during programmatic scrolls (tag clicks)
  const isClickScrollingRef = useRef(false);

  const addToContentRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) contentRefs.current.push(el);
  };
  const addToCircleRefs = (el) => {
    if (el && !svgCircleRefs.current.includes(el))
      svgCircleRefs.current.push(el);
  };
  const addToTagRefs = (el) => {
    if (el && !tagRefs.current.includes(el)) tagRefs.current.push(el);
  };

  // Helper: toggle pointer-events based on active step
  const setActiveStep = (activeIndex) => {
    contentRefs.current.forEach((el, i) => {
      const isActive = i === activeIndex;
      // Tailwind class toggles (for clarity in devtools)
      el.classList.toggle("pointer-events-auto", isActive);
      el.classList.toggle("pointer-events-none", !isActive);
      // Inline style (GSAP friendly + guarantees behavior)
      gsap.set(el, { pointerEvents: isActive ? "auto" : "none" });
      // Optional a11y hint
      // el.setAttribute("aria-hidden", isActive ? "false" : "true");
    });
  };

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const rafId = requestAnimationFrame(() => {
      const isHidden = () => {
        const el = sectionRef.current;
        const style = window.getComputedStyle(el);
        return style.display === "none" || style.visibility === "hidden";
      };
      if (isHidden()) return;

      const ctx = gsap.context(() => {
        const steps = Math.max(1, contentRefs.current.length - 1);

        timelineRef.current = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "10% 10%",
            end: "+=2000",
            scrub: 1,
            // CONDITIONAL SNAP: disable when programmatic click scrolling
            snap: (value) => {
              if (isClickScrollingRef.current) return value; // no snap
              const total = contentRefs.current.length;
              const stepCount = Math.max(1, total - 1);
              return Math.round(value * stepCount) / stepCount;
            },
            onUpdate: (self) => {
              const progress = self.progress;
              const totalSteps = contentRefs.current.length;
              const stepsLocal = Math.max(1, totalSteps - 1);

              // ---- Active step detection → pointer-events toggle ----
              const activeIndex = Math.round(progress * stepsLocal);
              setActiveStep(activeIndex);

              // Circles fill continuously with progress
              svgCircleRefs.current.forEach((circle, i) => {
                const threshold = i / stepsLocal - 0.01; // slight bias
                const isReached = progress >= threshold - 1e-6;
                gsap.to(circle, {
                  fill: isReached ? "#1626FD" : "#f8f8f8",
                  duration: 0.2,
                  overwrite: true,
                });
              });

              // Tags color when their threshold is reached (same rule as circles)
              tagRefs.current.forEach((tag, i) => {
                const threshold = i / stepsLocal - 0.01;
                const isReached = progress >= threshold - 1e-6;
                gsap.to(tag, {
                  color: isReached ? "#1626FD" : "rgba(0,0,0,0.5)",
                  duration: 0.2,
                  overwrite: true,
                });
                // optional a11y state
                tag.setAttribute("aria-pressed", isReached ? "true" : "false");
              });
            },
          },
        });

        // --- PROGRESS LINE LENGTH (safe) ---
        const lineEl = progressLineRef.current;
        const safeGetTotalLength = () => {
          if (!lineEl) return 0;
          try {
            if (typeof lineEl.getTotalLength === "function") {
              const len = lineEl.getTotalLength();
              if (Number.isFinite(len) && len > 0) return len;
            }
          } catch (_) {}
          const x1 = parseFloat(lineEl.getAttribute("x1") || "0");
          const y1 = parseFloat(lineEl.getAttribute("y1") || "0");
          const x2 = parseFloat(lineEl.getAttribute("x2") || "0");
          const y2 = parseFloat(lineEl.getAttribute("y2") || "0");
          return Math.hypot(x2 - x1, y2 - y1);
        };

        const totalLength = safeGetTotalLength();
        const segmentLength = totalLength / steps;

        if (lineEl && totalLength > 0) {
          gsap.set(lineEl, {
            strokeDasharray: totalLength,
            strokeDashoffset: totalLength,
          });
        }

        // Initial states
        if (contentRefs.current[0]) {
          gsap.set(contentRefs.current[0], { opacity: 1, y: 0, zIndex: 1 });
        }
        // Ensure pointer-events start state
        setActiveStep(0);

        svgCircleRefs.current.forEach((circle, i) => {
          gsap.set(circle, { fill: i === 0 ? "#1626FD" : "#f8f8f8" });
        });
        tagRefs.current.forEach((tag, i) => {
          gsap.set(tag, { color: i === 0 ? "#1626FD" : "rgba(0,0,0,0.5)" });
          tag.style.cursor = "pointer";
          tag.setAttribute("role", "button");
          tag.setAttribute("tabIndex", "0");
        });

        // Timeline step-to-step transitions
        for (let i = 1; i < contentRefs.current.length; i++) {
          const currentOffset = totalLength - segmentLength * i;

          if (lineEl && totalLength > 0) {
            timelineRef.current.to(lineEl, {
              strokeDashoffset: currentOffset,
              duration: 1,
              ease: "none",
            });
          }

          timelineRef.current.to(
            contentRefs.current[i - 1],
            {
              opacity: 0,
              y: -50,
              zIndex: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
            "<"
          );

          timelineRef.current.fromTo(
            contentRefs.current[i],
            { opacity: 0, y: 50, zIndex: 0 },
            {
              opacity: 1,
              zIndex: 2,
              y: 0,
              duration: 0.5,
              ease: "power2.inOut",
              delay: 0.5,
            },
            "<"
          );
        }

        // TAG CLICK HANDLERS -> programmatic scroll (no snap)
        const removeFns = [];
        tagRefs.current.forEach((tag, i) => {
          const onClick = () => {
            const st = timelineRef.current?.scrollTrigger;
            if (!st) return;
            const start = st.start;
            const end = st.end;
            const stepCount = Math.max(1, contentRefs.current.length - 1);
            const target = start + (end - start) * (i / stepCount) - 1;

            isClickScrollingRef.current = true;
            gsap.to(window, {
              duration: 0.8,
              ease: "power2.inOut",
              scrollTo: target,
              onComplete: () => {
                // let ScrollTrigger update pointer-events via onUpdate
                setTimeout(() => (isClickScrollingRef.current = false), 50);
              },
            });
          };

          const onKey = (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onClick();
            }
          };

          tag.addEventListener("click", onClick);
          tag.addEventListener("keydown", onKey);
          removeFns.push(() => {
            tag.removeEventListener("click", onClick);
            tag.removeEventListener("keydown", onKey);
          });
        });

        // store cleanup
        sectionRef.current.__cleanupTagHandlers = () =>
          removeFns.forEach((f) => f());
      }, sectionRef);

      const cleanupGsap = () => {
        sectionRef.current?.__cleanupTagHandlers?.();
        ctx.revert();
        if (timelineRef.current) {
          timelineRef.current.scrollTrigger?.kill();
          timelineRef.current.kill();
          timelineRef.current = null;
        }
      };

      sectionRef.current.__cleanupGsap = cleanupGsap;
    });

    return () => {
      cancelAnimationFrame(rafId);
      sectionRef.current?.__cleanupGsap?.();
    };
  }, []);

  const handleSkip = () => {
    const next = document.getElementById("enterpriseAI");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="h-[400vh] w-screen relative bg-[#f8f8f8] z-[10] max-md:hidden"
      ref={sectionRef}
      id="WhyUnify"
    >
      <div className="flex flex-col items-center w-full pb-[7vw] space-y-30 px-10 sticky h-screen top-[10%] z-[2]">
        <div className="space-y-24 w-full">
          <h3 className="text-60 text-primary-1 text-center font-light headingAnim">
            Why DSW UnifyAI is the OS for AI?
          </h3>

          <div className="w-full flex items-start justify-between fadeup">
            {/* Left: SVG navigation with progress indicator */}
            <div className="flex w-[20%] gap-5">
              <div>
                <svg
                  width="16"
                  height="319"
                  viewBox="0 0 16 319"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* static gray line */}
                  <line
                    x1="8.08081"
                    y1="7.56641"
                    x2="8.08082"
                    y2="310.975"
                    stroke="#939393"
                    strokeOpacity="0.46"
                    strokeWidth="1"
                  />
                  {/* animated blue progress line */}
                  <line
                    x1="8.08081"
                    y1="7.56641"
                    x2="8.08082"
                    y2="310.975"
                    stroke="#1626FD"
                    strokeWidth="1"
                    ref={progressLineRef}
                  />
                  <circle
                    cx="7.5808"
                    cy="7.56615"
                    r="6.5681"
                    fill="#f8f8f8"
                    stroke="#1626FD"
                    ref={addToCircleRefs}
                  />
                  <circle
                    cx="7.5808"
                    cy="108.702"
                    r="7.0681"
                    fill="#f8f8f8"
                    stroke="#1626FD"
                    ref={addToCircleRefs}
                  />
                  <circle
                    cx="7.5808"
                    cy="209.838"
                    r="7.0681"
                    fill="#f8f8f8"
                    stroke="#1626FD"
                    ref={addToCircleRefs}
                  />
                  <circle
                    cx="7.5808"
                    cy="310.975"
                    r="7.0681"
                    fill="#f8f8f8"
                    stroke="#1626FD"
                    ref={addToCircleRefs}
                  />
                </svg>
              </div>

              {/* Tags */}
              <div className="text-black/50 space-y-[7vh] mt-[-0.3vh] text-[1vw] font-light">
                <p className="tags" ref={addToTagRefs}>
                  End-to-End AI Lifecycle Management
                </p>
                <p className="w-[45%] tags" ref={addToTagRefs}>
                  Multi-Model AI Support
                </p>
                <p className="tags" ref={addToTagRefs}>
                  Seamless <br /> Enterprise Integration
                </p>
                <p className="w-[45%] tags" ref={addToTagRefs}>
                  Scalable Infrastructure
                </p>
              </div>
            </div>

            {/* Middle: Images */}
            <div className="w-[30%] flex flex-col gap-[1.5vw]">
              <div className="rounded-2xl overflow-hidden h-fit w-fit">
                <Image
                  src="/assets/images/homepage/whyunify/unify-dashboard-1.png"
                  height={390}
                  width={382}
                  className="h-[14vw] w-[16vw] object-cover"
                  alt="unify-ai-graph"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-fit w-fit ml-[7vw]">
                <Image
                  src="/assets/images/homepage/whyunify/unify-dashboard-2.png"
                  height={247}
                  width={283}
                  className="h-[13vw] w-[15vw] object-cover"
                  alt="unify-ai-dashboard"
                />
              </div>
            </div>

            {/* Right: Content Blocks */}
            <div className="w-[40vw] relative">
              <div
                ref={addToContentRefs}
                className="step-block absolute top-20 left-0 pointer-events-auto"
              >
                <h3 className="text-50 text-black font-head ">
                  The Freedom to Own AI
                </h3>
                <p className="text-black content-p w-[88%] py-8">
                  The power of OpenAI, but entirely inside your infrastructure
                  with your data, your compliance, and your governance.
                </p>
                <WhiteButton
                  background="border-primary-2 border bg-transparent hover:bg-transparent"
                  circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
                  text="Know More"
                  href="/unify"
                  className="hover:text-primary-2 text-primary-2 "
                />
              </div>

              <div
                ref={addToContentRefs}
                className="step-block absolute top-20 left-0 pointer-events-none"
              >
                <h3 className="text-50 text-black font-head ">
                  Unified AI Lifecycle
                </h3>
                <p className="text-black content-p w-[88%] py-8">
                  One platform for the full journey from data to deployment to
                  continuous learning, eliminating silos and execution gaps.
                </p>
                <WhiteButton
                  background="border-primary-2 border bg-transparent hover:bg-transparent"
                  circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
                  text="Know More"
                  href="/unify"
                  className="hover:text-primary-2 text-primary-2"
                />
              </div>

              <div
                ref={addToContentRefs}
                className="step-block absolute top-20 left-0 pointer-events-none"
              >
                <h3 className="text-50 text-black font-head ">
                  Governance by Design
                </h3>
                <p className="text-black content-p w-[88%] py-8">
                  Security, compliance, and trust baked in with role-based
                  access, explainability, audit trails, and approval workflows.
                </p>
                <WhiteButton
                  background="border-primary-2 border bg-transparent hover:bg-transparent"
                  circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
                  text="Know More"
                  href="/unify"
                  className="hover:text-primary-2 text-primary-2"
                />
              </div>

              <div
                ref={addToContentRefs}
                className="step-block absolute top-10 left-0 pointer-events-none"
              >
                <h3 className="text-50 text-black font-head ">
                  Sector-Agnostic, Vertically Accelerated
                </h3>
                <p className="text-black content-p w-[88%] py-8">
                  Supports enterprises across industries, combining a
                  sector-agnostic core with domain-focused accelerators to
                  deliver impact at scale.
                </p>
                <WhiteButton
                  background="border-primary-2 border bg-transparent hover:bg-transparent"
                  circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
                  text="Know More"
                  href="/unify"
                  className="hover:text-primary-2 text-primary-2"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center absolute right-10 bottom-50 fadeup">
            <button
              className="round px-6 py-2 rounded-full flex items-center cursor-pointer gap-2 text-black font-light hover:scale-95 text-[1vw] transition duration-500"
              onClick={handleSkip}
            >
              Skip
              <div className="-rotate-90 text-black flex items-center justify-center gap-0 w-[0.8vw] h-full max-sm:w-[3vw]">
                <svg
                  className="arrow primera next"
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="arrow segunda next"
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnify;

export const data = [
  {
    list: "End-to-End AI Lifecycle Management",
    title: "The Freedom to Own AI",
    para:
      "The power of OpenAI, but entirely inside your infrastructure with your data, your compliance, and your governance.",
    link: "#",
  },
  {
    list: "Multi-Model AI Support",
    title: "Unified AI Lifecycle",
    para:
      "One platform for the full journey from data to deployment to continuous learning, eliminating silos and execution gaps.",
    link: "#",
  },
  {
    list: "Seamless Enterprise Integration",
    title: "Governance by Design",
    para:
      "Security, compliance, and trust baked in with role-based access, explainability, audit trails, and approval workflows.",
    link: "#",
  },
  {
    list: "Scalable Infrastructure",
    title: "Sector-Agnostic, Vertically Accelerated",
    para:
      "Supports enterprises across industries, combining a sector-agnostic core with domain-focused accelerators to deliver impact at scale.",
    link: "#",
  },
];
