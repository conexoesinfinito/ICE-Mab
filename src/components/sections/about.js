import * as React from "react"
import './about.css'
import { StaticImage } from "gatsby-plugin-image"



const About = () => {
  return (
    <div className="about">
     <div className="container">
      <h1 className="text">Sobre-nós</h1>
        <div className="row">
          <div className="about-cont">
            <StaticImage src='../../images/ice-1.jpg'  placeholder="blurred" alt="imagem" className='img'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a 
                scelerisque tortor, id mattis dolor. Fusce quis nibh id lacus
                 tristique rutrum. Nulla egestas vestibulum convallis.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                         a scelerisque tortor, id mattis dolor fusce quis 
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
                 <div className="text-cont">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                         a scelerisque tortor, id mattis dolor fusce quis .
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                         a scelerisque tortor, id mattis dolor fusce quis .
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                         a scelerisque tortor, id mattis dolor fusce quis .
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                 </div>
          </div>
          <div className="about-cont">
            
            
                 <div className="text-cont">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                         a scelerisque tortor, id mattis dolor fusce quis .
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                         a scelerisque tortor, id mattis dolor fusce quis .
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                         a scelerisque tortor, id mattis dolor fusce quis .
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               
                         
                       </p>
                 </div>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Ut a scelerisque tortor, id mattis dolor. Fusce quis
                          nibh id lacus tristique rutrum. Nulla egestas vestibulum 
                          convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Ut a scelerisque tortor, id mattis dolor fusce quis Lorem ipsum dolor 
                          sit amet, consectetur adipiscing elit.
              </p>
              <StaticImage src='../../images/ice-1.jpg'  placeholder="blurred" alt="imagem" className='img1'/>
          </div>
          
        </div>
     </div>
    </div>
  )
}

export default About

