"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Faqs({ allowMultiple = false, content }) {
  const [openIndexes, setOpenIndexes] = useState([]);

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
      className=" w-full  relative ] max-sm:min-h-screen max-md:min-h-screen dark z-[40]  !text-[#E8E8E8] container"
      id="faqs"
    >
      <div className="flex flex-col items-center gap-[5vw] max-sm:gap-[10vw] max-md:justify-center max-sm:items-start">
        
          <h2 className="title-1  text-center !leading-[1.15] title-1 max-sm:text-[11vw] max-sm:w-full max-sm:text-left headingAnim ">
            Frequently Asked Questions
          </h2>
        
        
        <div className="w-[90%]  max-sm:w-full max-sm:space-y-[5vw] max-md:w-[90%] max-md:py-[3vw] max-md:space-y-[3vw] relative z-[10]">
          {data.map((f, i) => (
            <AccordionItem
              key={i}
              question={f.title}
              answer={f.description}
              isOpen={openIndexes.includes(i)}
              onToggle={() => toggleIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, onToggle }) {

  return (
    <div className="w-full group  overflow-hidden relative z-[10] faq-tab fadeupanim accordion-block group fadeup">
      <div className="w-full mr-auto relative">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#88888880] opacity-[0.5]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>

        <div className="inset-0 w-full relative">
          <div className="relative w-full h-full z-10 px-[3vw] max-sm:rounded-[2.5vw] content mix-blend-difference duration-300 max-sm:px-0">
            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              className="cursor-pointer w-full h-full py-[2.5vw] flex items-center justify-between max-sm:pb-[7vw]"
            >
              <h4 className="text-[1.2vw] font-medium text-left leading-[1.2] max-sm:text-[4.5vw] max-sm:w-[70%] max-md:text-[3vw] max-md:w-[80%] max-sm:leading-[1.5]">
                {question}
              </h4>
              <div
            //   style={{ transitionTimingFunction: "cubic-bezier(0.625, 0.05, 0, 1)" }}
                className={` h-auto relative duration-500 max-sm:w-[12vw] rounded-full border-[1.5px]  p-[2vw]  transition-all  ease-out max-sm:p-[6vw] ${ isOpen ? "border-[#030815] bg-gradient-to-br from-[#F16B0D] to-[#E61216]" :" background-glass border-white/20"}  ${
                  !isOpen ? "group-hover:rotate-[180deg]" : "group-hover:rotate-[315deg] rotate-[45deg]"
                }`}
              >
                <span className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center max-sm:w-[5vw] max-sm:h-[1.5px] ${
                    isOpen ? "rotate-90" : "rotate-90"
                  }`}></span>

                <span
               
                  className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center max-sm:w-[5vw] max-sm:h-[1.5px] `}
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
                  className="overflow-hidden"
                >
                  <div className="pb-[3.5vw] text-[#CACACA] w-[90%] max-sm:pb-[8vw] max-sm:w-[95%] max-sm:text-[4.2vw]">
                    <p>{answer}</p>
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

const data = [
  {
    title: "What is UnifyAI?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    title: "Who can use UnifyAI?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    title: "How does UnifyAI integrate with existing systems?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    title: "Is UnifyAI secure?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    title: "What types of AI models does UnifyAI support?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
]