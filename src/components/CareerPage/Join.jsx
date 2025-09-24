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
    <section className="w-screen h-fit container" id="brochure">
      <div className="w-full flex flex-col items-center justify-center gap-[5vw] max-sm:gap-[10vw]">
        <h2 className="w-[70%] text-center text-90 headingAnim max-sm:w-full max-sm:text-left max-sm:!text-[11.5vw]">
          Why Join DSW?
        </h2>
        <div className="w-full flex flex-wrap justify-center gap-[3vw] fadeup max-sm:hidden">
          {featuresData.map((card, index) => (
            <TiltedCard
              key={index}
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
                <div className="w-full h-full px-[4vw] py-[4vw] flex flex-col justify-between group">
                  <div className="h-[7vw] w-[7vw] text-[#1727FF] group-hover:text-[#FFFFFF] transition-all duration-500 ease-out">
                    {card.icon}
                  </div>
                  <div className="w-full flex flex-col h-fit space-y-[1.5vw]">
                    <h4 className="text-40">{card.title}</h4>
                    <p>{card.para}</p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
        {/* <div className="h-fit text-white max-sm:w-full max-sm:mt-[10vw] hidden max-sm:block fadeup">
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
        </div> */}
      </div>
    </section>
  );
};

export default Join;

// const BrochureCard = ({ title, list, listTitle }) => {
//   return (
//     <>
//       {/* <Link href={"#"}> */}
//         <div className="bg-gradient-to-r from-[#09183e] to-[#1626FD] h-[70vh] rounded-[6.5vw] border border-white/40 py-[10%] px-[7vw]">
//           <div className="w-full h-full flex flex-col gap-[3vw] justify-between">
//             <div>
//             <h3 className="text-[5vw]">
//               {title}

//             </h3>
//             <h4 className="text-[9vw] mt-[7vw] max-sm:mb-[4vw]">
//             {listTitle}
//             </h4>
//             <ul className="space-y-[1vw] list-disc pl-[5vw]">
//               {
//                 list.map((list,id)=>(

//                   <li key={id}>{list}</li>
//                 ))
//               }
//             </ul>
//             </div>

//           </div>

//         </div>
//       {/* </Link> */}
//     </>
//   );
// };
