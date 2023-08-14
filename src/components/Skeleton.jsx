import React from "react";
const CardSkeleton = ()=> (
    <div className="home-skeleton__cards__card">
        <div className="home-skeleton__cards__card__img"></div>
        <div className="home-skeleton__cards__card__title"></div>
        <div className="home-skeleton__cards__card__text"></div>
        <div className="home-skeleton__cards__card__text"></div>
        <div className="home-skeleton__cards__card__text"></div>
    </div>
)
const HomeSkeleton = ()=> {
    return (
        <div className="home-skeleton">
            <div className="container">
                <div className="home-skeleton__nav">
                    <div className="home-skeleton__nav__search"></div>
                    <div className="home-skeleton__nav__dropdown"></div>
                </div>
                <div className="home-skeleton__cards">
                    {Array.from({ length: 4 }, () => <CardSkeleton />)}
                </div>
            </div>
        </div>
    )
}

export default HomeSkeleton