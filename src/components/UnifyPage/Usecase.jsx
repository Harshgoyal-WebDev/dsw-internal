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
      <div className="flex flex-col items-center gap-[5vw] max-sm:gap-[10vw] max-md:justify-center max-sm:items-start">
        
        <h2 className="text-60 headingAnim w-[45%] text-center">
     Supercharge Your AI and GenAI Use Case      
 </h2>
        
        <div className=" max-md:w-full max-sm:space-y-[5vw]  max-md:py-[3vw] max-md:space-y-[3vw] relative z-[10]">
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
    <div className={`w-full group  overflow-hidden relative faq-tab fadeupanim accordion-block group fadeup ${z} ${index>0 ? "mt-[-2.5vw] ":"mt-0"}`}>
      <div className={`w-full mr-auto relative`}>

        <div className={`inset-0 w-full relative border rounded-[2vw] border-white/10 ${ isOpen ? "bg-gradient-to-r from-light-blue to-dark-blue" :"bg-[#030815]"}  `}>
          <div className="relative w-full h-full z-10 px-[3vw] max-sm:rounded-[2.5vw] content  duration-300 max-sm:px-0">
            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              className={`cursor-pointer w-full h-full py-[3.5vw] max-sm:pb-[7vw] flex items-start justify-between`}
            >
                <div className="flex items-start justify-between">
                <div className="flex items-center gap-[8vw] w-[45vw]">
                 <p className="">
                  {`00${index+1}`}
                </p>
              <h4 className="text-30  text-left leading-[1.2] max-sm:text-[4.5vw] max-sm:w-[70%] max-md:text-[3vw] max-md:w-[80%] max-sm:leading-[1.5] capitalize">
                {title}
              </h4>
              </div>
              
              <div className={`w-[30vw] `}>
              <p className="text-left">{description}</p>
              </div>
              </div>

              <div
                className={` h-auto relative duration-500 max-sm:w-[12vw] rounded-full border-[1.5px]  p-[2vw]  transition-all  ease-out max-sm:p-[6vw] max-md:p-[4vw] max-md:w-[10vw] max-md:h-[10vw] ${ isOpen ? "border bg-white" :" background-glass border-white/20"}  ${
                  !isOpen ? "group-hover:rotate-[180deg]" : "group-hover:rotate-[315deg] rotate-[45deg]"
                }`}
              >
                <span className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center max-sm:w-[5vw] max-md:w-[3vw] max-md:h-[1.5px] max-sm:h-[1.5px] ${
                    isOpen ? "rotate-90" : "rotate-90"
                  } ${
                    isOpen ? "bg-black" : "bg-white"
                  }`}></span>

                <span
               
                  className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center max-sm:w-[5vw] max-md:w-[3vw] max-sm:h-[1.5px]  ${
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
                    <span className="bg-white w-[75%] h-[1px] absolute top-0 left-1/2 translate-x-[-50%]"></span>
                  <div className="py-[3.5vw] text-[#CACACA] w-[90%] max-sm:pb-[8vw] max-sm:w-[95%] max-sm:text-[4.2vw] pb-[7vw]">
                    <ul className="ml-[13vw] list-disc flex  gap-x-[5vw] gap-y-[3vw]">
                        {features.map((item,index)=>(
                            <li key={index} className="w-1/5 marker:text-sm">
                                {/* <span className="rounded-full bg-white h-[0.3vw] w-[0.3vw] mr-[0.8vw]"></span> */}
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
      title: "AI Studio ",
      description:"Build, test, deploy, and monitor AI/ML models with lightning speed using accelerated workflows",
      features: [
        "Agentic AI drag and drop workflows and framework for task-based orchestration ",
        "LLM model plug-ins with customizable tools, memory, and prompts ",
        "Secure integration with internal knowledge bases and APIs ",
        "Guardrails and governance by design for safe, compliant outputs "
      ],
      z:"z-[100]",
    },
    {
      id: "002",
      title: "GenAI Studio ",
      description:"Design, configure, and launch enterprise-grade GenAI agents with ease",
      features: [
        "Agentic AI drag and drop workflows and framework for task-based orchestration ",
        "LLM model plug-ins with customizable tools, memory, and prompts ",
        "Secure integration with internal knowledge bases and APIs ",
        "Guardrails and governance by design for safe, compliant outputs "
      ],
      z:"z-[200]",
    },
    {
      id: "003",
      title: "Unified Ops ",
      description:"One platform. One centralized AI ecosystem. Total control.  ",
      features: [
        "Agentic AI drag and drop workflows and framework for task-based orchestration ",
        "LLM model plug-ins with customizable tools, memory, and prompts ",
        "Secure integration with internal knowledge bases and APIs ",
        "Guardrails and governance by design for safe, compliant outputs "
      ],
      z:"z-[300]"
    },
   
  ];
