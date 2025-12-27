import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import Hero from "@/components/Common/Hero";
import { WebpageJsonLd, FAQJSONLD } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";

/* -------------------- */
/* Dynamic SSR imports  */
/* -------------------- */

const Production = dynamic(
  () => import("@/components/PilotProgram/Production"),
  { ssr: true }
);

const AIPilots = dynamic(
  () => import("@/components/PilotProgram/AIPilots"),
  { ssr: true }
);

const Transform = dynamic(
  () => import("@/components/PilotProgram/Transform"),
  { ssr: true }
);

const InsidePilotProgram = dynamic(
  () => import("@/components/PilotProgram/InsidePilotProgram"),
  { ssr: true }
);

const PilotProgramForm = dynamic(
  () => import("@/components/PilotForm/PilotProgramForm"),
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
  img1: "/assets/images/footer/cta-3.png",
  img2: "/assets/images/footer/cta-1.png",
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
