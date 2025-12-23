"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import AgenticAi from "../../../public/assets/icons/agentic-ai.png";

export default function AgenticAIDiagram() {
  const presentationLayerRef = useRef(null);
  const AgenticAIStudioRef = useRef(null);
  const UnifyRef = useRef(null);
  const sectionRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 1025);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1025);
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
          AgenticAIStudioRef.current,
          {
            rotationX: "60",
            yPercent: -70,
            opacity: 0,
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
    <div className="flex flex-shrink-0 max-md:w-[18vw] max-sm:w-[19vw] items-center w-[8vw] justify-center flex-col space-y-[1vw] text-center h-auto">
      <div className="w-[3.5vw] max-md:w-[10vw] h-auto">
        <Image
          width={100}
          height={100}
          src={tool.src}
          className="w-full h-full object-contain"
          alt={tool.name}
        />
      </div>
      <p className="text-[1vw] max-md:text-[2.8vw] text-white-300 max-md:w-full w-full">
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
      id="agenticAILayer"
      className="h-fit container flex-col fadeup gap-[.8vw] max-md:gap-[3vw] w-[100%] mx-auto items-center justify-center text-center flex "
    >
      <div
        ref={presentationLayerRef}
        className="space-y-[1vw] max-md:space-y-[3vw] max-md:h-full w-full"
      >
        <div className="w-full max-md:py-[3vw] py-[.7vw] max-md:rounded-[3vw] border-white/20 text-[1.5vw] rounded-full border bg-gradient-to-r from-white/0 to-white/6">
          <p className="text-[1.5vw] max-md:text-[4.5vw]">
            Presentation Layer
          </p>
        </div>

        <div className="space-y-[1vw] max-md:space-y-[3vw] px-[1vw] w-full py-[1vw] border-white/20 max-md:px-[3vw] max-md:py-[3vw] rounded-[2vw] max-md:rounded-[4vw] border bg-gradient-to-r from-white/0 to-white/6">
          <p className="text-[1.5vw] max-md:text-[4.5vw]">Use Cases</p>
          <div className="flex max-md:gap-[3vw] gap-[1vw] max-md:flex-col items-center justify-center px-[4vw] flex-wrap">
            {useCases.map((text, index) => (
              <p
                key={index}
                className="w-fit max-md:w-full max-md:text-[3.5vw] py-[1vw] px-[1.6vw] text-[1vw]  border-white/20 max-md:border-white/10 rounded-[1vw] max-md:rounded-[1.5vw] max-md:py-[3vw] border text-white-300"
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
        className="h-fit flex max-md:flex-col max-md:gap-[3vw] gap-[.8vw] w-full"
      >
        <div ref={AgenticAIStudioRef} className="h-full overflow-hidden w-full">
          <div className="h-fit p-[1.5vw] py-[2vw] text-center w-full  border-white/20 rounded-[2vw] max-md:rounded-[4vw] flex flex-col max-md:p-[4vw] items-center gap-[1vw] border">
            <div className="w-full h-full">
              <p className="text-[1.5vw] max-md:text-[5.5vw] mb-[1vw]">
                AgenticAI Studio
              </p>

              {/* Top Row - Core Tools */}
              <div className="flex max-md:flex-wrap justify-center max-md:gap-x-[4vw] max-md:gap-y-[4vw] py-[2vw] max-md:py-[4vw] w-full  ">
                {topRowTools.map((tool, index) => (
                  <div className="w-fit" key={index}>
                    <ToolItem tool={tool} />
                  </div>
                ))}
              </div>

              {/* Bottom Row - Capabilities */}
              <div className="flex max-md:flex-wrap justify-center max-md:gap-x-[4vw] max-md:gap-y-[4vw] py-[2vw] max-md:py-[4vw] w-full border-t border-white/20">
                {bottomRowTools.map((tool, index) => (
                  <div className="w-fit" key={index}>
                    <ToolItem tool={tool} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={UnifyRef}
        className="w-full flex items-center justify-center bg-gradient-to-r from-white/0 to-white/4 border-white/20 max-md:py-[2vw] rounded-[2vw] max-md:rounded-[3vw] border"
      >
        <div className="h-[2vw] max-md:w-[40vw] my-[1.5vw] w-auto">
          <Image
            width={1000}
            height={100}
            src="/assets/icons/agentic-ai.png"
            className="w-full h-full object-contain"
            alt="DSW AgenticAI Logo"
          />
        </div>
      </div>
    </section>
  );
}

const useCases = [
  "Customer Service Agent",
  "Customer OnboardingAgent",
  "Policy & Compliance Assistant",
  "Field-Agent Support Assistant",
  "Claims Triage Agent",
  "Lead Qualification Agent",
  "HR Employee Service Agent",
];

const topRowTools = [
  {
    name: "LLM Hub",
    src: "/assets/icons/agentic-ai/diagram/LLMDeploy.svg",
  },
  {
    name: "Prompt Management",
    src: "/assets/icons/agentic-ai/diagram/prompt-management.svg",
  },
  {
    name: "Knowledge Base Management",
    src: "/assets/icons/agentic-ai/diagram/knowledge-base-management.svg",
  },
  {
    name: "Tool Management",
    src: "/assets/icons/agentic-ai/diagram/tool-management.svg",
  },
  {
    name: "Memory Management",
    src: "/assets/icons/agentic-ai/diagram/memory-management.svg",
  },
  {
    name: "Guardrails",
    src: "/assets/icons/agentic-ai/diagram/guardrails.svg",
  },
  {
    name: "LLM Fine-tuning",
    src: "/assets/icons/agentic-ai/diagram/llm-finetuning.svg",
  },
  {
    name: "Agent Testing",
    src: "/assets/icons/agentic-ai/diagram/agent-testing.svg",
  },
  {
    name: "Agent Observability",
    src: "/assets/icons/agentic-ai/diagram/agent-observability.svg",
  },
  {
    name: "Agent Inference",
    src: "/assets/icons/agentic-ai/diagram/agent-inference.svg",
  },
  {
    name: "Workflow Builder",
    src: "/assets/icons/agentic-ai/diagram/workflow-builder.svg",
  },
];



const bottomRowTools = [
 {
    name: "Prompt & Agent Versioning",
    src: "/assets/icons/agentic-ai/diagram/prompt-agent-version.svg",
  },
  {
    name: "Prompt Generation",
    src: "/assets/icons/agentic-ai/diagram/prompt-generation.svg",
  },
  {
    name: "On-prem LLM Hosting",
    src: "/assets/icons/agentic-ai/diagram/prem-llm-host.svg",
  },
  {
    name: "Multi-Format Document Support",
    src: "/assets/icons/agentic-ai/diagram/multi-format-doc.svg",
  },
  {
    name: "Advanced RAG Capabilities",
    src: "/assets/icons/agentic-ai/diagram/rag-capability.svg",
  },
  {
    name: "MCP and Custom Tools",
    src: "/assets/icons/agentic-ai/diagram/mcp-custom-tool.svg",
  },
  {
    name: "Three-Layer Memory",
    src: "/assets/icons/agentic-ai/diagram/three-layer-memory.svg",
  },
  {
    name: "Enterprise-Grade Guardrails",
    src: "/assets/icons/agentic-ai/diagram/grade-guardrail.svg",
  },
  {
    name: "Guided Agent Builder",
    src: "/assets/icons/agentic-ai/diagram/guided-agent-builder.svg",
  },
  {
    name: "UI-Driven Fine-Tuning",
    src: "/assets/icons/agentic-ai/diagram/fine-tuning.svg",
  },
  {
    name: "UI-Driven Agent Testing",
    src: "/assets/icons/agentic-ai/diagram/agent-testing-ui.svg",
  },
];