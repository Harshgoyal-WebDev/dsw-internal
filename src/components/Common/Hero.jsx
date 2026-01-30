"use client";

import React, {
  useRef,
  memo,
  useState,
  useEffect,
  useLayoutEffect,
  Suspense,
  useMemo,
} from "react";
import gsap from "gsap";
import Image from "next/image";
// import dynamic from "next/dynamic";

import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import { initSplit, SplitInLineOnly } from "../splitTextUtils";
import BreadCrumbs from "./HeroComponents/BreadCrumbs";
import AnimatedLine from "./HeroComponents/AnimatedLine";

// const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
//   ssr: false,
//   // ✅ don't let shader compete with LCP
//   loading: () => null,
// });

const LINE_COUNT = 4;

// ✅ helper: set aria-hidden=false for split wrappers (keeps accessibility)
function forceAriaVisible(root) {
  if (!root) return;
  root
    .querySelectorAll('[aria-hidden="true"]')
    .forEach((n) => n.setAttribute("aria-hidden", "false"));
}

// ✅ prefer reduced motion (no heavy split)
function getPrefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return (
    !!window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// ✅ run after first paint / (close to) idle to reduce TBT
function defer(cb) {
  if (typeof window === "undefined") return;
  // requestIdleCallback is best for TBT; fallback to rAF->timeout
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(
      () => cb(),
      { timeout: 2000 }, // don't starve forever
    );
    return () => window.cancelIdleCallback(id);
  }
  const raf = requestAnimationFrame(() => {
    const t = setTimeout(cb, 0);
    // cleanup
    return () => clearTimeout(t);
  });
  return () => cancelAnimationFrame(raf);
}

// ✅ SplitText is heavy: load it only when needed
async function loadSplitText() {
  const mod = await import("gsap/SplitText");
  return mod.SplitText || mod.default;
}

