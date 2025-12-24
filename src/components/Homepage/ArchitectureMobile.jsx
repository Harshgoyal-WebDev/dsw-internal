"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    text: "DSW UnifyAI & DSW AgenticAI: The horizontal enterprise AI & Agentic AI platforms",
    gradient: false,
  },
  {
    text: "Designed to accelerate AI/ML & GenAI use case delivery",
    gradient: false,
  },
  {
    text: "Domain solution: ​The vertical platform purpose-built for insurance.",
    gradient: false,
  },
];

const industries = [
  {
    name: "Insurance",
    content: "Purpose-built insurance solutions with AI capabilities",
  },
  {
    name: "Banking",
    content: "Comprehensive banking platform for digital transformation",
  },
  {
    name: "Financial Services",
    content: "Advanced financial services with AI-driven insights",
  },
  { name: "Others", content: "Customizable solutions for other industries" },
];

export default function ArchitectureMobile({showHeading2 = false}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // hover state for tooltip
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState(null); // what tooltip is showing
  const [showTooltip, setShowTooltip] = useState(false);

  const sectionRef = useRef(null);
  const firstLayerRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondLayerRef = useRef(null);
  const secondTextRef = useRef(null);
  const thirdLayerRef = useRef(null);
  const thirdTextLeftRef = useRef(null);
  const thirdTextRightRef = useRef(null);
  const arrowLeftRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const arrowTopRef = useRef(null);
  const arrowBottomRef = useRef(null);
  const fourthLayerRef = useRef(null);
  const fourthTextRef = useRef(null);
  const industryBoxRef = useRef(null);

  // refs for smooth tooltip animation

  // Smooth tooltip movement + smooth text change
  useEffect(() => {
    if (hoveredIndustry === null) {
      // hide tooltip smoothly
      setShowTooltip(false);
      return;
    }

    // show tooltip
    setShowTooltip(true);

    // if first time open, set active immediately
    if (activeIndustry === null) {
      setActiveIndustry(hoveredIndustry);
    } else {
      // cross-fade text when switching industry
      if (tooltipTextRef.current) {
        gsap.killTweensOf(tooltipTextRef.current);
        gsap.fromTo(
          tooltipTextRef.current,
          { opacity: 0.3 },
          { opacity: 1, duration: 0.2, ease: "power2.out" }
        );
      }
      setActiveIndustry(hoveredIndustry);
    }

    // move tooltip smoothly using transform (NOT top)
    if (tooltipRef.current) {
      gsap.killTweensOf(tooltipRef.current);
      gsap.to(tooltipRef.current, {
        y: hoveredIndustry * TOOLTIP_STEP_Y_PX,
        duration: 0.25,
        ease: "power3.out",
      });
    }
  }, [hoveredIndustry, activeIndustry]);

  return (
    <section
      ref={sectionRef}
      className="h-fit  flex-col items-center justify-center space-y-[3vw] max-md:space-y-[5vw] max-md:px-[7vw] max-md:py-[15%] container relative background-radial hidden max-md:flex"
    >
      {" "}
      {!showHeading2 && (
        <h2 className="text-center text-white-200 headingAnim w-[65%] max-md:w-[100%] text-90 max-md:text-[7vw]">
          A Unified Architecture for Governed Enterprise AI​
        </h2>
      )}
      {showHeading2 && (
        <Copy >
          <h2 className="text-40 max-md:w-[100%] w-[70%] leading-[1.2] headingAnim max-md:text-[5vw]  text-center">
            An orchestrator that brings together data, models, workflows and AI
            agents, all in a single platform, designed to deliver business
            outcome
          </h2>
        </Copy>
      )}
      {/* Steps cards */}
      <div className="flex items-center mt-[5vw] max-md:mt-[10vw] mb-[10vh] justify-center gap-[.2vw] max-md:flex-col max-md:gap-[4vw] fadeup">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className="px-[2vw] max-md:px-[5vw] h-[10vw] max-md:min-h-[25vw] gap-[2vw] max-md:gap-[4vw] w-full rounded-[2vw] max-md:rounded-[3vw] background-glass text-center flex items-center justify-center flex-col max-md:py-[6vw] border border-white/20 overflow-hidden relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-light-blue to-dark-blue transition-opacity ease-in duration-500 ${
                  step.gradient || hoveredIndex === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
              <p className="w-[100%] relative z-[2] max-md:text-[3.5vw]">
                {step.text}
              </p>
            </div>

            {index < steps.length - 1 && (
              <p className="text-50 max-md:text-[5vw] max-md:rotate-90">⟶</p>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="w-full h-auto relative">
        <Image
          src="/assets/images/homepage/architecture/MobileArchitecture.png"
          alt="Architecture"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>
      <div
        //   ref={industryBoxRef}
        className="px-[2vw] max-md:px-[5vw] h-fit w-full p-3 max-md:min-h-[25vw] gap-[2vw] max-md:gap-[4vw] rounded-[2vw] max-md:rounded-[5vw] background-glass text-center flex items-center justify-center flex-col max-md:py-[6vw] border border-white/20 overflow-hidden "
      >
        {/* <p className="w-[100%] relative z-[2] text-30">
            Industry Specific Solutions
          </p> */}

        <div className="w-full flex flex-col gap-3 relative">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              // onMouseEnter={() => setHoveredIndustry(idx)}
              // onMouseLeave={() => setHoveredIndustry(null)}
              className="relative"
            >
              <div
                className={`w-full h-full py-4 rounded-xl border transition-all duration-300 text-center flex items-center justify-center relative cursor-pointer ${
                  hoveredIndustry === idx
                    ? "border-primary-1"
                    : "border-white/50"
                }`}
              >
                {industry.name}
                <span className="h-2 w-2 bg-white absolute top-3 left-3 rounded-full" />
                <span className="h-2 w-2 bg-white absolute top-3 right-3 rounded-full" />
                <span className="h-2 w-2 bg-white absolute bottom-3 left-3 rounded-full" />
                <span className="h-2 w-2 bg-white absolute bottom-3 right-3 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
