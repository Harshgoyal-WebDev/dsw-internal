"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TurbochargeG = () => {
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
        .from(
          ".img-4",
          {
            yPercent: -45,
            xPercent: 75,
            transformOrigin: "right center",
            duration: 1,
          },
          "<"
        );



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
        .from(
          ".img-4",
          {
            rotateX: 45,
            transformOrigin: "right center",
            duration: 1,
          },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="turbo" className="w-screen h-full bg-background max-md:relative max-md:z-[12] max-md:bg-transparent">
      <div className="flex flex-col items-center p-10 w-full space-y-[3vw] max-md:px-[7vw]">
        <h2 className="text-90 headingAnim text-[#E8E8E8] max-md:!text-[10vw] max-md:text-center">Unifying AI and Business ​</h2>
        <div className="w-[70%] text-center space-y-15 py-15 max-md:w-full">
          <div
            className="w-full h-fit rounded-[1vw] relative  perspective-[800px] max-md:hidden"
            ref={turboChargeContainer}
          >
            {/* Base background image */}

            <Image
              src={"/assets/images/homepage/turbocharge/turbo-charge-base.png"}
              width={1500}
              height={900}
              className="w-full h-full object-contain base-img"
              alt="unify-ai-dashboard-base"
            />

            {/* Dashboard Image with perspective */}
            <div className="absolute top-0 w-[8.8vw] left-0 z-[1] rounded-[0.5vw] overflow-hidden img-1 turbo-img">
              <Image
                src={"/assets/images/homepage/turbocharge/turbo-charge-sidebar.png"}
                width={120}
                height={900}
                className="w-full h-full object-contain"
                alt="unify-ai-dashboard"
              />
            </div>

            {/* Graph Image */}
            <div className="absolute w-[37vw] top-[10%] left-[15%] z-[1] img-2 turbo-img">
              <Image
                src={"/assets/images/homepage/turbocharge/turbo-charge-graph.png"}
                width={500}
                height={800}
                className="w-full h-full object-contain"
                alt="unify-ai-dashboard-graph"
              />
            </div>

            {/* Details Image */}
            <div className="absolute w-[37vw] bottom-[7%] left-[15%] z-[1] img-3 turbo-img">
              <Image
                src={"/assets/images/homepage/turbocharge/turbo-charge-details.png"}
                width={500}
                height={900}
                className="w-full h-full object-contain"
                alt="unify-ai-dashboard-details"
              />
            </div>

            {/* Ratings Image */}
            <div className="absolute right-0 top-[7%] z-[1] img-4 turbo-img">
              <Image
                src={"/assets/images/homepage/turbocharge/turbo-charge-ratings.png"}
                width={200}
                height={700}
                className="w-[19vw] h-[35vw] object-contain"
                alt="unify-ai-dashboard-ratings"
              />
            </div>
          </div>
          <Image src={"/assets/images/homepage/turbocharge/dashboard-mob.png"} alt="unify-ai-dashboard-mobile" className="w-full h-full object-cover fadeup hidden max-md:block" width={600} height={400} />


        </div>
      </div>
    </section>
  );
};

export default TurbochargeG;
