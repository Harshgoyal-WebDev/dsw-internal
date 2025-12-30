"use client";

import React, {
  Suspense,
  useMemo,
  useRef,
  memo,
  useState,
  useEffect,
} from "react";
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
import BreadCrumbs from "../Common/HeroComponents/BreadCrumbs";
import AnimatedLine from "../Common/HeroComponents/AnimatedLine";

gsap.registerPlugin(SplitText);

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
  ssr: false,
});

const LINE_COUNT = 4;

const InfosysHero = memo(function Hero({ heroData, breadcrumbs }) {
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

  /* -------------------- MOBILE DETECTION (FIXED) -------------------- */
  useEffect(() => {
    const checkMob = () => setMob(window.innerWidth <= 1024);
    checkMob();
    window.addEventListener("resize", checkMob);
    return () => window.removeEventListener("resize", checkMob);
  }, []);

  /* -------------------- GLOBAL GSAP SETUPS -------------------- */
  headingAnim();
  fadeUp();
  lineAnim();

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------------------- HERO ANIMATIONS -------------------- */
  useEffect(() => {
    gsap.set(".hero-overlay", { opacity: 0 });

    initSplit();
    if (!headingRef.current) return;

    const forceAriaVisible = (root) => {
      if (!root) return;
      root
        .querySelectorAll('[aria-hidden="true"]')
        .forEach((n) => n.setAttribute("aria-hidden", "false"));
    };

    const ctx = gsap.context(() => {
      SplitInLineOnly(headingRef.current);
      const lines = headingRef.current.querySelectorAll(".line");

      const splitPara = paraRef.current
        ? new SplitText(paraRef.current, { type: "lines", mask: "lines" })
        : null;

      const splitSubHeading = subheadingRef.current
        ? new SplitText(subheadingRef.current, { type: "lines", mask: "lines" })
        : null;

      forceAriaVisible(headingRef.current);

      if (splitPara) {
        forceAriaVisible(paraRef.current);
        splitPara.lines.forEach((l) =>
          l.setAttribute("aria-hidden", "false")
        );
      }

      if (splitSubHeading) {
        forceAriaVisible(subheadingRef.current);
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

      if (splitSubHeading) {
        gsap.from(splitSubHeading.lines, {
          yPercent: 100,
          delay: delayPara,
          duration: 1.4,
          stagger: 0.04,
          ease: "power3.out",
        });
      }

      if (imgWrapRef.current) {
        gsap.fromTo(
          imgWrapRef.current,
          { yPercent: 80, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.5,
            delay: hasVisited ? 1.8 : 5.9,
            ease: "power3.out",
          }
        );
      }

      if (breadcrumbs) {
        gsap.fromTo(
          ".breadcrumbs",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 1.5 }
        );
      }

      if (btnsRef.current) {
        const items = btnsRef.current.querySelectorAll(".ctaBtn");
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: hasVisited ? 2 : 6.1,
            stagger: 0.12,
          }
        );
      }

      return () => {
        if (splitPara) splitPara.revert();
        if (splitSubHeading) splitSubHeading.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [hasVisited, breadcrumbs]);

  /* -------------------- SAFE LINE DELAYS (FIXED) -------------------- */
  const isHomepage = heroData?.homepage ?? false;

  const lineDelays = useMemo(
    () =>
      Array.from({ length: LINE_COUNT }, (_, i) =>
        isHomepage
          ? hasVisited
            ? 0.5 + i * 0.2
            : 5 + i * 0.2
          : 0.5 + i * 0.2
      ),
    [isHomepage, hasVisited]
  );

  /* -------------------- RENDER -------------------- */
  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen w-screen relative bg-background max-md:h-screen max-md:px-[7vw]"
    >
      <div className="flex flex-col items-center w-full h-full pt-[30vh] relative z-[12] max-md:pt-[15vh] content-container">
        <div className="text-center space-y-6 pb-5 w-[90%] max-md:w-full">
          <h1
            ref={headingRef}
            className="text-100 font-head heroHeadAnim text-[#E8E8E8]"
          >
            Together, Bringing Open-Source Success to Global Banks
          </h1>

          <p
            ref={subheadingRef}
            className="text-[#CACACA] font-head mx-auto overflow-hidden text-50"
          >
            Trusted Strategic Open-Source Consulting Partner to Infosys Finacle
          </p>

          <div
            ref={imgWrapRef}
            className="flex items-center justify-center gap-[4vw] max-sm:gap-[10vw] max-md:gap-[7vw]"
          >
            <Image
              src="/assets/images/infosys-finacle/infosys-finacle.png"
              alt="infosys-finacle"
              className="w-[8vw] max-sm:w-[25vw] h-auto max-md:w-[18vw]"
              width={297}
              height={46}
              priority
            />
            <Image
              src="/assets/images/infosys-finacle/only-dsw.png"
              alt="dsw"
              className="w-[8vw] max-sm:w-[25vw] h-auto max-md:w-[18vw]"
              width={297}
              height={46}
              priority
            />
          </div>
        </div>
      </div>

      {breadcrumbs && <BreadCrumbs />}

      {!mob && (
        <>
          <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] bg-lines">
            {lineDelays.map((d, i) => (
              <AnimatedLine key={i} delay={d} />
            ))}
          </div>

          <div
            ref={shaderRef}
            className="absolute top-[30%] left-0 h-screen w-screen z-[10]"
          >
            <Suspense>
              <DynamicShaderComp />
            </Suspense>
          </div>
        </>
      )}

      {mob && (
        <div
          ref={mobileGradientRef}
          className="w-screen h-screen absolute top-[30%] left-0 z-[10]"
        >
          <Image
            src="/assets/images/homepage/gradient-mobile.png"
            alt="mobile-gradient"
            fill
            priority
          />
        </div>
      )}

      {/* <div className="hero-overlay absolute inset-0 bg-background z-[801]" /> */}
    </section>
  );
});

export default InfosysHero;
