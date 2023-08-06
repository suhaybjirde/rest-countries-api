import React from "react";
import FilledMoonImg from '../assets/images/moon.svg'

const Header = ()=> {
    
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__logo">Where in the world</h1>
                <button className="header__theme-toggler">
                    <img src={FilledMoonImg} alt="" className="header__theme-toggler__img"/>
                    <span className="header__theme-toggler__text">Dark Mode</span>
                </button>
            </div>
        </header>
    )
}
export default Header