"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";
import { lineAnim } from "../Animations/gsapAnimations";
gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  {
    id: "01",
    title: "Live Expert Panels",
    text: "Hear from AI leaders, CTOs, and compliance specialists on real-world strategies and deployment journeys.",
    width: "w-full",
  },
  {
    id: "02",
    title: "Industry-Specific Sessions",
    text: "Explore tailored events focused on insurance, banking, healthcare, and other regulated industries.",
    width: "w-full",
  },
  {
    id: "03",
    title: "Hands-On Webinars",
    text: "Follow guided walkthroughs of AI and GenAI use cases using the UnifyAI platform—with no-code to full-code options.",
    width: "w-full",
  },
  {
    id: "04",
    title: "Product Showcases",
    text: "Discover new features, tools, and blueprints to help you accelerate AI to production.",
    width: "w-[60%] max-sm:w-full",
  },
  {
    id: "05",
    title: "Community & Networking",
    text: "Connect with other enterprise leaders solving similar challenges with AI.",
    width: "w-[60%] max-sm:w-full",
  },
];

export default function Expect() {
  const [isMobile, setIsMobile] = useState(false);
  // lineAnim()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  

  return (
    <section className="w-screen container relative z-[10]" id="expect">
      <div className="w-full flex flex-col items-center justify-center gap-y-[5vw] max-sm:gap-y-[20vw]">
        <div className="text-center space-y-[2vw] max-sm:space-y-[5vw]">
          <h2 className="text-90 headingAnim text-white-200 max-sm:text-center">
            What to Expect
          </h2>
        </div>

        <div className="flex  flex-wrap justify-end gap-y-[7vw] gap-x-[10vw] max-sm:w-full max-sm:gap-[15vw] max-sm:justify-center max-sm:items-center">
          {POINTS.map(({ id, text,title}) => (
            <div
              key={id}
              className=" flex flex-col gap-[1.2vw] items-start about-item w-[44%] fadeup max-sm:w-full max-sm:items-center max-sm:gap-y-[7vw]"
            >
              <div className="w-[15%] relative max-sm:w-fit">
                <div className="relative w-[6.5vw] h-[6.5vw] border border-white-200 rounded-full flex items-center justify-center max-sm:w-[18vw] max-sm:h-[18vw]">
                  <p className="about-id text-white-200 text-[1.5vw] font-head relative z-[1] max-sm:text-[4.2vw] max-sm:text-center">
                    {id}
                  </p>
                </div>
              </div>
              <div className="space-y-[1.2vw] max-sm:space-y-[7vw]">
                <p className="text-30  text-primary-2 max-sm:text-center">
                  {title}
                </p>

                <p className="text-white-300 max-sm:text-center">{text}</p>
              </div>
              <span className="lineDraw w-full h-[1px] bg-white/20 hidden max-sm:block mt-[5vw]"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
