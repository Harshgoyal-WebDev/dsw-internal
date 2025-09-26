"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
import Link from "next/link";

export default function Experts({ heading }) {
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
  const [totalSlides, setTotalSlides] = useState(0);



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
    <section className="relative w-full h-fit  space-y-[6vw] container max-md:h-full overflow-hidden">
      <div className="w-full flex h-full gap-[1vw] items-end justify-between max-sm:flex-col max-sm:items-start">
        <h2 className="text-90 headingAnim w-[45%] max-md:w-full">{heading}</h2>

        <div className="flex fadeup gap-6 mt-12 max-sm:mt-0 max-md:mt-[10vw] max-md:items-center max-md:justify-center max-md:absolute max-md:bottom-0 max-sm:bottom-0  max-md:right-[8%] ">
          <PreviousButton onClick={handlePrev} isDisabled={activeIndex===0} />
          <NextButton onClick={handleNext} isDisabled={activeIndex === totalSlides - 1} />
        </div>
      </div>
      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        slidesPerView={"auto"}
        // spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onInit={(swiper) => setTotalSlides(swiper.slides.length)}
        freeMode={true}
        className="!overflow-visible max-sm:!pt-[5vh] max-md:!pt-[5vw] !pl-[27%] max-md:!pl-0 max-md:w-full max-sm:mb-[15%] max-md:mb-[10%] "
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1025: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
        }}
        // style={{
        //   paddingLeft: "27%",
        //   paddingRight: "0px",
        // }}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide
            key={index}
            className="!w-[20vw] max-md:!w-[55vw]  max-sm:!w-full  experts-cards flex-shrink-0"
          >
            <Link href={"#"} key={index} className="w-full flex-shrink-0">
              <div className="relative rounded-[1.5vw] max-sm:w-[90%] max-sm:mx-auto overflow-hidden w-[95%] h-[20vw] max-md:mx-auto max-sm:h-[38vh] max-md:h-[38vh] max-md:w-auto max-md:rounded-[6vw]">
                <Image
                  src={card.src}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                  alt={card.name}
                />
                <div className="absolute right-[4%] top-[4%] z-[5] rounded-full flex items-center justify-center bg-gradient-to-r from-primary-2 to-primary-3 h-[2.5vw] w-[2.5vw] max-md:h-[10vw] max-md:w-[10vw]">
                  <Image
                    src={"/assets/icons/linkedin.svg"}
                    height={15}
                    width={15}
                    alt="linkedin"
                    className="h-[1vw] w-auto max-md:h-[4vw]"
                  />
                </div>
              </div>
              <div className="space-y-[.5vw] w-full mt-[1vw] max- max-md:mt-[5vw]  max-md:pl-[4vw] max-sm:space-y-[1vw] max-sm:mt-[5vw] max-sm:pl-[4vw]">
                <p className="text-30">{card.name}</p>
                <p className="w-[75%] font-medium">{card.role}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const cardsData = [
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
];
