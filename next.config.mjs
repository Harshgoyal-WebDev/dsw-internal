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

    // 👇 Add this block
    qualities: [50, 75, 85, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bisque-okapi-883422.hostingersite.com",
        port: "", // or '8080' if you use a port
        pathname: "/wp-content/uploads/**",
      },
    ],
    // default is [75] if you don’t set it
  },

  compress: true,
  productionBrowserSourceMaps: true,

  // 👇 Security headers
  // async headers() {
  //   // NOTE: Start with this pragmatic CSP. Tighten over time (e.g., add nonces/hashes and remove 'unsafe-inline')
  //   const csp = [
  //     "default-src 'self'",
  //     // Allow Next.js runtime, module scripts, and client navigation
  //     "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:",
  //     // Styles often need 'unsafe-inline' unless you move to nonces/hashes
  //     "style-src 'self' 'unsafe-inline'",
  //     // Images from self, data URLs, blobs, and your WordPress host
  //     "img-src 'self' data: blob: https://bisque-okapi-883422.hostingersite.com",
  //     // Fonts
  //     "font-src 'self' data:",
  //     // XHR / fetch / GraphQL endpoint(s)
  //     "connect-src 'self' https:",
  //     // Media (audio/video) if ever used
  //     "media-src 'self' blob:",
  //     // Frames (e.g., if you later embed trusted third parties)
  //     "frame-src 'self'",
  //     // Workers
  //     "worker-src 'self' blob:",
  //     // Disallow plugins/objects
  //     "object-src 'none'",
  //     // Only allow same-origin to be the document's ancestor
  //     "frame-ancestors 'self'",
  //     // Upgrade all http to https
  //     "upgrade-insecure-requests",
  //     // Disallow base tag nonce/changes
  //     "base-uri 'self'"
  //   ].join("; ");

  //   const securityHeaders = [
  //     // Content Security Policy
  //     {
  //       key: "Content-Security-Policy",
  //       value: csp,
  //     },
  //     // Prevent clickjacking
  //     {
  //       key: "X-Frame-Options",
  //       value: "DENY",
  //     },
  //     // MIME-type sniffing protection
  //     {
  //       key: "X-Content-Type-Options",
  //       value: "nosniff",
  //     },
  //     // Referrer policy (privacy)
  //     {
  //       key: "Referrer-Policy",
  //       value: "strict-origin-when-cross-origin",
  //     },
  //     // Limit cross-origin browser features
  //     {
  //       key: "Permissions-Policy",
  //       // Customize as needed (e.g., allow geolocation on self only)
  //       value:
  //         "camera=(), microphone=(), geolocation=(), interest-cohort=(), fullscreen=(self), payment=()",
  //     },
  //     // HSTS (enable ONLY behind HTTPS; keep preload if you intend to submit to the preload list)
  //     {
  //       key: "Strict-Transport-Security",
  //       value: "max-age=63072000; includeSubDomains; preload",
  //     },
  //     // Cross-origin isolation (helps with powerful APIs)
  //     {
  //       key: "Cross-Origin-Opener-Policy",
  //       value: "same-origin",
  //     },
  //     {
  //       key: "Cross-Origin-Resource-Policy",
  //       value: "same-origin",
  //     },
  //     // Safer default for cross-origin embedding
  //     {
  //       key: "X-Permitted-Cross-Domain-Policies",
  //       value: "none",
  //     },
  //     // Legacy XSS header (mostly ignored by modern browsers but harmless)
  //     {
  //       key: "X-XSS-Protection",
  //       value: "0",
  //     },
  //   ];

  //   return [
  //     {
  //       source: "/:path*",
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
  async redirects() {
  return[
    {
      source:'/unify',
      destination:'/unifyai',
      permanent:true
    },
    {
      source:'/pilot-program',
      destination:'/production-pilot',
      permanent:true
    },
    {
      source:'/resources/blog',
      destination:'/blogs',
      permanent:true
    },
    {
      source:'/resources/blogs',
      destination:'/blogs',
      permanent:true
    },
    {
      source:'/blog',
      destination:'/blogs',
      permanent:true
    },
    {
      source:'/resources/news-and-pr',
      destination:'/news',
      permanent:true
    },
    {
      source:'/resources/product-videos',
      destination:'/product-videos',
      permanent:true
    },
    {
      source:'/resources/webinars-and-events',
      destination:'/webinars-and-events',
      permanent:true
    },
    {
      source:'/resources/webinars-and-workshops/ai-for-insurance-workshop',
      destination:'/ai-insurance-workshops',
      permanent:true
    },
    {
      source:'/resources/webinars-and-workshops/ai-and-gen-ai-masterclass',
      destination:'/ai-and-gen-ai-masterclass',
      permanent:true
    },
    {
      source:'/resources/whitepapers',
      destination:'/whitepapers',
      permanent:true
    },
    {
      source:'/about-v2',
      destination:'/about',
      permanent:true
    },
    {
      source:'/career',
      destination:'/careers',
      permanent:true
    },
  ]
  }
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
