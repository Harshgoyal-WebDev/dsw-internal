'use client'

import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";

const Diagram = () => {
  return (

    <section
      className="h-full w-screen background-radial relative overflow-hidden container"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[5vw] max-md:items-start ">
        <div className="text-center max-md:w-full space-y-5 mt-10 flex flex-col items-center justify-center max-md:text-left max-md:items-start w-[75%]">
          <h3 className="text-40 max-md:w-full leading-[1.2] headingAnim max-md:text-[5vw] ">
           An orchestrator that brings togethers data, models, workflows and AI agents, all in a single platform, designed to deliver business outcomes 
          </h3>
         
        </div>

        <div className="w-full h-full flex relative items-center justify-center max-md:static max-md:flex-col max-md:gap-[5vw]">
          <div className="h-fit w-[23%] border border-[#59595980] background-glass rounded-[2vw] space-y-[1vw] max-md:space-y-[3vw] px-[2.5vw] py-[2.5vw] fadeup absolute left-[5%] top-[5%] max-md:w-full max-md:static max-md:px-[5vw] max-md:py-[6vw] max-md:rounded-[4vw] max-md:order-[1]">
             <p className="text-[#CACACA] leading-[1.5] font-head font-medium"> AI Studio</p>
            <p className="text-white-300 leading-[1.5]">
              Your All-in-One Playground to Simplify and Accelerate End-to-End AI/ML Use Cases
            </p>
          </div>
          <div className="h-[45vw] w-auto flex-1 max-md:h-auto max-md:static max-md:order-[0] max-md:scale-[1.2] max-sm:mt-[20vw] max-md:mt-[10vw] max-md:w-full max-sm:w-[120%] max-md:translate-x-[-2%]">
            <Image
              src={"/assets/images/unify/diagram.svg"}
              height={920}
              width={767}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-fit w-[23%] border border-[#59595980] background-glass rounded-[2vw] space-y-[1vw] max-md:space-y-[3vw] px-[2.5vw] py-[2.5vw] self-end ml-auto fadeup absolute bottom-[20%] right-[3%]  max-md:w-full max-md:static max-md:px-[5vw] max-md:py-[6vw] max-md:ml-0 max-md:rounded-[4vw] max-md:order-[2]">
            <p className="text-[#CACACA] leading-[1.5] font-head font-medium">Gen AI Studio</p>
            <p className="text-white-300 leading-[1.5]">
             An In-built Playground for Rapid and Efficient GenAI Use Case Development
            </p>
          </div>

          <div className="">
            <div className="absolute top-[21%] left-[67%] max-md:top-[33%] max-md:left-0">
              <Copy>
                <p className="text-white-200 text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">Presentation Layer</p>
              </Copy>
            </div>
            <div className="absolute top-[32%] left-[67%] max-md:left-0 max-md:top-[38%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">Use Cases</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] left-[67%] max-md:left-[70%] max-md:top-[45%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">Gen AI Studio</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] left-[28%] text-right max-md:left-0 max-md:top-[43%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">AI Studio</p>
              </Copy>
            </div>
            <div className="absolute top-[50%] left-[27%] text-right max-md:left-0 max-md:top-[48%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">InsurAInce</p>
              </Copy>
            </div>
            <div className="absolute top-[58%] left-[29%] text-right max-md:left-0 max-md:top-[53%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">UnifyAI</p>
              </Copy>
            </div>
            <div className="absolute top-[68%] left-[19.5%] text-right max-md:left-0 max-md:top-[58%] max-md:w-[30%] max-md:text-left">
              <Copy>
                <p className="text-white-200 text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">
                  Infra: On - Premise/Cloud
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-radial from-[#081B57] via-[#030815]  to-[#030815] opacity-0 enterprise-bg"></div>
    </section>

    // </div>
  );
};

export default Diagram;
