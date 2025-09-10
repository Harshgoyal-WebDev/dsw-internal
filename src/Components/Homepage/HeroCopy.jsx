import React, { useEffect, useRef } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import { motion } from "motion/react";
import Gradient from "./Gradient";
import gsap from "gsap";
import { SplitInLine, SplitInLineOnly } from "../splitTextUtils";
import Image from "next/image";
import Line from "../Line";
import {useLenis} from "lenis/react"

const lineCount = 4;

const Hero = () => {
  const lenis = useLenis()
  const heading = useRef(null);
  const para = useRef(null);

  useEffect(() => {
    SplitInLineOnly(heading.current);
    SplitInLine(para.current);
    const lines = heading.current.querySelectorAll(".line");
    const paraLines = para.current.querySelectorAll(".line-internal");
    gsap.fromTo(lines, {
      maskPosition: "100% 100%",
    }, {
      maskPosition: "0% 100%",
      delay: 5.5,
      stagger: 0.2,
      duration: 6.5,
      ease: "power2.out",
    })
    gsap.from(paraLines, {
      yPercent: 150,
      delay: 7,
      duration: 1.2,
      stagger: 0.05,
      ease: "power3.out"
    });
  }, []);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineDraws = document.querySelectorAll(".hero-lineDraw");
        gsap.from(lineDraws, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 2,
          yPercent: 100,
          stagger: 0.2,
          delay:5,
          ease: "power3.out",
        });
    })
    return () => ctx.revert()
  }, []);
    useEffect(() => {
    lenis && lenis.stop();

    const timeout = setTimeout(() => {
      lenis && lenis.start();
    }, 8000);

    return()=>clearTimeout(timeout)
  }, [lenis]);

  return (
    <section className="h-[70vw] w-screen relative" id="hero">
      <div className="flex flex-col items-center justify-start w-full h-full pt-[15vw] relative">
        <div className="w-[62%] text-center space-y-6 pb-5">
          <motion.h1 animate={{ opacity: 1 }} ref={heading} className="text-[5.2vw] font-head leading-[1.2] heroHeadAnim opacity-0 relative z-[13]" >
            AI-Powered Innovation with Data Science Wizards
          </motion.h1>
          <motion.p animate={{ opacity: 1 }} ref={para} className="text-[#CACACA] w-full content-p font-body mx-auto overflow-hidden heroParaAnim opacity-0 relative z-[13]">
            Whether you're in insurance, finance, healthcare, or retail, our AI
            solutions accelerate your journey from concept to production: AI/ML
            Use Cases in 3-4 weeks and GenAI in 2-4 hours
          </motion.p>
          <div className="flex items-center justify-center gap-6 mt-10 relative z-[70]">
            {[{ Component: PrimaryButton, text: "Start Walkthrough" }, { Component: WhiteButton, text: "Schedule a Call" }].map(({ Component, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 7.4 } }}
              >
                <Component href="#" text={text} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Vertical Lines */}
      {/* <div className="w-screen h-[55vw] absolute top-0 left-0 z-[-1] flex justify-center gap-[22vw]">
        {[...Array(lineCount)].map((_, i) => (
          <AnimatedLine key={i} delay={i * 0.2} />
        ))}
      </div> */}
      <div className="absolute top-[50%] left-[-20%] w-[70vw] z-[12] rotate-90">
      <Line/>
      </div>
      <div className="absolute top-[50%] left-[2%] w-[70vw] z-[12] rotate-90">
      <Line/>
      </div>
      <div className="absolute top-[50%] left-[27%] w-[70vw] z-[12] rotate-90">
      <Line/>
      </div>
      <div className="absolute top-[50%] left-[48%] w-[70vw] z-[12] rotate-90">
      <Line/>
      </div>

      {/* Gradient Background */}
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="w-screen h-[120vh] absolute bottom-[7%] left-0 right-0 z-[-2]">
        <Gradient />
      </motion.div>
      <div className="h-[40vw] w-screen overflow-visible absolute top-0 left-0 right-0 ">
        <Image
          src="/assets/images/homepage/hero-gradient-final.png"
          width={1920}
          height={1000}
          alt="hero-gradient"
          className=" w-full object-top size-full translate-y-[80%] relative z-[13]"
        />
      </div>
    </section>
  );
};

export default Hero;
