"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);

const FutureScope = () => {
  return (
    <section className="container overflow-hidden future-section h-fit max-md:h-full relative max-md:gap-[5vw] flex flex-col gap-[2.8vw] justify-center items-center">
      <h2 className="text-90 headingAnim text-center text-white-200">
        Ready for the Future
        <br />
        of Insurance AI 
      </h2>

      <Copy>
        <p className="text-white-300 w-[55%] max-md:w-[100%] text-center max-md:px-[2vw] mb-[5vw]">
         This purpose-built solution for insurers isn't just built for today's problems. It’s built for
          tomorrow’s scale. AI in insurance is moving beyond pilots and isolated
          use cases. This solution is building what's next- an integrated operating system with domain-specific capabilities like:
        </p>
      </Copy>

      <div className=" future-card inset-0 flex px-[8vw] gap-[2vw] items-start max-md:flex-col max-md:px-0 max-md:static max-md:gap-[4vw] max-sm:mt-[15vw] max-md:mt-[7.5vw] fadeup">
        <div className="flex w-fit justify-start max-md:justify-center">
          <div
            className="relative w-[27.5vw] rounded-[2.5vw]  group cursor-pointer
    overflow-hidden flex flex-col border transition-opacity border-[#59595980] max-md:p-[5vw]
    justify-between p-[2.5vw] h-[22vw] background-glass backdrop-blur-[10px] max-md:w-[60vw] max-md:h-fit max-md:backdrop-blur-none max-md:rounded-[3.5vw] max-sm:w-full max-sm:rounded-[6vw] max-sm:p-[7vw]"
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
                className="flex justify-center items-center text-[1.5vw] border  max-md:text-[5.5vw] font-head max-md:h-[14vw] max-md:w-[14vw]
        transition-all duration-500 ease-in-out
        group-hover:border-white group-hover:text-white-300 
        border-[#175CFE] text-[#175CFE] tracking-wider 
        h-[5.5vw] w-[5.5vw] rounded-full max-sm:text-[7.5vw] max-sm:w-[20vw] max-sm:h-[20vw]"
              >
                01
              </p>

              <p
                className="text-white-300 w-[90%] pb-[1vw] 
        transition-colors duration-500 ease-in-out"
              >
                Industry's first verticalized SLM (Small Language Model) for
                insurance
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-fit justify-center">
          <div
            className="relative w-[27.5vw] rounded-[2.5vw] fadeup group cursor-pointer
    overflow-hidden flex flex-col border border-[#59595980] 
    justify-between p-[2.5vw] h-[22vw] background-glass backdrop-blur-[10px] max-md:w-[60vw] max-md:h-fit max-md:backdrop-blur-none max-md:rounded-[3.5vw] max-sm:w-full max-sm:rounded-[6vw] max-sm:p-[7vw] max-md:p-[5vw]"
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

              <p
                className="text-white-300 w-[90%] pb-[1vw] 
        transition-colors duration-500 ease-in-out"
              >
                Continuous learning from operational feedback 
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-fit justify-end max-md:justify-center">
          <div
            className="relative w-[27.5vw] rounded-[2.5vw] fadeup group cursor-pointer
    overflow-hidden flex flex-col border border-[#59595980] 
    justify-between p-[2.5vw] h-[22vw] background-glass backdrop-blur-[10px] max-md:w-[60vw] max-md:h-fit max-md:backdrop-blur-none max-md:rounded-[3.5vw] max-sm:w-full max-sm:rounded-[6vw] max-sm:p-[7vw] max-md:p-[5vw]"
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

              <p
                className="text-white-300 w-[90%] pb-[1vw] 
        transition-colors duration-500 ease-in-out"
              >
                Modular expansion into newer lines of business and territories 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;
