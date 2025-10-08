import BlogContent from "@/components/BlogDetailPage/BlogContent";
// import Hero from "@/components/BlogDetailPage/Hero";
import RelatedArticles from "@/components/BlogDetailPage/RelatedArticles";
import FooterCTA from "@/components/Common/FooterCta";
import Layout from "@/components/Layout";
import { getPageMetadata } from "@/config/metadata";
import { BreadcrumbsJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import React from "react";

export const metadata = getPageMetadata({
  title: "How Generative AI Is Transforming the Insurance Industry",
  description:
    "Explore how generative AI is reshaping insurance - from claims automation to fraud detection - with guidance on governance, security, and real-world use cases.",
  url: "resouces/blog-detail",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/resources/blog-detail",
    languages: {
      "x-default": "/resources/blog-detail",
    },
  },
  openGraph: {
    url: "resources/blog-detail",
    images: [
      {
        url: `${homepage}seo/blog-detail.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
export default function page() {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <BreadcrumbsJSONLD pathname={metadata.url} />
      <Layout>
        {/* <Hero breadcrumbs={true} /> */}
        <BlogContent />
        <RelatedArticles />
        <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"} />
      </Layout>
    </>
  );
}

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
