import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "./component/NavBar";
import AnimatedRoutes from "./component/AnimatedRoutes";
import Footer from "./component/Footer";

const App: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <AnimatedRoutes />
            <Footer />
        </Router>
    );
};

export default App;