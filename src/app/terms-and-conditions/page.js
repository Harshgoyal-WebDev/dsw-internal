import Layout from '@/components/Layout'
import dynamic from 'next/dynamic'
import { getPageMetadata } from '@/config/metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import { homepage } from '@/lib/util';
import React from 'react'
import InternalHero from '@/components/Common/InternalHero';

const Content = dynamic(() => import('@/components/TermsAndConditions/Content'))

export const metadata = getPageMetadata({
  title: "DSW Terms & Conditions - Use of Services Agreement",
  description: "Read the terms and conditions governing use of DSW’s services, user responsibilities, limitations of liability, and legal agreements.",
  url: "terms-and-conditions",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/terms-and-conditions",
    languages: {
      "x-default": "/terms-and-conditions",
    },
  },
  openGraph: {
    url: "terms-and-conditions",
    images: [
      {
        url: `${homepage}seo/terms-and-conditions.png`,
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
  heading:"Terms and Conditions",
  para:"​",
  paraClass:"",
  headingWidth:"w-[60%]",
  homepage:false,
  hidebtn:true
}