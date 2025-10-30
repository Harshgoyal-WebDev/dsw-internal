import Faqs from "@/components/Common/FAQs";
import SuccessStories from "@/components/Homepage/SuccessStories";
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
import UnifyTour from "@/components/UnifyPage/UnifyTour";

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
  subheading: "Deploy AI use cases in 30 days, GenAI in a few hours! ​",
  para:"Launch your AI and GenAI use cases at record speed with one unified, production-grade platform - engineered for scale, security, and speed. Unify every step of the AI lifecycle, from data to deployment, on a single, scalable foundation.",
  paraClass: "w-[95%]",
  link1: "#tour-unify",
  btnText1: "Start Walkthrough",
  link2: "https://calendly.com/",
  btnText2: "Schedule a Call",
  target:true,
  homepage: false,
};
const footerCTAData = {
  heading: "Ready to Unify Your AI? ",
  para: "Launch smarter, faster, safer AI and GenAI use cases with DSW UnifyAI. ",
  btnText1: "Book a Demo",
  book:true,
  btnLink1: "/#",
  btnText2: "Contact Sales",
  btnLink2: "/contact-us",
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
