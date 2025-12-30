'use client'
import React from "react";
import Image from "next/image";

const Mission = () => {
  

  return (
    <section className="h-full w-screen " id="mission">
      <div className="h-full w-full container flex flex-col items-center justify-center space-y-[5vw] max-sm:space-y-[9vw]">
        <div className="space-y-[2vw]  max-sm:space-y-[8vw] max-md:space-y-[4vw]">
          <div className="fadeup">
            <div className="h-full w-full  max-sm:w-full rounded-[2vw] max-sm:rounded-3xl border border-white/20 py-[3vw] max-sm:py-[8vw] max-sm:px-[6vw] px-[3vw] max-md:px-[4vw] max-md:py-[5vw] max-md:rounded-[3vw]  relative group flex flex-col items-start overflow-hidden  hover:border-[#1727FF] duration-300 transition-all ease-in ">
              <div className="relative z-[10] space-y-[2vw] max-sm:space-y-[8vw] max-md:space-y-[4vw]">
                <div className=" h-[4.2vw] w-[4.2vw] flex items-center justify-center text-30 max-md:h-[12vw] max-md:w-[12vw]">
                  <Image
                    src={"/assets/icons/about/mission.svg"}
                    height={80}
                    width={80}
                    alt="mission icon"
                    className=" group-hover:brightness-[100] duration-500 ease-in-out"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3 className="text-50 font-head"> Mission</h3>
                <p className="text-white-300 font-medium">
                 Make AI adoption real, scalable, and responsible for every enterprise. Enable businesses to harness AI responsibly, transforming operations, improving lives, and solving real-world challenges, while fostering a collaborative AI community that drives innovation forward.
                </p>
              </div>
            </div>
          </div>
          <div className="fadeup">
            <div className="h-full w-full  max-sm:w-full rounded-[2vw] max-sm:rounded-3xl border border-white/20 py-[3vw] max-sm:py-[8vw] max-sm:px-[6vw] px-[3vw] max-md:px-[4vw] max-md:py-[5vw] max-md:rounded-[3vw]  relative group flex flex-col items-start overflow-hidden  hover:border-[#1727FF] duration-300 transition-all ease-in">
              <div className="relative z-[10] space-y-[2vw] max-sm:space-y-[8vw] max-md:space-y-[4vw] ">
                <div className=" h-[4.2vw] w-[4.2vw] flex items-center justify-center text-30 max-md:h-[12vw] max-md:w-[12vw]">
                  <Image
                    src={"/assets/icons/about/vision.svg"}
                    height={80}
                    width={80}
                    alt="vision icon"
                    className="group-hover:brightness-[100] duration-500 ease-in-out"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3 className="text-50 font-head"> Vision</h3>
                <div className="space-y-[1.5vw] max-sm:space-y-[4vw]">
                  <p className="text-white-300">
                    We envision a future where enterprises run on a unified AI operating layer that is open, governed, and built to serve the industries were trust and precision matter most, beginning with BFSI.​
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fadeup">
            <div className="h-full w-full  max-sm:w-full rounded-[2vw] max-sm:rounded-3xl border border-white/20 py-[3vw] max-sm:py-[8vw] max-sm:px-[6vw] px-[3vw] max-md:px-[4vw] max-md:py-[5vw] max-md:rounded-[3vw]  relative group flex flex-col items-start overflow-hidden  hover:border-[#1727FF] duration-300 transition-all ease-in">
              <div className="relative z-[10] space-y-[2vw] max-sm:space-y-[8vw] max-md:space-y-[4vw]">
                <div className=" h-[4.2vw] w-[4.2vw] flex items-center justify-center text-30 max-md:h-[12vw] max-md:w-[12vw]">
                  <Image
                    src={"/assets/icons/about/values.svg"}
                    height={80}
                    width={80}
                    alt="values icon"
                    className="group-hover:!text-white group-hover:brightness-[100] duration-500 ease-in-out"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <h3 className="text-50 font-head"> Values</h3>
                <div className="space-y-[1.5vw] text-white-300 max-sm:space-y-[4vw]">
                  
                  <div className={`space-y-[1.5vw] max-sm:space-y-[4vw] transition-all duration-500 ease-in-out overflow-hidden`}>
                    <p>
                      <span className="font-semibold">Outcomes first</span> : AI that delivers measurable business value.
                    </p>
                    <p>
                      <span className="font-semibold">Trust by design</span> : Security, privacy, and compliance form the foundation, especially important for BFSI enterprises.
                    </p>
                    <p>
                      <span className="font-semibold">Do Differently</span> :
                     A culture that celebrates the builders who take AI from idea to production. 
                    </p>
                    <p>
                      <span className="font-semibold">Scale with sense</span> :
                     Reuse, orchestration, and predictable performance applied across every layer. 
                    </p>
                    
                  </div>
                  
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