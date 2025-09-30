import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import KeepScrolling from '../KeepScrolling'
import { ImageObjectJsonLd, LocalBusiness, OrganizationJsonLd, WebsiteJsonLd } from '@/lib/json-ld'

const Layout = ({ children }) => {
  return (
    <>
     <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />
      <Header />
      {children}
      <KeepScrolling />
      <Footer />
    </>
  )
}

export default Layout;
