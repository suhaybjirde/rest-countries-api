import React, { useContext } from "react";
import FilledMoonImg from '../assets/images/moon.svg'
import themeContext from "../context/ThemeContext";

const Header = ()=> {
    const { theme, toggleTheme } = useContext(themeContext)
    
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__logo">Where in the world?</h1>
                <button onClick={() => toggleTheme()} className="header__theme-toggler">
                    <img src={FilledMoonImg} alt="" className={`header__theme-toggler__img ${theme}`}/>
                    <span className="header__theme-toggler__text">{theme == 'dark' ? 'Light' : 'Dark'} Mode</span>
                </button>
            </div>
        </header>
    )
}
export default Header