"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);


const EngagementModel = () => {


  return (
    <section
      id="engagement-model"
      className="container  overflow-hidden future-section h-fit  max-md:h-full relative max-md:gap-[5vw] flex flex-col gap-[9vw] justify-center items-center"
    >
      <h2 className="text-90 headingAnim text-center text-white-200">
        Engagement Models
      </h2>

      <div className=" future-card inset-0 flex px-[8vw] gap-[2vw] items-start max-md:flex-col max-md:px-0 max-md:static max-md:gap-[8vw] max-sm:mt-[15vw] max-md:mt-[7.5vw] fadeup">
        <div className="flex w-fit justify-start max-md:justify-center">
          <div
            className="relative w-[27.5vw] rounded-[2.5vw]  group cursor-pointer
    overflow-hidden flex flex-col border transition-opacity border-[#59595980] max-md:p-[5vw]
    justify-between p-[2.5vw] h-[27vw] background-glass backdrop-blur-[10px] max-md:w-[60vw] max-md:h-fit max-md:backdrop-blur-none max-md:rounded-[3.5vw] max-sm:w-full max-sm:rounded-[6vw] max-sm:p-[7vw]"
          >
            {/* gradient overlay */}
            <div
              className="absolute inset-0 rounded-[2.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />

            <div className="relative z-10 flex flex-col justify-between h-full max-md:space-y-[10vw]  ">
              <p
                className="flex  justify-center items-center text-[1.5vw] border  max-md:text-[5.5vw] font-head max-md:h-[14vw] max-md:w-[14vw]
        transition-all duration-500 ease-in-out
        group-hover:border-white group-hover:text-white-300 
        border-[#175CFE] text-[#175CFE] tracking-wider 
        h-[5.5vw] w-[5.5vw] rounded-full max-sm:text-[7.5vw] max-sm:w-[20vw] max-sm:h-[20vw]"
              >
                01
              </p>

              <p className="text-30">Managed Open Source Services</p>

              <p
                className="text-white-300 w-[95%] pb-[1vw] 
        transition-colors duration-500 ease-in-out"
              >
                End-to-end deployment, monitoring, patching, and optimization of
                Finacle open-source components.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-fit justify-center">
          <div
            className="relative w-[27.5vw] rounded-[2.5vw] fadeup group cursor-pointer
    overflow-hidden flex flex-col border border-[#59595980] 
    justify-between p-[2.5vw] h-[27vw] background-glass backdrop-blur-[10px] max-md:w-[60vw] max-md:h-fit max-md:backdrop-blur-none max-md:rounded-[3.5vw] max-sm:w-full max-sm:rounded-[6vw] max-sm:p-[7vw] max-md:p-[5vw]"
          >
            {/* gradient overlay */}
            <div
              className="absolute inset-0 rounded-[2.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />

            <div className="relative z-10 flex flex-col justify-between h-full max-md:space-y-[10vw]">
              <p
                className="flex justify-center items-center text-[1.5vw] border max-md:text-[5.5vw] font-head max-md:h-[14vw] max-md:w-[14vw] 
        transition-all duration-500 ease-in-out
        group-hover:border-white group-hover:text-white-300 
        border-[#175CFE] text-[#175CFE] tracking-wider 
        h-[5.5vw] w-[5.5vw] rounded-full max-sm:text-[7.5vw] max-sm:w-[20vw] max-sm:h-[20vw]"
              >
                02
              </p>

              <p className="text-30">Skill Enablement</p>

              <p
                className="text-white-300 w-[90%] pb-[1vw] 
        transition-colors duration-500 ease-in-out"
              >
                Ongoing workshops, certifications, and co-created enablement
                programs to strengthen Finacle and client teams.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-fit justify-end max-md:justify-center">
          <div
            className="relative w-[27.5vw] rounded-[2.5vw] fadeup group cursor-pointer
    overflow-hidden flex flex-col border border-[#59595980] 
    justify-between p-[2.5vw] h-[27vw] background-glass backdrop-blur-[10px] max-md:w-[60vw] max-md:h-fit max-md:backdrop-blur-none max-md:rounded-[3.5vw] max-sm:w-full max-sm:rounded-[6vw] max-sm:p-[7vw] max-md:p-[5vw]"
          >
            {/* gradient overlay */}
            <div
              className="absolute inset-0 rounded-[2.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />

            <div className="relative z-10 flex flex-col justify-between h-full max-md:space-y-[10vw]">
              <p
                className="flex justify-center items-center text-[1.5vw] border max-md:text-[5.5vw] font-head max-md:h-[14vw] max-md:w-[14vw] 
        transition-all duration-500 ease-in-out
        group-hover:border-white group-hover:text-white-300 
        border-[#175CFE] text-[#175CFE] tracking-wider 
        h-[5.5vw] w-[5.5vw] rounded-full max-sm:text-[7.5vw] max-sm:w-[20vw] max-sm:h-[20vw]"
              >
                03
              </p>

              <p className="text-30">Innovation Catalyst</p>

              <p
                className="text-white-300 w-[90%] pb-[1vw] 
        transition-colors duration-500 ease-in-out"
              >
                Continuous research and evaluation of emerging open-source
                technologies to enrich Finacle’s global roadmap and performance
                benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
