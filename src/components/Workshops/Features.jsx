import Image from "next/image";
import React from "react";

const FeaturesCard = ({ icon, title, para }) => {
  return (
    <>
      <div className=" relative group  max-md:space-y-[10vw] max-md:w-full w-[45%]">
        <div className=" pt-[3vw] space-y-[1.5vw] max-md:flex max-md:flex-col max-md:items-center max-md:space-y-[6vw] max-md:mt-[10vw] fadeup  w-full">
          <Image
            src={icon}
            height={98}
            width={98}
            alt={title}
            className="w-[5vw] h-[5vw] object-contain max-md:w-[25vw] max-md:h-[25vw]"
          />
          <h4 className="text-30 text-white-200 max-md:!text-[7.5vw] max-md:w-[95%] max-md:text-center max-md:h-fit">
            {title}
          </h4>
          <p className="text-white-300  w-[95%] max-md:w-[95%] max-md:text-center max-md:h-auto">
            {para}
          </p>
        </div>
      </div>
    </>
  );
};
const Features = ({ featuresData }) => {
  return (
    <section
      className="h-full max-md:relative max-md:mt-[80%] max-sm:mt-[20%] max-md:h-fit max-md:z-[20] w-screen"
      id="features"
    >
      <div className="h-full w-full container space-y-[3vw]">
        <h2 className="text-90 headingAnim text-white-200 max-md:text-center">
          Who It’s For
        </h2>

        <div className=" w-full flex  flex-wrap gap-y-[3vw] justify-between">
          {featuresData.map((card, index) => (
            <FeaturesCard
              key={index}
              icon={card.icon}
              title={card.title}
              para={card.para}
              id={card.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
