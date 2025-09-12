"use client";
import {
  fadeIn,
  fadeUp,
  headingAnim,
  lineAnim,
  paraAnim,
} from "@/Components/Animations/gsapAnimations";
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
import { initSplit } from "@/Components/splitTextUtils";
import Head from "next/head";
import { useEffect, useState } from "react";
import Faqs from "@/Components/Homepage/FAQs";
import Clients from "@/Components/Homepage/Clients";
import Loader from "@/Components/Loader";
import WhyUnifyMobile from "@/Components/Homepage/WhyUnifyMobile";

export default function Home() {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();
  const [mob, setMob] = useState(false);

  useEffect(() => {
    initSplit();
    if (globalThis.innerWidth > 1024) {
      setMob(false);
    } else {
      setMob(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>DSW UnifyAI – Enterprise AI Platform for Insurance</title>
        <meta
          name="description"
          content="Launch AI use cases in days and GenAI in hours with DSW UnifyAI - insurance-domain trained, compliant, scalable, and vendor-lock-in free."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader />
      <Layout>
        <Hero />
        <TurbochargeG />
        <About />
        <Insuraince />
        <Tour />
        <Difference />
        {/* in this component the data is Different in mobile and desktop */}
        <Brochure />
        <UnifyAi />
        <WhyUnify />
        {/* in this component the data is Different in mobile and desktop */}
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
