"use client";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";
import SplitText from 'gsap/SplitText';
import SectionBreak from "../Common/SectionBreak";
import Image from "next/image";
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
        <div className="space-y-[3vw] max-sm:space-y-[10vw]">
        <SectionBreak text={" At DSW, we are redefining how enterprises transform AI from a technology experiment into a core business capability. We build the infrastructure that empowers organizations to embed AI at the heart of their operations - securely, at speed, and with measurable outcomes. Our deep tech AI platform, DSW UnifyAI, unifies the entire AI lifecycle, enabling teams to build, deploy, and scale AI and GenAI solutions with governance, observability, and flexibility. "} span={true}/>
        <div className="flex flex-col items-start gap-[2vw] max-sm:gap-[7vw]">
          <Copy>
          <p className="text-30 text-white-200">Locations :</p>
          </Copy>
          <div className="flex gap-[0.7vw] fadeup max-sm:gap-[5vw]">
            <div className="h-[2.5vw] w-[2.5vw] max-sm:w-[12vw] max-sm:h-[12vw] rounded-full overflow-hidden">
              <Image src={"/assets/images/about/india.png"} height={48} width={48} alt="india" className="h-full w-full" quality={100}/>
            </div>
            <span className="h-[2.5vw] w-[1px] bg-[#CACACA75] max-sm:h-[12vw]"/>
             <div className="h-[2.5vw] w-[2.5vw] rounded-full overflow-hidden max-sm:w-[12vw] max-sm:h-[12vw]">
              <Image src={"/assets/images/about/united-kingdom.png"} height={48} width={48} alt="united-kingdom" className="h-full w-full" quality={100}/>
            </div>
            <span className="h-[2.5vw] w-[1px] max-sm:h-[12vw] bg-[#CACACA75]"/>
             <div className="h-[2.5vw] w-[2.5vw] rounded-full overflow-hidden max-sm:w-[12vw] max-sm:h-[12vw]">
              <Image src={"/assets/images/about/ireland.png"} height={48} width={48} alt="ireland" className="h-full w-full" quality={100}/>
            </div>
            <span className="h-[2.5vw] w-[1px] bg-[#CACACA75] max-sm:h-[12vw]"/>
             <div className="h-[2.5vw] w-[2.5vw] rounded-full overflow-hidden max-sm:w-[12vw] max-sm:h-[12vw]">
              <Image src={"/assets/images/about/usa.png"} height={48} width={48} alt="usa" className="h-full w-full" quality={100}/>
            </div>


          </div>
        </div>
        </div>

        <div className="flex flex-col items-end gap-[5vw] max-md:w-full max-md:gap-[10vw] max-sm:gap-[15vw] max-md:items-start max-md:mt-[10vw]">
          {POINTS.map(({ id, text, width, title }) => (
            <div
              key={id}
              className="w-[55%] flex gap-[5vw] max-sm:gap-[7vw] items-start about-item max-sm:flex-col max-sm:w-[98%] max-md:w-[100%] max-md:flex-col"
            >
              <div className="w-[15%] relative max-sm:w-[30%]">
                 <div className="relative fadeup w-[6.5vw] h-[6.5vw] max-md:h-[12vw] max-md:w-[12vw] border border-[#59595980] rounded-full flex items-center justify-center max-sm:w-[18vw] max-sm:h-[18vw] max-sm:border-primary-1">
                  
                  <p className="about-id text-white-200 text-[1.5vw] max-md:text-[3.5vw] font-head relative z-[1] max-sm:text-[4.5vw] max-sm:text-primary-1">
                    {id}
                  </p>
                </div>
              </div>
              <div className="space-y-[1.8vw] max-sm:space-y-[4vw] w-full">
                <Copy>
                  <h4 className=" w-[85%] text-50  max-sm:text-[5vw] text-white-200 ">
                    {title}
                  </h4>
                </Copy>
               
                  <div className="w-[40vw] max-sm:w-full space-y-[1vw] fadeup">
                  {text.map((item,index)=>(
                    <p key={index} className="text-white-300  max-sm:w-full">{item}</p>
                  ))}
                  </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
