import About from "@/components/Homepage/About";
import Blogs from "@/components/Homepage/Blogs";
import Connects from "@/components/Homepage/Connects";
import EnterpriseAI from "@/components/Homepage/EnterpriseAI";
import Difference from "@/components/Homepage/Difference";
import Insuraince from "@/components/Homepage/Insuraince";
import Recognized from "@/components/Homepage/Recognized";
import SuccessStories from "@/components/Homepage/SuccessStories";
import Tour from "@/components/Common/Tour";
import TurbochargeG from "@/components/Homepage/TurboChargeG";
import UnifyAi from "@/components/Homepage/UnifyAi";
import WhyUnify from "@/components/Homepage/WhyUnify";
import Layout from "@/components/Layout";
import Faqs from "@/components/Common/FAQs";
import Clients from "@/components/Homepage/Clients";
import WhyUnifyMobile from "@/components/Homepage/WhyUnifyMobile";
import FooterCTA from "@/components/Common/FooterCta";
import {
  FAQJSONLD,
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebpageJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";
import { getAllPosts } from "@/lib/posts";
import OldHero from "@/components/Common/Hero";
import dynamic from "next/dynamic";
const Brochure = dynamic(() => import("@/components/Homepage/Brochure"), {
  ssr: true,
});

export const metadata = {
  title: "DSW UnifyAI – Enterprise AI Platform for Insurance",
  description:
    "Launch AI use cases in days — scale fast, reduce cost, deploy GenAI in hours with DSW UnifyAI’s insurance-focused enterprise AI platform.",
  url: "",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
};

export default async function Home() {
  const { posts } = await getAllPosts();
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />
      <FAQJSONLD faqs={faqData} />
      <Layout>
        <OldHero heroData={heroData} />
        <TurbochargeG />
        <About />
        <Insuraince />
        <Tour
          heading={"Take a Lightning Tour"}
          para={
            "Your OS for AI- not just for today's use cases, but for tomorrow's vision."
          }
          img={"/assets/images/homepage/tour-img.png"}
        />
        <Difference />
        <Brochure />
        <UnifyAi />
        <WhyUnify />
        <WhyUnifyMobile />
        <EnterpriseAI />
        <Recognized />
        <Connects />
        <Clients />
        <SuccessStories />
        <Blogs posts={posts} />
        <Faqs data={faqData} />
        <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"} />
      </Layout>
    </>
  );
}
const heroData = {
  heading: "Launch AI use cases in days. GenAI in hours.​ ",
  para: "The enterprise platform built for speed and scale.​ Go from pilot to production – faster and smarter with DSW UnifyAI​",
  paraClass: "",
  link1: "/#",
  btnText1: "Start Walkthrough",
  link2: "/#",
  btnText2: "Schedule a Call",
  homepage: true,
};

const footerCTAData = {
  heading: "Take a lightning tour of the Enterprise AI Platform ",
  para: "Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
  btnText1: "Book a demo",
  btnLink1: "/#",
  btnText2: "Schedule a Call",
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
