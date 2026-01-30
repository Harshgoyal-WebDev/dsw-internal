import "./globals.css";
import { fontVariables } from "@/styles/fonts";
import { siteMetadata } from "@/config/metadata";
import { siteViewport } from "@/config/viewport";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import AppShell from "@/components/AppShell";

// import AppShell from "@/components/AppShell";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontVariables.combined} antialiased`}>
        <AppShell>{children}</AppShell>
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics gaId="G-Z5CT0M9533" />
      </body>
    </html>
  );
}