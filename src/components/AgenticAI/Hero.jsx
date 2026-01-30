"use client";
import React, {
  Suspense,
  useMemo,
  useRef,
  memo,
  useState,
  useEffect,
} from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import gsap from "gsap";
import { initSplit, SplitInLineOnly } from "../splitTextUtils";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  fadeUp,
  headingAnim,
  lineAnim,
} from "@/components/Animations/gsapAnimations";
import AnimatedLine from "../Common/HeroComponents/AnimatedLine";
import BreadCrumbs from "../Common/HeroComponents/BreadCrumbs";

gsap.registerPlugin(SplitText);

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
  ssr: false,
});

const LINE_COUNT = 4;
const AgenticHero = memo(function Hero({ heroData, breadcrumbs }) {
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

  useEffect(() => {
    if (globalThis.innerWidth <= 1024) {
      setMob(true);
    } else {
      setMob(false);
    }
  }, [mob]);

  // // keep your existing base hooks (these set up global triggers, etc.)
  headingAnim();
  fadeUp();
  lineAnim();

 
  // prefers-reduced-motion to skip heavy animation on users who ask for it
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Split & reveal (heading + paragraph)
  useEffect(() => {
    gsap.set(".hero-overlay", { opacity: 0 });

    initSplit();
    if (!headingRef.current) return;

    // helper: flip any aria-hidden="true" descendants to false
    const forceAriaVisible = (root) => {
      if (!root) return;
      root
        .querySelectorAll('[aria-hidden="true"]')
        .forEach((n) => n.setAttribute("aria-hidden", "false"));
    };

    const ctx = gsap.context(() => {
      // heading split
      SplitInLineOnly(headingRef.current);
      const lines = headingRef.current.querySelectorAll(".line");

      // paragraph split (line mask)
      const splitPara = paraRef.current
        ? new SplitText(paraRef.current, { type: "lines", mask: "lines" })
        : null;

      const splitSubHeading = subheadingRef.current
        ? new SplitText(subheadingRef.current, { type: "lines", mask: "lines" })
        : null;

      // ⬇️ ensure aria-visible for heading + paragraph split wrappers
      forceAriaVisible(headingRef.current);
      if (splitPara) {
        forceAriaVisible(paraRef.current);
        // belt & suspenders: also mark each generated line explicitly
        splitPara.lines.forEach((l) => l.setAttribute("aria-hidden", "false"));
      }
      if (splitSubHeading) {
        forceAriaVisible(subheadingRef.current);
        // belt & suspenders: also mark each generated line explicitly
        splitSubHeading.lines.forEach((l) =>
          l.setAttribute("aria-hidden", "false")
        );
      }

      const delayLines = hasVisited ? 0.7 : 4.8;
      const delayPara = hasVisited ? 1.8 : 5.9;

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
      gsap.to([headingRef.current, paraRef.current, subheadingRef.current], {
        opacity: 1,
        duration: 0.1,
      });

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

      // breadcrumbs slide-up
      if (breadcrumbs) {
        gsap.set(".breadcrumbs", { opacity: 1 });
        gsap.fromTo(
          ".breadcrumbs",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.5 }
        );
      }

      // CTA buttons
      const ctaDelay = hasVisited ? 2 : 6.1;
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

      // cleanup: revert paragraph split too
      return () => {
        if (splitPara) splitPara.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroData.homepage, prefersReducedMotion, hasVisited]);

  const lineDelays = useMemo(
    () =>
      Array.from({ length: LINE_COUNT }, (_, i) =>
        heroData.homepage
          ? hasVisited
            ? 0.5 + i * 0.2
            : 5 + i * 0.2
          : 0.5 + i * 0.2
      ),
    [heroData.homepage, hasVisited]
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-screen relative bg-background max-md:h-screen max-md:px-[7vw]"
      id="hero"
    >
      <div className="flex flex-col items-center justify-start w-full h-full pt-[30vh] relative z-[12] max-md:pt-[15vh]  content-container">
        <div
          className={`text-center space-y-6 pb-5 max-md:w-[100%] max-md:space-y-[7vw] ${heroData.headingWidth || "w-[80%]"
            }`}
        >

             {heroData.img ? (
            <div
              ref={imgWrapRef}
              className="h-auto w-[20vw] mx-auto max-sm:w-[60vw] max-md:w-[45vw]  will-change-transform will-change-opacity"
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
          
          <h1
            ref={headingRef}
            className="text-100 font-head heroHeadAnim text-[#E8E8E8]"
          >
            {heroData.heading}
          </h1>

         

          {heroData.subheading && (
            <p
              ref={subheadingRef}
              className={`text-[#CACACA]  mx-auto overflow-hidden text-50`}
            >
              {heroData.subheading}
            </p>
          )}

          <p
            ref={paraRef}
            className={`text-[#CACACA] font-head mx-auto overflow-hidden  ${heroData.paraClass ? heroData.paraClass : "w-full"
              }`}
          >
            {heroData.para}
          </p>

          <div
            ref={btnsRef}
            className={`flex items-center justify-center gap-6 mt-10 max-md:flex-col max-sm:gap-[5vw]  ${heroData.hidebtn ? "hidden" : "flex"
              }`}
          >
            {/* Primary */}
            <div className="ctaBtn">
              <PrimaryButton
                href={heroData.link1 || "#"}
                text={heroData.btnText1}
                className="max-md:min-w-[20vw] max-sm:min-w-[55vw]"
                onClick={(e) => {
                  // only run when walkthrough is true
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
          <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] max-md:hidden bg-lines  ">
            {lineDelays.map((d, i) => (
              <AnimatedLine key={i} delay={d} />
            ))}
          </div>
          <div
            ref={shaderRef}
            className="absolute top-[30%] left-0 h-screen w-screen max-md:hidden shader-container "
          >
            <Suspense>
              <DynamicShaderComp />
            </Suspense>
          </div>
        </>
      ) : (
        <div
          ref={mobileGradientRef}
          className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-md:block "
        >
          <Image
            src={"/assets/images/homepage/gradient-mob.png"}
            fetchPriority="high"
            priority={true}
            alt="shader-gradient-mobile"
            className="w-full h-full object-cover"
            width={300}
            height={580}
          />
        </div>
      )}
      <div className="w-screen h-screen absolute inset-0 bg-background z-[801] hero-overlay pointer-events-none opacity-100" />

      {/* Mobile gradient */}
    </section>
  );
});

export default AgenticHero;
