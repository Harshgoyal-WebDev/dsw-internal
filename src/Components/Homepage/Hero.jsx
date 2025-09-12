import React, { Suspense, useEffect, useRef } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import { motion } from "motion/react";
import gsap from "gsap";
import {  SplitInLineOnly } from "../splitTextUtils";
// import ShaderComp from "../BgShader/ShaderComp";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
  ssr: false,
});

const lineCount = 4;

const AnimatedLine = ({ delay }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1, transition: { duration: 1.2, delay } }}
    className="w-[0.1px] h-full bg-white/15 origin-top overflow-y-hidden"
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

const Hero = () => {
  const heading = useRef(null);

  useEffect(() => {
    SplitInLineOnly(heading.current);
    const lines = heading.current.querySelectorAll(".line");
    const heroPara = document.querySelector(".heroPara")
    const heroEl = new SplitText(heroPara,{
      type:"lines",
      mask:"lines"
    })
    gsap.fromTo(
      lines,
      {
        maskPosition: "100% 100%",
      },
      {
        maskPosition: "0% 100%",
        delay: 4.5,
        stagger: 0.2,
        duration: 7,
        ease: "power2.out",
      }
    );
    gsap.from(heroEl.lines, {
      yPercent: 150,
      delay: 5.2,
      duration: 1.2,
      stagger: 0.04,
      ease: "power3.out",
    });
    // gsap.from(".")
  }, []);

  return (
    <section className="h-[70vw] w-screen relative bg-background max-sm:h-screen max-sm:px-[7vw]" id="hero">
      <div className="flex flex-col items-center justify-start w-full h-full pt-[30vh] relative z-[12] max-sm:pt-[15vh]">
        <div className="w-[70%] text-center space-y-6 pb-5 max-sm:w-[90%] max-sm:space-y-[12vw]">
          <h1
            ref={heading}
            className="title-1 font-head heroHeadAnim text-[#E8E8E8]"
          >
            Launch AI use cases in days. GenAI in hours.​
          </h1>
          <p
           
            className="text-[#CACACA] w-full mx-auto overflow-hidden heroPara"
          >
            The enterprise platform built for speed and scale.​ Go from pilot to
            production – faster and smarter with DSW UnifyAI​
          </p>
          <div className="flex items-center justify-center gap-6 mt-10 max-sm:flex-col max-sm:gap-[5vw]">
            {[
              { Component: PrimaryButton, text: "Start Walkthrough" },
              { Component: WhiteButton, text: "Schedule a Call" },
            ].map(({ Component, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 5.8 },
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
          <AnimatedLine key={i} delay={5+(i * 0.2)} />
        ))}
      </div>
      <div className="absolute top-[30%] left-0 h-screen w-screen max-sm:hidden">
        <Suspense>
          <DynamicShaderComp color={"0x1726FD"} />
        </Suspense>
      </div>
      <div className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-sm:block">
        <Image src={"/assets/images/homepage/gradient-mobile.png"} alt="bg-gradient" className="w-full h-full object-cover" width={600} height={1080}/>
      </div>
    </section>
  );
};

export default Hero;
