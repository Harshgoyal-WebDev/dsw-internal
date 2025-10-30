'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import Copy from "./Animations/Copy";

const EnterpriseLayer = () => { 

  useGSAP(() => {
    const layers = document.querySelectorAll(".layer")
    layers.forEach((layer)=>{
      gsap.from(layer,{
        yPercent:20,
        opacity:0,
        duration:1.2,
        ease:"power2.out",
        scrollTrigger:{
          trigger:layer,
          start:"top 70%",
        }
      })
    })
    });

  ;
  return (
    <div
      id="enterpriseLayer"
      className="h-full w-full relative !bg-transparent"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[5vw] max-md:items-start ">
        <div className="w-full h-full flex relative items-center justify-center max-md:static max-md:flex-col max-md:gap-[5vw] ">
          <div className="h-fit w-[23%] border border-[#59595980] background-glass rounded-[2vw] space-y-[1vw] max-md:space-y-[3vw] px-[2.5vw] py-[2.5vw] fadeup absolute left-[5%] top-[5%] max-md:w-full max-md:static max-md:px-[5vw] max-md:py-[6vw] max-md:rounded-[4vw] max-md:order-[1]">
            <p className="text-[#CACACA] leading-[1.5] font-head font-medium">UnifyAI</p>
            <p className="text-[#CACACA] leading-[1.5]">
              Your All-in-One Playground to Simplify and Accelerate End-to-End
              AI/ML Use Cases
            </p>
          </div>
          <div className="h-full w-full flex flex-col items-center">
          <div className="h-[16.5vw] w-[30%] flex-1 max-md:h-auto max-md:relative max-md:order-[0] max-md:w-[90%] relative z-[50] layer">
            <Image
              src={"/assets/images/about/layer-1.png"}
              height={312}
              width={516}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[16.5vw] w-[30%] flex-1 max-md:h-auto max-md:relative max-md:order-[0] max-sm:mt-[-34vw] max-md:mt-[-35vw] max-md:w-[90%] mt-[-12vw] relative z-[40] layer">
            <Image
              src={"/assets/images/about/layer-1.png"}
              height={312}
              width={516}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[16.5vw] w-[30%] flex-1 max-md:h-auto max-md:relative max-md:order-[0] max-sm:mt-[-34vw] max-md:mt-[-35vw] max-md:w-[90%] mt-[-12vw] relative z-[30] layer">
            <Image
              src={"/assets/images/about/layer-1.png"}
              height={312}
              width={516}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[16.5vw] w-[30%] flex-1 max-md:h-auto max-md:relative max-md:order-[0] max-sm:mt-[-34vw] max-md:mt-[-35vw] max-md:w-[90%] mt-[-12vw] relative z-[20] layer">
            <Image
              src={"/assets/images/about/layer-1.png"}
              height={312}
              width={516}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[16.5vw] w-[30%] flex-1 max-md:h-auto max-md:relative max-md:order-[0] max-sm:mt-[-34vw] max-md:mt-[-35vw] max-md:w-[90%] mt-[-12vw] relative z-[10] layer">
            <Image
              src={"/assets/images/about/layer-1.png"}
              height={312}
              width={516}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[16.5vw] w-[30%] flex-1 max-md:h-auto max-md:relative max-md:order-[0] max-sm:mt-[-34vw] max-md:mt-[-35vw] max-md:w-[90%] mt-[-12vw] relative z-[5] layer">
            <Image
              src={"/assets/images/about/layer-1.png"}
              height={312}
              width={516}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          </div>
          <div className="h-fit w-[23%] border border-[#59595980] background-glass rounded-[2vw] space-y-[1vw] max-md:space-y-[3vw] px-[2.5vw] py-[2.5vw] self-end ml-auto fadeup absolute bottom-[20%] right-[3%]  max-md:w-full max-md:static max-md:px-[5vw] max-md:py-[6vw] max-md:ml-0 max-md:rounded-[4vw] max-md:order-[2]">
            <p className="text-[#CACACA] leading-[1.5] font-head font-medium">AgenticAI</p>

            <p className="text-[#CACACA] leading-[1.5]">
              An In-built Playground for Rapid and Efficient GenAI Use Case
              Development
            </p>
          </div>
          <div className="">
            <div className="absolute top-[19%] left-[67%] max-md:top-[12%] max-md:left-0 max-sm:top-[10%]  max-sm:left-0 z-[51]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw] max-md:w-[99%] ">Presentation Layer</p>
              </Copy>
            </div>
            <div className="absolute top-[31%] left-[67%] max-md:left-0 max-sm:top-[18%] max-md:top-[20%] z-[51]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">Use Cases</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] left-[67%] max-sm:left-[70%] max-sm:top-[25%] max-md:top-[27%] max-md:left-[80%] z-[51]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">AgenticAI</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] right-[67%] text-right max-sm:left-0 max-md:right-auto max-sm:top-[25%] max-md:top-[27%] max-md:left-0 z-[51]" >
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">AI Studio</p>
              </Copy>
            </div>
            <div className="absolute top-[53%] right-[67%] text-right max-sm:left-0 max-md:right-auto max-sm:top-[30%] max-md:top-[33%] max-md:left-0 z-[51]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">InsurAInce</p>
              </Copy>
            </div>
            <div className="absolute top-[65%] right-[67%] text-right max-sm:left-0 max-md:right-auto max-sm:top-[35%] max-md:top-[39%] max-md:left-0 z-[51]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">UnifyAI</p>
              </Copy>
            </div>
            <div className="absolute top-[77%] right-[67%] text-right max-sm:left-0 max-sm:top-[40%] max-md:right-auto max-sm:w-[30%] max-md:text-left max-md:top-[45%] max-md:left-0 z-[51]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-md:text-[2.7vw] max-sm:text-[3.5vw]">
                  Infra: On - Premise/Cloud
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseLayer;
