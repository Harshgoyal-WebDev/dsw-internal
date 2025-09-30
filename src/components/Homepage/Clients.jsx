"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Clients() {
  const container = useRef(null);
  const gridRef = useRef(null);
  useGSAP(
    () => {
      const grid = gridRef.current;
      const gridItems = grid.querySelectorAll(".grid__item");
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: container.current,
          start: "top 10%",
          end: "bottom top",
          scrub: true,
        },
      });
      if (globalThis.innerWidth > 1024) {
        gsap.set(gridItems, {
          transformOrigin: "0% 0%",
          opacity: 0,
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
          filter: "blur(5px)",
          z: () => gsap.utils.random(4000, 3000),
        });
      } else {
        gsap.set(gridItems, {
          transformOrigin: "0% 0%",
          opacity: 0,
          x: () => gsap.utils.random(-100, 100),
          y: () => gsap.utils.random(-400, 400),
          filter: "blur(5px)",
          z: () => gsap.utils.random(4000, 3000),
        });
      }

      gridItems.forEach((item, index) =>
        timeline
          .to(item, {
            z: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 2.5,
            delay: index * -1.5,
          })
          .to(
            item,
            {
              filter: "blur(5px)",
              opacity: 0,
              z: -2000,
              duration: 3.5,
            },
            ">"
          )
      );
    },
    { scope: container.current }
  );

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to("#solution-clients,#solution-industries", {
  //       scrollTrigger: {
  //         trigger: "#solution-industries",
  //         start: "top 50%",
  //         end: "bottom 50%",
  //       },
  //     });
  //   });
  //   return () => ctx.revert();
  // }, []);

  return (
    <>
      <section
        ref={container}
        id="clientblur"
        className="relative w-screen max-sm:static  h-[400vh] text-center"
      >
        <div className="sticky w-full top-0 h-screen flex items-center justify-center">
          <h2 className="text-60 w-[40%]  max-sm:w-[90%] max-md:w-[80%] text-[#E8E8E8] headingAnim">
            Trusted by Innovators, Built for Industry Disruptors.
          </h2>
        </div>
        <div className="left-0 sticky mt-[-100vh] top-0 z-20 h-screen w-screen overflow-hidden flex items-center justify-center">
          <div
            ref={gridRef}
            className="grid grid-cols-4 gap-[1vw] perspective-[5000px]"
          >
            {logos.map((item, index) => (
              <div key={index} className="grid__item">
                <Image
                  className="w-[20vw] h-auto max-sm:scale-[3] max-md:scale-[1.8] brightness-200"
                  src={item}
                  alt="client-logo"
                  width={200}
                  height={100}
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const logos = [
  "/assets/images/clients/bon-prix.png",
  "/assets/images/clients/canara-hsbc.png",
  "/assets/images/clients/ciek.png",
  "/assets/images/clients/craft-silicon.png",
  "/assets/images/clients/earc.png",
  "/assets/images/clients/edelweiss-tokio-life-logo.png",
  "/assets/images/clients/edge-verve.png",
  "/assets/images/clients/iifl-capital.png",
  "/assets/images/clients/kelmac-grop.png",
  "/assets/images/clients/manipal-cigna.png",
  "/assets/images/clients/oxsde.png",
  "/assets/images/clients/sodexo.png",
];
