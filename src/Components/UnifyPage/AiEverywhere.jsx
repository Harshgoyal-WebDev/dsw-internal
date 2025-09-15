import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";

export default function AiEverywhere() {
  return (
    <>
    <section className="h-full w-screen container">
    <div className="flex flex-col items-center justify-between space-y-[10vw] w-full">
      <div className="  h-full">
        <Copy>
        <p className="!font-head text-[2.8vw]  font-normal leading-[1.4] text-center text-white-200">
          Even today, most enterprises struggle to move from pilot to
          production. Complex tech stacks, long timelines, and compliance risks
          slow things down. DSW UnifyAI solves this.
        </p>
        </Copy>
      </div>
      <div className="space-y-[7vw]">
      <div className="flex h-full items-center gap-[5vw] justify-between">
        <p className="w-[45%] font-head text-[2.8vw] flex flex-col">
          AI is Everywhere.<br/>
          But Operational AI is Rare.
        </p>
        
        <p className="w-[65%] text-white-300">
          Most enterprises face the same hurdles: siloed teams, long development
          cycles, integration nightmares, and governance concerns. UnifyAI is
          more than a platform. It's a full-stack AI engine to help teams build,
          deploy, and scale faster — for real outcomes. 
        </p>
        
      </div>
      <div className=" flex items-center justify-between w-full">
        {cardsData.map((card, index) => (
          <div key={index} className="space-y-[2vw] w-[20vw]">
            <div className="w-full h-full">
             <Image
                       src={card.src}
                       height={98}
                       width={98}
                       alt={card.alt}
                       className="w-[5vw] h-[5vw] object-contain max-sm:w-[20vw] max-sm:h-[20vw]"
                     />
            </div>
            <p className="text-content text-white-300">
              {card.text}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
    </section>
    </>
  );
}

const cardsData=[
          {
            src: "/assets/icons/fast-track-icon.svg",
            alt: "Fase track icon",
            text: "Go live 50% faster"
          },
          {
            src: "/assets/icons/gen-ai-deployment-icon.svg",
            alt: "Gen AI Deployement icon",
            text: "Cut AI/GenAI deployment costs by up to 60%"
          },
          {
            src: "/assets/icons/enterprise-grade-privacy-icon.svg",
            alt: "enterprise grade privacy",
            text: "Ensure enterprise-grade privacy, compliance and observability"
          },
          {
            src: "/assets/icons/deploy-icon.svg",
            alt: "deploy icon",
            text: "Deploy across AWS, Azure, GCP, or your private cloud or on-prem"
          }
]
