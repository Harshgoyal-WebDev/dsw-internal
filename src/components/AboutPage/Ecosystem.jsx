"use client";
import React, { useState, useRef } from "react";
import Copy from "../Animations/Copy";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import PrimaryButton from "../Button/PrimaryButton";
import { NextButton, PreviousButton } from "../Button/SliderButtons";

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

const PilotCard = ({ id, icon, title, para }) => {
  return (
    <>
      <div className=" space-y-[2vw] relative group  max-sm:space-y-[10vw] w-[50%] pb-[6vw]">
        <span className="absolute top-0 left-0 w-full h-[1px] bg-[#59595980]  lineDraw"></span>
        <div className=" pt-[3vw] flex gap-[4vw] items-start space-y-[3vw] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-y-[6vw] max-sm:mt-[10vw] fadeup">
          <div className="pr-[1vw]">
            <p>{id}</p>
          </div>
          <Image
            src={icon}
            height={98}
            width={98}
            alt={title}
            className="w-[5vw] h-[5vw] object-contain max-sm:w-[20vw] max-sm:h-[20vw]"
          />
          <div className="space-y-[2vw]">
            <h4 className="text-50 text-white-200 max-sm:!text-[7.5vw] max-sm:w-[72%] max-sm:text-center max-sm:h-fit">
              {title}
            </h4>
            <p className="text-white-300  max-sm:w-[80%] max-sm:text-center max-sm:h-auto">
              {para}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Ecosystem = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

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
    <>
      <section
        className="h-full w-screen container !pb-[3vw] relative overflow-hidden"
      >
        <div className="w-full h-full  relative z-[2] space-y-[1.5vw] ">
          <div className="w-[90%] max-sm:w-[100%] ">
            <h2 className="text-90 headingAnim max-sm:text-center">
              Our Ecosystem
            </h2>
          </div>

          <div className="flex justify-between max-sm:flex-col pt-[4vw] max-sm:pt-[10vw]">
            <div className="w-[45%] max-sm:w-[100%]">
              <Copy>
                <p className="text-white-200 text-50 max-sm:text-center  font-head">
                  We are intentionally building an AI ecosystem that empowers
                  collaboration and innovation. 
                </p>
              </Copy>
            </div>

            <div className="w-[50%] max-sm:hidden">
              <Copy>
                <p className="text-white-300">
                  Our ecosystem is a collective effort, bringing together
                  customers, partners, developers, and thought leaders to build
                  solutions that deliver real-world impact. 
                </p>
              </Copy>
              <div className="pt-[3vw] fadeup">
                <PrimaryButton href={"/"} text={"Partner With Us"} />
              </div>
            </div>
          </div>
          <div className=" w-full max-sm:hidden flex flex-col items-end  mt-[7vw]  gap-x-[7vw] justify-between">
            {data.map((card, index) => (
              <PilotCard
                key={index}
                icon={card.src}
                title={card.title}
                para={card.text}
                id={card.id}
              />
            ))}
          </div>

          <div className="h-fit hidden max-sm:block w-full">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full"
            >
              {data.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="flex gap-[8vw] mt-[8vw] w-full items-center justify-center flex-col">
                    <Copy>
                      <p className="text-white-300 text-[4vw]">{card.id}</p>
                    </Copy>
                    <div className="w-[30%] h-auto relative fadeup">
                      <Image
                        src={card.src}
                        height={200}
                        width={200}
                        className="object-contain h-full w-full"
                        alt={card.title}
                      />
                    </div>
                    <div className="space-y-[5vw] w-full">
                      <Copy>
                        <p className="text-center">{card.title}</p>
                      </Copy>
                      <Copy>
                        <p className="text-center text-white-300">
                          {card.text}
                        </p>
                      </Copy>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden max-md:block">

          <div className="flex gap-6 mt-6 max-md:mt-[10vw] max-md:items-center max-md:justify-center">
            <PreviousButton onClick={handlePrev} isDisabled={activeIndex === 0} />
            <NextButton onClick={handleNext} isDisabled={activeIndex === 3} />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ecosystem;
