
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
import Hero from "@/components/Common/Hero";

export default function Home() {
  return (
    <>
      <Layout>
      <Hero heroData={heroData}/>
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
      <FooterCTA footerCTAData={footerCTAData} paraWidth={"w-[85%]"}/>
      </Layout>
    </>
  );
}

const heroData= {
  heading:" Enterprise AI Platform for Insurance",
  img:"/assets/icons/insuraince/insuraince.svg",
  para:"Purpose-Built, Proven, and Production-Ready . InsurAInce is the enterprise AI platform designed for insurers to build GenAI agents in hours, deploy AI use cases in days, and scale confidently with compliance, speed, and accuracy – all through your policy lifecycle.​",
  paraClass:"w-[90%]",
  link1:"/#",
  btnText1:"Start Walkthrough",
  link2:"/#",
  btnText2:"Schedule a Call",
  homepage:false,
  headingWidth:"w-[80%]"
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
