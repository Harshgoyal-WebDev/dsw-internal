"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PrimaryButton from "../Button/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

const usecaseData = [
    {
      id: "001",
      title: "DSW UnifyAI ",
      description:"The enterprise AI platform that unifies data, models, agents, and deployment in one place. ​ UnifyAI accelerates the AI lifecycle, provides complete observability and governance, and supports flexible deployment across on-prem, hybrid, and cloud environments, a key requirement for BFSI and other regulated sectors.​",
      features: [
        " Data Ingestion Toolkit with 300+ connectors inbuilt",
        "Feature Store",
        "SmartEDA",
        "Centralized Development IDE",
        "Model Monitoring",
        "Data and Model Lineage",
        "One-click Deployment",
        "On-prem",
        "Cloud or Hybrid Setup "
      ],
      z:"z-[100]",
      btnName:"Explore UnifyAI",
      btnLink:"/unifyai"
    },
    {
      id: "002",
      title: "DSW AgenticAI",
      description:"The platform for governed, explainable, and auditable enterprise AI agents. AgenticAI orchestrates agentic tasks and ML workflows across real enterprise systems, with human-in-the-loop oversight, strong governance, and enterprise-grade security. These capabilities are essential for high stakes decisioning in Insurance, Banking, and Financial Services",
      features: [
        "End to end Agent Builder with Knowledge Base",
        "Memory",
        "Prompt Hub",
        "LLM Hub and Finetuning",
        "Agent Monitoring",
        "Multi-agent Orchestration",
        "Workflow Builder",
        "Advanced RAG Capabilities and Guardrails",
        "In-built Security and AI Governance"
      ],
      z:"z-[200]",
      btnName:"Explore AgenticAI",
      btnLink:"/agentic-ai"
    }
  ];

export default function BuildMobile({ allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const sectionRef = useRef(null);

  function toggleIndex(i) {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(i) ? [] : [i]));
    }
  }

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [openIndexes]);

  return (
    <section
      ref={sectionRef}
      className="px-[7vw] max-sm:py-[15%] w-full h-fit relative max-md:py-[7%] hidden max-md:block "
      id="WhyUnify"
    >
      <div className="h-[5vh] relative w-full">
        <h2 className="text-90 text-center font-light headingAnim capitalize">
        what we build
        </h2>
      </div>

      <div className="w-full max-sm:pt-[15vw] max-md:pt-[10vw]">
        {usecaseData.map((f, i) => (
          <Accordion
            key={i}
            index={i}
            id={f.id}
            title={f.title}
            para={f.description}
            link={f.features}
            features={f.features}
            btnLink={f.btnLink}
            btnName={f.btnName}
            isOpen={openIndexes.includes(i)}
            onToggle={() => toggleIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Accordion({ title, para, link, features, isOpen, onToggle, id, btnName, btnLink }) {
  // console.log(features);

  return (
    <div className={`w-full group overflow-hidden fadeup  ${ isOpen ? "" :"bg-[#030815]"} `}>
      <div className="w-full mr-auto  ">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full max-sm:pt-[5vw] max-sm:pb-[5vw] flex items-start justify-between max-md:pt-[5vw] max-md:pb-[5vw]"
        >
          <div className={`w-full flex justify-between `}>
            <div className="flex text-white-200 items-center justify-center gap-[5vw] pl-[3vw]">
              <p className=" text-[3.5vw]">{id}</p>
              <h3 className="text-30 font-display  text-left w-[85%]">
                {title}
              </h3>
            </div>
            <div
              className={`max-sm:w-[13vw] max-sm:h-[12vw] relative flex items-center justify-center max-sm:rounded-[3vw] transition-all duration-500 max-md:w-[9vw] max-md:h-[8vw] max-md:rounded-[1.5vw] rotate-45`}
            >
              <span
                className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] rotate-45 bg-[#DADADA]`}
              />
              <span
                className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] ${
                  isOpen
                    ? "rotate-[45deg] bg-[#DADADA]"
                    : "rotate-[135deg] bg-[#DADADA]"
                }`}
              />
            </div>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onAnimationComplete={() => {
                ScrollTrigger.refresh();
              }}
              className="overflow-hidden"
            >
              <div className="w-full flex flex-col max-sm:gap-[2vw] max-sm:pb-[10vw] max-md:items-center max-md:pb-[5vw] max-md:gap-[3vw] pl-[3vw]">
                <div className="py-4 space-y-[4vw]  text-white-200 " dangerouslySetInnerHTML={{__html:para}}/>
                <div className="w-full flex text-white-200 mt-[5vw] flex-col">
                   {features &&
                  <ul className="list-disc pl-[5vw] ">
                   
                      {features.map((feature, index) => (
                        <li key={index} className="mb-[2vw]">
                          {feature}
                        </li>
                      ))}
                  </ul>
                    }
                </div>
              </div>
              <div className="flex items-start justify-start pb-[7vw]">
                 <PrimaryButton text={btnName} href={btnLink}/>
                 </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
        <div className="!w-full h-[1px] bg-[#DADADA]" />
    </div>
  );
}
