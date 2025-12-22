"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Copy from "../Animations/Copy";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const RealOutcomes = () => {
  const cardRefs = useRef([]);
  const sectionRef = useRef();
  const spanRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      spanRefs.current.forEach((span, i) => {
        tl.fromTo(
          span,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(span, {
                scaleX: 0,
                duration: 0.2,
              });
            },
          },
          i * 0.5
        );

        tl.fromTo(
          cardRefs.current[i],
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          i * 0.2
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    gsap.from(".insuraince-cards", {
      yPercent: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".insuraince-cards",
        start: "top 80%",
      },
    });
  });

  return (
    <section
      id="insuraince"
      className="w-screen h-full overflow-hidden container"
      ref={sectionRef}
    >
      <div className="w-full space-y-[7.5vw] max-md:space-y-[10vw] max-sm:space-y-[12vw]">
        <div className="text-center gap-y-[2.5vw] w-[75%] mx-auto flex flex-col items-center max-md:w-full max-sm:gap-y-[10vw]">
          <h2 className="text-60 headingAnim">
            Made for Real Outcomes - Not Endless Pilots. 
          </h2>
          {/* <Copy>
            <p className="text-[#CACACA] w-[75%] max-md:w-full">
              Over 75% of insurers are experimenting with AI. Fewer than 20%
              have scaled a second use case. And, insurAInce changes that. ​
            </p>
          </Copy> */}
        </div>

        <div className="flex items-center justify-between  max-md:flex-col">
          {content.map((data, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="w-[28%]  opacity-0 max-md:w-full"
            >
              <Card
                data={data}
                spanRef={(el) => (spanRefs.current[index] = el)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealOutcomes;

const Card = ({ data, spanRef }) => {
  return (
    <div className="space-y-[2vw] relative group insuraince-cards  max-sm:space-y-[10vw] max-md:space-y-[10vw] max-md:w-full">
      <div className=" space-y-[3vw] max-md:flex max-md:flex-col max-md:items-center max-md:space-y-[6vw]  max-md:mt-[10vw]">
        <Image
          src={data.icon}
          height={98}
          width={98}
          alt={data.title}
          className="w-[5vw] h-[5vw] object-contain max-md:w-[15vw] max-md:h-[15vw] max-sm:w-[20vw] max-sm:h-[20vw]"
        />
        <h3 className="text-40  text-white-200 leading-[1.25] max-md:w-[72%] max-md:text-center max-md:h-fit">
          {data.title}
        </h3>
        <p className="text-white-300 content-p h-28 max-md:w-[80%] max-md:text-center max-md:h-auto">
          {data.desc}
        </p>
      </div>
      <div className="relative w-full h-[0.5px] bg-white/50 opacity-[0.5] group-hover:opacity-[1] transition-all duration-500">
        <span
          ref={spanRef}
          className="absolute top-0 left-0 h-full bg-white/50 w-full scale-x-0 origin-left "
        />
        <span className="absolute top-0 left-0 h-full bg-primary-2 w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
};

const content = [
  {
    title: "Launch AI/ML in Days. Agentic AI in Hours. ​",
    desc: "Accelerate innovation with unified workflows, governed pipelines, and intelligent orchestration designed for modern enterprises.​",
    icon: "/assets/icons/insurance-dna-icon.svg",
  },
  {
    title: "Go Live 50% Faster. Cut TCO by 60%.​",
    desc: "Eliminate fragmented tools, reduce operational overhead, and accelerate ROI with a single integrated platform for AI/ML, GenAI, and Agentic AI.​",
    icon: "/assets/icons/fast-track-icon.svg",
  },
  {
    title: "Deploy Anywhere - Cloud, Hybrid, On-Prem or Air-Gapped. ​",
    desc: "Run in any environment with enterprise-grade security, Kubernetes support, VPC isolation, and full control over data, models, and workflows. ​",
    icon: "/assets/icons/one-platform-icon.svg",
  },

  //   {
  //     title: "Flexible Deployment, Zero Vendor Lock-In​",
  //     desc: "Deploy on-prem or any cloud — with seamless integration into your existing infrastructure.​",
  //     icon: "/assets/icons/flexible-deployment-icon.svg",
  //   },
];
