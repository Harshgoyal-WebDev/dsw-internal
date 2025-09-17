import Image from 'next/image'
import React from 'react'
import Copy from '../Animations/Copy'


const AwardItem=({img, title})=>{
    return (
        <>
        <div
        className="flex-shrink-0 flex items-center justify-center gap-[1vw] w-[25vw] max-sm:w-[75vw] max-sm:gap-[2vw]" 
      >
        <div className='w-[5.5vw] h-auto max-sm:w-[20vw]'>
          <Image
            src={img}
            height={146}
            width={128}
            alt={title} 
            className='h-full w-full'
          />
        </div>
        <div className="space-y-[1vw]">
          <p className="text-[#E8E8E8] max-sm:text-[4.5vw]">{title}</p>
          
        </div>
      </div>
        </>
    )
}
const Transform= () => {
    return (
        <section
            id='transform'
            className="h-full w-screen  relative overflow-hidden container"
        >
            <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] gap-[10vw]">
                <div className="text-center  space-y-5 mt-10 max-sm:space-y-10">
                    <h3 className="title-2 !leading-[1.35] headingAnim text-[#E8E8E8] max-sm:!leading-[1.2]">
                       Transform and scale your enterprise operations
                    </h3>
                    <Copy>
                    <p className=" text-[#CACACA] w-[60%] mx-auto leading-[1.5] max-sm:w-full">
                        Build AI and GenAI Use Cases Across the Enterprise Lifecycle
                    </p>
                    </Copy>
                </div>


   <div className='space-y-[7vw] max-sm:space-y-[10vw]'>         
<div className="marquee fadeup  max-sm:my-[10vw] gap-[3vw]">
  <div className="marquee__track">
    {awards1.map((item, index) => <AwardItem key={index} img={item.img} title={item.title} year={item.year} />)}
    {awards1.map((item, index) => <AwardItem key={index} img={item.img} title={item.title} year={item.year}/>)}
  </div>
</div>

                
<div className="marquee fadeup  max-sm:my-[10vw] gap-[3vw]">
  <div className="marquee__track_reverse">
    {awards2.map((item, index) => <AwardItem key={index} img={item.img} title={item.title} year={item.year} />)}
    {awards2.map((item, index) => <AwardItem key={index} img={item.img} title={item.title} year={item.year}/>)}
  </div>
  </div>    
</div>



            </div>
        </section>
    )
}

export default Transform


const awards1 = [
    {
        img: "/assets/icons/pilot-program/sales.svg",
        title: "Sales",
        
    },
    {
        img: "/assets/icons/pilot-program/marketing.svg",
        title: "Marketing",
        
    },
    {
        img: "/assets/icons/pilot-program/customer-service.svg",
        title: "Customer Service",
        
    },
    {
        img: "/assets/icons/pilot-program/finance.svg",
        title: "Finance",
        
    },
    {
        img: "/assets/icons/pilot-program/operations-resources.svg",
        title: "Operations Resources",
        
    },
]
const awards2 = [
    {
        img: "/assets/icons/pilot-program/supply-chain.svg",
        title: "Supply Chain & Logistics  ",
        
    },
    {
        img: "/assets/icons/pilot-program/underwriting.svg",
        title: "Underwriting & Risk",
        
    },
    {
        img: "/assets/icons/pilot-program/claims.svg",
        title: "Claims",
        
    },
    {
        img: "/assets/icons/pilot-program/legal-and-compliance.svg",
        title: "Legal & Compliance",
        
    },
    {
        img: "/assets/icons/pilot-program/fraud-and-security.svg",
        title: "Fraud & Security",
        
    },
]