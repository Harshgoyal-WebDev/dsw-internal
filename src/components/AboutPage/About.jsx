"use client";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";
import SplitText from 'gsap/SplitText';
import SectionBreak from "../Common/SectionBreak";
gsap.registerPlugin(ScrollTrigger, SplitText);

const POINTS = [
  {
    id: "01",
    title: "About",
    text:" We are a deep-tech AI company on a mission to empower enterprises to transform their operations, products, and customer experiences through intelligent automation, secure data science practices, and domain-specific solutions.<br/>From traditional machine learning to Generative AI and large language models (LLMs), we help organizations go from proof of concept to production in record time—with confidence, clarity, and control.",
    width: "w-full",
  },
  {
    id: "02",
    title: "Vision",
    text: "To make AI adoption frictionless and impactful for every enterprise in the world.",
    width: "w-full",
  },
  {
    id: "03",
    title: "Mission",
    text: "To enable businesses to unlock the full potential of their data through secure, scalable, and ethical AI solutions tailored to real-world use cases.",
    width: "w-full",
  },
];

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setIsMobile(window.innerWidth <= 768);

  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth <= 768);
  //     };

  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }
  // }, []);
  // useEffect(() => {
  //   gsap.set(".about-item", {
  //     scale: 0.7,
  //     transformOrigin: "center",
  //     y: 60,
  //     x: 25,
  //     opacity: 0.45,
  //   });

  //   document.querySelectorAll(".about-item").forEach((item, index) => {
  //     const masterTl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: item,
  //         start: isMobile ? "20% 180%" : "10% bottom",
  //         end: "bottom 60%",
  //         scrub: true,
  //         markers:true,
  //       },
  //     });

  //     masterTl.to(
  //       item,
  //       {
  //         scale: 1,
  //         y: 0,
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.8,
  //       },
  //       "<-.8"
  //     );
  //   });
  // }, []);



  return (
    <section className="w-screen container mt-[-5%] max-md:mt-0 relative z-[10]" id="about" >
      <div className="w-full flex flex-col items-end justify-center gap-y-[10vw] max-md:gap-y-[15vw]">
        <SectionBreak text={" At Data Science Wizards (DSW), we believe that AI should be accessible, scalable, and enterprise-ready—not locked behind complexity. That’s why we built UnifyAI, a next-generation platform that simplifies the entire AI lifecycle for businesses across industries."} span={true}/>
        <div className="w-[59%] flex flex-col items-start gap-[7vw] max-md:w-full max-md:gap-[10vw] max-sm:gap-[15vw] max-md:items-start max-md:mt-[10vw]">
          {POINTS.map(({ id, text, width, title }) => (
            <div
              key={id}
              className="w-full  flex gap-[5vw] items-start about-item max-sm:w-[98%] max-md:w-[100%] max-md:flex-col"
            >
              <div className="w-[15%] relative max-sm:w-[100%]">
                <div className="relative fadeup w-[6.5vw] h-[6.5vw] max-md:h-[12vw] max-md:w-[12vw] border border-[#59595980] rounded-full flex items-center justify-center max-sm:w-[18vw] max-sm:h-[18vw] max-sm:border-primary-1">
                  
                  <p className="about-id text-white-200 text-[1.5vw] max-md:text-[3.5vw] font-head relative z-[1] max-sm:text-[4.2vw] max-sm:text-primary-1">
                    {id}
                  </p>
                </div>
              </div>
              <div className="space-y-[1.8vw] max-sm:space-y-[4vw]">
                <Copy>
                  <h4 className=" w-[80%] uppercase max-sm:text-[5vw] text-white-200 ">
                    {title}
                  </h4>
                </Copy>
                {/* <Copy> */}
                  <div className="text-white-300 max-md:w-full fadeup" dangerouslySetInnerHTML={{__html:text}}/>
                {/* </Copy> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
