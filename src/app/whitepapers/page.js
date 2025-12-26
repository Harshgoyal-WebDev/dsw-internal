import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import InternalHero from "@/components/Common/InternalHero";
import { BreadcrumbsJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from "@/lib/util";
import { getPageMetadata } from "@/config/metadata";

const Listing = dynamic(
  () => import("@/components/Whitepapers/Listing"),
  { ssr: true }
);

const FooterCTA = dynamic(
  () => import("@/components/Common/FooterCta"),
  { ssr: true }
);

export const metadata = getPageMetadata({
  title: "Deep Insights. Real Strategies. Enterprise AI Whitepapers",
  description: "Access curated whitepapers offering actionable AI frameworks, technical guidance, and strategic insights to help enterprises adopt, scale, and govern AI confidently.",
  url: "resouces/whitepapers",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
  alternates: {
    canonical: "/whitepapers",
    languages: {
      "x-default": "/whitepapers",
    },
  },
  openGraph: {
    url: "resources/whitepapers",
    images: [
      {
        url: `${homepage}seo/whitepapers.png`,
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
    <BreadcrumbsJSONLD pathname={metadata.url}/>
      <Layout>
        <InternalHero heroData={heroData} breadcrumbs={true}/>
        <Listing/>
        <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"} />
      </Layout>
    </>
  );
};

export default Page;

const heroData = {
  heading: "Deep Insights. Real Strategies. Enterprise-Ready AI Intelligence.",
  para: "Our curated collection of whitepapers gives you actionable insights, frameworks, and technical guidance to navigate enterprise AI adoption with confidence. Whether you’re evaluating platforms, planning your compliance roadmap, or scaling AI across departments, these research-backed resources will help you make strategic, future-proof decisions.​",
  paraClass: "w-[80%] max-sm:w-[90%]",
  homepage: false,
  hidebtn: true,
  headingWidth:"w-[80%]"
};

const footerCTAData = {
  heading: "Take a lightning tour of the Enterprise AI Platform ",
  para: "Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security. ",
  btnText1: "Book a Demo",
  btnLink1: "/#",
  btnText2: "Schedule a Call",
  btnLink2: "https://calendly.com/",
  target:true,
  book:true,
  img1: "/assets/images/footer/image-1.png",
  img2: "/assets/images/footer/image-2.png",
};