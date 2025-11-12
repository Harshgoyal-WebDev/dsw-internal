"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PrimaryButton from "../Button/PrimaryButton";
import Copy from "../Animations/Copy";

const Tour = ({ heading, para }) => {
  const [activeTab, setActiveTab] = useState("unifyAI");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Refs for GSAP targets
  const thumbButtonRef = useRef(null);
  const containersWrapRef = useRef(null);

  // compute X value for thumb movement (same logic as before)
  const getThumbX = () => {
    if (activeTab === "unifyAI") return "0vw";
    return isMobile ? "40vw" : isTablet ? "30vw" : "13vw";
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    const checkTablet = () => setIsTablet(window.innerWidth < 1025);

    checkMobile();
    checkTablet();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("resize", checkTablet);

    // set initial thumb position
    if (thumbButtonRef.current) {
      gsap.set(thumbButtonRef.current, { x: getThumbX() });
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", checkTablet);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Move the thumb when activeTab / breakpoints change
  useEffect(() => {
    if (!thumbButtonRef.current) return;
    gsap.to(thumbButtonRef.current, {
      x: getThumbX(),
      duration: 0.6,
      ease: "power3.out",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, isMobile, isTablet]);

  // Animate the active content container on mount/change
  useEffect(() => {
    const ctx = gsap.context(() => {
      const containerClass =
        activeTab === "unifyAI" ? ".unifyAI-container" : ".agenticAI-container";
      const btnOverlayClass =
        activeTab === "unifyAI" ? ".unifyAI-overlay" : ".agenticAI-overlay";

      const tl = gsap.timeline();

      // container enter (matches your framer settings)
      tl.fromTo(
        containerClass,
        { opacity: 0, scale: 0.9, zIndex: 1 },
        {
          opacity: 1,
          scale: 1,
          zIndex: 10,
          duration: 0.4,
          ease: "power1.inOut",
        }
      );

      // button overlay (delay ~0.2, y: 20 -> 0)
      tl.fromTo(
        btnOverlayClass,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" },
        "-=0.2"
      );
    }, containersWrapRef);

    return () => ctx.revert();
  }, [activeTab]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tourbtnfade", {
        y:10,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  },[activeTab]);
  return (
    <section className="w-screen h-fit container" id="tour">
      <div className="w-full flex flex-col gap-[2vw] items-center max-md:gap-[4vw]">
        <h2 className="text-60 headingAnim w-[40%] max-md:w-full text-center">
          {heading}
        </h2>
        <Copy>
          <p className="text-[#CACACA] text-center">{para}</p>
        </Copy>

        {/* Tab Switcher */}
        <div className="w-fit flex rounded-full border-blue-1 border p-[0.2vw] !text-[1.15vw] fadeup relative max-sm:mt-[10vw] max-md:mt-[5vw]  max-sm:!text-[4.2vw] max-md:!text-[2.5vw] max-md:p-[0.5vw] ">
          {/* Thumb Track */}
          <div className="w-full h-[90%] absolute thumb-track max-md:h-[92%]">
            <div
              ref={thumbButtonRef}
              className="w-[13vw] h-full rounded-full bg-blue-1 thumb-button max-sm:w-[40vw] max-md:w-[30vw]"
            />
          </div>

          {/* UnifyAI Tab */}
          <div
            className="w-[13vw] px-[1.5vw] py-[1vw] flex items-center justify-center relative z-[2] cursor-pointer max-sm:w-[40vw] max-md:w-[30vw] max-md:py-[3vw]"
            id="unifyAI"
            onClick={() => handleTabClick("unifyAI")}
          >
            <p
              style={{ color: activeTab === "unifyAI" ? "#ffffff" : "#CACACA" }}
            >
              UnifyAI
            </p>
          </div>

          {/* AgenticAI Tab */}
          <div
            className="w-[13vw] px-[1.5vw] py-[1vw] flex items-center justify-center relative z-[2] cursor-pointer max-md:w-[30vw] max-sm:w-[40vw] max-md:py-[3vw]"
            id="agenticAI"
            onClick={() => handleTabClick("agenticAI")}
          >
            <p
              style={{
                color: activeTab === "agenticAI" ? "#f1f1f1" : "#CACACA",
              }}
            >
              AgenticAI
            </p>
          </div>
        </div>

        {/* Content Containers */}
        <div
          ref={containersWrapRef}
          className="w-[80%] h-[35vw] relative fadeup mt-[5vw] max-sm:w-full max-sm:h-[60vw] max-md:h-[40vw] max-md:w-full max-sm:mt-[12vw] rounded-lg overflow-hidden"
        >
          {activeTab === "unifyAI" && (
            <div
              key="unifyAI"
              className="w-full h-full absolute top-0 left-0 unifyAI-container"
              style={{ opacity: 0, transform: "scale(0.9)" }}
            >
              <Image
                src={"/assets/images/homepage/tour-img.png"}
                alt="UnifyAI tour image"
                fetchPriority="high"
                className="w-full h-full object-cover"
                width={900}
                height={400}
              />

              <div
                className="w-full h-full absolute top-0 left-0 flex justify-center items-center unifyAI-overlay"
                style={{ opacity: 0, transform: "translateY(20px)" }}
              ></div>
            </div>
          )}
          <div
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[20] tourbtnfade max-sm:w-full max-sm:left-[65%]`}
          >
            <PrimaryButton
              text={"Start Walkthrough"}
              className=""
              href={"#"}
            />
          </div>

          {activeTab === "agenticAI" && (
            <div
              key="agenticAI"
              className="w-full h-full absolute top-0 left-0 agenticAI-container"
              style={{ opacity: 0, transform: "scale(0.9)" }}
            >
              <Image
                src={"/assets/images/homepage/tour-img.png"}
                alt="AgenticAI tour image"
                className="w-full h-full object-cover "
                width={900}
                height={400}
              />

              <div
                className="w-full h-full absolute top-0 left-0 flex justify-center items-center agenticAI-overlay"
                style={{ opacity: 0, transform: "translateY(20px)" }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tour;
