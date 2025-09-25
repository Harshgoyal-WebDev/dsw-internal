import React from "react";
import Layout from "@/components/Layout";
import FooterCTA from "@/components/Common/FooterCta";
import Hero from "@/components/Common/Hero";
import VideoListing from "@/components/ProductVideos/VideoListing";

const Page = () => {
  return (
    <>
      <Layout>
        <Hero heroData={heroData} breadcrumbs={true}/>
        <VideoListing margin={true}/>
        <FooterCTA footerCTAData={footerCTAData} paraWidth={"w-[75%]"} />
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
  heading: "Don’t Miss What’s Next ",
  para: "New videos are added regularly as we release features, run workshops, and scale AI across new industries. ",
  btnText1: "Subscribe to Our YouTube",
  btnLink1: "/#",
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
};