const OldHero = memo(function Hero({ heroData, breadcrumbs }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const subheadingRef = useRef(null);
  const imgWrapRef = useRef(null);
  const btnsRef = useRef(null);
  const shaderRef = useRef(null);
  const mobileGradientRef = useRef(null);
  const [enableShader, setEnableShader] = useState(false);
  const tlRef = useRef(null);
  const splitCleanupRef = useRef(null);

  const [mob, setMob] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 1024px)").matches;
  });
  const [enabledAnim, setEnabledAnim] = useState(false);

  const [hasVisited, setHasVisited] = useState(() => {
    if (typeof window !== "undefined") {
      return !!sessionStorage.getItem("hasVisited");
    }
    return false;
  });

  const prefersReducedMotion = useMemo(getPrefersReducedMotion, []);

  useEffect(() => {
    if (mob) return;
    const cleanup = defer(() => setEnableShader(true)); // same defer helper you already have
    return () => cleanup?.();
  }, [mob]);

  // ✅ mobile detect (no re-render loop)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 1024px)");
    const update = () => setMob(mq.matches);
    update();

    if (mq.addEventListener) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else {
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  // ✅ Defer enabling animations until after first paint/idle
  useEffect(() => {
    if (prefersReducedMotion) {
      setEnabledAnim(false);
      return;
    }
    const cleanup = defer(() => setEnabledAnim(true));
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, [prefersReducedMotion]);

  // ✅ If reduced motion, ensure things are visible immediately.
  // useLayoutEffect(() => {
  //   if (!sectionRef.current) return;
  //   if (!prefersReducedMotion) return;

  //   gsap.set(".hero-overlay", { opacity: 0 });
  //   gsap.set([headingRef.current, paraRef.current, subheadingRef.current], {
  //     opacity: 1,
  //   });
  //   gsap.set(imgWrapRef.current, { opacity: 1, yPercent: 0 });
  //   if (breadcrumbs) gsap.set(".breadcrumbs", { opacity: 1, y: 0 });
  //   if (btnsRef.current) {
  //     gsap.set(btnsRef.current.querySelectorAll(".ctaBtn"), {
  //       opacity: 1,
  //       y: 0,
  //     });
  //   }
  // }, [prefersReducedMotion, breadcrumbs]);

  // ✅ Main animation pipeline (deferred)
  useLayoutEffect(() => {
    if (!enabledAnim) return;
    if (!sectionRef.current) return;

    let cancelled = false;

    const run = async () => {
      // ✅ wait fonts to stabilize line breaks BEFORE splitting
      try {
        if (typeof document !== "undefined" && document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {}

      // ✅ one more paint for stability (reduces layout thrash)
      await new Promise((r) => requestAnimationFrame(() => r()));
      if (cancelled) return;

      // ✅ base states (overlay should NOT block LCP visually)
      gsap.set(".hero-overlay", { opacity: 0 });
      gsap.set([headingRef.current, paraRef.current, subheadingRef.current], {
        opacity: 0,
      });

      // initSplit might touch DOM, run once here
      initSplit();

      // ✅ Load SplitText only now (after idle/paint)
      const SplitText = await loadSplitText();
      if (cancelled) return;

      // ✅ Scope all selectors
      const ctx = gsap.context(() => {
        // ---- SPLITS ----
        if (!headingRef.current) return;

        SplitInLineOnly(headingRef.current);
        const lines = headingRef.current.querySelectorAll(".line");

        const splitPara = paraRef.current
          ? new SplitText(paraRef.current, { type: "lines", mask: "lines" })
          : null;

        const splitSub = subheadingRef.current
          ? new SplitText(subheadingRef.current, {
              type: "lines",
              mask: "lines",
            })
          : null;

        // accessibility fixes
        forceAriaVisible(headingRef.current);
        if (splitPara) {
          forceAriaVisible(paraRef.current);
          splitPara.lines.forEach((l) =>
            l.setAttribute("aria-hidden", "false"),
          );
        }
        if (splitSub) {
          forceAriaVisible(subheadingRef.current);
          splitSub.lines.forEach((l) => l.setAttribute("aria-hidden", "false"));
        }

        // ---- TIMINGS ----
        // keep your feel intact
        const delayLines = hasVisited ? 0.7 : 4.8;
        const delayPara = hasVisited ? 1.8 : 5.9;
        const ctaDelay = hasVisited ? 2 : 6.1;

        // ✅ one timeline (less overhead than many independent tweens)
        const tl = gsap.timeline();
        tlRef.current = tl;

        // reveal opacity right before
        tl.to(
          [headingRef.current, paraRef.current, subheadingRef.current],
          { opacity: 1, duration: 0.01 },
          Math.max(0, Math.min(delayLines, delayPara) - 0.05),
        );

        // heading lines mask animation
        tl.fromTo(
          lines,
          { maskPosition: "100% 100%" },
          {
            maskPosition: "0% 100%",
            stagger: 0.2,
            duration: 7,
            ease: "power2.out",
            onStart: () => forceAriaVisible(headingRef.current),
            onComplete: () => forceAriaVisible(headingRef.current),
          },
          delayLines,
        );

        // paragraph lines
        if (splitPara) {
          tl.from(
            splitPara.lines,
            {
              yPercent: 100,
              duration: 1.4,
              stagger: 0.04,
              ease: "power3.out",
              onStart: () => forceAriaVisible(paraRef.current),
              onComplete: () => forceAriaVisible(paraRef.current),
            },
            delayPara,
          );
        }

        // subheading lines
        if (splitSub) {
          tl.from(
            splitSub.lines,
            {
              yPercent: 100,
              duration: 1.4,
              stagger: 0.04,
              ease: "power3.out",
              onStart: () => forceAriaVisible(subheadingRef.current),
              onComplete: () => forceAriaVisible(subheadingRef.current),
            },
            delayPara,
          );
        }

        // mobile gradient fade
        if (mobileGradientRef.current) {
          tl.fromTo(
            mobileGradientRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3, ease: "power3.out" },
            1.5,
          );
        }

        // shader fade
        if (shaderRef.current) {
          tl.fromTo(
            shaderRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3, ease: "power3.out" },
            1.5,
          );
        }

        // hero image float in
        if (imgWrapRef.current) {
          tl.fromTo(
            imgWrapRef.current,
            { yPercent: 80, opacity: 0 },
            {
              opacity: 1,
              yPercent: 0,
              duration: 1.5,
              ease: "power3.out",
            },
            hasVisited ? 1.8 : 5.9,
          );
        }

        // breadcrumbs
        if (breadcrumbs) {
          tl.set(".breadcrumbs", { opacity: 1 }, 0);
          tl.fromTo(
            ".breadcrumbs",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            1.5,
          );
        }

        // CTA buttons
        if (btnsRef.current) {
          const items = btnsRef.current.querySelectorAll(".ctaBtn");
          tl.fromTo(
            items,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.12,
              ease: "power3.out",
            },
            ctaDelay,
          );
        }

        // ✅ Split revert cleanup stored
        splitCleanupRef.current = () => {
          splitPara?.revert();
          splitSub?.revert();
        };
      }, sectionRef);

      return () => {
        ctx.revert();
      };
    };

    let cleanupCtx;
    run().then((c) => {
      cleanupCtx = c;
    });

    return () => {
      cancelled = true;

      // kill timeline (prevents long tasks continuing on route change)
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }

      // revert splits
      if (splitCleanupRef.current) {
        splitCleanupRef.current();
        splitCleanupRef.current = null;
      }

      if (typeof cleanupCtx === "function") cleanupCtx();
    };
  }, [enabledAnim, breadcrumbs, hasVisited, prefersReducedMotion]);

  // ✅ memoized delays; keep same feel
  const lineDelays = useMemo(
    () =>
      Array.from({ length: LINE_COUNT }, (_, i) =>
        heroData?.homepage
          ? hasVisited
            ? 0.5 + i * 0.2
            : 5 + i * 0.2
          : 0.5 + i * 0.2,
      ),
    [heroData?.homepage, hasVisited],
  );

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
              heroData?.headingWidth || "w-[70%]"
            }`}
          >
            <h1
              ref={headingRef}
              className="text-100 font-head heroHeadAnim text-[#E8E8E8]"
            >
              {heroData?.heading}
            </h1>

            {heroData?.img ? (
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

            {heroData?.subheading && (
              <p
                ref={subheadingRef}
                className="text-[#CACACA] font-head mx-auto overflow-hidden text-50"
              >
                {heroData.subheading}
              </p>
            )}

            <p
              ref={paraRef}
              className={`text-[#CACACA] font-head mx-auto overflow-hidden ${
                heroData?.paraClass ? heroData.paraClass : "w-full"
              }`}
            >
              {heroData?.para}
            </p>

            <div
              ref={btnsRef}
              className={`flex items-center justify-center gap-6 mt-10 max-md:flex-col max-sm:gap-[5vw] ${
                heroData?.hidebtn ? "hidden" : "flex"
              }`}
            >
              <div className="ctaBtn">
                <PrimaryButton
                  href={heroData?.link1 || "#"}
                  text={heroData?.btnText1}
                  openModalKey={heroData?.openModalKey}
                  className="max-md:min-w-[20vw] max-sm:min-w-[55vw]"
                  onClick={(e) => {
                    if (!heroData?.walkthrough) return;

                    const href = heroData?.link1 || "#";
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

              {heroData?.btnText2 && (
                <div className="ctaBtn">
                  <WhiteButton
                    target={heroData?.target ? "_blank" : ""}
                    href={heroData?.link2 || "#"}
                    text={heroData?.btnText2}
                    className="max-md:min-w-[20vw] max-sm:min-w-[55vw]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {breadcrumbs && <BreadCrumbs />}

        {!mob && enableShader ?(
          <>
            <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] max-md:hidden bg-lines">
              {lineDelays.map((d, i) => (
                <AnimatedLine key={i} delay={d} />
              ))}
            </div>

            {/* ✅ shader exists but is deferred; fade still happens once mounted */}
            <div
              ref={shaderRef}
              className="absolute top-[30%] left-0 h-screen w-screen max-md:hidden shader-container"
            >
              {/* <Suspense fallback={null}>
                <DynamicShaderComp />
              </Suspense> */}
              {/* <Image src={"/assets/images/homepage/bg-shader-desktop.png"} alt="desktop shader" width={1920} height={1080} className="w-full h-full object-cover" priority fetchPriority="high"/> */}
            </div>
          </>
        ) : (
          <div
            ref={mobileGradientRef}
            className="w-screen h-[100vh] absolute top-0 z-[5] left-0 hidden max-md:block"
          >
            <Image
              src={"/assets/images/homepage/gradient-mobile.png"}
              alt="shader-gradient-mobile"
              className="w-full h-full object-cover"
              width={300}
              height={580}
              priority
              fetchPriority="high"
            />
          </div>
        )}

        {/* ✅ IMPORTANT: overlay should not be above everything at opacity 1.
          Keep it in DOM but default opacity 0 (GSAP handles it anyway). */}
      </section>
      <div className="absolute inset-0 bg-background z-[20] hero-overlay pointer-events-none" />
    </>
  );
});

export default OldHero;
