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
          <div className="text-center mt-10 max-md:space-y-10">
            <h3 className="text-90 headingAnim text-[#E8E8E8]">
              Inside the Pilot Program
            </h3>
            <Copy>
              <p className="text-[#CACACA] w-[60%] mx-auto leading-[1.5] max-md:w-full">
                Built to deliver clarity, speed, and real results.
              </p>
            </Copy>
          </div>

          {/* GRID VERSION */}
          <div className='w-full max-md:w-[200vw] origin-left max-md:mr-[5vw] max-md:mt-[10vw] h-full max-md:overflow-x-scroll max-md:pb-[8vw] flex items-center justify-center '>
          <div className='h-[40vw] flex-shrink-0  w-[80vw] max-md:translate-x-[0%] max-md:ml-[180vw] max-md:mr-[60vw]  max-md:w-full max-md:h-full fadeup background-glass rounded-[2vw] border border-[#88888880]  py-[3vw] pb-[4vw] px-[3vw] max-md:px-[7vw] max-md:py-[7vw] max-md:rounded-[6vw]'>
            <div className="grid grid-cols-[.8fr_1.2fr_1.8fr] border-collpase w-full h-full  border-t-0 border-l-0">
              {/* Header Row */}
              <h3 className="text-50 font-head text-[#F26B0D] font-normal border border-[#59595980] border-t-0 border-l-0 pb-[1vw] max-md:pb-[4vw] max-md:text-[6vw]">
                Features
              </h3>
              <h3 className="text-50 font-head text-white-200 font-normal border border-[#59595980] border-l-0 border-t-0 pl-[2vw] pb-[1vw] max-md:text-[6vw] max-md:pl-[8vw]">
                Pilot Program
              </h3>
              <h3 className="text-50 font-head text-white-200 font-normal border-b border-[#59595980]  max-md:text-[6vw] pl-[2vw] pb-[1vw]  max-md:pl-[8vw]">
                Post Pilot Subscription
              </h3>

              {/* Row 1 */}
              <div className="text-[#F26B0D] border border-[#59595980] border-l-0 border-t-0 pb-[3vw] pt-[1vw] max-md:pt-[7vw]">
                Platform Access
              </div>
              <div className="text-white-300 border border-[#59595980] border-t-0 border-l-0  pl-[2vw] pb-[3vw] pt-[1vw] max-md:p-[7vw]">
                Full Platform Access for 6 months
              </div>
              <div className="text-white-300 border-b border-[#59595980] pl-[2vw] pb-[3vw] pt-[1vw] max-md:p-[7vw]">
                Unlimited access with all tools and updates
              </div>

              {/* Row 2 */}
              <div className="text-[#F26B0D] border border-[#59595980] border-t-0 border-l-0  pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                Use Case Development
              </div>
              <div className="text-white-300 border border-[#59595980]  border-t-0  border-l-0 pl-[2vw] pr-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
                1 Custom insurance use case built by DSW
              </div>
              <div className="text-white-300 border-b border-[#59595980]  pl-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
                Access to 25+ pre-built AI/ML insurance use cases
              </div>

              {/* Row 3 */}
              <div className="text-[#F26B0D] border border-[#59595980] border-t-0 border-l-0 pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                In-House Development
              </div>
              <div className="text-white-300 border border-[#59595980] border-t-0 pl-[2vw] border-l-0  pr-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
                Build up to 4 additional use cases internally
              </div>
              <div className="text-white-300 border-b border-[#59595980]  pl-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
                Build and scale unlimited use cases across business functions
              </div>

              {/* Row 4 */}
              <div className="text-[#F26B0D] border border-[#59595980] border-t-0 border-l-0 pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                GenAI Capabilities
              </div>
              <div className="text-white-300 border border-[#59595980] border-t-0 pl-[2vw] border-l-0  pr-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
                Limited GenAI workflows with pilot support
              </div>
              <div className="text-white-300 border-b border-[#59595980] pl-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
                Access to 300+ GenAI agents (e.g., fraud detection, claims triage, policy recommendations)
              </div>

              {/* Row 5 */}
              <div className="text-[#F26B0D] border-r border-[#59595980] pb-[2vw] pt-[1vw] max-md:pt-[7vw]">
                Support
              </div>
              <div className="text-white-300 border-r border-[#59595980] pl-[2vw] pb-[2vw] pt-[1vw] pr-[2vw] max-md:p-[7vw]">
                1 dedicated Data Scientist + 24/7 email support
              </div>
              <div className="text-white-300   pl-[2vw] pb-[2vw] pt-[1vw] max-md:p-[7vw]">
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
