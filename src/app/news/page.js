import React from "react";
import Layout from "@/components/Layout";
import FooterCTA from "@/components/Common/FooterCta";
import Listing from "@/components/News/Listing";
import Annoucements from "@/components/News/Annoucements";
import { BreadcrumbsJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";
import { getAllNews } from "@/lib/news";
import InternalHero from "@/components/Common/InternalHero";

export const metadata = getPageMetadata({
  title: "DSW News & Press — Media Features & Announcements",
  description:
    "Read DSW’s latest press coverage, announcements, interviews, and media features highlighting our enterprise AI innovations and market impact.",
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
  const { news } = await getAllNews();
  // console.log(news)
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <BreadcrumbsJSONLD pathname={metadata.url} />
      <Layout>
        <InternalHero heroData={heroData} breadcrumbs={true} />
        <Listing news={news} />
        {/* <Annoucements /> */}
        <FooterCTA footerCTAData={footerCTAData} />
      </Layout>
    </>
  );
}

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
  img1: "/assets/images/footer/cta-5.png",
  img2: "/assets/images/footer/cta-6.png",
};
// const news = [
//   {
//     id: 1,
//     title: "Neysa and Data Science Wizards (DSW) Launch Advanced Insurance AI Cloud Platform for Indian Insurance Sector",
//     slug:"neysa-and-data-science-wizards-dsw-partner-to-launch-advanced-insurance-aicloud-platform-for-indian-insurance-sector-2",
//     date: "2024-12-04T10:30:00",
//     excerpt: "<p>The fully managed Insurance AI Cloud aims to accelerate AI adoption, reduce costs by 60- 80% and move AI use cases to production in just 3 to 4 weeks.</p>",
//     img:"/assets/images/news/Sharad-Sandeep.jpg",
//   },
//   {
//     id: 2,
//     title: "DSW UnifyAI, Ireland’s AI Platform Company, Leads the Way to Innovation Success",
//     slug: "dsw-unifyai-irelands-ai-platform-company-leads-the-way-to-innovation-success",
//     date: "2024-11-12T14:20:00",
//     excerpt: "<p>DSW has been announced as a finalist in the IT & Fintech Category of The Irish Times Innovation Awards 2024.</p>",
//     img:"/assets/images/news/Innovation-Awards-PR.webp",

//   },
//   {
//     id: 3,
//     title: "Data Science Wizards Raises $1.4M Seed Funding, Launches Next-Gen AI Solution for Insurance",
//     slug: "data-science-wizards-raises-1-4m-seed-funding-launches-next-gen-ai-solution-for-insurance",
//     date: "2024-10-16T09:15:00",
//     excerpt: "<p>DSW secures $1.4M seed funding to boost UnifyAI and launch insurAInce, an AI solution transforming the insurance industry to build Use Cases swiftly.</p>",
//     img:"/assets/images/news/Seed-Funding-PR-1.png",

//   }
// ];
