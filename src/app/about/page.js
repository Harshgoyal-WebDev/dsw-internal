import Experts from '@/components/AboutPage/Experts'
import Guiders from '@/components/AboutPage/Guiders'
import FooterCTA from '@/components/Common/FooterCta'
import Layout from '@/components/Layout'
import React from 'react'
import AboutV2 from '@/components/AboutPage/AboutV2'
import Build from '@/components/AboutPage/Build'
import Ecosystem from '@/components/AboutPage/Ecosystem'
import Careers from '@/components/AboutPage/Careers'
import Proof from '@/components/AboutPage/Proof'
import Differently from '@/components/AboutPage/Differently'
import BuildMobile from '@/components/AboutPage/BuildMobile'
import { WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/config/metadata'
import Hero from '@/components/Common/Hero'


export const metadata = getPageMetadata({
  title: "About DSW UnifyAI - Deep-Tech AI for Enterprises",
  description: "Learn about Data Science Wizards: mission, vision, team & enterprise AI platform UnifyAI that powers scalable, secure, real-world AI deployments.",
  url: "about",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/about",
    languages: {
      "x-default": "/about",
    },
  },
  openGraph: {
    url: "about",
    images: [
      {
        url: `${homepage}seo/about.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
export default function page() {
    return (
        <>
         <WebpageJsonLd metadata={metadata}/>
        <Layout>
            <Hero heroData={heroData} />
           <AboutV2/>
           <Build/>
           <BuildMobile/>
           <Proof/>
           <Differently/>
            <Experts heading={"Meet the Team"}/>
            <Guiders heading={"Advisors and Board"}/>
            <Ecosystem/>
            <Careers/>
            <FooterCTA footerCTAData={footerCTAData} />
        </Layout>
        </>
    )
}

const heroData = {
    heading: "Building the Future of AI, One Enterprise at a Time",
    para: "We’re Data Science Wizards — a deep-tech AI company enabling businesses to move from experimentation to real-world impact with scalable, secure, and production-ready AI.​",
    paraClass: "px-[10vw]",
    link1: "/unifyai",
    btnText1: "Start Walkthrough",
    link2: "https://calendly.com/",
    btnText2: "Schedule a Call",
    target:true,
  homepage: false
}
const footerCTAData = {
    heading: "Take a lightning tour of the Enterprise AI Platform",
    para: "Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
    btnText1: "Book a Demo",
    btnLink1: "/#",
    btnText2: "Schedule a Call",
    btnLink2: "https://calendly.com/",
    book:true,
  target:true,
  img1: "/assets/images/footer/image-1.png",
    img2: "/assets/images/footer/image-2.png"
}
