"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";

export default function Usecase() {
  const [activeCard, setActiveCard] = useState(1);
  const handleFirstCard = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".usecase-card2",
      { yPercent: 25 },
      { yPercent: 50, duration: 0.8, ease: "power2.inOut" }
    );
    tl.fromTo(
      ".usecase-card3",
      { yPercent: 75 },
      { yPercent: 75, duration: 0.8, ease: "power2.inOut" },
      "-=0.5"
    );
    tl.eventCallback("onComplete", () => {
      setActiveCard(0);
    });
  };

  const handleSecondCard = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".usecase-card2",
      { yPercent: 50 },
      { yPercent: 25, duration: 1, ease: "power2.inOut" }
    );
    tl.fromTo(
      ".usecase-card1",
      { yPercent: 0 },
      { yPercent: 0, duration: 1, ease: "power2.inOut" },
      "-=0.7"
    );

    tl.eventCallback("onComplete", () => {
      setActiveCard(1);
    });
  };

  const handleThirdCard = () => {
    const tl = gsap.timeline();
    tl.to(
      ".usecase-card3",
      { yPercent: 50, duration: 0.8, ease: "power2.inOut" },
      "-=0.5"
    );
    tl.to(
      ".usecase-card2",
      { yPercent: 25, duration: 0.8, ease: "power2.inOut" },
      "-=0.5"
    );
    tl.to(
      ".usecase-card1",
      { yPercent: 0, duration: 0.8, ease: "power2.inOut" },
      "-=0.5"
    );
    tl.eventCallback("onComplete", () => {
      setActiveCard(2);
    });
  };


  const usecaseData = [
    {
      id: "001",
      title: "AI STUDIO",
      description:
        "Build, test, deploy, and monitor AI/ML models with lightning speed using accelerated workflows",
      features: [
        "Agentic AI drag and drop workflows and framework for task-based orchestration",
        "Seamless integration with popular AI/ML frameworks and libraries",
        "Automated model training and hyperparameter optimization",
        "Real-time monitoring and performance analytics",
      ],
      handleClick: handleFirstCard,
      className:
        `usecase-card1 z-[1]`,
      borderClass: "border-white/10",
      iconBg: "bg-white",
      iconFill: "black",
    },
    {
      id: "002",
      title: "GenAI Studio ",
      description:
        "Design, configure, and launch enterprise-grade GenAI agents with ease",
      features: [
        "Agentic AI drag and drop workflows and framework for task-based orchestration",
        "LLM model plug-ins with customizable tools, memory, and prompts ",
        "Secure integration with internal knowledge bases and APIs ",
        "Guardrails and governance by design for safe, compliant outputs ",
      ],
      handleClick: handleSecondCard,
      className:
        `translate-y-[25%] usecase-card2 z-[1] border-t`,
      borderClass: "border-white/50",
      iconBg: "bg-white",
      iconFill: "black",
    },
    {
      id: "003",
      title: "Unified Ops ",
      description:
        "One platform. One centralized AI ecosystem. Total control. ",
      features: [
        "Agentic AI drag and drop workflows and framework for task-based orchestration",
        "Intelligent automation of complex business processes",
        "Advanced natural language processing capabilities",
        "Customizable AI agents for specific business domains",
      ],
      handleClick: handleThirdCard,
      className:
        `translate-y-[75%] usecase-card3  z-[4]`,
      borderClass: "border-white/10",
      iconBg: "bg-white",
      iconFill: "black",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-[7vw] items-center justify-center h-fit w-full container">
      <p className="title-2 w-[45%] text-center">
        Supercharge Your AI and GenAI Use Cases
      </p>
      <div className="w-[100%] relative overflow-hidden border border-[#595959]/50 rounded-[2.5vw] h-[85vh]">
        {usecaseData.map((card, index) => (
          <div
            key={card.id}
            onClick={card.handleClick}
            className={`h-full px-[4vw] duration-300   py-[2vw] absolute inset-0 cursor-pointer transition-all ${activeCard === index ? "bg-gradient-to-r from-[#041035] to-[#1727FF]" : "bg-background"}  w-full border border-[#595959]/50 rounded-[2.5vw] ${card.className}`}
          >
            <div
              className={`border-b py-[2vw] flex items-center w-full justify-between ${card.borderClass}`}
            >
              <div className="space-x-[5vw] w-full flex items-center">
                <p className="">{card.id}</p>
                <p className="sub-text-content">{card.title}</p>
              </div>
              <div className="flex items-center justify-end w-full gap-[5vw]">
                <p className="text-content w-[70%]">{card.description}</p>
                <div
                  className={`rounded-full cursor-pointer h-[4vw] w-[4vw] border-[#888888]/80 p-[0.5vw] transition-all duration-300  border ${activeCard == index ? card.iconBg : "bg-white/5"} flex items-center justify-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5vw"
                    height="1.5vw"
                    viewBox="0 0 24 24"
                    fill={activeCard == index ? card.iconFill : "white"}
                  >
                    {activeCard == index ? (
                      <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" />
                    ) : (
                      <path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" />
                    )}
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full h-fit min-h-full">
              <ul className="flex list-disc items-center gap-[5vw] py-[2vw] pl-[7vw]">
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
