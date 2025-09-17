import React from "react";
import Image from "next/image";
import Copy from "../Animations/Copy";

const capabilities = [
  {
    id: "01",
    src: "/assets/icons/insuraince/automate-setting.svg",
    text: "Automate servicing, documentation, and communications with human-like agents",
  },
  {
    id: "02",
    src: "/assets/icons/insuraince/RAG.svg",
    text: "Use Retrieval-Augmented Generation (RAG), MCP and A2A protocols for smart, secure responses",
  },
  {
    id: "03",
    src: "/assets/icons/insuraince/config.svg",
    text: "Configure memory, tone, and rules for each agent",
  },
  {
    id: "04",
    src: "/assets/icons/fast-track-icon.svg",
    text: "Deploy in hours with built-in monitoring and compliance guardrails",
  },
];

const Capabilities = () => {
  return (
    <section className="h-full container">
      <div className="w-[90%]">
        <h2 className="title-1 headingAnim">
          Turn Common Insurance Tasks into Intelligent Agents 
        </h2>
      </div>

      <div className="flex justify-between pt-[4vw]">
        <div className="w-[45%]">
          <Copy>
            <p className="text-white-200 text-[2.5vw] leading-[1.35] font-head">
              These aren’t chatbots. They’re intelligent teammates for your
              operations. 
            </p>
          </Copy>
        </div>

        <div className="w-[50%]">
          <Copy>
            <p className="text-white-300">
              From claim status queries to automated underwriting support,
              insurAInce gives you over 300 prebuilt GenAI agents that are
              designed for real insurance workflows. 
            </p>
            <p className="text-white-300 text-[1.2vw] py-[2.5vw] font-display">
              Key Capabilities: 
            </p>
          </Copy>

          <div>
            <div className="flex flex-col gap-[4.5vw] pt-[4vw]">
              {capabilities.map((cap) => (
                <div key={cap.id} className="relative group ">
                  <div className="w-full h-[0.1vw]  bg-[#59595980] absolute top-[-40%] mb-[2vw] lineDraw" />

                  <div className="flex items-start fadeup justify-start gap-[5vw]">
                  

                    <p className="text-white text-[1vw] font-display">
                      {cap.id}
                    </p>
                    <div className="w-[5.5vw]  h-[5.5vw]">
                      <Image
                        src={cap.src}
                        alt={`capibility-${cap.id}`}
                        width={40}
                        height={40}
                        className="object-contain h-full w-full"
                        />
                    </div>
                     

                    
                      <p className="text-white-300 max-w-[28vw]">{cap.text}</p>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
