import LenisSmoothScroll from "@/components/LenisSmoothScroll";
import "./globals.css";
import { fontVariables } from "@/styles/fonts";
import { siteMetadata } from "@/config/metadata";
import { siteViewport } from "@/config/viewport";
import LayoutTransition from "@/components/LayoutTransition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'

// Use external metadata configuration like working project
export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({ children }) {
  return (
    <>
      <LenisSmoothScroll>
        {/* <ReactLenis root> */}
        <html lang="en">
          <body className={`${fontVariables.combined} antialiased`}>
            <LayoutTransition>{children}</LayoutTransition>
          </body>
        </html>
        {/* </ReactLenis> */}
      </LenisSmoothScroll>

      {/* Vercel Analytics */}
      <SpeedInsights />
      <Analytics />
      
      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-Z5CT0M9533" />
    </>
  );
}
