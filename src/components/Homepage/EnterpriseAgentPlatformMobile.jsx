"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import WhiteButton from "../Button/WhiteButton";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    list: "Deploy agents fast",
    title: "Deploy agents fast",
    para: "Launch production-grade agents, tasks, and workflows in hours.",
    link: "/production-pilot",
  },
  {
    list: "Advanced RAG pipelines",
    title: "Advanced RAG pipelines",
    para: "Build high-accuracy retrieval workflows with evaluation and controls.",
    link: "/production-pilot",
  },
  {
    list: "Agent orchestration",
    title: "Agent orchestration",
    para: "Coordinate multi-agent plans, A2A collaboration, and enterprise workflows.",
    link: "/production-pilot",
  },
  {
    list: "Governed intelligence",
    title: "Governed intelligence",
    para: "Runtime guardrails, audit trails, and native human-in-the-loop oversight.",
    link: "/production-pilot",
  },
];

export default function EnterpriseAgentPlatformMobile({
  allowMultiple = false,
}) {
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

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#tour",
        start: "top 100%",
        end: "20% 10% ",
        markers: false,
        scrub: true,
      },
    });
    tl.fromTo(
      "#tour, #enterpriseAgentPlatformMobile",
      {
        backgroundColor: "#f8f8f8",
      },
      {
        backgroundColor: "#030815",
      }
    );
    tl.fromTo(
      ".tour-heading, #enterpriseAgentPlatformMobile p",
      {
        color: "#111111",
      },
      {
        color: "#e8e8e8",
      },
      "<"
    );
    tl.fromTo(
      ".tour-para, #enterpriseAgentPlatformMobile h3",
      {
        color: "#111111",
      },
      {
        color: "#e8e8e8",
      },
      "<"
    );
    gsap.to(".enterprise-bg", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#enterpriseAI",
        start: "30% 50%",
        end: "35% 20% ",
        scrub: true,
        // markers: true,
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="px-[7vw] max-sm:py-[15%] w-full h-fit bg-[#F8F8F8] relative max-md:py-[15%] hidden max-md:block text-[#111111]"
      id="enterpriseAgentPlatformMobile"
    >
      <div className="h-[30vw] relative w-full">
        <div className="space-y-[5vw] flex flex-col items-center justify-center">
          <div className="w-[25vw] h-auto headingAnim relative">
            <Image
              className="h-full w-full object-contain transition-all duration-700 ease-default-ease group-hover:opacity-0"
              src="/assets/icons/dswAgencticBlueTheme.png"
              alt="enterprise-ai-platform"
              width={150}
              height={60}
            />
          </div>
          <h2 className="text-60 text-primary-1 text-center font-light headingAnim">
            The Enterprise Agents Platform​
          </h2>
          <Copy>
            <p className="text-background  w-[100%] text-30 text-center">
              Built for enterprises that need safe, auditable, large-scale 
              agentic automation.
            </p>
          </Copy>
          <Copy>
            <p className="text-background w-[100%] text-center">
              Get governed, explainable, production-ready AI agents and
              orchestrated multi-agent workflows - with full oversight and
              operational control.​
            </p>
          </Copy>
        </div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex gap-2 z-30  border border-[#E2EFFF] rounded-full overflow-hidden p-0.5">
          <motion.div className="absolute top-[3%] left-0 w-1/2 mx-0.5 h-[92%] rounded-full bg-primary z-0 duration-300" />
        </div>
      </div>

      <div className="w-full space-y-[2vw] max-md:pt-[70vw]">
        {data.map((f, i) => (
          <Accordion
            key={i}
            index={i}
            title={f.title}
            para={f.para}
            link={f.link}
            isOpen={openIndexes.includes(i)}
            onToggle={() => toggleIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Accordion({ title, para, link, isOpen, onToggle }) {
  return (
    <div className={`w-full group overflow-hidden fadeup`}>
      <div className="w-full mr-auto  ">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full max-sm:pt-[5vw] max-sm:pb-[7vw] flex items-start justify-between max-md:pt-[3vw] max-md:pb-[5vw]"
        >
          <div className="w-full flex justify-between ">
            <h3 className="max-sm:text-50 font-display capitalize max-md:text-[5.5vw] text-left w-[85%]">
              {title}
            </h3>
            <div
              className={`max-sm:w-[13vw] max-sm:h-[12vw] relative flex items-center justify-center max-sm:rounded-[3vw] transition-all duration-500 max-md:w-[9vw] max-md:h-[8vw] max-md:rounded-[1.5vw] rotate-45`}
            >
              <span
                className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] rotate-45 bg-[#848484]`}
              />
              <span
                className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] ${isOpen ? "rotate-[45deg] bg-[#848484]" : "rotate-[135deg] bg-[#848484]"}`}
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
              <div className="w-full flex flex-col max-sm:gap-[2vw] max-sm:pb-[10vw] max-md:items-center  max-md:pb-[5vw] max-md:gap-[3vw]">
                <div className="w-full flex  flex-col gap-[5vw] ">
                  <div className="rounded-2xl max-sm:rounded-2xl max-md:rounded-3xl overflow-hidden h-fit w-fit">
                    <Image
                      src="/assets/images/homepage/whyunify/unify-dashboard-1.png"
                      height={390}
                      width={382}
                      className="h-[14vw] w-[16vw] object-contain max-sm:h-[35vw] max-sm:w-[40vw] max-md:w-[30vw] max-md:h-[30vw]"
                      alt="unify-ai-graph"
                    />
                  </div>
                  <div className="rounded-2xl max-sm:rounded-2xl max-md:rounded-3xl overflow-hidden h-fit w-fit ml-[25vw]">
                    <Image
                      src="/assets/images/homepage/whyunify/unify-dashboard-2.png"
                      height={247}
                      width={283}
                      className="h-[13vw] w-[15vw] object-contain max-sm:h-[35vw] max-sm:w-[40vw]  max-md:w-[30vw] max-md:h-[30vw]"
                      alt="unify-ai-dashboard"
                    />
                  </div>
                </div>
                <div className="w-full"></div>
                <div className="py-4 space-y-[4vw] ">{para}</div>
                <div className="w-full mt-[5vw] max-md:mt-[1vw] max-sm:mt-[5vw]">
                  <WhiteButton
                    background="border-primary-2 border bg-transparent hover:bg-transparent"
                    circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
                    text="Know More"
                    href="/production-pilot"
                    className="hover:text-primary-2 text-primary-2"
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
