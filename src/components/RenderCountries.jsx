import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Dropdown from './Dropdown'
import searchImg from '../assets/images/search-outline-black.svg'
import CoutryCard from './CountryCard'

const RenderCountries = (LoadedCountries)=> {
    const [searchedCountry, setSearchCountry] = useState('')
    const [searchParamas, setSearchParamas] = useSearchParams()
    const filterByRegion = searchParamas.get('filter') || ''

    function searchCountry(event) {
        const { value } = event.target
        setSearchCountry(value)
    }

    function handleFilterChange(value) {
        setSearchParamas(value)
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
            <div className="">
                <div>
                    <img src={searchImg} alt="" width='20px'/>
                    <input type="text" name="search" placeholder="Search for a country..." onChange={searchCountry}/>
                </div>
                <Dropdown handleFilterChange={handleFilterChange} region={filterByRegion} />
            </div>
            <div className="coutries">
                {countriesElemenst}
            </div>
        </section>
    )

}

export default RenderCountries

