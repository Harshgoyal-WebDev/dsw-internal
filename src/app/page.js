"use client"
import About from "@/components/Homepage/About";
import Blogs from "@/components/Homepage/Blogs";
import Brochure from "@/components/Homepage/Brochure";
import Connects from "@/components/Homepage/Connects";
import EnterpriseAI from "@/components/Homepage/EnterpriseAI";
import Difference from "@/components/Homepage/Difference";
import Hero from "@/components/Common/Hero";
import Insuraince from "@/components/Homepage/Insuraince";
import Recognized from "@/components/Homepage/Recognized";
import SuccessStories from "@/components/Homepage/SuccessStories";
import Tour from "@/components/Common/Tour";
import TurbochargeG from "@/components/Homepage/TurboChargeG";
import UnifyAi from "@/components/Homepage/UnifyAi";
import WhyUnify from "@/components/Homepage/WhyUnify";
import Layout from "@/components/Layout";
import Faqs from "@/components/Common/FAQs";
import Clients from "@/components/Homepage/Clients";
import Loader from "@/components/Loader";
import WhyUnifyMobile from "@/components/Homepage/WhyUnifyMobile";
import FooterCTA from "@/components/Common/FooterCta";
// import dynamic from "next/dynamic";

// const About = dynamic(() => import("@/components/Homepage/About"), {
//   ssr: false,
// });
// const Blogs = dynamic(() => import("@/components/Homepage/Blogs"), {
//   ssr: false,
// });
// const Brochure = dynamic(()=>import("@/components/Homepage/Brochure"),{ssr:false})
// const Connects = dynamic(()=>import("@/components/Homepage/Connects"),{ssr:false})
// const EnterpriseAI = dynamic(()=>import("@/components/Homepage/EnterpriseAI"),{ssr:false})
// const Difference = dynamic(()=>import("@/components/Homepage/Difference"),{ssr:false})
// const Insuraince = dynamic(()=>import("@/components/Homepage/Insuraince"),{ssr:false})
// const Recognized = dynamic(()=>import("@/components/Homepage/Recognized"),{ssr:false})
// const SuccessStories = dynamic(()=>import("@/components/Homepage/SuccessStories"),{ssr:false})
// const Tour = dynamic(()=>import("@/components/Common/Tour"),{ssr:false})
// const TurbochargeG = dynamic(()=>import("@/components/Homepage/TurboChargeG"),{ssr:false})
// const UnifyAi = dynamic(()=>import("@/components/Homepage/UnifyAi"),{ssr:false})
// const WhyUnify = dynamic(()=>import("@/components/Homepage/WhyUnify"),{ssr:false})
// const Faqs = dynamic(()=>import("@/components/Common/FAQs"),{ssr:false})
// const Clients = dynamic(()=>import("@/components/Homepage/Clients"),{ssr:false})
// const WhyUnifyMobile = dynamic(()=>import("@/components/Homepage/WhyUnifyMobile"),{ssr:false})

export default function Home() {

  return (
    <>
      {/* <Loader /> */}
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
        <FooterCTA footerCTAData={footerCTAData} width={"w-[95%]"}/>
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
