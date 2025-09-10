import React from "react";
import TiltedCard from "../Animations/TiltedCard";
import PrimaryButton from "../Button/PrimaryButton";

const Brochure = () => {
  return (
    <section className="w-screen h-fit py-[7%] px-[5vw]" id="brochure">
      <div className="w-full flex flex-col items-center justify-center gap-[5vw]">
        <h2 className="w-[70%] text-center title-2 headingAnim">
          Join the Fastest-Moving Insurers on Their AI Journey 
        </h2>
        <div className="w-full flex justify-center gap-[3vw] fadeup">
          <TiltedCard
            containerHeight="40vw"
            containerWidth="33vw"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full px-[4vw] py-[4vw] flex flex-col justify-between">
                <h3 className="text-[1.5vw] w-[85%] h-fit">
                  25+ proven AI use cases across the policy lifecycle
                </h3>
                <div className="w-full flex flex-col h-fit space-y-[2vw]">
                  <h4 className="title-3">AI/ML</h4>
                  <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
                    <li>Fraud detection</li>
                    <li>​ Claims</li>
                    <li>​ Underwriting​</li>
                    <li> Automation & Ops</li>
                    <li>​ Regulatory and compliance </li>
                    <li>​ Sales and Marketing​ </li>
                    <li>CX</li>
                  </ul>
                </div>
                <div>
                  <PrimaryButton href={"/"} text={"Download PDF"} />
                </div>
              </div>
            }
          />
          <TiltedCard
            containerHeight="40vw"
            containerWidth="33vw"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full px-[4vw] py-[4vw] flex flex-col justify-between">
                <h3 className="text-[1.5vw] w-full h-fit">
                  300+ ready-to-deploy GenAI agents trained on insurance data 
                </h3>
                <div className="w-full flex flex-col h-fit space-y-[2vw]">
                  <h4 className="title-3">GenAI Agents​</h4>
                  <ul className="list-disc pl-[2vw] space-y-[0.5vw]">
                    <li>Sales and Marketing​</li>
                    <li>​ Underwriting​</li>
                    <li>​ Claims</li>
                    <li> New Business​</li>
                    <li>​ Operations </li>
                    <li>​ HR​ </li>
                    <li>IT</li>
                    <li>Legal & Compliance ​</li>
                  </ul>
                </div>
                <div>
                  <PrimaryButton href={"/"} text={"Download PDF"} />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Brochure;
