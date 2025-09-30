/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script';
import { homepage, faviconPath } from './util';

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${homepage}#organization`,
    name: "Data Science Wizards",
    description: "Launch AI use cases in days and GenAI in hours with DSW UnifyAI - insurance-domain trained, compliant, scalable, and vendor-lock-in free.",
    url: homepage,
    telephone: "+91 96640 56847",
    email: "contact@datasciencewizards.ai",
    address: {
      "@type": 'PostalAddress',
      streetAddress: '707, 7th Floor, ',
      addressLocality: 'Lodha Supremus II Road No. 22',
      addressRegion: 'Wagle Estate,Thane-West-400604',
      addressCountry: 'India',
    },
    logo: `${homepage}favicons/favicon.ico`,
    sameAs: [
      "https://www.facebook.com/datasciencewizards/",
      "https://www.linkedin.com/company/data-science-wizards/",
      "https://x.com/dswizards",
      "https://www.instagram.com/datasciencewizards/",
      "https://www.youtube.com/@DataScienceWizards"
    ]
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homepage}#website`,
    name: 'Data Science Wizards',
    url: homepage,
    copyrightYear: new Date().getFullYear(),
    'inLanguage': "en-US",
    "publisher": [
      {
        "@id": `${homepage}#organization`
      }
    ],
  };

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

export function ImageObjectJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    '@id': `${homepage}seo/homepage.png`,
    url: `${homepage}seo/homepage.png`,
    width: "1920",
    height: "1016",
    inLanguage: "en-US"
  };

  return (
    <Script
      id="image-object-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

export function LocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Monielink",
    "image": `https://dsw-internal.vercel.app/dsw-logo.png`,
    "@id": "",
    "url": `${homepage}`,
    "telephone": "+91 96640 56847",
    "address": {
      "@type": 'PostalAddress',
      "streetAddress": '707, 7th Floor, ',
      "addressLocality" : 'Lodha Supremus II Road No. 22',
      "addressRegion": 'Wagle Estate,Thane-West-400604',
      "addressCountry": 'India',
    },
    "sameAs": [
       "https://www.facebook.com/datasciencewizards/",
      "https://www.linkedin.com/company/data-science-wizards/",
      "https://x.com/dswizards",
      "https://www.instagram.com/datasciencewizards/",
      "https://www.youtube.com/@DataScienceWizards"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "06:00"
      }
    ]
  };

  return (
    <Script
      id="local-business-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

export function WebpageJsonLd({ metadata = {} }) {
  const {
    title,
    url = "/",
    description,
    date_published,
    date_modified,
    metadataBase,
    openGraph,
  } = metadata;

  const name = typeof title === "string" ? title : title.default;
  const base = metadataBase?.href || homepage;
  const fullUrl = new URL(url, base).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullUrl}#webpage`,
    url: fullUrl,
    name,
    description,
    datePublished: date_published,
    dateModified: date_modified,
    publisher: {
      "@type": "Organization",
      name: "Data Science Wizards",
      logo: {
        "@type": "ImageObject",
        url: `${homepage}/${faviconPath}`,
      },
    },
    about: { "@id": `${fullUrl}#organization` },
    isPartOf: { "@id": `${fullUrl}#website` },
    inLanguage: openGraph?.locale || "en_US",
  };

  return (
    <Script
      id="webpage-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

function toTitleCase(str) {
  return str
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
export function BreadcrumbsJSONLD({ pathname }) {
  const segments = pathname.split('/').filter(Boolean);

  const itemListElements = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: homepage,
    },
    ...segments.map((segment, index) => {
      const url = '/' + segments.slice(0, index + 1).join('/');
      return {
        '@type': 'ListItem',
        position: index + 2, 
        name: toTitleCase(decodeURIComponent(segment)),
        item: `${homepage}${url}`,
      };
    }),
  ];

  const breadcrumbsJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElements,
  };

  return (
    <Script
      id="breadcrumbs-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbsJSONLD),
      }}
    />
  );
}

function stripHTML(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "").trim();
}

export function FAQJSONLD({ faqs }) {
  const faqJSONLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": stripHTML(faq.answer),
      },
    })),
  };

  return (
    <Script
      id="faq-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqJSONLD),
      }}
    />
  );
}
