import About from '@/components/AboutPage/About'
import Clients from '@/components/AboutPage/Clients'
import Experts from '@/components/AboutPage/Experts'
import Guiders from '@/components/AboutPage/Guiders'
import Faqs from '@/components/Common/FAQs'
import FooterCTA from '@/components/Common/FooterCta'
import Hero from '@/components/Common/Hero'
import Recognized from '@/components/Homepage/Recognized'
import Layout from '@/components/Layout'
import React from 'react'
import TechPartners from '@/components/AboutPage/TechPartners'
import Journey from '@/components/AboutPage/Journey'

export default function page() {
    return (
        <Layout>
            <Hero heroData={heroData} />
            <About />
            <Journey />
            <TechPartners />
            <Clients />
            <Experts heading={"Driven by Vision. Built by Experts."}/>
            <Guiders heading={" Guided by Industry Luminaries"}/>
            <Recognized />
            <Faqs />
            <FooterCTA footerCTAData={footerCTAData} />
        </Layout>
    )
}

const heroData = {
    heading: "Building the Future of AI, One Enterprise at a Time",
    para: "We’re Data Science Wizards — a deep-tech AI company enabling businesses to move from experimentation to real-world impact with scalable, secure, and production-ready AI.​",
    paraClass: "w-[80%]",
    link1: "/#",
    btnText1: "Start Walkthrough",
    link2: "/#",
    btnText2: "Schedule a Call",
    homepage: false,
    headingWidth:"w-[60%]"
}
const footerCTAData = {
    heading: "Take a lightning tour of the Enterprise AI Platform",
    para: "Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
    btnText1: "Book a demo",
    btnLink1: "/#",
    btnText2: "Schedule a Call",
    btnLink2: "/#",
    img1: "/assets/images/footer/image-1.png",
    img2: "/assets/images/footer/image-2.png"
}
