import React from "react";

const About = () => {
  return (
    <section className="w-screen px-[5vw] py-[7%]" id="about">
      <div className="w-full flex flex-col items-center justify-center gap-y-[5vw]">
        <h2 className="title-2 headingAnim">Make AI Operational, Not Experimental ​</h2>
        <div className="w-[37%] flex flex-col gap-[2.5vw]">
          <div className="w-full flex gap-[3.2vw] items-center fadeup">
            <div className="w-[15%]">
              <p className="text-primary-1 w-[6vw] h-[6vw] text-[1.5vw] font-head flex items-center justify-center border border-primary-1 rounded-full">
                01
              </p>
            </div>
            <p className="text-[1.5vw]">Cut time to market by 50%</p>
          </div>
          <div className="w-full flex gap-[3.2vw] items-center fadeup">
            <div className="w-[15%]">
              <p className="text-primary-1 w-[6vw] h-[6vw] text-[1.5vw] font-head flex items-center justify-center border border-primary-1 rounded-full">
                02
              </p>
            </div>
            <p className="text-[1.5vw]">Slash TCO by up to 60%</p>
          </div>
          <div className="w-full flex gap-[3.2vw] items-center fadeup">
            <div className="w-[15%]">
              <p className="text-primary-1 w-[6vw] h-[6vw] text-[1.5vw] font-head flex items-center justify-center border border-primary-1 rounded-full">
                03
              </p>
            </div>
            <p  className="text-[1.5vw]">Unified platform, no vendor lock-in</p>
          </div>
          <div className="w-full flex gap-[3.2vw] items-center fadeup">
            <div className="w-[15%]">
              <p className="text-primary-1 !w-[6vw] h-[6vw] text-[1.5vw] font-head flex items-center justify-center border border-primary-1 rounded-full">
                04
              </p>
            </div>
            <p className="text-[1.5vw]">Predictable scaling with lower cost per use case</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
