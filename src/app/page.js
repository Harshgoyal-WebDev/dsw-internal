"use client"
import { fadeIn, fadeUp, headingAnim, lineAnim, paraAnim } from "@/Components/Animations/gsapAnimations";
import About from "@/Components/Homepage/About";
import Blogs from "@/Components/Homepage/Blogs";
import Brochure from "@/Components/Homepage/Brochure";
import Business from "@/Components/Homepage/Business";
import Clients from "@/Components/Homepage/Clients";
import Connects from "@/Components/Homepage/Connects";
import Difference from "@/Components/Homepage/Difference";
import FAQs from "@/Components/Homepage/FAQs";
import Hero from "@/Components/Homepage/Hero";
import Insuraince from "@/Components/Homepage/Insuraince";
import Security from "@/Components/Homepage/Security";
import Testimonials from "@/Components/Homepage/Testimonials";
import Tour from "@/Components/Homepage/Tour";
import TurbochargeG from "@/Components/Homepage/TurboChargeG";
import UnifyAi from "@/Components/Homepage/UnifyAi";
import WhyUnify from "@/Components/Homepage/WhyUnify";
import Layout from "@/Components/Layout";
import Loader from "@/Components/Loader";
import { initSplit } from "@/Components/splitTextUtils";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();

  useEffect(() => {
    initSplit();
  }, []);

  return (
    <>
      <Head>
        <title>Data Science Wizards</title>
        <meta name="description" content="Unify AI - Turbocharge your business with AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Loader /> */}
      <Layout>
        <Hero />
        <TurbochargeG />
        <About/>
        <Insuraince />
        <Tour/>
        <Difference/>
        <Brochure/>
        <UnifyAi />
        <WhyUnify />
        <Business />
        <Security />
        <Connects />
        <Clients />
        <Testimonials />
        <Blogs />
        <FAQs />
      </Layout>
    </>
  );
}
