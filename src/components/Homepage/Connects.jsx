'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Connects = () => {
  const sectionRef = useRef(null);
 
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "bottom 70%",
        // scrub:true,
        // markers:true,
      },
    });
    tl.fromTo(
      circle1.current,
      { scale: 0 },
      { scale: 1, duration: 0.8, ease: "power3.inout" }
    )
      .fromTo(
        circle2.current,
        { scale: 0 },
        { scale: 1, duration: 0.8, ease: "power3.inout" },
        "-=0.5"
      )
      .fromTo(
        circle3.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, duration: 0.8, opacity: 1, ease: "power3.inout" },
        "-=0.5"
      )
      .fromTo(
        circle4.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, duration: 0.8, opacity: 1, ease: "power3.inout" },
        "-=0.65"
      )
      .fromTo(
        circle5.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          duration: 0.8,
          opacity: 1,
          ease: "power3.inout",

        },
        "-=0.7"
      );

    return () => {
      tl.kill();
    };
  }, []);

  

  return (
    <section
      ref={sectionRef}
      className="h-screen w-screen relative overflow-hidden  max-md:h-full container"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2]">
        <div className="w-full flex items-center justify-center gap-25 py-20 max-md:flex-col max-sm:gap-[20vw] max-md:gap-[20vw]">
          <div>
            <Image
              src="/assets/icons/azure-logo.svg"
              height={49}
              width={171}
              alt="azure-logo"
              className="fadein max-sm:w-[40vw]"
            />
          </div>
          <div>
            <Image
              src="/assets/icons/intel-logo.svg"
              height={51}
              width={131}
              alt="intel-logo"
              className="fadein max-sm:w-[30vw]"
            />
          </div>
          <div>
            <Image
              src="/assets/icons/IBM-logo.svg"
              height={136}
              width={136}
              alt="IBM-logo"
              className="fadein max-sm:w-[30vw] max-sm:mt-[-8vw]"
            />
          </div>
          <div
            className="relative flex items-center justify-center w-[20vw] h-[20vw] max-sm:h-[30vw] max-sm:w-[30vw] max-md:mb-[5vw] max-md:w-fit max-md:h-fit"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#202530] h-[13vw] w-[13vw] z-[-1] origin-center  max-md:w-[25vw] max-md:h-[25vw] max-sm:h-[40vw] max-sm:w-[40vw]"
              ref={circle1}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  max-md:w-[40vw] max-md:h-[40vw] bg-[#121723] h-[18vw] w-[18vw] z-[-2] origin-center max-sm:h-[60vw] max-sm:w-[60vw]"
              ref={circle2}
            />
            <div className="w-[10vw] h-auto max-sm:w-[50vw] max-md:w-[20vw]">
            <Image
              src="/assets/icons/unify-ai.svg"
              height={65}
              width={150}
              alt="unify-logo"
              className="fadein scale-[0.8] w-full h-full"
            />

            </div>
          </div>

          <div>
            <Image
              src="/assets/icons/amazon-web-services.svg"
              height={68}
              width={183}
              alt="amazon-logo"
              className="fadein max-sm:w-[40vw] max-sm:mt-[5vw]"
            />
          </div>
          <div>
            <Image
              src="/assets/icons/google-cloud.svg"
              height={58}
              width={335}
              alt="google-logo"
              className="fadein max-sm:w-[65vw]"
            />
          </div>
        </div>
      </div>
      <div className="w-screen h-[25vw] bg-gradient-to-t from-transparent to-[#030815] absolute top-0 z-[1]" />
      <div className="w-screen h-[10vw] bg-gradient-to-b from-transparent to-[#030815] absolute bottom-0 z-[1]" />
      <div></div>
      <div className="h-screen w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] flex items-center justify-center max-sm:translate-y-[-40%] max-md:translate-y-[-40%]">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute connect-circle-1" ref={circle3} >
            <svg
              width="620"
              height="620"
              viewBox="0 0 859 859"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="429.5"
                cy="429.5"
                r="428.5"
                stroke="url(#paint0_linear_338_2389)"
                strokeOpacity="0.5"
                strokeWidth="0.25"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_338_2389"
                  x1="0"
                  y1="0"
                  x2="859"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#999999" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute connect-circle-2" ref={circle4}>
            <svg
              width="951"
              height="951"
              viewBox="0 0 1231 1231"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="615.5"
                cy="615.5"
                r="614.5"
                stroke="url(#paint0_linear_338_2388)"
                strokeOpacity="0.5"
                strokeWidth="0.25"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_338_2388"
                  x1="0"
                  y1="0"
                  x2="1231"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#999999" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute connect-circle-3" ref={circle5}>
            <svg
              width="1301"
              height="1301"
              viewBox="0 0 1581 1581"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="790.5"
                cy="790.5"
                r="789.5"
                stroke="url(#paint0_linear_338_2387)"
                strokeOpacity="0.5"
                strokeWidth="0.55"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_338_2387"
                  x1="0"
                  y1="0"
                  x2="1581"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#999999" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connects;
