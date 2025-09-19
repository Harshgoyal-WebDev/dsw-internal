import React from "react";
import Image from "next/image";
import Copy from "../Animations/Copy";

const Card = ({ src, content }) => {
  return (
    <div className="flex flex-col max-sm:gap-[5vw] gap-[2vw] max-sm:w-full max-sm:h-fit w-[16vw] relative group min-h-[20vh] fadeup">
       <div className="absolute z-[2] bottom-[-15%] max-sm:bottom-0 w-full h-[1px] bg-primary-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>

      <div className="w-fit h-[5vw] max-sm:h-[12vh]">
        <Image
          src={src}
          alt="card-icon"
          width={60}
          height={60}
          className="h-full w-auto object-cover"
          />
      </div>
                       
      <p className="text-white-300 text-12 font-display">{content}</p>
             
      <div className="w-full  h-[1px] bottom-[-15%] absolute lineDraw bg-foreground/30 mt-auto" />
    </div>
  );
};

const cardsData = [
  {
    src: "/assets/icons/insuraince/AI.svg",
    content: "Unified GenAI and AI Studios for faster development",
  },
  {
    src: "/assets/icons/insuraince/verified.svg",
    content: "ISO 42001, ISO 27001, SOC 2, HIPAA certified and GDPR compliant",
  },
  {
    src: "/assets/icons/insuraince/alert.svg",
    content: "Real-time dashboards and alerts for continuous oversight",
  },
  {
    src: "/assets/icons/flexible-deployment-icon.svg",
    content: "Cloud or on-prem deployment with no vendor lock-in",
  },
  {
    src: "/assets/icons/insuraince/cost.svg",
    content: "Predictable scaling with lower cost per use case",
  },
];

const Outcomes = () => {
  return (
    <section className="w-screen h-fit container space-y-[1.5vw] max-sm:space-y-[8vw]">
      <h2 className="text-50  max-sm:leading-[1.2] text-white-200 headingAnim w-[50%] max-sm:w-[100%] max-sm:!text-[11.5vw]">
        <span className="block">One Platform. </span>
        <span className="block">AI and GenAI Working Together.</span>
      </h2>

      <Copy>                

      <p className="w-[40%] text-white-300 max-sm:w-[100%]">
        One secure platform. Many powerful outcomes.
        <br />
        Whether you're deploying fraud models or launching a GenAI assistant for
        claims, insurAInce brings everything into one secure platform that
        scales with your business. 
      </p>
                </Copy>

      <div className="flex justify-end w-full pt-[3vw] max-sm:hidden">
        <div className="w-[65%]">
          <div className="grid grid-cols-3 gap-y-[7vw] gap-x-[2vw] w-full">
            {cardsData.map((card, index) => (
              <Card key={index} src={card.src} content={card.content} />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden max-sm:block max-sm:pt-[3vh]">
            <div className="flex flex-col gap-[14vw]">

               {cardsData.map((card, index) => (
              <Card key={index} src={card.src} content={card.content} />
            ))}

            </div>
      </div>
    </section>
  );
};

export default Outcomes;
