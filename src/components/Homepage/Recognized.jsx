import Image from 'next/image'
import React from 'react'
import Copy from '../Animations/Copy'


const AwardItem=({img, title , year})=>{
    return (
        <>
        <div
        className="flex-shrink-0 flex items-center justify-center gap-[1vw] w-[30vw] max-sm:w-[70vw] max-sm:gap-[2vw]" 
      >
        <div className='w-[7vw] h-auto max-sm:w-[20vw]'>
          <Image
            src={img}
            height={146}
            width={128}
            alt={title} 
            className='h-full w-full'
          />
        </div>
        <div className="space-y-[1vw]">
          <p className="font-display text-[1.565vw] text-[#E8E8E8] max-sm:text-[4.5vw]">{title}</p>
          <p className="text-[#CACACA]">{year}</p>
        </div>
      </div>
        </>
    )
}
const Recognized = () => {
    return (
        <section
            id='recognized'
            className="h-full w-screen  relative overflow-hidden container"
        >
            <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[3vw]">
                <div className="text-center  space-y-5 mt-10 max-sm:space-y-10">
                    <h2 className="text-60  headingAnim text-[#E8E8E8]">
                        Recognized for real-world AI enterprise impact
                    </h2>
                    <Copy>
                    <p className=" text-[#CACACA] w-[60%] mx-auto leading-[1.5] max-sm:w-full">
                        Trusted by enterprises. Validated by the world&apos;s leading benchmarks
                    </p>
                    </Copy>
                </div>

                <div className='w-full flex items-center justify-between px-[5vw] mt-[3vw] fadeup max-sm:flex-wrap max-sm:mt-[6vw] max-sm:gap-y-[5vw] '>
                    <div className='h-[10vw] w-[10vw] max-sm:h-[22vw] max-sm:w-[22vw]'>
                        <Image src={"/assets/images/homepage/recognized/soc-complaint-2.png"} height={178} width={178} alt='soc-compliant' className='h-full w-full object-contain' />
                    </div>
                    <div className='h-[10vw] w-[10vw] max-sm:h-[22vw] max-sm:w-[22vw]'>
                        <Image src={"/assets/images/homepage/recognized/iso-certified-2.png"} height={178} width={178} alt='iso-certified' className='h-full w-full object-contain'/>
                    </div>
                    <div className='h-[10vw] w-[10vw] max-sm:h-[22vw] max-sm:w-[22vw]'>
                        <Image src={"/assets/images/homepage/recognized/hipaa-compliant-2.png"} height={178} width={178} alt='hipaa-compliant' className='h-full w-full object-contain scale-[1.12]'/>
                    </div>
                    <div className='h-[10vw] w-[35vw] max-sm:h-[30vw] max-sm:w-[90vw]'>
                        <Image src={"/assets/images/homepage/recognized/f6s-top-company.png"} height={178} width={681} alt='f6s-top-company' className='h-full w-full object-contain'/>
                    </div>

                </div>
<div className="marquee fadeup mt-[3vw] max-sm:my-[7vw]">
  <div className="marquee__track">
    {awards.map((item, index) => <AwardItem key={index} img={item.img} title={item.title} year={item.year} />)}
    {awards.map((item, index) => <AwardItem key={index} img={item.img} title={item.title} year={item.year}/>)}
  </div>
</div>



            </div>
        </section>
    )
}

export default Recognized


const awards = [
    {
        img: "/assets/images/homepage/recognized/top-10.png",
        title: "1 Top 10 AI Startups",
        year: "Ireland 2024"
    },
    {
        img: "/assets/images/homepage/recognized/top-10.png",
        title: "2 Top 10 AI Startups",
        year: "Ireland 2024"
    },
    {
        img: "/assets/images/homepage/recognized/top-10.png",
        title: "3 Top 10 AI Startups",
        year: "Ireland 2024"
    },
    {
        img: "/assets/images/homepage/recognized/top-10.png",
        title: "4 Top 10 AI Startups",
        year: "Ireland 2024"
    },
    // {
    //     img: "/assets/images/homepage/top-10.png",
    //     title: "Top 10 AI Startups",
    //     year: "Ireland 2024"
    // },
]