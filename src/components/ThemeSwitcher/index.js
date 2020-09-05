import React, {useState, useCallback} from 'react';

import { Container } from './styles';

import {useTheme} from '../../context/theme'

function ThemeSwitcher() {
    const [tema, setTema] = useState('dark')

    const {switchTheme} = useTheme()

   const themeChange = useCallback(() => {
       switchTheme()
        tema === 'dark' ? setTema('light') : setTema('dark')
   }) 

  return (
      <Container onClick={themeChange} tema={tema}>
          <div id="dark">
              <p>
                  Dark
              </p>
          </div>

          <div id="light">
              <p>
                  Light
              </p>
          </div>
      </Container>
  )
}

export default ThemeSwitcher;