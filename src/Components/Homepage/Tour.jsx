import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "../Button/PrimaryButton";
import Copy from "../Animations/Copy";

const Tour = () => {
  const [activeTab, setActiveTab] = useState("aiStudio");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="w-screen h-fit px-[5vw] py-[7%] max-sm:px-[7vw] max-sm:py-[15%]" id="tour">
      <div className="w-full flex flex-col gap-[2vw] items-center max-sm:gap-[4vw]">
        <h2 className="title-2 headingAnim">Take a Lightning Tour</h2>
        <Copy>
          <p className="text-[#CACACA]">
            Your OS for AI- not just for today's use cases, but for tomorrow's
            vision.
          </p>
        </Copy>

        {/* Tab Switcher */}
        <div className="w-fit flex rounded-full border-blue-1 border p-[0.2vw] !text-[1.15vw] fadeup relative max-sm:mt-[10vw] max-sm:!text-[4.2vw] max-sm:p-[0.5vw]">
          {/* Thumb Track */}
          <div className="w-full h-[90%] absolute thumb-track max-sm:h-[92%]">
            <motion.div
              className="w-[13vw] h-full rounded-full bg-blue-1 thumb-button max-sm:w-[40vw]"
              animate={{
                x: activeTab === "aiStudio" ? 0 : "13vw",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          </div>

          {/* AI Studio Tab */}
          <motion.div
            className="w-[13vw] px-[1.5vw] py-[1vw] flex items-center justify-center relative z-[2] cursor-pointer max-sm:w-[40vw] max-sm:py-[3vw]"
            id="aiStudio"
            onClick={() => handleTabClick("aiStudio")}
          >
            <motion.p
              animate={{
                color: activeTab === "aiStudio" ? "#ffffff" : "#CACACA",
              }}
              transition={{ duration: 0.3 }}
            >
              AI Studio
            </motion.p>
          </motion.div>

          {/* GenAI Studio Tab */}
          <motion.div
            className="w-[13vw] px-[1.5vw] py-[1vw] flex items-center justify-center relative z-[2] cursor-pointer max-sm:w-[40vw] max-sm:py-[3vw]"
            id="genStudio"
            onClick={() => handleTabClick("genStudio")}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.p
              animate={{
                color: activeTab === "genStudio" ? "#f1f1f1" : "#CACACA",
              }}
              transition={{ duration: 0.3 }}
            >
              GenAI Studio
            </motion.p>
          </motion.div>
        </div>

        {/* Content Containers */}
        <div className="w-[80%] h-[30vw] relative fadeup mt-[5vw] max-sm:w-full max-sm:h-[60vw] max-sm:mt-[12vw]">
          <AnimatePresence mode="wait">
            {/* AI Studio Container */}
            {activeTab === "aiStudio" && (
              <motion.div
                key="aiStudio"
                className="w-full h-full absolute top-0 left-0 aiStudio-container"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  zIndex: 1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  zIndex: 10,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  zIndex: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={"/assets/images/homepage/tour-img.png"}
                  alt="AI Studio tour image"
                  className="w-full h-full object-cover rounded-lg"
                  width={900}
                  height={400}
                />

                <motion.div
                  className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <PrimaryButton
                    text={"Experience AI Studio"}
                    className=""
                    href={"/ai-studio"}
                  />
                </motion.div>
              </motion.div>
            )}

            {/* GenAI Studio Container */}
            {activeTab === "genStudio" && (
              <motion.div
                key="genStudio"
                className="w-full h-full absolute top-0 left-0 genStudio-container"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  zIndex: 1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  zIndex: 10,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  zIndex: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={"/assets/images/homepage/tour-img.png"}
                  alt="GenAI Studio tour image"
                  className="w-full h-full object-cover rounded-lg"
                  width={900}
                  height={400}
                />

                <motion.div
                  className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <PrimaryButton
                    text={"Explore GenAI Studio"}
                    className=""
                    href={"/genai-studio"}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Tour;
