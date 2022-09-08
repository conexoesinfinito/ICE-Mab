import * as React from "react"
import './cardapio.css'
import { StaticImage } from "gatsby-plugin-image"



const Cardapio = () => {
  return (
    <div className="cardapio section-padding">
        <div className="container">
          <div className="boxs">
            <div className="box1">
                <StaticImage src='../../images/fundo-ice.jpg'  placeholder="blurred" alt="imagem de sorvete"/>
            </div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
        </div>
    </div>
  )
}

export default Cardapio

