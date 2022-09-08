import * as React from "react"
import './produtos.css'
import { FaIceCream } from 'react-icons/fa';





const Produtos = () => {
  return (
    <div className="produtos section-padding">
    <div className="container">
      <div className="conteudo-produtos">
        <div className="card-prod">
        <i className="icon"><FaIceCream /></i>
             <span>Ice Cream</span>
        </div>
        <div className="card-prod">
        <i className="icon"><FaIceCream /></i>
        <span>Ice Cream</span>
        </div>
        <div className="card-prod">
        <i className="icon"><FaIceCream /></i>
        <span>Ice Cream</span>
        </div>
        <div className="card-prod">
        <i className="icon"><FaIceCream /></i>
        <span>Ice Cream</span>
        </div>
        <div className="card-prod">
        <i className="icon"><FaIceCream /></i>
        <span>Ice Cream</span>
        </div>
        <div className="card-prod">
          <i className="icon"><FaIceCream /></i>
          <span>Ice Cream</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Produtos

