'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";

const Diagram = () => {
  return (

    <section
      className="h-full w-screen relative overflow-hidden container"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[5vw] max-sm:items-start max-sm: ">
        <div className="text-center  space-y-5 mt-10 flex flex-col items-center justify-center max-sm:text-left max-sm:items-start w-[75%]">
          <h3 className="title-3 leading-[1.2] headingAnim ">
           An orchestrator that brings togethers data, models, workflows and AI agents, all in a single platform, designed to deliver business outcomes 
          </h3>
         
        </div>

        <div className="w-full h-full flex relative items-center justify-center max-sm:static max-sm:flex-col max-sm:gap-[5vw]">
          <div className="h-fit w-[20%] border border-[#59595980] background-glass rounded-[2vw] px-[2.5vw] py-[2.5vw] fadeup absolute left-[5%] top-[5%] max-sm:w-full max-sm:static max-sm:px-[5vw] max-sm:py-[6vw] max-sm:rounded-[4vw] max-sm:order-[1]">
            <p className="text-white-300 leading-[1.5]">
              Your All-in-One Playground to Simplify and Accelerate End-to-End AI/ML Use Cases
            </p>
          </div>
          <div className="h-[45vw] w-auto flex-1 max-sm:h-auto max-sm:static max-sm:order-[0] max-sm:scale-[1.2] max-sm:mt-[20vw] max-sm:w-[120%] max-sm:translate-x-[-2%]">
            <Image
              src={"/assets/images/unify/diagram.svg"}
              height={920}
              width={767}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-fit w-[20%] border border-[#59595980] background-glass rounded-[2vw] px-[2.5vw] py-[2.5vw] self-end ml-auto fadeup absolute bottom-[20%] right-[3%]  max-sm:w-full max-sm:static max-sm:px-[5vw] max-sm:py-[6vw] max-sm:ml-0 max-sm:rounded-[4vw] max-sm:order-[2]">
            <p className="text-white-300 leading-[1.5]">
             An In-built Playground for Rapid and Efficient GenAI Use Case Development
            </p>
          </div>

          <div>
            <div className="absolute top-[21%] left-[67%] max-sm:top-[45%] max-sm:left-0">
              <Copy>
                <p className="text-white-200 text-[1vw] max-sm:text-[3.5vw]">Presentation Layer</p>
              </Copy>
            </div>
            <div className="absolute top-[32%] left-[67%] max-sm:left-0 max-sm:top-[50%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-sm:text-[3.5vw]">Use Cases</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] left-[67%] max-sm:left-[70%] max-sm:top-[54%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-sm:text-[3.5vw]">Gen AI Studio</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] left-[28%] text-right max-sm:left-0 max-sm:top-[54%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-sm:text-[3.5vw]">AI Studio</p>
              </Copy>
            </div>
            <div className="absolute top-[50%] left-[27%] text-right max-sm:left-0 max-sm:top-[58%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-sm:text-[3.5vw]">InsurAInce</p>
              </Copy>
            </div>
            <div className="absolute top-[58%] left-[29%] text-right max-sm:left-0 max-sm:top-[62%]">
              <Copy>
                <p className="text-white-200 text-[1vw] max-sm:text-[3.5vw]">UnifyAI</p>
              </Copy>
            </div>
            <div className="absolute top-[68%] left-[19.5%] text-right max-sm:left-0 max-sm:top-[66%] max-sm:w-[30%] max-sm:text-left">
              <Copy>
                <p className="text-white-200 text-[1vw] max-sm:text-[3.5vw]">
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
