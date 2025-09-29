"use client";
import React, { Suspense, useMemo, useRef, useLayoutEffect, memo } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import gsap from "gsap";
import { initSplit, SplitInLineOnly } from "../splitTextUtils";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  fadeIn,
  fadeUp,
  headingAnim,
  lineAnim,
  paraAnim,
} from "@/components/Animations/gsapAnimations";
import heroGradient from "../../../public/assets/images/homepage/gradient-mobile.png";
import { usePathname } from "next/navigation";

gsap.registerPlugin(SplitText);

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
  ssr: false,
});

const LINE_COUNT = 4;

/** GSAP-only animated vertical line */
const AnimatedLine = memo(function AnimatedLine({ delay }) {
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  useLayoutEffect(() => {
    if (!lineRef.current || !dotRef.current) return;

    const ctx = gsap.context(() => {
      // grow the line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 1.2, delay, ease: "power2.out" }
      );

      // sliding "dot"
      gsap.to(dotRef.current, {
        y: "100vh",
        duration: 1.2,
        delay,
        repeat: -1,
        repeatDelay: 2 + delay,
        ease: "none",
      });
    }, lineRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={lineRef}
      className="w-[0.5px] h-full bg-gradient-to-b from-white/20 to-transparent origin-top overflow-y-hidden will-change-transform"
    >
      <span ref={dotRef} className="block w-full h-3 bg-white blur-[1px]" />
    </div>
  );
});

const Hero = memo(function Hero({ heroData, breadcrumbs }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const imgWrapRef = useRef(null);
  const btnsRef = useRef(null);
  const linesWrapRef = useRef(null);
  const shaderRef = useRef(null);
  const crumbsRef = useRef(null);
  const mobileGradientRef = useRef(null);

  // keep your existing base hooks (these set up global triggers, etc.)
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();

  const pathname = usePathname();

  // memoize breadcrumb segments
  const pathArray = useMemo(
    () => pathname.split("/").filter(Boolean).filter(s => s.toLowerCase() !== "home"),
    [pathname]
  );

  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  // prefers-reduced-motion to skip heavy animation on users who ask for it
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Split & reveal (heading + paragraph)
  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      // instant show if reduced motion
      gsap.set([headingRef.current, paraRef.current], { opacity: 1, clearProps: "all" });
      return;
    }

    initSplit();
    if (!headingRef.current) return;

    // scope all GSAP in this component for easy cleanup
    const ctx = gsap.context(() => {
      // split heading into lines (your utility makes .line wrappers)
      SplitInLineOnly(headingRef.current);
      const lines = headingRef.current.querySelectorAll(".line");

      // split paragraph (line mask)
      const splitPara = paraRef.current
        ? new SplitText(paraRef.current, { type: "lines", mask: "lines" })
        : null;

      const delayLines = heroData.homepage ? 4.5 : 0.7;
      const delayPara = heroData.homepage ? 5.2 : 1.8;

      gsap.fromTo(
        lines,
        { maskPosition: "100% 100%" },
        {
          maskPosition: "0% 100%",
          delay: delayLines,
          stagger: 0.2,
          duration: 7,
          ease: "power2.out",
        }
      );

      if (splitPara) {
        gsap.from(splitPara.lines, {
          yPercent: 100,
          delay: delayPara,
          duration: 1.4,
          stagger: 0.04,
          ease: "power3.out",
        });
      }

      return () => {
        splitPara && splitPara.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroData.homepage, prefersReducedMotion]);

  // Shader, breadcrumbs, CTA buttons, imagery, and initial sets
  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      gsap.set(
        [
          shaderRef.current,
          linesWrapRef.current,
          btnsRef.current,
          mobileGradientRef.current,
          imgWrapRef.current,
          crumbsRef.current,
          headingRef.current,
          paraRef.current,
        ],
        { opacity: 1, clearProps: "all" }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // ensure initial visibility (batch)
      gsap.set([linesWrapRef.current, btnsRef.current], { opacity: 1 });

      // mobile gradient
      if (mobileGradientRef.current) {
        gsap.fromTo(
          mobileGradientRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 3, delay: 1.5, ease: "power3.out" }
        );
      }

      // shader fade
      if (shaderRef.current) {
        gsap.fromTo(
          shaderRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 3, delay: 1.5, ease: "power3.out" }
        );
      }

      // reveal heading & para opacity (mask anim handled above)
      gsap.to([headingRef.current, paraRef.current], { opacity: 1, duration: 0.1 });

      // hero image float-in
      if (imgWrapRef.current) {
        gsap.fromTo(
          imgWrapRef.current,
          { yPercent: 80, opacity: 0 },
          { opacity: 1, yPercent: 0, duration: 1, delay: 1.5, ease: "power3.out" }
        );
      }

      // breadcrumbs slide-up
      if (crumbsRef.current) {
        gsap.fromTo(
          crumbsRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.5 }
        );
      }

      // CTA button reveal (replaces motion.div)
      const ctaDelay = heroData.homepage ? 5.8 : 1.8;
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
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [heroData.homepage, prefersReducedMotion]);

  const lineDelays = useMemo(
    () =>
      Array.from({ length: LINE_COUNT }, (_, i) =>
        heroData.homepage ? 5 + i * 0.2 : 0.5 + i * 0.2
      ),
    [heroData.homepage]
  );

  return (
    <section
      ref={sectionRef}
      className="h-[70vw] w-screen relative bg-background max-md:h-screen max-md:px-[7vw]"
      id="hero"
    >
      <div className="flex flex-col items-center justify-start w-full h-full pt-[30vh] relative z-[12] max-md:pt-[15vh]">
        <div
          className={`text-center space-y-6 pb-5 max-md:w-[100%] max-md:space-y-[10vw] ${
            heroData.headingWidth || "w-[70%]"
          }`}
        >
          <h1
            ref={headingRef}
            className="text-100 font-head heroHeadAnim text-[#E8E8E8] opacity-0 will-change-opacity"
          >
            {heroData.heading}
          </h1>

          {heroData.img ? (
            <div
              ref={imgWrapRef}
              className="h-auto w-[16vw] mx-auto max-sm:w-[50vw] max-md:w-[28vw] opacity-0 will-change-transform will-change-opacity"
            >
              <Image
                src={heroData.img}
                height={46}
                width={297}
                alt="insurance"
                className="h-full w-full object-cover"
                // hint Next/Image for better responsive layout
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 28vw, 16vw"
                priority={!!heroData.homepage}
              />
            </div>
          ) : null}

          <p
            ref={paraRef}
            className={`text-[#CACACA] font-head mx-auto overflow-hidden opacity-0 ${
              heroData.paraClass ? heroData.paraClass : "w-full"
            }`}
          >
            {heroData.para}
          </p>

          <div
            ref={btnsRef}
            className={`flex items-center justify-center gap-6 mt-10 max-md:flex-col max-md:gap-[5vw] opacity-0 ${
              heroData.hidebtn ? "hidden" : "flex"
            }`}
          >
            {[
              {
                Component: PrimaryButton,
                text: heroData.btnText1,
                link: heroData.link1,
              },
              {
                Component: WhiteButton,
                text: heroData.btnText2,
                link: heroData.link2,
              },
            ].map(({ Component, text, link }, index) => (
              <div key={index} className="ctaBtn">
                <Component
                  href={link || "#"}
                  text={text}
                  className="max-md:min-w-[20vw] max-sm:min-w-[55vw]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {breadcrumbs && (
        <div className="breadcrumbs overflow-hidden w-fit flex items-start justify-start text-[1vw] text-[#CACACA] max-md:text-[2.5vw] max-sm:text-[3.5vw] max-md:h-fit absolute left-[5%] top-[75%] max-md:top-[90%] z-[800]">
          <div ref={crumbsRef} className="flex gap-3">
            {pathArray.map((segment, index) => {
              const isLast = index === pathArray.length - 1;
              return (
                <div key={segment} className="flex items-center gap-2">
                  {index > 0 && <span>&gt;</span>}
                  <span>{createBreadcrumbName(segment)}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Animated Vertical Lines (desktop only) */}
      <div
        ref={linesWrapRef}
        className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] max-md:hidden opacity-0"
      >
        {lineDelays.map((d, i) => (
          <AnimatedLine key={i} delay={d} />
        ))}
      </div>

      {/* Shader (desktop) */}
      <div
        ref={shaderRef}
        className="absolute top-[30%] left-0 h-screen w-screen max-md:hidden opacity-0 will-change-opacity"
      >
        <Suspense>
          <DynamicShaderComp />
        </Suspense>
      </div>

      {/* Mobile gradient */}
      <div
        ref={mobileGradientRef}
        className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-md:block opacity-0 will-change-opacity"
      >
        <Image
          src={heroGradient}
          placeholder="blur"
          alt="shader-gradient-mobile"
          className="w-full h-full object-cover"
          width={600}
          height={1080}
          sizes="100vw"
        />
      </div>
    </section>
  );
});

export default Hero;
