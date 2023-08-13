import { createContext, useEffect, useState } from "react";

const themeContext = createContext()
const ThemeProvider = ({ children })=> {
    const [theme, setTheme] = useState(()=> localStorage.getItem('theme') || 'dark');

    const toggleTheme = ()=> {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    useEffect(()=> {
        localStorage.setItem('theme', theme)
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <themeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </themeContext.Provider>
    )
}
export { ThemeProvider }
export default themeContext

