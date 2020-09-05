import React from "react"

import {Contato, EmailIcon, LinkedinIcon, GithubIcon} from "./style"



const Contact = () => {

    return (
        <Contato id='Contato'> 

        <h1>Contato</h1>
        
        <div>

            <a href="https://api.whatsapp.com/send?phone=5551995815232">
                <button>Envie uma mensagem</button>
            </a>
          

            <ul>

                <li>
                    <a 
                     href='mailto: pablorsantos15@gmail.com'
                     target="_blank">
                        <EmailIcon />
                    </a>
                </li>

                <li>
                    <a 
                      href='https://www.linkedin.com/in/pablo-rosa-68136a1b2/'
                      target="_blank">
                        <LinkedinIcon />
                    </a>
                </li>

                <li>
                    <a 
                      href='https://github.com/PabloRSantos'
                      target="_blank">
                        <GithubIcon />
                    </a>
                </li>


            </ul>

        </div>

        <p>Obrigado pelo seu tempo!</p>

    </Contato>
    )
}

export default Contact