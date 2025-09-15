import Image from "next/image";
import Hero from "@/Components/Insuraince/Hero";
import About  from "@/Components/Insuraince/About";
import Features from "@/Components/Insuraince/Features";
import Capabilities from "@/Components/Insuraince/Capabilities";
import Results from "@/Components/Insuraince/Results";
import PlatformCapabilities from "@/Components/Insuraince/PlatformCapabilities";
import Outcomes from "@/Components/Insuraince/Outcomes";
import Efficiency from "@/Components/Insuraince/Efficiency";
import CustomerQuotes from "@/Components/Insuraince/CustomerQuotes";
import FutureScope from "@/Components/Insuraince/FutureScope";


import Layout from "@/Components/Layout";
import Faqs from "@/Components/Common/FAQs";
import FooterCTA from "@/Components/Common/FooterCta";

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
