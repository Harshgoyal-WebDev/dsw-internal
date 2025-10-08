
import BlogContentWp from '@/components/BlogDetailPage/BlogContentWp'
import Hero from '@/components/BlogDetailPage/Hero'
import RelatedArticles from '@/components/BlogDetailPage/RelatedArticles'
import FooterCTA from '@/components/Common/FooterCta'
import Layout from '@/components/Layout'
import { getPageMetadata } from '@/config/metadata'
import { BreadcrumbsJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { getPostBySlug } from '@/lib/posts'
import { homepage } from '@/lib/util'
import { notFound } from 'next/navigation'

export default async function Page({ params }) {
  const { slug } = params
  const { post } = await getPostBySlug(slug)

  if (!post) return notFound()
    // console.log(post)

  const pageMeta = getPageMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    url: `/resources/${slug}`,
    date_published: post.date,
    date_modified: post.modified || post.date,
    alternates: {
      canonical: `/resources/${slug}`,
      languages: { 'x-default': `/resources/${slug}` },
    },
    openGraph: {
      url: `/resources/${slug}`,
      images: post.metaImage
        ? [{ url: post.metaImage.url, width: 1200, height: 630 }]
        : [{ url: `${homepage}seo/blog-detail.png`, width: 1200, height: 630 }],
    },
  })

  return (
    <>
      <WebpageJsonLd metadata={pageMeta} />
      <BreadcrumbsJSONLD pathname={`/resources/${slug}`} />
      <Layout>
        <Hero breadcrumbs post={post}/>
        <BlogContentWp post={post}/>
        <RelatedArticles currentSlug={slug} />
        <FooterCTA footerCTAData={footerCTAData} width="w-[95%]" />
      </Layout>
    </>
  )
}

const footerCTAData = {
  heading: 'Take a lightning tour of the Enterprise AI Platform ',
  para:
    'Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.',
  btnText1: 'Book a demo',
  btnLink1: '/#',
  btnText2: 'Schedule a Call',
  btnLink2: '/#',
  img1: '/assets/images/footer/image-1.png',
  img2: '/assets/images/footer/image-2.png',
}
