"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CoDeployIcon, OpenSourceIcon, WorkshopsIcon } from "../Icons";

gsap.registerPlugin(ScrollTrigger);

const Deployments = () => {
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
      className="w-screen h-full overflow-hidden container max-sm:mt-[50vw] max-md:mt-[30vw]"
      ref={sectionRef}
    >
      <div className="w-full space-y-[7vw] max-md:space-y-[10vw] max-sm:space-y-[12vw]">
        <div className="text-center gap-y-[2.5vw] mx-auto flex flex-col items-center max-md:w-full max-sm:gap-y-[10vw]">
          <h2 className="text-60 headingAnim">
           Finacle Deployments Anchored by Open-Source Expertise 
          </h2>
         
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

export default Deployments;

const Card = ({ data, spanRef }) => {
  return (
    <div className="space-y-[2vw] relative group insuraince-cards  max-sm:space-y-[10vw] max-md:space-y-[10vw] max-md:w-full">
      <div className=" space-y-[3vw] max-md:flex max-md:flex-col max-md:items-center max-md:space-y-[6vw]  max-md:mt-[10vw]">
       
        <div className="w-[5vw] h-[5vw] object-contain max-md:w-[12vw] max-md:h-[12vw] max-sm:w-[20vw] max-sm:h-[20vw] text-primary-1 ">
            {data.icon}

        </div>
       
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
    desc: "Joint open-source adoption strategies for Finacle at global banks. ​",
    icon: <OpenSourceIcon/>,
  },
  {
    desc: "Co-deploy, operate, and maintain Finacle open-source stacks worldwide. ​",
    icon: <CoDeployIcon/>,
  },
  {
    desc: "Conduct workshops, playbooks, and research to build open-source capability across Finacle teams and customers. ​",
    icon: <WorkshopsIcon/>,
  },

 
];
