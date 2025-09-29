"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Icon, Linkedin } from "../ui/Icons";
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
    <section className="container w-[95%] max-sm:pb-[10vh] max-md:w-full max-sm:!px-[7vw] mx-auto space-y-[6.5vw] max-md:pt-[35vw] relative overflow-hidden">
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
              <p className="w-[85%] font-medium">{guider.role}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="h-fit  items-center justify-center  w-full max-md:mt-[7vw] max-sm:mt-10 hidden max-md:block">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={35}
          // slidesPerView={4}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full !overflow-visible"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {GuidersData.map((card, index) => (
            <SwiperSlide key={index}>
              <Link
                href={card.link}
                target="_blank"
                key={index}
                className="w-full flex-shrink-0 experts-cards"
              >
                <div className="relative rounded-[1.5vw] overflow-hidden max-sm:w-full h-[20vw] max-sm:h-[38vh] max-md:rounded-[6vw] max-md:h-[38vh] max-md:w-[95%] max-md:mx-auto">
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
               <div className="space-y-[.5vw] w-full mt-[1vw] max-md:mt-[5vw] max-md:pl-0 max-sm:pl-[2vw] max-md:space-y-[2.5vw] max-sm:mt-[5vw]">
                  <p className="text-30 max-sm:text-[7vw]">{card.name}</p>
                  <p className="w-[75%] max-md:w-[90%] max-sm:w-[95%]  font-medium ">{card.role}</p>
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
    role: "Founder, Chairman Clover InfoTech,Clover Realty,Ex-CEO RedHat India",
    link:"https://www.linkedin.com/in/javedtapia/"
  },
  {
    src: "/assets/images/guiders/hemant.png",
    name: "Hemant Kenia",
    role: "Founder and CEO,SK International",
    link:"https://www.linkedin.com/in/hemant-kenia-2829a155/"
  },
  {
    src: "/assets/images/guiders/sharad.png",
    name: "Sharad Sanghi",
    role: "Chairman NTT, Global Data India,Ex-CEO and Managing Director of Netmagic",
    link:"http://linkedin.com/in/sharadsanghi"
  },
  {
    src: "/assets/images/guiders/upendra.png",
    name: "Dr. Upendra Rao",
    role: "Independent Director,IDBI-Intech,Ex-CTO State Bank of India",
    link:"https://www.linkedin.com/in/seethala-upendra-rao-03802736/"
  },
];
