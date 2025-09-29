import React from 'react'
import Hero from '@/components/Common/Hero'
import FeaturedBlog from '@/components/Blog/FeaturedBlog'
import BlogGrid from '@/components/Blog/BlogGrid'
import Layout from '@/components/Layout'
import FooterCTA from "@/components/Common/FooterCta";

const page = () => {
  return (
    <>
        <Layout>
         <Hero heroData={heroData} breadcrumbs={true} />
         <FeaturedBlog />
         <BlogGrid />
         <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"}/>
        </Layout>
    </>
  )
}

export default page

const heroData= {
  heading:"Explore the Future of AI, One Post at a Time​ ",
  para:"​",
  paraClass:"",
  headingWidth:"w-[60%]",
  homepage:false,
  hidebtn:true
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