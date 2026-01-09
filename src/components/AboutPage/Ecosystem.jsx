"use client";
import React, { useRef, useEffect } from "react";
import Copy from "../Animations/Copy";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: "01",
    src: "/assets/icons/about/infrastructure.svg",
    title: "Infrastructure",
    text: "Partnering with Neysa to deliver secure, GPU-accelerated, cloud-native AI infrastructure designed for BFSI needs, with a strong focus on insurance. ",
  },
  {
    id: "02",
    src: "/assets/icons/about/talent.svg",
    title: "Talent & services",
    text: "Collaborating with SK International to build AI skills and service readiness for enterprises ready to lead with AI-first strategies. ",
  },
  {
    id: "03",
    src: "/assets/icons/about/technology.svg",
    title: "Technology partners",
    text: "Working with cloud, data, and model partners across the stack to ensure seamless integration and expansion. ",
  },
  {
    id: "04",
    src: "/assets/icons/about/community.svg",
    title: "Community & collaboration",
    text: "We foster shared learning, open standards, and co-development so enterprises, developers, and experts can shape a responsible, scalable AI future together. ",
  },
];

const PilotCard = ({  icon, title, para, spanRef }) => {
  
  return (
    <>
      <div className=" space-y-[2vw] relative group  max-sm:space-y-[10vw] w-[45%] pb-[6vw] max-md:w-full max-md:h-fit max-md:space-y-[4vw]">
        <div className=" pt-[3vw] gap-[4vw] items-start space-y-[3vw] max-sm:flex max-sm:flex-col max-sm:space-y-[6vw] max-sm:mt-[7vw] fadeup">
          <Image
            src={icon}
            height={98}
            width={98}
            alt={title}
            className="w-[5vw] h-[5vw] object-contain max-sm:w-[20vw] max-sm:h-[20vw] max-md:w-[10vw] max-md:h-[10vw]"
          />
          <div className="space-y-[2vw] max-md:space-y-[4vw] h-fit">
            <h3 className="text-50 text-white-200 max-sm:!text-[7.5vw] max-sm:h-fit">
              {title}
            </h3>
            <p className="text-white-300 h-[8vw]   max-md:h-auto">
              {para}
            </p>
          </div>
        </div>
         <div className="relative w-full h-[1px] bg-white/50 opacity-[0.5] group-hover:opacity-[1] transition-all duration-500">
        <span
          ref={spanRef}
          className="absolute top-0 left-0 h-full bg-white/50 w-full scale-x-0 origin-left "
        />
        <span className="absolute top-0 left-0 h-full bg-primary-2 w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
      </div>
      </div>
    </>
  );
};

const Ecosystem = () => {
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

  return (
    <>
      <section
        className="h-full w-screen container !py-[4vw] relative overflow-hidden max-sm:!py-[10vw]"
      >
        <div className="w-full h-full  relative z-[2] space-y-[1.5vw] max-md:space-y-0">
          <div className= " flex items-center justify-center gap-[2vw] flex-col max-md:items-start">
            <h2 className="text-90 headingAnim text-center max-md:text-left">
              Our Ecosystem
            </h2>
             <Copy>
                <p className="text-white-300 w-[40%] text-center max-md:w-full max-md:text-left">
                 We are intentionally building an AI ecosystem that empowers collaboration and innovation.  
                </p>
              </Copy>
          </div>

          <div className=" w-full  flex flex-wrap  mt-[4vw]  gap-x-[7vw] justify-between max-md:flex-col">
            {data.map((card, index) => (
              <PilotCard
                key={index}
                icon={card.src}
                title={card.title}
                para={card.text}
                id={card.id}
                 spanRef={(el) => (spanRefs.current[index] = el)}
              />
            ))}
          </div>

        <div className="flex flex-col items-center justify-center gap-[3vw] max-md:gap-[8vw] max-md:items-start">
          <div className="w-[80%] max-sm:w-[100%]">
              <Copy>
                <p className="text-white-200 text-50 text-center  font-head max-md:text-left">
                We collaborate with partners across infrastructure, talent, and technology to accelerate secure and responsible AI adoption. This includes initiatives focused on BFSI-grade readiness for AI-driven transformation. ​
                </p>
              </Copy>
            </div>
            <div className="flex gap-[2vw] max-md:flex-col max-sm:gap-[6vw] max-md:gap-[4vw]">
              <div className=" fadeup">
                <PrimaryButton href={"/contact-us"} text={"Partner With Us"} />
              </div>
              <div className=" fadeup">
                <PrimaryButton target="_blank" href={"https://chat.whatsapp.com/4UJBjd1ZjV3JcXWCgYqqRH"} text={"Join Our Community"} />
              </div>

            </div>
              </div>
        </div>
      </section>
    </>
  );
};

export default Ecosystem;
