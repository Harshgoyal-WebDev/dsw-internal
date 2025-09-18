'use client';
import React, {useState, useRef} from "react";
import Image from "next/image";
import Copy from "../Animations/Copy";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const capabilities = [
  {
    id: "01",
    src: "/assets/icons/insuraince/automate-setting.svg",
    text: "Automate servicing, documentation, and communications with human-like agents",
  },
  {
    id: "02",
    src: "/assets/icons/insuraince/RAG.svg",
    text: "Use Retrieval-Augmented Generation (RAG), MCP and A2A protocols for smart, secure responses",
  },
  {
    id: "03",
    src: "/assets/icons/insuraince/config.svg",
    text: "Configure memory, tone, and rules for each agent",
  },
  {
    id: "04",
    src: "/assets/icons/fast-track-icon.svg",
    text: "Deploy in hours with built-in monitoring and compliance guardrails",
  },
];

const Capabilities = () => {

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section className="h-full container">
      <div className="w-[90%] max-sm:w-[100%] ">
        <h2 className="title-1 max-sm:!text-[11.5vw] headingAnim max-sm:text-center">
          Turn Common Insurance Tasks into Intelligent Agents 
        </h2>
      </div>

      <div className="flex justify-between max-sm:flex-col pt-[4vw] max-sm:pt-[10vw]">
        <div className="w-[45%] max-sm:w-[100%]">
          <Copy>
            <p className="text-white-200 text-[2.5vw] max-sm:text-center max-sm:text-[7vw] leading-[1.35] font-head">
              These aren’t chatbots. They’re intelligent teammates for your
              operations. 
            </p>
          </Copy>
        </div>

        <div className="w-[50%] max-sm:hidden">
          <Copy>
            <p className="text-white-300">
              From claim status queries to automated underwriting support,
              insurAInce gives you over 300 prebuilt GenAI agents that are
              designed for real insurance workflows. 
            </p>
            <p className="text-white-300 text-[1.2vw] py-[2.5vw] font-display">
              Key Capabilities: 
            </p>
          </Copy>

          <div className="">
            <div className="flex flex-col gap-[4.5vw] pt-[4vw]">
              {capabilities.map((cap) => (
                <div key={cap.id} className="relative group ">
                  <div className="w-full h-[0.1vw]  bg-[#59595980] absolute top-[-40%] mb-[2vw] lineDraw" />

                  <div className="flex items-start fadeup justify-start gap-[5vw]">
                  

                    <p className="text-white text-[1vw] font-display">
                      {cap.id}
                    </p>
                    <div className="w-[5.5vw]  h-[5.5vw]">
                      <Image
                        src={cap.src}
                        alt={`capibility-${cap.id}`}
                        width={40}
                        height={40}
                        className="object-contain h-full w-full"
                        />
                    </div>
                     

                    
                      <p className="text-white-300 max-w-[28vw]">{cap.text}</p>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

            <div className="hidden max-sm:block swiperr pt-[10vw]">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full"
          >
            {capabilities.map((cap, index) => (
              <SwiperSlide key={index}>
                <div className="flex gap-[8vw] mt-[8vw] w-full items-center justify-center flex-col fadeup">
                  <p className="text-white-300 text-[4vw]">{cap.id}</p>
                  <div className="w-[30%] h-auto relative">
                    <Image
                      src={cap.src}
                      height={200}
                      width={200}
                      className="object-contain h-full w-full"
                      alt={`capability-${cap.id}`}
                    />
                  </div>
                  <p className="text-center text-[4.3vw] text-white-300">{cap.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Nav Buttons */}
          <div className="w-full hidden max-sm:flex h-full mt-[10vw]  gap-[4vw] items-center justify-center">
            <div
              className={`w-[15vw] p-[5vw] btns flex items-center justify-center rounded-full h-[15vw]  rotate-180 bg-white/5 border border-white/20 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={activeIndex !== 0 ? handlePrev : undefined}
            >
              <svg
                className=""
                width="25"
                height="18"
                viewBox="0 0 25 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8041 1.24555C15.3098 1.73981 15.3186 2.52533 15.8041 3.01076L20.7378 7.94454L1.51466 7.94454C0.826224 7.94454 0.270181 8.50058 0.270182 9.18901C0.270181 9.87745 0.826224 10.4335 1.51466 10.4335L20.7378 10.4335L15.8041 15.3673C15.3186 15.8527 15.3186 16.647 15.8041 17.1325C16.2895 17.6179 17.0838 17.6179 17.5693 17.1325L24.6301 10.0716C25.1156 9.58619 25.1156 8.79184 24.6301 8.30641L17.5693 1.24555C17.0838 0.760117 16.2895 0.760117 15.8041 1.24555Z"
                  fill="currentColor"
                  className={`fill-current duration-300 `}
                />
              </svg>
            </div>
            <div
              className={`w-[15vw] cursor-pointer p-[5vw] btns flex items-center justify-center rounded-full h-[15vw] bg-white/5 border border-white/20 ${activeIndex === 3 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={activeIndex !== 3 ? handleNext : undefined}
            >
              <svg
                className=""
                width="25"
                height="18"
                viewBox="0 0 25 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8041 1.24555C15.3098 1.73981 15.3186 2.52533 15.8041 3.01076L20.7378 7.94454L1.51466 7.94454C0.826224 7.94454 0.270181 8.50058 0.270182 9.18901C0.270181 9.87745 0.826224 10.4335 1.51466 10.4335L20.7378 10.4335L15.8041 15.3673C15.3186 15.8527 15.3186 16.647 15.8041 17.1325C16.2895 17.6179 17.0838 17.6179 17.5693 17.1325L24.6301 10.0716C25.1156 9.58619 25.1156 8.79184 24.6301 8.30641L17.5693 1.24555C17.0838 0.760117 16.2895 0.760117 15.8041 1.24555Z"
                  fill="currentColor"
                  className={`fill-current duration-300 `}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
