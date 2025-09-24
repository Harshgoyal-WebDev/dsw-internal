 import Hero from '@/components/Common/Hero'
import Layout from '@/components/Layout'
import AIPilots from '@/components/PilotProgram/AIPilots'
import PilotProgramForm from '../../components/PilotForm/PilotProgramForm'
import InsidePilotProgram from '@/components/PilotProgram/InsidePilotProgram'
import Production from '@/components/PilotProgram/Production'
import Transform from '@/components/PilotProgram/Transform'
import React from 'react'
import FooterCTA from '@/components/Common/FooterCta'
import Faqs from '@/components/Common/FAQs'

const page = () => {
  return (
    <>
    <Layout>
        <Hero heroData={heroData}/>
        <Production/>
        <AIPilots/>
        <Transform/>
        <InsidePilotProgram/>
        <PilotProgramForm/>
        <Faqs />
        <FooterCTA footerCTAData={footerCTAData}/>
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

const footerCTAData={
  heading:"Test drive the purpose - built insurance AI platform  ​",
  para:"",
  btnText1:"Book a demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"/#",
  img1:"/assets/images/footer/image-1.png",
  img2:"/assets/images/footer/image-2.png"
}