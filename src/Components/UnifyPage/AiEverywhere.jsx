import Image from "next/image";
import React from "react";

export default function AiEverywhere() {
  return (
    <div className="min-h-screen h-fit flex flex-col items-center justify-between gap-[5vw] py-[5vw] px-[4vw] w-full">
      <div className="w-[95%] pb-[7vw] h-full">
        <p className="font-Neue text-[2.5vw] pt-[8vw] tracking-[0.08rem] font-normal leading-[1.4] text-center ">
          Even today, most enterprises struggle to move from pilot to
          production. Complex tech stacks, long timelines, and compliance risks
          slow things down. DSW UnifyAI solves this.{" "}
        </p>
      </div>
      <div className="flex h-full items-end gap-[5vw] justify-between">
        <p className="w-[50%] font-Neue text-[2.5vw] flex h-fit flex-col  tracking-[0.08rem] font-normal">
          AI is Everywhere.
          <span className="block"> But Operational AI is Rare.</span>
        </p>
        <p className="w-[65%] text-content text-secondaryWhite ">
          Most enterprises face the same hurdles: siloed teams, long development
          cycles, integration nightmares, and governance concerns. UnifyAI is
          more than a platform. It's a full-stack AI engine to help teams build,
          deploy, and scale faster — for real outcomes. 
        </p>
      </div>
      <div className="h-[40vh] flex items-center justify-between w-full">
        {[
          {
            src: "/assets/icons/ai-everywhere/1.svg",
            alt: "1",
            text: "Go live 50% faster"
          },
          {
            src: "/assets/icons/ai-everywhere/2.svg",
            alt: "2",
            text: "Cut AI/GenAI deployment costs by up to 60%"
          },
          {
            src: "/assets/icons/ai-everywhere/3.svg",
            alt: "3",
            text: "Ensure enterprise-grade privacy, compliance and observability"
          },
          {
            src: "/assets/icons/ai-everywhere/4.svg",
            alt: "4",
            text: "Deploy across AWS, Azure, GCP, or your private cloud or on-prem"
          }
        ].map((card, index) => (
          <div key={index} className="flex items-start justify-center flex-col gap-[1vw] w-[20%]">
            <div className="w-[6vw] h-auto">
              <Image
                src={card.src}
                alt={card.alt}
                width={100}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-content text-secondaryWhite">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
