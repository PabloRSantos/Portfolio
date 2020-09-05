import React, {useEffect, useState} from "react"
import {FiArrowLeft} from "react-icons/fi"
import {Link} from "react-router-dom"

import {web, mobile} from "../../utils/imagens"
import Contato from "../../components/Contato"

import {Back, Fotos} from "./style"

const Project = (props) => {
    const [projects, setProjects] = useState([])
    let id = props.match.params.id
    let type = props.match.params.type

    useEffect(() => {

        let imagens = type === 'web' ?
            web[id - 1].imagem :
            mobile[id - 1].imagem

        setProjects(imagens)

    }, [id, type])
    
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

        <Fotos type={props.match.params.type}>
            {projects.map((project, index) => (
                
                <li key={index}>
                    <img src={project} alt="imagem"/>
                </li>
            ))}
        </Fotos>

        <Contato backgroundColor='primaria'/>
        </>
    )
}

export default Project