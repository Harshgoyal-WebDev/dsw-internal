"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    icon: "/assets/icons/agentic-ai/UnifiedFoundation.svg",
    heading: "Unified foundation",
    text: "ingle governance layer across data, models and agents.",
    zIndex: "z-[10]",
  },
  {
    id: 2,
    icon: "/assets/icons/agentic-ai/agent-orchestration.svg",
    heading: "Agent orchestration & collaboration",
    text: "multi-agent planning, A2A coordination and reusable workflow patterns.",
    zIndex: "z-[9]",
  },
  {
    id: 3,
    icon: "/assets/icons/agentic-ai/audit-governance.svg",
    heading: "Audit-first governance",
    text: "immutable audit trails, deterministic runtime controls and role-based guardrails.",
    zIndex: "z-[8]",
  },
  {
    id: 4,
    icon: "/assets/icons/agentic-ai/human-oversight.svg",
    heading: "Explainability + human oversight:",
    text: "native human-in-the-loop workflows, explainability hooks and escalation controls.",
    zIndex: "z-[7]",
  },
  {
    id: 5,
    icon: "/assets/icons/agentic-ai/security.svg",
    heading: "Security & agent identity",
    text: "RBAC, secrets management, network sandboxing and enterprise key management.",
    zIndex: "z-[6]",
  },
  {
    id: 6,
    icon: "/assets/icons/agentic-ai/flexible-deployment.svg",
    heading: "Flexible deployment",
    text: "cloud-agnostic, hybrid, on-prem or air-gapped deployments to meet data-residency and latency needs.",
    zIndex: "z-[5]",
  },
];



const CoreCapabilities = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    if (globalThis.innerWidth <= 541) {
      setMob(true);
    } else {
      setMob(false);
    }
  }, [mob]);

  useEffect(() => {
    if (!cardsRef.current || !sectionRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".cap-cards");
    const totalCards = cards.length;

    if (!mob) {
      gsap.set(cards, {
        yPercent: (i) => -100 * (i + 1),
        scale: (i) => 1 - (i + 1) * 0.05,
        opacity: 0,
        zIndex: (i) => totalCards - i,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% bottom",
          end: "bottom 75%",
          scrub: true,
        //   markers: true,
        },
      });

      tl.fromTo(
        ".card-1",
        { opacity: 0, zIndex: totalCards + 2 },
        { opacity: 1, duration: 1, zIndex: totalCards + 2 },
        0
      );

      cards.forEach((card, i) => {
        const timePosition = i * 0.5 + 1;

        tl.to(
          card,
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
          },
          timePosition
        );

        for (let j = i + 1; j < totalCards; j++) {
          tl.to(
            cards[j],
            {
              yPercent: -100 * (j - i),
              scale: 1 - (j - i) * 0.05,
              duration: 0.5,
            },
            timePosition
          );
        }
      });

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    }
  }, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section
      id="plat-cap-container"
      ref={sectionRef}
      className="w-screen h-fit container max-md:space-y-[7vw] max-sm:space-y-0"
    >
      <h2 className="text-50 font-head  text-center headingAnim">
        Core Capabilities
      </h2>

      {!mob ? (
        <div
          className="flex justify-center items-center flex-col  w-full max-md:gap-[3vw] gap-[1vw] pt-[2vw] max-sm:hidden"
          ref={cardsRef}
        >
          <div className="w-[35vw] px-[3vw] h-[11vw] max-md:h-[17vw] max-md:w-[65vw] border card-1 z-[11] bg-white/5 background-glass backdrop-blur-sm border-white/15 rounded-[2vw] max-md:rounded-3xl flex justify-center max-md:justify-between max-md:px-[3vw] max-md:gap-[4vw] gap-[2.5vw] items-center fadeup cap-top-card ">
            <div className="h-[5.5vw] w-[20%] max-md:h-[7vw] max-md:w-[7vw]">
              <Image
                src={cardsData[0].icon}
                width={300}
                height={300}
                className="h-full w-full"
                alt="cap-logo"
              />
            </div>
          <div className="flex flex-col gap-4 w-full ">
                <p className="font-body text-30">
                    {cardsData[0].heading}
                </p>
              <p className="text-white-300 !text-[1.1vw]  max-md:w-[80%]">
                {cardsData[0].text}
              </p>
                </div>
          </div>

          {cardsData.slice(1).map((card, index) => (
            <div
              key={card.id}
              className="w-[35vw] px-[3vw] h-[12vw] max-md:w-[65vw] max-md:h-[17vw] relative cap-cards border background-glass backdrop-blur-sm border-white/15 rounded-[2vw] max-md:rounded-3xl flex justify-center max-md:justify-between max-md:px-[3vw] gap-[2.5vw] items-center"
            >
              <div className="!h-auto  !w-[20%] max-md:h-[7vw] max-md:w-[7vw]">
                <Image
                  src={card.icon}
                  width={300}
                  height={300}
                  className="h-auto w-full"
                  alt="cap-logo"
                />
              </div>
              <div className="flex flex-col gap-4 w-full ">
                <p className="font-body text-30">
                    {card.heading}
                </p>
              <p className="text-white-300 !text-[1.1vw]  ">
                {card.text}
              </p>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="hidden max-sm:block max-sm:pt-[8vw] fadeup">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full"
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[28vh] border  z-[4] bg-white/5 background-glass backdrop-blur-sm border-white/15 rounded-[2vw] max-sm:rounded-[7vw] flex max-sm:flex-col max-sm:justify-between max-sm:gap-[5vw] max-sm:py-[8vw] justify-center gap-[2.5vw] items-center">
                  <div className="h-[5.5vw] w-[5.5vw] max-sm:h-[24vw] max-sm:w-auto">
                    <Image
                      src={card.icon}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      alt="cap-logo"
                    />
                  </div>
                  <p className="text-white-300 w-[20vw]  max-sm:text-center">
                    {card.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Nav Buttons */}
          <div className="flex gap-6 mt-6 max-md:mt-[10vw] max-md:items-center max-md:justify-center">
            <PreviousButton
              onClick={handlePrev}
              isDisabled={activeIndex === 0}
            />
            <NextButton
              onClick={handleNext}
              isDisabled={cardsData.length === activeIndex}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CoreCapabilities;
