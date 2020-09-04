import styled from "styled-components"

export const Back = styled.div`

    padding: 50px 20%;
    display: flex;
    align-items: center;

    background-color: ${props => props.theme.colors.secundaria};
   

    a {
        text-decoration: none;
        display: flex;
        color: ${props => props.theme.colors.txtPrimario};
    }

    h3 {
        font-size: 24px;
        margin-left: 5px;
    }
`

export const Fotos = styled.div`
    
    margin: 0 auto;
    padding: 0 20% 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.theme.colors.secundaria};

    list-style: none;

    li {
        padding: 50px 0;
    }

    img {
        max-width: 100%;
        max-height: 600px;
    }

    h3 {
        color: ${props => props.theme.colors.txtPrimario};
        font-size: 50px;
    }
`
