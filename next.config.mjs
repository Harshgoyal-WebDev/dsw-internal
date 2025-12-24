// next.config.mjs
import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  env: {
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    qualities: [50, 75, 85, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "bisque-okapi-883422.hostingersite.com",
        hostname: "darkseagreen-chicken-141904.hostingersite.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  compress: true,
  productionBrowserSourceMaps: true,

  async headers() {
    
    // const csp = [
    //   "default-src 'self'",

    //   // ✅ Scripts (Next + Vercel + Google)
    //   "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com",

    //   // ✅ Styles
    //   "style-src 'self' 'unsafe-inline'",

    //   // ✅ Images (GA uses pixels)
    //   "img-src 'self' data: blob: https://bisque-okapi-883422.hostingersite.com https://i.ytimg.com https://www.google-analytics.com https://www.googletagmanager.com",

    //   // ✅ Fonts
    //   "font-src 'self' data:",

    //   // ✅ Analytics & fetch requests
    //   "connect-src 'self' https: https://va.vercel-scripts.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net",

    //   // ✅ Media
    //   "media-src 'self' blob: https://www.youtube.com https://*.googlevideo.com",

    //   // ✅ Iframes (GTM preview + YouTube)
    //   "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com",

    //   // ✅ Workers
    //   "worker-src 'self' blob:",

    //   // ✅ Security hardening
    //   "object-src 'none'",
    //   "frame-ancestors 'self'",
    //   "upgrade-insecure-requests",
    //   "base-uri 'self'",
    // ].join("; ");


    const securityHeaders = [
      // {
      //   key: "Content-Security-Policy",
      //   value: csp,
      // },

      // MIME-type sniffing protection
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },

      // Referrer policy
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },

      // Permissions policy
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), interest-cohort=(), fullscreen=(self), payment=()",
      },

      // HSTS (only use on HTTPS)
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },

      // Cross-origin isolation defaults
      {
        key: "Cross-Origin-Opener-Policy",
        value: "same-origin",
      },
      {
        key: "Cross-Origin-Resource-Policy",
        value: "same-origin",
      },

      {
        key: "X-Permitted-Cross-Domain-Policies",
        value: "none",
      },

      {
        key: "X-XSS-Protection",
        value: "0",
      },
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      { source: "/unify", destination: "/unifyai", permanent: true },
      { source: "/unify-ai", destination: "/unifyai", permanent: true },
      { source: "/pilot-program", destination: "/production-pilot", permanent: true },
      { source: "/resources/blog", destination: "/blogs", permanent: true },
      { source: "/resources/blogs", destination: "/blogs", permanent: true },
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/resources/news-and-pr", destination: "/news", permanent: true },
      { source: "/resources/product-videos", destination: "/product-videos", permanent: true },
      { source: "/resources/webinars-and-events", destination: "/webinars-and-events", permanent: true },
      {
        source: "/resources/webinars-and-workshops/ai-for-insurance-workshop",
        destination: "/ai-insurance-workshops",
        permanent: true,
      },
      {
        source: "/resources/webinars-and-workshops/ai-and-gen-ai-masterclass",
        destination: "/ai-and-gen-ai-masterclass",
        permanent: true,
      },
      { source: "/resources/whitepapers", destination: "/whitepapers", permanent: true },
      { source: "/about-v2", destination: "/about", permanent: true },
      { source: "/career", destination: "/careers", permanent: true },
    ];
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
