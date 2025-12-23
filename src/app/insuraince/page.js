
import About from "@/components/Insuraince/About";
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
      <WebpageJsonLd metadata={metadata} />
      <FAQJSONLD faqs={faqData} />
      <Layout>
        <Hero heroData={heroData} />
        <About />
        <Features />
        <Capabilities />
        <Results heading='AI That Drives Results in Underwriting, Claims, Fraud, and CX  ' description='Go live in 30 days with enterprise-grade models that work from day one. insurAInce brings a library of ready-to-deploy AI/ML models designed specifically for insurers to solve core challenges across the policy lifecycle.' results={resultsData} />
        <SuccessStories />
        <PlatformCapabilities />
        <Outcomes />
        <Efficiency />
        <CustomerQuotes />
        <FutureScope />
        <Faqs data={faqData} />
        <FooterCTA footerCTAData={footerCTAData} paraWidth={"w-[85%]"} />
      </Layout>
    </>
  );
}

const heroData = {
  heading: "Deploy Insurance AI in Days. Scale Agentic AI in Hours.",
  // img:"/assets/images/insuraince/insuraince-new.png",
  // subheading:"Purpose-Built, Proven, and Production-Ready.",
  para: "Purpose-built and production-proven. Drive speed and accuracy across the insurance value chain with an AI solution designed for rigorous compliance.",
  paraClass: "w-[90%]",
  link1: "/contact-us",
  btnText1: "Book a Demo",
  target: true,
  book: true,
  homepage: false,
  headingWidth: "w-[80%]"
}

const footerCTAData = {
  heading: "Ready to Launch GenAI in few Hours? AI/ML Use Cases in 30 Days? ",
  para: "Let’s transform your insurance business with real AI. From claims to fraud to underwriting, insurAInce helps you deploy AI with speed, security, and impact. ",
  btnText1: "Book a Demo",
  btnLink1: "#",
  btnText2: "Schedule a Call",
  btnLink2: "https://calendly.com/",
  book: true,
  target: true,
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png"
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

const resultsData = [
  {
    id: "01",
    src: "/assets/icons/insuraince/underwriting.svg",
    title: 'Underwriting',
    description: "Predict risk, segment customers, and reduce manual decisioning ",
  },
  {
    id: "02",
    src: "/assets/icons/insuraince/claims.svg",
    title: 'Claims',
    description: "Classify documents, assess claim legitimacy, and optimize settlement cycles ",
  },
  {
    id: "03",
    src: "/assets/icons/insuraince/fraud.svg",
    title: 'Fraud',
    description: "Detect early signs of fraud with real-time pattern recognition ",
  },
]
