import Hero from '@/components/Common/Hero'
import Layout from '@/components/Layout'
import Content from '@/components/PrivacyPolicy/Content'
import { WebpageJsonLd } from '@/lib/json-ld';
import { getPageMetadata } from '@/lib/seo.config';
import { homepage } from '@/lib/util';
import React from 'react'

export const metadata = getPageMetadata({
  title: "DSW Privacy Policy - Your Data Rights & Protection",
  description: "Review DSW’s privacy policy: how we collect, use, and protect your data, your rights regarding personal information, and how to contact us.",
  url: "privacy-policy",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/privacy-policy",
    languages: {
      "x-default": "/privacy-policy",
    },
  },
  openGraph: {
    url: "privacy-policy",
    images: [
      {
        url: `${homepage}seo/privacy-policy.png`,
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
   <Layout>
    <Hero heroData={heroData}/>
    <Content/>
   </Layout>
   </>
  )
}

export default page

const heroData= {
  heading:"Privacy Policy",
  para:"​",
  paraClass:"",
  headingWidth:"w-[60%]",
  homepage:false,
  hidebtn:true
}