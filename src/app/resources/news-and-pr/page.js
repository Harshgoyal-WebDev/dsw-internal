import React from "react";
import Layout from "@/components/Layout";
import FooterCTA from "@/components/Common/FooterCta";
import Hero from "@/components/Common/Hero";
import Listing from "@/components/News/Listing";
import Annoucements from "@/components/News/Annoucements";

const Page = () => {
  return (
    <>
      <Layout>
        <Hero heroData={heroData} breadcrumbs={true} />
        <Listing />
        <Annoucements />
        <FooterCTA footerCTAData={footerCTAData} />
      </Layout>
    </>
  );
};

export default Page;

const heroData = {
  heading: "In the Media​ ",
  para: "See how DSW is making waves across global tech and AI publications. Explore press features, interviews with our leadership, and industry mentions.​",
  paraClass: "w-[60%] max-sm:w-full",
  homepage: false,
  hidebtn: true,
};

const footerCTAData = {
  heading: "Looking to write about us or request an interview? ",
  para: "Download our press kit or reach out directly to our media team. ",
  btnText1: "Download Press Kit",
  btnLink1: "/#",
  btnText2: "Contact",
  btnLink2: "/#",
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
};
