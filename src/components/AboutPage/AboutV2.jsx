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
    title: "Mission ",
    text:[" Enable enterprises to harness AI responsibly and at scale, transforming operations, improving lives, and solving real-world challenges, while fostering a collaborative AI community that drives innovation forward. "],
    width: "w-full",
  },
  {
    id: "02",
    title: "Vision",
    text: [
        "Become the backbone of enterprise AI. Just as Linux became the foundation of modern computing, DSW UnifyAI is emerging as the OS for AI - a platform that brings together open innovation, governance, and scale. We are building the next-generation AI infrastructure enterprises can trust, enabling them to adapt, evolve, and serve their customers with confidence and speed.   ",
        "Our vision extends beyond technology, it’s about cultivating a thriving ecosystem where enterprises, developers, and partners co-create the future of AI. "
    ],
    width: "w-full",
  },
  {
    id: "03",
    title: "Values ",
    text: [
        "We build solutions with purpose, helping enterprises connect technology to meaningful outcomes that enrich lives and solve real-world challenges. ",
        "Trust by design: Trust isn’t just a feature, it’s the foundation. We believe people don’t buy what you do, they buy why you do it. That’s why we embed security, privacy, and compliance into every layer, building AI systems people can rely on today and in the future. ",
        "Do Differently.: We honour the builders: data scientists, engineers, and leaders who turn ideas into scalable, enterprise-grade systems that push AI from concept to production, changing how business gets done. ",
        "Collaborate to build: We believe the strongest AI solutions are created together. Our community-driven approach fosters shared knowledge, partnerships, and contributions that accelerate innovation and create long-lasting value.",
        "Our collective commitment is what allows us to move fast without compromising trust, innovation without losing sight of governance, and ambition."
    ],
    width: "w-full",
  },
];

export default function AboutV2() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <section className="w-screen container mt-[-5%] max-sm:mt-0 relative z-[10]" id="about" >
      <div className="w-full flex flex-col items-center justify-center gap-y-[10vw] max-sm:gap-y-[15vw]">
        <SectionBreak text={" At Data Science Wizards (DSW), we believe that AI should be accessible, scalable, and enterprise-ready—not locked behind complexity. That’s why we built UnifyAI, a next-generation platform that simplifies the entire AI lifecycle for businesses across industries."} span={true}/>

        <div className="flex flex-col items-end gap-[5vw] max-sm:w-full max-sm:gap-[15vw] max-sm:items-start max-sm:mt-[10vw]">
          {POINTS.map(({ id, text, width, title }) => (
            <div
              key={id}
              className="w-[58%] flex gap-[5vw] items-start about-item max-sm:w-[98%] max-sm:flex-col"
            >
              <div className="w-[15%] relative max-sm:w-[30%]">
                <div className="relative fadeup w-[6.5vw] h-[6.5vw] border border-[#59595980] rounded-full flex items-center justify-center max-sm:w-[18vw] max-sm:h-[18vw] max-sm:border-primary-1">
                  
                  <p className="about-id text-white-200 text-[1.5vw] font-head relative z-[1] max-sm:text-[4.2vw] max-sm:text-primary-1">
                    {id}
                  </p>
                </div>
              </div>
              <div className="space-y-[1.8vw] max-sm:space-y-[4vw]">
                <Copy>
                  <h4 className=" w-[80%] text-50  max-sm:text-[5vw] text-white-200 ">
                    {title}
                  </h4>
                </Copy>
                <Copy>
                  <div className="space-y-[1vw]">
                  {text.map((item,index)=>(
                    <p key={index} className="text-white-300 w-[38vw] max-sm:w-full">{item}</p>
                  ))}
                  </div>
                </Copy>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
