import Image from "next/image";
import React from "react";

export default function Diagram() {
  return (
    <div
      className="h-fit w-full containerPadding flex-col gap-[10vw] flex items-center justify-center"
      style={{ background: "radial-gradient(circle, #081B57, #01030F 50%)" }}
    >
      <p className="heading50 text-center w-[72%]">
        An orchestrator that brings togethers data, models, workflows and AI
        agents, all in a single platform, designed to deliver business outcomes 
      </p>
      <div className="h-screen w-full flex items-center justify-center overflow-hidden  relative">
        <Image
          alt="diagram"
          src={"/assets/images/Unify/diagram/diagram.png"}
          height={500}
          width={500}
          className="w-full h-full absolute z-[0] object-contain"
        />

        <div className="absolute px-[1.8vw]  py-[3.5vw] text-content top-[4vw] left-[8vw] h-fit w-[17vw] rounded-[2vw] bg-white/7 border border-white/20">
          <p className="w-[90%] text-secondaryWhite">
            Your All-in-One Playground to Simplify and Accelerate End-to-End
            AI/ML Use Cases
          </p>
        </div>
        <div className="absolute px-[1.8vw]  py-[4.2vw] text-content bottom-[13vw] right-[4vw] h-fit w-[17vw] rounded-[2vw] bg-white/7 border border-white/20">
          <p className="w-[100%] text-secondaryWhite">
            An In-built Playground for Rapid and Efficient GenAI Use Case
            Development
          </p>
        </div>
        <div className="absolute top-[44%] translate-x-[-50%] left-[22.5vw] ">
          <ul className="flex flex-col text-[1vw] text-secondaryWhite text-right gap-[2.5vw] ">
            <li>AI Studio</li>
            <li>InsurAInce</li>
            <li>UnifyAI</li>
            <li>Infra: On-Premise/Cloud</li>
          </ul>
        </div>
        <div className="absolute top-[22%] translate-x-[-50%] right-[14.5vw] ">
          <ul className="flex flex-col text-[1vw] text-secondaryWhite text-left gap-[4vw] ">
            <li>Presentation Layer</li>
            <li>Use Cases</li>
            <li>UnifyAI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
