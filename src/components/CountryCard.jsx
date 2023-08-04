import React from "react";

const Card = ({ country })=> {
    
    return (
        <article className="country-card">
            <img src={country.flags.png} alt="country flag" className="country-card__img"/>
            <div className="country-card__info">
                <h2 className="country-card__info__title">{country.name.common}</h2>
                <div className="country-card__info__detail">
                    <strong>Population</strong>
                    <span>{country.population}</span>
                </div>
                <div className="country-card__info__detail">
                    <strong>Region</strong>
                    <span>{country.region}</span>
                </div>
                <div className="country-card__info__detail">
                    <strong>Capital</strong>
                    <span>{country.capital}</span>
                </div>
            </div>
        </article>
    )
}

export default Card