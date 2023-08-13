import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import getData from "../utils/api";

export async function loader({ request }) {
    const params = new URL(request.url).searchParams.get('country')
    const countries = await getData()
    return {countries, params}
}

const CountryDetails = ()=> {
    const {countries, params} = useLoaderData()
    const country = countries.filter(country => (country.name.common).toLowerCase() === params.toLowerCase())[0]

    function borders() {
        const borderCountriesNames = country.borders

        if (!borderCountriesNames) return null;

        const borderCountries = [];
        countries
            .forEach(country => {
                borderCountriesNames.forEach(value => {
                    if (value === country.cca3) borderCountries.push(country)
                })
            })
        return borderCountries
    }
    const borderCountries = borders()
    const borderCountriesElements = borderCountries?.map((country, index) => {
        return <Link to={`/country-details?country=${country.name.common}`} key={index}>{country.name.common}</Link>
    })

    const countryLanguagesElements = (Object.values(country.languages))
        .map((language, index, array) => <span key={index}>{language}{language === (array[array.length  -1]) ? '' : ','} </span>)

    return (
        <section className="country-details">
            <div className="container">
                <Link to='/' className="country-details__back-link">&larr; Back</Link>

                <article className="country-details__country-detail">
                    <img src={country.flags.png} alt="country flag" className="country-details__country-detail__img"/>
                    <div className="country-details__country-detail__info">
                        <h2 className="country-details__country-detail__info__title">{country.name.common}</h2>
                        <div className="two-columns">
                            <div className="country-details__country-detail__info__props">
                                <strong>Native Name: </strong>
                                <span>{Object.values(country.name.nativeName)[0].official}</span>
                            </div>
                            <div className="country-details__country-detail__info__props">
                                <strong>Population: </strong>
                                <span>{country.population}</span>
                            </div>
                            <div className="country-details__country-detail__info__props">
                                <strong>Region: </strong>
                                <span>{country.region}</span>
                            </div>
                            <div className="country-details__country-detail__info__props">
                                <strong>Sub Region: </strong>
                                <span>{country.subregion}</span>
                            </div>
                            <div className="country-details__country-detail__info__props">
                                <strong>Capital: </strong>
                                <span>{country.capital}</span>
                            </div>
                            <div className="country-details__country-detail__info__props">
                                <strong>Top Level Domain: </strong>
                                <span>{country.tld[0]}</span>
                            </div>
                            <div className="country-details__country-detail__info__props">
                                <strong>Currencies: </strong>
                                <span>{Object.values(country.currencies)[0].name}</span>
                            </div>
                            <div className="country-details__country-detail__info__props">
                                <strong>Languages: </strong>
                                <span>{countryLanguagesElements}</span>
                            </div>
                        </div>
                        {
                        borderCountriesElements && 
                            (
                                <div className="country-details__country-detail__info__border-countries">
                                    <strong>Border Countries: </strong>
                                    <span>{borderCountriesElements}</span>
                                </div>
                            )
                        }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default CountryDetails