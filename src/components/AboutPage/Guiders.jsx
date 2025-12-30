"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { NextButton, PreviousButton } from "../Button/SliderButtons";

export default function Guiders({heading}) {
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
  useGSAP(() => {
    gsap.from(".guiders-cards", {
      yPercent: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".guiders-cards",
        start: "top 80%",
      },
    });
  });
  return (
    <section className="container w-[95%] max-sm:pb-[10vh] max-md:w-full max-sm:!px-[7vw] mx-auto space-y-[6.5vw] max-md:pt-[35vw] relative overflow-hidden max-md:space-y-0">
      <h2 className="text-90 w-full max-sm:px-0 text-center headingAnim max-md:text-left">
       
        {heading}
      </h2>

      <div className="flex w-[100%] items-start gap-[3vw] justify-between max-md:hidden">
        {GuidersData.map((guider, index) => (
          <Link href={guider.link} key={index} target="_blank" className="w-full guiders-cards">
            <div
              key={index}
              className="relative rounded-[1.5vw] overflow-hidden w-full  h-[19vw]"
            >
              <Image
                src={guider.src}
                width={100}
                height={100}
                className="h-full w-full object-cover"
                alt={guider.name}
              />
              <div className="absolute right-[4%] top-[4%] z-[5] rounded-full flex items-center justify-center  bg-gradient-to-r from-primary-2 to-primary-3 h-[2.5vw] w-[2.5vw]">
                <Image
                  src={"/assets/icons/linkedin.svg"}
                  height={15}
                  width={15}
                  alt="linkedin"
                  className="h-[1vw] w-auto"
                />
              </div>
            </div>
            <div className=" space-y-[1vw] w-full mt-[1vw]">
              <p className="text-30 ">{guider.name}</p>
              <div className="space-y-[0.5vw]">
              <p className="w-[85%] font-medium">{guider.role}</p>
              <p className="w-full font-medium">{guider.company}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>

      <div className="h-fit  items-center justify-center  w-full max-md:mt-[5vw] max-sm:mt-0 hidden max-md:block">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={35}
          // slidesPerView={4}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="!overflow-visible max-sm:!pt-[5vh] max-md:!pt-[5vw] !pl-[27%] max-md:!pl-0 max-md:w-full max-sm:mb-[5%] max-md:mb-[10%]"
          breakpoints={{
            0: {
              slidesPerView: 1.37,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1.6,
              spaceBetween: 30,
            },
            1025: {
              slidesPerView: "auto",
              spaceBetween: 30,
            },
          }}
        >
          {GuidersData.map((card, index) => (
            <SwiperSlide key={index} className="!w-[20vw] max-md:!w-[50vw]  max-sm:!w-[60vw] experts-cards  ">
              <Link
                href={card.link}
                target="_blank"
                key={index}
                className="w-full flex-shrink-0 "
              >
                <div className="relative rounded-[1.5vw] overflow-hidden max-sm:w-full h-[20vw] max-sm:h-[32vh] max-sm:rounded-[6vw] max-md:rounded-[3vw] max-md:h-[42vh] max-md:w-auto max-md:mx-auto">
                  <Image
                    src={card.src}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                    alt={card.name}
                  />
                  <div className="absolute right-[4%] top-[4%] z-[5] rounded-full flex items-center justify-center  bg-gradient-to-r from-primary-2 to-primary-3 h-[2.5vw] w-[2.5vw] max-md:h-[10vw] max-md:w-[10vw]">
                    <Image
                      src={"/assets/icons/linkedin.svg"}
                      height={15}
                      width={15}
                      alt="linkedin"
                      className="h-[1vw] w-auto max-md:h-[4vw]"
                    />
                  </div>
                </div>
               <div className="space-y-[.5vw] w-full mt-[1vw] max-md:mt-[5vw] max-sm:pl-[2vw] max-md:space-y-[2.5vw] max-sm:mt-[5vw] max-md:pl-[1vw]">
                  <p className="text-30 max-sm:text-[5.5vw]">{card.name}</p>
                  <div className="space-y-[0.5vw] max-md:space-y-[0.5vw]">
                  <p className="w-[75%] max-md:w-[80%] max-sm:w-[95%]  font-medium ">{card.role}</p>
                  <p className="w-[75%] max-md:w-[80%] max-sm:w-[95%]  font-medium ">{card.company}</p>
                  </div>

                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" gap-6 mt-12 max-md:mt-10  max-md:items-center max-sm:mt-[12%] max-md:justify-end  hidden max-md:flex">
        <PreviousButton onClick={handlePrev}  isDisabled={activeIndex === 0} />
        <NextButton onClick={handleNext}  isDisabled={GuidersData.length-1 === activeIndex} />
      </div>
    </section>
  );
}

const GuidersData = [
  {
    src: "/assets/images/guiders/javed.png",
    name: "Javed Tapia",
    role: "Founder, Chairman",
    company:"Clover InfoTech,Clover Realty",
    link:"https://www.linkedin.com/in/javedtapia/"
  },
  {
    src: "/assets/images/guiders/hemant.png",
    name: "Hemant Kenia",
    role: "Founder and CEO",
    company:"SK International",
    link:"https://www.linkedin.com/in/hemant-kenia-2829a155/"
  },
  {
    src: "/assets/images/guiders/sharad.png",
    name: "Sharad Sanghi",
    role: "Chairman NTT",
    company:"Global Data India",
    link:"http://linkedin.com/in/sharadsanghi"
  },
  {
    src: "/assets/images/guiders/upendra.png",
    name: "Dr. Upendra Rao",
    role: "Independent Director",
    company:"IDBI-Intech",
    link:"https://www.linkedin.com/in/seethala-upendra-rao-03802736/"
  },
];
