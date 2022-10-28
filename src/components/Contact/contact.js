import * as React from "react"
import './contact.css'



const Contact = () => {
  return (
   <div className="contact section-padding">
    <div className="container">
        <div className="row">
            <div className="formulario">
               <form>
                <div>
                    <label>Nome</label>
                    <input type='text' placeholder="Digite o seu nome" name="nome" required/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' placeholder="Digite o seu email" name="email" required/>
                </div>
                <div>
                    <label>Mensagem</label>
                    <textarea rows='10'  name="msg"  required/>
                </div>
                <div className="submit">
                    <input type='submit' value='Enviar'/>
                </div>
               </form>
            </div>
        </div>
    </div>
   </div> 

  )
}

export default Contact

