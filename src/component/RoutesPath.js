import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import PastEdition from "../pages/PastEdition";
import About from "../pages/About";

function RoutesPath() {
    const location = useLocation();
    return (
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>}/>
                <Route path='/pe/:id' element={<PastEdition />}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
    )
}

export default RoutesPath