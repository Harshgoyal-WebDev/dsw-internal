"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  { name: "Insurance", content: "Purpose-built insurance solutions with AI capabilities" },
  { name: "Banking", content: "Comprehensive banking platform for digital transformation" },
  { name: "Financial Services", content: "Advanced financial services with AI-driven insights" },
  { name: "Others", content: "Customizable solutions for other industries" },
];

export default function Architecture() {
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
  const TOOLTIP_BASE_TOP_PERCENT = 65; // keep constant
  const TOOLTIP_STEP_Y_PX = 75; // vertical spacing per item (tune if needed)

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom bottom",
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
      duration: 0.6,
      ease: "power3.out",
    })
      .to(
        firstTextRef.current,
        { opacity: 1, duration: 0.45, ease: "power3.out" },
        "-=0.2"
      )

      .to(secondLayerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        secondTextRef.current,
        { opacity: 1, duration: 0.45, ease: "power3.out" },
        "-=0.2"
      )

      .to(thirdLayerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        [thirdTextLeftRef.current, thirdTextRightRef.current],
        {
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.12,
        },
        "-=0.25"
      )

      .to(fourthLayerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        fourthTextRef.current,
        { opacity: 1, duration: 0.45, ease: "power3.out" },
        "-=0.2"
      )

      // 2) THEN ARROWS
      .to(
        arrowLeftRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "+=0.2"
      )
      

      // 3) THEN CARDS (AFTER ARROWS)
      .to(
        [leftCardRef.current, rightCardRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.15,
        },
        "+=0.15"
      )
      .to(
        [arrowTopRef.current, arrowBottomRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.12,
        },
        "-=0.25"
      )

      // 4) FINALLY INDUSTRY BOX
      .to(industryBoxRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
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
      className="h-fit flex flex-col items-center justify-center space-y-[3vw] max-md:space-y-[5vw] max-md:px-[7vw] max-md:py-[15%] container relative background-radial max-md:hidden block"
    >
      <h2 className="text-center text-white-200 headingAnim w-[65%] max-md:w-[100%] text-90 max-md:text-[7vw]">
        A Unified Architecture for Governed Enterprise AI​
      </h2>

      {/* Steps cards */}
      <div className="flex items-center mt-[5vw] max-md:mt-[10vw] justify-center gap-[.2vw] max-md:flex-col max-md:gap-[4vw] fadeup">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className="px-[2vw] max-md:px-[5vw] h-[10vw] max-md:min-h-[25vw] gap-[2vw] max-md:gap-[4vw] w-full rounded-[2vw] max-md:rounded-[3vw] background-glass text-center flex items-center justify-center flex-col max-md:py-[6vw] border border-white/20 overflow-hidden relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-light-blue to-dark-blue transition-opacity ease-in duration-500 ${
                  step.gradient || hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              <p className="w-[100%] relative z-[2] max-md:text-[3.5vw]">{step.text}</p>
            </div>

            {index < steps.length - 1 && (
              <p className="text-50 max-md:text-[5vw] max-md:rotate-90">⟶</p>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="h-full w-full flex items-center justify-center py-10 relative min-h-[800px]">
        <div className="flex flex-col space-y-[-0.5vw] items-center justify-center">
          <div ref={firstLayerRef} className="w-[80%] relative z-[25]">
            <Image
              src={"/assets/images/homepage/architecture/first-layer.png"}
              height={160}
              width={681}
              alt="architecture-first-layer"
              className="h-full w-full"
            />
            <p ref={firstTextRef} className="absolute top-[50%] left-[35%] text-30">
              Presentation Layer
            </p>
          </div>

          <div ref={secondLayerRef} className="w-[70%] flex relative z-[20]">
            <Image
              src={"/assets/images/homepage/architecture/second-layer.png"}
              height={160}
              width={681}
              alt="architecture-second-layer"
              className="h-full w-full"
            />
            <p ref={secondTextRef} className="absolute top-[58%] left-[37%] text-30">
              Use Cases
            </p>
          </div>

          <div ref={thirdLayerRef} className="w-[60%] relative z-[15]">
            <Image
              src={"/assets/images/homepage/architecture/third-layer.png"}
              height={160}
              width={681}
              alt="architecture-third-layer"
              className="h-full w-full"
            />

            <div ref={thirdTextLeftRef} className="absolute top-[35%] left-[10%] flex flex-col items-center gap-4">
              <p className="text-30">AI Studio</p>
              <Image
                src={"/assets/icons/dswUnifyWhite.png"}
                height={34}
                width={193}
                alt="UnifyAI"
                className="w-30 h-auto"
              />
            </div>

            <div ref={thirdTextRightRef} className="absolute top-[35%] left-[53%] flex flex-col items-center gap-4">
              <p className="text-30">AgenticAI Studio</p>
              <Image
                src={"/assets/icons/dswAgenticWhite.png"}
                height={30}
                width={208}
                alt="AgenticAI"
                className="w-40 h-auto"
              />
            </div>

            <div ref={arrowLeftRef} className="absolute top-[5%] left-[-85%]">
              <Image src={"/assets/images/homepage/architecture/arrow.svg"} height={77} width={339} alt="arrow" />
            </div>
          </div>

          <div ref={fourthLayerRef} className="w-[50%] relative z-[10]">
            <Image
              src={"/assets/images/homepage/architecture/fourth-layer.png"}
              height={160}
              width={681}
              alt="architecture-fourth-layer"
              className="h-full w-full"
            />
            <p ref={fourthTextRef} className="absolute top-[50%] left-[25%] text-30 w-[60%]">
              Infra: On-Prem / Cloud​ CPU / GPU​
            </p>
          </div>
        </div>

        {/* Side cards */}
        <div
          ref={leftCardRef}
          className="px-[2vw] max-md:px-[5vw] h-[12vw] w-[15vw] p-3 max-md:min-h-[25vw] gap-[2vw] max-md:gap-[4vw] rounded-[2vw] max-md:rounded-[3vw] background-glass text-center flex items-center justify-center flex-col max-md:py-[6vw] border border-white/20 overflow-hidden absolute top-[25%] left-[0%]"
        >
          <p className="w-[100%] relative z-[2] max-md:text-[3.5vw]">
            Build deploy, monitor and manage AI/ ML models easily​
          </p>
        </div>

        <div
          ref={rightCardRef}
          className="px-[2vw] max-md:px-[5vw] h-[12vw] w-[15vw] p-3 max-md:min-h-[25vw] gap-[2vw] max-md:gap-[4vw] rounded-[2vw] max-md:rounded-[3vw] background-glass text-center flex items-center justify-center flex-col max-md:py-[6vw] border border-white/20 overflow-hidden absolute top-[25%] left-[83%]"
        >
          <p className="w-[100%] relative z-[2] max-md:text-[3.5vw]">
            Build, deploy, orchestrate Agentic AI with RAG, MCP and A2A protocol
          </p>
        </div>

        {/* Arrows */}
        <div ref={arrowTopRef} className="absolute top-[48%] left-[66%] z-[40]">
          <Image
            src={"/assets/images/homepage/architecture/arrow-top.svg"}
            height={77}
            width={339}
            alt="arrow"
            className="w-[22vw]"
          />
        </div>

        <div ref={arrowBottomRef} className="absolute top-[60%] left-[66%]">
          <Image
            src={"/assets/images/homepage/architecture/arrow.svg"}
            height={77}
            width={339}
            alt="arrow"
            className="rotate-180"
          />
        </div>

        {/* Smooth Hover Tooltip (transform-based movement) */}
        <div
          className={`absolute left-[55%] flex items-center gap-4 z-50 transition-opacity duration-200 ease-out will-change-transform ${
            showTooltip ? "opacity-100 pointer-events-none" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: `${TOOLTIP_BASE_TOP_PERCENT}%` }}
        >
          <div ref={tooltipRef} className="flex items-center gap-4" style={{ transform: "translate3d(0,0,0)" }}>
            <div className="mt-[40%] mr-[-40%]">
              <div className="border border-white/20 background-glass rounded-[1.5vw] px-8 py-6 w-[280px]">
                <div ref={tooltipTextRef}>
                  <p className="text-white text-22 font-medium">
                    {activeIndustry === null ? "" : industries[activeIndustry].name}
                  </p>
                  <p className="text-white text-18 mt-3">
                    {activeIndustry === null ? "" : industries[activeIndustry].content}
                  </p>
                </div>
              </div>
            </div>

            <Image
              src={"/assets/images/homepage/architecture/dotted.svg"}
              height={77}
              width={200}
              alt="arrow-to-solution"
              className="h-auto w-60"
            />
          </div>
        </div>

        {/* Industry box */}
        <div
          ref={industryBoxRef}
          className="px-[2vw] max-md:px-[5vw] h-fit w-[20vw] p-3 max-md:min-h-[25vw] gap-[2vw] max-md:gap-[4vw] rounded-[2vw] max-md:rounded-[3vw] background-glass text-center flex items-center justify-center flex-col max-md:py-[6vw] border border-white/20 overflow-hidden absolute top-[70%] right-[0%]"
        >
          <p className="w-[100%] relative z-[2] text-30">Industry Specific Solutions</p>

          <div className="w-full flex flex-col gap-3 relative">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndustry(idx)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className="relative"
              >
                <div
                  className={`w-full h-full py-4 rounded-xl border transition-all duration-300 text-center flex items-center justify-center relative cursor-pointer ${
                    hoveredIndustry === idx ? "border-primary-1" : "border-white/50"
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
      </div>
    </section>
  );
}
