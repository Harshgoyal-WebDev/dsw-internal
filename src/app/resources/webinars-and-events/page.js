import React from "react";
import Layout from "@/components/Layout";
import FooterCTA from "@/components/Common/FooterCta";
import Hero from "@/components/Common/Hero";
import Expect from "@/components/Webinars/Expect";
import UpcomingWebinars from "@/components/Webinars/UpcomingWebinars";
import Workshops from "@/components/Webinars/Workshops";
import WatchOnDemand from "@/components/Webinars/WatchOn-Demand";

const Page = () => {
  return (
    <>
      <Layout>
       <Hero heroData={heroData} breadcrumbs={true}/>
       <Expect/>
       <UpcomingWebinars/>
       <Workshops/>
       <WatchOnDemand/>
        <FooterCTA footerCTAData={footerCTAData} />
      </Layout>
    </>
  );
};

export default Page;

const heroData = {
  heading: "Stay Ahead with Live Insights, Expert Panels & Hands-On Learning",
  para: "At Data Science Wizards, we don’t just talk about AI—we show you how to build it, deploy it, and scale it securely in the enterprise. Our webinars, virtual sessions, and live events are designed to help decision-makers, technologists, and innovators stay ahead in the fast-moving world of AI and GenAI.​",
  paraClass: "w-[70%] max-sm:w-full",
  homepage: false,
  hidebtn: true,
  headingWidth:"w-[85%]"
};

const footerCTAData = {
  heading: "Looking to write about us or request an interview?",
  para: "Download our press kit or reach out directly to our media team.",
  btnText1: "Download Press Kit",
  btnLink1: "/#",
  btnText2: "Contact",
  btnLink2: "/#",
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
};
