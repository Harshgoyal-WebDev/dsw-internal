"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WhiteButton from "../Button/WhiteButton";

gsap.registerPlugin(ScrollTrigger);

const data=[
  {
    list:"End-to-End AI Lifecycle Management",
    title:"The Freedom to Own AI",
    para:"The power of OpenAI, but entirely inside your infrastructure with your data, your compliance, and your governance.",
    link:"#",
  },
  {
    list:"Multi-Model AI Support",
    title:"Unified AI Lifecycle",
    para:"One platform for the full journey from data to deployment to continuous learning, eliminating silos and execution gaps.",
    link:"#",
  },
  {
    list:"Seamless Enterprise Integration",
    title:"Governance by Design",
    para:"Security, compliance, and trust baked in with role-based access, explainability, audit trails, and approval workflows.",
    link:"#",
  },
  {
    list:"Scalable Infrastructure",
    title:"Sector-Agnostic, Vertically Accelerated",
    para:"Supports enterprises across industries, combining a sector-agnostic core with domain-focused accelerators to deliver impact at scale.",
    link:"#",
  },
]

export default function WhyUnifyMobile({ allowMultiple = false }) {
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
    <section ref={sectionRef} className="px-[7vw] max-sm:py-[15%] w-full h-fit bg-[#F8F8F8] relative max-md:py-[7%] hidden max-md:block text-[#111111]" id="WhyUnify">
      <div className="h-[5vh] relative w-full">
<h3 className="title-2 text-primary-1 font-light headingAnim">
            Why DSW UnifyAI is the OS for AI?
          </h3>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex gap-2 z-30  border border-[#E2EFFF] rounded-full overflow-hidden p-0.5">
          <motion.div
            className="absolute top-[3%] left-0 w-1/2 mx-0.5 h-[92%] rounded-full bg-primary z-0 duration-300"

          />
        </div>
      </div>

      <div className="w-full space-y-[2vw] max-sm:pt-[20vw] max-md:pt-[10vw]">
        {data.map((f, i) => (
          <Accordion
            key={i}
            index={i}
            title={f.title}
            para={f.para}
            link= {f.link}
            isOpen={openIndexes.includes(i)}
            onToggle={() => toggleIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Accordion({
title,para,link,isOpen, onToggle
}) {
  return (
    <div className={`w-full group overflow-hidden`}>
      <div className="w-full mr-auto  ">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full max-sm:pt-[5vw] max-sm:pb-[7vw] flex items-start justify-between max-md:pt-[3vw] max-md:pb-[5vw]"
        >
          <div className="w-full flex justify-between ">
            <h3 className="max-sm:text-[6.8vw] font-display capitalize max-md:text-[5.5vw] text-left w-[90%]">
              {title}
            </h3>
             <div
              className={`max-sm:w-[13vw] max-sm:h-[12vw] relative flex items-center justify-center max-sm:rounded-[3vw] transition-all duration-500 max-md:w-[9vw] max-md:h-[8vw] max-md:rounded-[1.5vw] rotate-45`}
            >
              <span className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] rotate-45 bg-[#DADADA]`} />
              <span className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] ${isOpen ? "rotate-[45deg] bg-[#DADADA]" : "rotate-[135deg] bg-[#DADADA]"}`} />
            </div>
          </div>
        </button>

        <AnimatePresence initial={false} >
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
              <div className="w-full flex flex-col max-sm:gap-[2vw] max-sm:pb-[10vw] max-md:items-center max-md:pb-[5vw] max-md:gap-[3vw]">
                <div className="w-full flex flex-col gap-[5vw] ">
                              <div className="rounded-2xl overflow-hidden h-fit w-fit">
                                <Image
                                  src="/assets/images/homepage/whyunify-img-1.png"
                                  height={390}
                                  width={382}
                                  className="h-[14vw] w-[16vw] object-contain max-sm:h-[35vw] max-sm:w-[40vw]"
                                  alt="why unify image 1"
                                />
                              </div>
                              <div className="rounded-2xl overflow-hidden h-fit w-fit ml-[25vw]">
                                <Image
                                  src="/assets/images/unify-dashboard-2.png"
                                  height={247}
                                  width={283}
                                  className="h-[13vw] w-[15vw] object-contain max-sm:h-[35vw] max-sm:w-[40vw]"
                                  alt="dashboard"
                                />
                              </div>
                            </div>
                <div className="w-full">
                  {/* <h3 className="capitalize title-2 max-md:text-[5.5vw] text-left ">
                    {title}
                  </h3> */}
                </div>
                <div
                  className='py-4 space-y-[4vw] '>{para}</div>
                <div className="w-full mt-[5vw]">
                  <WhiteButton
                  circleColor={"bg-primary-1 group-hover:!bg-primary-1"}
                  text="Know More"
                  href="#"
                  className="border-primary-1 border text-primary-1 bg-transparent hover:text-primary-1 hover:bg-transparent"
                />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-[1px] bg-black/20" />
      </div>
    </div>
  );
}
