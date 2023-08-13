import React from "react";
import searchImg from '../assets/images/search-outline-black.svg'
import searchImgWhite from '../assets/images/search-outline-white.svg'

const Search = ({ searchCountry })=> (
    <div className="home__nav__input-wrapper">
        <img src={searchImgWhite} alt="" className="home__nav__input-wrapper__search-icon"/>
        <input type="text" name="search" placeholder="Search for a country..." onChange={searchCountry} className="home__nav__input-wrapper__input"/>
    </div>
)

export default Search