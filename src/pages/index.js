import * as React from "react"
import Navbar from "../components/navbar"
import About from "../components/sections/about"
import Cardapio from "../components/sections/cardapio"
import Contact from "../components/sections/contact"
import Footer from "../components/sections/footer"
import Home from "../components/sections/home"
import Produtos from "../components/sections/produtos"
import Sabores from "../components/sections/sabores"
import './global.css'



const IndexPage = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Produtos/>
   <Sabores/>
   <Cardapio/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default IndexPage

