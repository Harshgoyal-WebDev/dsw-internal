import React from "react";

const Efficiency = () => {
  return (
    <section className="container h-fit">
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
          <h2 className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[5.2vw] font-body  ">
            50%
          </h2>
          <p className="text-white-300">
            faster time to market for AI and GenAI use cases
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%]">
          <h2 className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[5.2vw] font-body  ">
            60%
          </h2>
          <p className="text-white-300">
            reduction in TCO
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%]">
          <h2 className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[5.2vw] font-body  ">
            80%
          </h2>
          <p className="text-white-300">
            drop in manual tasks across claims and servicing
          </p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-start gap-[1vw] w-[20%]">
          <h2 className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[5.2vw] font-body  ">
            30
          </h2>
          <p className="text-white-300">
            days or less to go live with AI use cases & GenAI in hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Efficiency;



