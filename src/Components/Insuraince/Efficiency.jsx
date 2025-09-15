'use client'
import React, {useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Efficiency = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {
 
      
      const tl= gsap.timeline({
        scrollTrigger: {
          trigger:'#efficiency-container',
          start:'top 30%',
          markers:false,
          // scrub:true,
        }
      })

      
        tl.to('.left-timer', {
            y:'-18vh',
            // ease: 'power1.out',
            duration:1.2,
        })
        .to('.right-timer', {
            y:'-18vh',
            // ease: 'power1.out',
            duration:1.2,
            delay:0.2,
        },'<')
      
    })
    return () => ctx.revert()
  },[])

  const TimeLd = ["0", "2","4", "5"];
  const TimeRd = ["0", "5", "0", "0"];

  const TCOLd =["0", "2","4", "6"];
  const TCORd =["0", "7","5", "0"];

  const TaskLd = ["0", "3","6", "8"];
  const TaskRd = ["0", "0","3", "0"];

  const DaysLd = ["0", "1","2", "3"];
  const DaysRd = ["0", "4","7", "0"];

  return (
    <div id="efficiency-container" className="container h-fit">
      <div className="space-y-[3vw]">
      <h2 className="title-1 text-white-200 text-center">
        Built for the Complexity
        <br />
        of the Insurance Industry 
      </h2>
      <p className="text-center text-white-300">
        insurAInce is proven across diverse insurance environments to
        <br />
        drive speed, efficiency, and accuracy where it counts the most. 
      </p>
      </div>

      <div className="w-full flex justify-between items-start pt-[5vw]">
        {/* Stat 1 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%]">
          <div className="overflow-hidden h-[10vh] w-fit items-center flex justify-start">
            <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[20vh]">


            {TimeLd.map((digit, idx) => (
              <p
              key={idx} className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-body ">
                      {digit}
                  </p>
            ))}
            </div>

            <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[20vh]">
              {TimeRd.map((digit, idx) => (
              <p
              key={idx} className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-body ">
                      {digit}
                  </p>
            ))}
            </div>
            <div>

            <p className="bg-gradient-to-r font-body mt-[0.8vw] from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-display">
                %
            </p>
            </div>
          </div>

         

          <p className="tracking-wider text-white-300 leading-[1.4]">
            faster time to market for AI and GenAI use cases
          </p>
         
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%] ">
           <div className="overflow-hidden h-[10vh]  w-fit items-center flex justify-start">
            <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[20vh]">


            {TCOLd.map((digit, idx) => (
              <p
              key={idx} className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-body ">
                      {digit}
                  </p>
            ))}
            </div>

            <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[20vh]">
              {TCORd.map((digit, idx) => (
              <p
              key={idx} className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-body ">
                      {digit}
                  </p>
            ))}
            </div>
            <div>

            <p className="bg-gradient-to-r font-body mt-[0.8vw] from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-display">
                %
            </p>
            </div>
          </div>
          <p className="tracking-wider text-white-300 leading-[1.4]">
            reduction in TCO
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%]">
          <div className="overflow-hidden h-[10vh]  w-fit items-center flex justify-start">
            <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[20vh]">


            {TaskLd.map((digit, idx) => (
              <p
              key={idx} className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-body ">
                      {digit}
                  </p>
            ))}
            </div>

            <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[20vh]">
              {TaskRd.map((digit, idx) => (
              <p
              key={idx} className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-body ">
                      {digit}
                  </p>
            ))}
            </div>
            <div>

            <p className="bg-gradient-to-r font-body mt-[0.8vw] from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-display">
                %
            </p>
            </div>
          </div>
          <p className="text-white-300 leading-[1.4] tracking-wider">
            drop in manual tasks across claims and servicing
          </p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%]">
          <div className="overflow-hidden h-[10vh]  w-fit items-center flex justify-start">
            <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[20vh]">


            {DaysLd.map((digit, idx) => (
              <p
              key={idx} className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-body ">
                      {digit}
                  </p>
            ))}
            </div>

            <div className="w-fit flex  flex-col items-center right-timer justify-center translate-y-[20vh]">
              {DaysRd.map((digit, idx) => (
              <p
              key={idx} className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.2vw] font-body ">
                      {digit}
                  </p>
            ))}
            </div>
            <div>

            {/* <p className="bg-gradient-to-r font-body mt-[0.8vw] from-[#F16B0D] to-[#E61216] bg-clip-text text-transparent text-[4.2vw] font-display">
                %
            </p> */}
            </div>
          </div>
          <p className="text-white-300 tracking-wider leading-[1.4]">
            days or less to go live with AI use cases & GenAI in hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Efficiency;



