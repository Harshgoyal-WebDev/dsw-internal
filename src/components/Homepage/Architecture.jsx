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

export default function Architecture({ showHeading2 = false }) {
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
  const tooltipRef = useRef(null);
  const tooltipTextRef = useRef(null);

  // BASE settings for tooltip motion
  const TOOLTIP_BASE_TOP_PERCENT = -16; // keep constant
  const TOOLTIP_STEP_Y_PX = 75; // vertical spacing per item (tune if needed)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#ArchitectureDiagram",
          start: "10% 100%",
          end: "bottom bottom",
          markers: false,
          toggleActions: "play none none reverse",
        },
      });

      // ----------------------------
      // INITIAL STATES
      // ----------------------------

      // Layers (images/containers) fade-up
      gsap.set(
        [
          firstLayerRef.current,
          secondLayerRef.current,
          thirdLayerRef.current,
          fourthLayerRef.current,
          industryBoxRef.current,
          arrowLeftRef.current,
          arrowTopRef.current,
          arrowBottomRef.current,
        ],
        { opacity: 0, y: 30 }
      );

      // Cards (optional: one from top, one from bottom for "above/below" feel)
      gsap.set(leftCardRef.current, { opacity: 0, y: -30 });
      gsap.set(rightCardRef.current, { opacity: 0, y: 30 });

      // Text fade-in only (no y)
      gsap.set(
        [
          firstTextRef.current,
          secondTextRef.current,
          thirdTextLeftRef.current,
          thirdTextRightRef.current,
          fourthTextRef.current,
        ],
        { opacity: 0 }
      );
      tl.to(firstLayerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      })
        .to(
          firstTextRef.current,
          { opacity: 1, duration: 0.3, ease: "power3.out" },
          "-=0.3"
        )

        .to(secondLayerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        })
        .to(
          secondTextRef.current,
          { opacity: 1, duration: 0.3, ease: "power3.out" },
          "-=0.3"
        )

        .to(thirdLayerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        })
        .to(
          [thirdTextLeftRef.current, thirdTextRightRef.current],
          {
            opacity: 1,
            duration: 0.3,
            ease: "power3.out",
            stagger: 0.08,
          },
          "-=0.3"
        )

        .to(fourthLayerRef.current, {
          opacity: 1,
          y: -20,
          duration: 0.4,
          ease: "power3.out",
        })
        .to(
          fourthTextRef.current,
          { opacity: 1, duration: 0.3, ease: "power3.out" },
          "-=0.3"
        )

        // 2) THEN ARROWS
        .to(
          arrowLeftRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          },
          "+=0.1"
        )

        // 3) THEN CARDS (AFTER ARROWS)
        .to(
          leftCardRef.current,
          {
            opacity: 1,
            y: 0,
            delay: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          "+=0.1"
        )

        .to(
          [arrowTopRef.current, arrowBottomRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
            stagger: 0.08,
          },
          "-=0.4"
        )
        .to(rightCardRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay:-0.2,
          ease: "power3.out",
        })

        // 4) FINALLY INDUSTRY BOX
        .to(industryBoxRef.current, {
          opacity: 1,
          y: 0,
          delay:-0.2,
          duration: 0.8,
          ease: "power3.out",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
          { opacity: 1, duration: 0.15, ease: "power2.out" }
        );
      }
      setActiveIndustry(hoveredIndustry);
    }

    // move tooltip smoothly using transform (NOT top)
    if (tooltipRef.current) {
      gsap.killTweensOf(tooltipRef.current);
      gsap.to(tooltipRef.current, {
        y: hoveredIndustry * TOOLTIP_STEP_Y_PX,
        duration: 0.18,
        ease: "power3.out",
      });
    }
  }, [hoveredIndustry, activeIndustry]);

  return (
    <section
      ref={sectionRef}
      className="h-fit flex flex-col  overflow-x-hidden items-center justify-center space-y-[3vw] max-md:space-y-[5vw] max-md:px-[7vw] max-md:py-[15%] container relative background-radial max-md:hidden block"
    >
      {!showHeading2 && (
        <h2 className="text-center text-white-200 headingAnim w-[65%] max-md:w-[100%] text-90 max-md:text-[7vw]">
          A Unified Architecture for Governed Enterprise AI​
        </h2>
      )}

      {showHeading2 && (
        <Copy>
          <h2 className="text-40 max-md:w-[80%] w-[80%] leading-[1.2] headingAnim max-md:text-[5vw]  text-center">
            An orchestrator that brings together data, models, workflows and AI
            agents, all in a single platform, designed to deliver business
            outcome
          </h2>
        </Copy>
      )}

      {/* Steps cards */}
      <div  className="flex items-center mt-[5vw] max-md:mt-[10vw] mb-[20vh] justify-center gap-[.2vw] max-md:flex-col max-md:gap-[4vw] fadeup">
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

      <div id="ArchitectureDiagram" className="h-full w-full flex items-center justify-center py-10 relative min-h-[800px]">
        <div className="flex flex-col space-y-[-0.5vw] items-center justify-center">
          <div ref={firstLayerRef} className="w-[75%] relative z-[30]">
            <Image
              src={"/assets/images/homepage/architecture/first-layer.png"}
              height={160}
              width={681}
              alt="architecture-first-layer"
              className="h-full w-full"
            />
            <p
              ref={firstTextRef}
              className="absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-20"
            >
              Presentation Layer
            </p>
          </div>

          <div ref={secondLayerRef} className="w-[68%] flex relative z-[25]">
            <Image
              src={"/assets/images/homepage/architecture/second-layer.png"}
              height={160}
              width={681}
              alt="architecture-second-layer"
              className="h-full w-full"
            />
            <p
              ref={secondTextRef}
              className="absolute top-[65%] translate-x-[-50%] translate-y-[-50%] left-[50%] text-20"
            >
              Use Cases
            </p>
          </div>
          <div ref={secondLayerRef} className="w-[60%] flex relative z-[20]">
            <Image
              src={"/assets/images/homepage/architecture/second-layer.png"}
              height={160}
              width={681}
              alt="architecture-second-layer"
              className="h-full w-full"
            />
            <p
              ref={secondTextRef}
              className="absolute top-[65%] translate-x-[-50%] translate-y-[-50%] left-[50%] w-full text-20 text-center"
            >
              Industry Specific Solutions
            </p>
          </div>

          <div
            ref={thirdLayerRef}
            className="w-full flex items-center justify-center flex-col z-[15]"
          >
            <div className="w-[50%] relative z-[18]">
              <Image
                src={"/assets/images/homepage/architecture/third-layer.png"}
                height={160}
                width={681}
                alt="architecture-third-layer"
                className="h-full  w-full"
              />

              <div
                ref={thirdTextLeftRef}
                className="absolute top-[65%] translate-x-[-50%] translate-y-[-50%] left-[25%] w-full flex flex-col items-center gap-4"
              >
                <p className="text-20">AI Studio</p>
              </div>

              <div
                ref={thirdTextRightRef}
                className="absolute  top-[65%] translate-x-[-50%] translate-y-[-50%] left-[78%] w-[40%] flex flex-col items-center gap-4"
              >
                <p className="text-20 leading-[1.1]">AgenticAI Studio</p>
              </div>
            </div>

            <div className="w-[50%] relative z-[15]">
              <Image
                src={"/assets/images/homepage/architecture/third-layer.png"}
                height={160}
                width={681}
                alt="architecture-third-layer"
                className="h-full translate-y-[-25%]  w-full"
              />

              <div
                ref={thirdTextLeftRef}
                className="absolute top-[35%] translate-x-[-50%] translate-y-[-50%] left-[25%] w-full flex flex-col items-center gap-4"
              >
                <Image
                  src={"/assets/icons/dswUnifyWhite.png"}
                  height={34}
                  width={193}
                  alt="UnifyAI"
                  className="w-30 h-auto"
                />
              </div>
            </div>

            <div
              ref={thirdTextRightRef}
              className="absolute top-[70%] translate-x-[-50%] translate-y-[-50%] left-[62%] z-[25] w-full flex flex-col items-center gap-4"
            >
              <Image
                src={"/assets/icons/dswAgenticWhite.png"}
                height={30}
                width={208}
                alt="AgenticAI"
                className="w-33 h-auto"
              />
            </div>
          </div>

          <div
            ref={fourthLayerRef}
            className="w-[40%] mt-[-1vw] relative z-[5]"
          >
            <Image
              src={"/assets/images/homepage/architecture/fourth-layer.png"}
              height={160}
              width={681}
              alt="architecture-fourth-layer"
              className="h-full w-full"
            />
            <p
              ref={fourthTextRef}
              className="absolute top-[65%] translate-x-[-50%] translate-y-[-50%] left-[50%] text-20 w-[70%] text-center"
            >
              Infra: On-Prem / Cloud​ CPU / GPU​
            </p>
          </div>
        </div>

        {/* Side cards */}
        <div
          ref={leftCardRef}
          className="px-[2vw] max-md:px-[5vw] h-[12vw] w-[17vw] p-3 max-md:min-h-[25vw] gap-[2vw] max-md:gap-[4vw] rounded-[1.2vw] max-md:rounded-[3vw] background-glass text-center flex items-center justify-center flex-col max-md:py-[6vw] border border-white/20 overflow-hidden absolute top-[70%] left-[2.5%]"
        >
          <p className="w-[100%] relative z-[2] max-md:text-[3.5vw]">
            Build deploy, monitor and manage AI/ ML models easily​
          </p>
        </div>

        <div
          ref={rightCardRef}
          className="px-[2vw] max-md:px-[5vw] h-[12vw] w-[17vw] p-3 max-md:min-h-[25vw] gap-[2vw] max-md:gap-[4vw] rounded-[1.2vw] max-md:rounded-[3vw] background-glass text-center flex items-center justify-center flex-col max-md:py-[6vw] border border-white/20 overflow-hidden absolute top-[70%] right-[4%]"
        >
          <p className="w-[100%] relative z-[2] max-md:text-[3.5vw]">
            Build, deploy, orchestrate Agentic AI with RAG, MCP and A2A protocol
          </p>
        </div>

        {/* Arrows */}
        <div
          ref={arrowTopRef}
          className="absolute top-[40%] translate-x-[-50%] translate-y-[-50%] left-[77%] z-[40]"
        >
          <Image
            src={"/assets/images/homepage/architecture/arrow-top.svg"}
            height={77}
            width={339}
            alt="arrow"
            className="w-[20vw] h-auto"
          />
        </div>

        <div
          ref={arrowBottomRef}
          className="absolute top-[62%] translate-x-[-50%] translate-y-[-50%] left-[75.5%]"
        >
          <Image
            src={"/assets/images/homepage/architecture/arrow.svg"}
            height={77}
            width={339}
            alt="arrow"
            className="rotate-180"
          />
        </div>

        <div
          ref={arrowLeftRef}
          className="absolute scale-y-[-1] top-[62%] translate-x-[-50%] translate-y-[-50%] left-[24%]"
        >
          <Image
            src={"/assets/images/homepage/architecture/arrow.svg"}
            height={77}
            width={339}
            alt="arrow"
          />
        </div>

        {/* Industry box */}
        <div
          ref={industryBoxRef}
          className="p-[0.8vw] max-md:px-[5vw] h-fit w-fit gap-[2vw] max-md:gap-[4vw] rounded-[1.2vw] max-md:rounded-[3vw] background-glass text-center flex  items-center justify-center flex-col max-md:py-[6vw] border border-white/20 overflow-hidden absolute top-[-2.5vw] right-[1%]"
        >
          <div className="w-full flex flex-col gap-3 relative">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndustry(idx)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className="relative"
              >
                <div
                  className={`w-full min-w-[18vw] h-full py-4 rounded-xl border transition-all duration-200 text-center flex items-center justify-center relative cursor-pointer ${
                    hoveredIndustry === idx
                      ? "border-primary-1"
                      : "border-white/50"
                  }`}
                >
                  {industry.name}
                  <span className="h-1.5 w-1.5 bg-white absolute top-2 left-2 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-white absolute top-2 right-2 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-white absolute bottom-2 left-2 rounded-full" />
                  <span className="h-1.5 w-1.5 bg-white absolute bottom-2 right-2 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
