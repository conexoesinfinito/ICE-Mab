import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"


const Sabores = () => {
  return (
    <Layout>
      <div className='row sab  back'>
      <div className='container'>
      <StaticImage src='../../images/ice-cream1.jpg'placeholder="blurred" alt="imagem" class='imgsab'/>
      <StaticImage src='../../images/ice-cream1.jpg'placeholder="blurred" alt="imagem" class='imgsab'/>
      <StaticImage src='../../images/ice-cream1.jpg'placeholder="blurred" alt="imagem" class='imgsab'/>
      <StaticImage src='../../images/ice-cream1.jpg'placeholder="blurred" alt="imagem" class='imgsab'/>
      <StaticImage src='../../images/ice-cream1.jpg'placeholder="blurred" alt="imagem" class='imgsab'/>
      </div>
     </div>
    </Layout>
  )
}

export default Sabores