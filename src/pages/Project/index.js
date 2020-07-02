import React, {useEffect, useState} from "react"
import {FiArrowLeft} from "react-icons/fi"
import {Link} from "react-router-dom"

import {FiChevronDown} from "react-icons/fi"

import {portfolio} from "../../imagens"
import Contato from "../../components/Contato"

import {Back, Fotos} from "./style"

const Project = () => {
    
    const [projects, setProjects] = useState([])
    const [limit, setLimit] = useState(1)
    const [visible, setVisible] = useState(true)

    useEffect(() => {

        let newProjects = []

        for(let i = 0; i < limit; i++) {
            
            if(portfolio[i]){
            newProjects.push(portfolio[i])
            setProjects(newProjects)
            }

        }

        if (limit >= portfolio.length) setVisible(false)


    }, [limit])
    
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

        <Fotos visible={visible}>
            {projects.map(project => (
                <li>
                    <img src={project.imagem} alt="image"/>
                </li>
            ))}

            <h3>
                <FiChevronDown className="setaDown" onClick={() => setLimit(limit + 2)}/>
            </h3>
        </Fotos>

        <Contato />
        </>
    )
}

export default Project