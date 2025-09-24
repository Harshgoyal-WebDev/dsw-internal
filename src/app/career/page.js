import React from 'react';
import Layout from '@/components/Layout'
import FooterCTA from "@/components/Common/FooterCta";
import Hero from '@/components/Common/Hero';
import Join from '@/components/CareerPage/Join';
import OpenRoles from '@/components/CareerPage/OpenRoles';
import OpenRolesMobile from '@/components/CareerPage/OpenRolesMobile';

const Page = () => {
  return (
    <>
        <Layout>
        <Hero heroData={heroData} />
       <Join/>
       <OpenRoles/>
       <OpenRolesMobile/>
         <FooterCTA footerCTAData={footerCTAData} />
        </Layout>
       
    </>
  )
}

export default Page

const heroData= {
  heading:"Innovate. Scale. Transform — With DSW",
  para:"At DSW, we are transforming the way enterprises embed AI into their core business. By joining our team, you’ll work on groundbreaking technologies, from AI infrastructure to GenAI solutions, that shape industries worldwide. Here, innovation meets impact—and your career grows alongside the future of enterprise AI.​",
  paraClass:"",
  homepage:false,
  hidebtn:true,
  headingWidth:"w-[55%]",
  paraClass:"w-[60vw]"
}

const footerCTAData={
  heading:"Take a lightning tour of the Enterprise AI Platform ",
  para:"Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
  btnText1:"Book a demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"/#",
  img1:"/assets/images/footer/image-1.png",
  img2:"/assets/images/footer/image-2.png"
}