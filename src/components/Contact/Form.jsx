import React from "react";
import ContactForm from "./ContactForm";
import Copy from "../Animations/Copy";
import SocialLink from "../ui/SocialLink";
import { SOCIAL_LINKS } from "@/constants/siteConfig";

const Form = () => {
  return (
    <section className="w-screen h-full overflow-hidden relative z-[10]">
      <div className="h-full w-full flex items-start justify-between  container max-sm:flex-col max-md:flex-col max-sm:gap-[8vw] max-md:gap-[10vw] max-sm:px-[5.5vw] max-md:px-[4vw]">
        <div className="w-[52%] h-full  max-sm:w-full max-md:w-[100%] space-y-[1.5vw] max-md:space-y-[3vw] max-sm:space-y-[4.5vw] flex flex-col justify-between gap-[6.5vw]">
          <div className="h-[35%]  space-y-[1.5vw] max-md:space-y-[5vw]">
            <h2 className="w-[90%] text-90  font-head text-white-200 headingAnim max-md:!text-[11.5vw]">
              Have a specific  request or question?
            </h2>

            <div className="w-[45%] max-sm:w-[85%] max-md:w-[85%]">
              <Copy>
                <p className="text-white-300 font-normal">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </Copy>
            </div>
          </div>
          

          <div className="h-[40%] max-md:hidden flex flex-col justify-between  gap-[3vw]">
            <div className="space-y-[0.3vw] text-head text-white-300 font-normal fadeup">
              <p>Phone:</p>

              <p className=" cursor-pointer link-line">+353894015233</p>
              <p className=" cursor-pointer link-line">+919664056847</p>
            </div>

            <div className="text-white-300 space-y-[0.3vw] fadeup">
              <p>E-mail:</p>
<a href="mailto:contact@datasciencewizards.ai" terget="_blank">
              <p className=" cursor-pointer link-line">contact@datasciencewizards.ai</p>
              </a>
            </div>

            <div className="text-white-300 space-y-[0.8vw] fadeup">
                <p>Socials:</p>
              <ul className="flex gap-4 max-md:items-center max-md:justify-center max-md:mt-[15vw]">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.id} className="group">
                    <SocialLink
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      variant="footer"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[47%] mt-[15vw] max-md:w-[100%] max-sm:w-full max-md:mt-0">
          <ContactForm />
        </div>

                <div className="hidden max-md:block">

              
          <div className="h-[40%] max-md:pt-[5vw] flex flex-col justify-between gap-[5vw] ">
            <div className="space-y-[0.3vw] text-head text-white-300 font-normal">
              <p>Phone:</p>

              <p className="underline cursor-pointer ">+353894015233</p>
              <p className="underline cursor-pointer">+919664056847</p>
            </div>

            <div className="text-white-300 space-y-[0.3vw]">
              <p>E-mail:</p>

              <p className="underline cursor-pointer">contact@datasciencewizards.ai</p>
            </div>

            <div className="text-white-300 space-y-[0.8vw]">
                <p>Socials:</p>
              <ul className="flex gap-4 max-md:items-center max-md:justify-center max-md:mt-[5vw]">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.id} className="group">
                    <SocialLink
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      variant="footer"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
            </div>
      </div>
    </section>
  );
};

export default Form;
