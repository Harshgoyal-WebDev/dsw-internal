import dynamic from "next/dynamic";

const About = dynamic(
  () => import("@/components/Insuraince/About"),
  { ssr: true }
);

const Features = dynamic(
  () => import("@/components/Insuraince/Features"),
  { ssr: true }
);

const Capabilities = dynamic(
  () => import("@/components/Insuraince/Capabilities"),
  { ssr: true }
);

const Results = dynamic(
  () => import("@/components/Insuraince/Results"),
  { ssr: true }
);

const SuccessStories = dynamic(
  () => import("@/components/Homepage/SuccessStories"),
  { ssr: true }
);
const PlatformCapabilities = dynamic(
  () => import("@/components/Insuraince/PlatformCapabilities"),
  { ssr: true }
);

const Outcomes = dynamic(
  () => import("@/components/Insuraince/Outcomes"),
  { ssr: true }
);

const Efficiency = dynamic(
  () => import("@/components/Insuraince/Efficiency"),
  { ssr: true }
);

const CustomerQuotes = dynamic(
  () => import("@/components/Insuraince/CustomerQuotes"),
  { ssr: true }
);

const FutureScope = dynamic(
  () => import("@/components/Insuraince/FutureScope"),
  { ssr: true }
);

const Faqs = dynamic(
  () => import("@/components/Common/FAQs"),
  { ssr: true }
);

const FooterCTA = dynamic(
  () => import("@/components/Common/FooterCta"),
  { ssr: true }
);
import Layout from "@/components/Layout";
import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";
import Hero from "@/components/Common/Hero";

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
        <Results heading='AI That Drives Results in Underwriting, Claims, Fraud, and CX  ' description='Go live with AI/ML use cases in 30 days and Agentic AI use cases in just few hours with enterprise-grade readiness right from day one.  The purpose-built solution brings a library of ready-to-deploy AI/ML models and GenAI agents specifically designed for insurers to solve core challenges across the policy lifecycle.' results={resultsData} />
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
  paraClass: "w-[60%] max-md:w-full",
  link1: "/#",
  openModalKey:"demo" ,
  btnText1: "Book a Demo",
  target: true,
  book: true,
  homepage: false,
  headingWidth: "w-[80%] max-md:w-full"
}

const footerCTAData = {
  heading: "Ready to Launch Agentic AI in few Hours? AI/ML Use Cases in 30 Days? ",
  para: "Let’s transform your insurance business with real AI. From claims to fraud to underwriting, this solution helps you deploy AI with speed, security, and impact. ",
  btnText1: "Book a Demo",
  btnLink1: "#",
  btnText2: "Schedule a Call",
  btnLink2: "https://calendly.com/",
  book: true,
  target: true,
  img1: "/assets/images/footer/cta-1.png",
  img2: "/assets/images/footer/cta-3.png"
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
    question: "What is Agentic AI, and why is it a game-changer for businesses using DSW Agentic AI?",
    answer:
      ["Agentic AI is like giving your AI systems the ability to think, plan, and act on their own to complete complex business tasks. Instead of just answering a question, it can break down a goal, execute the steps, and learn how to do it better next time. DSW Agentic AI provides the tools and structure (the 'control center') needed to safely build, deploy, and manage these independent AI agents, ensuring they operate efficiently and deliver real business value across many different applications."],
  },
  {
    question: "How does AgenticAI go beyond traditional AI to solve complex business problems?",
    answer:
      ["Traditional AI handles single, repetitive tasks based on strict rules (like a simple chatbot that only responds to set keywords). Agentic AI, however, acts as a genuine problem-solver: it can break down a large business goal, figure out the necessary steps, use different external systems (like a human would), and continuously learn and correct its course as needed. This capability allows AgenticAI platform users to automate complex, multi-step processes like end-to-end customer service resolution, supply chain optimization, or even autonomous software engineering—moving far beyond simple responses into true operational management."],
  }
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
