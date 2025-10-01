"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import KeepScrolling from "../KeepScrolling";
import {
  ImageObjectJsonLd, LocalBusiness, OrganizationJsonLd, WebsiteJsonLd,
} from "@/lib/json-ld";
import { ThreeTunnelTrial } from "../Common/ThreeTunnelTrial";
import CanvasRoot from "../Common/CanvasRoot";

// const CanvasRoot = dynamic(() => import("./CanvasRoot"), { ssr: false });

const LayoutTunnel = ({ children }) => {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />

      {/* Provide tunnel store app-wide */}
      <ThreeTunnelTrial.Provider>
        {/* Single, fixed Canvas rendered once */}
        <CanvasRoot />
        <Header />
        {children}
        <KeepScrolling />
        <Footer />
      </ThreeTunnelTrial.Provider>
    </>
  );
};

export default LayoutTunnel;
