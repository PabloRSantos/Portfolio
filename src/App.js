import React from 'react';
import Routes from "./routes"

import GlobalStyle from "./styles/global"
import {ThemeProvider} from "styled-components"
import ThemeProviderContext from './context/theme'
import ThemeSwitcher from './components/ThemeSwitcher'



function App() {


  return (
    <ThemeProviderContext>
      {values => (
          <ThemeProvider theme={values.tema}>
            <GlobalStyle />
            <ThemeSwitcher />
            <Routes/>
          </ThemeProvider>
      )}
    </ThemeProviderContext>
  )
}

export default App;
