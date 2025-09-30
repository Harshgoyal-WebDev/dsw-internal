import { homepage } from "@/lib/util";


export default function sitemap() {
  const lastModified = new Date('2025-09-30T09:31:16Z');

  
  const pages = [
    ['', 1.00],
    ['unify', 0.80],
    ['insuraince', 0.80], 
    ['about', 0.80],
    ['resources/blog', 0.80],
    ['resources/news-and-pr', 0.80],
    ['resources/product-videos', 0.80],
    ['resources/webinars-and-events', 0.80],
    ['resources/webinars-and-workshops/ai-for-insurance-workshop', 0.80],
    ['resources/webinars-and-workshops/ai-and-gen-ai-masterclass', 0.80],
    ['resources/whitepapers', 0.80],
    ['pilot-program', 0.80],
    ['contact-us', 0.80],
    ['resources/blog-detail', 0.64],
  ];

  return pages.map(([path, priority]) => ({
    url: new URL(path, homepage).toString(),
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
