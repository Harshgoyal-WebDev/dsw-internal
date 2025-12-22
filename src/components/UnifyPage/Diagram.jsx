'use client'

import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";
import EnterpriseLayer from "../EnterpriseLayer";

const Diagram = () => {
  return (

    <section
      className="h-full w-screen background-radial relative overflow-hidden container"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[10vw] max-md:items-start ">
        <div className="text-center max-md:w-full space-y-5 mt-10 flex flex-col items-center justify-center max-md:text-left max-md:items-start w-[70%]">
          <h3 className="text-40 max-md:w-full leading-[1.2] headingAnim max-md:text-[5vw] ">
           An orchestrator that brings together data, models, workflows and AI agents, all in a single platform, designed to deliver business outcome
          </h3>
        </div>

       <EnterpriseLayer/>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-radial from-[#081B57] via-[#030815]  to-[#030815] opacity-0 enterprise-bg"></div>
    </section>

    // </div>
  );
};

export default Diagram;
