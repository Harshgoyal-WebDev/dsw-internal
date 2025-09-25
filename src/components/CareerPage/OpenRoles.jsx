"use client";
import React from "react";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function CardStack({ allowMultiple = false}) {
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
      className=" w-full relative z-[40] !text-[#E8E8E8] container max-md:hidden"
      id="cardstack"
    >
      <div className="flex flex-col items-start gap-[5vw]">
        
         <h2 className="text-90 headingAnim w-[45%]">Open Roles</h2>
        
        <div className="w-full relative z-[10]">
          {usecaseData.map((f, i) => (
            <AccordionItem
              key={i}
              index={i}
              question={f.title}
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

function AccordionItem({ question,features, isOpen, onToggle,index,z}) {

  return (
    <div className={`w-full group  overflow-hidden relative faq-tab  accordion-block group  ${z} ${index>0 ? "mt-[-2vw] ":"mt-0"}`}>
      <div className={`w-full mr-auto relative`}>

        <div className={`inset-0 w-full relative border rounded-[1.5vw] border-white/10 ${ isOpen ? "bg-gradient-to-r from-light-blue to-dark-blue" :"bg-[#030815]"}  `}>
          <div className="relative w-full h-full z-10 px-[3vw] content duration-300 ">
            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              className="cursor-pointer w-full h-full py-[2.5vw] pt-[3vw] flex items-start justify-between "
            >
                <div className="flex items-center gap-[8vw]">
                 <p className="">
                  {`00${index+1}`}
                </p>
              <h4 className="text-40  text-left leading-[1.2]">
                {question}
              </h4>
              </div>
              <div
                className={` h-auto relative duration-500 max-sm:w-[12vw] rounded-full border-[1.5px]  p-[2vw]  transition-all  ease-out  ${ isOpen ? "border bg-white" :" background-glass border-white/20"}  ${
                  !isOpen ? "group-hover:rotate-[180deg]" : "group-hover:rotate-[315deg] rotate-[45deg]"
                }`}
              >
                <span className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center  ${
                    isOpen ? "rotate-90" : "rotate-90"
                  } ${
                    isOpen ? "bg-black" : "bg-white"
                  }`}></span>

                <span
               
                  className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center  ${
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
                    <span className="bg-white w-[78%] h-[1px] absolute top-0 left-1/2 translate-x-[-50%]"></span>
                  <div className="py-[3.5vw] text-[#CACACA] w-[90%] ">
                    <ul className="space-y-[1.5vw] ml-[10vw] list-disc">
                        {features.map((item,index)=>(
                            <li key={index} className="flex items-center gap-[0.5vw]">
                                <span className="rounded-full bg-white h-[0.3vw] w-[0.3vw] mr-[0.8vw]"></span>
                                <p>{item}</p>
                                <div className="h-[0.8vw] w-[0.8vw]">
                                    <Image src={"/assets/icons/top-right-white.svg"} height={10} width={10} alt="top-right-arrow" className="h-full w-full"/>
                                </div>
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
      title: "Engineering & Development",
      description:"An enterprise-grade AI platform that integrates data, models, agents, deployment, and governance in one seamless fabric. Build AI solutions in weeks and GenAI applications in hours. Operate with full observability, built-in guardrails, and policy control. Avoid vendor lock-in with flexible deployment options: on-premises, hybrid, or cloud. ",
      features: [
        "AI Platform Engineer",
        "Machine Learning Engineer",
        "Backend Engineer",
        "Frontend Engineer",
        "AI Platform Engineer"
      ],
      z:"z-[100]",
      className: `usecase-card1 z-[1]`,
    },
    {
      id: "002",
      title: "AI Research & Applied Science",
      description:"An enterprise-grade AI platform that integrates data, models, agents, deployment, and governance in one seamless fabric. Build AI solutions in weeks and GenAI applications in hours. Operate with full observability, built-in guardrails, and policy control. Avoid vendor lock-in with flexible deployment options: on-premises, hybrid, or cloud. ",
      features: [
        "AI Platform Engineer",
        "Machine Learning Engineer",
        "Backend Engineer",
        "Frontend Engineer",
        "AI Platform Engineer"
      ],
      z:"z-[200]",

      className: `translate-y-[48%] usecase-card2 z-[1]`,
    },
    {
      id: "003",
      title: "Data & Analytics",
      description:"An enterprise-grade AI platform that integrates data, models, agents, deployment, and governance in one seamless fabric. Build AI solutions in weeks and GenAI applications in hours. Operate with full observability, built-in guardrails, and policy control. Avoid vendor lock-in with flexible deployment options: on-premises, hybrid, or cloud. ",
      features: [
        "AI Platform Engineer",
        "Machine Learning Engineer",
        "Backend Engineer",
        "Frontend Engineer",
        "AI Platform Engineer"
      ],
      z:"z-[300]",
      className: `translate-y-[65%] usecase-card3 z-[4]`,
    },
    {
      id: "004",
      title: "Customer & Growth",
      description:"An enterprise-grade AI platform that integrates data, models, agents, deployment, and governance in one seamless fabric. Build AI solutions in weeks and GenAI applications in hours. Operate with full observability, built-in guardrails, and policy control. Avoid vendor lock-in with flexible deployment options: on-premises, hybrid, or cloud. ",
      features: [
        "AI Platform Engineer",
        "Machine Learning Engineer",
        "Backend Engineer",
        "Frontend Engineer",
        "AI Platform Engineer"
      ],
      z:"z-[400]",
      className: `translate-y-[82%] usecase-card4 z-[4]`,
    },
  ];