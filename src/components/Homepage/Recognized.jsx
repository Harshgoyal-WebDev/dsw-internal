import Image from "next/image";
import React from "react";
import Copy from "../Animations/Copy";

const AwardItem = ({ img, title, year }) => {
  return (
    <>
      <div className="flex-shrink-0 flex items-center justify-center gap-[1vw] w-[30vw] max-md:w-[70vw] max-sm:w-fit  max-md:gap-[2vw]">
        <div className="w-[8vw] h-auto max-md:w-[18vw] max-sm:w-[20vw]">
          <Image
            src={img}
            height={146}
            width={128}
            alt={title}
            className="h-full w-full"
          />
        </div>
        <div className="space-y-[1vw]">
          <p className="font-head text-30 text-[#E8E8E8]">
            {title}
          </p>
          <p className="text-[#CACACA]">{year}</p>
        </div>
      </div>
    </>
  );
};
const Recognized = () => {
  return (
    <section
      id="recognized"
      className="h-full w-screen  relative overflow-hidden container"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[3vw]">
        <div className="text-center  space-y-5 mt-10 max-md:space-y-10">
          <h2 className="text-60  headingAnim text-[#E8E8E8]">
            Recognized for real-world AI enterprise impact
          </h2>
          <Copy>
            <p className=" text-[#CACACA] w-[60%] mx-auto leading-[1.5] max-md:w-full">
              Trusted by enterprises. Validated by the world&apos;s leading
              benchmarks
            </p>
          </Copy>
        </div>

        <div className="w-full flex items-center justify-between px-[5vw] mt-[3vw] fadeup max-md:flex-wrap max-md:mt-[6vw] max-md:gap-y-[5vw] ">
          <div className="h-[10vw] w-[10vw] max-md:h-[22vw] max-md:w-[22vw]">
            <Image
              src={"/assets/images/homepage/recognized/soc-complaint-2.png"}
              height={178}
              width={178}
              alt="soc-compliant"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[10vw] w-[10vw] max-md:h-[22vw] max-md:w-[22vw]">
            <Image
              src={"/assets/images/homepage/recognized/iso-certified-2.png"}
              height={178}
              width={178}
              alt="iso-certified"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[10vw] w-[10vw] max-md:h-[22vw] max-md:w-[22vw]">
            <Image
              src={"/assets/images/homepage/recognized/hipaa-compliant-2.png"}
              height={178}
              width={178}
              alt="hipaa-compliant"
              className="h-full w-full object-contain scale-[1.12]"
            />
          </div>
          <div className="h-[10vw] w-[35vw] max-md:h-[30vw] max-md:w-[90vw]">
            <Image
              src={"/assets/images/homepage/recognized/f6s-top-company.png"}
              height={178}
              width={681}
              alt="f6s-top-company"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="marquee fadeup mt-[3vw] max-md:my-[7vw]">
          <div className="marquee__track recognized max-md:space-x-[7vw] max-sm:space-x-[10vw]">
            {awards.map((item, index) => (
              <AwardItem
                key={index}
                img={item.img}
                title={item.title}
                year={item.year}
              />
            ))}
            {awards.map((item, index) => (
              <AwardItem
                key={index}
                img={item.img}
                title={item.title}
                year={item.year}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognized;

const awards = [
  {
    img: "/assets/images/homepage/recognized/top-10-ai-startup.png",
    title: "Top 10 AI Startups",
    year: "Ireland 2024",
  },
  {
    img: "/assets/images/homepage/recognized/winner-of-pitchjam.png",
    title: "Winner of Pitchjam",
    year: "Ireland 2024",
  },
  {
    img: "/assets/images/homepage/recognized/best-startup-application.png",
    title: "Best startup application",
    year: "Dublin 2023",
  },
  {
    img: "/assets/images/homepage/recognized/challenger-in-pema-quadrant.png",
    title: "Challeneger in PeMa Quadrant",
    year: "India 2023",
  },
  {
      img: "/assets/images/homepage/recognized/top-ai-startup.png",
      title: "Top AI Startup",
      year: "India 2022"
  },
];
