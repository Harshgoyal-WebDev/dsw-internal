import Faqs from '@/components/Common/FAQs'
import FooterCTA from '@/components/Common/FooterCta'
import Layout from '@/components/Layout'
import Empower from '@/components/Workshops/Empower'
import Features from '@/components/Workshops/Features'
import Hero from '@/components/Workshops/Hero'
import Outcomes from '@/components/Workshops/Outcomes'
import WorkshopFlow from '@/components/Workshops/WorkshopFlow'
import React from 'react'

const page = () => {
  return (
    <>
    <Layout>
        <Hero heroData={heroData}/>
        <Features featuresData={featuresData}/>
        <WorkshopFlow sessionsData={sessionsData} space={"space-y-[2vw]"}/>
        <Outcomes outcomesData={outcomesData}/>
        <Empower heading="Ready to Empower Your Team with Practical AI Skills?" para="Fill out the form" width={"w-[90%]"}/>
        <Faqs />
        <FooterCTA footerCTAData={footerCTAData}/>
    </Layout>
    </>
  )
}

export default page

const heroData={
    heading:"Equip Your Team With Real-World AI & GenAI Skills for Insurance",
    para:"The insurance industry is evolving—and AI is no longer optional. Our hands-on workshops are designed specifically for insurers ready to unlock real value from AI, Machine Learning, and Generative AI. Led by enterprise AI experts, these sessions blend strategy, compliance, and implementation—all tailored for insurance workflows.",
    width:"w-[75%]"
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
  heading:"Take a lightning tour of the Enterprise AI Platform ",
  para:"Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
  btnText1:"Book a demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"/#",
  img1:"/assets/images/footer/image-1.png",
  img2:"/assets/images/footer/image-2.png"
}