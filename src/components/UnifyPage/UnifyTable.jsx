import React from "react";
import Copy from "../Animations/Copy";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const UnifyTable = () => {
  return (
    <>
      <section
        id="recognized"
        className="h-full w-screen relative overflow-hidden container"
      >
        <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[4vw]">
          <div className="text-center mt-10 space-y-[1.5vw] max-md:space-y-10">
            <h3 className="text-90 headingAnim text-[#E8E8E8]">
              Supercharge Your AI Use Cases with DSW UnifyAI’s Built-In
              Capabilities
            </h3>
            <Copy>
              <p className="text-[#CACACA] w-[60%] mx-auto leading-[1.5] max-md:w-full">
                UnifyAI comes packed with advanced tools that help you move
                faster, reduce manual work, and stay production-ready from the
                start:
              </p>
            </Copy>
          </div>

          {/* GRID VERSION */}
          <div className="w-full max-md:w-[200vw]  origin-left max-md:mr-[5vw] max-md:mt-[10vw] h-full max-md:overflow-x-scroll max-md:pb-[8vw] flex items-center justify-center ">
            <div className="h-[50vw] flex-shrink-0  w-[80vw] max-md:translate-x-[0%] max-md:ml-[180vw] max-md:mr-[60vw]  max-md:w-full max-md:h-full fadeup background-glass  rounded-[2vw] border border-white/20  py-[3vw] pb-[4vw] px-[3vw] max-md:px-[7vw] max-md:py-[7vw] max-md:rounded-[6vw]">
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
              <div className="grid grid-cols-[.5fr_1.2fr] border-collpase w-full h-full  border-t-0 border-l-0">
                {/* Header Row */}
                <h3 className="text-50 font-head text-[#F26B0D] font-normal border border-white/10 border-t-0 border-l-0 pb-[1vw] max-md:pb-[4vw] max-md:text-[6vw]">
                  Capability​
                </h3>
                <h3 className="text-50 font-head text-white-200 font-normal border-b border-white/10 border-t-0 pl-[2vw] pb-[1vw] max-md:text-[6vw] max-md:pl-[8vw]">
                  What it Delivers​
                </h3>

                {/* Row 1 */}
                <div className="text-[#F26B0D] border border-white/10 border-l-0 border-t-0 pb-[3vw] pt-[1vw] max-md:pt-[7vw]">
                  In-built AI Studio
                </div>
                <div className="text-white-300 border-b border-white/10 border-t-0 pl-[2vw] pb-[3vw] pt-[1vw] max-md:p-[7vw]">
                  Fast-track AI/ML model development with auto-ML, feature
                  engineering, and monitoring.​
                </div>

                {/* Row 2 */}
                <div className="text-[#F26B0D] border border-white/10 border-t-0 border-l-0  pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                  Prompt Hub​
                </div>
                <div className="text-white-300 border-b border-white/10 border-t-0 pl-[2vw] pr-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
                  Create, manage, and reuse high-quality prompts for consistent
                  GenAI agent behaviour.​
                </div>

                {/* Row 3 */}
                <div className="text-[#F26B0D] border border-white/10 border-t-0 border-l-0 pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                  Data Ingestion Toolkit​
                </div>
                <div className="text-white-300 border-b border-white/10 border-t-0 pl-[2vw] pr-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
                  Automate data prep and extraction with minimal effort.​
                </div>

                {/* Row 4 */}
                <div className="text-[#F26B0D] border border-white/10 border-t-0 border-l-0 pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                  Central Feature Store​
                </div>
                <div className="text-white-300 border-b border-white/10 border-t-0 pl-[2vw] pr-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
                  Store, standardize, and reuse features across models and
                  teams.
                </div>

                {/* Row 5 */}
                <div className="text-[#F26B0D] border-r border-b border-white/10 pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                  Knowledge Base Connector
                </div>
                <div className="text-white-300 pl-[2vw] pb-[2vw] border-b border-white/10 border-t-0 pt-[1vw] pr-[2vw] max-md:p-[7vw]">
                  Seamless integration of external/internal knowledge sources
                  for GenAI workflows.​
                </div>

                <div className="text-[#F26B0D] border-b border-white/10 border-t-0 border-r border-white/10 pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                  Auto Monitoring Engine​
                </div>

                <div className="text-white-300 pl-[2vw] border-b border-white/10 border-t-0 pb-[2vw] pt-[1vw] pr-[2vw] max-md:p-[7vw]">
                  Real-time model and agent monitoring, performance alerts, and
                  drift detection.​
                </div>

                <div className="text-[#F26B0D] border-r border-white/10 pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                  Guardrails & Controls​
                </div>
                <div className="text-white-300 pl-[2vw] pb-[2vw] pt-[1vw] pr-[2vw] max-md:p-[7vw]">
                  Role-based access, safety checks, compliance workflows built
                  in from day one.​
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnifyTable;
