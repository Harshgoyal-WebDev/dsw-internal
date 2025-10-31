"use client";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import SpotlightCard from "../Homepage/SpotlightCard/SpotLightCard";

const Help = () => {
  return (
    <section
      id="contact-help"
      className="w-screen h-full container space-y-[3vw] !pb-[15vw] max-md:space-y-[15vw] mt-[-30vh] relative z-[50] max-md:mt-0"
    >
      <h2 className="text-90 font-head headingAnim">How can we help you?</h2>
      <div className="flex justify-between items-center w-full max-md:gap-[4vw] max-sm:gap-[8vw] pt-[5vw] max-md:flex-col max-md:pt-0">
        <SpotlightCard className="fadeup !w-[49%] p-[3vw] py-[3.5vw]   bg-white/5 background-glass max-md:h-full max-md:!w-full  max-md:rounded-3xl max-md:justify-between max-md:px-[7vw] max-md:py-[8vw] ">
          <div className="w-full h-full space-y-[2.5vw]  relative z-[2] max-md:space-y-[7vw]">
            <h3 className="text-50 font-head">Sales</h3>
            <p className="text-white-300 ">
              Become the backbone of enterprise AI. Just as Linux became the
              foundation of modern computing, DSW UnifyAI is emerging as the OS
              for AI - a platform that brings together open innovation
            </p>
            <PrimaryButton href="#contact-form" text={"Contact Sales"} />
          </div>
        </SpotlightCard>
        <SpotlightCard className="fadeup !w-[49%] p-[3vw] py-[3.5vw]   bg-white/5 background-glass max-md:h-full max-md:!w-full  max-md:rounded-3xl max-md:justify-between max-md:px-[7vw] max-md:py-[8vw] ">
          <div className="w-full h-full space-y-[2.5vw]  relative z-[2] max-md:space-y-[7vw]">
            <h3 className="text-50 font-head">Schedule a Call</h3>
            <p className="text-white-300 ">
              Become the backbone of enterprise AI. Just as Linux became the
              foundation of modern computing, DSW UnifyAI is emerging as the OS
              for AI - a platform that brings together open innovation
            </p>
            <PrimaryButton
              href="https://calendly.com/"
              text={"Schedule a Call"}
              target="_blank"
            />
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default Help;
