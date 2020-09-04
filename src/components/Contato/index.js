import React from "react"

import {Contato} from "./style"

import {contatos} from "../../imagens"


const Contact = () => {

    return (
        <Contato id='Contato'> 

        <h1>Contato</h1>
        
        <div>

            <a href="https://api.whatsapp.com/send?phone=5551995815232">
                <button>Envie uma mensagem</button>
            </a>
          

            <ul>
                
                {contatos.map(contato => (
                    <li>
                        <img src={contato.imagem} alt="" srcset=""/>
                    </li>
                ))}

            </ul>

        </div>

        <p>Obrigado pelo seu tempo!</p>

    </Contato>
    )
}

export default Contact