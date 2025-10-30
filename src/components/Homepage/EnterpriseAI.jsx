'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Copy from "../Animations/Copy";
import EnterpriseLayer from "../EnterpriseLayer";

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

    <section
      id="enterpriseAI"
      className="h-full w-screen relative overflow-hidden container"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[5vw] max-md:items-start max-sm:space-y-[15vw] ">
        <div className="text-center  space-y-5 mt-10 flex flex-col items-center justify-center max-md:text-left max-md:items-start">
          <h2 className="text-90 leading-[1.2] headingAnim text-[#1626FD] enterprise-title ">
            Built to Orchestrate Enterprise AI
          </h2>
          <div className="w-[80%] flex justify-center text-[#111111] enterprise-content max-md:w-full">
            <Copy>
            <p>
              From insurance to banking, retail, and more - UnifyAI is the backbone for <br/> enterprises that want to build, deploy, and scale AI
              with speed and confidence. ​
            </p>
            </Copy>
          </div>
        </div>
          <EnterpriseLayer/>
      
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-radial from-[#081B57] via-[#030815]  to-[#030815] opacity-0 enterprise-bg"></div>
    </section>
  );
};

export default EnterpriseAI;
