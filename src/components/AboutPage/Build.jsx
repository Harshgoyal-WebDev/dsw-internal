"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Build() {
  const [activeCard, setActiveCard] = useState(0);
  const handleFirstCard = () => {
    const tl = gsap.timeline();
    tl.to(".usecase-card1", {
      yPercent: 0,
      duration: 0.8,
      ease: "power2.out",
    });
    tl.to(
      ".usecase-card2",
      {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "<"
    );
    tl.to(
      ".usecase-card3",
      {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "<"
    );
    tl.eventCallback("onUpdate", () => {
      setActiveCard(0);
    });
  };

  const handleSecondCard = () => {
    const tl = gsap.timeline();

    tl.to(".usecase-card1", { yPercent: 0, duration: 0.8, ease: "power2.out" });
    tl.to(
      ".usecase-card2",
      { yPercent:-27, duration: 0.8, ease: "power2.out" },
      "<"
    );
    tl.to(
      ".usecase-card3",
      { yPercent: 0, duration: 0.8, ease: "power2.out" },
      "<"
    );

    tl.eventCallback("onUpdate", () => {
      setActiveCard(1);
    });
  };

  const handleThirdCard = () => {
    const tl = gsap.timeline();
    tl.to(".usecase-card1", { yPercent: 0, duration: 0.8, ease: "power2.out" });
    tl.to(
      ".usecase-card2",
      { yPercent: -27, duration: 0.8, ease: "power2.out" },
      "<"
    );
    tl.to(
      ".usecase-card3",
      { yPercent: -28, duration: 0.8, ease: "power2.out" },
      "<"
    );
    tl.eventCallback("onUpdate", () => {
      setActiveCard(2);
    });
  };

  const usecaseData = [
    {
      id: "001",
      title: "DSW UnifyAI ",
      description:
        "An enterprise-grade AI platform that integrates data, models, agents, deployment, and governance in one seamless fabric. Build AI solutions in weeks and GenAI applications in hours. Operate with full observability, built-in guardrails, and policy control. Avoid vendor lock-in with flexible deployment options: on-premises, hybrid, or cloud. ",
      features: [
        " AI Studio",
        "GenAI Studio",
        "Feature Store",
        "Prompt Hub",
        "Guardrails",
        "Model & Agent Monitoring",
        "One-click Deployment",
        "Multi-cloud & On-prem Support"
      ],
      handleClick: handleFirstCard,
      className: `usecase-card1 z-[1]`,
      borderClass: "border-white",
      iconBg: "bg-white",
      iconFill: "black",
    },
    {
      id: "002",
      title: "insurAInce ",
      description:
        "An enterprise-grade AI platform that integrates data, models, agents, deployment, and governance in one seamless fabric. Build AI solutions in weeks and GenAI applications in hours. Operate with full observability, built-in guardrails, and policy control. Avoid vendor lock-in with flexible deployment options: on-premises, hybrid, or cloud. ",
      features: [
        " AI Studio",
        "GenAI Studio",
        "Feature Store",
        "Prompt Hub",
        "Guardrails",
        "Model & Agent Monitoring",
        "One-click Deployment",
        "Multi-cloud & On-prem Support"
      ],
      handleClick: handleSecondCard,
      className: `translate-y-[52%] usecase-card2 z-[1]`,
      borderClass: "border-white",
      iconBg: "bg-white",
      iconFill: "black",
    },
    {
      id: "003",
      title: "BankAI & FSAI ",
      description:
        "An enterprise-grade AI platform that integrates data, models, agents, deployment, and governance in one seamless fabric. Build AI solutions in weeks and GenAI applications in hours. Operate with full observability, built-in guardrails, and policy control. Avoid vendor lock-in with flexible deployment options: on-premises, hybrid, or cloud. ",
      features: [
        " AI Studio",
        "GenAI Studio",
        "Feature Store",
        "Prompt Hub",
        "Guardrails",
        "Model & Agent Monitoring",
        "One-click Deployment",
        "Multi-cloud & On-prem Support"
      ],
      handleClick: handleThirdCard,
      className: `translate-y-[76%] usecase-card3  z-[4]`,
      borderClass: "border-white",
      iconBg: "bg-white",
      iconFill: "black",
    },
  ];
 

  return (
    <div className="min-h-screen max-sm:hidden container flex flex-col items-center justify-center space-y-[7vw] h-fit w-full">
      <h2 className="text-90 headingAnim w-[45%] text-center capitalize">
       What we build 
      </h2>
      <div className="w-[100%] fadeup relative text-white-200 overflow-hidden rounded-[2.5vw] h-[85vh] border-b border-white/20">
        {usecaseData.map((card, index) => (
          <motion.div
            key={card.id}
            onClick={card.handleClick}
            className={`h-full px-[3vw] py-[1.5vw] flex items-end flex-col absolute inset-0 pr-[8vw] cursor-pointer group
               ${
                 activeCard === index
                   ? "bg-gradient-to-r from-[#041035] to-[#1727FF]"
                   : "bg-background"
               }
            
            w-full border border-white/20  rounded-[2.5vw] ${
              card.className
            }`}
          >
            {/* <div className="w-full flex items-start justify-end h-full "> */}
            <div
              className={`py-[2.5vw] min-h-[15.5vh] flex items-center w-[85%] justify-between ${card.borderClass} `}
            >
              <span className="w-[75%] h-[1px] rounded-full bg-white/80 absolute top-[30%]"></span>
              
              <div className="space-x-[5vw] w-full flex items-start">
                <p className="absolute left-[3%] top-[14.5%] translate-y-[-50%]">
                  {card.id}
                </p>
                <p className="text-30 capitalize">{card.title}</p>
              </div>
              <div className="flex items-start  text-white-200 justify-end w-full gap-[5vw]">
                <p className=" w-[40vw]">{card.description}</p>
                <div
                  className={`rounded-full absolute right-[3%] top-[12%] translate-y-[-50%] cursor-pointer h-[4vw] w-[4vw] border-[#888888]/80 p-[0.5vw] border ${
                    activeCard == index ? card.iconBg : "bg-white/5"
                  } flex items-center justify-center  active:scale-95 active:opacity-80 transition-all duration-300`}
                >
                  <div
                    className={`transition-all duration-800 ${
                  activeCard === index ? "group-hover:rotate-[315deg] rotate-45" : "group-hover:rotate-[180deg]"
                }`}
                  >
                    <div className={`relative w-[2.2vw] h-[2.2vw] `}>
                      <span
                        className={`w-[70%] rounded-full h-[2px] ${
                          activeCard === index ? "bg-black" : "bg-white"
                        } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-800`}
                      ></span>

                      <span
                        className={`w-[70%] rounded-full h-[2px] ${
                          activeCard === index
                            ? "bg-black"
                            : "bg-white"
                        } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-800 transition-all ${
                          activeCard == index ? "rotate-90" : "rotate-90"
                        }`}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}

            <div className="w-[92%] h-fit min-h-full">
              <ul className="flex list-disc items-center text-white-200 gap-[2vw] flex-wrap  gap-x-[5vw] pt-[5vw] py-[2vw] pl-[7vw]">
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

 