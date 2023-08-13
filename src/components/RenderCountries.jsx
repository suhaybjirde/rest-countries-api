import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Dropdown from './Dropdown'
import Search from "./Search";
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
                    <Search searchCountry={searchCountry} />
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

