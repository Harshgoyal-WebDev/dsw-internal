import Layout from "@/components/Layout";
// import AIPilots from '@/components/PilotProgram/AIPilots'
// import PilotProgramForm from '../../components/PilotForm/PilotProgramForm'
import InsidePilotProgram from "@/components/PilotProgram/InsidePilotProgram";
import Production from "@/components/PilotProgram/Production";
// import Transform from '@/components/PilotProgram/Transform'
import React from "react";
import FooterCTA from "@/components/Common/FooterCta";
import Faqs from "@/components/Common/FAQs";
import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";
import Hero from "@/components/Common/Hero";
import dynamic from "next/dynamic";
const Transform = dynamic(() => import("@/components/PilotProgram/Transform"), {
  ssr: true,
});
const PilotProgramForm = dynamic(
  () => import("@/components/PilotForm/PilotProgramForm"),
  {
    ssr: true,
  }
);
const AIPilots = dynamic(() => import("@/components/PilotProgram/AIPilots"), {
  ssr: true,
});

export const metadata = getPageMetadata({
  title: "Pilot Program - Validate AI & GenAI Use Cases Fast",
  description:
    "Join UnifyAI’s Pilot Program: deploy AI/GenAI in record time with governance, support, prebuilt models, and low risk validation across your business.",
  url: "pilot-program",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/production-pilot",
    languages: {
      "x-default": "/production-pilot",
    },
  },
  openGraph: {
    url: "pilot-program",
    images: [
      {
        url: `${homepage}seo/pilot-program.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
const page = () => {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <FAQJSONLD faqs={faqData} />
      <Layout>
        <Hero heroData={heroData} />
        <Production />
        <AIPilots />
        <Transform />
        <InsidePilotProgram />
        <PilotProgramForm />
        <Faqs data={faqData} />
        <FooterCTA footerCTAData={footerCTAData} />
      </Layout>
    </>
  );
};

export default page;

const heroData = {
  heading: "Pilot AI and GenAI Use Cases. Go Live in Record time. ​ ",
  para: "Deploy securely with enterprise-grade governance, compliance, and monitoring. ​",
  paraClass: "",
  link1: "/unifyai",
  btnText1: "Start Walkthrough",
  link2: "https://calendly.com/",
  btnText2: "Schedule a Call",
  target:true,
  walkthrough:true,
  homepage: false,
};

const footerCTAData = {
  heading: "Test drive the purpose - built insurance AI platform  ​",
  para: "",
  btnText1: "Book a Demo",
  btnLink1: "/#",
  btnText2: "Schedule a Call",
  btnLink2: "https://calendly.com/",
  book:true,
  target:true,
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
};
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
];
