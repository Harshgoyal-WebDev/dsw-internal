"use client";
import Image from "next/image";
import React, { useEffect } from "react";


const usecaseLayer = [
    "Customer Persistency",
    "Fraud Detection",
    "Demand Forecasting",
    "Document Search",
    "Content/Code Generation",
    "Information Extraction",
  ];

  const coreTools = [
    {
      name: "SmartEDA",
      src: "/assets/icons/presentationLayer/left/smartEDATop.svg",
    },
    {
      name: "FeatureCraft",
      src: "/assets/icons/presentationLayer/left/featureCraft.svg",
    },
    {
      name: "ModelCraft",
      src: "/assets/icons/presentationLayer/left/modelCraft.svg",
    },
  ];

  const capabilities = [
    {
      name: "Data Integration Toolkit",
      src: "/assets/icons/presentationLayer/left/dataIntegration.svg",
    },
    {
      name: "Feature Store",
      src: "/assets/icons/presentationLayer/left/featureStore.svg",
    },
    {
      name: "Model Development",
      src: "/assets/icons/presentationLayer/left/modelDevelopment.svg",
    },
    {
      name: "SmartEDA",
      src: "/assets/icons/presentationLayer/left/smartEDA.svg",
    },
    {
      name: "Model Management",
      src: "/assets/icons/presentationLayer/left/modelManagemnt.svg",
    },
    {
      name: "Feedback Loop",
      src: "/assets/icons/presentationLayer/left/feedbackLoop.svg",
    },
  ];

  const genAITop = [
    {
      name: "LLM Hub",
      src: "/assets/icons/presentationLayer/right/llm.svg",
    },
    {
      name: "Prompt Management",
      src: "/assets/icons/presentationLayer/right/promptManagement.svg",
    },
    {
      name: "Agent Management",
      src: "/assets/icons/presentationLayer/right/agent.svg",
    },
    {
      name: "Tool Hub",
      src: "/assets/icons/presentationLayer/right/toolHUB1.svg",
    },
  ];

  const genAIBottom = [
    {
      name: "LLM Deployment",
      src: "/assets/icons/presentationLayer/right/llmdeployment.svg",
    },
    {
      name: "Tool Management",
      src: "/assets/icons/presentationLayer/right/tool.svg",
    },
    {
      name: "Vector DB",
      src: "/assets/icons/presentationLayer/right/vector.svg",
    },
    {
      name: "Data Indexing",
      src: "/assets/icons/presentationLayer/right/dataindex.svg",
    },
    {
      name: "Orchestrator",
      src: "/assets/icons/presentationLayer/right/orchestrator.svg",
    },
    {
      name: "Fine-Tuning",
      src: "/assets/icons/presentationLayer/right/finetuning.svg",
    },
    {
      name: "Guardrails",
      src: "/assets/icons/presentationLayer/right/guardrails.svg",
    },
  ];

