import React from "react"


import {Infos, Imagem, Sobre, Skills, Websites, Contato, ListaSkill} from './style'
import bg from "../../assets/bg.png"



import {skills, portfolio, contatos} from "./imagens"

const Home = () => {


    return (
        <>
        <section>
            <Infos>
             <h1>Pablo<br/>Rosa</h1>
             <p>Programador FullStack<br/>18 anos, Osório-RS</p>
            </Infos>

            <Imagem>
                <img src={bg} alt="" srcset=""/>
            </Imagem>
        </section>

        <Sobre>
            <h1>Sobre Mim</h1>
            <p>Hi, I'm Denis – UX/UI designer   from Minsk. 
            <br/>
                I'm interested in design and everything connected with it.
                <br/>
                <br/>
                <br/>
                I'm studying at courses "Web and mobile design 
                interfaces" in IT-Academy.
                <br/>
                <br/>
                <br/>
                Ready to implement excellent projects
                with wonderful people.
            </p>
        </Sobre>

        <Skills>
            <h1>Skills</h1>

            <p>Eu trabalho com aplicativos como:</p>

            <div>

                <ListaSkill>
                   {skills.map(skill => (
                       <li>
                           <img src={skill.imagem} alt="" srcset=""/>
                           <p>{skill.nome}</p>
                       </li>
                   ))}
                </ListaSkill>

            </div>
           
        </Skills>

        <Websites>
            <h1>Websites</h1>
            <ul>
            
                {portfolio.map(portfolio => (
                    <li>
                         <img src={portfolio.imagem} alt="" srcset=""/>
                           <p>{portfolio.spam}</p>
                    </li>
                ))}

            </ul>

        </Websites>

        <Contato>

            <h1>Contatos</h1>
            
            <div>

                <button>Envie uma mensagem</button>

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
        </>
    )
}

export default Home