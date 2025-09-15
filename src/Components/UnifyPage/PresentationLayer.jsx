"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { fadeUp } from "../Animations/gsapAnimations";

export default function PresentationLayer() {
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
      src: "/assets/icons/presentationLayer/left/smartEDATop.svg",
    },
    {
      name: "Feature Store",
      src: "/assets/icons/presentationLayer/left/featureCraft.svg",
    },
    {
      name: "Model Development",
      src: "/assets/icons/presentationLayer/left/modelCraft.svg",
    },
    {
      name: "SmartEDA",
      src: "/assets/icons/presentationLayer/left/smartEDATop.svg",
    },
    {
      name: "Model Management & Monitoring",
      src: "/assets/icons/presentationLayer/left/featureCraft.svg",
    },
    {
      name: "Feedback Loop",
      src: "/assets/icons/presentationLayer/left/modelCraft.svg",
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

  fadeUp();

  const ToolItem = ({ tool }) => (
    <div className="flex items-center w-[15%] justify-center flex-col space-y-[1vw] text-center text-secondaryWhite h-auto">
      <div className="w-[4.5vw] h-auto">
        <Image
          width={100}
          height={100}
          src={tool.src}
          className="w-full h-full object-contain"
          alt={tool.name}
        />
      </div>
      <p className="text-content">{tool.name}</p>
    </div>
  );

  return (
    <section className="h-fit flex-col fadeup gap-[.8vw] w-[95%] mx-auto items-center justify-center containerPadding text-center flex">
      <div className="sub-text-content  w-full py-[1vw] bg-white/2 border-white/20 rounded-full border">
        <p>Presentation Layer</p>
      </div>

      <div className="sub-text-content space-y-[1vw] px-[1vw] w-full py-[1vw] bg-white/2 border-white/20 rounded-[2vw] border">
        <p>Use Cases</p>
        <div className="flex text-secondaryWhite gap-[1vw] items-center justify-center">
          {usecaseLayer.map((text, index) => (
            <p
              key={index}
              className="w-full py-[1.2vw] px-[.5vw] text-[1vw] bg-white/2 border-white/20 rounded-[1vw] border"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="h-fit flex gap-[.8vw] w-full">
        <div className="h-full w-full">
          <div className="h-fit p-[1.5vw] text-center w-full bg-white/2 border-white/20 rounded-[2vw] flex flex-col items-center gap-[.5vw] border">
            <div className="w-full h-full">
              <p className="sub-text-content">AI Studio</p>
              <div className="py-[2vw]  border-b relative min-h-[30vh] border-white/20 flex justify-evenly items-center w-full pl-[5vw]">
                <p className="text-content absolute top-1/2 left-[-5%] translate-y-[-50%] rotate-[-90deg]">
                  Core Tools
                </p>
                {coreTools.map((tool, index) => (
                  <ToolItem key={index} tool={tool} />
                ))}
              </div>
            </div>

            <div className="w-full min-h-[58vh] h-full">
              <div className="py-[2vw] flex-nowrap relative flex justify-evenly items-center w-full pl-[5vw]">
                <p className="text-content absolute top-1/2 left-[-5%] translate-y-[-50%] rotate-[-90deg]">
                  Capabilities
                </p>
                <div className="flex-row flex-wrap justify-center gap-x-[5vw] gap-[2vw] flex w-full items-center">
                  {capabilities.map((tool, index) => (
                    <ToolItem key={index} tool={tool} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full">
          <div className="h-fit p-[1.5vw] text-center w-full bg-white/2 border-white/20 rounded-[2vw] flex flex-col items-center gap-[.5vw] border">
            <div className="w-full h-full">
              <p className="sub-text-content">Gen AI Studio</p>
              <div className="py-[2vw] border-b relative min-h-[30vh] border-white/20 flex justify-between items-center w-full px-[2vw] pr-[5vw]">
                <p className="text-content absolute top-1/2 right-[-5%] translate-y-[-50%] rotate-[-90deg]">
                  Core Tools
                </p>
                {genAITop.map((tool, index) => (
                  <ToolItem key={index} tool={tool} />
                ))}
              </div>
            </div>

            <div className="w-full flex items-center justify-center min-h-[58vh] h-fit">
              <div className="py-[2vw] flex-nowrap relative flex justify-evenly items-center w-full pr-[5vw]">
                <p className="text-content absolute top-1/2 right-[-5%] translate-y-[-50%] rotate-[-90deg]">
                  Capabilities
                </p>
                <div className="flex-row flex-wrap justify-center gap-x-[4vw] gap-[2vw] flex w-full items-center">
                  {genAIBottom.map((tool, index) => (
                    <ToolItem key={index} tool={tool} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-text-content w-full flex items-center justify-center bg-white/2 border-white/20 rounded-[2vw] border">
        <div className="h-auto mt-[.5vw] w-[8vw]">
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
