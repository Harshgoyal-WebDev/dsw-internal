import Image from "next/image";
import Hero from "@/components/Insuraince/Hero";
import About  from "@/components/Insuraince/About";
import Features from "@/components/Insuraince/Features";
import Capabilities from "@/components/Insuraince/Capabilities";
import Results from "@/components/Insuraince/Results";
import PlatformCapabilities from "@/components/Insuraince/PlatformCapabilities";
import Outcomes from "@/components/Insuraince/Outcomes";
import Efficiency from "@/components/Insuraince/Efficiency";
import CustomerQuotes from "@/components/Insuraince/CustomerQuotes";
import FutureScope from "@/components/Insuraince/FutureScope";


import Layout from "@/components/Layout";
import Faqs from "@/components/Common/FAQs";
import FooterCTA from "@/components/Common/FooterCta";

export default function Home() {
  return (
    <>
      <Layout>
      <Hero />
      <About />
      <Features />
      <Capabilities />
      <Results />
      <PlatformCapabilities />
      <Outcomes />
      <Efficiency />
      <CustomerQuotes />
      <FutureScope />
      <Faqs />
      <FooterCTA footerCTAData={footerCTAData}/>
      </Layout>
    </>
  );
}
const footerCTAData={
  heading:"Ready to Launch GenAI in 4 Hours? AI/ML Use Cases in 30 Days? ",
  para:"Let’s transform your insurance business with real AI. From claims to fraud to underwriting, insurAInce helps you deploy AI with speed, security, and impact. ",
  btnText1:"Book a demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"/#",
  img1:"/assets/images/footer/image-1.png",
  img2:"/assets/images/footer/image-2.png"
}
