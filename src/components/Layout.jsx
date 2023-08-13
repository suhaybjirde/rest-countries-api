import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";


const Layout = ()=> {
    return (
        <ThemeProvider>
            <Header />
            <main>
                <Outlet />  
            </main>
        </ThemeProvider>
    )
}

export default Layout