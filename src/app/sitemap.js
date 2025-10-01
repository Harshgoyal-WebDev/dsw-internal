// import { homepage } from "@/lib/util";


// export default function sitemap() {
//   const lastModified = new Date('2025-09-30T09:31:16Z');

  
//   const pages = [
//     ['', 1.00],
//     ['unify', 0.80],
//     ['insuraince', 0.80], 
//     ['about', 0.80],
//     ['resources/blog', 0.80],
//     ['resources/news-and-pr', 0.80],
//     ['resources/product-videos', 0.80],
//     ['resources/webinars-and-events', 0.80],
//     ['resources/webinars-and-workshops/ai-for-insurance-workshop', 0.80],
//     ['resources/webinars-and-workshops/ai-and-gen-ai-masterclass', 0.80],
//     ['resources/whitepapers', 0.80],
//     ['pilot-program', 0.80],
//     ['contact-us', 0.80],
//     ['resources/blog-detail', 0.64],
//   ];

//   return pages.map(([path, priority]) => ({
//     url: new URL(path, homepage).toString(),
//     lastModified,
//     changeFrequency: 'monthly',
//     priority,
//   }));
// }

// app/sitemap.js
import fs from 'fs';
import path from 'path';
import { headers } from 'next/headers';
import { homepage as HOMEPAGE_FROM_UTIL } from '@/lib/util';

// Ensure Node runtime (so `fs` works)
export const runtime = 'nodejs';
// Build-time generation so the source tree exists
export const dynamic = 'force-static';

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

  // De-duplicate by path (in case both app/ and src/app/ exist during refactors)
  const seen = new Map();
  for (const r of all) {
    if (!seen.has(r.path)) seen.set(r.path, r);
  }
  // Ensure root "/" is last-modified if any instance had it
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

  // Final fallback (neutral; no :3000)
  return '';
}

export default async function sitemap() {
  const base = await resolveBaseUrl();
  const routes = collectStaticRoutes();

  if (!routes.length) {
    // At least return the homepage
    return [{ url: new URL('/', base).toString(), changeFrequency: 'monthly', priority: 1.0 }];
  }

  return routes.map(({ path, lastModified }) => ({
    url: new URL(path === '/' ? '' : path, base).toString(),
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1.0 : 0.8,
  }));
}


