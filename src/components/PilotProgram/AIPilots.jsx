"use client";
import React, { useState, useRef, useEffect } from "react";
import Copy from "../Animations/Copy";
import Image from "next/image";
import { ArrowBigLeftIcon } from "lucide-react";
import ArrowButton from "../Button/ArrowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { NextButton, PreviousButton } from "../Button/SliderButtons";

const PilotCard = React.memo(({ id, icon, title, para }) => {
  return (
    <>
      <div className=" space-y-[2vw] relative group  max-md:space-y-[10vw] w-[43%]">
        <span className="absolute top-0 left-0 w-full h-[1px] bg-[#59595980]  lineDraw"></span>
        <div className=" pt-[3vw] flex gap-[4vw] items-start space-y-[3vw] max-md:flex max-md:flex-col max-md:items-center max-md:space-y-[6vw] max-md:mt-[10vw] fadeup">
          <div className="pr-[1vw]">
            <p>{id}</p>
          </div>
          <Image
            src={icon}
            height={98}
            width={98}
            alt={title}
            className="w-[5vw] h-[5vw] object-contain max-sm:w-[20vw] max-md:w-[10vw] max-md:h-[10vw] max-sm:h-[20vw]"
          />
          <div className="space-y-[2vw]">
            <h4 className="text-30 text-white-200 max-sm:!text-[7.5vw] max-md:w-[72%] max-md:text-center max-md:h-fit">
              {title}
            </h4>
            <p className="text-white-300 content-p h-28 max-md:w-[80%] max-md:text-center max-md:h-auto">
              {para}
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

const AIPilots = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
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
    <>
      <section
        id="ai-pilots"
        className="h-full w-screen  relative overflow-hidden  background-radial"
      >
        <div className="w-full h-full  relative z-[2] space-y-[7vw] container">
          <div className="space-y-5 mt-10 max-md:space-y-10">
            <h2 className="text-90 headingAnim text-white-200 max-md:text-center">
              AI Pilots Built for Your Industry
            </h2>
            <Copy>
              <p className=" text-white-300 w-[30%] leading-[1.5] max-md:w-full  max-md:text-center">
                Validate use cases across industries, prove ROI early, and build
                a scalable path to production.
              </p>
            </Copy>
          </div>

          {mob ? (
            <div className="h-fit hidden max-md:block w-full">
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
                          src={card.icon}
                          height={200}
                          width={200}
                          className="object-contain h-full w-full"
                          alt={card.title}
                          loading="lazy"
                          quality={70}
                        />
                      </div>
                      <div className="space-y-[5vw] w-full">
                        <Copy>
                          <p className="text-center">{card.title}</p>
                        </Copy>
                        <Copy>
                          <p className="text-center text-white-300">
                            {card.para}
                          </p>
                        </Copy>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className=" w-full max-md:hidden flex flex-wrap h-[64vw] gap-x-[7vw] justify-between">
              {data.map((card, index) => (
                <PilotCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  para={card.para}
                  id={card.id}
                />
              ))}
            </div>
          )}
          <div className=" gap-6 mt-6 max-md:mt-[10vw] max-md:items-center max-md:justify-center hidden max-md:flex">
            <PreviousButton
              onClick={handlePrev}
              isDisabled={activeIndex === 0}
            />
            <NextButton
              onClick={handleNext}
              isDisabled={data.length - 1 === activeIndex}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AIPilots;

const data = [
  {
    id: "01",
    icon: "/assets/icons/pilot-program/insurance.svg",
    title: "Insurance",
    para: "Fast-track underwriting, claims, and fraud detection pilots into production with domain-ready AI. ",
  },
  {
    id: "02",
    icon: "/assets/icons/pilot-program/banking.svg",
    title: "Banking",
    para: "Accelerate pilots in credit scoring, AML, and customer experience with enterprise-grade AI.  ",
  },
  {
    id: "03",
    icon: "/assets/icons/pilot-program/telecommunications.svg",
    title: "Telecommunications",
    para: "Run pilots for churn prediction, network optimization, and CX automation with speed and scale.  ",
  },
  {
    id: "04",
    icon: "/assets/icons/pilot-program/life-sciences.svg",
    title: "Life Sciences",
    para: "Bring pilots in patient analytics, drug discovery, and compliance monitoring into rapid production.  ",
  },
  {
    id: "05",
    icon: "/assets/icons/pilot-program/retail.svg",
    title: "Retail",
    para: "Test and scale pilots for demand forecasting, personalized CX, and inventory optimization in record time. ",
  },
  {
    id: "06",
    icon: "/assets/icons/pilot-program/manufacturing.svg",
    title: "Manufacturing",
    para: "Pilot predictive maintenance, quality control, and supply chain optimization with real-time AI.  ",
  },
  {
    id: "07",
    icon: "/assets/icons/pilot-program/energy.svg",
    title: "Energy",
    para: "Deploy pilots for grid optimization, demand prediction, and sustainability analytics securely and at scale. ",
  },
  {
    id: "08",
    icon: "/assets/icons/pilot-program/gaming.svg",
    title: "Gaming",
    para: "Move fast on pilots for player personalization, fraud prevention, and real-time engagement analytics. ",
  },
];
