import React from "react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard/SpotLightCard";
import Copy from "../Animations/Copy";

const SuccessStories = () => {
  return (
    <>
      <section
        id="success-stories"
        className="h-full  w-screen background-radial container"
      >
        <div className="w-full h-full max-sm:space-y-[15vw]">
          <div className="w-full flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-[5vw] max-sm:gap-[10vw]">
            <div className="space-y-5 mt-10 w-[35%] max-md:w-full">
              <h2 className="text-60 w-[95%] headingAnim text-[#E8E8E8] max-md:w-[75%]">
                Trusted by Leaders in BFSI and Beyond​
              </h2>
              <Copy>
                <p className=" text-[#CACACA] leading-[1.5]">
                  Explore how we’ve helped businesses like yours achieve success
                  with innovative technology solutions.
                </p>
              </Copy>
            </div>
            {/* <div className="fadeup">
              <PrimaryButton text={"View All"} href="#" />
            </div> */}
          </div>

          <div className="w-full h-full grid grid-cols-3  gap-y-[1.2vw] gap-x-[1vw] mt-[5vw] max-md:mt-[10vw] max-md:grid-cols-1 max-md:gap-x-[3vw] max-md:gap-y-[3vw] max-sm:gap-y-[5vw]">
            <LinkCard
              title={"Canara HSBC achieves <span class='text-primary-2'>faster deployment</span> on persistency prediction and customer retention"}
              link={"#"}
              width={"w-[80%] max-md:w-[80%] max-sm:w-[90%]"}
            />
            <ImageCard
              img={"/assets/images/homepage/success-stories/stories.png"}
            />
            <TestimonialCard
              message={
                "With DSW's insurance-specific solutions on top of its robust AI platform, we’ve been able to move use cases into production quickly. ​"
              }
              img={"/assets/images/homepage/success-stories/canara-hsbc.png"}
              name={"Ritesh Rathod"}
              designation={"Chief Strategy and Data Officer, Canara HSBC"}
            />

            <ImageCard
              img={"/assets/images/homepage/success-stories/storiess.png"}
            />
            <TestimonialCard
              message={
                "DSW UnifyAl simplified our data-driven approach, enabling easy development of Al-powered use cases.​ ​"
              }
              img={"/assets/images/homepage/success-stories/oxsde-final.png"}
              name={"Stefano Bonfa"}
              designation={"Director, OxSDE, Europe ​"}
            />
            <LinkCard
              title={"<span class='text-primary-2'> Customers In Production </span> – Canara HSBC, Manipal Cigna, Mahindra, Castler, ​Wealthright, FSS"}
              link={"#"}
              width={"w-[80%] max-md:w-[80%] max-sm:w-[50%]"}
            />

            <TestimonialCard
              message={
                "With advanced capabilities of the platform's AgenticAI, Castler’s escrow services became smarter, more efficient - enabling faster, secure, scalable solutions for our BFSI clients.​​"
              }
              img={"/assets/images/homepage/success-stories/castler.png"}
              name={"Ritesh Tiwari"}
              designation={"Chief Product Officer, Castler​"}
            />
            <LinkCard
              title={"Manipal Health Cigna in production with <span class='text-primary-2'> over 5 use cases </span> of AI/ML and GenAI"}
              link={"#"}
              width={"w-[75%] max-md:w-[80%] max-sm:w-[60%]"}
            />
            <ImageCard
              img={"/assets/images/homepage/success-stories/stories-three.png"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;

const LinkCard = ({ title, link, width }) => {
  return (
    <>
      <SpotlightCard className="fadeup">
        <div>
          <div className="h-[20vw] group w-full background-glass  pl-[2.5vw] pr-[1.5vw] pb-[2.5vw] pt-[1.5vw] max-sm:h-[55vw] max-md:h-[50vw] max-sm:pl-[5vw]  max-md:px-[5vw] max-md:py-[5vw]  max-sm:pb-[5vw] max-sm:pr-[3vw] max-sm:pt-[3vw] ">
            <div className="h-full w-full flex z-[10] relative">
              <div className={`${width} flex items-end`}>
                <div className="text-30 text-[#E8E8E8] font-head max-sm:text-[6vw]" dangerouslySetInnerHTML={{__html:title}}/>
              </div>

              {/* <div className="flex-1 flex items-start justify-end">
                <div className="h-[3vw] w-[3vw] background-glass rounded-full max-md:w-[10vw] max-md:h-[10vw] max-sm:h-[15vw] max-sm:w-[15vw]">
                  <ArrowButton />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </>
  );
};

const ImageCard = ({ img }) => {
  return (
    <>
      <div className="h-[20vw] w-full rounded-[2vw] border-[0.82px] border-[#88888880] background-glass overflow-hidden group transition-all duration-500 ease-out max-sm:h-[55vw] max-md:h-[50vw] max-md:rounded-[3.5vw] max-sm:rounded-[5vw] fadeup">
        <div className="w-full h-full ">
          <Image
            src={img}
            height={459}
            width={568}
            alt="success-stories-placeholder-img"
            className="object-cover h-full w-full scale-[1.05] group-hover:scale-[1] transition-all duration-500 ease-out"
          />
        </div>
      </div>
    </>
  );
};

const TestimonialCard = ({ message, img, name, designation }) => {
  return (
    <>
      <SpotlightCard className="fadeup  ">
        <div className="h-[20vw] w-full background-glass px-[2vw] py-[2vw] max-sm:h-[85vw] max-md:h-[50vw] max-sm:px-[7vw] max-md:px-[5vw] max-md:py-[5vw] max-sm:py-[8vw] ">
          <div className="w-full h-full flex flex-col justify-between z-[10] relative">
            <div>
              <p className="text-[#E8E8E8]">{message}</p>
            </div>
            <div className="flex items-center max-md:justify-between max-sm:justify-center justify-center gap-[1vw] max-md:gap-[3vw] max-sm:gap-[5vw]">
              <div className="h-[5vw] w-[5vw] rounded-full overflow-hidden relative max-sm:h-[20vw] max-md:w-[15vw] max-md:h-[15vw] max-sm:w-[20vw] bg-white flex items-center justify-center p-1">
                <Image
                  src={img}
                  width={400}
                  height={500}
                  alt={name}
                  className="h-auto w-full "
                />
              </div>
              <div className="w-[78%] space-y-[0.3vw] max-sm:w-[70%]">
                <p className="!font-display text-[1.565vw] text-[#E8E8E8] max-sm:text-[5.5vw]">
                  {name}
                </p>
                <p className="text-[#CACACA] font-medium max-sm:text-[3.2vw]">
                  {designation}​
                </p>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </>
  );
};
