import EnterpriseAI from '@/Components/Homepage/EnterpriseAI'
import Faqs from '@/Components/Homepage/FAQs'
import Hero from '@/Components/Homepage/Hero'
import Insuraince from '@/Components/Homepage/Insuraince'
import SuccessStories from '@/Components/Homepage/SuccessStories'
import Tour from '@/Components/Homepage/Tour'
import Layout from '@/Components/Layout'
import About from '@/Components/UnifyPage/About'
import AiEverywhere from '@/Components/UnifyPage/AiEverywhere'
import Diagram from '@/Components/UnifyPage/Diagram'
import OnePlatform from '@/Components/UnifyPage/OnePlatForm'
import PresentationLayer from '@/Components/UnifyPage/PresentationLayer'
import Usecase from '@/Components/UnifyPage/Usecase'
import React from 'react'

export default function page() {
    return (
        <Layout>
            {/* <Hero /> */}
            <AiEverywhere />
            <Tour />
            <Usecase />
            <PresentationLayer />
            <Diagram />
            <OnePlatform />
            <About />
            <SuccessStories />
            <Faqs />
        </Layout>
    )
}
