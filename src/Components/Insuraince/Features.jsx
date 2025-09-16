"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);

const Card = ({ srcc, content }) => {
  return (
    <div
      className="card h-[45vh] backdrop-blur-lg cursor-pointer group transition-all duration-500 
      bg-white/10 hover:bg-gradient-to-r hover:from-light-blue hover:to-dark-blue 
      w-[20vw] rounded-[2vw] py-[2vw] px-[2vw] flex-shrink-0"
    >
      <div className="h-full w-full">
        <div className="w-[5.2vw]">
          <Image
            src={srcc}
            height={300}
            width={300}
            alt="card-svg"
            className="w-full group-hover:brightness-0 group-hover:invert transition h-full object-cover"
          />
        </div>
        <div className="pt-[3vw]">
          <p className="text-white-300">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const featuresRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".card");

    // horizontal scrolling of container
    const horizAnim = gsap.to(cardsContainerRef.current, {
      x: "-55vw",
      ease: "none",
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top top",
        end: "70% top",
        scrub: true,
        // markers: true,
      },
    });

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { rotateY: 90, opacity: 0, transformPerspective: 900 },
        {
          rotateY: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            containerAnimation: horizAnim, // <-- tie to horizontal scroll
            trigger: card,
            scrub:true,
            start: "left 95%", 
            end: "100% 105%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
    });
  }, featuresRef);

  return () => ctx.revert();
}, []);



  return (
    <section id="features-section"
        ref={featuresRef} className="h-[350vh] w-full relative">
      <div
        className="bg-primary features-div sticky top-0 h-fit flex flex-col container !px-0"
      >
        <div className="w-[47%] pl-[5vw] space-y-[1vw]">
          <h2 className="title-2 headingAnim w-[100%] text-white-200">
            The Unified AI Platform Built for Insurance Enterprises
          </h2>

          <Copy>
            <p className="text-white-300 w-[80%]">
              insurAInce brings together everything insurers need to rapidly
              operationalize AI and GenAI — all on one secure, enterprise-grade
              platform.
            </p>
          </Copy>
        </div>

        <div className="w-full overflow-x-hidden pt-[2vw]">
          <div
            ref={cardsContainerRef}
            className="flex gap-[2vw] translate-x-[100vw] min-w-max"
          >
            {cardsData.map((card, index) => (
              <Card key={index} srcc={card.src} content={card.content} />
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
