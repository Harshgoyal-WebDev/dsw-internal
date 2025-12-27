import React from "react";
import Layout from "@/components/Layout";
import FooterCTA from "@/components/Common/FooterCta";
import Expect from "@/components/Webinars/Expect";
import UpcomingWebinars from "@/components/Webinars/UpcomingWebinars";
import Workshops from "@/components/Webinars/Workshops";
import WatchOnDemand from "@/components/Webinars/WatchOn-Demand";
import { homepage } from "@/lib/util";
import { BreadcrumbsJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/config/metadata";
import Hero from "@/components/Common/Hero";
import InternalHero from "@/components/Common/InternalHero";


export const metadata = getPageMetadata({
  title: "Webinars & Events — DSW UnifyAI Live Sessions",
  description: "Join DSW’s webinars, virtual events & masterclasses to explore enterprise AI, GenAI strategies & AI deployments in insurance, banking, healthcare.",
  url: "resouces/webinars-and-events",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/webinars-and-events",
    languages: {
      "x-default": "/webinars-and-events",
    },
  },
  openGraph: {
    url: "resources/webinars-and-events",
    images: [
      {
        url: `${homepage}seo/webinars-and-events.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
const Page = () => {
  return (
    <>
      <WebpageJsonLd metadata={metadata}/>
      <BreadcrumbsJSONLD pathname={metadata.url}/>
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
  paraClass: "w-[70%] max-md:w-full ",
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
  btnLink2: "/contact-us",
  img1: "/assets/images/footer/cta-5.png",
  img2: "/assets/images/footer/cta-6.png",
};