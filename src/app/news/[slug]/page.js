import Hero from "@/components/NewsDetail/Hero";
import FooterCTA from "@/components/Common/FooterCta";
import Layout from "@/components/Layout";
import { getPageMetadata } from "@/config/metadata";
import { BreadcrumbsJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { getNewsBySlug, getAllNews } from "@/lib/news";
import { homepage, stripHtml } from "@/lib/util";
import { notFound } from "next/navigation";
import NewsContentWp from "@/components/NewsDetail/NewsContentWp";
import RelatedArticleNews from "@/components/News/RelatedArticleNews";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { news } = await getNewsBySlug(slug);

  if (!news) return {};

  return getPageMetadata({
    title: news.metaTitle || news.title,
    description: stripHtml(news.metaDescription || news.excerpt),
    url: `/news/${slug}`,
    date_published: news.date,
    date_modified: news.modified || news.date,
    alternates: {
      canonical: `/news/${slug}`,
      languages: { "en-US": `/${slug}` },
    },
    openGraph: {
      url: `/${slug}`,
      images: news.metaImage
        ? [{ url: news.metaImage.url, width: 1200, height: 630 }]
        : [{ url: `${homepage}seo/news-detail.png`, width: 1200, height: 630 }],
    },
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { news } = await getNewsBySlug(slug);

  if (!news) return notFound();

  // Get related news by fetching recent news and excluding current
  const { news: allNews } = await getAllNews();
  const relatedNews = allNews
    .filter((item) => item.slug !== slug)
    .slice(0, 6)
    .map((item) => ({
      node: {
        id: item.id,
        title: item.title,
        slug: item.slug,
        date: item.date,
        newsDate: item.newsDate || null,
        featuredImage: {
          node: {
            sourceUrl: item.featuredImage?.sourceUrl || "",
            altText: item.featuredImage?.altText || "",
            srcSet: item.featuredImage?.srcSet || "",
            sizes: item.featuredImage?.sizes || "",
          },
        },
      },
    }));


    const pageMeta = getPageMetadata({
      title: news.metaTitle || news.title,
    description: stripHtml(news.metaDescription || news.excerpt),
    url: `/news/${slug}`,
    date_published: news.date,
    date_modified: news.modified || news.date,
    alternates: {
      canonical: `/news/${slug}`,
      languages: { "en-US": `/${slug}` },
    },
    openGraph: {
      url: `/${slug}`,
      images: news.metaImage
        ? [{ url: news.metaImage.url, width: 1200, height: 630 }]
        : [{ url: `${homepage}seo/blog-detail.png`, width: 1200, height: 630 }],
    },
  });


  return (
    <>
     <WebpageJsonLd metadata={pageMeta} />
      <BreadcrumbsJSONLD pathname={`/${slug}`} />
      <Layout>
        <Hero breadcrumbs news={news} />
        <NewsContentWp news={news} />
        <RelatedArticleNews news={news} relatedNews={relatedNews} />
        <FooterCTA footerCTAData={footerCTAData} width="w-[95%]" />
      </Layout>
    </>
  );
}

const footerCTAData = {
  heading: "Take a lightning tour of the Enterprise AI Platform ",
  para: "Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
  btnText1: "Book a Demo",
  book: true,
  btnLink1: "/#",
  btnText2: "Schedule a Call",
  target: true,
  btnLink2: "https://calendly.com/",
  img1: "/assets/images/footer/cta-3.png",
  img2: "/assets/images/footer/cta-2.png",
};
