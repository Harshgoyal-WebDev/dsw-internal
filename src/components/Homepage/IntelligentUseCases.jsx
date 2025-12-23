"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
import ArrowButton from "../Button/ArrowButton";
import Copy from "../Animations/Copy";
import Link from "next/link";
import { FastTrackMainIcon, FeatureCraftMainIcon, SupportAiIcon } from "../Icons";
import { Banking, InsuranceSpecific, Telecom, ReatilIcon, ManufacturingIndustryIcon, HealthcareIcon } from "../Icons";

gsap.registerPlugin(ScrollTrigger);

const usecases = [
  {
    id: 1,
    icon: <Banking />,
    title: "Banking and FS for AI and agentic intelligence",
    items: [
      "KYC/AML intelligence & continuous monitoring​",
      "Credit risk modelling & portfolio scoring​",
      "Collections optimization & delinquency prediction​",
      "Agentic copilots for relationship managers, ops, and compliance​",
      "Enterprise GenAI knowledge systems for teams​"
    ]
  },
  {
    id: 2,
    icon: <InsuranceSpecific />,
    title: "Insurance-specific for AI, GenAI, agentic workflows",
    items: [
      "Early claim fraud detection ​",
      "Claims decisioning & straight-through processing ​",
      "Underwriting triage & risk scoring ​",
      "Customer service copilots (policy queries, documentation, endorsements) ​",
      "Agentic workflows for FNOL, claims routing, policy servicing​"
    ]
  },
  {
    id: 3,
    icon: <Telecom />,
    title: "Telecom for network, customer, and field-ops intelligence",
    items: [
      "Predictive maintenance​",
      "NOC automation with agentic workflows​",
      "Churn prediction & customer retention​",
      "Field engineer copilots​"
    ]
  },
  {
    id: 4,
    icon: <ReatilIcon />,
    title: "Retail & E-commerce for personalization, forecasting, and operational AI",
    items: [
      "Demand forecasting​",
      "Dynamic pricing​",
      "Recommendation systems​",
      "GenAI customer support copilots​"
    ]
  },
  {
    id: 5,
    icon: <HealthcareIcon />,
    title: "Healthcare for clinical and operational decision intelligence",
    items: [
      "Clinical summarization​",
      "Claims & coding optimization​",
      "Operational efficiency modelling​",
      "GenAI medical knowledge assistants​"
    ]
  },
  {
    id: 6,
    icon: <ManufacturingIndustryIcon />,
    title: "Manufacturing & Industrial for predictive, preventive, and production intelligence",
    items: [
      "Predictive maintenance​",
      "Process optimization​",
      "Energy/throughput modelling​",
      "GenAI copilots for SOPs and troubleshooting​"
    ]
  },
];

const SwiperCard = ({ usecase, onHover, isActive, space }) => {
  return (
    <>
      <div
        className="relative py-[1vw] pt-[2.5vw] background-glass max-md:py-[8vw] min-h-[63vh] max-md:px-[8vw] rounded-[2vw] overflow-hidden w-[30vw] px-[3vw] h-fit max-md:min-h-[60vh] max-sm:min-h-[70vh] max-md:h-fit max-md:w-full max-md:rounded-[4vw] max-sm:rounded-[6vw] border group border-white/20 group cursor-grab "
        onMouseEnter={onHover}
      >
         <div
          className={`absolute inset-0 bg-gradient-to-r from-light-blue to-dark-blue transition-opacity ease-in-out duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className={`!h-[4vw] relative z-[10]  !w-[4vw] max-sm:mb-[6vw] !mb-[2vw] ${isActive ? "text-white" : "text-primary-1"} max-md:!h-[25vw] max-md:!w-[20vw]`}>
            {usecase.icon}
        </div>

        <div className="h-full flex flex-col justify-between relative z-[10]">
          <div className="w-[100%] max-md:w-[100%]">
            <h3 className="text-40 text-white-200">
              {usecase.title}
            </h3>
          </div>
          <div className="w-full  max-md:space-y-[3vw]  py-[2vw] max-sm:mt-[8vw] mt-[1vw]">
            <ul className={`list-disc text-white-200 pl-[2vw] ${space}`}>
              {usecase.items.map((item, index) => (
                <li key={index} className="text-white-300 text-[1vw] max-md:text-[2.5vw] max-sm:text-[4vw]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const IntelligentUseCases = ({ sessionsData }) => {
  const swiperRef = useRef(null);
  const blogsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(posts)
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
    <section
      ref={blogsRef}
      className="h-full w-screen  relative  overflow-hidden max-sm:my-0 !pr-0 container  max-sm:!pr-[7vw]"
    >
      <div className="h-full w-full flex items-start justify-between  max-md:flex-col max-sm:pl-0">
        <div className="w-[40%] space-y-10 max-md:w-full">
          <h2 className="text-90 leading-[1.2] w-[100%] headingAnim font-head text-white-200 max-md:w-[90%]">
            Intelligent AI Use Cases Across BFSI and Beyond
          </h2>
          <Copy>
            <p className="text-[#CACACA] w-[95%] leading-[1.4] max-md:w-[92%] max-sm:w-full">
              From BFSI to telecom, retail, healthcare, and more - unlock AI and
              Agentic AI use cases that enhance decisions, streamline
              operations, and deliver measurable business value.
            </p>
          </Copy>
          <a href="#" className="fadeup flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary-2"></div>
            <p className="text-primary-2 text-[1.05vw] font-medium max-md:text-[2.5vw] max-sm:text-[4vw]">
              Download Enterprise Use Cases
            </p>
          </a>
        </div>
        <div className="w-[55%] text-white max-sm:w-full max-md:w-[93%] max-md:mt-[10vw] fadeup ">
          <Swiper
            slidesPerView={2}
            className="mySwiper swiper-container"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            freeMode={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
                slidesPerView: 1.7,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 1.7,
                spaceBetween: 15,
              },
            }}
          >
            {usecases.map((usecase, index) => (
              <SwiperSlide key={usecase.id} className="experts-cards w-full h-full">
                <SwiperCard 
                space="space-y-[1vw]"
                  usecase={usecase}
                  onHover={() => setActiveIndex(index)}
                  isActive={activeIndex === index} 
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-6 mt-12 max-sm:mt-10 max-md:items-center max-md:justify-center">
            <PreviousButton
              onClick={handlePrev}
              isDisabled={activeIndex === 0}
            />
            <NextButton
              onClick={handleNext}
              isDisabled={usecases.length - 1 === activeIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentUseCases;

const BlogsData = [
  {
    id: 1,
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-1.png",
  },
  {
    id: 2,
    title: "Best Practices for AI Deployment in Regulated Industries",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-2.png",
  },
  {
    id: 3,
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-1.png",
  },
  {
    id: 4,
    title: "Best Practices for AI Deployment in Regulated Industries",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-2.png",
  },
  {
    id: 5,
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-1.png",
  },
  {
    id: 6,
    title: "Best Practices for AI Deployment in Regulated Industries",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-2.png",
  },
];
