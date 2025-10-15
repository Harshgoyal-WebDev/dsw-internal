// Client-side performance monitoring utilities

export function reportWebVitals(metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // You can send to your analytics endpoint
    const body = JSON.stringify(metric);
    const url = '/api/analytics';

    // Use sendBeacon if available for better reliability
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, {
        body,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
      }).catch(console.error);
    }
  }
}

// Measure and log component render times
export function measureComponentRender(componentName, callback) {
  const start = performance.now();
  const result = callback();
  const end = performance.now();

  if (process.env.NODE_ENV === 'development') {
    console.log(`${componentName} render time: ${(end - start).toFixed(2)}ms`);
  }

  return result;
}

// Track long tasks
export function trackLongTasks() {
  if (typeof PerformanceObserver === 'undefined') return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Long task is > 50ms
        if (entry.duration > 50) {
          console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`, entry);
        }
      }
    });

    observer.observe({ entryTypes: ['longtask'] });
  } catch (e) {
    // PerformanceObserver not supported
  }
}

// Monitor Largest Contentful Paint
export function trackLCP() {
  if (typeof PerformanceObserver === 'undefined') return;

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];

      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // Not supported
  }
}

// Monitor First Input Delay
export function trackFID() {
  if (typeof PerformanceObserver === 'undefined') return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const delay = entry.processingStart - entry.startTime;
        console.log('FID:', delay);
      }
    });

    observer.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    // Not supported
  }
}

// Initialize all performance tracking
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  trackLongTasks();
  trackLCP();
  trackFID();
}
