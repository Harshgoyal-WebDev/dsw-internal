
import About  from "@/components/Insuraince/About";
import Features from "@/components/Insuraince/Features";
import Capabilities from "@/components/Insuraince/Capabilities";
import Results from "@/components/Insuraince/Results";
import PlatformCapabilities from "@/components/Insuraince/PlatformCapabilities";
import Outcomes from "@/components/Insuraince/Outcomes";
import Efficiency from "@/components/Insuraince/Efficiency";
import CustomerQuotes from "@/components/Insuraince/CustomerQuotes";
import FutureScope from "@/components/Insuraince/FutureScope";
import Layout from "@/components/Layout";
import Faqs from "@/components/Common/FAQs";
import FooterCTA from "@/components/Common/FooterCta";
import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";
import Hero from "@/components/Common/Hero";
import SuccessStories from "@/components/Homepage/SuccessStories";

export const metadata = getPageMetadata({
  title: "Enterprise AI for Insurance - insurAInce by DSW",
  description: "insurAInce is a unified AI & GenAI platform built for insurers — deploy AI use cases in days, agents in hours, with compliance and scale.",
  url: "insuraince",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/insuraince",
    languages: {
      "x-default": "/insuraince",
    },
  },
  openGraph: {
    url: "insuraince",
    images: [
      {
        url: `${homepage}seo/insuraince.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});


export default function Home() {
  return (
    <>
     <WebpageJsonLd metadata={metadata}/>
     <FAQJSONLD faqs={faqData}/>
      <Layout>
      <Hero heroData={heroData}/>
      <About />
      <Features />
      <Capabilities />
      <Results />
      <SuccessStories />
      <PlatformCapabilities />
      <Outcomes />
      <Efficiency />
      <CustomerQuotes />
      <FutureScope />
      <Faqs data={faqData}/>
      <FooterCTA footerCTAData={footerCTAData} paraWidth={"w-[85%]"}/>
      </Layout>
    </>
  );
}

const heroData= {
  heading:" Enterprise AI Platform for Insurance",
  img:"/assets/images/insuraince/insuraince-new.png",
  // subheading:"Purpose-Built, Proven, and Production-Ready.",
  para:"Purpose-Built, Proven, and Production-Ready . insurAInce is the enterprise AI platform designed for insurers to build GenAI agents in hours, deploy AI use cases in days, and scale confidently with compliance, speed, and accuracy – all through your policy lifecycle.​",
  paraClass:"w-[90%]",
  link1:"/unifyai",
  btnText1:"Start Walkthrough",
  link2:"https://calendly.com/",
  btnText2:"Schedule a Call",
  target:true,
  walkthrough:true,
  homepage:false,
  headingWidth:"w-[80%]"
}

const footerCTAData={
  heading:"Ready to Launch GenAI in few Hours? AI/ML Use Cases in 30 Days? ",
  para:"Let’s transform your insurance business with real AI. From claims to fraud to underwriting, insurAInce helps you deploy AI with speed, security, and impact. ",
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
      ["UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."],
  },
  {
    question: "Who can use UnifyAI?",
    answer:
      ["UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."],
  },
  {
    question: "How does UnifyAI integrate with existing systems?",
    answer:
      ["UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."],
  },
  {
    question: "Is UnifyAI secure?",
    answer:
      ["UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."],
  },
  {
    question: "What types of AI models does UnifyAI support?",
    answer:
      ["UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability."],
  },
]
