"use client";
import React from "react";
import gsap from "gsap";
import { useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function AgenticUsecase({
  data = [],
  allowMultiple = false,
  
}) {
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
        <h2 className="text-60 headingAnim w-[95%] text-center">
     Turn proofs-of-concept into auditable, production-grade automation with explainable agents, deterministic governance, and enterprise-grade security.       
 </h2>
        
        <div className="  relative z-[10] fadeup">
          {data.map((f, i) => (
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
                <div className="flex items-center gap-[8vw]  !w-[40vw]">
                 <p className="">
                  {`00${index+1}`}
                </p>
              <h3 className="text-30 text-left leading-[1.2] capitalize">
                {title}
              </h3>
              </div>

              <div className="h-[6vw] w-[45vw]">
               <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  onAnimationComplete={() => {
                    ScrollTrigger.refresh();
                  }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className=" relative  "
                >
                    <div className={`w-full  `}>
              <p className="text-left">{description}</p>
              </div>
                </motion.div>
              )}
            </AnimatePresence>
             </div>
              
              
              </div>

              {/* <div
                className={` h-auto relative duration-500 max-sm:w-[12vw] rounded-full border-[1.5px] p-[2vw]  transition-all  ease-out ml-[3vw]  ${ isOpen ? "border bg-white" :" background-glass border-white/20"}  ${
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
              </div> */}
            </button>

           
          </div>
        </div>
      </div>
    </div>
  );
}


