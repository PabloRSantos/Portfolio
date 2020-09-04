import React, {useState} from "react"
import {Link} from 'react-scroll'
import {Content, HamburguerMenu} from "./style"


const Header = () => {

    const [visible, setVisible] = useState(true)

    function handleVisible(){
        
        if(window.innerWidth <= 600)
        visible === true ? setVisible(false) : setVisible(true)

    }

    return (
        <Content visible={visible}>
            <h3>
                <HamburguerMenu onClick={handleVisible}/>
            </h3>
            <ul>
                <p onClick={handleVisible}>X</p>
                <Link to='Sobre' onClick={handleVisible} smooth={true} duration={1000}> <li>Sobre Mim</li></Link>
                <Link to='Habilidades' onClick={handleVisible} smooth={true} duration={1000}> <li>Habilidades</li></Link>
                <Link to='Websites' onClick={handleVisible} smooth={true} duration={1000}> <li>Websites</li></Link>
                <Link to='Mobile' onClick={handleVisible} smooth={true} duration={1000}> <li>Aplicativos</li></Link>
                <Link to='Contato' onClick={handleVisible} smooth={true} duration={1000}> <li>Contato</li></Link>
            </ul>
        </Content>
    )
}

export default Header