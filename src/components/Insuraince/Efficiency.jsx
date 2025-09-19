"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Copy from "../Animations/Copy";

const Efficiency = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#efficiency-container",
            start: "top 30%",
            markers: false,
          },
        });

        tl.to(".left-timer", {
          yPercent: -75,
          // ease: 'power1.out',
          duration: 1.2,
        }).to(
          ".right-timer",
          {
            yPercent: -75,
            // ease: 'power1.out',
            duration: 1.2,
            delay: 0.2,
          },
          "<"
        );
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#efficiency-container",
            start: "top 30%",
            markers: false,
          },
        });

        tl.to(".left-timer", {
          yPercent: -75,
          // stagger:0.5,
          duration: 2,
        }).to(
          ".right-timer",
          {
            yPercent: -75,
            duration: 2,
            // stagger:0.5,
            delay: 0.2,
          },
          "<"
        );
      }
    });

    return () => ctx.revert();
  }, [isMobile]);

  const TimeLd = ["0", "2", "4", "5"];
  const TimeRd = ["0", "5", "0", "0"];

  const TCOLd = ["0", "2", "4", "6"];
  const TCORd = ["0", "7", "5", "0"];

  const TaskLd = ["0", "3", "6", "8"];
  const TaskRd = ["0", "0", "3", "0"];

  const DaysLd = ["0", "1", "2", "3"];
  const DaysRd = ["0", "4", "7", "0"];

  return (
    <section
      id="efficiency-container"
      className="container h-fit space-y-[8vw]"
    >
      <div className="space-y-[2vw] max-sm:space-y-[8vw]">
        <h2 className="text-90 text-white-200 text-center headingAnim">
          Built for the Complexity
          <br />
          of the Insurance Industry 
        </h2>

        <Copy>
          <p className="text-center text-white-300">
            insurAInce is proven across diverse insurance environments to
            <br />
            drive speed, efficiency, and accuracy where it counts the most. 
          </p>
        </Copy>
      </div>

      <div className="w-full flex justify-between items-start max-sm:hidden">
        {/* Stat 1 */}
         <div className="flex flex-col items-start gap-[1vw] w-[20%] ">
          <div className="overflow-hidden h-[10vh]  w-fit items-center flex justify-start">
            <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[38%]">
              {TimeLd.map((digit, idx) => (
                <p
                  key={idx}
                  className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] font-head "
                >
                  {digit}
                </p>
              ))}
            </div>

            <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[38%]">
              {TCORd.map((digit, idx) => (
                <p
                  key={idx}
                  className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] font-head "
                >
                  {digit}
                </p>
              ))}
            </div>
            <div>
              <p className="bg-gradient-to-r font-head  from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] ">
                %
              </p>
            </div>
          </div>

          <Copy>
            <p className="tracking-wider text-white-300 leading-[1.4]">
               faster time to market for AI and GenAI use cases
            </p>
          </Copy>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%] ">
          <div className="overflow-hidden h-[10vh]  w-fit items-center flex justify-start">
            <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[38%]">
              {TCOLd.map((digit, idx) => (
                <p
                  key={idx}
                  className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] font-head "
                >
                  {digit}
                </p>
              ))}
            </div>

            <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[38%]">
              {TCORd.map((digit, idx) => (
                <p
                  key={idx}
                  className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] font-head "
                >
                  {digit}
                </p>
              ))}
            </div>
            <div>
              <p className="bg-gradient-to-r font-head  from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] ">
                %
              </p>
            </div>
          </div>

          <Copy>
            <p className="tracking-wider text-white-300 leading-[1.4]">
              reduction in TCO
            </p>
          </Copy>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%]">
          <div className="overflow-hidden h-[10vh]  w-fit items-center flex justify-start">
            <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[38%]">
              {TaskLd.map((digit, idx) => (
                <p
                  key={idx}
                  className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] font-head "
                >
                  {digit}
                </p>
              ))}
            </div>

            <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[38%]">
              {TaskRd.map((digit, idx) => (
                <p
                  key={idx}
                  className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] font-head "
                >
                  {digit}
                </p>
              ))}
            </div>
            <div>
              <p className="bg-gradient-to-r font-head from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] ">
                %
              </p>
            </div>
          </div>
          <Copy>
            <p className="text-white-300 leading-[1.4] tracking-wider">
              drop in manual tasks across claims and servicing
            </p>
          </Copy>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%]">
          <div className="overflow-hidden h-[10vh]  w-fit items-center flex justify-start">
            <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[38%]">
              {DaysLd.map((digit, idx) => (
                <p
                  key={idx}
                  className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] font-head "
                >
                  {digit}
                </p>
              ))}
            </div>

            <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[38%]">
              {DaysRd.map((digit, idx) => (
                <p
                  key={idx}
                  className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] font-head "
                >
                  {digit}
                </p>
              ))}
            </div>
            <div></div>
          </div>
          <Copy>
            <p className="text-white-300 tracking-wider leading-[1.4]">
              days or less to go live with AI use cases & GenAI in hours
            </p>
          </Copy>
        </div>
      </div>

      <div className="hidden max-sm:block max-sm:mt-[5vh]">
        <div className="flex flex-col gap-[17vw]">
          {/* STAT 1  MOBILE */}
          <div className="flex flex-col items-center gap-[4vw] w-[100%]">
            <div className="overflow-hidden  h-[10vh]  w-fit items-center flex justify-start">
              <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[38%]">
                {TimeLd.map((digit, idx) => (
                  <p
                    key={idx}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] font-head "
                  >
                    {digit}
                  </p>
                ))}
              </div>

              <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[38%]">
                {TimeRd.map((digit, idx) => (
                  <p
                    key={idx}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] font-head "
                  >
                    {digit}
                  </p>
                ))}
              </div>
              <div>
                <p className="bg-gradient-to-r font-head from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] ">
                  %
                </p>
              </div>
            </div>

            <Copy>
              <p className="tracking-wider text-white-300 leading-[1.4] text-center">
                faster time to market for AI and GenAI use cases
              </p>
            </Copy>
          </div>

          {/* STAT 2 MOBILE */}
          <div className="flex flex-col items-center gap-[4vw]  w-[100%]">
            <div className="overflow-hidden  h-[10vh]  w-fit items-center flex justify-start">
              <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[38%]">
                {TCOLd.map((digit, idx) => (
                  <p
                    key={idx}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] font-head "
                  >
                    {digit}
                  </p>
                ))}
              </div>

              <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[38%]">
                {TCORd.map((digit, idx) => (
                  <p
                    key={idx}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] font-head "
                  >
                    {digit}
                  </p>
                ))}
              </div>
              <div>
                <p className="bg-gradient-to-r font-head from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] ">
                  %
                </p>
              </div>
            </div>

            <Copy>
              <p className="tracking-wider text-white-300 leading-[1.4] text-center">
                reduction in TCO
              </p>
            </Copy>
          </div>

          {/* STAT 3 MOBILE */}
          <div className="flex flex-col items-center gap-[4vw] w-[100%]">
            <div className="overflow-hidden  h-[10vh]  w-fit items-center flex justify-start">
              <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[38%]">
                {TaskLd.map((digit, idx) => (
                  <p
                    key={idx}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] font-head "
                  >
                    {digit}
                  </p>
                ))}
              </div>

              <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[38%]">
                {TaskRd.map((digit, idx) => (
                  <p
                    key={idx}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] font-head "
                  >
                    {digit}
                  </p>
                ))}
              </div>
              <div>
                <p className="bg-gradient-to-r font-head from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] ">
                  %
                </p>
              </div>
            </div>

            <Copy>
              <p className="tracking-wider text-white-300 leading-[1.4] text-center">
                drop in manual tasks across claims and servicing 
              </p>
            </Copy>
          </div>

          {/* STAT 4 MOBILE  */}
          <div className="flex flex-col items-center gap-[4vw] w-[100%]">
            <div className="overflow-hidden  h-[10vh]  w-fit items-center flex justify-start">
              <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[38%]">
                {DaysLd.map((digit, idx) => (
                  <p
                    key={idx}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] font-head "
                  >
                    {digit}
                  </p>
                ))}
              </div>

              <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[38%]">
                {DaysRd.map((digit, idx) => (
                  <p
                    key={idx}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[18vw] font-head "
                  >
                    {digit}
                  </p>
                ))}
              </div>
            </div>

            <Copy>
              <p className="tracking-wider text-white-300 leading-[1.4] text-center">
                days or less to go live with AI use cases & GenAI in hours
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Efficiency;
