import Faqs from '@/components/Common/FAQs'
import FooterCTA from '@/components/Common/FooterCta'
import Hero from '@/components/Common/Hero'
import Layout from '@/components/Layout'
import Empower from '@/components/Workshops/Empower'
import Features from '@/components/Workshops/Features'
import Outcomes from '@/components/Workshops/Outcomes'
import WorkshopFlow from '@/components/Workshops/WorkshopFlow'
import { getPageMetadata } from '@/config/metadata'
import { BreadcrumbsJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import React from 'react'


export const metadata = getPageMetadata({
  title: "AI for Insurance Workshop | DSW",
  description: "Join our hands-on AI & GenAI workshop for insurers - build prototypes, learn compliance, and turn ideas into action in underwriting, claims & fraud.",
  url: "resources/webinars-and-workshops/ai-for-insurance-workshop",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/webinars-and-workshops/ai-for-insurance-workshop",
    languages: {
      "x-default": "/webinars-and-workshops/ai-for-insurance-workshop",
    },
  },
  openGraph: {
    url: "resources/webinars-and-workshops/ai-for-insurance-workshop",
    images: [
      {
        url: `${homepage}seo/ai-for-insurance.png`,
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
        <WorkshopFlow sessionsData={sessionsData} space={"space-y-[2vw]"}/>
        <Outcomes outcomesData={outcomesData}/>
        <Empower heading="Ready to Empower Your Team with Practical AI Skills?" para="Fill out the form" width={"w-[90%]"}/>
        <Faqs data={faqData}/>
        <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"}/>
    </Layout>
    </>
  )
}

export default page

const heroData={
    heading:"Equip Your Team With Real-World AI & GenAI Skills for Insurance",
    para:"The insurance industry is evolving—and AI is no longer optional. Our hands-on workshops are designed specifically for insurers ready to unlock real value from AI, Machine Learning, and Generative AI. Led by enterprise AI experts, these sessions blend strategy, compliance, and implementation—all tailored for insurance workflows.",
    width:"w-[75%]",
    headingWidth:'w-[75%]',
    paraClass:'w-[93%]',
    hidebtn: true,
}
const featuresData=[
  {
    icon: "/assets/icons/workshops/business-icon.svg",
    title: "Business & Operations Leaders",
    para: "Discover how AI can improve efficiency, reduce risk, and unlock new revenue opportunities across the insurance value chain.",
  },
  {
    
    icon: "/assets/icons/workshops/data-science-icon.svg",
    title: "Data Science & Analytics Teams",
    para: "Explore hands-on methods to train, fine-tune, and deploy models tailored for fraud detection, claims automation, and more. ",
  },
  {
   
    icon: "/assets/icons/workshops/data-science-icon.svg",
    title: "Risk, Compliance & IT Professionals",
    para: "Understand governance frameworks, model explainability, and security protocols that align with industry regulations like SOC 2, ISO 27001, HIPAA, and GDPR.",
  },
  {
    icon: "/assets/icons/workshops/business-icon.svg",
    title: "Innovation, Product & Strategy Leaders",
    para: "Identify high-impact AI use cases and learn how to bring GenAI projects from concept to production in days—not months.",
  },
  
];
const sessionsData=[
  {
    title:"AI Use Cases in Insurance",
    duration:"1 hr.",
    list:[
      {
        heading:"AI in Insurance – The Big Picture:",
        para:"Get a clear intro to how ML, NLP, and predictive analytics are transforming the insurance landscape."
      },
      {
        heading:"High-Impact Use Cases:",
        para:"Explore real examples of AI improving claims processing, underwriting, fraud detection, CX, and risk management."
      },
      {
        heading:"Value Across the Value Chain:",
        para:"Join an interactive session on how AI drives measurable ROI across every stage of the insurance lifecycle."
      },
    ]
  },
  {
    title:"AI Use Cases in Insurance",
    duration:"1 hr.",
    list:[
      {
        heading:"AI in Insurance – The Big Picture:",
        para:"Get a clear intro to how ML, NLP, and predictive analytics are transforming the insurance landscape."
      },
      {
        heading:"High-Impact Use Cases:",
        para:"Explore real examples of AI improving claims processing, underwriting, fraud detection, CX, and risk management."
      },
      {
        heading:"Value Across the Value Chain:",
        para:"Join an interactive session on how AI drives measurable ROI across every stage of the insurance lifecycle."
      },
    ]
  },
  {
    title:"AI Use Cases in Insurance",
    duration:"1 hr.",
    list:[
      {
        heading:"AI in Insurance – The Big Picture:",
        para:"Get a clear intro to how ML, NLP, and predictive analytics are transforming the insurance landscape."
      },
      {
        heading:"High-Impact Use Cases:",
        para:"Explore real examples of AI improving claims processing, underwriting, fraud detection, CX, and risk management."
      },
      {
        heading:"Value Across the Value Chain:",
        para:"Join an interactive session on how AI drives measurable ROI across every stage of the insurance lifecycle."
      },
    ]
  },
  {
    title:"AI Use Cases in Insurance",
    duration:"1 hr.",
    list:[
      {
        heading:"AI in Insurance – The Big Picture:",
        para:"Get a clear intro to how ML, NLP, and predictive analytics are transforming the insurance landscape."
      },
      {
        heading:"High-Impact Use Cases:",
        para:"Explore real examples of AI improving claims processing, underwriting, fraud detection, CX, and risk management."
      },
      {
        heading:"Value Across the Value Chain:",
        para:"Join an interactive session on how AI drives measurable ROI across every stage of the insurance lifecycle."
      },
    ]
  },
  {
    title:"AI Use Cases in Insurance",
    duration:"1 hr.",
    list:[
      {
        heading:"AI in Insurance – The Big Picture:",
        para:"Get a clear intro to how ML, NLP, and predictive analytics are transforming the insurance landscape."
      },
      {
        heading:"High-Impact Use Cases:",
        para:"Explore real examples of AI improving claims processing, underwriting, fraud detection, CX, and risk management."
      },
      {
        heading:"Value Across the Value Chain:",
        para:"Join an interactive session on how AI drives measurable ROI across every stage of the insurance lifecycle."
      },
    ]
  },
  {
    title:"AI Use Cases in Insurance",
    duration:"1 hr.",
    list:[
      {
        heading:"AI in Insurance – The Big Picture:",
        para:"Get a clear intro to how ML, NLP, and predictive analytics are transforming the insurance landscape."
      },
      {
        heading:"High-Impact Use Cases:",
        para:"Explore real examples of AI improving claims processing, underwriting, fraud detection, CX, and risk management."
      },
      {
        heading:"Value Across the Value Chain:",
        para:"Join an interactive session on how AI drives measurable ROI across every stage of the insurance lifecycle."
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
    title: "Clear AI Roadmap",
    text: "Identify high-impact use cases tailored to your insurance workflows—from underwriting to claims automation.",
    width: "w-[30%]",
  },
  {
    id: "02",
    title: "Hands-On GenAI Experience",
    text: "Build and deploy a working AI/GenAI prototype using your own or sample data—no-code to full-code options available.",
    width: "w-full",
  },
  {
    id: "03",
    title: "Compliance-First AI Knowledge",
    text: "Understand how to align AI solutions with SOC 2, ISO 27001, HIPAA, and GDPR standards.",
    width: "w-full",
  },
  {
    id: "04",
    title: "Cross-Functional Alignment",
    text: "Align business, data, and tech teams on a shared AI vision and execution path.",
    width: "w-[60%] max-sm:w-full",
  },
  {
    id: "05",
    title: "Access to Expert Frameworks & Templates",
    text: "Take home checklists, governance templates, and deployment blueprints used by top insurers.",
    width: "w-[60%] max-sm:w-full",
  }
]
}

const footerCTAData={
  heading:"Take a lightning tour of the Enterprise AI Platform ",
  para:"Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
  btnText1:"Book a Demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"https://calendly.com/",
  book:true,
  target:true,
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