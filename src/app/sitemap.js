// // app/sitemap.js
// import fs from 'fs';
// import path from 'path';
// import { headers } from 'next/headers';
// import { homepage as HOMEPAGE_FROM_UTIL } from '@/lib/util';

// // Ensure Node runtime (so `fs` works)
// export const runtime = 'nodejs';
// // Build-time generation so the source tree exists
// export const dynamic = 'force-static';

// // Support both app/ and src/app/
// const APP_CANDIDATES = [
//   path.join(process.cwd(), 'app'),
//   path.join(process.cwd(), 'src', 'app'),
// ].filter(p => {
//   try { return fs.existsSync(p) && fs.statSync(p).isDirectory(); } catch { return false; }
// });

// const PAGE_FILES = new Set([
//  'page.jsx', 'page.js'
// ]);

// function isRouteGroup(name) { return name.startsWith('(') && name.endsWith(')'); }
// function isParallelRoute(name) { return name.startsWith('@'); }
// function isDynamicSegment(name) { return name.includes('[') && name.includes(']'); }

// function findPageFile(dirAbs) {
//   for (const file of PAGE_FILES) {
//     const full = path.join(dirAbs, file);
//     try { if (fs.existsSync(full)) return full; } catch {}
//   }
//   return null;
// }

// function toUrlPath(dirRel) {
//   const parts = dirRel
//     .split(path.sep)
//     .filter(Boolean)
//     .filter(p => !isRouteGroup(p) && !isParallelRoute(p));
//   const joined = '/' + parts.join('/');
//   return joined === '//' ? '/' : joined;
// }

// function safeReaddir(dirAbs) {
//   try { return fs.readdirSync(dirAbs, { withFileTypes: true }); } catch { return []; }
// }

// function collectStaticRoutesFrom(baseDirAbs, dirRel = '') {
//   const out = [];
//   const dirAbs = path.join(baseDirAbs, dirRel);
//   const entries = safeReaddir(dirAbs);

//   const pageFile = findPageFile(dirAbs);
//   const hasDynamicInPath = dirRel.split(path.sep).some(seg => isDynamicSegment(seg));

//   if (pageFile && !hasDynamicInPath) {
//     let lastModified;
//     try { lastModified = fs.statSync(pageFile).mtime; } catch {}
//     out.push({ path: toUrlPath(dirRel), lastModified });
//   }

//   for (const e of entries) {
//     if (!e.isDirectory()) continue;
//     const name = e.name;

//     // Always descend into route groups / parallel routes
//     if (isRouteGroup(name) || isParallelRoute(name)) {
//       out.push(...collectStaticRoutesFrom(baseDirAbs, path.join(dirRel, name)));
//       continue;
//     }

//     // Skip dynamic segments here
//     if (isDynamicSegment(name)) continue;

//     out.push(...collectStaticRoutesFrom(baseDirAbs, path.join(dirRel, name)));
//   }

//   return out;
// }

// function collectStaticRoutes() {
//   const all = [];
//   for (const base of APP_CANDIDATES) {
//     all.push(...collectStaticRoutesFrom(base, ''));
//   }

//   // De-duplicate by path (in case both app/ and src/app/ exist during refactors)
//   const seen = new Map();
//   for (const r of all) {
//     if (!seen.has(r.path)) seen.set(r.path, r);
//   }
//   // Ensure root "/" is last-modified if any instance had it
//   return Array.from(seen.values()).sort((a, b) => (a.path > b.path ? 1 : -1));
// }

// // Resolve base URL without hardcoding localhost:3000
// async function resolveBaseUrl() {
//   const candidates = [
//     HOMEPAGE_FROM_UTIL,
//      `${process.env.NEXT_PUBLIC_HOMEPAGE}`,
//   ].filter(Boolean);

//   for (const c of candidates) {
//     try { return new URL(c).toString(); } catch {}
//   }

//   // In dev, infer from request headers (any host/port)
//   if (process.env.NODE_ENV !== 'production') {
//     try {
//       const h = await headers();
//       const host = h.get('x-forwarded-host') || h.get('host');
//       const proto = h.get('x-forwarded-proto') || 'http';
//       if (host) return `${proto}://${host}/`;
//     } catch {}
//   }

