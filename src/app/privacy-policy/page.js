import Hero from '@/components/Common/Hero'
import Layout from '@/components/Layout'
import Content from '@/components/PrivacyPolicy/Content'
import React from 'react'

const page = () => {
  return (
   <Layout>
    <Hero heroData={heroData}/>
    <Content/>
   </Layout>
  )
}

export default page

const heroData= {
  heading:"Privacy Policy",
  para:"​",
  paraClass:"",
  headingWidth:"w-[60%]",
  homepage:false,
  hidebtn:true
}