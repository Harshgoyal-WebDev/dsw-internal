import React, { Suspense, useEffect, useRef } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import { motion } from "motion/react";
// import Gradient from "./Gradient";
import gsap from "gsap";
import { SplitInLine, SplitInLineOnly } from "../splitTextUtils";
import ShaderComp from "../BgShader/ShaderComp";

const lineCount = 4;

const AnimatedLine = ({ delay }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1, transition: { duration: 1.2, delay } }}
    className="w-[0.1px] h-full bg-white/15 origin-top overflow-y-hidden"
  >
    <motion.span
      initial={{ y: 0 }}
      animate={{ y: "48vw" }}
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
  const para = useRef(null);

  useEffect(() => {
    SplitInLineOnly(heading.current);
    const lines = heading.current.querySelectorAll(".line");
    // const heroEl = 
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
    // gsap.from(paraLines, {
    //   yPercent: 150,
    //   delay: 4.5,
    //   duration: 1.2,
    //   stagger: 0.05,
    //   ease: "power3.out",
    // });
    // gsap.from(".")
  }, []);

  return (
    <section className="h-[70vw] w-screen relative bg-background" id="hero">
      <div className="flex flex-col items-center justify-start w-full h-full pt-[18vw] relative z-[12]">
        <div className="w-[70%] text-center space-y-6 pb-5">
          <h1
            ref={heading}
            className="text-[5.2vw] font-head leading-[1.2] heroHeadAnim text-[#E8E8E8]"
          >
            Launch AI use cases in days. GenAI in hours.​
          </h1>
          <p
            ref={para}
            className="text-[#CACACA] w-full mx-auto overflow-hidden"
          >
            The enterprise platform built for speed and scale.​ Go from pilot to
            production – faster and smarter with DSW UnifyAI​
          </p>
          <div className="flex items-center justify-center gap-6 mt-10 ">
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
                  transition: { duration: 1, delay: 4.8 },
                }}
              >
                <Component href="#" text={text} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Vertical Lines */}
      <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw]">
        {[...Array(lineCount)].map((_, i) => (
          <AnimatedLine key={i} delay={i * 0.2} />
        ))}
      </div>
      <div className="absolute top-[30%] left-0 h-screen w-screen">
        <Suspense>
          <ShaderComp color={"0x1726FD"} />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
