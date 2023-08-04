import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import Dropdown from '../components/Dropdown'
import searchImg from '../assets/images/search-outline-black.svg'
import getData from '../utils/api'
import CoutryCard from '../components/CountryCard'

export async function loader() {
    return defer({countriesPromise:getData() })
}
const Home = ()=> {
    const { countriesPromise } = useLoaderData()

    function RenderCountries(LoadedCountries) {

        const countriesElemenst = LoadedCountries.map((country, index) => {
            return <CoutryCard key={index} country={country}/>
        })

        return (
            <div>
                {countriesElemenst}
            </div>
        )

    }

    return (
        <section className="home">
            <div className="">
                <div>
                    <img src={searchImg} alt="" width='20px'/>
                    <input type="text" name="search" placeholder="Search for a country..."/>
                </div>
                <Dropdown />
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={countriesPromise}>
                    {RenderCountries}
                </Await>
            </Suspense>
        </section>
    )
}

export default Home