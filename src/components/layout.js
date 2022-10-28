import React from 'react'
import Footer from './Footer/footer'
import Navbar from './navbar'


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