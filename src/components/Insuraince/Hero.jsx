"use client";
import React, { Suspense, useEffect, useRef } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
// ❌ removed: import { motion } from "motion/react";
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

gsap.registerPlugin(SplitText);

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
  ssr: false,
});

const lineCount = 4;

/** GSAP-only vertical line with sliding dot */
const AnimatedLine = ({ delay = 0 }) => {
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current || !dotRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top" },
      { scaleY: 1, duration: 1.2, delay, ease: "power2.out" }
    );

    gsap.to(dotRef.current, {
      y: "100vh",
      duration: 1.2,
      delay,
      repeat: -1,
      repeatDelay: 2 + delay,
      ease: "none",
    });
  }, [delay]);

  return (
    <div
      ref={lineRef}
      className="w-[0.5px] h-full bg-gradient-to-b from-white/20 to-transparent origin-top overflow-y-hidden"
    >
      <span ref={dotRef} className="block w-full h-3 bg-white blur-[1px]" />
    </div>
  );
};

const Hero = () => {
  const heading = useRef(null);
  const ShaderRef = useRef();

  // keep your existing helper animations
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();

  useEffect(() => {
    initSplit();
    if (!heading.current) return;

    SplitInLineOnly(heading.current);
    const lines = heading.current.querySelectorAll(".line");

    const heroPara = document.querySelector(".heroPara");
    const heroEl = heroPara
      ? new SplitText(heroPara, { type: "lines", mask: "lines" })
      : null;

    gsap.fromTo(
      lines,
      { maskPosition: "100% 100%" },
      {
        maskPosition: "0% 100%",
        delay: 0.7,
        stagger: 0.2,
        duration: 7,
        ease: "power2.out",
      }
    );

    if (heroEl) {
      gsap.from(heroEl.lines, {
        yPercent: 150,
        delay: 1.5,
        duration: 1.2,
        stagger: 0.04,
        ease: "power3.out",
      });
    }
    gsap.set(".hero-lines", {
      opacity: 1,
    });
    gsap.set(".mobile-gradient", {
      opacity: 1,
    });
     gsap.fromTo(
        ".mobile-gradient",
        { opacity: 0 },
        { opacity: 1, duration: 3, delay: 1.5, ease: "power3.out" }
      );
    gsap.set(".hero-btns", {
      opacity: 1,
    });
    gsap.fromTo(
      ".hero-img",
      { yPercent: 80, opacity: 0 },
      { opacity: 1, yPercent: 0, duration: 1, delay: 1.5, ease: "power3.out" }
    );

    // CTA buttons (replaces <motion.div> wrappers)
    gsap.fromTo(
      ".ctaBtn",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.7,
        stagger: 0.12,
        ease: "power3.out",
      }
    );

    return () => {
      heroEl && heroEl.revert();
    };
  }, []);

  useEffect(() => {
    if (ShaderRef.current) {
      gsap.fromTo(
        ShaderRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 3, delay: 1.5, ease: "power3.out" }
      );
    }
    gsap.to(".heroPara,.heroHead", { opacity: 1, duration: 0.1 });
  }, []);

  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);
  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <section
     
      className="h-[70vw] w-screen relative bg-background max-md:h-screen max-md:px-[7vw]"
     
      id="hero"
    
    >
      <div className="flex flex-col items-center justify-start w-full h-full pt-[30vh] relative z-[12] max-md:pt-[15vh]">
        <div className="flex items-center justify-center flex-col w-[80%] text-center gap-[2.5vw] pb-5 max-sm:w-[90%] max-sm:space-y-[8vw] max-md:space-y-[3vw]">
          <h1
            ref={heading}
            className="text-100 font-head heroHeadAnim text-[#E8E8E8] opacity-0 heroHead"
          >
              Enterprise AI Platform for Insurance
          </h1>
 
          <div className=" h-auto w-[16vw] max-sm:w-[50vw] max-md:w-[28vw] hero-img opacity-0">
            <Image
              src={"/assets/icons/insuraince/insuraince.svg"}
              height={46}
              width={297}
              alt="insuraince"
              className="h-full w-full object-cover fadeUp"
            />
          </div>

          <p className="text-white-300 w-full mx-auto overflow-hidden heroPara opacity-0">
            Purpose-Built, Proven, and Production-Ready . InsurAInce is the
            enterprise AI platform designed for insurers to build GenAI agents
            in hours, deploy AI use cases in days, and scale confidently with
            compliance, speed, and accuracy – all through your policy lifecycle.
          </p>

          <div className="flex items-center justify-center gap-6 mt-2 max-sm:flex-col max-sm:gap-[5vw] hero-btns opacity-0 max-md:gap-[3vw]">
            {[
              {
                Component: PrimaryButton,
                text: "Explore the Platform ",
                link: "/#",
              },
              { Component: WhiteButton, text: "Book a demo", link: "/#" },
            ].map(({ Component, text }, index) => (
              <div key={text} className="ctaBtn">
                <Component
                  href="#"
                  text={text}
                  className="max-sm:min-w-[60vw]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {breadcrumbs && (
        <div className="breadcrumbs overflow-hidden w-fit flex items-start justify-start text-[1vw] text-[#CACACA] max-md:text-[4vw] max-md:h-fit absolute left-[5%] top-[75%] max-md:top-[95%] z-[800]">
          <div className="flex gap-3 breadcrumbsContainer">
            {pathArray
              .filter((segment) => segment && segment.toLowerCase() !== "home")
              .map((segment, index, arr) => {
                const href = "/" + arr.slice(0, index + 1).join("/");
                const isLast = index === arr.length - 1;

                return (
                  <div key={index} className="flex items-center gap-2">
                  
                    {index > 0 && <span>&gt;</span>}

                    {isLast ? (
                      <span>{createBreadcrumbName(segment)}</span>
                    ) : (
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(href);
                        }}
                        href={href}
                      >
                        {createBreadcrumbName(segment)}
                      </a>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )} */}

      {/* Animated Vertical Lines */}
      <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] max-md:hidden hero-lines opacity-0">
        {Array.from({ length: lineCount }).map((_, i) => (
          <AnimatedLine
            key={i}
            delay={0.7 + i * 0.2}
          />
        ))}
      </div>

      <div
       
        ref={ShaderRef}
       
        className="absolute top-[30%] left-0 h-screen w-screen max-md:hidden"
      
      >
        <Suspense>
          <DynamicShaderComp />
        </Suspense>
      </div>

      <div className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-md:block mobile-gradient opacity-0">
        <Image
         
          src={heroGradient}
         
          placeholder="blur"
         
          alt="shader-gradient-mobile"
         
          className="w-full h-full object-cover"
         
          width={600}
         
          height={1080}
       
        />
      </div>
    </section>
  );
};

export default Hero;
