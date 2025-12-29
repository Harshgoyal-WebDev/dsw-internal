'use client'
import Image from "next/image";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import Copy from "../Animations/Copy";
import { useModal } from "../Common/ModalProvider";


const Tour = () => {
    const { openWalkThroughModal } = useModal();
  
  return (
    <section className="w-screen h-fit container" id="agentic-tour">
      <div className="w-full flex flex-col gap-[2vw] items-center max-md:gap-[4vw]">
        <h2 className="text-60 headingAnim w-[40%] max-md:w-full text-center">Take a Lightning Tour of DSW AgneticAI</h2>
        <Copy>
          <p className="text-[#CACACA] text-center">
           Your AI foundation — not just for today’s use cases, but for tomorrow’s vision.
          </p>
        </Copy>

        <div className=" relative fadeup mt-[5vw] max-sm:w-full max-sm:h-fit max-md:h-[40vw] max-md:w-full max-sm:mt-[8vw]  flex items-center justify-center">
            <div className="!w-[90%] h-[38vw] relative fadeup mt-[5vw] max-sm:w-full max-sm:h-[60vw] max-md:h-[40vw] max-md:w-full max-sm:mt-[12vw] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-black/80 absolute top-0 left-0 z-[5]"/>
             <Image
                    src={'/assets/images/homepage/agentic-tour.png'}
                    alt="Agentic tour image"
                    fetchPriority="high"
                    className="w-full h-full brightness-100"
                    width={900}
                    height={400}
                  />
                  </div>
                  <div className="absolute top-1/2 left-1/2 z-[99] -translate-x-1/2 -translate-y-1/2 max-sm:w-full max-sm:flex justify-center">
                   <PrimaryButton
                    text={"Start Walkthrough"}
                    className=""
                    href={"#"}
                    onClick={(e) => {
  e.preventDefault();
  openWalkThroughModal();
}}
                  />
                  </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
