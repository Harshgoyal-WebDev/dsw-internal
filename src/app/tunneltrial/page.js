
import Hero from '@/components/Common/Hero'
import LayoutTunnel from '@/components/Layout/Layout'
import React from 'react'

const page = () => {
  return (
   <>
   <LayoutTunnel>
        <Hero heroData={heroData}/>
   </LayoutTunnel>
  
   </>
  )
}

export default page

const heroData= {
  heading:"Launch AI use cases in days. GenAI in hours.​ ",
  para:"The enterprise platform built for speed and scale.​ Go from pilot to production – faster and smarter with DSW UnifyAI​",
  paraClass:"",
  link1:"/#",
  btnText1:"Start Walkthrough",
  link2:"/#",
  btnText2:"Schedule a Call",
  homepage:true
}
