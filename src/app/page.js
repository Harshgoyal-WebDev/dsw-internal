import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { getAllPosts } from "@/lib/posts";
import Layout from "@/components/Layout";
import OldHero from "@/components/Common/Hero";
import dynamic from "next/dynamic";

// Lazy load below-the-fold components
const About = dynamic(() => import("@/components/Homepage/About"));
const Blogs = dynamic(() => import("@/components/Homepage/Blogs"));
const Connects = dynamic(() => import("@/components/Homepage/Connects"));
const EnterpriseAI = dynamic(() => import("@/components/Homepage/EnterpriseAI"));
const Difference = dynamic(() => import("@/components/Homepage/Difference"));
const Insuraince = dynamic(() => import("@/components/Homepage/Insuraince"));
const Recognized = dynamic(() => import("@/components/Homepage/Recognized"));
const SuccessStories = dynamic(() => import("@/components/Homepage/SuccessStories"));
const Tour = dynamic(() => import("@/components/Common/Tour"));
const TurbochargeG = dynamic(() => import("@/components/Homepage/TurboChargeG"));
const UnifyAi = dynamic(() => import("@/components/Homepage/UnifyAi"));
const WhyUnify = dynamic(() => import("@/components/Homepage/WhyUnify"));
const Faqs = dynamic(() => import("@/components/Common/FAQs"));
const Clients = dynamic(() => import("@/components/Homepage/Clients"));
const WhyUnifyMobile = dynamic(() => import("@/components/Homepage/WhyUnifyMobile"));
const FooterCTA = dynamic(() => import("@/components/Common/FooterCta"));
const Brochure = dynamic(() => import("@/components/Homepage/Brochure"));

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
