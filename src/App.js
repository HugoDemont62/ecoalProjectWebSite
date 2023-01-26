import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "./component/NavBar";
import RoutesPath from "./component/RoutesPath";
//import Footer from "./component/Footer";

const App: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <RoutesPath />
        </Router>
    );
};

export default App;