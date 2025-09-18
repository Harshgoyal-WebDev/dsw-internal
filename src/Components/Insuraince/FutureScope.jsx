"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);

const scope = [
  {
    id: "01",
    content: `Industry's first verticalized SLM (Small Language Model) for insurance `,
  },
  {
    id: "02",
    content: `Continuous learning from operational feedback  `,
  },
  {
    id: "03",
    content: `Modular expansion into newer lines of business and territories `,
  },
];

const FutureScope = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".future-section",
          pin: true,
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers:true,
        },
      });

      tl.fromTo(
        ".future-card",
        {
          y: "100vh",
        },
        {
          y: "-42vh",
          stagger: 0.5,
          duration: 2,
          ease: "none",
        }
      );
    });
    return () => ctx.revert();
  });

  return (
    <div className="container overflow-hidden future-section h-[100vh] relative flex flex-col gap-[2.8vw] justify-center items-center">
      <h2 className="title-1 headingAnim text-center text-white-200">
        Ready for the Future
        <br />
        of Insurance AI 
      </h2>

      <Copy>
        <p className="text-white-300 w-[55%] text-center leading-[1.4]">
          insurAInce isn’t just built for today’s problems. It’s built for
          tomorrow’s scale. AI in insurance is moving beyond pilots and isolated
          use cases. insurAInce is building what’s next — an integrated
          operating system with domain-specific capabilities like:
        </p>
      </Copy>

      <div className="absolute future-card w-[100vw] inset-0 flex px-[8vw] gap-[0.5 vw] flex-col items-start">

        
        <div className="flex w-full justify-start">
          <div
            className="relative w-[27.5vw] rounded-[2.5vw] group cursor-pointer
    overflow-hidden flex flex-col border transition-opacity border-[#59595980] 
    justify-between p-[2.5vw] h-[22vw] background-glass backdrop-blur-[1vw]"
          >
            {/* gradient overlay */}
            <div
              className="absolute inset-0 rounded-[2.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <p
                className="flex justify-center items-center text-[1.5vw] border 
        transition-all duration-500 ease-in-out
        group-hover:border-white group-hover:text-white-300 
        border-[#175CFE] text-[#175CFE] tracking-wider 
        h-[5.5vw] w-[5.5vw] rounded-full"
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

        <div className="flex w-full justify-center">
          <div
            className="relative w-[27.5vw] rounded-[2.5vw] group cursor-pointer
    overflow-hidden flex flex-col border border-[#59595980] 
    justify-between p-[2.5vw] h-[22vw] background-glass backdrop-blur-[1vw]"
          >
            {/* gradient overlay */}
            <div
              className="absolute inset-0 rounded-[2.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <p
                className="flex justify-center items-center text-[1.5vw] border 
        transition-all duration-500 ease-in-out
        group-hover:border-white group-hover:text-white-300 
        border-[#175CFE] text-[#175CFE] tracking-wider 
        h-[5.5vw] w-[5.5vw] rounded-full"
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
    


      
        <div className="flex w-full justify-end">
          <div
            className="relative w-[27.5vw] rounded-[2.5vw] group cursor-pointer
    overflow-hidden flex flex-col border border-[#59595980] 
    justify-between p-[2.5vw] h-[22vw] background-glass backdrop-blur-[1vw]"
          >
            {/* gradient overlay */}
            <div
              className="absolute inset-0 rounded-[2.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <p
                className="flex justify-center items-center text-[1.5vw] border 
        transition-all duration-500 ease-in-out
        group-hover:border-white group-hover:text-white-300 
        border-[#175CFE] text-[#175CFE] tracking-wider 
        h-[5.5vw] w-[5.5vw] rounded-full"
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
    </div>
  );
};

export default FutureScope;
