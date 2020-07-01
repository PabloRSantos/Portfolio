import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.primaria};
    font-family: 'Roboto', sans-serif;
}

body::-webkit-scrollbar {
    background-color: ${props => props.theme.colors.secundaria};
    width: 12px;
  }

body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.txtPrimario};
    border-radius: 5px;

}

`