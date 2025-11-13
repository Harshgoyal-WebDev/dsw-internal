import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import Image from "next/image";

const Proof = () => {
  return (
    <section className="h-full w-full py-[7%] max-sm:pt-[15%]" id="proof">
      <div className="w-full h-fit space-y-[7vw] max-sm:space-y-[15vw] max-md:space-y-[10vw]">
        <div className="space-y-[2.5vw] max-sm:space-y-[10vw] w-full max-md:space-y-[7vw] px-[5vw] max-sm:px-[7vw]">
          <h2 className="text-90 headingAnim w-[40%] max-md:w-full">Proof and Recognition</h2>
          <div className="flex gap-6 max-md:flex-col max-md:w-fit max-sm:gap-[4vw] fadeup">
            <PrimaryButton text={"Read News & Press"} href={"/news"} />
            <WhiteButton text={"View Case Studies"} href={"/"} />
          </div>
        </div>
        {/* <div className="future-card  grid grid-cols-3 grid-rows-6 gap-x-[1.5vw] max-md:flex max-md:flex-wrap max-sm:flex-col max-md:gap-[4vw] max-sm:gap-[8vw] max-md:justify-center">
          <div className="col-start-1 row-start-1 max-md:w-[47.5%] max-sm:w-full">
            <Card
              para={
                "Recognized among the leading AI startups in India and Ireland from 2022–2025 by industry bodies and research firms "
              }
            />
          </div>
          <div className="col-start-2 row-start-2 -mt-[35%] max-md:mt-0 max-md:w-[47.5%] max-sm:w-full ">
            <Card
              para={
                "Ranked among Ireland’s top 12 AI companies by F6S in 2025 "
              }
            />
          </div>
          <div className="col-start-3 row-start-3 -mt-[70%] max-md:mt-0 max-md:w-[47.5%] max-sm:w-full">
            <Card
              para={
                "Trusted by leading enterprises, fully compliant and proven across complex, regulated environments "
              }
            />
          </div>
        </div> */}
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

export default Proof;


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
    title: "Challenger in PeMa Quadrant",
    year: "India 2023",
  },
  {
      img: "/assets/images/homepage/recognized/top-ai-startup.png",
      title: "Top AI Startup",
      year: "India 2022"
  },
];