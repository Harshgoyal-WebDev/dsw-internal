export default function sitemap() {
  return [
    {
      url: 'https://dsw-internal.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more pages as needed
    // {
    //   url: 'https://dsw-internal.vercel.app/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://dsw-internal.vercel.app/contact',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
  ]
}