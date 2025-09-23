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
         <FooterCTA footerCTAData={footerCTAData} />
        </Layout>
    </>
  )
}

export default page

const heroData= {
  heading:"Explore the Future of AI, One Post at a Time​ ",
  para:"​",
  paraClass:"",
  homepage:false,
  hidebtn:true
}

// const heroData = {
//     heading: "Building the Future of AI, One Enterprise at a Time",
//     para: "We’re Data Science Wizards — a deep-tech AI company enabling businesses to move from experimentation to real-world impact with scalable, secure, and production-ready AI.​",
//     paraClass: "px-[10vw]",
//     link1: "/#",
//     btnText1: "Start Walkthrough",
//     link2: "/#",
//     btnText2: "Schedule a Call",
//     homepage: false
// }

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