import * as React from "react"
import About from "../components/About/about"
import Cardapio from "../components/Cardapio/cardapio"
import Contact from "../components/Contact/contact"
import Home from "../components/Home/home"
import Layout from "../components/layout"
import Produtos from "../components/Produtos/produtos"
import Sabores from "../components/Sabores/sabores"

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

