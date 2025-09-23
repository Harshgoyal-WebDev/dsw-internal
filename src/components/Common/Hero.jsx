"use client"
import React, { Suspense, useEffect, useRef } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import { motion } from "motion/react";
import gsap from "gsap";
import { initSplit, SplitInLineOnly } from "../splitTextUtils";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import dynamic from "next/dynamic";
import { fadeIn, fadeUp, headingAnim, lineAnim, paraAnim } from "@/components/Animations/gsapAnimations";
import heroGradient from "../../../public/assets/images/homepage/gradient-mobile.png"
import { usePathname } from "next/navigation";


const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
  ssr: false,
});

const lineCount = 4;

const AnimatedLine = ({ delay }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1, transition: { duration: 1.2, delay } }}
    className="w-[0.5px] h-full bg-gradient-to-b from-white/20 to-transparent origin-top overflow-y-hidden"
  >
    <motion.span
      initial={{ y: 0 }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 1.2,
        delay,
        repeat: Infinity,
        repeatDelay: 2 + delay,
      }}
      className="block w-full h-3 bg-white blur-[1px]"
    />
  </motion.div>
);

const Hero = ({ heroData , breadcrumbs}) => {
  const heading = useRef(null);

  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();

  useEffect(() => {
    initSplit();
    SplitInLineOnly(heading.current);
    const lines = heading.current.querySelectorAll(".line");
    const heroPara = document.querySelector(".heroPara")
    const heroEl = new SplitText(heroPara, {
      type: "lines",
      mask: "lines"
    })
    // gsap.set(lines,{
    //    maskPosition: "100% 100%",
    // })
    // gsap.set(heroEl.lines,{
    //    yPercent: 100,
    // })

    const delayLines = heroData.homepage ? 4.5 : 0.7;
    const delayPara = heroData.homepage ? 5.2 : 1.8;
    gsap.fromTo(
      lines,
      {
       
        maskPosition: "100% 100%",
      },
      {
        
        maskPosition: "0% 100%",
        delay: delayLines,
        stagger: 0.2,
        duration: 7,
        ease: "power2.out",
      }
    );
    gsap.from(heroEl.lines, {
      yPercent: 100,
      delay: delayPara,
      duration: 1.4,
      stagger: 0.04,
      ease: "power3.out",
    });
    // gsap.from(".")
  }, []);
  const ShaderRef = useRef();
   
  useEffect(() => {
    gsap.fromTo(
      ShaderRef.current, 
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 3,
        delay: 1.5,
        ease:'power3.out'
      }
    );
    gsap.to(".heroPara,.heroHead",{
      opacity:1,
      duration:0.1
    })
    gsap.fromTo(".breadcrumbsContainer", {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease:"power3.out",
      delay: 1.5
    })
  
  }, []);

  const pathname = usePathname();
    const pathArray = pathname.split("/").filter(Boolean);
    const createBreadcrumbName = (segment) =>
      segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <section className="h-[70vw] w-screen relative bg-background max-md:h-screen max-md:px-[7vw]" id="hero">
      <div className="flex flex-col items-center justify-start w-full h-full pt-[30vh] relative z-[12] max-md:pt-[15vh]">
        <div className={`text-center space-y-6 pb-5 max-md:w-[100%] max-md:space-y-[10vw] ${heroData.headingWidth || "w-[70%]"}`}>
          <h1
            ref={heading}
            className="text-100 font-head heroHeadAnim text-[#E8E8E8] opacity-0 heroHead"
          >
            {heroData.heading}
          </h1>
          <p
            className={`text-[#CACACA] font-head mx-auto overflow-hidden heroPara opacity-0 ${heroData.paraClass?heroData.paraClass:"w-full"}`}
          >
            {heroData.para}
          </p>
          <div className={`flex items-center justify-center gap-6 mt-10 max-md:flex-col max-md:gap-[5vw] ${heroData.hidebtn ? "hidden":"flex"}`}>
            {[
              { Component: PrimaryButton, text: heroData.btnText1, link: heroData.link1 },
              { Component: WhiteButton, text: heroData.btnText2, link: heroData.link2 },
            ].map(({ Component, text }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: heroData.homepage ? 5.8 : 1.8,
                  }
                }}
              >
                <Component href="#" text={text} className="max-md:min-w-[60vw]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {breadcrumbs &&  
       <div className="breadcrumbs overflow-hidden w-full flex items-start justify-start text-[1vw] text-[#CACACA] max-md:text-[4vw] max-md:h-fit absolute left-[5%] top-[75%] max-md:top-[95%] z-[999]">
  <div className="flex gap-3 breadcrumbsContainer">
    {pathArray
      .filter((segment) => segment && segment.toLowerCase() !== "home") // skip empty & "home"
      .map((segment, index, arr) => {
        const href = "/" + arr.slice(0, index + 1).join("/");
        const isLast = index === arr.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {/* only render '>' if not the first item */}
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

        }
      

      {/* Animated Vertical Lines */}
      <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] max-md:hidden">
        {[...Array(lineCount)].map((_, i) => (
          <AnimatedLine key={i} delay={heroData.homepage ? 5 + (i * 0.2) : 0.5 + (i * 0.2)} />
        ))}
      </div>
      <div ref={ShaderRef} className="absolute top-[30%] left-0 h-screen w-screen max-md:hidden">
        <Suspense>
          <DynamicShaderComp />
        </Suspense>
      </div>
      <div className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-md:block">
        <Image src={heroGradient} placeholder="blur" alt="shader-gradient-mobile" className="w-full h-full object-cover" width={600} height={1080} />
      </div>
    </section>
  );
};

export default Hero;
