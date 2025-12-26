import dynamic from "next/dynamic";
const Tour = dynamic(() => import("@/components/Common/Tour"));
import Layout from "@/components/Layout";
import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import OldHero from "@/components/Common/Hero";
import UnifyAiSingle from "@/components/Homepage/UnifyAiSingle";
const Outcomes = dynamic(() => import("@/components/Workshops/Outcomes"));
const NewTurboChargeG = dynamic(() => import("@/components/Homepage/NewTurboChargeG"));
const RealOutcomes = dynamic(() => import("@/components/Homepage/RealOutcomes"));
import EnterpriseAIPlatform from "@/components/Homepage/EnterpriseAIPlatform";
import EnterpiseAgentPlatform from "@/components/Homepage/EnterpiseAgentPlatform";
const TwoPowerfulPlatform = dynamic(() => import("@/components/Homepage/TwoPowerfulPlatform"));
const NextAIInitiative = dynamic(() => import("@/components/Homepage/NextAIInitiative"));
const Recognized = dynamic(() => import("@/components/Homepage/Recognized"));
const Clients = dynamic(() => import("@/components/AboutPage/Clients"));
const IntelligentUseCases = dynamic(() => import("@/components/Homepage/IntelligentUseCases"));
const SuccessStories = dynamic(() => import("@/components/Homepage/SuccessStories"));
const FooterCTA = dynamic(() => import("@/components/Common/FooterCta"));
import EnterpriseAgentPlatformMobile from "@/components/Homepage/EnterpriseAgentPlatformMobile";
import EnterpriseAIPlatformMobile from "@/components/Homepage/EnterpriseAIPlatformMobile";
import Architecture from "@/components/Homepage/Architecture";
import ArchitectureMobile from "@/components/Homepage/ArchitectureMobile";

export const metadata = {
  title: "DSW UnifyAI – Enterprise AI Platform for Insurance",
  description:
    "Launch AI use cases in days — scale fast, reduce cost, deploy GenAI in hours with DSW UnifyAI’s insurance-focused enterprise AI platform.",
  url: "",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
};

export default async function Home() {
  // const { posts } = await getAllPosts();
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <FAQJSONLD faqs={faqData} />
      <Layout>
        <OldHero heroData={heroData} />
        <Outcomes
          marginTop="max-md:mt-[50vw]"
          showDescription={false}
          outcomesData={outcomesData}
        />
        <NewTurboChargeG />
        <RealOutcomes />
        <UnifyAiSingle />
        <TwoPowerfulPlatform />
        <EnterpriseAIPlatform />
        <EnterpriseAIPlatformMobile />
        <EnterpiseAgentPlatform />
        <EnterpriseAgentPlatformMobile />
        {/* <EnterpriseAI /> */}
        <Tour
          heading={"Take a Lightning Tour"}
          para={
            "Your OS for AI-not just for today's use cases, but for tomorrow's vision."
          }
          img={"/assets/images/homepage/tour-img.png"}
          btnText="See it, to believe it! ​"
        />
        <NextAIInitiative />
        <Recognized showMarquee={false} />
        <Clients showHeading={false} />
        {/* <Connects /> */}
        {/* <Clients /> */}
        <IntelligentUseCases sessionsData={sessionsData} />
        <Architecture />
        <ArchitectureMobile />
        <div className=" max-sm:mt-0">
          <SuccessStories />
        </div>
        {/* <Faqs data={faqData} /> */}
        <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"} />
      </Layout>
    </>
  );
}

