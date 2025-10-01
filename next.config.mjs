// next.config.mjs

import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix workspace root warning
  outputFileTracingRoot: process.cwd(),

  // Performance optimizations
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    // NOTE: there is no `qualities` config in Next.js; remove it.
  },

  // Compression
  compress: true,

  // Generate source maps for better debugging
  productionBrowserSourceMaps: true,
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
