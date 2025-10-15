# Additional Performance Optimizations Guide

Quick reference for implementing additional performance improvements.

## 1. Image Optimization Checklist

### Use Next.js Image Component
```jsx
// ❌ Before
<img src="/assets/image.png" alt="Description" />

// ✅ After
import Image from 'next/image';
<Image
  src="/assets/image.png"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"  // for below-the-fold images
  priority        // for above-the-fold images (LCP element)
/>
```

### Optimize LCP Image
```jsx
// Find your LCP image and add priority
<Image
  src="/assets/hero-image.png"
  alt="Hero"
  priority
  quality={85}  // Balance between quality and size
/>
```

## 2. Reduce Main-Thread Work

### Move Heavy Computations to Web Workers
```javascript
// worker.js
self.addEventListener('message', (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
});

// component.jsx
const worker = new Worker(new URL('./worker.js', import.meta.url));
worker.postMessage(data);
worker.addEventListener('message', (e) => {
  setResult(e.data);
});
```

### Debounce Scroll/Resize Handlers
```javascript
import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
```

## 3. Optimize GSAP Animations

### Use the GSAP Loader
```javascript
// ❌ Before
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// ✅ After
import { loadGsapWithPlugins } from '@/lib/gsap-loader';

useEffect(() => {
  loadGsapWithPlugins().then(({ gsap, ScrollTrigger }) => {
    // Use gsap here
    gsap.to('.element', { opacity: 1, scrollTrigger: {...} });
  });
}, []);
```

### Kill GSAP Timelines on Unmount
```javascript
useEffect(() => {
  const ctx = gsap.context(() => {
    // animations
  });

  return () => ctx.revert(); // Clean up
}, []);
```

## 4. Reduce DOM Size

### Virtual Scrolling for Long Lists
```bash
npm install react-window
```

```jsx
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={1000}
  itemSize={35}
  width="100%"
>
  {({ index, style }) => (
    <div style={style}>Row {index}</div>
  )}
</FixedSizeList>
```

### Conditional Rendering
```jsx
// ❌ Before - renders all 100 items
{items.map(item => <Item key={item.id} {...item} />)}

// ✅ After - renders only visible items
{items.slice(0, visibleCount).map(item => <Item key={item.id} {...item} />)}
```

## 5. Third-Party Script Optimization

### Defer Non-Critical Scripts
```jsx
import Script from 'next/script';

// In layout.js or page
<Script
  src="https://example.com/script.js"
  strategy="lazyOnload"  // Load after page is interactive
/>
```

### Self-Host Google Fonts (if using)
```bash
npm install @next/font
```

## 6. API Route Optimization

### Add Cache Headers to API Routes
```javascript
// app/api/route.js
export async function GET(request) {
  const data = await fetchData();

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  });
}
```

## 7. Component Optimization

### Memoize Expensive Computations
```jsx
import { useMemo } from 'react';

const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => heavyTransformation(item));
  }, [data]);

  return <div>{processedData}</div>;
};
```

### Prevent Unnecessary Re-renders
```jsx
import { memo } from 'react';

const ChildComponent = memo(({ value }) => {
  return <div>{value}</div>;
});
```

## 8. Webpack Bundle Analysis

### Analyze Bundle Size
```bash
npm run analyze
```

Then open:
- `.next/analyze/client.html` - Client bundle
- `.next/analyze/nodejs.html` - Server bundle

### Find Large Dependencies
Look for:
- Libraries > 50KB
- Duplicate dependencies
- Unused exports

## 9. Prefetch Critical Resources

### Add to layout.js
```jsx
export default function Layout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://bisque-okapi-883422.hostingersite.com" />
        <link rel="dns-prefetch" href="https://bisque-okapi-883422.hostingersite.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 10. Monitoring & Measurement

### Add Custom Web Vitals Tracking
```jsx
// app/layout.js
import { reportWebVitals } from '@/lib/performance';

export function reportWebVitals(metric) {
  console.log(metric);

  // Send to analytics
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
    });
  }
}
```

## Performance Budget

Set targets for your app:

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| LCP | < 2.5s | 0.9s | ✅ |
| FID | < 100ms | - | - |
| CLS | < 0.1 | 0 | ✅ |
| TBT | < 300ms | 780ms | ❌ |
| Bundle Size (Homepage) | < 250KB | 288KB | ⚠️ |

## Quick Wins Checklist

- [ ] Convert all `<img>` to `<Image>`
- [ ] Add `loading="lazy"` to below-the-fold images
- [ ] Add `priority` to LCP image
- [ ] Defer third-party scripts
- [ ] Enable compression (already done ✅)
- [ ] Add caching headers (already done ✅)
- [ ] Use dynamic imports for heavy components (partially done ✅)
- [ ] Remove unused dependencies
- [ ] Optimize GSAP loading
- [ ] Add virtual scrolling for long lists

## Resources

- [Next.js Performance Best Practices](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance Guides](https://web.dev/learn-core-web-vitals/)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
