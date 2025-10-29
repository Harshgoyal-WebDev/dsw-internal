import Faqs from "@/components/Common/FAQs";
import SuccessStories from "@/components/Homepage/SuccessStories";
import Tour from "@/components/Common/Tour";
import Layout from "@/components/Layout";
import AiEverywhere from "@/components/UnifyPage/AiEverywhere";
import Diagram from "@/components/UnifyPage/Diagram";
import OnePlatform from "@/components/UnifyPage/OnePlatForm";
import PresentationLayer from "@/components/UnifyPage/PresentationLayer";
import Usecase from "@/components/UnifyPage/Usecase";
import React from "react";
import Impact from "@/components/UnifyPage/Impact";
import FooterCTA from "@/components/Common/FooterCta";
import UsecaseMobile from "@/components/UnifyPage/UsecaseMobile";
import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";
import Hero from "@/components/Common/Hero";

export const metadata = getPageMetadata({
  title: "UnifyAI - Operating System for Enterprise AI",
  description:
    "Deploy AI use cases in 30 days, GenAI in hours — UnifyAI delivers full-stack, secure, scalable platform for enterprises.",
  url: "unify",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/unify",
    languages: {
      "x-default": "/unify",
    },
  },
  openGraph: {
    url: "unify",
    images: [
      {
        url: `${homepage}seo/unify.png`,
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
        <Tour
          heading={"Take a Lightning Tour of DSW UnifyAI"}
          para={
            "Your AI foundation — not just for today’s use cases, but for tomorrow’s vision.​"
          }
        />
        <Usecase />
        <UsecaseMobile />
        <PresentationLayer />
        <Diagram />
        <Impact />
        <OnePlatform />
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
  heading: "The Operating System for Enterprise AI ",
  para: "Deploy AI use cases in 30 days, GenAI in a few hours! ​",
  paraClass: "text-[2.5vw] max-sm:text-[4vw] max-sm:w-[90%]",
  link1: "/unify",
  btnText1: "Start Walkthrough",
  link2: "/#",
  btnText2: "Schedule a Call",
  homepage: false,
};
const footerCTAData = {
  heading: "Ready to Unify Your AI? ",
  para: "Launch smarter, faster, safer AI and GenAI use cases with DSW UnifyAI. ",
  btnText1: "Book a Demo",
  btnLink1: "/#",
  btnText2: "Contact Sales",
  btnLink2: "/#",
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
