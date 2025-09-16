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
import { fadeIn, fadeUp, headingAnim, lineAnim, paraAnim } from "@/Components/Animations/gsapAnimations";
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

const Hero = () => {
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
    gsap.fromTo(
      lines,
      {
        maskPosition: "100% 100%",
      },
      {
        maskPosition: "0% 100%",
        delay: 0.7,
        stagger: 0.2,
        duration: 7,
        ease: "power2.out",
      }
    );
    gsap.from(heroEl.lines, {
      yPercent: 150,
      delay: 1.5,
      duration: 1.2,
      stagger: 0.04,
      ease: "power3.out",
    });
    gsap.fromTo('.hero-img', {
      yPercent:100,
      opacity:0,
    } , {
      opacity:1,
      yPercent:0,
      delay:1.7,
    })
    // gsap.from(".")
  }, []);

  return (
    <section className="h-[70vw] w-screen relative bg-background max-sm:h-screen max-sm:px-[7vw]" id="hero">
      <div className="flex flex-col items-center justify-start w-full h-full pt-[30vh] relative z-[12] max-sm:pt-[15vh]">
        <div className="flex items-center justify-center flex-col w-[80%] text-center gap-[2.5vw] pb-5 max-sm:w-[90%] max-sm:space-y-[12vw]">
          <h1
            ref={heading}
            className="title-1 font-head heroHeadAnim text-white-200"
          >
           Enterprise AI Platform for Insurance
          </h1>
          <div className=" h-auto w-[16vw] hero-img">
            <Image src={"/assets/icons/insuraince/insuraince.svg"} height={46} width={297} alt="insuraince" className="h-full w-full object-cover fadeUp"/>
          </div>
          <p
            className={`text-white-300 w-full mx-auto overflow-hidden heroPara`}
          >
           Purpose-Built, Proven, and Production-Ready . InsurAInce is the enterprise AI platform designed for insurers to build GenAI agents in hours, deploy AI use cases in days, and scale confidently with compliance, speed, and accuracy – all through your policy lifecycle. 
          </p>
          
          <div className="flex items-center justify-center gap-6 mt-2 max-sm:flex-col max-sm:gap-[5vw]">
            {[
              { Component: PrimaryButton, text: "Explore the Platform ", link: "/#" },
              { Component: WhiteButton, text: "Book a demo", link: "/#"},
            ].map(({ Component, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 1.7,
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
          <AnimatedLine key={i} delay={5 + (i * 0.2)} />
        ))}
      </div>
      <div className="absolute top-[30%] left-0 h-screen w-screen max-sm:hidden">
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
