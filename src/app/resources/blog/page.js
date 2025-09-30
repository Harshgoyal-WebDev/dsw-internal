import React from 'react'
import Hero from '@/components/Common/Hero'
import FeaturedBlog from '@/components/Blog/FeaturedBlog'
import BlogGrid from '@/components/Blog/BlogGrid'
import Layout from '@/components/Layout'
import FooterCTA from "@/components/Common/FooterCta";
import { BreadcrumbsJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { getPageMetadata } from '@/lib/seo.config'
import { homepage } from '@/lib/util'

export const metadata = getPageMetadata({
  title: "DSW Blog - Insights on AI & Enterprise Innovation",
  description: "Explore DSW’s blog: deep dives on AI, GenAI, insurance innovation, enterprise deployments, use cases, and tech trends.",
  url: "resources/blog",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/resources/blog",
    languages: {
      "x-default": "/resources/blog",
    },
  },
  openGraph: {
    url: "resources/blog",
    images: [
      {
        url: `${homepage}seo/blog.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
const page = () => {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
    <BreadcrumbsJSONLD pathname={metadata.url}/>
        <Layout>
         <Hero heroData={heroData} breadcrumbs={true} />
         <FeaturedBlog />
         <BlogGrid />
         <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"}/>
        </Layout>
    </>
  )
}

export default page

const heroData= {
  heading:"Explore the Future of AI, One Post at a Time​ ",
  para:"​",
  paraClass:"",
  headingWidth:"w-[60%]",
  homepage:false,
  hidebtn:true
}

const footerCTAData={
  heading:"Take a lightning tour of the Enterprise AI Platform ",
  para:"Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security. ",
  btnText1:"Book a demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"/#",
  img1:"/assets/images/footer/image-1.png",
  img2:"/assets/images/footer/image-2.png"
}