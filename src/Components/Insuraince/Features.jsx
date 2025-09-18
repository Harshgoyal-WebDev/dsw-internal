"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);

const Card = ({ srcc, content, isActive, onHover }) => {
  return (
    <div
      onMouseEnter={onHover}
      className="card relative border border-[#88888880] h-[40vh] cursor-pointer w-[20vw] rounded-[2vw] py-[2vw] px-[2vw] overflow-hidden group"
    >
     <div className="absolute inset-0 background-glass transition-opacity duration-500" />

      <div
        className={`absolute inset-0 bg-gradient-to-r from-light-blue to-dark-blue transition-opacity ease-in-out duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative h-full w-full">
        <div className="w-[5.2vw]">
          <Image
            src={srcc}
            height={300}
            width={300}
            alt="card-svg"
            className={`w-full h-full object-cover transition duration-500 ${
              isActive ? "brightness-0 invert" : ""
            }`}
          />
        </div>
        <div className="pt-[3vw]">
          <p className="text-white-300">{content}</p>
        </div>
      </div>
    </div>
  );
};

const MobileCard = ({srcc, content}) => {

  return (

    <div className="h-[33vh] mx-auto background-glass border border-[#88888880] py-[5vw] w-[80vw] rounded-[6vw] flex flex-col gap-[5vw] items-start justify-center px-[5vw]">

        <div className="w-[25vw] h-auto">
          <Image src={srcc} alt='card-svg' width={400} height={400} className="w-full h-auto" />
        </div>

        <p>
          {content}
        </p>
  </div>
  )
}

const Features = () => {

  const featuresRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".card");

    if(!isMobile)
    {
      const horizAnim = gsap.to(cardsContainerRef.current, {
      x: "-18vw",
      ease: "none",
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 50%",
        end: "70% 30%",
        scrub: true,
        // markers: true,
      },
    });
     cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { rotateY: 65, 
          opacity: 0, 
          transformPerspective: 900 },
        {
          rotateY: 0,
          opacity: 1,
          duration: 1.5,
          ease: "none",
          scrollTrigger: {
            containerAnimation: horizAnim, // <-- tie to horizontal scroll
            trigger: card,
            scrub:true,
            start: "left 95%", 
            end: "140% 90%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      
      );
    });
    }
   
  }, featuresRef);

  return () => ctx.revert();
}, []);

  return (
    <section id="features-section"
        ref={featuresRef} className="h-[200vh] max-sm:h-full w-full relative">
      <div
        className="bg-primary features-div sticky max-sm:relative top-0 h-fit flex flex-col container !px-0"
      >
        <div className="w-[47%] max-sm:w-[90%] pl-[5vw] max-sm:pl-0  max-sm:mx-auto space-y-[1vw] max-sm:space-y-[6vw]">
          <h2 className="title-2 headingAnim w-[100%] max-sm:text-center text-white-200">
            The Unified AI Platform Built for Insurance Enterprises
          </h2>

          <Copy>
            <p className="text-white-300 w-[80%] max-sm:text-center max-sm:w-[100%]">
              insurAInce brings together everything insurers need to rapidly
              operationalize AI and GenAI — all on one secure, enterprise-grade
              platform.
            </p>
          </Copy>
        </div>

        <div className="w-full overflow-x-hidden max-sm:hidden block  pb-[1.2vw] pt-[4vw]">
          <div
            ref={cardsContainerRef}
            className="flex gap-[2vw] translate-x-[100vw] min-w-max"
          >
            {cardsData.map((card, index) => (
              <Card key={index} 
                srcc={card.src} 
                content={card.content}
                isActive={activeIndex === index}
                onHover={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="hidden max-sm:block w-full max-sm:pt-[15vw]">
          <div className="flex flex-col gap-[7vw] mx-auto">

            {cardsData.map((card, index) => (
              <MobileCard key={index}
                    srcc={card.src}
                    content={card.content}
              />
            ))}
          </div>
        </div>
        </div>
      </section>
  );
};

export default Features;

const cardsData = [
  {
    src: "/assets/icons/insuraince/brain-setting.svg",
    content:
      "25+ pre-built AI/ML use cases purpose-built for underwriting, claims, and fraud detection ",
  },
  {
    src: "/assets/icons/insuraince/genAI-agents.svg",
    content:
      "300+ GenAI agents with agentic orchestration. Built, deployed, and managed using RAG, MCP, and A2A protocols. ",
  },
  {
    src: "/assets/icons/insuraince/code-setting.svg",
    content:
      "Modular, low-code AI Studio for building, deploying, and monitoring models at scale ",
  },
  {
    src: "/assets/icons/insuraince/AI.svg",
    content:
      "GenAI Studio for creating compliant, enterprise-ready GenAI agents in hours ",
  },
  {
    src: "/assets/icons/insuraince/deployment.svg",
    content:
      "Deployment options that suit your enterprise: on-prem, cloud, or hybrid infrastructure ",
  },
];
