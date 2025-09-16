import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import KeepScrolling from '../KeepScrolling'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <KeepScrolling />
      <Footer />
    </>
  )
}

export default Layout;
