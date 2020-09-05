import React, {createContext, useContext, useState} from 'react'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const ThemeContext = createContext({
    tema: dark
})

const ThemeProvider = ({children}) => {
    const [temaAtual, setTemaAtual] = useState(dark)

    function switchTheme (){
        temaAtual === dark ? setTemaAtual(light) : setTemaAtual(dark) 
    }

    return (
        <ThemeContext.Provider value={{switchTheme, tema: temaAtual}}>
             <ThemeContext.Consumer>
                    {children}
            </ThemeContext.Consumer>
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext)

    return context
}

export default ThemeProvider