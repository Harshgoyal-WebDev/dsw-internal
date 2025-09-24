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
      <section className="h-full relative z-[20] max-md:mt-0 w-screen container">
        <div className="flex flex-col items-center justify-between space-y-[10vw] max-md:space-y-[25vw] w-full">
          <SectionBreak text={"Even today, most enterprises struggle to move from pilot to production. Complex tech stacks, long timelines, and compliance risks slow things down. DSW UnifyAI solves this."} span={false} textAlign={"!text-center"} width={"w-[95%]"}/>
          <div className="space-y-[7vw] max-md:space-y-[20vw]">
            <div className="flex h-full max-md:flex-col items-center max-md:gap-[10vw] gap-[12vw] justify-between">
              <h2 className="w-[45%]  max-md:w-full max-md:text-center text-50 text-nowrap font-head headingAnim  ">
                AI is Everywhere. <br/>
                But Operational AI is Rare.
              </h2>
              <Copy>
                <p className="w-full max-md:w-full max-md:text-center text-white-300">
                  Most enterprises face the same hurdles: siloed teams, long
                  development cycles, integration nightmares, and governance
                  concerns. UnifyAI is more than a platform. It's a full-stack
                  AI engine to help teams build, deploy, and scale faster — for
                  real outcomes. 
                </p>
              </Copy>
            </div>
            <div className=" flex items-start max-md:flex-col max-md:gap-[12vw] justify-between w-full">
              {cardsData.map((card, index) => (
                <div key={index} className="space-y-[2vw] max-md:space-y-[8vw] max-md:w-full ai-everywhere-cards w-[21.5%]">
                  <div className="w-full  max-md:flex-col max-md:flex max-md:items-center max-md:justify-center h-full">
                    <Image
                      src={card.src}
                      height={98}
                      width={98}
                      alt={card.alt}
                      className="w-[5vw]  h-[5vw]  object-contain max-md:w-[22vw] max-md:h-[22vw]"
                    />
                  </div>
                  <p className=" max-md:text-center max-md:px-[8vw] text-white-300">{card.text}</p>
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
