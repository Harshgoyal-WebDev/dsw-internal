export default function sitemap() {
  return [
    {
      url: 'https://datasciencewizards.ai',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more pages as needed
    // {
    //   url: 'https://datasciencewizards.ai/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://datasciencewizards.ai/contact',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
  ]
}