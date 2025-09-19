"use client";
import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionBreak from "../Common/SectionBreak";

export default function AiEverywhere() {
  useGSAP(() => {
    gsap.from(".ai-everywhere-cards", {
      yPercent: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".ai-everywhere-cards",
        start: "top 80%",
      },
    });
  });
  return (
    <>
      <section className="h-full z-[10] max-sm:mt-[60%] w-screen container">
        <div className="flex flex-col items-center justify-between space-y-[10vw] max-sm:space-y-[25vw] w-full">
          <SectionBreak text={"Even today, most enterprises struggle to move from pilot to production. Complex tech stacks, long timelines, and compliance risks slow things down. DSW UnifyAI solves this."} span={false}/>
          <div className="space-y-[7vw] max-sm:space-y-[20vw]">
            <div className="flex h-full max-sm:flex-col items-center max-sm:gap-[10vw] gap-[12vw] justify-between">
              <p className="w-[45%]  max-sm:w-full max-sm:text-center title-3 text-nowrap font-head headingAnim text-[2.8vw] ">
                AI is Everywhere. <br />
                But Operational AI is Rare.
              </p>
              <Copy>
                <p className="w-full max-sm:w-full max-sm:text-center text-white-300">
                  Most enterprises face the same hurdles: siloed teams, long
                  development cycles, integration nightmares, and governance
                  concerns. UnifyAI is more than a platform. It's a full-stack
                  AI engine to help teams build, deploy, and scale faster — for
                  real outcomes. 
                </p>
              </Copy>
            </div>
            <div className=" flex items-start max-sm:flex-col max-sm:gap-[12vw] justify-between w-full">
              {cardsData.map((card, index) => (
                <div key={index} className="space-y-[2vw] max-sm:space-y-[8vw] max-sm:w-full ai-everywhere-cards w-[21.5%]">
                  <div className="w-full  max-sm:flex-col max-sm:flex max-sm:items-center max-sm:justify-center h-full">
                    <Image
                      src={card.src}
                      height={98}
                      width={98}
                      alt={card.alt}
                      className="w-[5vw]  h-[5vw]  object-contain max-sm:w-[22vw] max-sm:h-[22vw]"
                    />
                  </div>
                  <p className="text-content max-sm:text-center max-sm:px-[8vw] text-white-300">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const cardsData = [
  {
    src: "/assets/icons/fast-track-icon.svg",
    alt: "Fase track icon",
    text: "Go live 50% faster",
  },
  {
    src: "/assets/icons/gen-ai-deployment-icon.svg",
    alt: "Gen AI Deployement icon",
    text: "Cut AI/GenAI deployment costs by up to 60%",
  },
  {
    src: "/assets/icons/enterprise-grade-privacy-icon.svg",
    alt: "enterprise grade privacy",
    text: "Ensure enterprise-grade privacy, compliance and observability",
  },
  {
    src: "/assets/icons/deploy-icon.svg",
    alt: "deploy icon",
    text: "Deploy across AWS, Azure, GCP, or your private cloud or on-prem",
  },
];
