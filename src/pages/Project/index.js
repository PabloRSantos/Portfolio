import React, {useEffect, useState} from "react"
import {FiArrowLeft} from "react-icons/fi"
import {Link} from "react-router-dom"

import {FiChevronDown} from "react-icons/fi"

import {portfolio} from "../../imagens"
import Contato from "../../components/Contato"

import {Back, Fotos} from "./style"

const Project = (props) => {
    
    const [projects, setProjects] = useState([])
    const [limit, setLimit] = useState(1)
    const [visible, setVisible] = useState(true)

    useEffect(() => {

        let imagens = []

        let id = props.match.params.id

       
        let projects =  portfolio[id].imagem.map(imagem => imagem)

        console.log(projects)


        for(let i = 0; i < limit; i++) {
        
            if(projects[i])
             imagens.push(projects[i])
        }

        console.log(imagens)

        setProjects(imagens)

            if (limit >= projects.length) setVisible(false)


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
                    <img src={project} alt="image"/>
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