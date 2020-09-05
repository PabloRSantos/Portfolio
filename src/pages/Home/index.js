import React, {useEffect} from "react"
import {Link} from 'react-router-dom'



import Header from '../../components/Header'
import Contact from "../../components/Contato"

import {Infos, Imagem, Sobre, Skills, Websites, ListaItem, Mobile, ScrollLink} from './style'
import bg from "../../assets/bg.png"



import {skills, web, mobile} from "../../utils/imagens"

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
                <img src={bg} alt="background imagem"/>
            </Imagem>
        </section>

        <Sobre id='Sobre'>
            <h1>Sobre Mim</h1>
            <p>Estudante do EM integrado ao Tec. em Informática no IFRS - Campus Osório.
            <br/>
                Sou um programador Javascript full stack
                <br/>
                <br/>
                <br/>
                Atualmente, estou aceitando propostas de emprego ou freelances
                <br/>
                <br/>
                <br/>
                Caso queira me conhecer melhor,{' '}   
                <ScrollLink to='Contato' smooth={true} duration={1000}>clique aqui.</ScrollLink>
            </p>
        </Sobre>

        <Skills id='Habilidades'>
            <h1>Habilidades</h1>

            <p>Eu trabalho com aplicativos como:</p>


                <ul>
                   {skills.map(skill => (
                       <ListaItem key={skill.nome} color={skill.color} porcent={skill.porcent}>
                           <img src={skill.imagem} alt="skill"/>
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
            
                {web.map(web => (
                    <li key={web.id}>
                         <img src={web.capa} alt=""/>
                           <Link to={`/project/web/${web.id}`}>{web.spam}</Link>
                    </li>
                ))}

            </ul>

        </Websites>


        <Mobile id='Mobile'>
            <h1>Aplicativos</h1>
            <ul>
            
                {mobile.map(mobile => (
                    <li key={mobile.id}>
                        <div className='images'>
                            <img src={mobile.capa[0]} alt=""/>
                            <img src={mobile.capa[1]} alt=""/>
                        </div>
                           <Link to={`/project/mobile/${mobile.id}`}>{mobile.spam}</Link>
                    </li>
                ))}

            </ul>

        </Mobile>

        <Contact backgroundColor='secundaria'/>

        </>
    )
}

export default Home