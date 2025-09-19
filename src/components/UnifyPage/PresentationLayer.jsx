"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function PresentationLayer() {
  const presentationLayerRef = useRef(null);
  const AIStudioRef = useRef(null);
  const GenAIStudioRef = useRef(null);
  const UnifyRef = useRef(null);
  const sectionRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "90% 100%",
          scrub: true,
        },
      });

      tl.from(
        presentationLayerRef.current,
        {
          rotationX: "45",
          opacity: 0,
          yPercent: -85,
        },
        0
      )
        .from(
          AIStudioRef.current,
          {
            rotationX: "60",
            yPercent: -70,
            opacity: 0,
            xPercent: -8,
          },
          0
        )
        .from(
          GenAIStudioRef.current,
          {
            rotationX: "60",
            yPercent: -70,
            opacity: 0,
            xPercent: 8,
          },
          0
        )
        .from(
          UnifyRef.current,
          {
            rotationX: "100",
            yPercent: -125,
          },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  const ToolItem = ({ tool }) => (
    <div className="flex flex-shrink-0 max-sm:w-[25%] items-center w-[15%] justify-center flex-col space-y-[1vw] text-center h-auto">
      <div className="w-[4vw] max-sm:w-[10vw] h-auto">
        <Image
          width={100}
          height={100}
          src={tool.src}
          className="w-full h-full object-contain"
          alt={tool.name}
        />
      </div>
      <p className="text-[.9vw] max-sm:text-[2.8vw] text-white-300 max-sm:w-full w-[180%]">
        {tool.name}
      </p>
    </div>
  );

  return (
    <section
      style={{
        perspective: "1200px",
      }}
      ref={sectionRef}
      id="presentationLayer"
      className="h-fit container flex-col fadeup gap-[.8vw] max-sm:gap-[3vw] w-[100%] mx-auto items-center justify-center text-center flex "
    >
      <div
        ref={presentationLayerRef}
        className="space-y-[1vw] max-sm:space-y-[3vw] max-sm:h-full w-full"
      >
        <div className="w-full max-sm:py-[3vw] py-[.7vw] max-sm:rounded-[3vw]  border-white/20 text-[1.5vw] rounded-full border bg-gradient-to-r from-white/0 to-white/6">
          <p className="text-[1.5vw]  max-sm:text-[4.5vw]">
            Presentation Layer
          </p>
        </div>

        <div className="space-y-[1vw] max-sm:space-y-[3vw] px-[1vw] w-full py-[1vw] border-white/20 max-sm:px-[3vw] max-sm:py-[3vw] rounded-[2vw] max-sm:rounded-[4vw] border bg-gradient-to-r from-white/0 to-white/6">
          <p className="text-[1.5vw] max-sm:text-[4.5vw] ">Use Cases</p>
          <div className="flex max-sm:gap-[3vw] gap-[1vw] max-sm:flex-col items-center justify-evenly">
            {usecaseLayer.map((text, index) => (
              <p
                key={index}
                className="w-fit max-sm:w-full max-sm:text-[3.5vw] py-[1vw] px-[1.6vw] text-[1vw] bg-gradient-to-r from-white/2 to-white/8 border-white/20 max-sm:border-white/10 rounded-[1vw] max-sm:rounded-[1.5vw] max-sm:py-[3vw] border text-white-300"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          perspective: "1200px",
        }}
        className="h-fit flex max-sm:flex-col max-sm:gap-[3vw] gap-[.8vw] w-full"
      >
        <div ref={AIStudioRef} className="h-full overflow-hidden ">
          <div className="h-fit p-[1.5vw] text-center w-full bg-gradient-to-r from-white/8 to bg-white/0 border-white/20 rounded-[2vw] max-sm:rounded-[4vw] flex flex-col max-sm:p-[4vw] items-center gap-[.5vw] border">
            <div className="w-full h-full">
              <p className="text-[1.5vw] max-sm:text-[5.5vw] ">AI Studio</p>
              <div className="py-[1.8vw] max-sm:py-[6vw] border-b relative border-white/20 flex justify-evenly items-center w-full pl-[5vw]">
                <p className=" absolute top-1/2 max-sm:left-[-10%] max-sm:!text-[4.2vw] left-[-5%] translate-y-[-50%] rotate-[-90deg]">
                  Core Tools
                </p>
                {coreTools.map((tool, index) => (
                  <ToolItem key={index} tool={tool} />
                ))}
              </div>
            </div>

            <div className="w-full h-full">
              <div className="py-[1vw] max-sm:py-[6vw] flex-nowrap relative flex justify-evenly items-start w-full pl-[5vw]">
                <p className=" absolute top-1/2 max-sm:left-[-10%] max-sm:!text-[4.2vw] left-[-5%] translate-y-[-50%] rotate-[-90deg]">
                  Capabilities
                </p>
                <div className="flex-row flex-wrap justify-center gap-x-[5vw] gap-[0.5vw] max-sm:gap-y-[4vw] flex w-full items-center">
                  {capabilities.map((tool, index) => (
                    <ToolItem key={index} tool={tool} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={GenAIStudioRef} className="h-full w-full">
          <div className="h-fit bg-gradient-to-l from-white/8 to bg-white/0 p-[1.5vw] max-sm:p-[4vw] text-center w-full border-white/20 max-sm:rounded-[4vw] rounded-[2vw] flex flex-col items-center gap-[.5vw] border">
            <div className="w-full h-full">
              <p className="text-[1.5vw] max-sm:text-[5.5vw]">Gen AI Studio</p>
              <div className="py-[1.8vw] max-sm:py-[6vw] border-b relative border-white/20 flex justify-between max-sm:items-start items-center w-full px-[3vw] max-sm:px-0 max-sm:pr-[13vw] pr-[5vw]  max-sm:gap-[3vw]">
                <p className=" absolute top-1/2 right-[-5%] max-sm:right-[-13%] translate-y-[-50%] max-sm:!text-[4.2vw] rotate-[90deg]">
                  Core Tools
                </p>

                {genAITop.map((tool, index) => (
                  <ToolItem key={index} tool={tool} />
                ))}
              </div>
            </div>

            <div className="w-full flex items-start justify-center h-fit">
              <div className="py-[1.4vw] max-sm:w-full max-sm:py-[6vw] flex-nowrap relative flex justify-evenly items-center w-full max-sm:pr-0 pr-[5vw]">
                <p className=" absolute top-1/2 max-sm:!text-[4.2vw] right-[-5%] max-sm:right-[-15%] translate-y-[-50%] rotate-[90deg]">
                  Capabilities
                </p>
                <div className="flex-row flex-wrap max-sm:items-center max-sm:justify-center justify-center gap-x-[4vw] max-sm:gap-[4vw] gap-[2vw] max-sm:gap-y-[5vw] flex w-full max-sm:translate-x-[-8%] items-center">
                  {genAIBottom.map((tool, index) => (
                    <ToolItem key={index} tool={tool} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={UnifyRef}
        className="w-full flex items-center justify-center bg-gradient-to-r from-white/0 to-white/4 border-white/20 max-sm:py-[2vw] rounded-[2vw] max-sm:rounded-[3vw] border"
      >
        <div className="h-auto max-sm:w-[20vw]  mt-[.5vw] w-[8vw]">
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
    name: "Model Management & Monitoring",
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
