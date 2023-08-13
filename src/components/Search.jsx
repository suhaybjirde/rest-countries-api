import React, { useContext } from "react";
import themeContext from "../context/ThemeContext";
import searchImg from '../assets/images/search-outline-black.svg'
import searchImgWhite from '../assets/images/search-outline-white.svg'

const Search = ({ searchCountry })=> {
    const { theme } = useContext(themeContext)
    
    return (
        <div className="home__nav__input-wrapper">
            <img src={theme == 'dark' ? searchImgWhite : searchImg} alt="" className="home__nav__input-wrapper__search-icon"/>
            <input type="text" name="search" placeholder="Search for a country..." onChange={searchCountry} className="home__nav__input-wrapper__input"/>
        </div>
    )
}

export default Search