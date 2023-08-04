import React from "react";
import FilledMoonImg from '../assets/images/moon.svg'

const Header = ()=> {
    
    return (
        <header className="header">
            <h1 className="logo">Where in the world</h1>
            <button className="theme-toggler">
                <img src={FilledMoonImg} alt="" width='20px'/>
                <span>Dark Mode</span>
            </button>
        </header>
    )
}
export default Header