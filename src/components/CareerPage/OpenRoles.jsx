"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function OpenRoles() {
  const [activeCard, setActiveCard] = useState(0);

  // Generic card handler
  const handleCardClick = (index) => {
    const tl = gsap.timeline();

    // reset all cards
    tl.to(
      [".usecase-card1", ".usecase-card2", ".usecase-card3", ".usecase-card4"],
      { yPercent: 0, duration: 0.6, ease: "power2.out" }
    );

    // lift the cards above the clicked one
    if (index >= 1) {
      tl.to(
        ".usecase-card2",
        { yPercent: -30, duration: 0.6, ease: "power2.out" },
        "<"
      );
    }
    if (index >= 2) {
      tl.to(
        ".usecase-card3",
        { yPercent: -30, duration: 0.6, ease: "power2.out" },
        "<"
      );
    }
    if (index >= 3) {
      tl.to(
        ".usecase-card4",
        { yPercent: -30, duration: 0.6, ease: "power2.out" },
        "<"
      );
    }

    tl.eventCallback("onComplete", () => setActiveCard(index));
  };

 

  return (
    <div className="min-h-screen max-sm:hidden container flex flex-col items-start justify-center space-y-[7vw] h-fit w-full">
      <h2 className="text-90 headingAnim w-[45%]">Open Roles</h2>

      <div className="w-[100%] fadeup relative text-white-200 overflow-hidden rounded-[2.5vw] h-[100vh] border-b border-white/20">
        {usecaseData.map((card, index) => (
          <motion.div
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`h-full px-[3vw] py-[1.5vw] flex items-end flex-col absolute inset-0 pr-[8vw] cursor-pointer group
               ${
                 activeCard === index
                   ? "bg-gradient-to-r from-[#041035] to-[#1727FF]"
                   : "bg-background"
               }
            
            w-full border border-white/20  rounded-[2.5vw] ${card.className}`}
          >
            {/* Card header */}
            <div
              className={`py-[2.5vw] min-h-[15.5vh] flex items-center w-[85%] justify-between border-white`}
            >
              <span className="w-[75%] h-[1px] rounded-full bg-white/80 absolute top-[18%]"></span>

              <div className="space-x-[5vw] w-full flex items-center">
                <p className="absolute left-[3%] top-[10.5%] translate-y-[-50%]">
                  {card.id}
                </p>
                <p className="text-30 ">{card.title}</p>
              </div>

              <div className="flex items-center justify-end w-full gap-[5vw]">
                <div
                  className={`rounded-full absolute right-[3%] top-[10%] translate-y-[-50%] cursor-pointer h-[4vw] w-[4vw] border-[#888888]/80 p-[0.5vw] border ${
                    activeCard === index ? "bg-white" : "bg-white/5"
                  } flex items-center justify-center  active:scale-95 active:opacity-80 transition-all duration-300`}
                >
                  <div
                    className={`transition-all duration-800 ${
                      activeCard === index
                        ? "group-hover:rotate-[315deg] rotate-45"
                        : "group-hover:rotate-[180deg]"
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
                          activeCard === index ? "bg-black" : "bg-white"
                        } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-800 transition-all rotate-90`}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="w-[92%] h-fit min-h-full">
              <ul className="list-disc items-center text-white-200 space-y-[1vw] py-[2vw] pl-[7vw]">
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

 const usecaseData = [
    {
      id: "001",
      title: "Engineering & Development",
      features: [
        "AI Platform Engineer",
        "Machine Learning Engineer",
        "Backend Engineer",
        "Frontend Engineer",
        "AI Platform Engineer"
      ],
      className: `usecase-card1 z-[1]`,
    },
    {
      id: "002",
      title: "AI Research & Applied Science",
      features: [
        "AI Platform Engineer",
        "Machine Learning Engineer",
        "Backend Engineer",
        "Frontend Engineer",
        "AI Platform Engineer"
      ],
      className: `translate-y-[48%] usecase-card2 z-[1]`,
    },
    {
      id: "003",
      title: "Data & Analytics",
      features: [
        "AI Platform Engineer",
        "Machine Learning Engineer",
        "Backend Engineer",
        "Frontend Engineer",
        "AI Platform Engineer"
      ],
      className: `translate-y-[65%] usecase-card3 z-[4]`,
    },
    {
      id: "004",
      title: "Customer & Growth",
      features: [
        "AI Platform Engineer",
        "Machine Learning Engineer",
        "Backend Engineer",
        "Frontend Engineer",
        "AI Platform Engineer"
      ],
      className: `translate-y-[82%] usecase-card4 z-[4]`,
    },
  ];