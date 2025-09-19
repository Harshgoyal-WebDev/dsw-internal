"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Icon, Linkedin } from "../ui/Icons";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { NextButton, PreviousButton } from "../Button/SliderButtons";


export default function Guiders() {

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
    <section className="container w-[95%] mx-auto space-y-[6.5vw] max-sm:!pt-[35vw] relative">
      <h2 className="text-90 w-full text-center headingAnim max-sm:text-left">
        Guided by Industry Luminaries
      </h2>

      <div className="flex w-[100%] items-start gap-[3vw] justify-between max-sm:hidden">
        {GuidersData.map((guider, index) => (
          <Link href={"/#"} key={index} className="w-full guiders-cards">
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
              <div
                                 className="absolute right-[4%] top-[4%] z-[5] rounded-full flex items-center justify-center  bg-gradient-to-r from-primary-2 to-primary-3 h-[2.5vw] w-[2.5vw]"
                               >
                                
                                 <Image src={"/assets/icons/linkedin.svg"} height={15} width={15} alt="linkedin"  className="h-[1vw] w-auto"/>
                               </div>
            </div>
            <div className=" space-y-[1vw] w-full mt-[1vw]">
              <p className="text-30 ">{guider.name}</p>
              <p className="w-[85%] font-medium">{guider.role}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="h-fit  items-center justify-center  w-full max-sm:mt-10 hidden max-sm:block">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={35}
          // slidesPerView={4}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full"
          breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
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
              <Link href={"#"} key={index} className="w-full flex-shrink-0 experts-cards">
                <div className="relative rounded-[1.5vw] overflow-hidden max-sm:w-full h-[20vw] max-sm:h-[38vh] max-sm:rounded-[6vw]">
                  <Image
                    src={card.src}
                    width={100}
                    height={100}
                  
                    className="h-full w-full object-cover"
                    alt={card.name}
                  />
                  <div
                    className="absolute right-[4%] top-[4%] z-[5] rounded-full flex items-center justify-center  bg-gradient-to-r from-primary-2 to-primary-3 h-[2.5vw] w-[2.5vw] max-sm:h-[10vw] max-sm:w-[10vw]"
                  >
                   
                    <Image src={"/assets/icons/linkedin.svg"} height={15} width={15} alt="linkedin"  className="h-[1vw] w-auto max-sm:h-[4vw]"/>
                  </div>
                </div>
                <div className="space-y-[.5vw] w-full mt-[1vw] max-sm:space-y-[1vw] max-sm:mt-[3vw]">
                  <p className="text-30">{card.name}</p>
                  <p className="w-[85%] font-medium max-sm:w-[80%]">{card.role}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        <div className=' gap-6 mt-12 max-sm:mt-10 max-sm:items-center max-sm:justify-center max-sm:absolute max-sm:top-[90%] max-sm:right-[8%] hidden max-sm:flex'>
                          <PreviousButton onClick={handlePrev} />
                          <NextButton onClick={handleNext} />
                        </div>
    </section>
  );
}

const GuidersData = [
  {
    src: "/assets/images/guiders/javed.png",
    name: "Javed Tapia",
    role: "Founder, Chairman Clover InfoTech,Clover Realty,Ex-CEO RedHat India",
  },
  {
    src: "/assets/images/guiders/hemant.png",
    name: "Hemant Kenia",
    role: "Founder and CEO,SK International",
  },
  {
    src: "/assets/images/guiders/sharad.png",
    name: "Sharad Sanghi",
    role: "Chairman NTT, Global Data India,Ex-CEO and Managing Director of Netmagic",
  },
  {
    src: "/assets/images/guiders/upendra.png",
    name: "Dr. Upendra Rao",
    role: "Independent Director,IDBI-Intech,Ex-CTO State Bank of India",
  },
];
