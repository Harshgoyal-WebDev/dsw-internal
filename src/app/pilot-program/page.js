import Hero from '@/Components/Common/Hero'
import Layout from '@/Components/Layout'
import AIPilots from '@/Components/PilotProgram/AIPilots'
import PilotProgramForm from '@/Components/PilotProgram/PilotProgramForm'
import InsidePilotProgram from '@/Components/PilotProgram/InsidePilotProgram'
import Production from '@/Components/PilotProgram/Production'
import Transform from '@/Components/PilotProgram/Transform'
import React from 'react'

const page = () => {
  return (
    <>
    <Layout>
        <Hero heroData={heroData}/>
        <Production/>
        <AIPilots/>
        <Transform/>
        <InsidePilotProgram/>
        {/* <PilotProgramForm/> */}
    </Layout>
    </>
  )
}

export default page

const heroData= {
  heading:"Pilot AI and GenAI Use Cases. Go Live in Record time. ​ ",
  para:"Deploy securely with enterprise-grade governance, compliance, and monitoring. ​",
  paraClass:"",
  link1:"/#",
  btnText1:"Start Walkthrough",
  link2:"/#",
  btnText2:"Schedule a Call",
  homepage:false
}