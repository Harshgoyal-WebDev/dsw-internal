import React from "react";
import Copy from "../Animations/Copy";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Difference2 = () => {
  return (
    <>
      <section
        id="recognized"
        className="h-full w-screen relative overflow-hidden container"
      >
        <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[4vw]">
          <div className="text-center mt-10">
            <h3 className="text-60 headingAnim text-[#E8E8E8]">
              Why insurAInce is Different?
            </h3>
          </div>

          {/* GRID VERSION */}
          <div className="w-full max-md:w-[200vw]  origin-left max-md:mr-[5vw] max-md:mt-[10vw] h-full max-md:overflow-x-scroll max-md:pb-[8vw] flex items-center justify-center ">
            <div className="h-[40vw] flex-shrink-0  w-[70vw] max-md:translate-x-[0%] max-md:ml-[180vw] max-md:mr-[60vw]  max-md:w-full max-md:h-full fadeup background-glass  rounded-[2vw] border border-white/20  py-[3vw]  px-[3vw] max-md:px-[7vw] max-md:py-[7vw] max-md:rounded-[6vw]">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={100}
                inactiveZone={0.01}
                className=""
              />
              <div className="grid grid-cols-[1.8fr_1.8fr] border-collpase w-full h-full  border-t-0 border-l-0">
                {/* Header Row */}
                 <h3 className="text-50 font-head text-[#F26B0D] font-normal border-b border-white/10  max-md:text-[6vw] pl-[2vw] pb-[1vw]  max-md:pl-[8vw]">
                 Traditional AI Platforms
                </h3>
                <h3 className="text-50 font-head text-[#F26B0D] font-normal border border-white/10  pl-[3vw] border-t-0 border-r-0 pb-[1vw] max-md:pb-[4vw] max-md:text-[6vw]">
                 insurAInce
                </h3>

                {/* Row 1 */}
                 <div className="text-white-300 border-b border-white/10 pl-[2vw] py-[2vw]  max-md:p-[7vw]">
                 Generic, one-size-fits-all
                </div>
                <div className="text-white-300 border border-white/10 border-r-0 border-t-0 py-[2vw] pl-[3vw] max-md:pt-[7vw]">
                  Insurance-first, domain-trained
                </div>
                
               

                {/* Row 2 */}
                <div className="text-white-300 border-b border-white/10  pl-[2vw] py-[2vw]  max-md:p-[7vw]">
                 Long time to deploy
                </div>
                <div className="text-white-300 border border-white/10 pl-[3vw] border-t-0 border-r-0  py-[2vw] max-md:pt-[7vw]">
                  30 days or less for AI, hours for GenAI
                </div>
                
                

                {/* Row 3 */}
                <div className="text-white-300 border-b border-white/10  pl-[2vw] py-[2vw]  max-md:p-[7vw]">
                  Retrofitted Compliance
                </div>
                <div className="text-white-300 border border-white/10 pl-[3vw] border-t-0 border-r-0 py-[2vw] max-md:pt-[7vw]">
                  Built-in Compliance (SOC 2, ISO, HIPAA, GDPR compliant) ​
                </div>
                
                

                {/* Row 4 */}
                <div className="text-white-300 border-b border-white/10 pl-[2vw] py-[2vw]  max-md:p-[7vw]">
                  Scattered stack
                </div>
                <div className="text-white-300 border border-white/10 pl-[3vw] border-t-0 border-r-0 py-[2vw] max-md:pt-[7vw]">
                 Unified AI platform, no vendor lock-in
                </div>
                

                {/* Row 5 */}
                <div className="text-white-300   pl-[2vw] py-[2vw]  max-md:p-[7vw]">
                  High cost - every use case starts from scratch
                </div>
                <div className="text-white-300 border-l border-white/10 pl-[3vw] py-[2vw]  max-md:pt-[7vw]">
                 Pipelines, features, and models are reused intelligently –
                  reducing cost with every use case
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Difference2;
