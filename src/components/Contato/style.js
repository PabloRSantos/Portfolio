import styled, {css} from "styled-components"
import { 
     AiOutlineMail,
     AiFillLinkedin,
     AiFillGithub } from "react-icons/ai";


export const Contato = styled.section`

    padding: 100px 20%;
    height: 100vh;

    display: flex;
        flex-direction: column;
        align-items: center;
         justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
         justify-content: center;
    }

    h1 {
        font-weight: 600;
        font-size: 34px;
        text-align: center;
        margin-bottom: 50px;
        color: ${props => props.theme.colors.titulo};
    }

    button {
        background-color: ${props => props.theme.colors.bgButton};
        border: 1px solid ${props => props.theme.colors.bgButton};

        border-radius: 10px;

        outline: none;
        padding: 10px 20px;

        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;

        color: ${props => props.theme.colors.primaria};

        cursor: pointer;

        transition: .3s;

        &:hover {
            background-color: ${props => props.theme.colors.primaria};
            color: ${props => props.theme.colors.bgButton};
        }
        
    }

    ul {
        display: flex;
        
        list-style: none;
    }

    ul li {
        margin: 40px 25px 0;
        cursor: pointer;
        width: 33%;
    }

    p {
        text-align:center;
        color: ${props => props.theme.colors.txtPrimario};
        font-weight: 400;
        font-size: 18px;
    }
`
const Icons = css`
    color: ${props => props.theme.colors.titulo};
    cursor: pointer;
`

export const EmailIcon = styled(AiOutlineMail).attrs({
    size: 40
})`
    ${Icons}
`

export const LinkedinIcon = styled(AiFillLinkedin).attrs({
    size: 40
})`
    ${Icons}


`

export const GithubIcon = styled(AiFillGithub).attrs({
    size: 40
})`
    ${Icons}

`
