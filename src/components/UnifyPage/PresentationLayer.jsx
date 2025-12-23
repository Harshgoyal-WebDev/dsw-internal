"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function PresentationLayer() {
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
          <div className="h-fit p-[1.5vw] py-[2vw] text-center w-full  border-white/20 rounded-[2vw] max-md:rounded-[4vw] flex flex-col  max-md:p-[4vw] items-center gap-[1vw] border">
            <div className="w-full h-full">
              <p className="text-[1.5vw] max-md:text-[5.5vw] mb-[1vw]">
                AI Studio
              </p>

              {/* Top Row - Core Tools */}
              <div className="flex max-md:flex-wrap justify-center gap-x-[2vw] max-md:gap-x-[4vw] max-md:gap-y-[4vw] py-[2vw] max-md:py-[4vw] w-full  ">
                {topRowTools.map((tool, index) => (
                  <div className="w-fit" key={index}>
                    <ToolItem tool={tool} />
                  </div>
                ))}
              </div>

              {/* Bottom Row - Capabilities */}
              <div className="flex max-md:flex-wrap justify-center gap-x-[1.5vw] max-md:gap-x-[4vw] max-md:gap-y-[4vw] py-[3vw] max-md:py-[4vw] w-full border-t border-white/20">
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
        <div className="h-[2vw] max-md:h-[5vw] my-[1.5vw] w-auto">
          <Image
            width={1000}
            height={100}
            src="/assets/icons/dsw-unifyAi.png"
            className="w-full h-full object-contain"
            alt="DSW AgenticAI Logo"
          />
        </div>
      </div>
    </section>
  );
}

const useCases = [
  "Customer Persistency / Retention Models",
  "Fraud Detection & Risk Scoring",
  "Demand & Sales Forecasting",
  "Churn Prediction",
  "Credit Scoring",
  "Lead Scoring & Propensity Models",
  "Pricing & Underwriting Models",
  "Operational Optimization Models",
];


const topRowTools = [
  {
    name: "Data Ingestion Toolkit",
    src: "/assets/icons/unify-ai/diagram/data-ingestion.svg",
  },
  {
    name: "Feature Store",
    src: "/assets/icons/unify-ai/diagram/feature-store.svg",
  },
  {
    name: "Model Development Environment",
    src: "/assets/icons/unify-ai/diagram/model-dev-env.svg",
  },
  {
    name: "Model Registry",
    src: "/assets/icons/unify-ai/diagram/model-registory.svg",
  },
  {
    name: "Model Deployment Engine",
    src: "/assets/icons/unify-ai/diagram/model-dev-engine.svg",
  },
  {
    name: "Model Observability",
    src: "/assets/icons/unify-ai/diagram/model-observability.svg",
  },
  {
    name: "Model Inference",
    src: "/assets/icons/unify-ai/diagram/model-inference.svg",
  },
  {
    name: "Feedback Loop",
    src: "/assets/icons/unify-ai/diagram/feedback-loop.svg",
  },
];



const bottomRowTools = [
  {
    name: "SmartEDA",
    src: "/assets/icons/unify-ai/diagram/smart-eda.svg",
  },
  {
    name: "FeatureCraft",
    src: "/assets/icons/unify-ai/diagram/feature-craft.svg",
  },
  {
    name: "ModelCraft",
    src: "/assets/icons/unify-ai/diagram/model-craft.svg",
  },
  {
    name: "Model Versioning",
    src: "/assets/icons/unify-ai/diagram/model-versioning.svg",
  },
  {
    name: "Model API",
    src: "/assets/icons/unify-ai/diagram/model-api.svg",
  },
  {
    name: "Model Lineage",
    src: "/assets/icons/unify-ai/diagram/model-lineage.svg",
  },
  {
    name: "Inference Dashboard",
    src: "/assets/icons/unify-ai/diagram/inference-dashboard.svg",
  },
  {
    name: "One-Click Deployment",
    src: "/assets/icons/unify-ai/diagram/one-click-deployment.svg",
  },
  {
    name: "Customized Monitoring Alerts",
    src: "/assets/icons/unify-ai/diagram/customized-monitoring-alert.svg",
  },
];
