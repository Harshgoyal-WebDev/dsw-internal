"use client";
import React, { Suspense, useEffect, useRef } from "react";
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

// const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
//   ssr: false,
// });

const lineCount = 4;

/** GSAP-only animated vertical line */
const AnimatedLine = ({ delay }) => {
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current || !dotRef.current) return;
      
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

const Hero = ({ heroData, breadcrumbs }) => {
  const heading = useRef(null);
  const ShaderRef = useRef(null);

  // keep your existing base hooks
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();

  // Split & reveal
  useEffect(() => {
    initSplit();
    if (!heading.current) return;

    SplitInLineOnly(heading.current);
    const lines = heading.current.querySelectorAll(".line");
    const heroPara = document.querySelector(".heroPara");

    const splitPara = heroPara
      ? new SplitText(heroPara, { type: "lines", mask: "lines" })
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
  }, [heroData.homepage]);

  // Shader, breadcrumbs, CTA buttons
  useEffect(() => {
    if (ShaderRef.current) {
      gsap.fromTo(
        ShaderRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 3, delay: 1.5, ease: "power3.out" }
      );
    }
   gsap.set(".hero-lines",{
    opacity:1,
   })
   gsap.set(".hero-btns",{
    opacity:1,
   })
     gsap.set(".mobile-gradient", {
      opacity: 1,
    });
     gsap.fromTo(
        ".mobile-gradient",
        { opacity: 0 },
        { opacity: 1, duration: 3, delay: 1.5, ease: "power3.out" }
      );
    gsap.to(".heroPara,.heroHead", { opacity: 1, duration: 0.1 });
gsap.fromTo(
      ".hero-img",
      { yPercent: 80, opacity: 0 },
      { opacity: 1, yPercent: 0, duration: 1, delay: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      ".breadcrumbsContainer",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.5 }
    );

    // CTA button reveal (replaces <motion.div> wrappers)
    const ctaDelay = heroData.homepage ? 5.8 : 1.8;
    gsap.fromTo(
      ".ctaBtn",
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
  }, [heroData.homepage]);

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
        <div
          className={`text-center space-y-6 pb-5 max-md:w-[100%] max-md:space-y-[10vw] ${
            heroData.headingWidth || "w-[70%]"
          }`}
        >
          <h1
            ref={heading}
            className="text-100 font-head heroHeadAnim text-[#E8E8E8] opacity-0 heroHead"
          >
            {heroData.heading}
          </h1>
          {heroData.img ?
          <>
          <div className=" h-auto w-[16vw] mx-auto max-sm:w-[50vw] max-md:w-[28vw] hero-img opacity-0">
                      <Image
                        src={heroData.img}
                        height={46}
                        width={297}
                        alt="insuraince"
                        className="h-full w-full object-cover "
                      />
                    </div>
                    </> :<></>}

          <p
            className={`text-[#CACACA] font-head mx-auto overflow-hidden heroPara opacity-0 ${
              heroData.paraClass ? heroData.paraClass : "w-full"
            }`}
          >
            {heroData.para}
          </p>

          <div
            className={`flex items-center justify-center gap-6 mt-10 max-md:flex-col max-md:gap-[5vw] hero-btns opacity-0 ${
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
            ].map(({ Component, text }, index) => (
              <div key={index} className="ctaBtn">
                <Component href="#" text={text} className="max-md:min-w-[20vw] max-sm:min-w-[55vw]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {breadcrumbs && (
        <div className="breadcrumbs overflow-hidden w-fit flex items-start justify-start text-[1vw] text-[#CACACA] max-md:text-[2.5vw] max-sm:text-[3.5vw] max-md:h-fit absolute left-[5%] top-[75%] max-md:top-[90%] z-[800]">
          <div className="flex gap-3 breadcrumbsContainer">
            {pathArray
              .filter((segment) => segment && segment.toLowerCase() !== "home")
              .map((segment, index, arr) => {
                const isLast = index === arr.length - 1;
                return (
                  <div key={index} className="flex items-center gap-2">
                    {index > 0 && <span>&gt;</span>}
                    {isLast ? (
                      <span>{createBreadcrumbName(segment)}</span>
                    ) : (
                       <span
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   navigateTo(href);
                        // }}
                        // href={href}
                      >
                        {createBreadcrumbName(segment)}
                      </span>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Animated Vertical Lines */}
      <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] max-md:hidden opacity-0 hero-lines">
        {Array.from({ length: lineCount }).map((_, i) => (
          <AnimatedLine
            key={i}
            delay={heroData.homepage ? 5 + i * 0.2 : 0.5 + i * 0.2}
          />
        ))}
      </div>

      <div
        ref={ShaderRef}
        className="absolute top-[30%] left-0 h-screen w-screen max-md:hidden"
      >
        <Suspense>
          {/* <DynamicShaderComp /> */}
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



