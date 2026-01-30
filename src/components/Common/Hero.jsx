"use client";

import React, { useRef, memo, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import { initSplit, SplitInLineOnly } from "../splitTextUtils";
import { fadeUp, headingAnim, lineAnim } from "@/components/Animations/gsapAnimations";
import BreadCrumbs from "./HeroComponents/BreadCrumbs";

gsap.registerPlugin(SplitText);

const OldHero = memo(function Hero({ heroData, breadcrumbs }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const subheadingRef = useRef(null);
  const imgWrapRef = useRef(null);
  const btnsRef = useRef(null);
  const shaderRef = useRef(null);
  const mobileGradientRef = useRef(null);

  const [mob, setMob] = useState(false);

  const [hasVisited, setHasVisited] = useState(() => {
    if (typeof window !== "undefined") {
      return !!sessionStorage.getItem("hasVisited");
    }
    return false;
  });

  // ✅ prefers-reduced-motion (skip heavy animation)
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ✅ mobile detect (no re-render loop)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 1024px)");
    const update = () => setMob(mq.matches);

    update();

    // Safari fallback: addListener/removeListener
    if (mq.addEventListener) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else {
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  // ✅ run these only once (you had them running every render)
    headingAnim();
    fadeUp();
    lineAnim();
    // eslint-disable-next-line react-hooks/exhaustive-deps

  // helper: flip any aria-hidden="true" descendants to false
  const forceAriaVisible = (root) => {
    if (!root) return;
    root
      .querySelectorAll('[aria-hidden="true"]')
      .forEach((n) => n.setAttribute("aria-hidden", "false"));
  };
 
  // ✅ Fonts-ready gate + split/GSAP inside a single, controlled lifecycle
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    // If reduced motion: make everything visible and exit early.
    if (prefersReducedMotion) {
      gsap.set(".hero-overlay", { opacity: 0 });
      gsap.set([headingRef.current, paraRef.current, subheadingRef.current], { opacity: 1 });
      gsap.set(imgWrapRef.current, { opacity: 1, yPercent: 0 });
      if (breadcrumbs) gsap.set(".breadcrumbs", { opacity: 1, y: 0 });
      if (btnsRef.current) {
        gsap.set(btnsRef.current.querySelectorAll(".ctaBtn"), { opacity: 1, y: 0 });
      }
      return;
    }

    let cancelled = false;

    const run = async () => {
      // ✅ wait for fonts to load BEFORE SplitText so line breaks are stable
      try {
        if (typeof document !== "undefined" && document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {
        // ignore
      }

      // ✅ allow one paint after fonts apply (reduces layout thrash)
      await new Promise((r) => requestAnimationFrame(() => r()));

      if (cancelled) return;

      // base states
      gsap.set(".hero-overlay", { opacity: 0 });
      gsap.set([headingRef.current, paraRef.current, subheadingRef.current], { opacity: 0 });

      initSplit();
      if (!headingRef.current) return;

      const ctx = gsap.context(() => {
        // ---- SPLITS ----
        // heading split to lines (your util)
        SplitInLineOnly(headingRef.current);
        const lines = headingRef.current.querySelectorAll(".line");

        // paragraph + subheading split
        const splitPara = paraRef.current
          ? new SplitText(paraRef.current, { type: "lines", mask: "lines" })
          : null;

        const splitSubHeading = subheadingRef.current
          ? new SplitText(subheadingRef.current, { type: "lines", mask: "lines" })
          : null;

        // accessibility: keep aria visible
        forceAriaVisible(headingRef.current);

        if (splitPara) {
          forceAriaVisible(paraRef.current);
          splitPara.lines.forEach((l) => l.setAttribute("aria-hidden", "false"));
        }

        if (splitSubHeading) {
          forceAriaVisible(subheadingRef.current);
          splitSubHeading.lines.forEach((l) => l.setAttribute("aria-hidden", "false"));
        }

        // ---- TIMINGS ----
        const delayLines = hasVisited ? 0.7 : 4.8;
        const delayPara = hasVisited ? 1.8 : 5.9;
        const ctaDelay = hasVisited ? 2 : 6.1;

        // reveal opacity right before animation begins
        gsap.to([headingRef.current, paraRef.current, subheadingRef.current], {
          opacity: 1,
          duration: 0.01,
          delay: Math.min(delayLines, delayPara) - 0.05,
        });

        // heading mask animation
        gsap.fromTo(
          lines,
          { maskPosition: "100% 100%" },
          {
            maskPosition: "0% 100%",
            delay: delayLines,
            stagger: 0.2,
            duration: 7,
            ease: "power2.out",
            onStart: () => forceAriaVisible(headingRef.current),
            onComplete: () => forceAriaVisible(headingRef.current),
          }
        );

        // paragraph lines slide up
        if (splitPara) {
          gsap.from(splitPara.lines, {
            yPercent: 100,
            delay: delayPara,
            duration: 1.4,
            stagger: 0.04,
            ease: "power3.out",
            onStart: () => forceAriaVisible(paraRef.current),
            onComplete: () => forceAriaVisible(paraRef.current),
          });
        }

        // subheading lines slide up
        if (splitSubHeading) {
          gsap.from(splitSubHeading.lines, {
            yPercent: 100,
            delay: delayPara,
            duration: 1.4,
            stagger: 0.04,
            ease: "power3.out",
            onStart: () => forceAriaVisible(subheadingRef.current),
            onComplete: () => forceAriaVisible(subheadingRef.current),
          });
        }

        // mobile gradient fade
        if (mobileGradientRef.current) {
          gsap.fromTo(
            mobileGradientRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3, delay: 1.5, ease: "power3.out" }
          );
        }

        // shader fade (kept for when you un-comment later)
        if (shaderRef.current) {
          gsap.fromTo(
            shaderRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3, delay: 1.5, ease: "power3.out" }
          );
        }

        // hero image float-in
        if (imgWrapRef.current) {
          gsap.fromTo(
            imgWrapRef.current,
            { yPercent: 80, opacity: 0 },
            {
              opacity: 1,
              yPercent: 0,
              duration: 1.5,
              delay: hasVisited ? 1.8 : 5.9,
              ease: "power3.out",
            }
          );
        }

        // breadcrumbs
        if (breadcrumbs) {
          gsap.set(".breadcrumbs", { opacity: 1 });
          gsap.fromTo(
            ".breadcrumbs",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.5 }
          );
        }

        // CTA buttons
        if (btnsRef.current) {
          const items = btnsRef.current.querySelectorAll(".ctaBtn");
          gsap.fromTo(
            items,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: ctaDelay,
              stagger: 0.12,
              ease: "power3.out",
              onStart: () => forceAriaVisible(btnsRef.current),
            }
          );
        }

        // ✅ cleanup split instances explicitly
        return () => {
          if (splitPara) splitPara.revert();
          if (splitSubHeading) splitSubHeading.revert();
        };
      }, sectionRef);

      return () => ctx.revert();
    };

    let cleanup;
    run().then((c) => {
      cleanup = c;
    });

    return () => {
      cancelled = true;
      if (typeof cleanup === "function") cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroData?.homepage, prefersReducedMotion, hasVisited, breadcrumbs]);

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-screen w-screen relative bg-background max-md:h-screen max-md:px-[7vw] z-[10]"
        id="hero"
      >
        <div className="flex flex-col items-center justify-start w-full h-full pt-[30vh] relative z-[12] max-md:pt-[15vh] content-container">
          <div
            className={`text-center space-y-6 pb-5 max-md:w-[100%] max-md:space-y-[7vw] ${
              heroData.headingWidth || "w-[70%]"
            }`}
          >
            <h1 ref={headingRef} className="text-100 font-head heroHeadAnim text-[#E8E8E8]">
              {heroData.heading}
            </h1>

            {heroData.img ? (
              <div
                ref={imgWrapRef}
                className="h-auto w-[20vw] mx-auto max-sm:w-[60vw] max-md:w-[45vw] will-change-transform will-change-opacity"
              >
                <Image
                  src={heroData.img}
                  height={46}
                  width={297}
                  alt="insurance"
                  className="h-full w-full object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 28vw, 16vw"
                  priority={!!heroData.homepage}
                />
              </div>
            ) : null}

            {heroData.subheading && (
              <p ref={subheadingRef} className="text-[#CACACA] font-head mx-auto overflow-hidden text-50">
                {heroData.subheading}
              </p>
            )}

            <p
              ref={paraRef}
              className={`text-[#CACACA] font-head mx-auto overflow-hidden ${
                heroData.paraClass ? heroData.paraClass : "w-full"
              }`}
            >
              {heroData.para}
            </p>

            <div
              ref={btnsRef}
              className={`flex items-center justify-center gap-6 mt-10 max-md:flex-col max-sm:gap-[5vw] ${
                heroData.hidebtn ? "hidden" : "flex"
              }`}
            >
              {/* Primary */}
              <div className="ctaBtn">
                <PrimaryButton
                  href={heroData.link1 || "#"}
                  text={heroData.btnText1}
                  openModalKey={heroData.openModalKey}
                  className="max-md:min-w-[20vw] max-sm:min-w-[55vw]"
                  onClick={(e) => {
                    if (!heroData.walkthrough) return;

                    const href = heroData.link1 || "#";
                    if (typeof href === "string" && href.startsWith("#")) {
                      e.preventDefault();
                      const id = href.slice(1);
                      document.getElementById(id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                />
              </div>

              {/* Secondary / White */}
              {heroData.btnText2 && (
                <div className="ctaBtn">
                  <WhiteButton
                    target={heroData.target ? "_blank" : ""}
                    href={heroData.link2 || "#"}
                    text={heroData.btnText2}
                    className="max-md:min-w-[20vw] max-sm:min-w-[55vw]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {breadcrumbs && <BreadCrumbs />}

        {/* Animated Vertical Lines (desktop only) */}

        {/* Shader (desktop) */}
        {!mob ? (
          <>
            {/* <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] max-md:hidden bg-lines  ">
              {lineDelays.map((d, i) => (
                <AnimatedLine key={i} delay={d} />
              ))}
            </div> */}
            {/* <div
              ref={shaderRef}
              className="absolute top-[30%] left-0 h-screen w-screen max-md:hidden shader-container "
            >
              <Suspense>
                <DynamicShaderComp />
              </Suspense>
            </div> */}
          </>
        ) : (
          <div
            ref={mobileGradientRef}
            className="w-screen h-[100vh] absolute top-0 z-[5] left-0 hidden max-md:block"
          >
            <Image
              src={"/assets/images/homepage/gradient-mobile.png"}
              fetchPriority="high"
              priority={true}
              alt="shader-gradient-mobile"
              className="w-full h-full object-cover"
              width={300}
              height={580}
            />
          </div>
        )}

        {/* ✅ overlay INSIDE section so absolute positioning doesn't mess with layout */}
        <div className="absolute inset-0 bg-background z-[9999] hero-overlay pointer-events-none opacity-100" />
      </section>
    </>
  );
});

export default OldHero;