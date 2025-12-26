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
import AnimatedLine from "./HeroComponents/AnimatedLine";
import BreadCrumbs from "./HeroComponents/BreadCrumbs";

gsap.registerPlugin(SplitText);

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
  ssr: false,
});

const LINE_COUNT = 4;
const InternalHero = memo(function Hero({ heroData, breadcrumbs }) {
  const sectionRef = useRef(null);
    const paraRef = useRef(null);
  const headingRef = useRef(null);
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

//   useEffect(() => {
  
// }, []);
headingAnim();
  fadeUp();
  lineAnim();


  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    // heading split
    SplitInLineOnly(headingRef.current);
    const lines = headingRef.current.querySelectorAll(".line");
    forceAriaVisible(headingRef.current);
    const delayLines = hasVisited ? 0.7 : 4.8;
    const delayPara = hasVisited ? 1.8 : 5.9;


  const splitPara =
      paraRef.current
        ? new SplitText(paraRef.current, { type: "lines", mask: "lines" })
        : null;
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
    gsap.to([headingRef.current,paraRef.current], {
      opacity: 1,
      duration: 0.1,
    });


    // breadcrumbs slide-up
    if(breadcrumbs){
      gsap.set(".breadcrumbs", { opacity: 1 });
      gsap.fromTo(
        ".breadcrumbs",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.5 }
      );
    }
    

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
 const fadeUpDelay = hasVisited ? 2 : 5.8;

  useEffect(() => {
      if (globalThis.innerWidth > 1024) {
        const ctx = gsap.context(() => {
          const content = document.querySelectorAll(".fadeupDelay");
          content.forEach((content) => {
            gsap.from(content, {
              scrollTrigger: {
                trigger: content,
                start: "top 90%",
                // markers:true
                
              },
              opacity: 0,
              y:50,
              delay:fadeUpDelay,
              ease:"power3.out",
              duration: 2,
              
            });
          });
        });
        return () => ctx.revert();
      }
      else{
         const ctx = gsap.context(() => {
          const content = document.querySelectorAll(".fadeupDelay");
          content.forEach((content) => {
            gsap.from(content, {
              scrollTrigger: {
                trigger: content,
                start: "top 90%",
                // markers:true
                
              },
              opacity: 0,
              y:50,
              // delay:0,
              ease:"power3.out",
              duration: 2,
              
            });
          });
        });
        return () => ctx.revert();
      }
    }, []);
  return (
    <section
      ref={sectionRef}
      className="h-[50vw] w-screen relative bg-background max-md:min-h-screen max-md:h-fit max-sm:pb-[25%] max-md:px-[7vw]"
      id="hero"
    >
      <div className="flex flex-col items-center justify-start w-full h-full pt-[30vh] relative z-[12] max-md:pt-[15vh]  content-container">
        <div
          className={`text-center space-y-6 pb-5 max-md:w-[100%] max-md:space-y-[7vw] ${
            heroData.headingWidth || "w-[70%]"
          }`}
        >
          <h1
            ref={headingRef}
            className="text-100 font-head heroHeadAnim text-[#E8E8E8]"
          >
            {heroData.heading}
          </h1>
           <p
            ref={paraRef}
            className={`text-[#CACACA] font-head mx-auto overflow-hidden  ${
              heroData.paraClass ? heroData.paraClass : "w-full"
            }`}
          >
            {heroData.para}
          </p>
        </div>
      </div>

      {breadcrumbs && <BreadCrumbs />}

    
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
      <div className="w-screen h-screen absolute inset-0 bg-background z-[801] hero-overlay pointer-events-none opacity-100" />
    </section>
  );
});

export default InternalHero;
