import styled from "styled-components"

export const Content = styled.header`

ul {
    width: 65%;
    height: 90px;
    margin: 0 auto;
    padding: 0 5px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 18px;
    font-weight: 400;

    border-bottom: ${props =>props.theme.colors.txtSecundario} 1px solid;

    list-style: none;
}

li {
    cursor: pointer;
    transition: .5s;
}

li:hover {
    color: ${props => props.theme.colors.txtPrimario}
}

`