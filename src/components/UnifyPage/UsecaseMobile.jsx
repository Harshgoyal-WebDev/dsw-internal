"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WhiteButton from "../Button/WhiteButton";

gsap.registerPlugin(ScrollTrigger);

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
    {
      id: "002",
      title: "AgenticAI",
      description:"Design, configure, and launch enterprise-grade GenAI agents with ease:",
      features: [
        "Agentic AI drag and drop workflows and framework for task-based orchestration ",
        "LLM model plug-ins with customizable tools, memory, and prompts ",
        "Secure integration with internal knowledge bases and APIs ",
        "Guardrails and governance by design for safe, compliant outputs "
      ],
      z:"z-[200]",
    },
    {
      id: "003",
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

export default function UsecaseMobile({ allowMultiple = false }) {
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
        <h2 className="text-60 text-center font-light headingAnim">
          Supercharge Your AI and GenAI Use Cases  
        </h2>
      </div>

      <div className="w-full max-md:pt-[20vw]">
        {usecaseData.map((f, i) => (
          <Accordion
            key={i}
            index={i}
            id={f.id}
            title={f.title}
            para={f.description}
            link={f.features}
            features={f.features}
            isOpen={openIndexes.includes(i)}
            onToggle={() => toggleIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Accordion({ title, para, link, features, isOpen, onToggle, id }) {
  // console.log(features);

  return (
    <div className={`w-full group overflow-hidden fadeup`}>
      <div className="w-full mr-auto  ">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full max-sm:pt-[5vw] max-sm:pb-[5vw] flex items-start justify-between max-md:pt-[5vw] max-md:pb-[5vw]"
        >
          <div className="w-full flex justify-between ">
            <div className="flex text-white-200 items-center justify-center gap-[5vw]">
              <p className=" text-[3.5vw]">{id}</p>
              <h3 className="max-sm:text-[5.5vw] font-display capitalize max-md:text-[5.5vw] text-left w-[85%]">
                {title}
              </h3>
            </div>
            <div
              className={`max-sm:w-[13vw] max-sm:h-[12vw] relative flex items-center justify-center max-sm:rounded-[3vw] transition-all duration-500 max-md:w-[9vw] max-md:h-[8vw] max-md:rounded-[1.5vw] rotate-45`}
            >
              <span
                className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] rotate-45 bg-white/50`}
              />
              <span
                className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] ${
                  isOpen
                    ? "rotate-[45deg] bg-white/50"
                    : "rotate-[135deg] bg-white/50"
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
              transition={{ duration: 0.5, ease: "easeOut" }}
              onAnimationComplete={() => {
                ScrollTrigger.refresh();
              }}
              className="overflow-hidden"
            >
              <div className="w-full flex flex-col max-sm:gap-[2vw] max-sm:pb-[10vw] max-md:items-center max-md:pb-[5vw] max-md:gap-[3vw]">
                <div className="py-4 space-y-[4vw]  text-white-200 ">{para}</div>
                <div className="w-full flex text-white-200 mt-[5vw] flex-col">
                  <ul className="list-disc pl-[5vw] ">
                    {features &&
                      features.map((feature, index) => (
                        <li key={index} className="mb-[8vw]">
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-[1px] bg-white/50" />
      </div>
    </div>
  );
}
