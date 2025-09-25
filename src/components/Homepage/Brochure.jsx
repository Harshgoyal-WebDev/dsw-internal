"use client";
import React, { useRef } from "react";
import TiltedCard from "../Animations/TiltedCard";
import PrimaryButton from "../Button/PrimaryButton";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import WhiteButton from "../Button/WhiteButton";

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
    <section className="w-screen h-fit container" id="brochure">
      <div className="w-full flex flex-col items-center justify-center gap-[5vw] max-md:gap-[7vw] max-sm:gap-[10vw]">
        <h2 className="w-[70%] text-center text-60 headingAnim max-md:w-full max-md:text-left max-md:!text-[9vw] max-sm:!text-[11.5vw]">
          Join the Fastest - Moving Insurers on Their AI Journey 
        </h2>
        <div className="w-full flex justify-center gap-[3vw] fadeup max-md:hidden">
          <TiltedCard
            containerHeight="41vw"
            containerWidth="33vw"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full px-[4vw] py-[4vw] pb-[5vw] flex flex-col justify-between">
                <h3 className="text-30 w-[85%] h-fit">
                  25+ proven AI use cases across the policy lifecycle
                </h3>
                <div className="w-full flex flex-col h-fit space-y-[1.5vw]">
                  <h4 className="text-50">AI/ML</h4>
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
                  <WhiteButton
                    background="border-primary-2 border bg-transparent hover:bg-transparent"
                    circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
                    text="Download PDF"
                    href="#"
                    className="hover:text-primary-2 text-primary-2"
                  />
                </div>
              </div>
            }
          />
          <TiltedCard
            containerHeight="41vw"
            containerWidth="33vw"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full px-[4vw] py-[4vw] pb-[5vw] flex flex-col justify-between">
                <h3 className="text-30 w-full h-fit">
                  300+ ready-to-deploy GenAI agents trained on insurance data 
                </h3>
                <div className="w-full flex flex-col h-fit space-y-[1.5vw]">
                  <h4 className="text-50">GenAI Agents​</h4>
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
                  <WhiteButton
                    background="border-primary-2 border bg-transparent hover:bg-transparent"
                    circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
                    text="Download PDF"
                    href="#"
                    className="hover:text-primary-2 text-primary-2"
                  />
                </div>
              </div>
            }
          />
        </div>
        <div className="h-fit text-white max-md:w-full max-md:mt-[10vw] hidden max-md:block fadeup">
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
                slidesPerView: 1,
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
              <SwiperSlide className=" max-md:w-full">
                <BrochureCard
                  key={data.id}
                  title={data.title}
                  listTitle={data.listTitle}
                  list={data.list}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-6 mt-6 max-md:mt-[10vw] max-md:items-center max-md:justify-center">
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
      <div className="bg-gradient-to-r from-[#09183e] to-[#1626FD] h-[70vh] rounded-[6.5vw] max-md:h-[80vh] max-sm:h-[70vh]  border border-white/40 py-[10%] px-[7vw]">
        <div className="w-full h-full flex flex-col gap-[3vw] justify-between">
          <div>
            <h3 className="text-30">{title}</h3>
            <h4 className="text-60 mt-[7vw] max-md:mb-[4vw]">{listTitle}</h4>
            <ul className="space-y-[1vw] list-disc max-md:pl-[5vw] pl-[5vw]">
              {list.map((list, id) => (
                <li key={id}>{list}</li>
              ))}
            </ul>
          </div>
          <div className="mt-[7vw]">
            <WhiteButton
              background="border-primary-2 border bg-transparent hover:bg-transparent"
              circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
              text="Download PDF"
              href="#"
              className="hover:text-primary-2 text-primary-2"
            />
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
    listTitle: "AI/ML​",
    list: [
      "Fraud detection​",
      "Claims",
      "Underwriting​",
      "Automation & Ops​",
      "Regulatory and compliance​",
      "Sales and Marketing​",
      "CX",
    ],
  },
  {
    id: 2,
    title: "300+ ready-to-deploy GenAI agents trained on insurance data ",
    listTitle: "GenAI Agents​​",
    list: [
      "Sales and Marketing​​",
      "Claims",
      "Underwriting​",
      "New Business​​",
      "Operations​",
      "HR​",
      "IT",
      "Legal & Compliance ​",
    ],
  },
];
