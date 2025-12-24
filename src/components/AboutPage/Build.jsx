"use client";
import React from "react";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
gsap.registerPlugin(ScrollTrigger);

export default function CardStack2({ allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState([0]);

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
      className=" w-full  relative max-md:hidden dark z-[40]  !text-[#E8E8E8] container"
      id="cardstack"
    >
      <div className="flex flex-col items-center gap-[5vw]">
        
         <h2 className="text-90 headingAnim text-center capitalize">what we build</h2>
        
        <div className="relative z-[10] fadeup">
          {usecaseData.map((f, i) => (
            <AccordionItem
              key={i}
              index={i}
              title={f.title}
              description={f.description}
              features={f.features}
              btnName={f.btnName}
              btnLink={f.btnLink}
              isOpen={openIndexes.includes(i)}
              onToggle={() => toggleIndex(i)}
              z={f.z}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}

function AccordionItem({ title, description,features, isOpen, onToggle,index,z,btnName,btnLink }) {

  return (
    <div className={`w-full   overflow-hidden relative faq-tab accordion-block group/parent   ${z} ${index>0 ? "mt-[-2vw] ":"mt-0"}`}>
      <div className={`w-full mr-auto relative`}>

        <div className={`inset-0 w-full relative border rounded-[1.5vw] border-white/10 ${ isOpen ? "bg-gradient-to-r from-light-blue to-dark-blue" :"bg-[#030815]"}  `}>
          <div className="relative w-full h-full z-10 px-[3vw] duration-300 ">
            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              className={`cursor-pointer w-full h-full py-[2.5vw] flex items-start ${isOpen ? "pb-[4vw]":"pb-0"}`}
            >
                <div className="flex items-start justify-between">
                <div className="flex items-center gap-[6vw]">
                 <p className="">
                  {`00${index+1}`}
                </p>
              <h4 className="text-30  text-left leading-[1.2]">
                {title}
              </h4>
              </div>
              
              <div className={`w-[55%]  space-y-4  ${ isOpen ? "opacity-100 h-full" :"opacity-0 h-[15vh]"} `}>
              <div className="text-left" dangerouslySetInnerHTML={{__html:description}}/>
              <div className="flex items-start">
                <PrimaryButton text={btnName} href={btnLink}/>
              </div>
              </div>
              </div>

              <div
                className={` h-auto relative duration-500 max-sm:w-[12vw] rounded-full border-[1.5px] ml-[3vw] p-[2vw]  transition-all  ease-out  ${ isOpen ? "border bg-white" :" background-glass border-white/20"}  ${
                  !isOpen ? "group-hover/parent:rotate-[180deg]" : "group-hover/parent:rotate-[315deg] rotate-[45deg]"
                }`}
              >
                <span className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center  ${
                    isOpen ? "rotate-90" : "rotate-90"
                  } ${
                    isOpen ? "bg-black" : "bg-white"
                  }`}></span>

                <span
               
                  className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center ${
                    isOpen ? "bg-black" : "bg-white"
                  }`}
                ></span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0, y: 20 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  onAnimationComplete={() => {
                    ScrollTrigger.refresh();
                  }}
                  exit={{ height: 0, opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden relative"
                >
                    <span className="bg-white w-[80%] h-[1px] absolute top-0 left-1/2 translate-x-[-50%]"></span>
                  <div className="py-[3.5vw] text-[#CACACA] w-[90%] ">
                    {features &&
                    <ul className={`ml-[9vw] list-disc flex flex-wrap gap-x-[3vw] gap-y-[2vw] pb-[5vw]`}>
                        {features.map((item,index)=>(
                            <li key={index} className="flex items-center gap-[0.5vw]">
                                <span className="rounded-full bg-white h-[0.3vw] w-[0.3vw] mr-[0.8vw]"></span>
                                <p>{item}</p>
                                
                            </li>
                        ))}
                    </ul >
}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

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