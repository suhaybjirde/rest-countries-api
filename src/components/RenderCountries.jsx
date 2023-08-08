import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Dropdown from './Dropdown'
import searchImg from '../assets/images/search-outline-black.svg'
import searchImgWhite from '../assets/images/search-outline-white.svg'
import CoutryCard from './CountryCard'

const RenderCountries = (LoadedCountries)=> {
    const [searchedCountry, setSearchCountry] = useState('')
    const [searchParamas] = useSearchParams()
    const filterByRegion = searchParamas.get('filter') || ''

    function searchCountry(event) {
        const { value } = event.target
        setSearchCountry(value)
    }

    const countriesElemenst = 
        LoadedCountries
            .filter(country => (country.region).toLowerCase().includes(filterByRegion))
            .filter(country => (country.name.common).toLowerCase().includes(searchedCountry.toLowerCase()))
            .map((country, index) => {
                return <CoutryCard key={index} country={country}/>
            })

    return (
        <section className="home">
            <div className="container">
                <div className="home__nav">
                    <div className="home__nav__input-wrapper">
                        <img src={searchImgWhite} alt="" className="home__nav__input-wrapper__search-icon"/>
                        <input type="text" name="search" placeholder="Search for a country..." onChange={searchCountry} className="home__nav__input-wrapper__input"/>
                    </div>
                    <Dropdown />
                </div>
                <div className="home__coutry-card-container">
                    {countriesElemenst}
                </div>
            </div>
        </section>
    )

}

export default RenderCountries

