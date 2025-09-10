"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
// import { SplitInLine, SplitInLineWord } from "@/components/splitTextUtils";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import PrimaryButton from "../Button/PrimaryButton";
import { SplitInLine } from "../splitTextUtils";
gsap.registerPlugin(ScrollTrigger);
const TurbochargeSample = () => {
  const turboChargeContainer = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingAnim = document.querySelectorAll(".turbo-headingAnim");
      headingAnim.forEach((headingAnim) => {
        SplitInLine(headingAnim);
        const headingWord = headingAnim.querySelectorAll(".line-internal");

        gsap.fromTo(
          headingWord,
          {
            maskPosition: "100% 100%",
          },
          {
            maskPosition: "0% 100%",
            stagger: 0.5,
            duration: 5.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#turbo",
              start: "+1100 75%",
              end: "+1400 top",
              scrub: true,
              lazy: true,
              // markers:true
            },
          }
        );
      });

      const paraAnimations = document.querySelectorAll(".turbo-para-anim");
      paraAnimations.forEach((paraAnimation) => {
        SplitInLine(paraAnimation);
        const paraLine = paraAnimation.querySelectorAll(".line-internal");
        gsap.from(paraLine, {
          scrollTrigger: {
            trigger: paraAnimation,
            trigger: "#turbo",
            start: "+1200 55%",
            end: "+1400 55%",
            scrub: true,
            // markers:true
          },
          duration: 1.2,
          yPercent: 100,
          stagger: 0.07,
          ease: "power3.out",
        });
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#turbo",
          scrub: 1,
          pin: true,
          start: "top top",
          end: "+=1200 bottom",
        },
      });
      const bl = gsap.timeline({
        scrollTrigger: {
          trigger: "#turbo",
          scrub: 1,
          // markers:true,
          start: "top 50%",
          end: "+=1200 bottom",
        },
      });
      // gsap.from(".turbo-button", {
      //   opacity: 0,
      //   yPercent: 40,
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: "#turbo",
      //     start: "+1000 80%",
      //     end: "+1200 80%",
      //     scrub: 1,
      //   },
      // });
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
        xPercent: -55,
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
            xPercent: 60,
            transformOrigin: "right center",
            duration: 1,
          },
          "<"
        );

      gsap.to(".turbo-content", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#turbo",
          start: "bottom top",
          end: "200% top",
          scrub: true,
        },
      });

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
    <section id="turbo" className="w-screen h-full bg-[#070707]">
      <div className="flex flex-col items-center p-10 w-full">
        <div className="w-[70%] text-center space-y-15 py-15">
          <div
            className="w-full h-fit rounded-[1vw] relative  perspective-[800px]"
            ref={turboChargeContainer}
          >
            {/* Base background image */}

            <Image
              src={"/assets/images/turbo-charge-base.png"}
              width={1500}
              height={900}
              className="w-full h-full object-contain base-img"
              alt="base"
            />

            {/* Dashboard Image with perspective */}
            <div className="absolute top-0 w-[8.8vw] left-0 z-[1] rounded-[0.5vw] overflow-hidden img-1 turbo-img">
              <Image
                src={"/assets/images/turbo-charge-dsahboard.png"}
                width={120}
                height={900}
                className="w-full h-full object-contain"
                alt="dashboard"
              />
            </div>

            {/* Graph Image */}
            <div className="absolute w-[37vw] top-[10%] left-[15%] z-[1] img-2 turbo-img">
              <Image
                src={"/assets/images/turbo-charge-graph.png"}
                width={500}
                height={800}
                className="w-full h-full object-contain"
                alt="graph"
              />
            </div>

            {/* Details Image */}
            <div className="absolute w-[37vw] bottom-[7%] left-[15%] z-[1] img-3 turbo-img">
              <Image
                src={"/assets/images/turbo-charge-details.png"}
                width={500}
                height={900}
                className="w-full h-full object-contain"
                alt="details"
              />
            </div>

            {/* Ratings Image */}
            <div className="absolute right-0 top-[7%] z-[1] img-4 turbo-img">
              <Image
                src={"/assets/images/turbo-charge-ratings.png"}
                width={200}
                height={700}
                className="w-[19vw] h-[35vw] object-contain"
                alt="ratings"
              />
            </div>
          </div>

          <div className="space-y-10 turbo-content">
            <h2 className="text-[5.2vw] font-head leading-[1.2] turbo-headingAnim">
              Turbocharge Your AI/ML Use Cases in 3-4 weeks and GenAI in 2-4
              hours
            </h2>
            <p className="text-[#CACACA] w-[80%] content-p mx-auto turbo-para-anim">
              Unleash the power of AI and Generative AI with UnifyAI – the
              enterprise-ready platform designed to streamline, scale, and
              deploy AI solutions seamlessly. Whether you're leveraging AI for
              automation, predictive analytics, or fraud detection, UnifyAI
              accelerates your journey from prototype to production with
              unmatched speed and efficiency.
            </p>
            <div className="turbo-button">
              <PrimaryButton text={"Know more"} href={"#"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurbochargeSample;
