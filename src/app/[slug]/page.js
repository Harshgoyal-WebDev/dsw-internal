import BlogContentWp from '@/components/BlogDetailPage/BlogContentWp'
import Hero from '@/components/BlogDetailPage/Hero'
import RelatedArticles from '@/components/BlogDetailPage/RelatedArticles'
import FooterCTA from '@/components/Common/FooterCta'
import Layout from '@/components/Layout'
import { getPageMetadata } from '@/config/metadata'
import { BreadcrumbsJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { homepage, stripHtml } from '@/lib/util'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const { post } = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    }
  }

  return getPageMetadata({
    title: post.metaTitle || post.title,
    description: stripHtml(post.metaDescription || post.excerpt),
    url: `/${slug}`,
    date_published: post.date,
    date_modified: post.modified || post.date,
    alternates: {
      canonical: `/${slug}`,
      languages: { 'en-US': `/${slug}`},
    },
    openGraph: {
      url: `/${slug}`,
      images: post.metaImage
        ? [{ url: post.metaImage.url, width: 1200, height: 630 }]
        : [{ url: `${homepage}seo/blog-detail.png`, width: 1200, height: 630 }],
    },
  })
}

export default async function Page({ params }) {
  const { slug } = await params
  const { post } = await getPostBySlug(slug)

  if (!post) return notFound()
  
  // Get related posts by fetching all posts and excluding current
  const { posts: allPosts } = await getAllPosts()
  const relatedPosts = allPosts
    .filter((item) => item.slug !== slug)
    .slice(0, 6)
    .map((item) => ({
      node: {
        id: item.id,
        title: item.title,
        slug: item.slug,
        date: item.date,
        featuredImage: {
          node: {
            sourceUrl: item.featuredImage?.sourceUrl || "",
            altText: item.featuredImage?.altText || "",
            srcSet: item.featuredImage?.srcSet || "",
            sizes: item.featuredImage?.sizes || "",
          },
        },
      },
    }))

  const pageMeta = getPageMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    url: `/${slug}`,
    date_published: post.date,
    date_modified: post.modified || post.date,
    alternates: {
      canonical: `/${slug}`,
      languages: { 'en-US': `/${slug}`},
    },
    openGraph: {
      url: `/${slug}`,
      images: post.metaImage
        ? [{ url: post.metaImage.url, width: 1200, height: 630 }]
        : [{ url: `${homepage}seo/blog-detail.png`, width: 1200, height: 630 }],
    },
  })

  return (
    <>
      <WebpageJsonLd metadata={pageMeta} />
      <BreadcrumbsJSONLD pathname={`/${slug}`} />
      <Layout>
        <Hero breadcrumbs post={post}/>
        <BlogContentWp post={post}/>
        <RelatedArticles post={post} relatedPosts={relatedPosts} />
        <FooterCTA footerCTAData={footerCTAData} width="w-[95%]" />
      </Layout>
    </>
  )
}

const footerCTAData = {
  heading: 'Take a lightning tour of the Enterprise AI Platform ',
  para:
    'Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.',
  btnText1: 'Book a Demo',
  book:true,
  btnLink1: '/#',
  btnText2: 'Schedule a Call',
  target:true,
  btnLink2: 'https://calendly.com/',
  img1: '/assets/images/footer/cta-3.png',
  img2: '/assets/images/footer/cta-4.png',
}

