import LenisSmoothScroll from "@/components/LenisSmoothScroll";
import "./globals.css";
import { fontVariables } from "@/styles/fonts";
import { siteMetadata } from "@/config/metadata";
import { siteViewport } from "@/config/viewport";
import LayoutTransition from "@/components/LayoutTransition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontVariables.combined} antialiased`}>
        <LenisSmoothScroll>
          <LayoutTransition>
            <main id="main-content">
              {children}
            </main>
          </LayoutTransition>
        </LenisSmoothScroll>

        {/* vercel Analytics */}
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics gaId="G-Z5CT0M9533" />
      </body>
    </html>
  );
}
