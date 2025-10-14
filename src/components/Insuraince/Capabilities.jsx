"use client";
import React, { useState, useRef, act, useEffect } from "react";
import Image from "next/image";
import Copy from "../Animations/Copy";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { NextButton, PreviousButton } from "../Button/SliderButtons";

const capabilities = [
  {
    id: "01",
    src: "/assets/icons/insuraince/automate-setting.svg",
    text: "Automate servicing, documentation, and communications with human-like agents",
  },
  {
    id: "02",
    src: "/assets/icons/insuraince/RAG.svg",
    text: "Use Retrieval-Augmented Generation (RAG), MCP and A2A protocols for smart, secure responses",
  },
  {
    id: "03",
    src: "/assets/icons/insuraince/config.svg",
    text: "Configure memory, tone, and rules for each agent",
  },
  {
    id: "04",
    src: "/assets/icons/fast-track-icon.svg",
    text: "Deploy in hours with built-in monitoring and compliance guardrails",
  },
];

const Capabilities = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    if (globalThis.innerWidth <= 1024) {
      setMob(true);
    } else {
      setMob(false);
    }
  }, [mob]);

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
    <section className="h-full container">
      <div className="w-[90%] max-md:w-[100%] ">
        <h2 className="text-90 headingAnim max-md:text-center">
          Turn Common Insurance Tasks into Intelligent Agents 
        </h2>
      </div>

      <div className="flex justify-between max-md:flex-col pt-[4vw] max-md:pt-[10vw]">
        <div className="w-[45%] max-md:w-[100%]">
          <Copy>
            <p className="text-white-200 text-50 max-md:text-center  font-head">
              These aren’t chatbots. They’re intelligent teammates for your
              operations. 
            </p>
          </Copy>
        </div>

        {!mob ? (
          <div className="w-[50%] max-md:hidden">
            <Copy>
              <p className="text-white-300">
                From claim status queries to automated underwriting support,
                insurAInce gives you over 300 prebuilt GenAI agents that are
                designed for real insurance workflows. 
              </p>
              <p className="text-white-300 text-[1.2vw] py-[2.5vw] font-display">
                Key Capabilities: 
              </p>
            </Copy>

            <div className="">
              <div className="flex flex-col gap-[4.5vw] pt-[4vw]">
                {capabilities.map((cap) => (
                  <div key={cap.id} className="relative group pb-[2vw]">
                    <div className="w-full h-[1px]  bg-[#59595980] absolute top-[-40%] mb-[2vw] lineDraw" />

                    <div className="flex items-start fadeup justify-start gap-[5vw]">
                      <p className="text-white text-[1vw] font-display">
                        {cap.id}
                      </p>
                      <div className="w-[5.5vw]  h-[5.5vw]">
                        <Image
                          src={cap.src}
                          alt={`capibility-${cap.id}`}
                          width={40}
                          height={40}
                          className="object-contain h-full w-full"
                        />
                      </div>

                      <p className="text-white-300 max-w-[28vw]">{cap.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden max-md:block swiperr pt-[10vw]">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full"
            >
              {capabilities.map((cap, index) => (
                <SwiperSlide key={index}>
                  <div className="flex gap-[8vw] mt-[8vw] w-full items-center justify-center flex-col fadeup">
                    <p className="text-white-300 text-[4vw]">{cap.id}</p>
                    <div className="w-[30%] h-auto relative">
                      <Image
                        src={cap.src}
                        height={200}
                        width={200}
                        className="object-contain h-full w-full"
                        alt={`capability-${cap.id}`}
                      />
                    </div>
                    <p className="text-center text-[4.3vw] text-white-300">
                      {cap.text}
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
                isDisabled={capabilities.length - 1 === activeIndex}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Capabilities;
