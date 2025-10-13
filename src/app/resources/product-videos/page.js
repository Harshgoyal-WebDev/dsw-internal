import React from "react";
import Layout from "@/components/Layout";
import FooterCTA from "@/components/Common/FooterCta";
import VideoListing from "@/components/ProductVideos/VideoListing";
import { BreadcrumbsJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";
import Hero from "@/components/Common/Hero";

export const metadata = getPageMetadata({
  title: "DSW Product Videos - AI Demos & Platform Insights",
  description: "Watch product walkthroughs and demos: platform explanations, GenAI use in insurance, security features, and CTO vision in action.",
  url: "resources/product-videos",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/resources/product-videos",
    languages: {
      "x-default": "/resources/product-videos",
    },
  },
  openGraph: {
    url: "resources/product-videos",
    images: [
      {
        url: `${homepage}seo/product-videos.png`,
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
        <VideoListing margin={true}/>
        <FooterCTA footerCTAData={footerCTAData} paraWidth={"w-[75%] max-md:w-full"} />
      </Layout>
    </>
  );
};

export default Page;

const heroData = {
  heading: "Watch AI in Action- Learn, Explore, and Be Inspired",
  para: "Welcome to the DSW Video Hub — where we showcase how AI and GenAI are transforming enterprises through secure, scalable, and industry-specific solutions. Whether you’re evaluating platforms, looking for technical demos, or curious about how leading organizations are accelerating their AI journey, you’ll find valuable insights here.​",
  paraClass: "w-full",
  homepage: false,
  hidebtn: true,
};

const footerCTAData = {
  heading: "Don’t Miss What’s Next ",
  para: "New videos are added regularly as we release features, run workshops, and scale AI across new industries. ",
  btnText1: "Subscribe to Our YouTube",
  btnLink1: "/#",
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
};