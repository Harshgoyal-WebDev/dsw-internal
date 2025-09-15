import About from "@/Components/Homepage/About";
import Blogs from "@/Components/Homepage/Blogs";
import Brochure from "@/Components/Homepage/Brochure";
import Connects from "@/Components/Homepage/Connects";
import EnterpriseAI from "@/Components/Homepage/EnterpriseAI";
import Difference from "@/Components/Homepage/Difference";
import Hero from "@/Components/Homepage/Hero";
import Insuraince from "@/Components/Homepage/Insuraince";
import Recognized from "@/Components/Homepage/Recognized";
import SuccessStories from "@/Components/Homepage/SuccessStories";
import Tour from "@/Components/Homepage/Tour";
import TurbochargeG from "@/Components/Homepage/TurboChargeG";
import UnifyAi from "@/Components/Homepage/UnifyAi";
import WhyUnify from "@/Components/Homepage/WhyUnify";
import Layout from "@/Components/Layout";
import Faqs from "@/Components/Homepage/FAQs";
import Clients from "@/Components/Homepage/Clients";
import Loader from "@/Components/Loader";
import WhyUnifyMobile from "@/Components/Homepage/WhyUnifyMobile";

export default function Home() {

  return (
    <>
      {/* <Loader /> */}
      <Layout>
        <Hero />
        <TurbochargeG />
        <About />
        <Insuraince />
        <Tour />
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
      </Layout>
    </>
  );
}