const sessionsData = [
  {
    title: "AI, ML, Generative AI and Enterprise Integration",
    duration: "1 hr.",
    list: [
      {
        heading: "",
        para: "Introduction to core concepts of AI, ML and Deep Learning.",
      },
      {
        heading: "",
        para: "Real-world AI/ML enterprise use cases.",
      },
      {
        heading: "",
        para: "Introduction to Generative AI and Large Language Models (LLMs).",
      },
      {
        heading: "",
        para: "Real-world applications of GenAI for automation and process optimization.",
      },
    ],
  },
  {
    title: "Hands on experience of AI lifecycle till production",
    duration: "1 hr.",
    list: [
      {
        heading: "",
        para: "Exploring components of Machine Learning solution lifecycle like data ingestion, data munging, ML/DL modeling, deployment and monitoring.",
      },
      {
        heading: "",
        para: "Applying strategies to verify Data drift and Model drift of ML/DL models. ",
      },
      {
        heading: "",
        para: "Lifecycle of AI projects – from ideation to business transformation.",
      },
    ],
  },
  {
    title: "Advanced AI and ML Use Cases for Enterprise Value",
    duration: "1 hr.",
    list: [
      {
        heading: "",
        para: "Overview of advanced ML algorithms.",
      },
      {
        heading: "",
        para: "Applying predictive analytics to enterprise problems.",
      },
      {
        heading: "",
        para: "Deploying AI solutions at scale – cloud and on-premises strategies.",
      },
      {
        heading: "",
        para: "Hands-on problem-solving session – Applying advanced techniques to real-world problems.",
      },
    ],
  },
  {
    title: "AI, ML, Generative AI and Enterprise Integration",
    duration: "1 hr.",
    list: [
      {
        heading: "",
        para: "Introduction to core concepts of AI, ML and Deep Learning.",
      },
      {
        heading: "",
        para: "Real-world AI/ML enterprise use cases.",
      },
      {
        heading: "",
        para: "Introduction to Generative AI and Large Language Models (LLMs).",
      },
      {
        heading: "",
        para: "Real-world applications of GenAI for automation and process optimization.",
      },
    ],
  },
  {
    title: "Hands on experience of AI lifecycle till production",
    duration: "1 hr.",
    list: [
      {
        heading: "",
        para: "Exploring components of Machine Learning solution lifecycle like data ingestion, data munging, ML/DL modeling, deployment and monitoring.",
      },
      {
        heading: "",
        para: "Applying strategies to verify Data drift and Model drift of ML/DL models. ",
      },
      {
        heading: "",
        para: "Lifecycle of AI projects – from ideation to business transformation.",
      },
    ],
  },
  {
    title: "Advanced AI and ML Use Cases for Enterprise Value",
    duration: "1 hr.",
    list: [
      {
        heading: "",
        para: "Overview of advanced ML algorithms.",
      },
      {
        heading: "",
        para: "Applying predictive analytics to enterprise problems.",
      },
      {
        heading: "",
        para: "Deploying AI solutions at scale – cloud and on-premises strategies.",
      },
      {
        heading: "",
        para: "Hands-on problem-solving session – Applying advanced techniques to real-world problems.",
      },
    ],
  },
];
const outcomesData = {
  heading: "AI isn’t just a Tool. It’s a System. And DSW Powers the System. ",
  headingWidth: "w-[60%] max-md:w-full",
  para: "By the end of this hands-on workshop, your team will be equipped to move AI projects from concept to execution with confidence. Expect tangible outcomes, not just theory.",
  para2: "What You'll Gain:",
  headingCenter: true,
  points: [
    {
      id: "01",
      title: "Unified Enterprise Architecture",
      text: "AI/ML, GenAI, and Agentic AI operating under one governed, production-ready layer. ",
    },
    {
      id: "02",
      title: "Two Platforms, One Intelligent Flow",
      text: "UnifyAI powers the AI/ML lifecycle; AgenticAI orchestrates agents and enterprise workflows.",
    },
    {
      id: "03",
      title: "Built for Regulated Industries",
      text: "With deep BFSI knowledge and vertical solutions like insurAInce designed for insurance operations. ",
    },
  ],
};
const heroData = {
  heading: "Build, Operate, and Scale AI and Agentic AI across your Enterprise",
  headingWidth: "w-[80%]",
  para: " Production-ready platforms designed for intelligence, scale and real-world outcomes. ​",
  paraClass: "",
  link1: "/unifyai",
  btnText1: "DSW UnifyAI",
  link2: "/agentic-ai",
  btnText2: "DSW AgenticAI ",
  homepage: true,
  walkthrough: true,
  target: true,
};

