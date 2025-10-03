import React from "react";
import Layout from "@/components/Layout";
import FooterCTA from "@/components/Common/FooterCta";
import Join from "@/components/CareerPage/Join";
import OpenRoles from "@/components/CareerPage/OpenRoles";
import OpenRolesMobile from "@/components/CareerPage/OpenRolesMobile";
import { WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";
import Hero from "@/components/Common/Hero";

export const metadata = getPageMetadata({
  title: "Join DSW - Careers in AI, Engineering & Innovation",
  description:
    "Explore career opportunities at DSW. Build enterprise AI solutions, grow in a collaborative environment, and transform industries with technology and impact.",
  url: "career",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/career",
    languages: {
      "x-default": "/career",
    },
  },
  openGraph: {
    url: "career",
    images: [
      {
        url: `${homepage}seo/career.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
const Page = () => {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Hero heroData={heroData} />
        <Join />
        <OpenRoles />
        <OpenRolesMobile />
        <FooterCTA footerCTAData={footerCTAData} />
      </Layout>
    </>
  );
};

export default Page;

const heroData = {
  heading: "Innovate. Scale. Transform — With DSW",
  para: "At DSW, we are transforming the way enterprises embed AI into their core business. By joining our team, you’ll work on groundbreaking technologies, from AI infrastructure to GenAI solutions, that shape industries worldwide. Here, innovation meets impact—and your career grows alongside the future of enterprise AI.​",
  paraClass: "",
  homepage: false,
  hidebtn: true,
  headingWidth: "w-[55%]",
  paraClass: "w-[60vw] max-md:w-full",
};

const footerCTAData = {
  heading: "Take a lightning tour of the Enterprise AI Platform ",
  para: "Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
  btnText1: "Book a demo",
  btnLink1: "/#",
  btnText2: "Schedule a Call",
  btnLink2: "/#",
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
};
