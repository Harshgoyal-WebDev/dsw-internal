'use client'

import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function Content() {
  const navLinks = [
     {
        id: "#use-of-montra-platform",
        text: "Use of the Montra Platform / Montra Services",
      },
      { id: "#acceptance", text: "Acceptance" },
      { id: "#eligibility", text: "Eligibility" },
      { id: "#other-terms-and-conditions", text: "Other Terms and Conditions" },
      { id: "#ssoid-services", text: "SSOID Service, Participating Platforms" },
      { id: "#communication-property", text: "Communication Policy" },
      { id: "#montra-platform", text: "Use of Montra Platform" },
      { id: "#prohibited-conduct", text: "Prohibited Conduct" },
      {
        id: "#termination-agreement-violations",
        text: "Termination; Agreement Violations",
      },
      {
        id: "#limitation-of-liability-and-damages",
        text: "Limitation of Liability and Damages",
      },
      { id: "#indemnification", text: "Indemnification" },
      { id: "#disclaimer-no-warranties", text: "Disclaimer; No Warranties" },
      {
        id: "#ownership-proprietary-rights",
        text: "Ownership; Proprietary Rights",
      },
      {
        id: "#modification-of-this-agreement",
        text: "Modification of This Agreement",
      },
      { id: "#notice", text: "Notice" },
      { id: "#waiver", text: "Waiver" },
      { id: "#dispute-resolution", text: "Dispute Resolution" },
      {
        id: "#governing-law-and-forum-for-disputes",
        text: "Governing Law and Forum for Disputes",
      },
      { id: "#severability", text: "Severability" },
      { id: "#survival", text: "Survival" },
      { id: "#headings", text: "Headings" },
      { id: "#entire-agreement", text: "Entire Agreement" },
      {
        id: "#bill-payments-and-digital-products-terms-conditions",
        text: "Bill Payments and Digital Products Terms & Conditions",
      },
      { id: "#montra-recharges", text: "Montra Recharges" },
      { id: "#refund-policy", text: "Refund Policy" },
      { id: "#bill-payments", text: "Bill Payments" },
]

  const [isActive, setIsActive] = useState(null);

  const handleScroll = (id) => {
    setIsActive(id);
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: id,
        offsetY: 50,
      },
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
     const triggers = navLinks.map((item) => {
          const id = item.id.replace("#", "");
      
          return ScrollTrigger.create({
            trigger:`#${id}`,
            start: "top center",
            end: "bottom center",
            onEnter: () => setIsActive(item.id),
            onEnterBack: () => setIsActive(item.id),
          });
        });
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
    <section>
    <div className="w-full h-full flex relative container">
      <div className="w-[25%] flex flex-col gap-[.5vw] px-[2vw] capitalize py-[8vw] sticky top-[-6%] h-fit max-md:hidden">
        {navLinks.map((item) => (
          <p
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`nav-link w-fit cursor-pointer duration-300 ease-in ${
              isActive == item.id ? "text-primary" : "text-[#BBBBBB]"
            }`}
          >
            {item.text.length > 20
              ? item.text.split(" ").slice(0, 3).join(" ") + "..."
              : item.text}
          </p>
        ))}
      </div>
      <div
        className="w-[60%] h-fit py-[8vw] gap-[7vw] flex flex-col max-md:pl-[5vw] max-md:pr-[10vw] max-md:w-full"
        
      >
        <div className="" id="use-of-montra-platform"> 
        <h2 className="text-60">
         Welcome to datasciencewizards
        </h2>
        <p className="text-[1.15vw]">
         These terms and conditions outline the rules and regulations for the use of DATA SCIENCE WIZARDS PVT LTD’s Website, located at www.datasciencewizards.ai. By accessing this website we assume you accept these terms and conditions. Do not continue to use datasciencewizards.in if you do not agree to take all of the terms and conditions stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
        </p>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}
