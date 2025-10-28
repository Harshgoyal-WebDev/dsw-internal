import React from 'react';
import Layout from '@/components/Layout'
import Form from '@/components/Contact/Form';
import OfficeLocations from '@/components/Contact/OfficeLocations';
import FooterCTA from "@/components/Common/FooterCta";
import { homepage } from '@/lib/util';
import { WebpageJsonLd } from '@/lib/json-ld';
import { getPageMetadata } from '@/config/metadata';
import Hero from '@/components/Common/Hero';

export const metadata = getPageMetadata({
  title: "Contact DSW UnifyAI - Get in Touch",
  description: "Reach out to DSW for demos, partnerships, or queries - accelerate AI adoption with UnifyAI.",
  url: "contact-us",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/contact-us",
    languages: {
      "x-default": "/contact-us",
    },
  },
  openGraph: {
    url: "contact-us",
    images: [
      {
        url: `${homepage}seo/contact-us.png`,
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
        <Layout>
        <Hero heroData={heroData} />
        <Form />
         <OfficeLocations />
         <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"}/>
        </Layout>
    </>
  )
}

export default Page

const heroData= {
  heading:"Let’s Build the Future of AI Together​ ",
  para:"Whether you're ready to launch your next AI initiative or just exploring possibilities—let’s talk.​",
  paraClass:"",
  homepage:false,
  hidebtn:true,
  headingWidth:"w-[50%] max-md:mt-[20vw]"
}

const footerCTAData={
  heading:"Take a lightning tour of the Enterprise AI Platform ",
  para:"Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security. ",
  btnText1:"Book a Demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"/#",
  img1:"/assets/images/footer/image-1.png",
  img2:"/assets/images/footer/image-2.png"
}