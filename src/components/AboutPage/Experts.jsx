"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
import Link from "next/link";

export default function Experts({heading}) {
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
    <section className="relative w-full h-fit space-y-[6vw] container max-sm:h-full overflow-hidden">
      <div className="w-full flex h-full gap-[1vw] items-end justify-between max-sm:flex-col max-sm:items-start">
        <h2 className="text-90 headingAnim w-[45%] max-md:w-full">
          
          {heading}
        </h2>

        <div className="flex fadeup gap-6 mt-12 max-sm:mt-0 max-md:mt-[10vw] max-md:items-center max-md:justify-center max-md:absolute max-md:top-[85%]  max-md:right-[8%] ">
          <PreviousButton onClick={handlePrev} />
          <NextButton onClick={handleNext} />
        </div>
      </div>
      <div className="h-fit flex items-center justify-start  w-full max-sm:mt-10 max-md:my-[10vw]">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          // spaceBetween={35}
          // centeredSlides={true}
          freeMode={true}
          // slidesPerView={4}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full !overflow-visible"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 40,
              centeredSlides: false,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
        >
          {data.map((card, index) => (
            <SwiperSlide key={index} className="experts-cards">
              <Link href={"#"} key={index} className="w-full flex-shrink-0 ">
                <div className="relative rounded-[1.5vw] overflow-hidden w-[95%] h-[20vw] max-md:mx-auto max-sm:h-[38vh] max-md:h-[38vh] max-md:w-auto max-md:rounded-[6vw]">
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
                <div className="space-y-[.5vw] w-full mt-[1vw] max-md:mt-[5vw] max-sm:pl-0 max-md:pl-[4vw] max-sm:space-y-[1vw] max-sm:mt-[3vw]">
                  <p className="text-30 ">{card.name}</p>
                  <p className="w-[75%] font-medium ">
                    {card.role}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const data = [
  {
    src: "/assets/images/about/experts/sandeep.png",
    name: "Sandeep Khuperkar",
    role: "Founder and CEO",
  },

  {
    src: "/assets/images/about/experts/pritesh.png",
    name: "Pritesh Tiwari",
    role: "Founder and Chief Data Scientist",
  },
  {
    src: "/assets/images/about/experts/shivam.png",
    name: "Shivam Thakkar",
    role: "Founder and Chief Product Officer",
  },

  {
    src: "/assets/images/about/experts/sandya.png",
    name: "Sandhya Oza",
    role: "Co-Founder and Chief Project Officer",
  },
  {
    src: "/assets/images/about/experts/sandeep.png",
    name: "Sandeep Khuperkar",
    role: "Founder and CEO",
  },

  {
    src: "/assets/images/about/experts/pritesh.png",
    name: "Pritesh Tiwari",
    role: "Founder and Chief Data Scientist",
  },
  {
    src: "/assets/images/about/experts/shivam.png",
    name: "Shivam Thakkar",
    role: "Founder and Chief Product Officer",
  },

  {
    src: "/assets/images/about/experts/sandya.png",
    name: "Sandhya Oza",
    role: "Co-Founder and Chief Project Officer",
  },

  //   REPEAT
];
