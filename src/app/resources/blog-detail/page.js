import BlogContent from '@/components/BlogDetailPage/BlogContent'
import Hero from '@/components/BlogDetailPage/Hero'
import RelatedArticles from '@/components/BlogDetailPage/RelatedArticles'
import FooterCTA from '@/components/Common/FooterCta'
import Layout from '@/components/Layout'
import React from 'react'

export default function page() {
    return (
        <Layout>
            <Hero  breadcrumbs={true}/>
            <BlogContent />
            <RelatedArticles />
            <FooterCTA footerCTAData={footerCTAData} />
        </Layout>
    )
}


const footerCTAData = {
    heading: "Take a lightning tour of the Enterprise AI Platform ",
    para: "Discover how UnifyAI can accelerate your AI/ML and GenAI initiatives with seamless deployment, scalability, and security.",
    btnText1: "Book a demo",
    btnLink1: "/#",
    btnText2: "Schedule a Call",
    btnLink2: "/#",
    img1: "/assets/images/footer/image-1.png",
    img2: "/assets/images/footer/image-2.png"
}

