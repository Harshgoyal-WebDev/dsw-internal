import React, { Suspense } from 'react'
import ShaderComp from '../BgShader/ShaderComp'

const Difference = () => {
  return (
    <section className='w-screen h-fit py-[7%] px-[5vw] relative' id='difference'>
        <div className='w-full flex flex-col justify-center items-center gap-[4.5vw] relative z-[2]'>
            <h2 className='title-2 headingAnim'>Why insurAInce is Different? </h2>
            <div className='w-full flex justify-center gap-[1vw]'>
                <div className='w-[40%] space-y-[2.5vw]'>
                    <h3 className='text-center title-3 headingAnim'>Traditional AI Platforms</h3>
                    <div className='w-full flex-col flex gap-[0.5vw]'>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                        Generic, one-size-fits-all 
                        </div>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                        Long time to deploy 
                        </div>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                       Retrofitted Compliance 
                        </div>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                        Scattered stack
                        </div>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                        High cost - every use case starts from scratch
                        </div>

                    </div>
               
                </div>
                <div className='w-[40%] space-y-[2.5vw]'>
                    <h3 className='text-center title-3 headingAnim'>InsurAInce</h3>
                    <div className='w-full flex-col flex gap-[0.5vw]'>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                        Insurance-first, domain-trained 
                        </div>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                        30 days or less for AI, hours for GenAI 
                        </div>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                       Built-in Compliance (SOC 2, ISO, HIPAA, GDPR compliant) ​
                        </div>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                        Unified AI platform, no vendor lock-in  
                        </div>
                        <div className='w-full bg-white/5 text-[#cacaca] text-center h-[10.5vh]  border border-white/20 rounded-[1.8vw] px-[2vw] py-[2.5vw] flex items-center justify-center fadeup'>
                        Pipelines, features, and models are reused intelligently – reducing cost with every use case 
                        </div>

                    </div>
               
                </div>

            </div>

        </div>
         <div className="absolute top-[30%] left-0 h-screen w-screen">
        <Suspense>
          <ShaderComp color={"0x1726FD"} />
        </Suspense>
      </div>

    </section>
  )
}

export default Difference