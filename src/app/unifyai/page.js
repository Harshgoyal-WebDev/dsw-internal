import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const AiEverywhere = dynamic(
  () => import("@/components/UnifyPage/AiEverywhere"),
  { ssr: true }
);

const Usecase = dynamic(
  () => import("@/components/UnifyPage/Usecase"),
  { ssr: true }
);

const UsecaseMobile = dynamic(
  () => import("@/components/UnifyPage/UsecaseMobile"),
  { ssr: true }
);
import React from "react";
const Impact = dynamic(
  () => import("@/components/UnifyPage/Impact"),
  { ssr: true }
);

const UnifyTable = dynamic(
  () => import("@/components/UnifyPage/UnifyTable"),
  { ssr: true }
);

const SuccessStories = dynamic(
  () => import("@/components/Homepage/SuccessStories"),
  { ssr: true }
);
import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";
import Hero from "@/components/Common/Hero";
const UnifyTour = dynamic(
  () => import("@/components/UnifyPage/UnifyTour"),
  { ssr: true }
);

const PresentationLayer = dynamic(
  () => import("@/components/UnifyPage/PresentationLayer"),
  { ssr: true }
);
const Architecture = dynamic(
  () => import("@/components/Homepage/Architecture"),
  { ssr: true }
);

const ArchitectureMobile = dynamic(
  () => import("@/components/Homepage/ArchitectureMobile"),
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


export const metadata = getPageMetadata({
  title: "UnifyAI - Operating System for Enterprise AI",
  description:
    "Deploy AI use cases in 30 days, GenAI in hours — UnifyAI delivers full-stack, secure, scalable platform for enterprises.",
  url: "unify",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/unifyai",
    languages: {
      "x-default": "/unifyai",
    },
  },
  openGraph: {
    url: "unifyai",
    images: [
      {
        url: `${homepage}seo/unifyai.png`,
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
      <FAQJSONLD faqs={faqData} />
      <Layout>
        <Hero heroData={heroData} />
        <AiEverywhere />
        <UnifyTour/>
        <Usecase data={usecaseData} />
        <UsecaseMobile usecaseData={usecaseData} heading='Supercharge Your AI/ML Use Cases ' headingHeight='h-[5vw]' />
        <PresentationLayer />
        <Architecture showHeading2={true}/>
        <ArchitectureMobile showHeading2={true}/>
        <Impact />
        {/* <OnePlatform /> */}
        <UnifyTable />

        <SuccessStories />
        <Faqs data={faqData} />
        <FooterCTA
          footerCTAData={footerCTAData}
          width={"w-[80%]"}
          paraWidth={"w-[75%]"}
        />
      </Layout>
    </>
  );
}

const heroData = {
  heading: "The Enterprise AI/ML Platform Built for Real-World Deployment",
  // subheading: "Deploy AI use cases in 30 days.",
  para:"No more delays. No more stalled pilots. Just production-ready AI/ML in weeks.",
  paraClass: "w-[95%]",
  headingWidth:"w-[80%]",
  link1: "#tour-unify",
  btnText1: "Start Walkthrough",
  link2: "https://calendly.com/",
  btnText2: "Schedule a Call",
  target:true,
  walkthrough:true,
  homepage: false,
};

const footerCTAData = {
  heading: "Ready to Unify Your AI?",
  para: "Launch smarter, faster, scalable AI / ML use cases with DSW UnifyAI.",
  btnText1: "Book a Demo",
  book:true,
  btnLink1: "/#",
  btnText2: "Contact Sales",
  btnLink2: "/contact-us",
  img1: "/assets/images/footer/3.png",
  img2: "/assets/images/footer/4.png",
};
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

const usecaseData =
[
    {
      id: "001",
      title: "UnifyAI ",
      description:"Build, test, deploy, and monitor AI/ML models with lightning speed using accelerated workflows ",
      features: [
        "400+ pre-built connectors for seamless data ingestion and transformation ",
        "Core AI/ML engine with built-in model selection and evaluation ",
        "Real-time monitoring with performance, drift, and anomaly tracking",
        "One-click deployment to production environments "
      ],
      z:"z-[100]",
    },
   
    {
      id: "002",
      title: "Unified Ops ",
      description:"One platform. One centralized AI ecosystem. Total control.",
      features: [
        "Centralized observability across models and agents ",
        "Built-in compliance – ISO 42001, SOC 2, ISO 27001, HIPAA, GDPR",
        "Full traceability with logs, alerts, and audit trails  ",
      ],
      z:"z-[300]"
    },
   
  ];

