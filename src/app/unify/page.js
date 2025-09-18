import Faqs from '@/components/Common/FAQs'
import Hero from '@/components/Common/Hero'
import SuccessStories from '@/components/Homepage/SuccessStories'
import Tour from '@/components/Common/Tour'
import Layout from '@/components/Layout'
import AiEverywhere from '@/components/UnifyPage/AiEverywhere'
import Diagram from '@/components/UnifyPage/Diagram'
import OnePlatform from '@/components/UnifyPage/OnePlatForm'
import PresentationLayer from '@/components/UnifyPage/PresentationLayer'
import Usecase from '@/components/UnifyPage/Usecase'
import React from 'react'
import Impact from '@/components/UnifyPage/Impact'
import FooterCTA from '@/components/Common/FooterCta'
import UsecaseMobile from '@/components/UnifyPage/UsecaseMobile'

export default function page() {

    return (
        <Layout>
            <Hero heroData={heroData} />
            <AiEverywhere />
            <Tour heading={"Take a Lightning Tour of DSW UnifyAI"} para={"Your AI foundation — not just for today’s use cases, but for tomorrow’s vision.​"} />
            <Usecase />
            <UsecaseMobile />
            <PresentationLayer />
            <Diagram />
            <Impact />
            <OnePlatform />
            <SuccessStories />
            <Faqs />
            <FooterCTA footerCTAData={footerCTAData} />
        </Layout>
    )
}
const heroData = {
    heading: "The Operating System for Enterprise AI ",
    para: "Deploy AI use cases in 30 days, GenAI in a few hours! ​",
    paraClass: "text-[2.5vw] max-sm:text-[4vw]",
    link1: "/#",
    btnText1: "Start Walkthrough",
    link2: "/#",
    btnText2: "Schedule a Call",
    homepage: false
}
const footerCTAData = {
    heading: "Ready to Unify Your AI? ",
    para: "Launch smarter, faster, safer AI and GenAI use cases with DSW UnifyAI. ",
    btnText1: "Book a demo",
    btnLink1: "/#",
    btnText2: "Contact Sales",
    btnLink2: "/#",
    img1: "/assets/images/footer/image-1.png",
    img2: "/assets/images/footer/image-2.png"
}
