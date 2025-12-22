"use client";
import React, { useState } from "react";
import WhiteButton from "../Button/WhiteButton";
import PrimaryButton from "../Button/PrimaryButton";
import Copy from "../Animations/Copy";
import Image from "next/image";
import { FastTrackMainIcon, FeatureCraftMainIcon, SupportAiIcon } from "../Icons";

const steps = [
  {
    icon: <FeatureCraftMainIcon />,
    text: "Start with a high-value use case, whether in Insurance, Banking, or adjacent sectors.",
    gradient: false,
  },
  {
    icon: <SupportAiIcon />,
    text: "Build and deploy with hands-on support from our Data Science team and domain experts.",
    gradient: false,
  },
  {
    icon: <FastTrackMainIcon />,
    text: "Expand from one success to many with repeatable, scalable AI patterns across your enterprise.",
    gradient: false,
  },
];

export default function NextAIInitiative() {
  const [hoveredIndex, setHoveredIndex] = useState(1);

  return (
    <section className="min-h-screen h-fit flex flex-col items-center justify-center space-y-[3vw] max-md:space-y-[5vw] max-md:px-[7vw] max-md:py-[15%] container">
      <h2 className="text-center text-white-200 headingAnim w-[65%] max-md:w-[100%] text-60 max-md:text-[7vw]">
        Start your next AI Initiative with a Production Pilot
      </h2>

      <Copy>
        <p className="text-white-300 w-[50%] max-md:w-[100%] text-center">
          Take a real business use case, implement it with UnifyAI and AgenticAI
          in your environment, and harden it into a production-ready deployment
          with governance, monitoring, and measurable KPIs.
        </p>
      </Copy>
      <div className="flex items-center justify-center gap-[2vw] max-md:flex-col max-md:gap-[4vw] max-md:w-full fadeup">
        <PrimaryButton text="Try our Production Pilot Program " href="/production-pilot" />
        <WhiteButton text="Talk to our Solutions Team " href="/contact-us" />
      </div>
      <div className="flex items-center mt-[5vw] max-md:mt-[10vw] justify-center gap-[.2vw] max-md:flex-col max-md:gap-[4vw] fadeup">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`px-[2vw] max-md:px-[5vw] min-h-[20vw] max-md:min-h-[25vw] gap-[2vw] max-md:gap-[4vw] w-full rounded-[2vw] max-md:rounded-[3vw] background-glass text-center flex items-center justify-center flex-col py-[4vw] max-md:py-[6vw] border border-white/20 overflow-hidden relative cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(index)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-light-blue to-dark-blue transition-opacity ease-in duration-500 ${
                  step.gradient || hoveredIndex === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
                <div className={`w-[5vw] max-md:w-[15vw] h-auto relative z-[2] transition-all duration-500 ease-in-out ${step.gradient || hoveredIndex === index ? 'text-white' : 'text-primary-1'} flex items-center justify-center`}>
                  {step.icon}
              </div>
              <p className="w-[100%] relative z-[2] max-md:text-[3.5vw]">{step.text}</p>
            </div>
            {index < steps.length - 1 && <p className="text-50 max-md:text-[5vw] max-md:rotate-90">⟶</p>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
