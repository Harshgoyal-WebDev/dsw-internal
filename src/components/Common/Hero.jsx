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

const Hero = ({ heroData }) => {
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
  
  }, []);

  return (
    <section className="h-[70vw] w-screen relative bg-background max-sm:h-screen max-sm:px-[7vw]" id="hero">
      <div className="flex flex-col items-center justify-start w-full h-full pt-[30vh] relative z-[12] max-sm:pt-[15vh]">
        <div className="w-[70%] text-center space-y-6 pb-5 max-sm:w-[100%] max-sm:space-y-[12vw]">
          <h1
            ref={heading}
            className="title-1 font-head heroHeadAnim text-[#E8E8E8] opacity-0 heroHead"
          >
            {heroData.heading}
          </h1>
          <p
            className={`text-[#CACACA] font-head w-full mx-auto overflow-hidden heroPara opacity-0 ${heroData.paraClass}`}
          >
            {heroData.para}
          </p>
          <div className="flex items-center justify-center gap-6 mt-10 max-sm:flex-col max-sm:gap-[5vw]">
            {[
              { Component: PrimaryButton, text: heroData.btnText1, link: heroData.link1 },
              { Component: WhiteButton, text: heroData.btnText2, link: heroData.link2 },
            ].map(({ Component, text }, index) => (
              <motion.div
                key={text}
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
                <Component href="#" text={text} className="max-sm:min-w-[60vw]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Vertical Lines */}
      <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] max-sm:hidden">
        {[...Array(lineCount)].map((_, i) => (
          <AnimatedLine key={i} delay={heroData.homepage ? 5 + (i * 0.2) : 0.5 + (i * 0.2)} />
        ))}
      </div>
      <div ref={ShaderRef} className="absolute top-[30%] left-0 h-screen w-screen max-sm:hidden">
        <Suspense>
          <DynamicShaderComp />
        </Suspense>
      </div>
      <div className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-sm:block">
        <Image src={heroGradient} placeholder="blur" alt="shader-gradient-mobile" className="w-full h-full object-cover" width={600} height={1080} />
      </div>
    </section>
  );
};

export default Hero;
