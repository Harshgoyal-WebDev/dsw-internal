"use client";
import Image from "next/image";
import Copy from "../Animations/Copy";

export default function Unifying() {
  return (
    <section
      className="w-screen container mt-[-5%] max-sm:mt-0 relative z-[10]"
      id="about"
    >
      <div className="w-full flex flex-col items-start justify-center gap-y-[5vw] max-sm:gap-y-[15vw]">
        <div className="w-[70%] max-md:w-full">
          <h2 className="font-head text-90 headingAnim">
           About DSW
          </h2>
        </div>
        <div className="space-y-[5vw] max-sm:space-y-[10vw]  ">
          <div className="w-full  max-md:w-full space-y-[3vw] max-md:space-y-[7vw]">
            <Copy>
              <p className="font-head text-[1.4vw] max-md:text-30 leading-[1.3]">
               Founded in 2019, DSW builds enterprise-grade infrastructure that helps organizations turn AI into real, measurable business outcomes. ​
              </p>
              </Copy>
               <Copy>
              <p className="font-head text-[1.4vw] max-md:text-30 leading-[1.3]">
               Our platforms-DSW UnifyAI and DSW AgenticAI, provide a unified foundation to build, deploy, and govern AI across mission-critical applications, workflows, and decisioning systems. On top of this foundation, DSW delivers <span className="font-semibold">industry-specific vertical solutions </span> for insurance, banking, and other regulated domains, purpose-built to accelerate production adoption while meeting strict requirements around trust, compliance, an explainability. ​
              </p>
              </Copy>
               <Copy>
              <p className="font-head text-[1.4vw] max-md:text-30 leading-[1.3]">
              We work with data-driven enterprises across Insurance, Banking, FinTech, Healthcare, Manufacturing, Telecom, Energy, and the Public Sector, with a deep focus on BFSI environments where governance and transparency are non-negotiable. ​
              </p>
              </Copy>
               <Copy>
              <p className="font-head text-[1.4vw] max-md:text-30 leading-[1.3]">
               In core banking modernization, DSW partners with <span className="font-semibold">Infosys Finacle </span> to deliver open-source-driven banking platforms for global financial institutions. DSW is also recognized by Infosys Finacle as its <span className="font-semibold">Open-Source Services Partner for FY25</span>, reinforcing our expertise in building scalable, future-ready banking systems. 
              </p>
              </Copy>
            
            
          </div>
       
          
            <div className="w-full fadeup flex flex-col gap-[2vw] max-md:items-start max-sm:gap-[7vw]">
              <div className="w-fit flex flex-col items-start gap-[1vw] max-md:gap-[5vw]">
                <p className="text-30 text-white-200">Locations :</p>

                <div className="flex gap-[0.7vw] max-sm:gap-[5vw] max-md:gap-[2.5vw]">
                  <div className="h-[2.5vw] w-[2.5vw] max-sm:w-[12vw] max-sm:h-[12vw] max-md:w-[7vw] max-md:h-[7vw] rounded-full overflow-hidden">
                    <Image
                      src={"/assets/images/about/india.png"}
                      height={48}
                      width={48}
                      alt="india"
                      className="h-full w-full"
                      quality={100}
                    />
                  </div>
                   <span className="h-[2.5vw] w-[1px] max-sm:h-[12vw] bg-[#CACACA75] max-md:h-[7.5vw]" />
                   <div className="h-[2.5vw] w-[2.5vw] max-sm:w-[12vw] max-sm:h-[12vw] max-md:w-[7vw] max-md:h-[7vw] rounded-full overflow-hidden">
                    <Image
                      src={"/assets/images/about/united-kingdom.png"}
                      height={48}
                      width={48}
                      alt="india"
                      className="h-full w-full"
                      quality={100}
                    />
                  </div>
                   <span className="h-[2.5vw] w-[1px] max-sm:h-[12vw] bg-[#CACACA75] max-md:h-[7.5vw]" />
                  <div className="h-[2.5vw] w-[2.5vw] rounded-full overflow-hidden max-sm:w-[12vw] max-sm:h-[12vw] max-md:w-[7vw] max-md:h-[7vw]">
                    <Image
                      src={"/assets/images/about/ireland.png"}
                      height={48}
                      width={48}
                      alt="ireland"
                      className="h-full w-full"
                      quality={100}
                    />
                  </div>
                  
                 
                  <span className="h-[2.5vw] w-[1px] bg-[#CACACA75] max-sm:h-[12vw] max-md:h-[7.5vw]" />
                  <div className="h-[2.5vw] w-[2.5vw] rounded-full overflow-hidden max-sm:w-[12vw] max-sm:h-[12vw] max-md:w-[7vw] max-md:h-[7vw]">
                    <Image
                      src={"/assets/images/about/usa.png"}
                      height={48}
                      width={48}
                      alt="usa"
                      className="h-full w-full"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </section>
  );
}
