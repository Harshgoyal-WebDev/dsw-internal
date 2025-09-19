import React from 'react';
import Hero from '@/components/Contact/Hero';
import Layout from '@/components/Layout'
import Form from '@/components/Contact/Form';
import OfficeLocations from '@/components/Contact/OfficeLocations';

const Page = () => {
  return (
    <>
        <Layout>

        <Hero heroData={heroData} />
        <Form />
         <OfficeLocations />
        </Layout>
       
    </>
  )
}

export default Page

const heroData= {
  heading:"Let’s Build the Future of AI Together​ ",
  para:"Whether you're ready to launch your next AI initiative or just exploring possibilities—let’s talk.​",
  paraClass:"",
  homepage:false
}