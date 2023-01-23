import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import PastEdition from "../pages/PastEdition";
import About from "../pages/About";

import {AnimatePresence} from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>}/>
                <Route path='/pe' element={<PastEdition/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes