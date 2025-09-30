// lib/seo.config.js
import { homepage, faviconPath } from "./util";

export const defaultMetadata = {
  metadataBase: new URL(homepage),
  title: {
    default: "MonieLink: Secure Neobank Platform for Fintechs",
    template: "%s | Monielink",
  },
  description:
    "Empower fintechs & banks with MonieLink neobank Super SDK for digital banking, payments, card issuing & lending. Drive 6X revenue growth via scalable solutions.",
  keywords: [
    "digital banking",
    "digital lending",
    "kyc and soft token",
    "card issuing",
    "dual transaction service",
    "loyalty management",
    "merchant acquiring"
  ],
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "MonieLink: Secure Neobank Platform for Fintechs",
    description:
      "Empower fintechs & banks with MonieLink neobank Super SDK for digital banking, payments, card issuing & lending. Drive 6X revenue growth via scalable solutions.",
    url: homepage,
    siteName: "Monielink",
    images: [
      {
        url: `${homepage}/seo/homepage.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Monielink",
    title: "MonieLink: Secure Neobank Platform for Fintechs",
    description:
      "Empower fintechs & banks with MonieLink neobank Super SDK for digital banking, payments, card issuing & lending. Drive 6X revenue growth via scalable solutions.",
    images: [`${homepage}/seo/homepage.png`],
  },
};

export function getPageMetadata(overrides) {
  return {
    ...defaultMetadata,
    ...overrides,
    title:
      typeof overrides.title === "string"
        ? { default: overrides.title, template: defaultMetadata.title.template }
        : overrides.title || defaultMetadata.title,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph || {}),
    },
    twitter: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph || {}),
    },
    alternates: {
      ...defaultMetadata.alternates,
      ...(overrides.alternates || {}),
    },
  };
}
