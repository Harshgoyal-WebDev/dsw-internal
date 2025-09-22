import React from "react";
import Layout from "@/components/Layout";
import FooterCTA from "@/components/Common/FooterCta";
import Hero from "@/components/Common/Hero";
import Listing from "@/components/Whitepapers/Listing";


const Page = () => {
  return (
    <>
      <Layout>
        <Hero heroData={heroData} />
        <Listing/>
        <FooterCTA footerCTAData={footerCTAData} />
      </Layout>
    </>
  );
};

export default Page;

const heroData = {
  heading: "Deep Insights. Real Strategies. Enterprise-Ready AI Intelligence.",
  para: "Our curated collection of whitepapers gives you actionable insights, frameworks, and technical guidance to navigate enterprise AI adoption with confidence. Whether you’re evaluating platforms, planning your compliance roadmap, or scaling AI across departments, these research-backed resources will help you make strategic, future-proof decisions.​",
  paraClass: "w-[90%]",
  homepage: false,
  hidebtn: true,
  headingWidth:"w-[80%]"
};

const footerCTAData = {
  heading: "Take a lightning tour of the Enterprise AI Platform ",
  para: "Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security. ",
  btnText1: "Book a demo",
  btnLink1: "/#",
  btnText2: "Schedule a Call",
  btnLink2: "/#",
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
};
