"use client";
import Image from "next/image";

export default function Unifying() {
  return (
    <section className="w-screen container mt-[-5%] max-sm:mt-0 relative z-[10]" id="about" >
      <div className="w-full flex flex-col items-start justify-center gap-y-[5vw] max-sm:gap-y-[15vw]">
        <div className="w-[70%] max-md:w-full">
        <h2 className="font-head text-90 headingAnim">Unifying the AI Lifecycle with DSW UnifyAI</h2>
        </div>
        <div className="space-y-[5vw] max-sm:space-y-[10vw]  ">
        <div className="flex justify-between items-center  max-md:flex-col max-md:gap-[7vw]">
            <div className="w-[45%] fadeup max-md:w-full">
                
                <p className="font-head text-[1.4vw] max-md:text-30 leading-[1.3]">At DSW, we are redefining how enterprises transform AI from a technology experiment into a core business capability. We build the infrastructure that empowers organizations to embed AI at the heart of their operations - securely, at speed, and with measurable outcomes. Our deep tech AI platform, DSW UnifyAI, unifies the entire AI lifecycle, enabling teams to build, deploy, and scale AI and GenAI solutions with governance, observability, and flexibility. </p>
               
            </div>
            <div className="w-[45%] fadeup max-md:w-full">
               
                <p className="font-head text-[1.4vw] max-md:text-30 leading-[1.3]">We partner with enterprises that believe AI should be the backbone of their business, open, governed, and built for scale. We are creating a global movement where teams learn, collaborate, and co-create responsibly. Fuelled by the brilliance of our data scientists, engineers, and strategists, we tackle the hardest adoption challenges head-on and deliver systems that not only transform enterprises but also redefine what is possible, unlocking human potential and driving shared success.</p>
               
            </div>
             </div>
 <div className="flex justify-end items-start gap-[3vw] max-md:flex-col max-md:gap-[7vw]">
            <div className="w-[48%] fadeup max-md:w-full">
                
                <p className="font-head text-[1.4vw] max-md:text-30 leading-[1.3]">As the world’s operating system for AI, we are driving the shift toward AI-native infrastructure, where cloud, data, models, and decision-making converge seamlessly, powering real-time innovation. Our platform is built to meet the complexity of regulated industries, from Insurance and Banking to Healthcare, Manufacturing, Telecom, Energy, and the Public Sector.</p>
               
            </div>
            <div className="w-[53%] fadeup flex flex-col items-end gap-[2vw] max-sm:items-start max-sm:gap-[7vw]">
  <div className="w-fit flex flex-col items-start gap-[1vw] max-md:gap-[5vw]">
    <p className="text-30 text-white-200">Locations :</p>

    <div className="flex gap-[0.7vw] max-sm:gap-[5vw]">
      <div className="h-[2.5vw] w-[2.5vw] max-sm:w-[12vw] max-sm:h-[12vw] rounded-full overflow-hidden">
        <Image src={"/assets/images/about/india.png"} height={48} width={48} alt="india" className="h-full w-full" quality={100}/>
      </div>
      <span className="h-[2.5vw] w-[1px] bg-[#CACACA75] max-sm:h-[12vw]"/>
      <div className="h-[2.5vw] w-[2.5vw] rounded-full overflow-hidden max-sm:w-[12vw] max-sm:h-[12vw]">
        <Image src={"/assets/images/about/united-kingdom.png"} height={48} width={48} alt="united-kingdom" className="h-full w-full" quality={100}/>
      </div>
      <span className="h-[2.5vw] w-[1px] max-sm:h-[12vw] bg-[#CACACA75]"/>
      <div className="h-[2.5vw] w-[2.5vw] rounded-full overflow-hidden max-sm:w-[12vw] max-sm:h-[12vw]">
        <Image src={"/assets/images/about/ireland.png"} height={48} width={48} alt="ireland" className="h-full w-full" quality={100}/>
      </div>
      <span className="h-[2.5vw] w-[1px] bg-[#CACACA75] max-sm:h-[12vw]"/>
      <div className="h-[2.5vw] w-[2.5vw] rounded-full overflow-hidden max-sm:w-[12vw] max-sm:h-[12vw]">
        <Image src={"/assets/images/about/usa.png"} height={48} width={48} alt="usa" className="h-full w-full" quality={100}/>
      </div>
    </div>
  </div>
</div>


        </div>
        </div>
      </div>
    </section>
  );
}
