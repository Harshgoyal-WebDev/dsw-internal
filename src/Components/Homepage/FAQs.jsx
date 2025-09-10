import React, { useEffect } from "react";
// import { Accordion, AccordionItem } from "@heroui/accordion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "What is UnifyAI?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    title: "Who can use UnifyAI?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    title: "How does UnifyAI integrate with existing systems?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    title: "Is UnifyAI secure?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
  {
    title: "What types of AI models does UnifyAI support?",
    description:
      "UnifyAI is an enterprise AI platform that enables businesses to develop, deploy, and manage AI models seamlessly. It supports machine learning, Generative AI, and large language models (LLMs) while ensuring security, compliance, and scalability.",
  },
];

const Icon = ({ isOpen }) => {
  return (
    <div
      className={`size-10 p-2 flex items-center justify-center relative text-3xl text-white border border-zinc-700 rounded-full cursor-pointer ${
        isOpen ? "bg-gradient-to-r from-[#f16b0d] group to-[#e61216]" : ""
      } `}
    >
      <span className="w-2/5 h-[2px] bg-current absolute" />
      <span
        className={`w-2/5 h-[2px] bg-current rotate-90 absolute duration-300 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
  );
};

const FAQs = () => {

  // useEffect(() => {
  //   const faqAfters = document.querySelectorAll(".faq-lines");
  //   const ctx = gsap.context(() => {
  //     faqAfters.forEach((faqAfter) => {
  //       gsap.from(faqAfter, {
  //         "--beforeScaleX": 0,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: faqAfter,
  //           start: "top 70%",
  //           // markers:true,
  //           stagger: 1,
  //         },
  //       });
  //     });
  //   });
  //   return () => ctx.revert();
  // }, []);
  
  const itemClasses = {
    base: "py-5 w-full px-4  relative faq-lines",
    title: "font-medium text-[1.145vw] font-body text-[#E8E8E8]",
    trigger: "px-2 py-0 rounded-full h-14 flex items-center justify-between w-full",
    content: "text-[1.145vw] py-4 px-2 text-[#CACACA] w-5/6 font-body ",
  };

  return (
    <section className="h-full w-screen py-20">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-10 px-10">
        <h2 className="text-[5.2vw] leading-[1.2] text-center headingAnim font-head text-white-200">
          Frequently Asked Questions
        </h2>
      </div>

      {/* <div className="w-[80%] ml-auto mr-auto py-20">
        <Accordion
          showDivider={false}
          itemClasses={itemClasses}
          defaultExpandedKeys={["0"]}
        >
          {data.map((item, index) => (
            <>
              <AccordionItem
                key={index}
                aria-label={item.title}
                title={item.title}
                className="!w-full fadeup"
                indicator={({ isOpen }) => <Icon isOpen={isOpen} />}
              >
                {item.description}
              </AccordionItem>
            </>
          ))}
        </Accordion>
      </div> */}
    </section>
  );
};

export default FAQs;
