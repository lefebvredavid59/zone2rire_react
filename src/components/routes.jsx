import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';

import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const index = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/{slug}" element={<Register />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default index;