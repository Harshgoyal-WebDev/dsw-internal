import React from 'react'
import Copy from '../Animations/Copy'

const InsidePilotProgram = () => {
    return (
        <>
            <section
                id='recognized'
                className="h-full w-screen  relative overflow-hidden container"
            >
                <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[5vw]">
                    <div className="text-center  space-y-5 mt-10 max-sm:space-y-10">
                        <h3 className="title-1 !leading-[1.35] headingAnim text-[#E8E8E8] max-sm:!leading-[1.2]">
                           Inside the Pilot Program
                        </h3>
                        <Copy>
                            <p className=" text-[#CACACA] w-[60%] mx-auto leading-[1.5] max-sm:w-full">
                               Built to deliver clarity, speed, and real results.
                            </p>
                        </Copy>
                    </div>
                <div className='h-[40vw] w-[85vw] background-glass rounded-[2vw] border border-[#88888880] py-[3vw] px-[2vw]'>
<table className="table-fixed w-full h-full text-left border-collapse ">
  <thead>
    <tr>
      <th className='w-[15%] text-[2.5vw] font-head text-[#F26B0D] font-normal border border-[#59595980] border-t-0 border-l-0'>Features</th>
      <th className='w-[15%] text-[2.5vw] font-head text-white-200 font-normal border border-[#59595980] border-t-0 pl-[2vw] '>Pilot Program</th>
      <th className='w-[15%] text-[2.5vw] font-head text-white-200 font-normal border border-[#59595980] border-t-0 border-r-0 pl-[2vw]'>Post Pilot Subscription</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='text-[#F26B0D] border border-[#59595980] border-l-0  pb-[2vw] pt-[1vw]'>Platform Access</td>
      <td className='text-white-300 border border-[#59595980] pl-[2vw] pb-[2vw] pt-[1vw]'> Full Platform Access for 6 months</td>
      <td className='text-white-300 border border-[#59595980] border-r-0 pl-[2vw]  pb-[2vw] pt-[1vw]'>Unlimited access with all tools and updates</td>
    </tr>
    <tr>
      <td className='text-[#F26B0D] border border-[#59595980] border-l-0 pb-[2vw] pt-[1vw]'>Use Case Development</td>
      <td className='text-white-300 border border-[#59595980] pl-[2vw] pb-[2vw] pt-[1vw]'>1 Custominsurance use case built by DSW</td>
      <td className='text-white-300 border border-[#59595980] border-r-0 pl-[2vw] pb-[2vw] pt-[1vw]'>Access to 25+ pre-built AI/ML insurance use cases</td>
    </tr>
    <tr>
      <td className='text-[#F26B0D] border border-[#59595980] border-l-0 pb-[2vw] pt-[1vw]'>In-House Development</td>
      <td className='text-white-300 border border-[#59595980] pl-[2vw] pb-[2vw] pt-[1vw]'>Build upto 4 additional use cases internally</td>
      <td className='text-white-300 border border-[#59595980] border-r-0 pl-[2vw] pb-[2vw] pt-[1vw]'>Build and scale unlimited use cases across business functions</td>
    </tr>
     <tr>
      <td className='text-[#F26B0D] border border-[#59595980] border-l-0 pb-[2vw] pt-[1vw]'>GenAI Capabilities</td>
      <td className='text-white-300 border border-[#59595980] pl-[2vw] pb-[2vw] pt-[1vw]'>Limited GenAI workflows withpilot support</td>
      <td className='text-white-300 border border-[#59595980] border-r-0 pl-[2vw] pb-[2vw] pt-[1vw]'>Access to 300+ GenAI agents (e.g., fraud detection, claims triage, policy recommendations)</td>
    </tr>
     <tr>
      <td className='text-[#F26B0D] border border-[#59595980] border-b-0 border-l-0 pb-[2vw] pt-[1vw]' >Support</td>
      <td className='text-white-300 border border-[#59595980] border-b-0 pl-[2vw] pb-[2vw] pt-[1vw]'>1 dedicated Data Scientist+ 24/7 email support</td>
      <td className='text-white-300 border border-[#59595980] border-r-0 border-b-0 pl-[2vw] pb-[2vw] pt-[1vw]'>Continuous expert support, technical assistance, and optimization</td>
    </tr>
  </tbody>
</table>
                </div>
                </div>
            </section>
        </>
    )
}

export default InsidePilotProgram