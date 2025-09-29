"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NextButton, PreviousButton } from "../Button/SliderButtons";

export default function WorkshopFlow({ sessionsData, space }) {
  useGSAP(() => {
    gsap.from(".experts-cards", {
      yPercent: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".experts-cards",
        start: "top 80%",
      },
    });
  });
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="relative w-full h-fit space-y-[6vw] container max-md:h-full overflow-hidden">
      <div className="w-full flex h-full  gap-[1vw] items-end justify-between max-md:flex-col max-md:items-start">
        <h2 className="text-90 headingAnim max-md:text-center w-[45%] max-md:w-full">
          Workshop Flow & Key Sessions
        </h2>

        <div className="flex fadeup gap-6 mt-12 max-md:mt-[15vw]  max-md:items-center max-md:justify-center max-md:absolute max-md:top-[85%] max-md:left-[50%] max-md:translate-x-[-50%]">
          <PreviousButton onClick={handlePrev} isDisabled={activeIndex === 0} />
          <NextButton onClick={handleNext} isDisabled={sessionsData.length-1 === activeIndex } />
        </div>
      </div>
      <div className="h-fit flex  items-center justify-center  w-full max-md:my-[15vw]">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={35}
          freeMode={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full !overflow-visible"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
          }}
        >
          {sessionsData.map((card, index) => (
            <SwiperSlide key={index} className="experts-cards w-full h-full">
              <SwiperCard
                title={card.title}
                list={card.list}
                duration={card.duration}
                onHover={() => setActiveIndex(index)}
                isActive={activeIndex === index}
                space={space}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const SwiperCard = ({ title, list, duration, onHover, isActive, space }) => {
  return (
    <>
      <div
        className="relative py-[3vw] background-glass max-md:py-[8vw] max-md:px-[8vw] rounded-[1.5vw] overflow-hidden w-[34vw] px-[3vw] h-[38vw] max-md:min-h-[70vh] max-sm:min-h-[65vh] max-md:w-full max-md:rounded-[6vw] border border-white/20 group "
        onMouseEnter={onHover}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r from-light-blue to-dark-blue transition-opacity ease-in-out duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute right-[4%] top-[4%] z-[5] rounded-full flex items-center justify-center h-[5vw] w-[5vw] max-sm:h-[18vw] max-sm:top-[7%] max-sm:w-[18vw] max-md:w-[12vw] max-md:h-[12vw] border border-white/20">
          <p className="text-white-200 max-sm:text-[4vw] max-md:text-[3vw] text-[1vw]">{duration}</p>
        </div>
        <div className="h-full flex flex-col justify-between relative z-[10]">
          <div className="w-[60%] max-md:w-[70%]">
            <h3 className="text-40 text-white-200">{title}</h3>
          </div>
          <div className="w-full  max-md:space-y-[3vw] py-[2vw] max-sm:mt-[8vw]">
            <ul className={`list-disc text-white-200 pl-[2vw] ${space}`}>
              {list.map((item, index) => (
                <li key={index} className="text-white-300 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">
                  <span className="!font-medium max-md:w-full text-white-200">{item.heading} </span>{" "}
                  {item.para}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
