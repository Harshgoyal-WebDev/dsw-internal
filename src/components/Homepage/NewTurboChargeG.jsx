"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NewTurboChargeG = () => {
  const turboChargeContainer = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bl = gsap.timeline({
        scrollTrigger: {
          trigger: "#turbo",
          scrub: 0.25,
          // markers:true,
          start: "top 50%",
          end: "+=800 bottom",
        },
      });

      gsap.from(".base-img", {
        scale: 0.3,
        opacity: 0.1,
        scrollTrigger: {
          trigger: "#turbo",
          start: "top bottom",
          end: "30% bottom",
          scrub: true,
        },
      });
      bl.from(".turbo-img", {
        opacity: 0,
        duration: 0.5,
      });
      bl.from(".img-1", {
        yPercent: -40,
        xPercent: -75,
        delay: -0.5,
        duration: 1,
      })
        .from(
          ".img-2",
          {
            yPercent: -30,
            transformOrigin: "top center",
            duration: 1,
          },
          "<"
        )
        .from(
          ".img-3",
          {
            yPercent: -40,
            transformOrigin: "bottom center",
            duration: 1,
          },
          "<"
        )
        // .from(
        //   ".img-4",
        //   {
        //     yPercent: -45,
        //     xPercent: 75,
        //     transformOrigin: "right center",
        //     duration: 1,
        //   },
        //   "<"
        // );

      bl.from(".img-1", {
        rotateX: 45,
        delay: -1,
        duration: 1,
      })
        .from(
          ".base-img",
          {
            rotateX: 45,
            duration: 1,
          },
          "<"
        )
        .from(
          ".img-2",
          {
            rotateX: 45,
            transformOrigin: "top center",
            duration: 1,
          },
          "<"
        )
        .from(
          ".img-3",
          {
            rotateX: 45,
            scale: 1.6,
            transformOrigin: "bottom center",
            duration: 1,
          },
          "<"
        )
        // .from(
        //   ".img-4",
        //   {
        //     rotateX: 45,
        //     transformOrigin: "right center",
        //     duration: 1,
        //   },
        //   "<"
        // );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="turbo"
      className="w-screen h-full bg-background max-md:relative max-md:z-[12] max-md:bg-transparent"
    >
      <div className="flex flex-col items-center p-10 w-full space-y-[3vw] max-md:px-[7vw]">
        <h2 className="text-90 headingAnim text-[#E8E8E8] text-center w-[75%] max-md:w-full">
          AI and Agentic AI Platforms Engineered for Speed, Governance, and
          Enterprise Impact. 
        </h2>
        <div className="w-[70%] text-center space-y-15 py-15 max-md:w-full">
          <div
            className="w-full h-fit rounded-[1vw] relative  perspective-[800px] max-md:hidden"
            ref={turboChargeContainer}
          >
            {/* Base background image */}

            <Image
              src={"/assets/images/TurboChargeNew/bg.png"}
              width={1500}
              height={900}
              fetchPriority="high"
              className="w-full h-full object-contain base-img"
              alt="unify-ai-dashboard-base"
            />

            {/* Dashboard Image with perspective */}
            <div className="absolute top-0 w-[15vw] h-[38vw] left-[-1.2vw] z-[1] rounded-[0.5vw] overflow-hidden img-1 turbo-img">
              <Image
                src={"/assets/images/TurboChargeNew/navigation.png"}
                width={120}
                height={900}
                className="w-full h-full object-contain"
                alt="unify-ai-dashboard"
              />
            </div>

            {/* Graph Image */}
            <div className="absolute w-[53vw] h-[17vw] top-[10%] left-[20%] z-[1] img-2 turbo-img">
              <Image
                src={"/assets/images/TurboChargeNew/overview.png"}
                width={500}
                height={800}
                className="w-full h-full object-contain"
                alt="unify-ai-dashboard-graph"
              />
            </div>

            {/* Details Image */}
            <div className="absolute w-[53vw] h-[17vw] bottom-0 left-[20%] z-[1] img-3 turbo-img">
              <Image
                src={"/assets/images/TurboChargeNew/dataEnigneering.png"}
                width={500}
                height={900}
                className="w-full h-full object-contain"
                alt="unify-ai-dashboard-details"
              />
            </div>

            {/* Ratings Image */}
            <div className="absolute w-[67vw] h-[34vw] left-[0%] top-[-38%] z-[1] img-3 turbo-img">
              <Image
                src={
                  "/assets/images/TurboChargeNew/header.png"
                }
                width={500}
                height={1000}
                fetchPriority="high"
                className="w-full h-full object-contain"
                alt="unify-ai-dashboard-ratings"
              />
            </div>
          </div>
          <div className="w-full h-[50vw] rounded-[2vw] overflow-hidden hidden max-md:block ">
            <Image
              src={"/assets/images/homepage/homeNew.png"}
              alt="unify-ai-dashboard-mobile"
              className="w-full h-full object-cover fadeup "
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTurboChargeG;
