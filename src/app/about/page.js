import dynamic from "next/dynamic";


import Layout from '@/components/Layout'
import React from 'react'
import Build from '@/components/AboutPage/Build'
import BuildMobile from '@/components/AboutPage/BuildMobile'
import { WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/config/metadata'
import Hero from '@/components/Common/Hero'

const Unifying = dynamic(() => import('@/components/AboutPage/Unifying'), { ssr: true });
const Mission = dynamic(() => import('@/components/AboutPage/Mission'), { ssr: true });
const Proof = dynamic(() => import('@/components/AboutPage/Proof'), { ssr: true });
const Differently = dynamic(() => import('@/components/AboutPage/Differently'), { ssr: true });
const Experts = dynamic(() => import('@/components/AboutPage/Experts'), { ssr: true });
const Guiders = dynamic(() => import('@/components/AboutPage/Guiders'), { ssr: true });
const Ecosystem = dynamic(() => import('@/components/AboutPage/Ecosystem'), { ssr: true });
const Careers = dynamic(() => import('@/components/AboutPage/Careers'), { ssr: true });
const Join = dynamic(() => import('@/components/CareerPage/Join'), { ssr: true });
const FooterCTA = dynamic(() => import('@/components/Common/FooterCta'), { ssr: true });



export const metadata = getPageMetadata({
  title: "About DSW UnifyAI - Deep-Tech AI for Enterprises",
  description: "Learn about Data Science Wizards: mission, vision, team & enterprise AI platform UnifyAI that powers scalable, secure, real-world AI deployments.",
  url: "about",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/about",
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
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero heroData={heroData} />
        <Unifying />
        <Mission />
        <Build />
        <BuildMobile />
        <Proof />
        <Differently />
        <Experts heading={"Meet the Team"} />
        <Guiders heading={"Advisors and Board"} />
        <Ecosystem />
        <Careers />
        <Join />
        <FooterCTA footerCTAData={footerCTAData} />
      </Layout>
    </>
  )
}

const heroData = {
  heading: "Building the Future of AI, One Enterprise at a Time",
  para: "We’re Data Science Wizards - a deep-tech AI company enabling businesses to move from experimentation to real-world impact with scalable, secure, and production-ready AI.​",
  paraClass: "px-[10vw] max-sm:px-[2vw]",
  link1: "/#",
  openModalKey:"walkthrough" ,
  btnText1: "Start Walkthrough",
  link2: "https://calendly.com/",
  btnText2: "Schedule a Call",
  target: true,
  walkthrough: true,
  homepage: false
}
const footerCTAData = {
  heading: "AI Isn’t About Just Use Cases. It’s About a Smarter System",
  para: "Where every model, agent, workflow, and decision runs under unified governance.​",
  btnText1: "Book a Demo",
  btnLink1: "/#",
  btnText2: "Schedule a Call",
  btnLink2: "https://calendly.com/",
  book: true,
  target: true,
  img1: "/assets/images/footer/cta-5.png",
  img2: "/assets/images/footer/cta-4.png"
}
