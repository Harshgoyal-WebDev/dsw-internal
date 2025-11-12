"use client";
import React from "react";
import gsap from "gsap";
import { useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function UseCase({ allowMultiple = false}) {
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
      <div className="flex flex-col items-center gap-[5vw] ">
        <h2 className="text-60 headingAnim w-[40%] text-center">
     Supercharge Your AI/ML Use Cases      
 </h2>
        
        <div className="  relative z-[10] fadeup">
          {usecaseData.map((f, i) => (
            <AccordionItem
              key={i}
              index={i}
              title={f.title}
              description={f.description}
              features={f.features}
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

function AccordionItem({ title, description,features, isOpen, onToggle,index,z}) {

  return (
    <div className={`w-full group overflow-hidden relative faq-tab accordion-block group  ${z} ${index>0 ? "mt-[-2.5vw] ":"mt-0"}`}>
      <div className={`w-full  relative`}>

        <div className={`inset-0 w-full relative border rounded-[2vw] border-white/10 ${ isOpen ? "bg-gradient-to-r from-light-blue to-dark-blue" :"bg-[#030815] "}  `}>
          <div className="relative w-full h-full z-10 px-[3vw]  duration-300 ">
            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              className={`cursor-pointer w-full h-full py-[3.5vw] pb-[5vw] flex items-start justify-between`}
            >
                <div className="flex items-start justify-between">
                <div className="flex items-center gap-[8vw] w-[45vw]">
                 <p className="">
                  {`00${index+1}`}
                </p>
              <h4 className="text-30 text-left leading-[1.2] capitalize">
                {title}
              </h4>
              </div>
              
              <div className={`w-[40%] `}>
              <p className="text-left">{description}</p>
              </div>
              </div>

              <div
                className={` h-auto relative duration-500 max-sm:w-[12vw] rounded-full border-[1.5px] p-[2vw] transition-all  ease-out ml-[3vw]  ${ isOpen ? "border bg-white" :" background-glass border-white/20"}  ${
                  !isOpen ? "group-hover:rotate-[180deg]" : "group-hover:rotate-[315deg] rotate-[45deg]"
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
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className=" relative "
                >
                    <span className="bg-white w-[75%] h-[1px] absolute top-0 left-1/2 translate-x-[-50%] mt-[-2vw]"></span>
                  <div className="pt-[1vw] text-[#CACACA] w-[90%] pb-[7vw]">
                    <ul className="ml-[13vw] list-disc flex  gap-x-[5vw] gap-y-[3vw]">
                        {features.map((item,index)=>(
                            <li key={index} className="w-1/5 marker:text-sm">
                                <p>{item}</p>
                                
                            </li>
                        ))}
                    </ul >
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
      title: "UnifyAI ",
      description:"Build, test, deploy, and monitor AI/ML models with lightning speed using accelerated workflows: ",
      features: [
        "400+ pre-built connectors for seamless data ingestion and transformation ",
        "Core AI/ML engine with built-in model selection and evaluation ",
        "Real-time monitoring with performance, drift, and anomaly tracking",
        "One-click deployment to production environments "
      ],
      z:"z-[100]",
    },
    // {
    //   id: "002",
    //   title: "AgenticAI",
    //   description:"Design, configure, and launch enterprise-grade GenAI agents with ease:",
    //   features: [
    //     "Agentic AI drag and drop workflows and framework for task-based orchestration ",
    //     "LLM model plug-ins with customizable tools, memory, and prompts ",
    //     "Secure integration with internal knowledge bases and APIs ",
    //     "Guardrails and governance by design for safe, compliant outputs "
    //   ],
    //   z:"z-[200]",
    // },
    {
      id: "002",
      title: "Unified Ops ",
      description:"One platform. One centralized AI ecosystem. Total control.",
      features: [
        "Centralized observability across models and agents ",
        "Built-in compliance – ISO 42001, SOC 2, ISO 27001, HIPAA, GDPR",
        "Full traceability with logs, alerts, and audit trails  ",
      ],
      z:"z-[300]"
    },
   
  ];
