"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Copy from "../Animations/Copy";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function BlogContent() {
  const [activeSection, setActiveSection] = useState("Introduction");
  useEffect(() => {
    const h2Elements = document.querySelectorAll("h2");
    const triggers = [];

    h2Elements.forEach((h2) => {
      const trigger = ScrollTrigger.create({
        trigger: h2,
        start: "-400% top",
        end: "bottom top",
        onEnter: () => setActiveSection(h2.textContent.trim()),
        onEnterBack: () => setActiveSection(h2.textContent.trim()),
      });
      triggers.push(trigger);
    });

    return () => triggers.forEach((trigger) => trigger.kill());
  }, []);

  const handleScrollTo = (title) => {
    const h2Elements = document.querySelectorAll("h2");
    let targetH2 = null;

    h2Elements.forEach((h2) => {
      if (h2.textContent.trim() === title) {
        targetH2 = h2;
      }
    });

    if (targetH2) {
      setActiveSection(title);
      gsap.to(window, {
        duration: 2,
        scrollTo: { y: targetH2, offsetY: 100 },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section
      id="content"
      className="h-fit relative max-sm:flex-col bg-[#FEFEFE] container flex w-full"
    >
      <Copy>
        <h1 className="text-100 max-sm:flex hidden relative z-10 text-background">
          How Generative AI is Transforming the Insurance Industry
        </h1>
      </Copy>
      <div className="h-fit absolute max-sm:relative max-sm:py-[15vw] max-sm:w-full w-fit">
        <div className="flex flex-wrap items-center max-sm:items-start max-sm:justify-between max-sm:flex-row-reverse gap-y-[2.5vw]">
          {stickyTop.map((item, index) => (
            <div
              key={index}
              className="text-[1.05vw] max-sm:text-[5vw]  space-y-[.8vw] w-[50%] max-sm:w-[50%]"
            >
              <p className="text-background font-medium">{item.label}</p>
              <p className="text-[#626262]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-[2vw]  sticky top-[15%] mt-[15vw] max-sm:hidden h-full w-[55%] pr-[8vw]">
        <p className="text-[1.05vw] text-background  font-medium">
          Table of Contents
        </p>
        <div
          data-lenis-prevent
          className="w-fit overflow-y-scroll h-fit max-h-[55vh] max-sm:hidden rounded-[2vw] border border-black/10 drop-shadow-lg
           shadow-background bg-white p-[1vw]"
        >
          <ul className="flex flex-col items-start h-full gap-[1.5vw] list-disc p-[2vw]">
            {tableOfContents.map((item, index) => (
              <li
                key={index}
                onClick={() => handleScrollTo(item.title)}
                className={`text-[1.05vw] cursor-pointer transition-all duration-300 hover:text-primary-2 ${
                  activeSection === item.title
                    ? "text-primary-2 font-medium"
                    : "text-background"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-full  w-[100%]  text-background">
        <div id="Introduction" className="w-full border-b h-full">
          <div className="space-y-[2vw] max-sm:space-y-[8vw] pb-[3vw] max-sm:pb-[15vw] border-b">
            <h2 className="text-30 font-head">Introduction</h2>
            <div>
              <p>
                In an industry defined by data, regulation, and customer trust,
                Generative AI (GenAI) is rapidly emerging as a transformative
                force in insurance. From automating claims to creating
                personalized policies and improving fraud detection, GenAI is
                helping insurers rethink how they operate, interact, and deliver
                value.
              </p>
              <p>
                At Data Science Wizards (DSW), we work with leading insurers to
                bring GenAI out of the lab and into production—safely, quickly,
                and compliantly. Here's how it's changing the game.
              </p>
            </div>
          </div>
          <div className="space-y-[3vw] max-sm:py-[15vw] py-[3vw]">
            <div className="space-y-[2vw] max-sm:space-y-[8vw]">
              <div className="flex items-center max-sm:items-start max-sm:gap-[2vw] gap-[1vw]">
                <div className="w-[.3vw] h-[.3vw] ml-[1vw] max-sm:ml-0 max-sm:translate-y-[200%] max-sm:h-[1.5vw] max-sm:w-[1.5vw] bg-background "></div>
                <h2 className="text-30 font-head">What Is Generative AI?</h2>
              </div>
              <div>
                <p>
                  Generative AI refers to models (like LLMs) that can generate
                  new content—text, images, code, or even decisions—based on
                  patterns in the data they've been trained on. Unlike
                  traditional ML, which is focused on prediction or
                  classification, GenAI enables creation and intelligent
                  interaction. In insurance, this unlocks entirely new use cases
                  and efficiencies, especially when paired with a strong
                  governance framework.
                </p>
              </div>
            </div>
            <div className="space-y-[2vw] max-sm:space-y-[8vw]">
              <div className="flex items-center max-sm:items-start max-sm:pt-[5vw] max-sm:gap-[2vw] gap-[1vw]">
                <div className="w-[.3vw] h-[.3vw] ml-[1vw] max-sm:ml-0 max-sm:translate-y-[200%] max-sm:h-[1.5vw] max-sm:w-[1.5vw] bg-background "></div>
                <h2 className="text-30 font-head">
                  Top Use Cases of GenAI in Insurance
                </h2>
              </div>
              <div>
                <p>
                  <span className="font-medium">
                    Automated Claims Processing:
                  </span>{" "}
                  Manual claims review is time-consuming and error-prone. With
                  GenAI, insurers can:
                </p>
                <ul className="list-disc pl-[2vw] max-sm:pl-[5vw] py-[1vw] max-sm:py-[8vw] max-sm:space-y-[2vw] space-y-[0.5vw] marker:text-sm">
                  <li>Extract and summarize claims documents</li>
                  <li>Auto-generate response templates for approval/denial</li>
                  <li>Speed up settlements with fewer human touchpoints</li>
                </ul>
                <p className="pt-[.5vw] max-sm:pt-[3vw]">
                  → Result: Faster turnaround, reduced operational costs, and
                  better customer satisfaction.
                </p>
              </div>
              <div>
                <p className="max-sm:pb-[5vw]">
                  <span className="font-medium">
                    Fraud Detection & Risk Analysis:
                  </span>{" "}
                  By synthesizing data from various sources—applications,
                  historical claims, behavioral patterns—GenAI can flag
                  anomalies and generate risk narratives to support decisions.
                </p>
                <ul className="list-disc pl-[2vw] max-sm:pl-[5vw] py-[1vw] max-sm:space-y-[2vw] space-y-[0.5vw] marker:text-sm">
                  <li>Detecting fraudulent language patterns</li>
                  <li>
                    Generating fraud likelihood summaries for investigators
                  </li>
                  <li>Scoring new claims in context</li>
                </ul>
                <p className="pt-[.5vw] max-sm:pt-[5vw]">
                  → Result: Stronger fraud defenses, supported by explainable
                  AI.
                </p>
              </div>
              <div>
                <p className="max-sm:pb-[5vw]">
                  <span className="font-medium">
                    Fraud Detection & Risk Analysis:
                  </span>{" "}
                  By synthesizing data from various sources—applications,
                  historical claims, behavioral patterns—GenAI can flag
                  anomalies and generate risk narratives to support decisions.
                </p>
                <ul className="list-disc pl-[2vw] max-sm:pl-[5vw] py-[1vw] max-sm:space-y-[2vw] space-y-[0.5vw] marker:text-sm">
                  <li>Detecting fraudulent language patterns</li>
                  <li>
                    Generating fraud likelihood summaries for investigators
                  </li>
                  <li>Scoring new claims in context</li>
                </ul>
                <p className="pt-[.5vw] max-sm:pt-[5vw]">
                  → Result: Stronger fraud defenses, supported by explainable
                  AI.
                </p>
              </div>
              <div>
                <p className="max-sm:pb-[5vw]">
                  <span className="font-medium">
                    Fraud Detection & Risk Analysis:
                  </span>{" "}
                  By synthesizing data from various sources—applications,
                  historical claims, behavioral patterns—GenAI can flag
                  anomalies and generate risk narratives to support decisions.
                </p>
                <ul className="list-disc pl-[2vw] max-sm:pl-[5vw] py-[1vw] max-sm:space-y-[2vw] space-y-[0.5vw] marker:text-sm">
                  <li>Detecting fraudulent language patterns</li>
                  <li>
                    Generating fraud likelihood summaries for investigators
                  </li>
                  <li>Scoring new claims in context</li>
                </ul>
                <p className="pt-[.5vw] max-sm:pt-[5vw]">
                  → Result: Stronger fraud defenses, supported by explainable
                  AI.
                </p>
              </div>
            </div>
            <div className="h-[50vh] max-sm:my-[12vw] max-sm:rounded-[5vw] max-sm:h-[25vh]  rounded-[1vw] overflow-hidden w-full relative">
              <Image
                alt={activeSection}
                fill
                src={"/assets/images/blog-detail/blogs.jpg"}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-[2vw] max-sm:space-y-[8vw]">
              <div className="flex items-center max-sm:items-start max-sm:gap-[3vw] gap-[1vw]">
                <div className="w-[.3vw] h-[.3vw] ml-[1vw] max-sm:ml-0 max-sm:translate-y-[200%] max-sm:h-[1.5vw] max-sm:w-[1.5vw] bg-background "></div>
                <h2 className="text-30 font-head">
                  Addressing Compliance & Security in GenAI
                </h2>
              </div>
              <div>
                <p>
                  Insurance is a highly regulated space. That's why deploying
                  GenAI responsibly is non-negotiable. With DSW's UnifyAI
                  platform, insurers benefit from:
                </p>
                <ul className="list-disc pl-[2vw] max-sm:pl-[5vw] py-[1vw] max-sm:py-[5vw] max-sm:space-y-[3vw] space-y-[0.5vw] marker:text-sm">
                  <li>
                    SOC 2, ISO 27001, HIPAA & GDPR-compliant infrastructure
                  </li>
                  <li>Built-in model governance & explainability</li>
                  <li>
                    Audit logs, role-based access, and bias monitoring tools
                  </li>
                </ul>
                <p>
                  Enterprise GenAI doesn't have to be risky. With the right
                  guardrails, it becomes your most powerful advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const stickyTop = [
  { label: "Publication Date", value: "October 15, 2024" },
  { label: "Category", value: "AI" },
  { label: "Reading Time", value: "10 Min" },
  { label: "Author Name", value: "Dr. Emily Walker" },
];
const tableOfContents = [
  { title: "Introduction", id: "Introduction" },
  { title: "What Is Generative AI?", id: "WhatIsGenerativeAI" },
  {
    title: "Top Use Cases of GenAI in Insurance",
    id: "TopUseCasesofGenAIinInsurance",
  },
  {
    title: "Addressing Compliance & Security in GenAI",
    id: "AddressingCompliance",
  },
];
