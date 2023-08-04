import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import RenderCountries from "../components/RenderCountries";
import getData from '../utils/api'

export async function loader() {
    return defer({countriesPromise:getData() })
}
const Home = ()=> {
    const { countriesPromise } = useLoaderData()


    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Await resolve={countriesPromise}>
                {RenderCountries}
            </Await>
        </Suspense>
    )
}

export default Home