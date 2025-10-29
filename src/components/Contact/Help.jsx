"use client";
import Image from "next/image";
import React from "react";
import { LinkButton } from "../Button/LinkButton";


const Help = () => {

    return (
        <section
            id="contact-help"
            className="w-screen h-full container space-y-[3vw] !pb-[15vw] max-md:space-y-[15vw] mt-[-30vh] relative z-[50]"
        >
            <h2 className="text-90 font-head headingAnim">
                How can we help you?
            </h2>
            <div
                className="flex justify-between items-center w-full max-md:gap-[8vw] pt-[5vw] max-md:flex-col"

            >
                <div className="w-[49%] h-full p-[3vw] py-[3.5vw] space-y-[2.5vw]  border  bg-white/5 background-glass backdrop-blur-sm border-white/15 rounded-[2vw] max-md:h-full max-md:w-full  max-md:rounded-3xl max-md:justify-between max-md:px-[7vw] max-md:py-[8vw] max-md:space-y-[7vw] fadeup">
                    <h3 className="text-50 font-head">Sales</h3>
                    <p className="text-white-300 ">
                        Become the backbone of enterprise AI. Just as Linux became the foundation of modern computing, DSW UnifyAI is emerging as the OS for AI - a platform that brings together open innovation
                    </p>
                    <LinkButton
                        href="/#"
                        text={"Contact to Sales Team"}

                    />
                </div>

                 <div className="w-[49%] h-full p-[3vw] py-[3.5vw] space-y-[2.5vw] border  bg-white/5 background-glass backdrop-blur-sm border-white/15 rounded-[2vw] max-md:h-full max-md:w-full  max-md:rounded-3xl max-md:justify-between max-md:px-[7vw] max-md:py-[8vw] max-md:space-y-[7vw] fadeup">
                    <h3 className="text-50 font-head">Schedule a Call</h3>
                    <p className="text-white-300 ">
                       Become the backbone of enterprise AI. Just as Linux became the foundation of modern computing, DSW UnifyAI is emerging as the OS for AI - a platform that brings together open innovation
                    </p>
                    <LinkButton
                        href="https://calendly.com/"
                        text={"Schedule a Call"}
                        target="_blank"

                    />
                </div>
            </div>
        </section>
    );
};

export default Help;
