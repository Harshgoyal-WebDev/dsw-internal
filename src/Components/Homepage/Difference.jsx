import React, { Suspense } from "react";
import ShaderComp from "../BgShader/ShaderComp";
import Image from "next/image";

const Difference = () => {
  return (
    <section
      className="w-screen h-fit py-[7%] px-[5vw] relative max-sm:px-0 max-sm:py-[15%] max-sm:overflow-hidden "
      id="difference"
    >
      <h2 className="title-2 headingAnim max-sm:!text-[12vw] max-sm:pl-[7vw] max-sm:w-[90%]  text-center mb-[7vw] max-sm:text-left max-sm:justify-start max-sm:mb-[20vw]">
        Why insurAInce is Different? 
      </h2>
      <div className="w-full max-sm:w-screen max-sm:overflow-hidden max-sm:overflow-x-scroll max-sm:pb-[10%] relative z-[20] ">
        <div className="w-full flex flex-col justify-center items-center gap-[4.5vw] relative z-[2] max-sm:items-start max-sm:w-[170vw] max-sm:px-[7vw]">
          <div className="w-full flex justify-center gap-[1vw] max-sm:gap-[10vw]">
            <div className="w-[40%]  max-sm:w-[50%] space-y-[2.5vw] max-sm:space-y-[12vw]">
              <h3 className="text-center title-3 headingAnim text-[#f1f1f1] max-sm:w-[70%] max-sm:text-left max-sm:justify-start">
                Traditional AI Platforms
              </h3>
              <div className="w-full flex-col flex gap-[0.5vw] max-sm:gap-[3vw] ">
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start ">
                  Generic, one-size-fits-all 
                </div>
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start">
                  Long time to deploy 
                </div>
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start">
                  Retrofitted Compliance 
                </div>
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start">
                  Scattered stack
                </div>
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start">
                  High cost - every use case starts from scratch
                </div>
              </div>
            </div>
            <div className="w-[40%]  max-sm:w-[50%] space-y-[2.5vw] max-sm:space-y-[21vw]">
              <h3 className="text-center title-3 headingAnim text-[#f1f1f1] max-sm:text-left">
                InsurAInce
              </h3>
              <div className="w-full flex-col flex gap-[0.5vw] max-sm:gap-[3vw]">
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start">
                  Insurance-first, domain-trained 
                </div>
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start">
                  30 days or less for AI, hours for GenAI 
                </div>
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start">
                  Built-in Compliance (SOC 2, ISO, HIPAA, GDPR compliant) ​
                </div>
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start">
                  Unified AI platform, no vendor lock-in  
                </div>
                <div className="w-full text-[#cacaca] text-center h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start">
                  Pipelines, features, and models are reused intelligently –
                  reducing cost with every use case 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[30%] left-0 h-screen w-screen max-sm:hidden">
        <Suspense>
          <ShaderComp color={"0x1726FD"} />
        </Suspense>
      </div>
        <div className="w-screen h-screen absolute top-0 z-[10] left-0 hidden max-sm:block">
              <Image src={"/assets/images/homepage/gradient-mobile.png"} alt="bg-gradient" className="w-full h-full object-cover" width={600} height={1080}/>
      
            </div>

    </section>
  );
};

export default Difference;
