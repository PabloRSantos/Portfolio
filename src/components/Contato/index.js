import React from "react"

import {Contato, EmailIcon, LinkedinIcon, GithubIcon} from "./style"



const Contact = ({backgroundColor}) => {

    return (
        <Contato id='Contato' background={backgroundColor}> 

        <h1>Contato</h1>
        
        <div>

            <a href="https://api.whatsapp.com/send?phone=5551995815232"
            target="_blank"
            rel="noopener noreferrer">
                <button>Envie uma mensagem</button>
            </a>
          

            <ul>

                <li>
                    <a 
                     href='mailto: pablorsantos15@gmail.com'
                     target="_blank"
                     rel="noopener noreferrer">
                        <EmailIcon />
                    </a>
                </li>

                <li>
                    <a 
                      href='https://www.linkedin.com/in/pablo-rosa-68136a1b2/'
                      target="_blank"
                      rel="noopener noreferrer">
                        <LinkedinIcon />
                    </a>
                </li>

                <li>
                    <a 
                      href='https://github.com/PabloRSantos'
                      target="_blank"
                      rel="noopener noreferrer">
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