//   // Final fallback (neutral; no :3000)
//   return '';
// }

// export default async function sitemap() {
//   const base = await resolveBaseUrl();
//   const routes = collectStaticRoutes();

//   if (!routes.length) {
//     // At least return the homepage
//     return [{ url: new URL('/', base).toString(), changeFrequency: 'monthly', priority: 1.0 }];
//   }

//   return routes.map(({ path, lastModified }) => ({
//     url: new URL(path === '/' ? '' : path, base).toString(),
//     lastModified,
//     changeFrequency: 'monthly',
//     priority: path === '/' ? 1.0 : 0.8,
//   }));
// }



// app/sitemap.js
import fs from 'fs';
import path from 'path';
import { headers } from 'next/headers';
import { homepage as HOMEPAGE_FROM_UTIL } from '@/lib/util';

// Ensure Node runtime (so `fs` works)
export const runtime = 'nodejs';
// Revalidate every hour to keep sitemap fresh
export const revalidate = 3600;

// Support both app/ and src/app/
const APP_CANDIDATES = [
  path.join(process.cwd(), 'app'),
  path.join(process.cwd(), 'src', 'app'),
].filter(p => {
  try { return fs.existsSync(p) && fs.statSync(p).isDirectory(); } catch { return false; }
});

const PAGE_FILES = new Set([
  'page.jsx', 'page.js'
]);

function isRouteGroup(name) { return name.startsWith('(') && name.endsWith(')'); }
function isParallelRoute(name) { return name.startsWith('@'); }
function isDynamicSegment(name) { return name.includes('[') && name.includes(']'); }

function findPageFile(dirAbs) {
  for (const file of PAGE_FILES) {
    const full = path.join(dirAbs, file);
    try { if (fs.existsSync(full)) return full; } catch {}
  }
  return null;
}

function toUrlPath(dirRel) {
  const parts = dirRel
    .split(path.sep)
    .filter(Boolean)
    .filter(p => !isRouteGroup(p) && !isParallelRoute(p));
  const joined = '/' + parts.join('/');
  return joined === '//' ? '/' : joined;
}

function safeReaddir(dirAbs) {
  try { return fs.readdirSync(dirAbs, { withFileTypes: true }); } catch { return []; }
}

function collectStaticRoutesFrom(baseDirAbs, dirRel = '') {
  const out = [];
  const dirAbs = path.join(baseDirAbs, dirRel);
  const entries = safeReaddir(dirAbs);

  const pageFile = findPageFile(dirAbs);
  const hasDynamicInPath = dirRel.split(path.sep).some(seg => isDynamicSegment(seg));

  if (pageFile && !hasDynamicInPath) {
    let lastModified;
    try { lastModified = fs.statSync(pageFile).mtime; } catch {}
    out.push({ path: toUrlPath(dirRel), lastModified });
  }

  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const name = e.name;

    // Always descend into route groups / parallel routes
    if (isRouteGroup(name) || isParallelRoute(name)) {
      out.push(...collectStaticRoutesFrom(baseDirAbs, path.join(dirRel, name)));
      continue;
    }

    // Skip dynamic segments here
    if (isDynamicSegment(name)) continue;

    out.push(...collectStaticRoutesFrom(baseDirAbs, path.join(dirRel, name)));
  }

  return out;
}

function collectStaticRoutes() {
  const all = [];
  for (const base of APP_CANDIDATES) {
    all.push(...collectStaticRoutesFrom(base, ''));
  }

  // De-duplicate by path
  const seen = new Map();
  for (const r of all) {
    if (!seen.has(r.path)) seen.set(r.path, r);
  }
  return Array.from(seen.values()).sort((a, b) => (a.path > b.path ? 1 : -1));
}

