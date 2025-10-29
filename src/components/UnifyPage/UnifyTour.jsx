'use client'
import Image from "next/image";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import Copy from "../Animations/Copy";

const UnifyTour = () => {
  return (
    <section className="w-screen h-fit container" id="tour">
      <div className="w-full flex flex-col gap-[2vw] items-center max-md:gap-[4vw]">
        <h2 className="text-60 headingAnim w-[40%] max-md:w-full text-center">Take a Lightning Tour of DSW UnifyAI</h2>
        <Copy>
          <p className="text-[#CACACA] text-center">
           Your AI foundation — not just for today’s use cases, but for tomorrow’s vision.
          </p>
        </Copy>

        <div className=" relative fadeup mt-[5vw] max-sm:w-full max-sm:h-[60vw] max-md:h-[40vw] max-md:w-full max-sm:mt-[12vw]  flex items-center justify-center">
            <div className="w-[80%] h-[35vw] rounded-lg overflow-hidden">
             <Image
                    src={'/assets/images/unify/tour.png'}
                    alt="AI Studio tour image"
                    fetchPriority="high"
                    className="w-full h-full object-cover brightness-30"
                    
                    width={900}
                    height={400}
                  />
                  </div>
                  <div className="absolute top-1/2 left-1/2 z-[99] -translate-x-1/2 -translate-y-1/2">
                   <PrimaryButton
                    text={"See it, to believe it!"}
                    className=""
                    href={"/#"}
                  />
                  </div>
        </div>
      </div>
    </section>
  );
};

export default UnifyTour;
