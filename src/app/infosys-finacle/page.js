import Layout from "@/components/Layout";

import FooterCTA from "@/components/Common/FooterCta";
import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import Faqs from "@/components/Common/FAQs";
import AgenticFeatures from "@/components/AgenticAI/AgenticFeatures";
import SuccessStories from "@/components/Homepage/SuccessStories";
import InfosysHero from "@/components/InfosysFinacle/InfosysHero";
import Deployments from "@/components/InfosysFinacle/Deployments";
import Recognized from "@/components/InfosysFinacle/Recognized";
import DeliveringSuccess from "@/components/InfosysFinacle/DeliveringSuccess";
import Expertise from "@/components/InfosysFinacle/Expertise";
import CohesiveValue from "@/components/InfosysFinacle/CohesiveValue";
import EngagementModel from "@/components/InfosysFinacle/EngagementModel";

export const metadata = {
  title: "DSW UnifyAI – Enterprise AI Platform for Insurance",
  description:
    "Launch AI use cases in days — scale fast, reduce cost, deploy GenAI in hours with DSW UnifyAI’s insurance-focused enterprise AI platform.",
  url: "",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
};

export default async function InfosysFinacle() {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <FAQJSONLD faqs={faqData} />
      <Layout>
        <InfosysHero/>
        <Deployments/>
        <Recognized/>
        <DeliveringSuccess/>
        <Expertise/>
        <EngagementModel/>
        <CohesiveValue/>
        <SuccessStories />
        <Faqs data={faqData}  />
        <FooterCTA isSubheading={true} footerCTAData={footerCTAData} width={"w-[70%]"} paraWidth={"w-[80%]"} />
      </Layout>
    </>
  );
}

const footerCTAData = {
  heading: "DSW AgenticAI for BFSI​ ",
  subHeading:'Turn AI pilots into auditable, production-grade agents ',
  para: "Unify data, models and agent orchestration with pre-built BFSI playbooks, audit-first governance and human-in-the-loop controls - built for regulated financial services.​",
  book: true,
  btnText1: "Book a Demo",
  book: true,
  btnLink1: "/#",
  target: true,
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
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

const usecaseData = [
    {
      id: "001",
      title: "DataOps ",
      description:"Real-time ingestion, automated validation, lineage tracking, quality checks, and graph-native pipelines with explainability and proactive alerting.  ",
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
      title: "AgenticAI Studio",
      description:"Design, configure, and launch enterprise-grade GenAI agents with ease",
      features: [
        "Agentic AI drag and drop workflows and framework for task-based orchestration ",
        "LLM model plug-ins with customizable tools, memory, and prompts ",
        "Secure integration with internal knowledge bases and APIs ",
        "Guardrails and governance by design for safe, compliant outputs "
      ],
      z:"z-[200]",
    },
    {
      id: "003",
      title: "AgenticAI Workflow Builder ",
      description:"Real-time ingestion, automated validation, lineage tracking, quality checks, and graph-native pipelines with explainability and proactive alerting. ",
      features: [
        "Centralized observability across models and agents ",
        "Built-in compliance – ISO 42001, SOC 2, ISO 27001, HIPAA, GDPR",
        "Full traceability with logs, alerts, and audit trails  ",
      ],
      z:"z-[300]"
    },
   
  ];

  const resultsData = [
  {
    id: "01",
     src: "/assets/icons/insuraince/underwriting.svg",
    title: "InsurAInce",
    description:
      "Purpose-built for insurers: claims orchestration, fraud triage, underwriting augmentation and customer engagement automation.",
  },
  {
    id: "02",
    src: "/assets/icons/insuraince/claims.svg",
    title: "BankAI",
    description:
      "For banks & financial institutions: lending decision support, compliance automation, fraud monitoring and risk remediation.",
  },
  {
    id: "03",
    src: "/assets/icons/agentic-ai/roadmap.svg",
    title: "Roadmap",
    description:
      "Next: telecom, healthcare and other regulated industries where auditability and governance are critical.",
  },
];

const outcomesData = {
  heading: "How AgenticAI Works",
  headingWidth: "w-[60%]",
  showDescription: false,
  headingCenter: true,
  points: [
    {
      id: "01",
      title: "Connect",
      text: "Ingest enterprise data through managed connectors and DataOps pipelines.",
    },
    {
      id: "02",
      title: "Build",
      text: "Author and test agents in AgenticAI Studio (fine-tune, simulate, validate).",
    },
    {
      id: "03",
      title: "Orchestrate",
      text: "Compose agents, models and enterprise logic into auditable workflows using Workflow Builder.",
    },
    {
      id: "04",
      title: "Operate",
      text: "Enforce runtime policies, monitor telemetry, and maintain immutable audit trails and reports.",
    },
  ],
};



