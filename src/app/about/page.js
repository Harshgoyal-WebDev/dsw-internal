import About from '@/components/AboutPage/About'
import Clients from '@/components/AboutPage/Clients'
// import Experts from '@/components/AboutPage/Experts'
import Guiders from '@/components/AboutPage/Guiders'
import Faqs from '@/components/Common/FAQs'
import FooterCTA from '@/components/Common/FooterCta'
// import Recognized from '@/components/Homepage/Recognized'
import Layout from '@/components/Layout'
import React from 'react'
import dynamic from 'next/dynamic'
import Journey from '@/components/AboutPage/Journey'
import { FAQJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/config/metadata'
import Hero from '@/components/Common/Hero'
const TechPartners = dynamic(() => import('@/components/AboutPage/TechPartners'), {
  ssr: true,
})
const Experts = dynamic(() => import('@/components/AboutPage/Experts'), {
  ssr: true,
})
const Recognized = dynamic(() => import('@/components/Homepage/Recognized'), {
  ssr: true,
})

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
        <FAQJSONLD faqs={faqData}/>
        <Layout>
            <Hero heroData={heroData} />
            <About />
            <Journey />
            <TechPartners />
            <Clients />
            <Experts heading={"Driven by Vision. Built by Experts."}/>
            <Guiders heading={" Guided by Industry Luminaries"}/>
            <Recognized />
            <Faqs  data={faqData}/>
            <FooterCTA footerCTAData={footerCTAData} />
        </Layout>
        </>
    )
}

const heroData = {
    heading: "Building the Future of AI, One Enterprise at a Time",
    para: "We’re Data Science Wizards — a deep-tech AI company enabling businesses to move from experimentation to real-world impact with scalable, secure, and production-ready AI.​",
    paraClass: "w-[80%] max-sm:w-[95%]",
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
const faqData = [
  {
    question: "What is UnifyAI?",
    answer:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    question: "Who can use UnifyAI?",
    answer:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    question: "How does UnifyAI integrate with existing systems?",
    answer:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    question: "Is UnifyAI secure?",
    answer:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    question: "What types of AI models does UnifyAI support?",
    answer:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
]
