import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="h-full w-screen " id="mission">
      <div className="h-full w-full container flex flex-col items-center justify-center space-y-[5vw] max-sm:space-y-[9vw]">
        <div className="space-y-[3vw]  max-sm:space-y-[8vw]">
          <div className="fadeup">
            <div className="h-full w-full  max-sm:w-full rounded-[2vw] max-sm:rounded-3xl border border-white/20 py-[3vw] max-sm:py-[8vw] max-sm:px-[6vw] px-[3vw]  relative group flex flex-col items-start overflow-hidden border-l-0 border-r-0 hover:border-[#1727FF] duration-300 transition-all ease-in ">
              <div className="relative z-[10] space-y-[2vw] max-md:space-y-[8vw]">
                <div className=" h-[4.2vw] w-[4.2vw] flex items-center justify-center text-30 max-md:h-[12vw] max-md:w-[12vw]">
                  <Image
                    src={"/assets/icons/about/mission.svg"}
                    height={80}
                    width={80}
                    alt="mission icon"
                    className="group-hover:!text-white group-hover:brightness-[20] duration-500 ease-in-out"
                  />
                </div>
                <h3 className="text-50 font-head"> Mission</h3>
                <p className="text-white-300 font-medium">
                  Enable enterprises to harness AI responsibly and at scale,
                  transforming operations, improving lives, and solving
                  real-world challenges, while fostering a collaborative AI
                  community that drives innovation forward. 
                </p>
              </div>
            </div>
          </div>
          <div className="fadeup">
            <div className="h-full w-full  max-sm:w-full rounded-[2vw] max-sm:rounded-3xl border border-white/20 py-[3vw] max-sm:py-[8vw] max-sm:px-[6vw] px-[3vw]  relative group flex flex-col items-start overflow-hidden border-l-0 border-r-0 hover:border-[#1727FF] duration-300 transition-all ease-in">
              <div className="relative z-[10] space-y-[2vw] max-md:space-y-[8vw]">
                <div className=" h-[4.2vw] w-[4.2vw] flex items-center justify-center text-30 max-md:h-[12vw] max-md:w-[12vw]">
                  <Image
                    src={"/assets/icons/about/vision.svg"}
                    height={80}
                    width={80}
                    alt="vision icon"
                    className="group-hover:brightness-[20] duration-500 ease-in-out"
                  />
                </div>
                <h3 className="text-50 font-head"> Vision</h3>
                <div className="space-y-[1.5vw] max-sm:space-y-[4vw]">
                  <p className="text-white-300">
                    Become the backbone of enterprise AI. Just as Linux became
                    the foundation of modern computing, DSW UnifyAI is emerging
                    as the OS for AI - a platform that brings together open
                    innovation, governance, and scale. We are building the
                    next-generation AI infrastructure enterprises can trust,
                    enabling them to adapt, evolve, and serve their customers
                    with confidence and speed.   
                  </p>
                  <p className="text-white-300">
                    Our vision extends beyond technology, it’s about cultivating
                    a thriving ecosystem where enterprises, developers, and
                    partners co-create the future of AI. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fadeup">
            <div className="h-full w-full  max-sm:w-full rounded-[2vw] max-sm:rounded-3xl border border-white/20 py-[3vw] max-sm:py-[8vw] max-sm:px-[6vw] px-[3vw]  relative group flex flex-col items-start overflow-hidden border-l-0 border-r-0 hover:border-[#1727FF] duration-300 transition-all ease-in">
              <div className="relative z-[10] space-y-[2vw] max-md:space-y-[8vw]">
                <div className=" h-[4.2vw] w-[4.2vw] flex items-center justify-center text-30 max-md:h-[12vw] max-md:w-[12vw]">
                  <Image
                    src={"/assets/icons/about/values.svg"}
                    height={80}
                    width={80}
                    alt="values icon"
                    className="group-hover:!text-white group-hover:brightness-[20] duration-500 ease-in-out"
                  />
                </div>
                <h3 className="text-50 font-head"> Values</h3>
                <div className="space-y-[1.5vw] text-white-300 max-sm:space-y-[4vw]">
                  <p>
                    We build solutions with purpose, helping enterprises connect
                    technology to meaningful outcomes that enrich lives and
                    solve real-world challenges. 
                  </p>
                  <p>
                    <span className="font-medium">Trust by design</span> : Trust
                    isn’t just a feature, it’s the foundation. We believe people
                    don’t buy what you do, they buy why you do it. That’s why we
                    embed security, privacy, and compliance into every layer,
                    building AI systems people can rely on today and in the
                    future.
                  </p>
                  <p>
                    <span className="font-medium">Do Differently</span> : We
                    honour the builders: data scientists, engineers, and leaders
                    who turn ideas into scalable, enterprise-grade systems that
                    push AI from concept to production, changing how business
                    gets done.
                  </p>
                  <p>
                    <span className="font-medium">Collaborate to build</span> :
                    We believe the strongest AI solutions are created together.
                    Our community-driven approach fosters shared knowledge,
                    partnerships, and contributions that accelerate innovation
                    and create long-lasting value.
                  </p>
                  <p>
                    Our collective commitment is what allows us to move fast
                    without compromising trust, innovation without losing sight
                    of governance, and ambition. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
