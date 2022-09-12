import * as React from "react"
import Layout from "../components/layout"
import About from "../components/sections/about"
import Cardapio from "../components/sections/cardapio"
import Contact from "../components/sections/contact"
import Home from "../components/sections/home"
import Produtos from "../components/sections/produtos"
import Sabores from "../components/sections/sabores"
import './global.css'



const IndexPage = () => {
  return (
   <Layout>

   <Home/>
   <About/>
   <Produtos/>
   <Sabores/>
   <Cardapio/>
   <Contact/>
   
   </Layout>
  )
}

export default IndexPage

