"use client";
import React, { useState, useEffect } from "react";

const CustomerQuotesMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <section className="h-[90vh] bg-gray-500">CustomerQuotesMobile</section>
  );
};

export default CustomerQuotesMobile;