// Resolve base URL without hardcoding localhost:3000
async function resolveBaseUrl() {
  const candidates = [
    HOMEPAGE_FROM_UTIL,
    `${process.env.NEXT_PUBLIC_HOMEPAGE}`,
  ].filter(Boolean);

  for (const c of candidates) {
    try { return new URL(c).toString(); } catch {}
  }

  // In dev, infer from request headers (any host/port)
  if (process.env.NODE_ENV !== 'production') {
    try {
      const h = await headers();
      const host = h.get('x-forwarded-host') || h.get('host');
      const proto = h.get('x-forwarded-proto') || 'http';
      if (host) return `${proto}://${host}/`;
    } catch {}
  }

  // Final fallback
  return '';
}

// ============================================
// 🔥 WORDPRESS GRAPHQL FETCHING
// ============================================

async function fetchGraphQL(query) {
  try {
    const response = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`WordPress GraphQL returned ${response.status}`);
    }

    const { data, errors } = await response.json();
    
    if (errors) {
      console.error('GraphQL Errors:', errors);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching from WordPress:', error);
    return null;
  }
}

// Fetch all news posts for /news/[slug]
async function fetchAllNews() {
  const query = `
    query AllNews {
      allNews(first: 1000, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            slug
            modified
            date
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  
  if (!data?.allNews?.edges) {
    return [];
  }

  return data.allNews.edges.map(({ node }) => ({
    slug: node.slug,
    lastModified: new Date(node.modified || node.date),
  }));
}

// Fetch all pages for /[slug]
async function fetchAllPages() {
  const query = `
    query AllPages {
      pages(first: 1000, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            slug
            modified
            date
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  
  if (!data?.pages?.edges) {
    return [];
  }

  return data.pages.edges.map(({ node }) => ({
    slug: node.slug,
    lastModified: new Date(node.modified || node.date),
  }));
}

// Fetch all blog posts for /[slug] (if posts are also at root)
async function fetchAllPosts() {
  const query = `
    query AllPosts {
      posts(first: 1000, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            slug
            modified
            date
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  
  if (!data?.posts?.edges) {
    return [];
  }

  return data.posts.edges.map(({ node }) => ({
    slug: node.slug,
    lastModified: new Date(node.modified || node.date),
  }));
}

// Collect all dynamic routes from WordPress
async function getAllDynamicRoutes() {
  const dynamicRoutes = [];

  try {
    // Fetch news posts for /news/[slug]
    const newsItems = await fetchAllNews();
    dynamicRoutes.push(
      ...newsItems.map(item => ({
        url: `/news/${item.slug}`,
        lastModified: item.lastModified,
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
    );

    // Fetch WordPress pages for /[slug]
    const pages = await fetchAllPages();
    dynamicRoutes.push(
      ...pages.map(page => ({
        url: `/${page.slug}`,
        lastModified: page.lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
      }))
    );

    // Optional: Fetch blog posts if they're also at root level /[slug]
    // Uncomment if your blog posts are at root, not under /blog
    const posts = await fetchAllPosts();
    dynamicRoutes.push(
      ...posts.map(post => ({
        url: `/${post.slug}`,
        lastModified: post.lastModified,
        changeFrequency: 'weekly',
        priority: 0.6,
      }))
    );

  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
  }

  return dynamicRoutes;
}

// ============================================
// MAIN SITEMAP EXPORT
// ============================================

export default async function sitemap() {
  const base = await resolveBaseUrl();
  
  // Get static routes from file system
  const staticRoutes = collectStaticRoutes();
  
  // Get dynamic routes from WordPress GraphQL
  const dynamicRoutes = await getAllDynamicRoutes();

  // Convert static routes to sitemap format
  const staticUrls = staticRoutes.map(({ path, lastModified }) => ({
    url: new URL(path === '/' ? '' : path, base).toString(),
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1.0 : 0.8,
  }));

  // Convert dynamic routes to sitemap format
  const dynamicUrls = dynamicRoutes.map(({ url, lastModified, changeFrequency, priority }) => ({
    url: new URL(url, base).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));

  // Combine and return all URLs
  const allUrls = [...staticUrls, ...dynamicUrls];

  // If no routes found, return at least homepage
  if (!allUrls.length) {
    return [{ 
      url: new URL('/', base).toString(), 
      changeFrequency: 'monthly', 
      priority: 1.0 
    }];
  }

  return allUrls;
}