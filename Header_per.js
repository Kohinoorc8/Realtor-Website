import React from "react";
import './Header_per.css'
import { Link } from "react-router-dom";
import logo from './Maxvalue (1).jpg';

function Header_per() { /* Creating a navgation bar at the top of the page allowing user to switch between different pages */
    return (
        <nav className="navbar">
            {/* Linking Image to Homepage */}
            <div className="navbar-logo">  
                <Link to="/">
                    <img src={logo} alt="MaxValue Reality"/>
                </Link>
            </div>
            {/* Linking Headers to various pages */}
            <div className="navbar-options">
                <Link to="/buy">
                    <h3>Buy</h3>
                </Link>
                <Link to="/sell">
                    <h3>Sell</h3>
                </Link>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
                <Link to="/contact"> 
                    <h3>Contact</h3>
                </Link>
            </div>
            <div className="navbar-call">
                {/* The tel keyword allows user to place a call, if we use sms keyword it will text */}
                <h3><a href="tel:5877009991">Call us today 587-700-9991</a></h3>
            </div>
        </nav>
    );
}

export default Header_per;