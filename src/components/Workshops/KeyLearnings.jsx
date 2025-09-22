'use client';
import React from "react";


const capabilities = [
  {
    text: "Develop hands-on AI expertise by actively building and deploying use cases.",
  },
  {
    text: "Learn practical approaches to AI adoption at scale, from experimentation to deployment.",
  },
  {
    text: "Gain exposure to AI/ML and GenAI frameworks used in leading enterprises.",
  },
  {
    text: "Understand the AI/ML lifecycle and the transition to production-ready solutions.",
  },
];

const KeyLearnings = () => {

  return (
    <section className="h-full container">
    
      <div className="flex justify-between max-sm:flex-col pt-[4vw] max-sm:pt-[10vw]">
        <div className="w-[45%] max-sm:w-[100%]">
          
            <h3 className="text-white-200 text-60 headingAnim max-sm:text-center  font-head">
              Key Learning Objectives
            </h3>
          
        </div>

      <div className="w-[40%]">
  <div className="space-y-[2vw] w-full">
    {capabilities.map((cap,index) => (
      <div key={index} className="relative pb-[2vw]">
        <ul className="list-disc space-y-[2vw] ml-[2vw]">
          <li className="relative fadeup">
              <p className="text-white-300 w-[80%]">{cap.text}</p>
          </li>
        </ul>
        <span className="w-full h-[1px] bg-[#59595980] absolute left-0 bottom-0 lineDraw" />
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default KeyLearnings;
