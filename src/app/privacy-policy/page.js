
import Layout from '@/components/Layout'
import Hero from '@/components/Common/Hero';
import { getPageMetadata } from '@/config/metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import { homepage } from '@/lib/util';
import React from 'react'
import dynamic from 'next/dynamic'
import InternalHero from '@/components/Common/InternalHero';

const Content = dynamic(() => import('@/components/PrivacyPolicy/Content'))

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
    <InternalHero heroData={heroData}/>
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