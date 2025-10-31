import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import Image from "next/image";

const Proof = () => {
  return (
    <section className="h-full w-full " id="proof">
      <div className="w-full h-[140vh] max-sm:h-[160vh] container space-y-[5vw] max-sm:space-y-[15vw] max-md:space-y-[10vw]">
        <div className="space-y-[1.5vw] max-sm:space-y-[10vw] w-[40%] max-md:w-full max-md:space-y-[7vw]">
          <h2 className="text-90 headingAnim">Proof and Recognition</h2>
          <div className="flex gap-6 max-md:flex-col max-md:w-fit max-sm:gap-[4vw] fadeup">
            <PrimaryButton text={"Read News & Press"} href={"/news"} />
            <WhiteButton text={"View Case Studies"} href={"/"} />
          </div>
        </div>
        <div className="future-card  grid grid-cols-3 grid-rows-6 gap-x-[1.5vw] max-md:flex max-md:flex-wrap max-sm:flex-col max-md:gap-[4vw] max-sm:gap-[8vw] max-md:justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Proof;

const Card = ({ img, para }) => {
  return (
    <>
      <div className="flex w-full justify-start fadeup ">
        <div
          className="relative w-[30vw] max-md:w-full rounded-[2vw] group cursor-pointer
    overflow-hidden flex flex-col items-center border transition-opacity border-[#59595980] 
    justify-between p-[2.5vw] max-sm:p-[5vw] max-sm:py-[8vw] px-[1vw] h-[22vw] max-sm:rounded-3xl max-sm:h-[35vh] background-glass backdrop-blur-[1vw] max-md:h-[55vw] max-md:rounded-[3vw] max-md:py-[5vw]"
        >
          <div
            className="absolute inset-0 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
          />

          <div className="relative z-10 flex flex-col items-center justify-between h-full">
            <div className="h-[8vw] w-[8vw] max-sm:h-[25vw] max-sm:w-[25vw] max-md:w-[15vw] max-md:h-[15vw]">
              <Image
                src={"/assets/images/homepage/recognized/top-10.png"}
                height={192}
                width={153}
                alt="award"
              />
            </div>

            <p
              className="text-white-300 w-[90%] pb-[1vw] 
        transition-colors duration-500 ease-in-out text-center"
            >
              {para}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
