import React from 'react';
import Routes from "./routes"

import GlobalStyle from "./styles/global"
import {ThemeProvider} from "styled-components"
import light from './styles/themes/light'


function App() {
  return (
    <ThemeProvider theme={light}>
    <GlobalStyle />
    <Routes />
    </ThemeProvider>
  )
}

export default App;
