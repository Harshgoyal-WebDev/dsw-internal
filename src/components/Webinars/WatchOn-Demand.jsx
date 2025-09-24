import React from "react";
import VideoListing from "../ProductVideos/VideoListing";
import Copy from "../Animations/Copy";

const WatchOnDemand = () => {
  return (
    <section className=" w-screen  max-sm:mt-0 overflow-hidden" id="workshops">
      <div className=" max-sm:space-y-[5vw] w-full flex flex-col items-center justify-center">
        <div className="w-[45%] space-y-[1.5vw] max-md:space-y-[5vw] max-sm:space-y-[7vw]  text-center max-md:w-full max-md:px-[7vw]">
          <h2 className="text-90 headingAnim  max-sm:w-full ">
            Missed a Session? Watch On - Demand
          </h2>
          <Copy>
            <p className="text-white-300 px-[2vw]">
              Explore our library of recorded webinars and event highlights.
              Learn at your own pace and share with your team.
            </p>
          </Copy>
        </div>
        <VideoListing margin={false} />
      </div>
    </section>
  );
};

export default WatchOnDemand;