const footerCTAData = {
  heading: "AI Isn’t About Just Use Cases. It’s About a Smarter System. ​ ",
  para: "Where every model, agent, workflow, and decision runs under unified governance.​",
  book: true,
  btnText1: "Book a Demo",
  book: true,
  btnLink1: "/#",
  btnText2: "Schedule a Call",
  btnLink2: "https://calendly.com/",
  target: true,
  img1: "/assets/images/footer/1new.png",
  img2: "/assets/images/footer/2new.png",
};
const faqData = [
  {
    question:
      "What is Agentic AI, and why is it a game-changer for businesses using DSW Agentic AI?",
    answer: [
      "Agentic AI is like giving your AI systems the ability to think, plan, and act on their own to complete complex business tasks. Instead of just answering a question, it can break down a goal, execute the steps, and learn how to do it better next time. DSW Agentic AI provides the tools and structure (the 'control center') needed to safely build, deploy, and manage these independent AI agents, ensuring they operate efficiently and deliver real business value across many different applications.",
    ],
  },
  {
    question:
      "How does Agentic AI go beyond traditional AI to solve complex business problems?",
    answer: [
      "Traditional AI handles single, repetitive tasks based on strict rules (like a simple chatbot that only responds to set keywords). Agentic AI, however, acts as a genuine problem-solver: it can break down a large business goal, figure out the necessary steps, use different external systems (like a human would), and continuously learn and correct its course as needed. This capability allows AgenticAI platform users to automate complex, multi-step processes like end-to-end customer service resolution, supply chain optimization, or even autonomous software engineering—moving far beyond simple responses into true operational management.",
    ],
  },
  {
    question:
      "What are the key benefits of adopting Agentic AI for businesses?",
    answer: [
      "Agentic AI drives operational transformation and delivers rapid financial returns by enabling autonomous, complex workflows. The core benefits include: <br/> <ul class='pl-8 py-3 space-y-2 list-disc'> <li>Significant cost reduction </li> <li> Speed and scalability </li>  <li> Consistent quality </li> </ul>",
    ],
  },
  {
    question:
      "Do Agentic AI systems collaborate, and if so, how do they communicate with each other?",
    answer: [
      "Yes, collaboration is key to Agentic AI. To tackle a large business goal, agents often work together like a specialized team.",
      "They communicate using structured digital 'messages' (data formats like JSON) or specialized messaging protocols. This ensures that their digital dialogue is precise, accurate, and that complex information is clearly understood between different agents as they coordinate tasks.",
    ],
  },
  {
    question:
      "How do AI Agents learn and continuously improve their performance?",
    answer: [
      "Agents learn by running a simple, powerful cycle: they take an action, observe the result (the outcome), and then evaluate whether that result moved them closer to the goal. They continuously adjust their strategies based on this feedback to get better results next time. This process is enabled by built-in feedback loops and a working memory, helping the agents constantly refine their plans, making them smarter, more accurate, and more efficient over time.",
    ],
  },
  {
    question:
      "Are AI Agents secure, and how is their access to sensitive data managed?",
    answer: [
      "Security is critical because AI agents often interact with highly sensitive data and core operating systems. To manage this risk, agents are never granted blanket access. Instead, they operate on a 'least privilege' principle: each agent is given only the specific permissions it needs to complete its assigned task, ensuring tight control and data protection.",
    ],
  },
  {
    question:
      "What are the 'Guardrails' in AI Agents, and why are they important?",
    answer: [
      "Guardrails are the essential, built-in safety mechanisms that prevent an AI Agent from acting outside its intended rules or boundaries.",
      "They are critical because they:",
      "<ul class='pl-8 py-3 space-y-4 list-disc'> <li> <span class='font-medium'>Enforce Safety:<span> They block the agent from producing inappropriate, biased, or harmful outputs (like providing unauthorized advice). </li><li> <span class='font-medium'>Prevent Errors:<span> They stop the agent from taking high-risk or irreversible actions (like deleting a record or spending over a budget) without human review.</li> <li> <span='font-medium'>Ensure Compliance:</span> They guarantee that the agent adheres to all legal, ethical, and company policies, ensuring the system remains trustworthy and compliant. </li>  </ul>",
    ],
  },
];
