import React, {useEffect, useState} from "react"
import {FiArrowLeft} from "react-icons/fi"
import {Link} from "react-router-dom"

import {portfolio} from "../../imagens"
import Contato from "../../components/Contato"

import {Back, Fotos} from "./style"

const Project = (props) => {
    
    const [projects, setProjects] = useState([])

    useEffect(() => {

        let id = props.match.params.id

       
        let imagens =  portfolio[id - 1].imagem.map(imagem => imagem)
        
        setProjects(imagens)

    }, [])
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        
        <Back>
            <Link to="/"> 
                <FiArrowLeft size={24}/>
                <h3>Voltar</h3>
            </Link>
         </Back>

        <Fotos>
            {projects.map((project, index) => (
                
                <li key={index}>
                    <img src={project} alt="image"/>
                </li>
            ))}
        </Fotos>

        <Contato />
        </>
    )
}

export default Project