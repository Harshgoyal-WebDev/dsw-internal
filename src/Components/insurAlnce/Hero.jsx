 "use client";

import React, {Suspense} from "react";
import Image from "next/image";
import { motion } from "motion/react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import dynamic from "next/dynamic";
import { fadeIn, fadeUp, headingAnim, lineAnim, paraAnim } from "@/Components/Animations/gsapAnimations";

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
  ssr: true,
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

  headingAnim();
    paraAnim();
    fadeUp();
    fadeIn();
    lineAnim();

  return (
    <section className="w-screen h-screen relative overflow-hidden">
      {/* Shader Background */}
       <div className="absolute top-[30%] left-0 h-screen w-screen max-sm:hidden">
              <Suspense>
                <DynamicShaderComp color={"0x1726FD"} />
              </Suspense>
            </div>

        <div className="w-screen h-[55vw] absolute top-0 left-0 z-[10] flex justify-center gap-[22vw] max-sm:hidden">
        {[...Array(lineCount)].map((_, i) => (
          <AnimatedLine key={i} delay={5+(i * 0.2)} />
        ))}
      </div>

      {/* Hero Content */}
     <div className='w-screen relative  h-screen flex justify-center items-center '>
        <div className='flex flex-col items-center gap-[1vw] px-[8vw]'>

            <h1 className='font-normal text-[5.5vw]'>Enterprise AI Platform for Insurance</h1>
            <Image src='/assets/icons/insurAlnce/Insur/insur-logo.png' width={500} height={500} alt='insur-logo' className='h-[2.5vw] w-fit' />

            <p className='text-center text-offwhite text-[1.3vw] leading-[1.3] pt-[1vw] px-[2vw]'>
                Purpose-Built, Proven, and Production-Ready . InsurAInce is the enterprise AI platform designed for insurers to build GenAI agents in hours, deploy AI use cases in days, and scale confidently with compliance, speed, and accuracy – all through your policy lifecycle. 
            </p>
            {/* <div className='flex gap-[1vw] pt-[1.5vw]'>
                 <Button bgColor='bg-gradient-to-r from-[#F16B0D] to-[#E61216]' title='Explore the Platform' href='/' textColor='text-white' />
                <Button bgColor='bg-white' title='Book a Demo' href='/' textColor='text-black' />
               
            </div> */}
            <div className="flex items-center z-[20] justify-center gap-6 mt-10 max-sm:flex-col max-sm:gap-[5vw]">
              <div className="fadeup">
                        <PrimaryButton text="Explore the Platform" href="#" />
                    </div>
                    <div className="fadeup">
                        <WhiteButton text="Book a Demo" href="#" />
                    </div>
          </div>
        </div>
    </div>
    </section>
  );
};

export default Hero;
