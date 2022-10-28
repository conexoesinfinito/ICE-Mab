import  React, {useEffect} from "react"
import './produtos.css'
import { FaIceCream } from 'react-icons/fa';
import AOS from "aos"
import "aos/dist/aos.css";






const Produtos = () => {
  useEffect(() => {
    AOS.init({duration : 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="produtos section-padding">
    <div className="container">
      <div className="conteudo-produtos" data-aos="zoom-in">
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

