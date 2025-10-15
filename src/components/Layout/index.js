"use client";
import React from "react";
// import Header from "../Header/index";
// import Footer from "../Footer";
import KeepScrolling from "../KeepScrolling";
import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";
import Loader from "../Loader";
import dynamic from "next/dynamic";
// import CanvasTunnel from "../Common/CanvasTunnel";
const Header = dynamic(() => import("../Header/index"), {
  ssr: true,
});
const Footer = dynamic(() => import("../Footer"), {
  ssr: true,
});

const Layout = ({ children }) => {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />
      <Loader />
      <Header />
      {children}
      {/* <CanvasTunnel/> */}
      {/* </CanvasTunnel> */}
      <KeepScrolling />
      <Footer />
    </>
  );
};

export default Layout;
