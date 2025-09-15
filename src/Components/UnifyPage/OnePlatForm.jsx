import React from "react";
import Image from "next/image";

export default function OnePlatform() {
  return (
    <div className="h-screen flex flex-row-reverse items-center justify-between py-[5vw] px-[4vw] w-full">
      <div className="w-full flex justify-center items-start flex-col gap-[4vw] h-full">
        <p className="sub-text-heading2">One Platform. Many Possibilities.</p>
        <p className="w-[90%] text-secondaryWhite text-content">
          From GenAI agents that automate knowledge work, to AI models that
          power predictions, decisions, and actions — UnifyAI gives enterprises
          the infrastructure to lead with AI.  This is not another tool. This is
          your operating system for enterprise AI. 
        </p>
      </div>
      <div className="w-full flex items-center justify-end relative h-full">
        <div className="relative z-[10] h-full w-full">
          <div className="w-[18vw] absolute top-[4vw] left-[18%] rounded-[1vw] h-auto overflow-hidden border border-foreground/30 ">
            <Image
              className="w-full object-cover h-full"
              alt="cta"
              height={500}
              width={500}
              src={"/assets/images/footer/image-1.png"}
            />
          </div>
          <div className="w-[16vw] absolute bottom-[1.2vw] left-[38%] rounded-[1vw] h-auto overflow-hidden border border-foreground/30 ">
            <Image
              className="w-full object-cover h-full"
              alt="cta"
              height={500}
              width={500}
              src={"/assets/images/footer/image-2.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
