import styled from "styled-components"

export const Content = styled.header`

width: 65%;
margin: 0 auto;

ul {
    height: 90px;
    padding: 0 5px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 18px;
    font-weight: 400;

    border-bottom: ${props =>props.theme.colors.txtPrimario} 1px solid;

    list-style: none;
}

li {
    color: ${props => props.theme.colors.txtPrimario};
    cursor: pointer;
    transition: .5s;
}

li:hover {
    color: ${props => props.theme.colors.titulo}
}

h3, p {
    display: none;
}


@media(max-width: 600px) {

    position: relative;
    
    ul {
        position: fixed;
        border: none;
        
        height: 100vh;
        width: 100vw;

        font-size: 34px;
        color: ${props =>props.theme.colors.txtPrimario};

        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        
        background-color: ${props => props.theme.colors.primaria};
        
        left: 0;
        top: 0;

        max-height: ${props => props.visible === false ? "100vh" : "0vh"};
        transition: max-height .5s ease-in-out;

    }

    p {
        justify-self: flex-end;
        align-self: flex-end;
        cursor: pointer;
        display: flex;
    }

    p, li {
        display: ${props => props.visible === false ? "flex" : "none"};
        opacity: ${props => props.visible === false ? 1 : 0};
        transition: display, opacity .5s ease-in-out;
        margin: 30px 40px;
    }


    h3 {
        display: flex;

        cursor: pointer;
        position: absolute;

        font-size: 32px;
        right: 0;
    }

}

`