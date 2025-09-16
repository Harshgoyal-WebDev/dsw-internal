import About from "@/Components/Homepage/About";
import Blogs from "@/Components/Homepage/Blogs";
import Brochure from "@/Components/Homepage/Brochure";
import Connects from "@/Components/Homepage/Connects";
import EnterpriseAI from "@/Components/Homepage/EnterpriseAI";
import Difference from "@/Components/Homepage/Difference";
import Hero from "@/Components/Common/Hero";
import Insuraince from "@/Components/Homepage/Insuraince";
import Recognized from "@/Components/Homepage/Recognized";
import SuccessStories from "@/Components/Homepage/SuccessStories";
import Tour from "@/Components/Common/Tour";
import TurbochargeG from "@/Components/Homepage/TurboChargeG";
import UnifyAi from "@/Components/Homepage/UnifyAi";
import WhyUnify from "@/Components/Homepage/WhyUnify";
import Layout from "@/Components/Layout";
import Faqs from "@/Components/Common/FAQs";
import Clients from "@/Components/Homepage/Clients";
import Loader from "@/Components/Loader";
import WhyUnifyMobile from "@/Components/Homepage/WhyUnifyMobile";
import FooterCTA from "@/Components/Common/FooterCta";

export default function Home() {

  return (
    <>
      <Loader />
      <Layout>
        <Hero heroData={heroData}/>
        <TurbochargeG />
        <About />
        <Insuraince />
        <Tour heading={"Take a Lightning Tour"} para={"Your OS for AI- not just for today's use cases, but for tomorrow's vision."} img={'/assets/images/homepage/tour-img.png'}/>
        <Difference />
        <Brochure />
        <UnifyAi />
        <WhyUnify />
        <WhyUnifyMobile />
        <EnterpriseAI />
        <Recognized />
        <Connects />
        <Clients />
        <SuccessStories />
        <Blogs />
        <Faqs />
        <FooterCTA footerCTAData={footerCTAData}/>
      </Layout>
    </>
  );
}
const heroData= {
  heading:"Launch AI use cases in days. GenAI in hours.​ ",
  para:"The enterprise platform built for speed and scale.​ Go from pilot to production – faster and smarter with DSW UnifyAI​",
  paraClass:"",
  link1:"/#",
  btnText1:"Start Walkthrough",
  link2:"/#",
  btnText2:"Schedule a Call",
  homepage:true
}

const footerCTAData={
  heading:"Take a lightning tour of the Enterprise AI Platform ",
  para:"Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
  btnText1:"Book a demo",
  btnLink1:"/#",
  btnText2:"Schedule a Call",
  btnLink2:"/#",
  img1:"/assets/images/footer/image-1.png",
  img2:"/assets/images/footer/image-2.png"
}
