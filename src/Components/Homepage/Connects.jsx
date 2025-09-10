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
      className="h-full w-screen py-30 px-15 relative overflow-hidden"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2]">
        <div className="text-center w-[40%] space-y-5 mt-10">
          <h3 className="text-[5.2vw] leading-[1.2] headingAnim text-white-200">
            Connects with Your Platform
          </h3>
          <p data-para-anim className="text-[1.145vw] text-[#CACACA]">
            UnifyAI connects with the platforms you already use.
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-20 py-20">
          <div>
            <Image
              src="/assets/images/azure-logo.png"
              height={49}
              width={171}
              alt="azure-logo"
              className="fadein"
            />
          </div>
          <div>
            <Image
              src="/assets/images/Intel-logo-final.png"
              height={51}
              width={131}
              alt="intel-logo"
              className="fadein"
            />
          </div>
          <div>
            <Image
              src="/assets/images/IBM-logo.png"
              height={136}
              width={136}
              alt="IBM-logo"
              className="fadein"
            />
          </div>
          <div
            className="relative flex items-center justify-center w-[20vw] h-[20vw] "
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-800/60 h-[15vw] w-[15vw] z-[-1] origin-center"
              ref={circle1}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-800/40 h-[20vw] w-[20vw] z-[-2] origin-center"
              ref={circle2}
            />
            <Image
              src="/assets/images/unify.png"
              height={65}
              width={150}
              alt="unify-logo"
              className="fadein"
            />
          </div>

          <div>
            <Image
              src="/assets/images/amazon-logo.png"
              height={68}
              width={183}
              alt="amazon-logo"
              className="fadein"
            />
          </div>
          <div>
            <Image
              src="/assets/images/google-logo.png"
              height={58}
              width={335}
              alt="google-logo"
              className="fadein"
            />
          </div>
        </div>
      </div>
      <div className="w-screen h-[35vw] bg-gradient-to-t from-transparent to-[#000000] absolute top-0 z-[1]" />
      <div className="w-screen h-[10vw] bg-gradient-to-b from-transparent to-[#000000] absolute bottom-0 z-[1]" />
      <div></div>
      <div className="h-screen w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-[-1] flex items-center justify-center">
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
