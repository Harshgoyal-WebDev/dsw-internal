// lib/seo.config.js
import { homepage, faviconPath } from "./util";

export const defaultMetadata = {
  metadataBase: new URL(homepage),
  title: {
    default: "DSW UnifyAI – Enterprise AI Platform for Insurance",
    // template: "%s | Data Science Wizards",
  },
  description:
    "Launch AI use cases in days and GenAI in hours with DSW UnifyAI - insurance-domain trained, compliant, scalable, and vendor-lock-in free.",
  keywords: [
    "AI Platform", 
    "Insurance AI", 
    "Enterprise AI", 
    "GenAI", 
    "Data Science Wizards",
    "UnifyAI"
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
    title: "DSW UnifyAI – Enterprise AI Platform for Insurance",
    description:
      "Launch AI use cases in days and GenAI in hours with DSW UnifyAI - insurance-domain trained, compliant, scalable, and vendor-lock-in free.",
    url: homepage,
    siteName: "Data Science Wizards",
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
    title: "DSW UnifyAI – Enterprise AI Platform for Insurance",
    description:
      "Launch AI use cases in days and GenAI in hours with DSW UnifyAI - insurance-domain trained, compliant, scalable, and vendor-lock-in free.",
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
