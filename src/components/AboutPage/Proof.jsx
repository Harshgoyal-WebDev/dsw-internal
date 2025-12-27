import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import Image from "next/image";

const Proof = () => {
  return (
    <section className="h-[150vh] w-full  max-sm:pt-[15%] container max-sm:h-[140vh]" id="proof">
      <div className="w-full h-fit space-y-[7vw] max-sm:space-y-[15vw] max-md:space-y-[10vw]">
        <div className="space-y-[2.5vw] max-sm:space-y-[10vw] w-full max-md:space-y-[7vw]">
          <h2 className="text-90 headingAnim w-[40%] max-md:w-full">Proof and Recognition</h2>
          <div className="flex gap-6 max-md:flex-col max-md:w-fit max-sm:gap-[4vw] fadeup">
            <PrimaryButton text={"Read News & Press"} href={"/news"} />
            <WhiteButton text={"View Case Studies"} href={"#"} />
          </div>
        </div>
        <div className="h-fit grid grid-cols-3 grid-rows-6 gap-x-[1.5vw] max-md:flex max-md:flex-wrap max-sm:flex-col max-md:gap-[4vw] max-sm:gap-[8vw] max-md:justify-center">
          <div className="col-start-1 row-start-1 max-md:w-full">
            <Card
              para={
                "Ranked among Ireland’s Top AI Companies by F6S in 2025 ​"
              }
              ImageSrc={"/assets/images/homepage/recognized/top-10.png"}
            />
          </div>
          <div className="col-start-2 row-start-2 -mt-[35%] max-md:mt-0 max-md:w-full ">
            <Card
              para={
                "Recognized by industry and research bodies across India and Ireland from 2022 to 2025 "
              }
              ImageSrc={"/assets/images/homepage/recognized/top-10.png"}
              />
          </div>
          <div className="col-start-3 row-start-3 -mt-[70%] max-md:mt-0 max-md:w-full">
            <Card
              para={
                "Proven and compliant across regulated environments, including BFSI, with seamless integration into legacy enterprise systems ​"
              }
              ImageSrc={"/assets/images/homepage/recognized/top-10.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;

const Card=({para, ImageSrc})=>{
    return(
        <>
        <div className="flex w-full justify-start fadeup">
          <div
            className="relative w-[32vw] rounded-[1.5vw] group cursor-pointer
    overflow-hidden flex flex-col items-center border transition-opacity border-[#59595980] 
    justify-between p-[2.5vw] px-[1vw] h-[22vw] background-glass backdrop-blur-[1vw] max-md:w-full max-md:h-full max-md:rounded-[3vw]"
          >
            <div
              className="absolute inset-0 rounded-[1.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out max-md:rounded-[3vw]"
            />

            <div className="relative z-10 flex flex-col items-center justify-between h-full max-md:gap-[7vw]">
                <div className='h-[8vw] w-[8vw] max-md:h-[18vw] max-md:w-[18vw]'>
              <Image src={ImageSrc} height={192} width={153} alt='award'/>
              </div>

              <p
                className="text-white-300 w-[95%] pb-[1vw] 
        transition-colors duration-500 ease-in-out text-center"
              >
               {para}
              </p>
            </div>
          </div>
        </div>
        </>
    )}
