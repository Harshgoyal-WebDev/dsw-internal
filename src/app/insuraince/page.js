import Image from "next/image";
import Hero from "@/Components/insurAlnce/Hero";
import { About } from "@/Components/insurAlnce/About";
import Features from "@/Components/insurAlnce/Features";
import Capabilities from "@/Components/insurAlnce/Capabilities";
import Results from "@/Components/insurAlnce/Results";
import PlatformCapabilities from "@/Components/insurAlnce/PlatformCapabilities";
import Outcomes from "@/Components/insurAlnce/Outcomes";
import Efficiency from "@/Components/insurAlnce/Efficiency";
import CustomerQuotes from "@/Components/insurAlnce/CustomerQuotes";
import FutureScope from "@/Components/insurAlnce/FutureScope";
import FAQs from "@/Components/insurAlnce/FAQ";

import Layout from "@/Components/Layout";

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
      <FAQs />
      </Layout>
    </>
  );
}
