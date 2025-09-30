/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix workspace root warning
  outputFileTracingRoot: process.cwd(),
  
  // Package import optimizations
  // experimental: {
  //   optimizePackageImports: ['gsap', 'three', '@react-three/fiber', 'swiper', 'lenis'],
  // },

  // Webpack optimization for bundle splitting
  // webpack: (config, { isServer, dev }) => {
  //   // Only optimize for production client builds
  //   if (!isServer && !dev) {
  //     config.optimization.splitChunks.cacheGroups = {
  //       ...config.optimization.splitChunks.cacheGroups,
        
  //       // GSAP animation library
  //       gsap: {
  //         test: /[\\/]node_modules[\\/](gsap)[\\/]/,
  //         name: 'gsap',
  //         chunks: 'all',
  //         priority: 10,
  //         enforce: true,
  //       },
        
  //       // Three.js and React Three Fiber
  //       three: {
  //         test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
  //         name: 'three',
  //         chunks: 'all',
  //         priority: 8,
  //         enforce: true,
  //       },
        
  //       // Motion/Framer Motion
  //       motion: {
  //         test: /[\\/]node_modules[\\/](motion|framer-motion)[\\/]/,
  //         name: 'motion',
  //         chunks: 'all',
  //         priority: 7,
  //         enforce: true,
  //       },
        
  //       // Swiper carousel
  //       swiper: {
  //         test: /[\\/]node_modules[\\/](swiper)[\\/]/,
  //         name: 'swiper',
  //         chunks: 'all',
  //         priority: 6,
  //         enforce: true,
  //       },
        
  //       // Custom animations folder
  //       animations: {
  //         test: /[\\/]src[\\/]Components[\\/]Animations[\\/]/,
  //         name: 'animations',
  //         chunks: 'all',
  //         priority: 5,
  //         enforce: true,
  //       },
        
  //       // Homepage components (lazy load candidates)
  //       homepage: {
  //         test: /[\\/]src[\\/]Components[\\/]Homepage[\\/]/,
  //         name: 'homepage',
  //         chunks: 'async',
  //         priority: 4,
  //         minSize: 20000,
  //       },
        
  //       // Common vendor libraries
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendor',
  //         chunks: 'all',
  //         priority: 1,
  //         minSize: 30000,
  //         maxSize: 244000,
  //       }
  //     };
  //   }
    
  //   return config;
  // },
  
  // Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    qualities: [75, 90, 100], // Support quality levels used in the app
  },
  
  // Compression
  compress: true,
  
  // Generate source maps for better debugging
  productionBrowserSourceMaps: true,
};

export default nextConfig;
