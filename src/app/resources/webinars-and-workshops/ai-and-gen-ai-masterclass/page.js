import Faqs from '@/components/Common/FAQs'
import FooterCTA from '@/components/Common/FooterCta'
import Hero from '@/components/Common/Hero'
import Layout from '@/components/Layout'
import Empower from '@/components/Workshops/Empower'
import Features from '@/components/Workshops/Features'
import KeyLearnings from '@/components/Workshops/KeyLearnings'
import Outcomes from '@/components/Workshops/Outcomes'
import WorkshopFlow from '@/components/Workshops/WorkshopFlow'
import { getPageMetadata } from '@/config/metadata'
import { BreadcrumbsJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import React from 'react'

export const metadata = getPageMetadata({
  title: "AI & GenAI Masterclass | DSW",
  description: "Join DSW’s hands-on masterclass to build enterprise AI/GenAI use cases, learn strategy, architecture, governance & deployment with domain experts.",
  url: "resources/webinars-and-workshops/ai-and-gen-ai-masterclass",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/resources/webinars-and-workshops/ai-and-gen-ai-masterclass",
    languages: {
      "x-default": "/resources/webinars-and-workshops/ai-and-gen-ai-masterclass",
    },
  },
  openGraph: {
    url: "resources/webinars-and-workshops/ai-and-gen-ai-masterclass",
    images: [
      {
        url: `${homepage}seo/ai-and-genai.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
const page = () => {
  return (
    <>
     <WebpageJsonLd metadata={metadata}/>
              <BreadcrumbsJSONLD pathname={metadata.url}/>
    <Layout>
        <Hero breadcrumbs={true} heroData={heroData}/>
        <Features featuresData={featuresData}/>
        <KeyLearnings/>
        <WorkshopFlow sessionsData={sessionsData} space={"space-y-[0.5vw]"}/>
        <Outcomes outcomesData={outcomesData}/>
        <Empower heading="First Come First Basis - Limited Seats!" para="Sign-up for this No-fees Workshop | All participants earn AI Masterclass Completion Certificate." width={"w-[70%] max-md:w-[80%] max-sm:w-full"}/>
        <Faqs data={faqData}/>
        <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"}/>
    </Layout>
    </>
  )
}

export default page

const heroData={
    heading:"DeepTech AI + GenAI Hands-On Masterclass",
    para:"Led by AI architects and industry experts from Data Science Wizards (DSW), this session covers strategy, architecture, compliance, and practical implementation using our enterprise platform, UnifyAI. This intensive hands-on masterclass is designed for enterprises, innovation leaders, and technical teams who want to go beyond theory and bring AI and Generative AI into real-world production.",
    width:"w-[70%]",

    hidebtn: true,
}
const featuresData=[
  {
    icon: "/assets/icons/workshops/business-icon.svg",
    title: "CTOs, CIOs, and Heads of Innovation",
    para: "Learn how to align your organization’s AI roadmap with business goals, assess technology readiness, and accelerate adoption with governance-first deployment strategies. ",
  },
  {
    
    icon: "/assets/icons/workshops/data-science-icon.svg",
    title: "Product, Risk & Compliance Leaders",
    para: "Gain critical knowledge of AI explainability, bias mitigation, and regulatory compliance (SOC 2, GDPR, HIPAA, ISO 27001). Discover how to bring secure and trustworthy AI solutions to market while staying aligned with internal policies.",
  },
  {
   
    icon: "/assets/icons/workshops/data-science-icon.svg",
    title: "Data Science, Engineering & ML Ops Teams",
    para: "Get hands-on experience with building, deploying, and managing GenAI and ML models in production. Learn to scale infrastructure, operationalize models faster, and integrate securely with enterprise systems—all within days.",
  },
  {
    icon: "/assets/icons/workshops/business-icon.svg",
    title: "AI Strategy & Transformation Consultants",
    para: "Understand how to scope, prioritize, and scale GenAI initiatives for enterprise clients. Gain access to frameworks, best practices, and deployment blueprints trusted by Fortune 500 firms and leading insurers.",
  },
  
];
const sessionsData=[
  {
    title:"AI, ML, Generative AI and Enterprise Integration",
    duration:"1 hr.",
    list:[
      {
        heading:"",
        para:"Introduction to core concepts of AI, ML and Deep Learning."
      },
      {
        heading:"",
        para:"Real-world AI/ML enterprise use cases."
      },
      {
        heading:"",
        para:"Introduction to Generative AI and Large Language Models (LLMs)."
      },
      {
        heading:"",
        para:"Real-world applications of GenAI for automation and process optimization."
      },
    ]
  },
  {
    title:"Hands on experience of AI lifecycle till production",
    duration:"1 hr.",
    list:[
      {
        heading:"",
        para:"Exploring components of Machine Learning solution lifecycle like data ingestion, data munging, ML/DL modeling, deployment and monitoring."
      },
      {
        heading:"",
        para:"Applying strategies to verify Data drift and Model drift of ML/DL models. "
      },
      {
        heading:"",
        para:"Lifecycle of AI projects – from ideation to business transformation."
      },
    ]
  },
  {
    title:"Advanced AI and ML Use Cases for Enterprise Value",
    duration:"1 hr.",
    list:[
      {
        heading:"",
        para:"Overview of advanced ML algorithms."
      },
      {
        heading:"",
        para:"Applying predictive analytics to enterprise problems."
      },
      {
        heading:"",
        para:"Deploying AI solutions at scale – cloud and on-premises strategies."
      },
      {
        heading:"",
        para:"Hands-on problem-solving session – Applying advanced techniques to real-world problems."
      },
    ]
  },
  {
    title:"AI, ML, Generative AI and Enterprise Integration",
    duration:"1 hr.",
    list:[
      {
        heading:"",
        para:"Introduction to core concepts of AI, ML and Deep Learning."
      },
      {
        heading:"",
        para:"Real-world AI/ML enterprise use cases."
      },
      {
        heading:"",
        para:"Introduction to Generative AI and Large Language Models (LLMs)."
      },
      {
        heading:"",
        para:"Real-world applications of GenAI for automation and process optimization."
      },
    ]
  },
  {
    title:"Hands on experience of AI lifecycle till production",
    duration:"1 hr.",
    list:[
      {
        heading:"",
        para:"Exploring components of Machine Learning solution lifecycle like data ingestion, data munging, ML/DL modeling, deployment and monitoring."
      },
      {
        heading:"",
        para:"Applying strategies to verify Data drift and Model drift of ML/DL models. "
      },
      {
        heading:"",
        para:"Lifecycle of AI projects – from ideation to business transformation."
      },
    ]
  },
  {
    title:"Advanced AI and ML Use Cases for Enterprise Value",
    duration:"1 hr.",
    list:[
      {
        heading:"",
        para:"Overview of advanced ML algorithms."
      },
      {
        heading:"",
        para:"Applying predictive analytics to enterprise problems."
      },
      {
        heading:"",
        para:"Deploying AI solutions at scale – cloud and on-premises strategies."
      },
      {
        heading:"",
        para:"Hands-on problem-solving session – Applying advanced techniques to real-world problems."
      },
    ]
  },
 
];
const outcomesData={
heading:"Walk Away With Real-World Skills, Strategy & Clarity",
para:"By the end of this hands-on workshop, your team will be equipped to move AI projects from concept to execution with confidence. Expect tangible outcomes, not just theory.",
para2:"What You'll Gain:",
points:[
  {
    id: "01",
    title: "Build & Test a Working AI/GenAI Use Case",
    text: "Create and deploy a working AI or GenAI prototype using real or sample data—no-code to full-code.",
  },
  {
    id: "02",
    title: "Learn Enterprise AI Governance",
    text: "Understand how to manage AI securely with built-in compliance, auditability, and explainability.",
    
  },
  {
    id: "03",
    title: "Align Tech, Data & Business Teams",
    text: "Bridge the gap between technical teams and business stakeholders for faster, unified execution.",
    
  },
  {
    id: "04",
    title: "Get Proven Tools & Templates",
    text: "Walk away with deployment checklists, governance frameworks, and architecture blueprints used by top enterprises.",
    
  },
  {
    id: "05",
    title: "Earn a Certificate of Completion",
    text: "Showcase your skills with a DSW-issued certificate recognizing your AI readiness and hands-on expertise.",
    
  }
]
}

const footerCTAData={
  heading:"Take a lightning tour of the Enterprise AI Platform ",
  para:"Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
  btnText1:"Book a demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"/#",
  img1:"/assets/images/footer/image-1.png",
  img2:"/assets/images/footer/image-2.png"
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