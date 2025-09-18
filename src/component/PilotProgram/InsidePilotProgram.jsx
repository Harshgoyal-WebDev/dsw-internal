import React from 'react'
import Copy from '../Animations/Copy'

const InsidePilotProgram = () => {
  return (
    <>
      <section
        id='recognized'
        className="h-full w-screen relative overflow-hidden container"
      >
        <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[4vw]">
          <div className="text-center mt-10 max-sm:space-y-10">
            <h3 className="title-1 !leading-[1.35] headingAnim text-[#E8E8E8] max-sm:!leading-[1.2]">
              Inside the Pilot Program
            </h3>
            <Copy>
              <p className="text-[#CACACA] w-[60%] mx-auto leading-[1.5] max-sm:w-full">
                Built to deliver clarity, speed, and real results.
              </p>
            </Copy>
          </div>

          {/* GRID VERSION */}
          <div className='w-full max-sm:w-[200vw] origin-left max-sm:mr-[5vw] max-sm:mt-[10vw] h-full max-sm:overflow-x-scroll max-sm:pb-[8vw] flex items-center justify-center '>
          <div className='h-[40vw] flex-shrink-0  w-[80vw] max-sm:translate-x-[0%] max-sm:ml-[200vw] max-sm:mr-[60vw]  max-sm:w-full max-sm:h-full fadeup background-glass rounded-[2vw] border border-[#88888880]  py-[3vw] pb-[4vw] px-[3vw]'>
            <div className="grid grid-cols-[.8fr_1.2fr_1.8fr] border-collpase w-full h-full  border-t-0 border-l-0">
              {/* Header Row */}
              <div className="text-[2.5vw] font-head text-[#F26B0D] font-normal border border-[#59595980] border-t-0 border-l-0 pb-[1vw] max-sm:text-[6vw]">
                Features
              </div>
              <div className="text-[2.5vw] font-head text-white-200 font-normal border border-[#59595980] border-l-0 border-t-0 pl-[2vw] pb-[1vw] max-sm:text-[6vw]">
                Pilot Program
              </div>
              <div className="text-[2.5vw] font-head text-white-200 font-normal border-b border-[#59595980]  max-sm:text-[6vw] pl-[2vw] pb-[1vw] ">
                Post Pilot Subscription
              </div>

              {/* Row 1 */}
              <div className="text-[#F26B0D] border border-[#59595980] border-l-0 border-t-0 pb-[3vw] pt-[1vw]">
                Platform Access
              </div>
              <div className="text-white-300 border border-[#59595980] border-t-0 border-l-0  pl-[2vw] pb-[3vw] pt-[1vw]">
                Full Platform Access for 6 months
              </div>
              <div className="text-white-300 border-b border-[#59595980] pl-[2vw] pb-[3vw] pt-[1vw]">
                Unlimited access with all tools and updates
              </div>

              {/* Row 2 */}
              <div className="text-[#F26B0D] border border-[#59595980] border-t-0 border-l-0  pb-[2vw] pt-[1vw]">
                Use Case Development
              </div>
              <div className="text-white-300 border border-[#59595980]  border-t-0  border-l-0 pl-[2vw] pr-[2vw] pb-[2vw] pt-[1vw]">
                1 Custom insurance use case built by DSW
              </div>
              <div className="text-white-300 border-b border-[#59595980]  pl-[2vw] pb-[2vw] pt-[1vw]">
                Access to 25+ pre-built AI/ML insurance use cases
              </div>

              {/* Row 3 */}
              <div className="text-[#F26B0D] border border-[#59595980] border-t-0 border-l-0 pb-[2vw] pt-[1vw]">
                In-House Development
              </div>
              <div className="text-white-300 border border-[#59595980] border-t-0 pl-[2vw] border-l-0  pr-[2vw] pb-[2vw] pt-[1vw]">
                Build up to 4 additional use cases internally
              </div>
              <div className="text-white-300 border-b border-[#59595980]  pl-[2vw] pb-[2vw] pt-[1vw]">
                Build and scale unlimited use cases across business functions
              </div>

              {/* Row 4 */}
              <div className="text-[#F26B0D] border border-[#59595980] border-t-0 border-l-0 pb-[2vw] pt-[1vw]">
                GenAI Capabilities
              </div>
              <div className="text-white-300 border border-[#59595980] border-t-0 pl-[2vw] border-l-0  pr-[2vw] pb-[2vw] pt-[1vw]">
                Limited GenAI workflows with pilot support
              </div>
              <div className="text-white-300 border-b border-[#59595980] pl-[2vw] pb-[2vw] pt-[1vw]">
                Access to 300+ GenAI agents (e.g., fraud detection, claims triage, policy recommendations)
              </div>

              {/* Row 5 */}
              <div className="text-[#F26B0D] border-r border-[#59595980] pb-[2vw] pt-[1vw]">
                Support
              </div>
              <div className="text-white-300 border-r border-[#59595980] pl-[2vw] pb-[2vw] pt-[1vw] pr-[2vw]">
                1 dedicated Data Scientist + 24/7 email support
              </div>
              <div className="text-white-300   pl-[2vw] pb-[2vw] pt-[1vw]">
                Continuous expert support, technical assistance, and optimization
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InsidePilotProgram
