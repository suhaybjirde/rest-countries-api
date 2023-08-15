import React from "react";
import { Link } from "react-router-dom";

const NotFound = ()=> {
    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <h2 className="not-found__message">Page Not Found</h2>  
            <Link to='/' className="not-found__link"> &larr; Back to home</Link>
        </section>
    )
}

export default NotFound