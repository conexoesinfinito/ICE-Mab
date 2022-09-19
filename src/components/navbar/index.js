import  React, { useState, useEffect } from "react"
import './style.css'
import { FaIceCream} from 'react-icons/fa';
import { Link } from "gatsby";

const Navbar = () => {
    const [navbarScroll, setNavbarScroll] = useState(false)
    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })
    
    const handleScroll = () =>{
        if (window.scrollY >= 82){
            setNavbarScroll(true)  
        } else{
            setNavbarScroll(false)
        }
    }

  return (
      <header className={navbarScroll ? 'navbar scroll' : 'navbar'}>
        <div className='container'>
            <div className='row'>
        <div className='logo'>
            <h1>ICE <span>MAB</span><i className="icon"><FaIceCream /></i></h1>
        </div>
        <nav className="menu-links">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Sobre</Link></li>
        <li><a href="#">Produtos</a>
            <div class="sub-menu1">
                <ul>
                    <li><Link to="/sabores">Outros sabores</Link></li>
                    <li><a href="#">Mais requisitado</a></li>
                    <li><a href="#">Disponivel</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">Novidades</a>
        </li>
        <li><a href="#">Contacto</a></li>
    </ul>
    </nav>
    </div>
</div>
</header>
  )
}

export default Navbar


