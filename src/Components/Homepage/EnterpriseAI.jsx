import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";

const EnterpriseAI = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#enterpriseAI",
        start: "top 50%",
        end: "15% 20% ",
        scrub: true,
        // markers: true,
      },
    });
    tl.fromTo(
      "#enterpriseAI,#WhyUnify",
      {
        backgroundColor: "#f8f8f8",
      },
      {
        backgroundColor: "#030815",
      }
    );
    tl.fromTo(
      ".enterprise-title",
      {
        color: "#1626FD",
      },
      {
        color: "#e8e8e8",
      },
      "<"
    );
    tl.fromTo(
      ".enterprise-content",
      {
        color: "#111111",
      },
      {
        color: "#e8e8e8",
      },
      "<"
    );
    gsap.to(".enterprise-bg", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#enterpriseAI",
        start: "30% 50%",
        end: "35% 20% ",
        scrub: true,
        // markers: true,
      },
    });
  });
  return (
    // <div className='w-full h-full'>

    <section
      id="enterpriseAI"
      className="h-full w-screen py-[7vw] px-[5vw] relative overflow-hidden max-sm:px-[7vw] max-sm:py-[15vw] "
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[5vw] ">
        <div className="text-center  space-y-5 mt-10 flex flex-col items-center justify-center max-sm:text-left">
          <h3 className="title-1 leading-[1.2] headingAnim text-[#1626FD] enterprise-title ">
            Built to Orchestrate Enterprise AI
          </h3>
          <div className="w-[70%] flex justify-center text-[#111111] enterprise-content max-sm:w-full">
            <Copy>
            <p>
              From insurance to banking, retail, and more - UnifyAI is the backbone for enterprises <br/> that want to build, deploy, and scale AI
              with speed and confidence. ​
            </p>
            </Copy>
          </div>
        </div>

        <div className="w-full h-full flex relative items-center justify-center max-sm:static max-sm:flex-col max-sm:gap-[5vw]">
          <div className="h-fit w-[20%] border border-[#59595980] background-glass rounded-[2vw] px-[2.5vw] py-[2.5vw] fadeup absolute left-[5%] top-[5%] max-sm:w-full max-sm:static max-sm:px-[5vw] max-sm:py-[6vw] max-sm:rounded-[4vw] max-sm:order-[1]">
            <p className="text-[#CACACA] leading-[1.5]">
              Your All-in-One Playground to Simplify and Accelerate End-to-End
              AI/ML Use Cases
            </p>
          </div>
          <div className="h-[45vw] w-auto flex-1 max-sm:h-[125vw] max-sm:static max-sm:order-[0] max-sm:scale-[1.2]">
            <Image
              src={"/assets/images/homepage/enterprise-ai-shape.svg"}
              height={920}
              width={767}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-fit w-[20%] border border-[#59595980] background-glass rounded-[2vw] px-[2.5vw] py-[2.5vw] self-end ml-auto fadeup absolute bottom-[20%] right-[3%]  max-sm:w-full max-sm:static max-sm:px-[5vw] max-sm:py-[6vw] max-sm:ml-0 max-sm:rounded-[4vw] max-sm:order-[2]">
            <p className="text-[#CACACA] leading-[1.5]">
              An In-built Playground for Rapid and Efficient GenAI Use Case
              Development
            </p>
          </div>

          <div>
            <div className="absolute top-[21%] left-[67%] max-sm:top-[40%] max-sm:left-[5%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-sm:text-[3.5vw]">Presentation Layer</p>
              </Copy>
            </div>
            <div className="absolute top-[32%] left-[67%] max-sm:left-[5%] max-sm:top-[48%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-sm:text-[3.5vw]">Use Cases</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] left-[67%] max-sm:left-[70%] max-sm:top-[52%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-sm:text-[3.5vw]">Gen AI Studio</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] left-[28%] text-right max-sm:left-[5%] max-sm:top-[52%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-sm:text-[3.5vw]">AI Studio</p>
              </Copy>
            </div>
            <div className="absolute top-[50%] left-[27%] text-right max-sm:left-[5%] max-sm:top-[54.5%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-sm:text-[3.5vw]">InsurAInce</p>
              </Copy>
            </div>
            <div className="absolute top-[58%] left-[29%] text-right max-sm:left-[5%] max-sm:top-[58%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-sm:text-[3.5vw]">UnifyAI</p>
              </Copy>
            </div>
            <div className="absolute top-[68%] left-[19.5%] text-right max-sm:left-[5%] max-sm:top-[62%] max-sm:w-[20%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw] max-sm:text-[3.5vw]">
                  Infra: On-Premise/Cloud
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

export default EnterpriseAI;
