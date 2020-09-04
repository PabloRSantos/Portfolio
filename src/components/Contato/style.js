import styled from "styled-components"

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

        border: none;
        border-radius: 10px;

        outline: none;
        padding: 10px 20px;

        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;

        color: ${props => props.theme.colors.primaria};

        cursor: pointer;
        
    }

    ul {
        display: flex;
        
        list-style: none;
    }

    ul li {
        margin: 40px 25px 0;
        cursor: pointer;
    }

    p {
        text-align:center;
        color: ${props => props.theme.colors.txtPrimario};
        font-weight: 400;
        font-size: 18px;
    }
`