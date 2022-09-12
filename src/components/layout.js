import React from 'react'
import Navbar from './navbar'
import Footer from './sections/footer'

const Layout = ({ children }) => {
  return (
    <> 
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout