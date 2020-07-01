import React from "react"
import {Link} from 'react-scroll'
import {Content} from "./style"

const Header = () => {

    return (
        <Content>
            <ul>
                <Link to='Sobre' smooth={true} duration={1000}> <li>Sobre Mim</li></Link>
                <Link to='Habilidades' smooth={true} duration={1000}> <li>Habilidades</li></Link>
                <Link to='Websites' smooth={true} duration={1000}> <li>Websites</li></Link>
                <Link to='Contato' smooth={true} duration={1000}> <li>Contato</li></Link>
            </ul>
        </Content>
    )
}

export default Header