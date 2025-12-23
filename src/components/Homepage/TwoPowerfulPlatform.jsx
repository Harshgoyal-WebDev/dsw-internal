"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function TwoPowerfulPlatform() {
  const [activeCard, setActiveCard] = useState('enterprise');

  return (
    <>
      {/* <section className="background-radial min-h-[40vh] container h-fit flex items-center justify-center ">
        <h2 className="text-100 headingAnim">Two Powerful Platforms</h2>
    </section> */}
      <section className="min-h-screen h-fit flex flex-col items-center justify-center space-y-[5vw] bg-[#f8f8f8] container max-md:min-h-fit max-md:space-y-[8vw] max-md:py-[10vw]">
        <h2 className="text-center  headingAnim text-primary-1 text-90 max-md:w-[90%] max-md:text-[8vw]">
          Two Powerful Platforms. <br /> One Intelligent Layer for your Enterprise.
        </h2>
        <div className="w-full h-full flex items-center  justify-center gap-[2.5vw] max-md:flex-col max-md:w-[90%] max-md:gap-[5vw]">
          <div
            className="w-[40%] h-fit min-h-[20vw] overflow-hidden relative flex items-start justify-center flex-col px-[3vw] py-[2vw] text-background space-y-[3vw] border border-[#88888880] rounded-[2vw] cursor-pointer max-md:w-full max-md:min-h-[50vw] max-md:px-[6vw] max-md:py-[6vw] max-md:space-y-[5vw] max-md:rounded-[4vw] max-md:items-center max-md:text-center"
            onMouseEnter={() => setActiveCard('enterprise')}
            onMouseLeave={() => setActiveCard('enterprise')}
          >
            <div
              className={`absolute inset-0 h-full w-full bg-gradient-to-r from-light-blue to-dark-blue transition-opacity ease-in-out duration-500 ${activeCard === 'enterprise' ? "opacity-100" : "opacity-0"
                }`}
            />
            <div className="w-[15vw] h-auto relative z-10 max-md:w-[25vw]">
              <Image
                className="h-full w-full object-contain transition-all duration-500"
                src={activeCard === 'enterprise' ? "/assets/icons/dswUnifyWhite.png" : "/assets/icons/dswUnifyBlue.png"}
                alt="enterprise-ai-platform"
                width={150}
                height={60}
              />
            </div>
            <h3 className={`text-40 ${activeCard === 'enterprise' ? 'text-white' : 'text-background'} relative z-10 w-[80%] max-sm:w-full max-md:text-[6vw]`}>
              The Enterprise AI Platform
            </h3>
            <p className={`w-[90%] ${activeCard === 'enterprise' ? 'text-white' : 'text-background'} relative z-10 max-md:text-[4vw]`}>
              Your foundation for building, governing, and scaling AI/ML + GenAI
              across the enterprise.
            </p>
          </div>
          <div
            className="w-[40%] h-fit min-h-[20vw] overflow-hidden relative flex items-start justify-center flex-col px-[3vw] py-[2vw] text-background space-y-[3vw] border border-[#88888880] rounded-[2vw] cursor-pointer max-md:w-full max-md:min-h-[50vw] max-md:px-[6vw] max-md:py-[6vw] max-md:space-y-[5vw] max-md:rounded-[4vw] max-md:items-center max-md:text-center"
            onMouseEnter={() => setActiveCard('agentic')}
            onMouseLeave={() => setActiveCard('agentic')}
          >
            <div
              className={`absolute inset-0 h-full w-full bg-gradient-to-r from-light-blue to-dark-blue transition-opacity ease-in-out duration-500 ${activeCard === 'agentic' ? "opacity-100" : "opacity-0"
                }`}
            />
            <div className="w-[15vw] h-auto relative z-10 max-md:w-[25vw]">
              <Image
                className="h-full w-full object-contain transition-all duration-500"
                src={activeCard === 'agentic' ? "/assets/icons/dswAgenticWhite.png" : "/assets/icons/dswAgencticBlueTheme.png"}
                alt="enterprise-ai-platform"
                width={150}
                height={60}
              />
            </div>
            <h3 className={`text-40 ${activeCard === 'agentic' ? 'text-white' : 'text-background'} relative z-10 max-md:text-[6vw]`}>
              The Enterprise Agents Platform
            </h3>
            <p className={`w-[100%] ${activeCard === 'agentic' ? 'text-white' : 'text-background'} relative z-10 max-md:text-[4vw]`}>
              Deploy GenAI agents, multi-agent workflows, and A2A orchestration
              in hours with full auditability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
