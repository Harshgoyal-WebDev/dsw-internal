import React from 'react'
import Copy from '../Animations/Copy'
import Image from 'next/image'



const PilotCard=({id, icon,title,para})=>{
    return(
       <>
       
       <div className=" space-y-[2vw] relative group  max-sm:space-y-[10vw] w-[43%]">
        <div className="relative w-full h-[0.5px] bg-[#CACACA75] opacity-[0.5] group-hover:opacity-[1] transition-all duration-500">
               <span
                
                 className="absolute top-0 left-0 h-full bg-[#CACACA75] w-full scale-x-0 origin-left "
               />
               <span className="absolute top-0 left-0 h-full bg-primary-2 w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
             </div>
             <div className="pt-[1vw] pb-[2vw] flex gap-[4vw] items-start space-y-[3vw] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-y-[6vw] max-sm:mt-[10vw]">
                <div className='pr-[1vw]'>
                    <p>{id}</p>
                </div>
               <Image
                 src={icon}
                 height={98}
                 width={98}
                 alt={title}
                 className="w-[5vw] h-[5vw] object-contain max-sm:w-[20vw] max-sm:h-[20vw]"
               />
               <div className='space-y-[2vw]'>
               <p className="text-[1.5vw] text-white-200 leading-[1.25] max-sm:text-[7.5vw] max-sm:w-[72%] max-sm:text-center max-sm:h-fit">
                 {title}
               </p>
               <p className="text-white-300 content-p h-28 max-sm:w-[80%] max-sm:text-center max-sm:h-auto">{para}</p>
               </div>
             </div>
             
           </div>
           </>
    )
}
const AIPilots = () => {
  return (
    <>
     <section
                id='ai-pilots'
                className="h-full w-screen  relative overflow-hidden  background-radial"
            >
                <div className="w-full h-full  relative z-[2] space-y-[7vw] container">
                    <div className="space-y-5 mt-10 max-sm:space-y-10">
                        <h2 className="title-1 !leading-[1.35] headingAnim text-white-200 max-sm:!leading-[1.2]">
                           AI Pilots Built for Your Industry 
                        </h2>
                        <Copy>
                        <p className=" text-white-300 w-[30%] leading-[1.5] max-sm:w-full">
                            Validate use cases across industries, prove ROI early, and build a scalable path to production. 
                        </p>
                        </Copy>
                    </div>
                    <div className='h-full w-full flex flex-wrap items-center justify-between'>
{data.map((card,index)=>(
    <PilotCard key={index} icon={card.icon} title={card.title} para={card.para} id={card.id}/>))}
                    </div>
                    </div>
</section>
    </>
  )
}

export default AIPilots

const data=[
{
    id:"01",
    icon:"/assets/icons/pilot-program/insurance.svg",
    title:"Insurance",
    para:"Fast-track underwriting, claims, and fraud detection pilots into production with domain-ready AI. "
},
{
    id:"02",
    icon:"/assets/icons/pilot-program/banking.svg",
    title:"Banking",
    para:"Accelerate pilots in credit scoring, AML, and customer experience with enterprise-grade AI.  "
},
{
    id:"03",
    icon:"/assets/icons/pilot-program/telecommunications.svg",
    title:"Telecommunications",
    para:"Run pilots for churn prediction, network optimization, and CX automation with speed and scale.  "
},
{
    id:"04",
    icon:"/assets/icons/pilot-program/life-sciences.svg",
    title:"Life Sciences",
    para:"Bring pilots in patient analytics, drug discovery, and compliance monitoring into rapid production.  "
},
{
    id:"05",
    icon:"/assets/icons/pilot-program/retail.svg",
    title:"Retail",
    para:"Test and scale pilots for demand forecasting, personalized CX, and inventory optimization in record time. "
},
{
    id:"06",
    icon:"/assets/icons/pilot-program/manufacturing.svg",
    title:"Manufacturing",
    para:"Pilot predictive maintenance, quality control, and supply chain optimization with real-time AI.  "
},
{
    id:"07",
    icon:"/assets/icons/pilot-program/energy.svg",
    title:"Energy",
    para:"Deploy pilots for grid optimization, demand prediction, and sustainability analytics securely and at scale. "
},
{
    id:"08",
    icon:"/assets/icons/pilot-program/gaming.svg",
    title:"Gaming",
    para:"Move fast on pilots for player personalization, fraud prevention, and real-time engagement analytics. "
}
]