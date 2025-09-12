'use client'
import React, { useRef } from "react";
import TiltedCard from "../Animations/TiltedCard";
import PrimaryButton from "../Button/PrimaryButton";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Brochure = () => {
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
    <section
      className="w-screen h-fit py-[7%] px-[5vw] max-sm:px-[7vw] max-sm:py-[15vw]"
      id="brochure"
    >
      <div className="w-full flex flex-col items-center justify-center gap-[5vw] max-sm:gap-[10vw]">
        <h2 className="w-[70%] text-center title-2 headingAnim max-sm:w-full max-sm:text-left max-sm:!text-[12vw]">
          Join the Fastest- Moving Insurers on Their AI Journey 
        </h2>
        <div className="w-full flex justify-center gap-[3vw] fadeup max-sm:hidden">
          <TiltedCard
            containerHeight="40vw"
            containerWidth="33vw"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full px-[4vw] py-[4vw] flex flex-col justify-between">
                <h3 className="text-[1.5vw] w-[85%] h-fit">
                  25+ proven AI use cases across the policy lifecycle
                </h3>
                <div className="w-full flex flex-col h-fit space-y-[1.5vw]">
                  <h4 className="title-3">AI/ML</h4>
                  <ul className="list-disc pl-[2vw] space-y-[0.2vw]">
                    <li>Fraud detection</li>
                    <li>​ Claims</li>
                    <li>​ Underwriting​</li>
                    <li> Automation & Ops</li>
                    <li>​ Regulatory and compliance </li>
                    <li>​ Sales and Marketing​ </li>
                    <li>CX</li>
                  </ul>
                </div>
                <div>
                  <PrimaryButton href={"/"} text={"Download PDF"} />
                </div>
              </div>
            }
          />
          <TiltedCard
            containerHeight="40vw"
            containerWidth="33vw"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full px-[4vw] py-[4vw] flex flex-col justify-between">
                <h3 className="text-[1.5vw] w-full h-fit">
                  300+ ready-to-deploy GenAI agents trained on insurance data 
                </h3>
                <div className="w-full flex flex-col h-fit space-y-[1.5vw]">
                  <h4 className="title-3">GenAI Agents​</h4>
                  <ul className="list-disc pl-[2vw] space-y-[0.2vw]">
                    <li>Sales and Marketing​</li>
                    <li>​ Underwriting​</li>
                    <li>​ Claims</li>
                    <li> New Business​</li>
                    <li>​ Operations </li>
                    <li>​ HR​ </li>
                    <li>IT</li>
                    <li>Legal & Compliance ​</li>
                  </ul>
                </div>
                <div>
                  <PrimaryButton href={"/"} text={"Download PDF"} />
                </div>
              </div>
            }
          />
        </div>
        <div className="h-fit text-white max-sm:w-full max-sm:mt-[10vw] hidden max-sm:block fadeup">
          <Swiper
            slidesPerView={1.8}
            className=" !opacity-100 "
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={50}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.8,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
          >
            {BrochureData.map((data) => (
              <SwiperSlide className=" max-sm:w-full">
                <BrochureCard
                  key={data.id}
                  title={data.title}
                  listTitle={data.listTitle}
                  list={data.list}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-6 mt-6 max-sm:mt-10 max-sm:items-center max-sm:justify-center">
            <PreviousButton onClick={handlePrev} />
            <NextButton onClick={handleNext} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;

const BrochureCard = ({ title, list, listTitle }) => {
  return (
    <>
      {/* <Link href={"#"}> */}
        <div className="bg-gradient-to-r from-[#09183e] to-[#1626FD] h-[70vh] rounded-[6.5vw] border border-white/40 py-[10%] px-[7vw]">
          <div className="w-full h-full flex flex-col gap-[3vw] justify-between">
            <div>
            <h3 className="text-[5vw]">
              {title}

            </h3>
            <h4 className="text-[9vw] mt-[7vw] max-sm:mb-[4vw]">
            {listTitle}
            </h4>
            <ul className="space-y-[1vw] list-disc pl-[5vw]">
              {
                list.map((list,id)=>(

                  <li key={id}>{list}</li>
                ))
              }
            </ul>
            </div>
            <div className="mt-[7vw]">
            <PrimaryButton text={"Download PDF"} href={"/"} className="max-sm:w-[50vw]" />

            </div>

          </div>
      
        </div>
      {/* </Link> */}
    </>
  );
};

const BrochureData = [
  {
    id: 1,
    title: "25+ proven AI use cases across the policy lifecycle",
    listTitle:"AI/ML​",
    list:["Fraud detection​","Claims","Underwriting​","Automation & Ops​","Regulatory and compliance​","Sales and Marketing​","CX"],
  },
  {
    id: 2,
   title: "300+ ready-to-deploy GenAI agents trained on insurance data ",
    listTitle:"GenAI Agents​​",
    list:["Sales and Marketing​​","Claims","Underwriting​","New Business​​","Operations​","HR​","IT","Legal & Compliance ​"],
  },
];
