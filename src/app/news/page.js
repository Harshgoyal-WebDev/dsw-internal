import React from "react";
import Layout from "@/components/Layout";
import FooterCTA from "@/components/Common/FooterCta";
import Listing from "@/components/News/Listing";
import Annoucements from "@/components/News/Annoucements";
import { BreadcrumbsJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";
import Hero from "@/components/Common/Hero";
import { getAllNews } from "@/lib/news";


export const metadata = getPageMetadata({
  title: "DSW News & Press — Media Features & Announcements",
  description: "Read DSW’s latest press coverage, announcements, interviews, and media features highlighting our enterprise AI innovations and market impact.",
  url: "/news",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/news",
    languages: {
      "x-default": "/news",
    },
  },
  openGraph: {
    url: "/news",
    images: [
      {
        url: `${homepage}seo/news-and-pr.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
export default async function Page() {
  const {news} = await getAllNews()
  // console.log(news)
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
        <BreadcrumbsJSONLD pathname={metadata.url}/>
      <Layout>
        <Hero heroData={heroData} breadcrumbs={true} />
        <Listing news={news} />
        <Annoucements />
        <FooterCTA footerCTAData={footerCTAData} />
      </Layout>
    </>
  );
};


const heroData = {
  heading: "In the Media​ ",
  para: "See how DSW is making waves across global tech and AI publications. Explore press features, interviews with our leadership, and industry mentions.​",
  paraClass: "w-[60%] max-sm:w-full",
  homepage: false,
  hidebtn: true,
};

const footerCTAData = {
  heading: "Looking to write about us or request an interview? ",
  para: "Download our press kit or reach out directly to our media team. ",
  btnText1: "Download Press Kit",
  btnLink1: "/#",
  btnText2: "Contact",
  btnLink2: "/contact-us",
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
};