export default function PresentationLayer() {
  
  const ToolItem = ({ tool }) => (
    <div className="flex items-center w-[15%] max-sm:w-[22%] justify-center flex-col space-y-[1vw] text-center  h-auto">
      <div className="w-[4vw] max-sm:w-[25vw] h-auto">
        <Image
          width={100}
          height={100}
          src={tool.src}
          className="w-full h-full object-contain"
          alt={tool.name}
        />
      </div>
      <p className="">{tool.name}</p>
    </div>
  );

  return (
    <section id="presentationLayer" className="h-fit container overflow-x-scroll flex-col fadeup gap-[.8vw] max-sm:gap-[4vw] w-[100%] mx-auto max-sm:items-start items-center justify-center text-center flex">
      <div className="max-sm:w-[450vw] max-sm:py-[4vw]  w-full py-[.7vw] bg-white/2 border-white/20 text-[1.5vw] rounded-full border">
        <p>Presentation Layer</p>
      </div>

      <div className=" space-y-[.5vw] max-sm:space-y-[4vw] max-sm:w-[450vw] px-[1vw] max-sm:px-[4vw] max-sm:py-[6vw] w-full py-[1vw] bg-white/2 border-white/20 rounded-[2vw] max-sm:rounded-[5vw] border">
        <p className="text-[1.5vw]">Use Cases</p>
        <div className="flex gap-[1vw] max-sm:gap-[4vw] items-center justify-evenly">
          {usecaseLayer.map((text, index) => (
            <p
              key={index}
              className="w-fit py-[1vw] px-[1.6vw] max-sm:w-full text-[1vw] bg-gradient-to-l from-white/8 to bg-white/0 border-white/20 rounded-[1vw] border max-sm:py-[8vw]  max-sm:rounded-[5vw] max-sm:text-[4vw] text-white-300"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="h-fit flex gap-[.8vw] text-white-300 max-sm:gap-[4vw] max-sm:w-[450vw] w-full">
        <div className="h-full overflow-hidden ">
          <div className="h-fit p-[1.5vw]  max-sm:px-[5vw] max-sm:py-[5vw] text-center w-full bg-gradient-to-r from-white/8 to bg-white/0  border-white/20 rounded-[2vw] max-sm:rounded-[5vw] flex flex-col items-center gap-[.5vw] border">
            <div className="w-full h-full">
              <p className="">AI Studio</p>
              <div className="py-[1.8vw]  border-b relative border-white/20 flex justify-evenly items-center w-full pl-[5vw]">
                <p className="text-content absolute top-1/2 left-[-5%] max-sm:left-[0%] translate-y-[-50%] rotate-[-90deg]">
                  Core Tools
                </p>
                {coreTools.map((tool, index) => (
                  <ToolItem key={index} tool={tool} />
                ))}
              </div>
            </div>

            <div className="w-full  h-full">
              <div className="py-[1vw] flex-nowrap relative flex justify-evenly items-start w-full pl-[5vw] max-sm:pl-[20vw]">
                <p className="text-content absolute top-1/2 max-sm:left-[0%] left-[-5%] translate-y-[-50%] rotate-[-90deg]">
                  Capabilities
                </p>
                <div className="flex-row flex-wrap justify-center gap-x-[5vw] gap-[0.5vw] max-sm:gap-[5vw] flex w-full items-center">
                  {capabilities.map((tool, index) => (
                    <ToolItem key={index} tool={tool} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full">
          <div className="h-fit  bg-gradient-to-l from-white/8 to bg-white/0 p-[1.5vw] max-sm:p-[5vw] max-sm:rounded-[5vw]  text-center w-full  border-white/20 rounded-[2vw] flex flex-col items-center gap-[.5vw] border">
            <div className="w-full h-full">
              <p className="">Gen AI Studio</p>
              <div className="py-[1vw] border-b relative border-white/20 flex justify-between items-center w-full max-sm:px-[5vw] px-[2vw] pr-[5vw] max-sm:pr-[25vw]">
                <p className="text-content absolute top-1/2 max-sm:right-0 right-[-5%] translate-y-[-50%] rotate-[90deg]">
                  Core Tools
                </p>
                {genAITop.map((tool, index) => (
                  <ToolItem key={index} tool={tool} />
                ))}
              </div>
            </div>

            <div className="w-full flex items-start max-sm:items-start justify-center max-sm:py-[5vw] h-fit">
              <div className="py-[1vw] flex-nowrap relative flex justify-evenly items-center w-full pr-[5vw] max-sm:pr-[20vw]">
                <p className="text-content absolute top-1/2 max-sm:right-0 right-[-5%] translate-y-[-50%] rotate-[90deg]">
                  Capabilities
                </p>
                <div className="flex-row flex-wrap justify-center gap-x-[4vw] gap-[2vw] max-sm:gap-y-[8vw] flex w-full items-center">
                  {genAIBottom.map((tool, index) => (
                    <ToolItem key={index} tool={tool} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-sm:w-[450vw] max-sm:py-[3vw] max-sm:rounded-[5vw] w-full flex items-center justify-center  bg-gradient-to-l from-white/8 to bg-white/0 border-white/20 rounded-[2vw] border">
        <div className="h-auto mt-[.5vw] max-sm:w-[25vw] w-[8vw]">
          <Image
            width={100}
            height={100}
            src="/assets/icons/unify-ai.svg"
            className="w-full h-full object-contain"
            alt="Logo"
          />
        </div>
      </div>
    </section>
  );
}
