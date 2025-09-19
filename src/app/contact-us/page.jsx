import React from 'react';
import Hero from '@/components/Contact/Hero';
import Layout from '@/components/Layout'
import Form from '@/components/Contact/Form';
import OfficeLocations from '@/components/Contact/OfficeLocations';
import FooterCTA from "@/components/Common/FooterCta";

const Page = () => {
  return (
    <>
        <Layout>

        <Hero heroData={heroData} />
        <Form />
         <OfficeLocations />
         <FooterCTA footerCTAData={footerCTAData} />
        </Layout>
       
    </>
  )
}

export default Page

const heroData= {
  heading:"Let’s Build the Future of AI Together​ ",
  para:"Whether you're ready to launch your next AI initiative or just exploring possibilities—let’s talk.​",
  paraClass:"",
  homepage:false
}

const footerCTAData={
  heading:"Take a lightning tour of the Enterprise AI Platform ",
  para:"Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security. ",
  btnText1:"Book a demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"/#",
  img1:"/assets/images/footer/image-1.png",
  img2:"/assets/images/footer/image-2.png"
}