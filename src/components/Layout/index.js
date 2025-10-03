"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import KeepScrolling from "../KeepScrolling";
import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";
import Loader from "../Loader";
// import CanvasTunnel from "../Common/CanvasTunnel";

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
