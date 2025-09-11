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
      className="h-full w-screen py-[7vw] px-[5vw] relative overflow-hidden "
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[5vw] ">
        <div className="text-center  space-y-5 mt-10 flex flex-col items-center justify-center">
          <h3 className="title-1 leading-[1.2] headingAnim text-[#1626FD] enterprise-title">
            Built to Orchestrate Enterprise AI
          </h3>
          <div className="w-[70%] flex justify-center text-[#111111] enterprise-content">
            <Copy>
            <p>
              From insurance to banking, retail, and more - UnifyAI is the backbone for enterprises <br/> that want to build, deploy, and scale AI
              with speed and confidence. ​
            </p>
            </Copy>
          </div>
        </div>

        <div className="w-full h-full flex relative items-center justify-center">
          <div className="h-fit w-[20%] border border-[#59595980] background-glass rounded-[2vw] px-[2.5vw] py-[2.5vw] fadeup absolute left-[5%] top-[5%]">
            <p className="text-[#CACACA] leading-[1.5]">
              Your All-in-One Playground to Simplify and Accelerate End-to-End
              AI/ML Use Cases
            </p>
          </div>
          <div className="h-[45vw] w-auto flex-1">
            <Image
              src={"/assets/images/homepage/enterprise-ai-shape.svg"}
              height={920}
              width={767}
              alt="enterprise-ai"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-fit w-[20%] border border-[#59595980] background-glass rounded-[2vw] px-[2.5vw] py-[2.5vw] self-end ml-auto fadeup absolute bottom-[20%] right-[3%] ">
            <p className="text-[#CACACA] leading-[1.5]">
              An In-built Playground for Rapid and Efficient GenAI Use Case
              Development
            </p>
          </div>

          <div>
            <div className="absolute top-[21%] left-[67%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw]">Presentation Layer</p>
              </Copy>
            </div>
            <div className="absolute top-[32%] left-[67%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw]">Use Cases</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] left-[67%]">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw]">Gen AI Studio</p>
              </Copy>
            </div>
            <div className="absolute top-[42%] left-[28%] text-right">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw]">AI Studio</p>
              </Copy>
            </div>
            <div className="absolute top-[50%] left-[27%] text-right">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw]">InsurAInce</p>
              </Copy>
            </div>
            <div className="absolute top-[58%] left-[29%] text-right">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw]">UnifyAI</p>
              </Copy>
            </div>
            <div className="absolute top-[68%] left-[19.5%] text-right">
              <Copy>
                <p className="text-[#E8E8E8] text-[1vw]">
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
