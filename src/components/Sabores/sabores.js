import * as React from "react"
import './sabores.css'
import { StaticImage } from "gatsby-plugin-image"




const Sabores = () => {
  return (
    <div className="sabores section-padding">
        <div className="container">
            <div className="row">
                <div className="card-sb">
                <StaticImage src='../../images/ice-cream1.jpg'placeholder="blurred" alt="imagem"/>
                    <span>Ice Cream</span>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Aenean placerat arcu nisl</p>
                        <div className="descrição">
                            <span className="preço">500.00kwz</span>
                            <button className="btn-desc">Faça a sua encomenda</button>
                        </div>
                </div>
                <div className="card-sb">
                <StaticImage src='../../images/ice-cream2.jpg'placeholder="blurred" alt="imagem"/>
                    <span>Ice Cream</span>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Aenean placerat arcu nisl</p>
                        <div className="descrição">
                            <span className="preço">500.00kwz</span>
                            <button className="btn-desc">Faça a sua encomenda</button>
                        </div>
                </div>
                <div className="card-sb">
                <StaticImage src='../../images/ice-cream3.jpg'placeholder="blurred" alt="imagem"/>
                    <span>Ice Cream</span>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Aenean placerat arcu nisl</p>
                        <div className="descrição">
                            <span className="preço">500.00kwz</span>
                            <button className="btn-desc">Faça a sua encomenda</button>
                        </div>
                </div>
                <div className="card-sb">
                <StaticImage src='../../images/ice-cream4.jpg'placeholder="blurred" alt="imagem"/>
                    <span>Ice Cream</span>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Aenean placerat arcu nisl</p>
                        <div className="descrição">
                            <span className="preço">500.00kwz</span>
                            <button className="btn-desc">Faça a sua encomenda</button>
                        </div>
                </div>
                <div className="card-sb">
                <StaticImage src='../../images/ice-cream5.jpg'placeholder="blurred" alt="imagem"/>
                    <span>Ice Cream</span>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Aenean placerat arcu nisl</p>
                        <div className="descrição">
                            <span className="preço">500.00kwz</span>
                            <button className="btn-desc">Faça a sua encomenda</button>
                        </div>
                </div>
                <div className="card-sb">
                <StaticImage src='../../images/ice-cream6.jpg'placeholder="blurred" alt="imagem"/>
                    <span>Ice Cream</span>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Aenean placerat arcu nisl</p>
                        <div className="descrição">
                            <span className="preço">500.00kwz</span>
                            <button className="btn-desc">Faça a sua encomenda</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sabores

