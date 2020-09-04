import React, {useEffect} from "react"
import {Link} from 'react-router-dom'


import Header from '../../components/Header'
import Contact from "../../components/Contato"

import {Infos, Imagem, Sobre, Skills, Websites, ListaItem} from './style'
import bg from "../../assets/bg.png"



import {skills, portfolio} from "../../imagens"

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
          <Header />
        <section>
            <Infos>
             <h1>Pablo<br/>Rosa</h1>
             <p>Programador FullStack<br/>18 anos, Osório-RS</p>
            </Infos>

            <Imagem>
                <img src={bg} alt="" srcset=""/>
            </Imagem>
        </section>

        <Sobre id='Sobre'>
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

        <Skills id='Habilidades'>
            <h1>Skills</h1>

            <p>Eu trabalho com aplicativos como:</p>


                <ul>
                   {skills.map(skill => (
                       <ListaItem color={skill.color} porcent={skill.porcent}>
                           <img src={skill.imagem} alt="" srcset=""/>
                           <div>
                                <p>{skill.nome} - {skill.porcent}%</p>
                                <div/>
                           </div>
                       </ListaItem>
                   ))}
                </ul>

           
        </Skills>

        <Websites id='Websites'>
            <h1>Websites</h1>
            <ul>
            
                {portfolio.map(portfolio => (
                    <li>
                         <img src={portfolio.capa} alt="" srcset=""/>
                           <Link to={`/project/${portfolio.id}`}>{portfolio.spam}</Link>
                    </li>
                ))}

            </ul>

        </Websites>

        <Contact />

        </>
    )
}

export default Home