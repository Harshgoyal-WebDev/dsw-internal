import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import WhiteButton from "../Button/WhiteButton";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const WhyUnify = () => {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);

  // Refs for each content block
  const contentRefs = useRef([]);
  contentRefs.current = [];

  // Refs for each SVG circle (the progress indicator)
  const svgCircleRefs = useRef([]);
  svgCircleRefs.current = [];

  // Refs for the left-side tags (text items)
  const tagRefs = useRef([]);
  tagRefs.current = [];

  // Ref for the GSAP timeline
  const timelineRef = useRef(null);

  const addToContentRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  const addToCircleRefs = (el) => {
    if (el && !svgCircleRefs.current.includes(el)) {
      svgCircleRefs.current.push(el);
    }
  };

  const addToTagRefs = (el) => {
    if (el && !tagRefs.current.includes(el)) {
      tagRefs.current.push(el);
    }
  };

  useEffect(() => {
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% 10%",
        end: "+=2000",
        scrub: 1,
        // markers:true,
        // pin: true,
        // Snap by number of steps
        snap: 1 / (contentRefs.current.length - 1),
        onUpdate: (self) => {
          const totalSteps = contentRefs.current.length;
          const activeIndex = Math.min(
            totalSteps - 1,
            Math.floor(self.progress * totalSteps)
          );

          // update circles (keep your existing behavior)
          svgCircleRefs.current.forEach((circle, i) => {
            gsap.to(circle, {
              fill: i === activeIndex ? "#1626FD" : "#f8f8f8",
              duration: 0.3,
            });
          });

          // update tags: active -> #1626FD, inactive -> black/50
          tagRefs.current.forEach((tag, i) => {
            gsap.to(tag, {
              color: i === activeIndex ? "#1626FD" : "rgba(0,0,0,0.5)",
              duration: 0.3,
            });
          });
        },
      },
    });

    const totalLength = progressLineRef.current.getTotalLength();
    const segments = contentRefs.current.length - 1;
    const segmentLength = totalLength / segments;

    gsap.set(progressLineRef.current, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });

    // initial content state
    gsap.set(contentRefs.current[0], { opacity: 1, y: 0, zIndex: 1 });

    // initial circles (leave as in your code)
    svgCircleRefs.current.forEach((circle, i) => {
      gsap.set(circle, { fill: i === 0 ? "#1626FD" : "#f8f8f8" });
    });

    // initial tags: first active
    tagRefs.current.forEach((tag, i) => {
      gsap.set(tag, { color: i === 0 ? "#1626FD" : "rgba(0,0,0,0.5)" });
    });

    for (let i = 1; i < contentRefs.current.length; i++) {
      const currentOffset = totalLength - segmentLength * i;

      timelineRef.current.to(progressLineRef.current, {
        strokeDashoffset: currentOffset,
        duration: 1,
        ease: "none",
      });

      timelineRef.current.to(
        contentRefs.current[i - 1],
        {
          opacity: 0,
          y: -50,
          zIndex: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
      );

      timelineRef.current.fromTo(
        contentRefs.current[i],
        { opacity: 0, y: 50, zIndex: 0 },
        {
          opacity: 1,
          zIndex: 2,
          y: 0,
          duration: 0.5,
          ease: "power2.inOut",
          delay: 0.5,
        },
        "<"
      );
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.scrollTrigger.kill();
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const bgAnim = gsap.to(".gradientClassBackground", {
      scrollTrigger: {
        trigger: ".gradientClassBackground",
        start: "+3500 50%",
        end: "+4400 50%",
        scrub: 0.5,
      },
      yPercent: -15,
    });

    return () => {
      bgAnim.kill();
    };
  }, []);

  // Handler for the skip button using ScrollToPlugin to move to the last snap.
  const handleSkip = () => {
    if (timelineRef.current) {
      const st = timelineRef.current.scrollTrigger;
      gsap.to(window, {
        scrollTo: { y: st.end, autoKill: true },
        duration: 1,
        onComplete: () => {
          timelineRef.current.progress(1);
        },
      });
    }
  };

  return (
    <section
      className="h-[400vh] w-screen relative bg-[#f8f8f8] z-[10]"
      ref={sectionRef}
      id="WhyUnify"
    >
      <div className="flex flex-col items-center w-full pb-[7vw] space-y-30 px-10 sticky h-screen top-[10%] z-[2]">
        <div className="space-y-24 w-full">
          <h3 className="title-2 text-primary-1 text-center font-light headingAnim">
            Why DSW UnifyAI is the OS for AI?
          </h3>

          <div className="w-full flex items-start justify-between fadeup">
            {/* Left: SVG navigation with progress indicator */}
            <div className="flex w-[20%] gap-5">
              <div>
                <svg
                  width="16"
                  height="319"
                  viewBox="0 0 16 319"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="8.08081"
                    y1="7.56641"
                    x2="8.08082"
                    y2="310.975"
                    stroke="#939393"
                    strokeOpacity="0.46"
                    strokeWidth="1"
                  />
                  <line
                    x1="8.08081"
                    y1="7.56641"
                    x2="8.08082"
                    y2="310.975"
                    stroke="#1626FD"
                    strokeWidth="1"
                    ref={progressLineRef}
                  />
                  <circle
                    cx="7.5808"
                    cy="7.56615"
                    r="6.5681"
                    fill="#f8f8f8"
                    stroke="#1626FD"
                    ref={addToCircleRefs}
                  />
                  <circle
                    cx="7.5808"
                    cy="108.702"
                    r="7.0681"
                    fill="#f8f8f8"
                    stroke="#1626FD"
                    ref={addToCircleRefs}
                  />
                  <circle
                    cx="7.5808"
                    cy="209.838"
                    r="7.0681"
                    fill="#f8f8f8"
                    stroke="#1626FD"
                    ref={addToCircleRefs}
                  />
                  <circle
                    cx="7.5808"
                    cy="310.975"
                    r="7.0681"
                    fill="#f8f8f8"
                    stroke="#1626FD"
                    ref={addToCircleRefs}
                  />
                </svg>
              </div>

              {/* Tags */}
              <div className="text-black/50 space-y-[3.8vw] text-[1vw] font-light">
                <p className="tags" ref={addToTagRefs}>
                  End-to-End AI Lifecycle Management
                </p>
                <p className="w-[45%] tags" ref={addToTagRefs}>
                  Multi-Model AI Support
                </p>
                <p className="tags" ref={addToTagRefs}>
                  Seamless <br/> Enterprise Integration
                </p>
                <p className="w-[45%] tags" ref={addToTagRefs}>
                  Scalable Infrastructure
                </p>
              </div>
            </div>

            {/* Middle: Images */}
            <div className="w-[30%] flex flex-col gap-[1.5vw]">
              <div className="rounded-2xl overflow-hidden h-fit w-fit">
                <Image
                  src="/assets/images/homepage/whyunify-img-1.png"
                  height={390}
                  width={382}
                  className="h-[14vw] w-[16vw] object-cover"
                  alt="why unify image 1"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-fit w-fit ml-[7vw]">
                <Image
                  src="/assets/images/unify-dashboard-2.png"
                  height={247}
                  width={283}
                  className="h-[13vw] w-[15vw] object-cover"
                  alt="dashboard"
                />
              </div>
            </div>

            {/* Right: Content Blocks */}
            <div className="w-[40vw] relative">
              <div ref={addToContentRefs} className="step-block absolute top-20 left-0">
                <p className="text-[2.6vw] text-black font-head leading-[1.2]">
                  The Freedom to Own AI
                </p>
                <p className="text-black content-p w-[88%] py-8">
                  The power of OpenAI, but entirely inside your infrastructure with your data, your compliance, and your governance.
                </p>
                <WhiteButton
                  circleColor={"bg-primary-1 group-hover:!bg-primary-1"}
                  text="Know More"
                  href="#"
                  className="border-primary-1 border text-primary-1 bg-transparent hover:text-primary-1 hover:bg-transparent"
                />
              </div>

              <div ref={addToContentRefs} className="step-block absolute top-20 left-0">
                <p className="text-[2.6vw] text-black font-head leading-[1.2]">
                  Unified AI Lifecycle
                </p>
                <p className="text-black content-p w-[88%] py-8">
                 One platform for the full journey from data to deployment to continuous learning, eliminating silos and execution gaps.
                </p>
                <WhiteButton
                  circleColor={"bg-primary-1 group-hover:!bg-primary-1"}
                  text="Know More"
                  href="#"
                  className="border-primary-1 border text-primary-1 bg-transparent hover:text-primary-1 hover:bg-transparent"
                />
              </div>

              <div ref={addToContentRefs} className="step-block absolute top-20 left-0">
                <p className="text-[2.6vw] text-black font-head leading-[1.2]">
                  Governance by Design
                </p>
                <p className="text-black content-p w-[88%] py-8">
                 Security, compliance, and trust baked in with role-based access, explainability, audit trails, and approval workflows.
                </p>
                <WhiteButton
                  circleColor={"bg-primary-1 group-hover:!bg-primary-1"}
                  text="Know More"
                  href="#"
                  className="border-primary-1 border text-primary-1 bg-transparent hover:text-primary-1 hover:bg-transparent"
                />
              </div>

              <div ref={addToContentRefs} className="step-block absolute top-10 left-0">
                <p className="text-[2.6vw] text-black font-head leading-[1.2]">
                 Sector-Agnostic, Vertically Accelerated
                </p>
                <p className="text-black content-p w-[88%] py-8">
                  Supports enterprises across industries, combining a sector-agnostic core with domain-focused accelerators to deliver impact at scale.
                </p>
                <WhiteButton
                  circleColor={"bg-primary-1 group-hover:!bg-primary-1"}
                  text="Start Free Trial"
                  href="#"
                  className="border-primary-1 border text-primary-1 bg-transparent hover:text-primary-1 hover:bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Skip Button triggers scroll to the last snap */}
          <div className="mt-10 flex justify-center absolute right-10 bottom-50">
            <button
              className="px-6 py-2 rounded-full flex items-center cursor-pointer gap-2 text-black font-light hover:scale-95 text-[1vw] transition duration-500"
              onClick={handleSkip}
            >
              Skip
              <span>
                <Image
                  src={"/assets/icons/skip-icon.svg"}
                  height={10}
                  width={10}
                  alt="skip-icon"
                  className="invert"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUnify;
