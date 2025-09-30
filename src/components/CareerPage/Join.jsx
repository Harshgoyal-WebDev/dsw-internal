"use client";
import React, { useRef } from "react";
import TiltedCard from "../Animations/TiltedCard";
import PrimaryButton from "../Button/PrimaryButton";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {
  AdvancingIcon,
  CultureIcon,
  GrowIcon,
  PurposeDrivenIcon,
} from "../Icons";
import Link from "next/link";

const featuresData = [
  {
    icon: <PurposeDrivenIcon />,
    title: "Purpose-Driven Innovation. ",
    para: "We don’t build technology for its own sake. Our research-backed solutions help enterprises address their toughest problems, making a real impact on people’s lives and businesses alike. ",
  },
  {
    icon: <GrowIcon />,
    title: "Grow through Research and Collaboration. ",
    para: "We invest in learning, experimentation, and knowledge sharing—empowering you to deepen your skills, explore new ideas, and contribute to AI solutions that are ethical, scalable, and grounded in evidence.  ",
  },
  {
    icon: <CultureIcon />,
    title: "A Culture that Values Every Voice. ",
    para: "With flexibility, inclusivity, and care, we create space for people to bring their best selves, exchange ideas, and collaborate in building solutions that truly matter.  ",
  },
  {
    icon: <AdvancingIcon />,
    title: "Together, we’re Advancing AI for good. ",
    para: "DSW is more than a workplace—it’s a community of builders, researchers, and innovators working collectively toward a better future. Every idea, every experiment, and every effort helps enterprises and people thrive. ",
  },
];

const Join = () => {
  const swiperRef = useRef(null);
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <section className="w-screen h-fit container relative z-[10] overflow-hidden" id="brochure">
      <div className="w-full flex flex-col items-center justify-center gap-[8vw] max-sm:gap-[10vw]">
        <h2 className="w-[70%] text-center text-90 headingAnim max-md:w-full max-sm:text-left max-sm:!text-[11.5vw]">
          Why Join DSW?
        </h2>
        <div className="w-full flex flex-wrap justify-center gap-[3vw] fadeup max-md:hidden">
          {featuresData.map((card, index) => (
            <TiltedCard
              key={index}
              containerHeight="40vw"
              containerWidth="32vw"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="w-full h-full px-[4vw] py-[4vw] flex flex-col justify-between group">
                  <div className="h-[5vw] w-[5vw] text-[#1727FF] group-hover:text-[#FFFFFF] transition-all duration-500 ease-out">
                    {card.icon}
                  </div>
                  <div className="w-full flex flex-col h-[19vw] space-y-[3vw]">
                    <h4 className="text-40">{card.title}</h4>
                    <p>{card.para}</p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
        <div className="h-fit text-white max-sm:w-full max-sm:mt-[10vw] fadeup max-md:w-screen max-md:px-[7vw] max-sm:px-0 hidden max-md:block">
          <Swiper
            // slidesPerView={1.8}
            className=" !opacity-100 !overflow-visible "
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={50}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1025: {
                slidesPerView: 1.8,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
          >
            {featuresData.map((data) => (
              <SwiperSlide className="">
                <BrochureCard
                  key={data.id}
                  title={data.title}
                  listTitle={data.listTitle}
                  list={data.list}
                  icon={data.icon}
                  para={data.para}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-6 mt-6 max-sm:mt-10 max-md:items-center max-md:justify-center max-md:mt-[10vw]">
            <PreviousButton onClick={handlePrev} />
            <NextButton onClick={handleNext} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;

const BrochureCard = ({ title, icon,para}) => {
  return (
    <>
        <div className=" max-sm:h-[65vh] max-sm:rounded-[6.5vw] border border-white/20 py-[10%] px-[7vw] w-full bg-white/5 max-md:h-[60vh] max-md:rounded-[4.5vw]">
          <div className="w-full h-full flex flex-col gap-[3vw] justify-between">
            <div className="h-[20vw] w-[20vw] text-[#1727FF] group-hover:text-[#FFFFFF] transition-all duration-500 ease-out">
                    {icon}
                  </div>
            <div className="space-y-[4vw]">
            <h3 className="text-40">
              {title}

            </h3>
            <p>{para}</p>
            </div>

          </div>

        </div>
    </>
  );
};
